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
                template: "<div class=\"panel\" [@openClose]=\"opened ? 'open' : 'closed'\" (clickOutside)=\"opened = false\">\n\t<ng-container *ngIf=\"opened\">\n\t\t<ng-container bundle=\"editor\"></ng-container>\n\t</ng-container>\n</div>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvZWRpdG9yLyIsInNvdXJjZXMiOlsibGliL3BhbmVsL3BhbmVsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRixPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hHLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsWUFBWSxFQUFFLGFBQWEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBMEJ0RSxNQUFNLE9BQU8sY0FBZSxTQUFRLG1CQUFtQjs7Ozs7SUFJdEQsWUFDOEIsVUFBa0IsRUFDaEIsTUFBb0I7UUFFbkQsS0FBSyxFQUFFLENBQUM7UUFIcUIsZUFBVSxHQUFWLFVBQVUsQ0FBUTtRQUNoQixXQUFNLEdBQU4sTUFBTSxDQUFjO1FBSnBELFdBQU0sR0FBWSxLQUFLLENBQUM7SUFPeEIsQ0FBQzs7Ozs7SUFHRCxTQUFTLENBQUMsS0FBb0I7UUFDN0IsSUFBSSxLQUFLLENBQUMsR0FBRyxLQUFLLEdBQUcsSUFBSSxLQUFLLENBQUMsT0FBTyxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQ2xELE9BQU8sQ0FBQyxHQUFHLENBQUMsaUNBQWlDLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzVEO0lBQ0YsQ0FBQzs7O1lBekNELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixvT0FBcUM7Z0JBRXJDLFVBQVUsRUFBRTtvQkFDWCxPQUFPLENBQUMsV0FBVyxFQUFFO3dCQUNwQixLQUFLLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQzs0QkFDbkIsT0FBTyxFQUFFLENBQUM7NEJBQ1YsU0FBUyxFQUFFLGVBQWU7eUJBQzFCLENBQUMsQ0FBQzt3QkFDSCxLQUFLLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQzs0QkFDckIsT0FBTyxFQUFFLEdBQUc7NEJBQ1osU0FBUyxFQUFFLGtCQUFrQjt5QkFDN0IsQ0FBQyxDQUFDO3dCQUNILFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRTs0QkFDNUIsT0FBTyxDQUFDLE9BQU8sQ0FBQzt5QkFDaEIsQ0FBQzt3QkFDRixVQUFVLENBQUMsZ0JBQWdCLEVBQUU7NEJBQzVCLE9BQU8sQ0FBQyxPQUFPLENBQUM7eUJBQ2hCLENBQUM7cUJBQ0YsQ0FBQztpQkFDRjtnQkFDRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsUUFBUTs7YUFDekM7Ozs7eUNBTUUsTUFBTSxTQUFDLFdBQVc7WUEvQlosWUFBWSx1QkFnQ2xCLE1BQU0sU0FBQyxhQUFhOzs7d0JBS3JCLFlBQVksU0FBQyxrQkFBa0IsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7OztJQVQ1QyxnQ0FBd0I7Ozs7O0lBR3ZCLG9DQUErQzs7Ozs7SUFDL0MsZ0NBQW1EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYW5pbWF0ZSwgc3RhdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBDb21wb25lbnQsIEhvc3RMaXN0ZW5lciwgSW5qZWN0LCBQTEFURk9STV9JRCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERpc3Bvc2FibGVDb21wb25lbnQgfSBmcm9tICdAZGVzaWduci9jb3JlJztcbmltcG9ydCB7IEVkaXRvckNvbmZpZywgRURJVE9SX0NPTkZJRyB9IGZyb20gJy4uL2NvbmZpZy9lZGl0b3IuY29uZmlnJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAncGFuZWwtY29tcG9uZW50Jyxcblx0dGVtcGxhdGVVcmw6ICcuL3BhbmVsLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbJy4vcGFuZWwuY29tcG9uZW50LnNjc3MnXSxcblx0YW5pbWF0aW9uczogW1xuXHRcdHRyaWdnZXIoJ29wZW5DbG9zZScsIFtcblx0XHRcdHN0YXRlKCdvcGVuJywgc3R5bGUoe1xuXHRcdFx0XHRvcGFjaXR5OiAxLFxuXHRcdFx0XHR0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDApJyxcblx0XHRcdH0pKSxcblx0XHRcdHN0YXRlKCdjbG9zZWQnLCBzdHlsZSh7XG5cdFx0XHRcdG9wYWNpdHk6IDAuNSxcblx0XHRcdFx0dHJhbnNmb3JtOiAndHJhbnNsYXRlWCgxMDAlKScsXG5cdFx0XHR9KSksXG5cdFx0XHR0cmFuc2l0aW9uKCdvcGVuID0+IGNsb3NlZCcsIFtcblx0XHRcdFx0YW5pbWF0ZSgnMjUwbXMnKVxuXHRcdFx0XSksXG5cdFx0XHR0cmFuc2l0aW9uKCdjbG9zZWQgPT4gb3BlbicsIFtcblx0XHRcdFx0YW5pbWF0ZSgnMTUwbXMnKVxuXHRcdFx0XSksXG5cdFx0XSksXG5cdF0sXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLkVtdWxhdGVkLFxufSlcbmV4cG9ydCBjbGFzcyBQYW5lbENvbXBvbmVudCBleHRlbmRzIERpc3Bvc2FibGVDb21wb25lbnQge1xuXG5cdG9wZW5lZDogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogc3RyaW5nLFxuXHRcdEBJbmplY3QoRURJVE9SX0NPTkZJRykgcHJpdmF0ZSBjb25maWc6IEVkaXRvckNvbmZpZyxcblx0KSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmtleWRvd24nLCBbJyRldmVudCddKVxuXHRvbktleWRvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcblx0XHRpZiAoZXZlbnQua2V5ID09PSAnZScgJiYgZXZlbnQuY3RybEtleSkge1xuXHRcdFx0dGhpcy5vcGVuZWQgPSB0aGlzLmNvbmZpZy5lbmFibGVkICYmICF0aGlzLm9wZW5lZDtcblx0XHRcdGNvbnNvbGUubG9nKCdQYW5lbENvbXBvbmVudC5kb2N1bWVudDprZXlkb3duJywgdGhpcy5vcGVuZWQpO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=