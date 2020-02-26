import { OnceService } from '@designr/core';
import { Observable } from 'rxjs';
import { PluginsService } from '../../config/plugins.service';
import * as i0 from "@angular/core";
export declare class PayPalConfigStyle {
    label?: string;
    size?: string;
    shape?: string;
    color?: string;
}
export declare class PayPalConfigClient {
    sandbox: string;
    production: string;
}
export declare class PayPalConfig {
    env: string;
    style?: PayPalConfigStyle;
    client: PayPalConfigClient;
    commit?: boolean;
    sandboxFacilitator?: string;
    payment?: Function;
    onAuthorize?: Function;
}
export declare class PayPalService {
    private platformId;
    private pluginsService;
    private onceService;
    options: PayPalConfig;
    private paypal;
    private paypal$;
    constructor(platformId: string, pluginsService: PluginsService, onceService: OnceService);
    private init;
    once(): Observable<any>;
    render(options: any, selector?: string): Observable<any[]>;
    private getOptions;
    static ɵfac: i0.ɵɵFactoryDef<PayPalService>;
    static ɵprov: i0.ɵɵInjectableDef<PayPalService>;
}
