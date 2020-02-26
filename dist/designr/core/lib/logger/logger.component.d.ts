import { OnInit } from '@angular/core';
import { Logger } from './logger.service';
import * as i0 from "@angular/core";
export declare class LoggerComponent implements OnInit {
    logger: Logger;
    constructor(logger: Logger);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDef<LoggerComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<LoggerComponent, "core-logger", never, {}, {}, never>;
}
