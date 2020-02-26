import { ElementRef, OnChanges } from '@angular/core';
import * as i0 from "@angular/core";
export declare class JsonFormatterComponent implements OnChanges {
    private platformId;
    input: ElementRef;
    json: Array<any> | Object | any;
    elementRef: ElementRef;
    constructor(platformId: string);
    ngOnChanges(): void;
    static ɵfac: i0.ɵɵFactoryDef<JsonFormatterComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<JsonFormatterComponent, "json-formatter", never, { "json": "json"; }, {}, never>;
}
