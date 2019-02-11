import { ElementRef, OnChanges } from '@angular/core';
export declare class JsonFormatterComponent implements OnChanges {
    private platformId;
    input: ElementRef;
    json: Array<any> | Object | any;
    elementRef: ElementRef;
    constructor(platformId: string);
    ngOnChanges(): void;
}
