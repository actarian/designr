/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, HostListener, Inject, PLATFORM_ID, ViewEncapsulation } from '@angular/core';
import { DisposableComponent } from '@designr/core';
import { EditorConfig, EDITOR_CONFIG } from '../config/editor.config';
export class PanelComponent extends DisposableComponent {
    /**
     * @param {?} platformId
     * @param {?} config
     */
    constructor(platformId, config) {
        super();
        this.platformId = platformId;
        this.config = config;
        this.opened = false;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onKeydown(event) {
        if (event.key === 'e' && event.ctrlKey) {
            this.opened = this.config.enabled && !this.opened;
            console.log('PanelComponent.document:keydown', this.opened);
        }
    }
}
PanelComponent.decorators = [
    { type: Component, args: [{
                selector: 'panel-component',
                template: "<div class=\"panel\" [@openClose]=\"opened ? 'open' : 'closed'\" (clickOutside)=\"opened = false\">\r\n\t<ng-container *ngIf=\"opened\">\r\n\t\t<ng-container bundle=\"editor\"></ng-container>\r\n\t</ng-container>\r\n</div>\r\n",
                animations: [
                    trigger('openClose', [
                        state('open', style({
                            opacity: 1,
                            transform: 'translateX(0)',
                        })),
                        state('closed', style({
                            opacity: 0.5,
                            transform: 'translateX(100%)',
                        })),
                        transition('open => closed', [
                            animate('250ms')
                        ]),
                        transition('closed => open', [
                            animate('150ms')
                        ]),
                    ]),
                ],
                encapsulation: ViewEncapsulation.Emulated,
                styles: [".panel{position:fixed;top:0;right:0;width:320px;height:100vh;padding:15px;overflow-x:hidden;overflow-y:auto;background:#fff;z-index:100000}::-webkit-scrollbar{width:0}::-webkit-scrollbar-track{background:0 0}::-webkit-scrollbar-thumb{background:0 0}::-webkit-scrollbar-thumb:hover{background:0 0}"]
            }] }
];
/** @nocollapse */
PanelComponent.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: EditorConfig, decorators: [{ type: Inject, args: [EDITOR_CONFIG,] }] }
];
PanelComponent.propDecorators = {
    onKeydown: [{ type: HostListener, args: ['document:keydown', ['$event'],] }]
};
if (false) {
    /** @type {?} */
    PanelComponent.prototype.opened;
    /**
     * @type {?}
     * @private
     */
    PanelComponent.prototype.platformId;
    /**
     * @type {?}
     * @private
     */
    PanelComponent.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvZWRpdG9yLyIsInNvdXJjZXMiOlsibGliL3BhbmVsL3BhbmVsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRixPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hHLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsWUFBWSxFQUFFLGFBQWEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBMEJ0RSxNQUFNLE9BQU8sY0FBZSxTQUFRLG1CQUFtQjs7Ozs7SUFJdEQsWUFDOEIsVUFBa0IsRUFDaEIsTUFBb0I7UUFFbkQsS0FBSyxFQUFFLENBQUM7UUFIcUIsZUFBVSxHQUFWLFVBQVUsQ0FBUTtRQUNoQixXQUFNLEdBQU4sTUFBTSxDQUFjO1FBSnBELFdBQU0sR0FBWSxLQUFLLENBQUM7SUFPeEIsQ0FBQzs7Ozs7SUFHRCxTQUFTLENBQUMsS0FBb0I7UUFDN0IsSUFBSSxLQUFLLENBQUMsR0FBRyxLQUFLLEdBQUcsSUFBSSxLQUFLLENBQUMsT0FBTyxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQ2xELE9BQU8sQ0FBQyxHQUFHLENBQUMsaUNBQWlDLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzVEO0lBQ0YsQ0FBQzs7O1lBekNELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQiw4T0FBcUM7Z0JBRXJDLFVBQVUsRUFBRTtvQkFDWCxPQUFPLENBQUMsV0FBVyxFQUFFO3dCQUNwQixLQUFLLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQzs0QkFDbkIsT0FBTyxFQUFFLENBQUM7NEJBQ1YsU0FBUyxFQUFFLGVBQWU7eUJBQzFCLENBQUMsQ0FBQzt3QkFDSCxLQUFLLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQzs0QkFDckIsT0FBTyxFQUFFLEdBQUc7NEJBQ1osU0FBUyxFQUFFLGtCQUFrQjt5QkFDN0IsQ0FBQyxDQUFDO3dCQUNILFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRTs0QkFDNUIsT0FBTyxDQUFDLE9BQU8sQ0FBQzt5QkFDaEIsQ0FBQzt3QkFDRixVQUFVLENBQUMsZ0JBQWdCLEVBQUU7NEJBQzVCLE9BQU8sQ0FBQyxPQUFPLENBQUM7eUJBQ2hCLENBQUM7cUJBQ0YsQ0FBQztpQkFDRjtnQkFDRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsUUFBUTs7YUFDekM7Ozs7eUNBTUUsTUFBTSxTQUFDLFdBQVc7WUEvQlosWUFBWSx1QkFnQ2xCLE1BQU0sU0FBQyxhQUFhOzs7d0JBS3JCLFlBQVksU0FBQyxrQkFBa0IsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7OztJQVQ1QyxnQ0FBd0I7Ozs7O0lBR3ZCLG9DQUErQzs7Ozs7SUFDL0MsZ0NBQW1EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYW5pbWF0ZSwgc3RhdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XHJcbmltcG9ydCB7IENvbXBvbmVudCwgSG9zdExpc3RlbmVyLCBJbmplY3QsIFBMQVRGT1JNX0lELCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEaXNwb3NhYmxlQ29tcG9uZW50IH0gZnJvbSAnQGRlc2lnbnIvY29yZSc7XHJcbmltcG9ydCB7IEVkaXRvckNvbmZpZywgRURJVE9SX0NPTkZJRyB9IGZyb20gJy4uL2NvbmZpZy9lZGl0b3IuY29uZmlnJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAncGFuZWwtY29tcG9uZW50JyxcclxuXHR0ZW1wbGF0ZVVybDogJy4vcGFuZWwuY29tcG9uZW50Lmh0bWwnLFxyXG5cdHN0eWxlVXJsczogWycuL3BhbmVsLmNvbXBvbmVudC5zY3NzJ10sXHJcblx0YW5pbWF0aW9uczogW1xyXG5cdFx0dHJpZ2dlcignb3BlbkNsb3NlJywgW1xyXG5cdFx0XHRzdGF0ZSgnb3BlbicsIHN0eWxlKHtcclxuXHRcdFx0XHRvcGFjaXR5OiAxLFxyXG5cdFx0XHRcdHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMCknLFxyXG5cdFx0XHR9KSksXHJcblx0XHRcdHN0YXRlKCdjbG9zZWQnLCBzdHlsZSh7XHJcblx0XHRcdFx0b3BhY2l0eTogMC41LFxyXG5cdFx0XHRcdHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMTAwJSknLFxyXG5cdFx0XHR9KSksXHJcblx0XHRcdHRyYW5zaXRpb24oJ29wZW4gPT4gY2xvc2VkJywgW1xyXG5cdFx0XHRcdGFuaW1hdGUoJzI1MG1zJylcclxuXHRcdFx0XSksXHJcblx0XHRcdHRyYW5zaXRpb24oJ2Nsb3NlZCA9PiBvcGVuJywgW1xyXG5cdFx0XHRcdGFuaW1hdGUoJzE1MG1zJylcclxuXHRcdFx0XSksXHJcblx0XHRdKSxcclxuXHRdLFxyXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLkVtdWxhdGVkLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGFuZWxDb21wb25lbnQgZXh0ZW5kcyBEaXNwb3NhYmxlQ29tcG9uZW50IHtcclxuXHJcblx0b3BlbmVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0QEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBzdHJpbmcsXHJcblx0XHRASW5qZWN0KEVESVRPUl9DT05GSUcpIHByaXZhdGUgY29uZmlnOiBFZGl0b3JDb25maWcsXHJcblx0KSB7XHJcblx0XHRzdXBlcigpO1xyXG5cdH1cclxuXHJcblx0QEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6a2V5ZG93bicsIFsnJGV2ZW50J10pXHJcblx0b25LZXlkb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XHJcblx0XHRpZiAoZXZlbnQua2V5ID09PSAnZScgJiYgZXZlbnQuY3RybEtleSkge1xyXG5cdFx0XHR0aGlzLm9wZW5lZCA9IHRoaXMuY29uZmlnLmVuYWJsZWQgJiYgIXRoaXMub3BlbmVkO1xyXG5cdFx0XHRjb25zb2xlLmxvZygnUGFuZWxDb21wb25lbnQuZG9jdW1lbnQ6a2V5ZG93bicsIHRoaXMub3BlbmVkKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG59XHJcbiJdfQ==