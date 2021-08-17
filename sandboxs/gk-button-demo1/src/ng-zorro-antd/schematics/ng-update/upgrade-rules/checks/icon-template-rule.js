"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IconTemplateRule = void 0;
const schematics_1 = require("@angular/cdk/schematics");
const elements_1 = require("../../../utils/ng-update/elements");
class IconTemplateRule extends schematics_1.Migration {
    constructor() {
        super(...arguments);
        this.enabled = this.targetVersion === schematics_1.TargetVersion.V9;
    }
    visitTemplate(template) {
        elements_1.findElementWithClassName(template.content, 'anticon', 'i')
            .forEach(offset => {
            this.failures.push({
                filePath: template.filePath,
                position: template.getCharacterAndLineOfPosition(offset),
                message: `Found deprecated css selector "i.anticon" component. Use "i[nz-icon]" to instead please.`
            });
        });
    }
}
exports.IconTemplateRule = IconTemplateRule;
//# sourceMappingURL=icon-template-rule.js.map