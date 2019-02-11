import { AfterViewInit, ElementRef } from '@angular/core';
import { DisposableComponent } from '@designr/core';
import { PluginsService } from '../../config/plugins.service';
import { TrustPilotConfig, TrustPilotService } from './trustpilot.service';
export declare class TrustPilotWidgetOptions {
    templateId?: string;
    businessunitId?: string;
    businessunitName?: string;
    locale?: string;
    sku?: string;
    styleHeight?: string;
    styleWidth?: string;
    theme?: string;
    group?: string;
    stars?: string;
    constructor(options?: TrustPilotWidgetOptions);
    static newFromConfig(options?: TrustPilotConfig): TrustPilotWidgetOptions;
    set?(options?: TrustPilotWidgetOptions): TrustPilotWidgetOptions;
}
export declare class TrustPilotWidgetComponent extends DisposableComponent implements AfterViewInit {
    private platformId;
    private pluginsService;
    private elementRef;
    private trustPilot;
    loaded: boolean;
    trustPilotOptions: TrustPilotConfig;
    options?: TrustPilotWidgetOptions;
    sku?: string;
    constructor(platformId: string, pluginsService: PluginsService, elementRef: ElementRef, trustPilot: TrustPilotService);
    private init;
    ngAfterViewInit(): void;
}
