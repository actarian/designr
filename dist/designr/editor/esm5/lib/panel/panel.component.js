/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     * @param {?} event
     * @return {?}
     */
    PanelComponent.prototype.onKeydown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.key === 'e' && event.ctrlKey) {
            this.opened = this.config.enabled && !this.opened;
            console.log('PanelComponent.document:keydown', this.opened);
        }
    };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvZWRpdG9yLyIsInNvdXJjZXMiOlsibGliL3BhbmVsL3BhbmVsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDakYsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLFlBQVksRUFBRSxhQUFhLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUV0RTtJQXdCb0MsMENBQW1CO0lBSXRELHdCQUM4QixVQUFrQixFQUNoQixNQUFvQjtRQUZwRCxZQUlDLGlCQUFPLFNBQ1A7UUFKNkIsZ0JBQVUsR0FBVixVQUFVLENBQVE7UUFDaEIsWUFBTSxHQUFOLE1BQU0sQ0FBYztRQUpwRCxZQUFNLEdBQVksS0FBSyxDQUFDOztJQU94QixDQUFDOzs7OztJQUdELGtDQUFTOzs7O0lBRFQsVUFDVSxLQUFvQjtRQUM3QixJQUFJLEtBQUssQ0FBQyxHQUFHLEtBQUssR0FBRyxJQUFJLEtBQUssQ0FBQyxPQUFPLEVBQUU7WUFDdkMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDbEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQ0FBaUMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDNUQ7SUFDRixDQUFDOztnQkF6Q0QsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLDhPQUFxQztvQkFFckMsVUFBVSxFQUFFO3dCQUNYLE9BQU8sQ0FBQyxXQUFXLEVBQUU7NEJBQ3BCLEtBQUssQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDO2dDQUNuQixPQUFPLEVBQUUsQ0FBQztnQ0FDVixTQUFTLEVBQUUsZUFBZTs2QkFDMUIsQ0FBQyxDQUFDOzRCQUNILEtBQUssQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDO2dDQUNyQixPQUFPLEVBQUUsR0FBRztnQ0FDWixTQUFTLEVBQUUsa0JBQWtCOzZCQUM3QixDQUFDLENBQUM7NEJBQ0gsVUFBVSxDQUFDLGdCQUFnQixFQUFFO2dDQUM1QixPQUFPLENBQUMsT0FBTyxDQUFDOzZCQUNoQixDQUFDOzRCQUNGLFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRTtnQ0FDNUIsT0FBTyxDQUFDLE9BQU8sQ0FBQzs2QkFDaEIsQ0FBQzt5QkFDRixDQUFDO3FCQUNGO29CQUNELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxRQUFROztpQkFDekM7Ozs7NkNBTUUsTUFBTSxTQUFDLFdBQVc7Z0JBL0JaLFlBQVksdUJBZ0NsQixNQUFNLFNBQUMsYUFBYTs7OzRCQUtyQixZQUFZLFNBQUMsa0JBQWtCLEVBQUUsQ0FBQyxRQUFRLENBQUM7O0lBUTdDLHFCQUFDO0NBQUEsQUEzQ0QsQ0F3Qm9DLG1CQUFtQixHQW1CdEQ7U0FuQlksY0FBYzs7O0lBRTFCLGdDQUF3Qjs7Ozs7SUFHdkIsb0NBQStDOzs7OztJQUMvQyxnQ0FBbUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhbmltYXRlLCBzdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIHRyaWdnZXIgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0TGlzdGVuZXIsIEluamVjdCwgUExBVEZPUk1fSUQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERpc3Bvc2FibGVDb21wb25lbnQgfSBmcm9tICdAZGVzaWduci9jb3JlJztcclxuaW1wb3J0IHsgRWRpdG9yQ29uZmlnLCBFRElUT1JfQ09ORklHIH0gZnJvbSAnLi4vY29uZmlnL2VkaXRvci5jb25maWcnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdwYW5lbC1jb21wb25lbnQnLFxyXG5cdHRlbXBsYXRlVXJsOiAnLi9wYW5lbC5jb21wb25lbnQuaHRtbCcsXHJcblx0c3R5bGVVcmxzOiBbJy4vcGFuZWwuY29tcG9uZW50LnNjc3MnXSxcclxuXHRhbmltYXRpb25zOiBbXHJcblx0XHR0cmlnZ2VyKCdvcGVuQ2xvc2UnLCBbXHJcblx0XHRcdHN0YXRlKCdvcGVuJywgc3R5bGUoe1xyXG5cdFx0XHRcdG9wYWNpdHk6IDEsXHJcblx0XHRcdFx0dHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwKScsXHJcblx0XHRcdH0pKSxcclxuXHRcdFx0c3RhdGUoJ2Nsb3NlZCcsIHN0eWxlKHtcclxuXHRcdFx0XHRvcGFjaXR5OiAwLjUsXHJcblx0XHRcdFx0dHJhbnNmb3JtOiAndHJhbnNsYXRlWCgxMDAlKScsXHJcblx0XHRcdH0pKSxcclxuXHRcdFx0dHJhbnNpdGlvbignb3BlbiA9PiBjbG9zZWQnLCBbXHJcblx0XHRcdFx0YW5pbWF0ZSgnMjUwbXMnKVxyXG5cdFx0XHRdKSxcclxuXHRcdFx0dHJhbnNpdGlvbignY2xvc2VkID0+IG9wZW4nLCBbXHJcblx0XHRcdFx0YW5pbWF0ZSgnMTUwbXMnKVxyXG5cdFx0XHRdKSxcclxuXHRcdF0pLFxyXG5cdF0sXHJcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uRW11bGF0ZWQsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQYW5lbENvbXBvbmVudCBleHRlbmRzIERpc3Bvc2FibGVDb21wb25lbnQge1xyXG5cclxuXHRvcGVuZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IHN0cmluZyxcclxuXHRcdEBJbmplY3QoRURJVE9SX0NPTkZJRykgcHJpdmF0ZSBjb25maWc6IEVkaXRvckNvbmZpZyxcclxuXHQpIHtcclxuXHRcdHN1cGVyKCk7XHJcblx0fVxyXG5cclxuXHRASG9zdExpc3RlbmVyKCdkb2N1bWVudDprZXlkb3duJywgWyckZXZlbnQnXSlcclxuXHRvbktleWRvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcclxuXHRcdGlmIChldmVudC5rZXkgPT09ICdlJyAmJiBldmVudC5jdHJsS2V5KSB7XHJcblx0XHRcdHRoaXMub3BlbmVkID0gdGhpcy5jb25maWcuZW5hYmxlZCAmJiAhdGhpcy5vcGVuZWQ7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdQYW5lbENvbXBvbmVudC5kb2N1bWVudDprZXlkb3duJywgdGhpcy5vcGVuZWQpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcbn1cclxuIl19