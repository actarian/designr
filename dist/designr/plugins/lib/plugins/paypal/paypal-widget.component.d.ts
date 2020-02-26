import { AfterViewInit } from '@angular/core';
import { DisposableComponent } from '@designr/core';
import { PayPalConfig, PayPalService } from './paypal.service';
import * as i0 from "@angular/core";
export declare class PayPalWidgetComponent extends DisposableComponent implements AfterViewInit {
    private platformId;
    private paypalService;
    paypalOptions: PayPalConfig;
    loaded: boolean;
    constructor(platformId: string, paypalService: PayPalService);
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDef<PayPalWidgetComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<PayPalWidgetComponent, "plugins-paypal-widget-component", never, { "paypalOptions": "paypalOptions"; }, {}, never>;
}
