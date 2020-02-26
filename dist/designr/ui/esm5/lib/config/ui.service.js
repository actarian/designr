import { Inject, Injectable } from '@angular/core';
import { UIConfig, UI_CONFIG } from './ui.config';
import * as i0 from "@angular/core";
import * as i1 from "./ui.config";
var UIService = /** @class */ (function () {
    function UIService(options) {
        // console.log('UIService', options);
        options = options || {};
        this.options = new UIConfig(options);
    }
    UIService.ɵfac = function UIService_Factory(t) { return new (t || UIService)(i0.ɵɵinject(UI_CONFIG)); };
    UIService.ɵprov = i0.ɵɵdefineInjectable({ token: UIService, factory: UIService.ɵfac, providedIn: 'root' });
    return UIService;
}());
export { UIService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(UIService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.UIConfig, decorators: [{
                type: Inject,
                args: [UI_CONFIG]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL3VpLyIsInNvdXJjZXMiOlsibGliL2NvbmZpZy91aS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE1BQU0sYUFBYSxDQUFDOzs7QUFFbEQ7SUFPQyxtQkFDb0IsT0FBaUI7UUFFcEMscUNBQXFDO1FBQ3JDLE9BQU8sR0FBRyxPQUFPLElBQUksRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdEMsQ0FBQztzRUFWVyxTQUFTLGNBS1osU0FBUztxREFMTixTQUFTLFdBQVQsU0FBUyxtQkFGVCxNQUFNO29CQUxuQjtDQW1CQyxBQWZELElBZUM7U0FaWSxTQUFTO2tEQUFULFNBQVM7Y0FIckIsVUFBVTtlQUFDO2dCQUNYLFVBQVUsRUFBRSxNQUFNO2FBQ2xCOztzQkFNRSxNQUFNO3VCQUFDLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVUlDb25maWcsIFVJX0NPTkZJRyB9IGZyb20gJy4vdWkuY29uZmlnJztcblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgVUlTZXJ2aWNlIHtcblxuXHRwdWJsaWMgb3B0aW9uczogVUlDb25maWc7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0QEluamVjdChVSV9DT05GSUcpIG9wdGlvbnM6IFVJQ29uZmlnXG5cdCkge1xuXHRcdC8vIGNvbnNvbGUubG9nKCdVSVNlcnZpY2UnLCBvcHRpb25zKTtcblx0XHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblx0XHR0aGlzLm9wdGlvbnMgPSBuZXcgVUlDb25maWcob3B0aW9ucyk7XG5cdH1cblxufVxuIl19