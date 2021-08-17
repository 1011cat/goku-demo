/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Direction } from '@angular/cdk/bidi';
import { Platform } from '@angular/cdk/platform';
import { ChangeDetectorRef, ElementRef, NgZone, OnChanges } from '@angular/core';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { Observable } from 'rxjs';
import { NzIconRenderTemplate, NzShowUploadList, NzUploadFile, NzUploadListType } from './interface';
import * as ɵngcc0 from '@angular/core';
declare type UploadListIconType = '' | 'uploading' | 'thumbnail';
interface UploadListFile extends NzUploadFile {
    isImageUrl?: boolean;
    isUploading?: boolean;
    iconType?: UploadListIconType;
    showDownload?: boolean;
}
export declare class NzUploadListComponent implements OnChanges {
    private cdr;
    private doc;
    private ngZone;
    private platform;
    private elementRef;
    list: UploadListFile[];
    private get showPic();
    locale: NzSafeAny;
    listType: NzUploadListType;
    set items(list: NzUploadFile[]);
    icons: NzShowUploadList;
    onPreview?: (file: NzUploadFile) => void;
    onRemove: (file: NzUploadFile) => void;
    onDownload?: (file: NzUploadFile) => void;
    previewFile?: (file: NzUploadFile) => Observable<string>;
    previewIsImage?: (file: NzUploadFile) => boolean;
    iconRender: NzIconRenderTemplate | null;
    dir: Direction;
    private genErr;
    private extname;
    isImageUrl(file: NzUploadFile): boolean;
    private getIconType;
    private previewImage;
    private genThumb;
    private showDownload;
    private fixData;
    handlePreview(file: NzUploadFile, e: Event): void;
    handleRemove(file: NzUploadFile, e: Event): void;
    handleDownload(file: NzUploadFile): void;
    constructor(cdr: ChangeDetectorRef, doc: NzSafeAny, ngZone: NgZone, platform: Platform, elementRef: ElementRef);
    detectChanges(): void;
    ngOnChanges(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NzUploadListComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NzUploadListComponent, "nz-upload-list", ["nzUploadList"], { "locale": "locale"; "iconRender": "iconRender"; "dir": "dir"; "items": "items"; "listType": "listType"; "icons": "icons"; "onPreview": "onPreview"; "onRemove": "onRemove"; "onDownload": "onDownload"; "previewFile": "previewFile"; "previewIsImage": "previewIsImage"; }, {}, never, never>;
}
export {};

//# sourceMappingURL=upload-list.component.d.ts.map