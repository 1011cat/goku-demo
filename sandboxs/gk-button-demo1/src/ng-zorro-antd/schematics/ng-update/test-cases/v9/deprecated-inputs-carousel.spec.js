"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular-devkit/core");
const testing_1 = require("@angular-devkit/core/node/testing");
const schematics_1 = require("@angular-devkit/schematics");
const testing_2 = require("@angular-devkit/schematics/testing");
const shx = require("shelljs");
const config_1 = require("../config");
describe('carousel migration', () => {
    let runner;
    let host;
    let tree;
    let tmpDirPath;
    let previousWorkingDir;
    let warnOutput;
    beforeEach(() => {
        runner = new testing_2.SchematicTestRunner('test', require.resolve('../../../migration.json'));
        host = new testing_1.TempScopedNodeJsSyncHost();
        tree = new testing_2.UnitTestTree(new schematics_1.HostTree(host));
        writeFile('/tsconfig.json', JSON.stringify(config_1.SchematicsTestTsConfig));
        writeFile('/angular.json', JSON.stringify(config_1.SchematicsTestNGConfig));
        warnOutput = [];
        runner.logger.subscribe(logEntry => {
            if (logEntry.level === 'warn') {
                warnOutput.push(logEntry.message);
            }
        });
        previousWorkingDir = shx.pwd();
        tmpDirPath = core_1.getSystemPath(host.root);
        shx.cd(tmpDirPath);
        writeFakeAngular();
    });
    afterEach(() => {
        shx.cd(previousWorkingDir);
        shx.rm('-r', tmpDirPath);
    });
    function writeFakeAngular() { writeFile('/node_modules/@angular/core/index.d.ts', ``); }
    function writeFile(filePath, contents) {
        host.sync.write(core_1.normalize(filePath), core_1.virtualFs.stringToFileBuffer(contents));
    }
    // tslint:disable-next-line:no-any
    function runMigration() {
        return __awaiter(this, void 0, void 0, function* () {
            yield runner.runSchematicAsync('migration-v9', {}, tree).toPromise();
        });
    }
    describe('Carousel', () => {
        it('should properly report invalid deprecated input', () => __awaiter(void 0, void 0, void 0, function* () {
            writeFile('/index.ts', `;
      import {Component} from '@angular/core'
      @Component({
        template: \`
          <nz-carousel [nzVertical]="true"></nz-carousel>
          <nz-carousel nzVertical></nz-carousel>
        \`
      })
      export class MyComp {
      }`);
            yield runMigration();
            expect(warnOutput).toContain('/index.ts@6:24 - Found deprecated "[nzVertical]" input. Use "[nzDotPosition]" to ' +
                'instead please.');
            expect(warnOutput).toContain('/index.ts@5:25 - Found deprecated "[nzVertical]" input. Use "[nzDotPosition]" to ' +
                'instead please.');
        }));
    });
});
//# sourceMappingURL=deprecated-inputs-carousel.spec.js.map