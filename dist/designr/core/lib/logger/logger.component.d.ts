import { OnInit } from '@angular/core';
import { Logger } from './logger.service';
export declare class LoggerComponent implements OnInit {
    logger: Logger;
    constructor(logger: Logger);
    ngOnInit(): void;
}
