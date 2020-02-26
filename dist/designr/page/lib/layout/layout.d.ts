import { TemplateRef, Type } from '@angular/core';
import { Page } from '../page/page';
import * as i0 from "@angular/core";
export declare class ILayoutComponent {
    template: TemplateRef<any>;
    page?: Page;
    static ɵfac: i0.ɵɵFactoryDef<ILayoutComponent>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<ILayoutComponent, never, never, { "template": "template"; }, {}, never>;
}
export interface Layouts {
    [key: string]: Type<ILayoutComponent>;
}
