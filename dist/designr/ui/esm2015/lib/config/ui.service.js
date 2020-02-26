import { Inject, Injectable } from '@angular/core';
import { UIConfig, UI_CONFIG } from './ui.config';
import * as i0 from "@angular/core";
import * as i1 from "./ui.config";
export class UIService {
    constructor(options) {
        // console.log('UIService', options);
        options = options || {};
        this.options = new UIConfig(options);
    }
}
UIService.ɵfac = function UIService_Factory(t) { return new (t || UIService)(i0.ɵɵinject(UI_CONFIG)); };
UIService.ɵprov = i0.ɵɵdefineInjectable({ token: UIService, factory: UIService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(UIService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.UIConfig, decorators: [{
                type: Inject,
                args: [UI_CONFIG]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL3VpLyIsInNvdXJjZXMiOlsibGliL2NvbmZpZy91aS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE1BQU0sYUFBYSxDQUFDOzs7QUFLbEQsTUFBTSxPQUFPLFNBQVM7SUFJckIsWUFDb0IsT0FBaUI7UUFFcEMscUNBQXFDO1FBQ3JDLE9BQU8sR0FBRyxPQUFPLElBQUksRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdEMsQ0FBQzs7a0VBVlcsU0FBUyxjQUtaLFNBQVM7aURBTE4sU0FBUyxXQUFULFNBQVMsbUJBRlQsTUFBTTtrREFFTixTQUFTO2NBSHJCLFVBQVU7ZUFBQztnQkFDWCxVQUFVLEVBQUUsTUFBTTthQUNsQjs7c0JBTUUsTUFBTTt1QkFBQyxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFVJQ29uZmlnLCBVSV9DT05GSUcgfSBmcm9tICcuL3VpLmNvbmZpZyc7XG5cbkBJbmplY3RhYmxlKHtcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFVJU2VydmljZSB7XG5cblx0cHVibGljIG9wdGlvbnM6IFVJQ29uZmlnO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdEBJbmplY3QoVUlfQ09ORklHKSBvcHRpb25zOiBVSUNvbmZpZ1xuXHQpIHtcblx0XHQvLyBjb25zb2xlLmxvZygnVUlTZXJ2aWNlJywgb3B0aW9ucyk7XG5cdFx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cdFx0dGhpcy5vcHRpb25zID0gbmV3IFVJQ29uZmlnKG9wdGlvbnMpO1xuXHR9XG5cbn1cbiJdfQ==