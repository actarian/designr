import { AfterViewInit, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { DisposableComponent } from '@designr/core';
import { PluginsService } from '../../config/plugins.service';
import { GoogleTagManagerService } from './google-tag-manager.service';
import * as i0 from "@angular/core";
export declare class GoogleTagManagerComponent extends DisposableComponent implements AfterViewInit {
    private platformId;
    private pluginsService;
    private router;
    private googleTagManager;
    useIframe: boolean;
    id: string;
    iframeUrl: string;
    dataLayer: any[];
    pageView: EventEmitter<any>;
    constructor(platformId: string, pluginsService: PluginsService, router: Router, googleTagManager: GoogleTagManagerService);
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDef<GoogleTagManagerComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<GoogleTagManagerComponent, "core-google-tag-manager", never, {}, { "pageView": "pageView"; }, never>;
}
