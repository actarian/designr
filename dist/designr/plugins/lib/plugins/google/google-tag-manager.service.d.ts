import { NgZone } from '@angular/core';
import { Logger, OnceService } from '@designr/core';
import { Observable } from 'rxjs';
import { PluginsService } from '../../config/plugins.service';
import * as i0 from "@angular/core";
export declare class GoogleTagManagerPageViewEvent {
    dataLayer: any[];
    url: string;
}
export declare class GoogleTagManagerConfig {
    id: string;
}
export declare class GoogleTagManagerService {
    private platformId;
    private pluginsService;
    private zone;
    private onceService;
    private logger;
    options: GoogleTagManagerConfig;
    private dataLayer;
    private dataLayer$;
    constructor(platformId: string, pluginsService: PluginsService, zone: NgZone, onceService: OnceService, logger: Logger);
    private init;
    once(): Observable<any[]>;
    push(payload: any): void;
    static ɵfac: i0.ɵɵFactoryDef<GoogleTagManagerService>;
    static ɵprov: i0.ɵɵInjectableDef<GoogleTagManagerService>;
}
