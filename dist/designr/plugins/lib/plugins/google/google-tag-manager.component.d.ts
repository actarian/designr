import { AfterViewInit, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { DisposableComponent } from '@designr/core';
import { PluginsService } from '../../config/plugins.service';
import { GoogleTagManagerService } from './google-tag-manager.service';
export declare class GoogleTagManagerComponent extends DisposableComponent implements AfterViewInit {
    private platformId;
    private pluginsService;
    private router;
    private googleTagManager;
    useIframe: boolean;
    id: string;
    iframeUrl: string;
    dataLayer: any[];
    pageView: EventEmitter<{}>;
    constructor(platformId: string, pluginsService: PluginsService, router: Router, googleTagManager: GoogleTagManagerService);
    ngAfterViewInit(): void;
}
