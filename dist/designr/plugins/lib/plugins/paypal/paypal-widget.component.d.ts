import { AfterViewInit } from '@angular/core';
import { DisposableComponent } from '@designr/core';
import { PayPalConfig, PayPalService } from './paypal.service';
export declare class PayPalWidgetComponent extends DisposableComponent implements AfterViewInit {
    private platformId;
    private paypalService;
    paypalOptions: PayPalConfig;
    loaded: boolean;
    constructor(platformId: string, paypalService: PayPalService);
    ngAfterViewInit(): void;
}
