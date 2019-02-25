/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, HostListener, Inject, PLATFORM_ID, ViewEncapsulation } from '@angular/core';
import { DisposableComponent } from '@designr/core';
import { EditorConfig, EDITOR_CONFIG } from '../config/editor.config';
var PanelComponent = /** @class */ (function (_super) {
    tslib_1.__extends(PanelComponent, _super);
    function PanelComponent(platformId, config) {
        var _this = _super.call(this) || this;
        _this.platformId = platformId;
        _this.config = config;
        _this.opened = false;
        return _this;
    }
    /**
     * @param {?} e
     * @return {?}
     */
    PanelComponent.prototype.onKeydown = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (e.key === 'e' && e.ctrlKey) {
            this.opened = this.config.enabled && !this.opened;
            this.opened = !this.opened;
            console.log('AppComponent.document:keydown', e.key, e.ctrlKey, e.altKey, e.code);
        }
    };
    PanelComponent.decorators = [
        { type: Component, args: [{
                    selector: 'panel-component',
                    template: "<ng-container>\n\t<div class=\"panel\" [@openClose]=\"opened ? 'open' : 'closed'\" (clickOutside)=\"opened = false\">\n\t\t<ng-container *ngIf=\"opened\">\n\t\t\t<ng-container lazyModule=\"editorLazyModule\"></ng-container>\n\t\t</ng-container>\n\t</div>\n</ng-container>\n",
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
                    styles: [":host form{margin:0}:host label{display:block;width:100%;color:#55555a;font-weight:700;font-size:12px}.panel{position:fixed;top:0;right:0;width:320px;height:100vh;padding:15px;overflow-x:hidden;overflow-y:auto;font-family:Arial,Helvetica,sans-serif;font-size:16px;line-height:1.5;background:#fafafa;color:#55555a}.panel .h1{color:#55555a}@media (max-width:1024px){.panel{display:none}}.id{display:inline-block;padding:4px 6px;background:#0875c2;color:#fff;border-radius:3px;font-size:12px;line-height:1;margin-right:4px}.status{display:inline-block;padding:4px 6px;background:#fff;color:#000;border-radius:3px;font-size:12px;line-height:1;margin-right:4px}.status.active{background:green;color:#fff}.component{display:inline-block;font-size:14px;font-style:italic}::-webkit-scrollbar{width:0}::-webkit-scrollbar-track{background:0 0}::-webkit-scrollbar-thumb{background:0 0}::-webkit-scrollbar-thumb:hover{background:0 0}"]
                }] }
    ];
    /** @nocollapse */
    PanelComponent.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: EditorConfig, decorators: [{ type: Inject, args: [EDITOR_CONFIG,] }] }
    ]; };
    PanelComponent.propDecorators = {
        onKeydown: [{ type: HostListener, args: ['document:keydown', ['$event'],] }]
    };
    return PanelComponent;
}(DisposableComponent));
export { PanelComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvZWRpdG9yLyIsInNvdXJjZXMiOlsibGliL3BhbmVsL3BhbmVsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDakYsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLFlBQVksRUFBRSxhQUFhLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUV0RTtJQXdCb0MsMENBQW1CO0lBSXRELHdCQUM4QixVQUFrQixFQUNoQixNQUFvQjtRQUZwRCxZQUlDLGlCQUFPLFNBQ1A7UUFKNkIsZ0JBQVUsR0FBVixVQUFVLENBQVE7UUFDaEIsWUFBTSxHQUFOLE1BQU0sQ0FBYztRQUpwRCxZQUFNLEdBQVksS0FBSyxDQUFDOztJQU94QixDQUFDOzs7OztJQUdELGtDQUFTOzs7O0lBRFQsVUFDVSxDQUFnQjtRQUN6QixJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxPQUFPLEVBQUU7WUFDL0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDbEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDakY7SUFDRixDQUFDOztnQkExQ0QsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLDZSQUFxQztvQkFFckMsVUFBVSxFQUFFO3dCQUNYLE9BQU8sQ0FBQyxXQUFXLEVBQUU7NEJBQ3BCLEtBQUssQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDO2dDQUNuQixPQUFPLEVBQUUsQ0FBQztnQ0FDVixTQUFTLEVBQUUsZUFBZTs2QkFDMUIsQ0FBQyxDQUFDOzRCQUNILEtBQUssQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDO2dDQUNyQixPQUFPLEVBQUUsR0FBRztnQ0FDWixTQUFTLEVBQUUsa0JBQWtCOzZCQUM3QixDQUFDLENBQUM7NEJBQ0gsVUFBVSxDQUFDLGdCQUFnQixFQUFFO2dDQUM1QixPQUFPLENBQUMsT0FBTyxDQUFDOzZCQUNoQixDQUFDOzRCQUNGLFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRTtnQ0FDNUIsT0FBTyxDQUFDLE9BQU8sQ0FBQzs2QkFDaEIsQ0FBQzt5QkFDRixDQUFDO3FCQUNGO29CQUNELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxRQUFROztpQkFDekM7Ozs7NkNBTUUsTUFBTSxTQUFDLFdBQVc7Z0JBL0JaLFlBQVksdUJBZ0NsQixNQUFNLFNBQUMsYUFBYTs7OzRCQUtyQixZQUFZLFNBQUMsa0JBQWtCLEVBQUUsQ0FBQyxRQUFRLENBQUM7O0lBUzdDLHFCQUFDO0NBQUEsQUE1Q0QsQ0F3Qm9DLG1CQUFtQixHQW9CdEQ7U0FwQlksY0FBYzs7O0lBRTFCLGdDQUF3Qjs7Ozs7SUFHdkIsb0NBQStDOzs7OztJQUMvQyxnQ0FBbUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhbmltYXRlLCBzdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIHRyaWdnZXIgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7IENvbXBvbmVudCwgSG9zdExpc3RlbmVyLCBJbmplY3QsIFBMQVRGT1JNX0lELCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGlzcG9zYWJsZUNvbXBvbmVudCB9IGZyb20gJ0BkZXNpZ25yL2NvcmUnO1xuaW1wb3J0IHsgRWRpdG9yQ29uZmlnLCBFRElUT1JfQ09ORklHIH0gZnJvbSAnLi4vY29uZmlnL2VkaXRvci5jb25maWcnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdwYW5lbC1jb21wb25lbnQnLFxuXHR0ZW1wbGF0ZVVybDogJy4vcGFuZWwuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsnLi9wYW5lbC5jb21wb25lbnQuc2NzcyddLFxuXHRhbmltYXRpb25zOiBbXG5cdFx0dHJpZ2dlcignb3BlbkNsb3NlJywgW1xuXHRcdFx0c3RhdGUoJ29wZW4nLCBzdHlsZSh7XG5cdFx0XHRcdG9wYWNpdHk6IDEsXG5cdFx0XHRcdHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMCknLFxuXHRcdFx0fSkpLFxuXHRcdFx0c3RhdGUoJ2Nsb3NlZCcsIHN0eWxlKHtcblx0XHRcdFx0b3BhY2l0eTogMC41LFxuXHRcdFx0XHR0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDEwMCUpJyxcblx0XHRcdH0pKSxcblx0XHRcdHRyYW5zaXRpb24oJ29wZW4gPT4gY2xvc2VkJywgW1xuXHRcdFx0XHRhbmltYXRlKCcyNTBtcycpXG5cdFx0XHRdKSxcblx0XHRcdHRyYW5zaXRpb24oJ2Nsb3NlZCA9PiBvcGVuJywgW1xuXHRcdFx0XHRhbmltYXRlKCcxNTBtcycpXG5cdFx0XHRdKSxcblx0XHRdKSxcblx0XSxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uRW11bGF0ZWQsXG59KVxuZXhwb3J0IGNsYXNzIFBhbmVsQ29tcG9uZW50IGV4dGVuZHMgRGlzcG9zYWJsZUNvbXBvbmVudCB7XG5cblx0b3BlbmVkOiBib29sZWFuID0gZmFsc2U7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0QEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBzdHJpbmcsXG5cdFx0QEluamVjdChFRElUT1JfQ09ORklHKSBwcml2YXRlIGNvbmZpZzogRWRpdG9yQ29uZmlnLFxuXHQpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0QEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6a2V5ZG93bicsIFsnJGV2ZW50J10pXG5cdG9uS2V5ZG93bihlOiBLZXlib2FyZEV2ZW50KSB7XG5cdFx0aWYgKGUua2V5ID09PSAnZScgJiYgZS5jdHJsS2V5KSB7XG5cdFx0XHR0aGlzLm9wZW5lZCA9IHRoaXMuY29uZmlnLmVuYWJsZWQgJiYgIXRoaXMub3BlbmVkO1xuXHRcdFx0dGhpcy5vcGVuZWQgPSAhdGhpcy5vcGVuZWQ7XG5cdFx0XHRjb25zb2xlLmxvZygnQXBwQ29tcG9uZW50LmRvY3VtZW50OmtleWRvd24nLCBlLmtleSwgZS5jdHJsS2V5LCBlLmFsdEtleSwgZS5jb2RlKTtcblx0XHR9XG5cdH1cblxufVxuIl19