import { __extends } from "tslib";
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, HostListener, Inject, PLATFORM_ID, ViewEncapsulation } from '@angular/core';
import { DisposableComponent } from '@designr/core';
import { EditorConfig, EDITOR_CONFIG } from '../config/editor.config';
import * as i0 from "@angular/core";
import * as i1 from "../config/editor.config";
import * as i2 from "@angular/common";
import * as i3 from "@designr/core";
function PanelComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementContainer(1, 2);
    i0.ɵɵelementContainerEnd();
} }
var PanelComponent = /** @class */ (function (_super) {
    __extends(PanelComponent, _super);
    function PanelComponent(platformId, config) {
        var _this = _super.call(this) || this;
        _this.platformId = platformId;
        _this.config = config;
        _this.opened = false;
        return _this;
    }
    PanelComponent.prototype.onKeydown = function (event) {
        if (event.key === 'e' && event.ctrlKey) {
            this.opened = this.config.enabled && !this.opened;
            console.log('PanelComponent.document:keydown', this.opened);
        }
    };
    PanelComponent.ɵfac = function PanelComponent_Factory(t) { return new (t || PanelComponent)(i0.ɵɵdirectiveInject(PLATFORM_ID), i0.ɵɵdirectiveInject(EDITOR_CONFIG)); };
    PanelComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PanelComponent, selectors: [["panel-component"]], hostBindings: function PanelComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("keydown", function PanelComponent_keydown_HostBindingHandler($event) { return ctx.onKeydown($event); }, false, i0.ɵɵresolveDocument);
        } }, features: [i0.ɵɵInheritDefinitionFeature], decls: 2, vars: 2, consts: [[1, "panel", 3, "clickOutside"], [4, "ngIf"], ["bundle", "editor"]], template: function PanelComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵlistener("clickOutside", function PanelComponent_Template_div_clickOutside_0_listener($event) { return ctx.opened = false; });
            i0.ɵɵtemplate(1, PanelComponent_ng_container_1_Template, 2, 0, "ng-container", 1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("@openClose", ctx.opened ? "open" : "closed");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.opened);
        } }, directives: [i2.NgIf, i3.BundleDirective], styles: [".panel[_ngcontent-%COMP%]{position:fixed;top:0;right:0;width:320px;height:100vh;padding:15px;overflow-x:hidden;overflow-y:auto;background:#fff;z-index:100000}[_ngcontent-%COMP%]::-webkit-scrollbar{width:0}[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:0 0}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:0 0}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:0 0}"], data: { animation: [
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
            ] } });
    return PanelComponent;
}(DisposableComponent));
export { PanelComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PanelComponent, [{
        type: Component,
        args: [{
                selector: 'panel-component',
                templateUrl: './panel.component.html',
                styleUrls: ['./panel.component.scss'],
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
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }, { type: i1.EditorConfig, decorators: [{
                type: Inject,
                args: [EDITOR_CONFIG]
            }] }]; }, { onKeydown: [{
            type: HostListener,
            args: ['document:keydown', ['$event']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvZWRpdG9yLyIsInNvdXJjZXMiOlsibGliL3BhbmVsL3BhbmVsLmNvbXBvbmVudC50cyIsImxpYi9wYW5lbC9wYW5lbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRixPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hHLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsWUFBWSxFQUFFLGFBQWEsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7Ozs7SUNGckUsNkJBQ0M7SUFBQSwyQkFBNkM7SUFDOUMsMEJBQWU7O0FERWhCO0lBd0JvQyxrQ0FBbUI7SUFJdEQsd0JBQzhCLFVBQWtCLEVBQ2hCLE1BQW9CO1FBRnBELFlBSUMsaUJBQU8sU0FDUDtRQUo2QixnQkFBVSxHQUFWLFVBQVUsQ0FBUTtRQUNoQixZQUFNLEdBQU4sTUFBTSxDQUFjO1FBSnBELFlBQU0sR0FBWSxLQUFLLENBQUM7O0lBT3hCLENBQUM7SUFHRCxrQ0FBUyxHQURULFVBQ1UsS0FBb0I7UUFDN0IsSUFBSSxLQUFLLENBQUMsR0FBRyxLQUFLLEdBQUcsSUFBSSxLQUFLLENBQUMsT0FBTyxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQ2xELE9BQU8sQ0FBQyxHQUFHLENBQUMsaUNBQWlDLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzVEO0lBQ0YsQ0FBQztnRkFqQlcsY0FBYyx1QkFLakIsV0FBVyx3QkFDWCxhQUFhO3VEQU5WLGNBQWM7OztZQzdCM0IsOEJBQ0M7WUFENEQseUhBQXlCLEtBQUssSUFBQztZQUMzRixpRkFDQztZQUVGLGlCQUFNOztZQUphLDJEQUF5QztZQUM3QyxlQUFjO1lBQWQsaUNBQWM7Z2VEUWhCO2dCQUNYLE9BQU8sQ0FBQyxXQUFXLEVBQUU7b0JBQ3BCLEtBQUssQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDO3dCQUNuQixPQUFPLEVBQUUsQ0FBQzt3QkFDVixTQUFTLEVBQUUsZUFBZTtxQkFDMUIsQ0FBQyxDQUFDO29CQUNILEtBQUssQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDO3dCQUNyQixPQUFPLEVBQUUsR0FBRzt3QkFDWixTQUFTLEVBQUUsa0JBQWtCO3FCQUM3QixDQUFDLENBQUM7b0JBQ0gsVUFBVSxDQUFDLGdCQUFnQixFQUFFO3dCQUM1QixPQUFPLENBQUMsT0FBTyxDQUFDO3FCQUNoQixDQUFDO29CQUNGLFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRTt3QkFDNUIsT0FBTyxDQUFDLE9BQU8sQ0FBQztxQkFDaEIsQ0FBQztpQkFDRixDQUFDO2FBQ0Y7eUJBMUJGO0NBZ0RDLEFBM0NELENBd0JvQyxtQkFBbUIsR0FtQnREO1NBbkJZLGNBQWM7a0RBQWQsY0FBYztjQXhCMUIsU0FBUztlQUFDO2dCQUNWLFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLFdBQVcsRUFBRSx3QkFBd0I7Z0JBQ3JDLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO2dCQUNyQyxVQUFVLEVBQUU7b0JBQ1gsT0FBTyxDQUFDLFdBQVcsRUFBRTt3QkFDcEIsS0FBSyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUM7NEJBQ25CLE9BQU8sRUFBRSxDQUFDOzRCQUNWLFNBQVMsRUFBRSxlQUFlO3lCQUMxQixDQUFDLENBQUM7d0JBQ0gsS0FBSyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUM7NEJBQ3JCLE9BQU8sRUFBRSxHQUFHOzRCQUNaLFNBQVMsRUFBRSxrQkFBa0I7eUJBQzdCLENBQUMsQ0FBQzt3QkFDSCxVQUFVLENBQUMsZ0JBQWdCLEVBQUU7NEJBQzVCLE9BQU8sQ0FBQyxPQUFPLENBQUM7eUJBQ2hCLENBQUM7d0JBQ0YsVUFBVSxDQUFDLGdCQUFnQixFQUFFOzRCQUM1QixPQUFPLENBQUMsT0FBTyxDQUFDO3lCQUNoQixDQUFDO3FCQUNGLENBQUM7aUJBQ0Y7Z0JBQ0QsYUFBYSxFQUFFLGlCQUFpQixDQUFDLFFBQVE7YUFDekM7O3NCQU1FLE1BQU07dUJBQUMsV0FBVzs7c0JBQ2xCLE1BQU07dUJBQUMsYUFBYTs7a0JBS3JCLFlBQVk7bUJBQUMsa0JBQWtCLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhbmltYXRlLCBzdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIHRyaWdnZXIgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7IENvbXBvbmVudCwgSG9zdExpc3RlbmVyLCBJbmplY3QsIFBMQVRGT1JNX0lELCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGlzcG9zYWJsZUNvbXBvbmVudCB9IGZyb20gJ0BkZXNpZ25yL2NvcmUnO1xuaW1wb3J0IHsgRWRpdG9yQ29uZmlnLCBFRElUT1JfQ09ORklHIH0gZnJvbSAnLi4vY29uZmlnL2VkaXRvci5jb25maWcnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdwYW5lbC1jb21wb25lbnQnLFxuXHR0ZW1wbGF0ZVVybDogJy4vcGFuZWwuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsnLi9wYW5lbC5jb21wb25lbnQuc2NzcyddLFxuXHRhbmltYXRpb25zOiBbXG5cdFx0dHJpZ2dlcignb3BlbkNsb3NlJywgW1xuXHRcdFx0c3RhdGUoJ29wZW4nLCBzdHlsZSh7XG5cdFx0XHRcdG9wYWNpdHk6IDEsXG5cdFx0XHRcdHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMCknLFxuXHRcdFx0fSkpLFxuXHRcdFx0c3RhdGUoJ2Nsb3NlZCcsIHN0eWxlKHtcblx0XHRcdFx0b3BhY2l0eTogMC41LFxuXHRcdFx0XHR0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDEwMCUpJyxcblx0XHRcdH0pKSxcblx0XHRcdHRyYW5zaXRpb24oJ29wZW4gPT4gY2xvc2VkJywgW1xuXHRcdFx0XHRhbmltYXRlKCcyNTBtcycpXG5cdFx0XHRdKSxcblx0XHRcdHRyYW5zaXRpb24oJ2Nsb3NlZCA9PiBvcGVuJywgW1xuXHRcdFx0XHRhbmltYXRlKCcxNTBtcycpXG5cdFx0XHRdKSxcblx0XHRdKSxcblx0XSxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uRW11bGF0ZWQsXG59KVxuZXhwb3J0IGNsYXNzIFBhbmVsQ29tcG9uZW50IGV4dGVuZHMgRGlzcG9zYWJsZUNvbXBvbmVudCB7XG5cblx0b3BlbmVkOiBib29sZWFuID0gZmFsc2U7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0QEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBzdHJpbmcsXG5cdFx0QEluamVjdChFRElUT1JfQ09ORklHKSBwcml2YXRlIGNvbmZpZzogRWRpdG9yQ29uZmlnLFxuXHQpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0QEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6a2V5ZG93bicsIFsnJGV2ZW50J10pXG5cdG9uS2V5ZG93bihldmVudDogS2V5Ym9hcmRFdmVudCkge1xuXHRcdGlmIChldmVudC5rZXkgPT09ICdlJyAmJiBldmVudC5jdHJsS2V5KSB7XG5cdFx0XHR0aGlzLm9wZW5lZCA9IHRoaXMuY29uZmlnLmVuYWJsZWQgJiYgIXRoaXMub3BlbmVkO1xuXHRcdFx0Y29uc29sZS5sb2coJ1BhbmVsQ29tcG9uZW50LmRvY3VtZW50OmtleWRvd24nLCB0aGlzLm9wZW5lZCk7XG5cdFx0fVxuXHR9XG5cbn1cbiIsIjxkaXYgY2xhc3M9XCJwYW5lbFwiIFtAb3BlbkNsb3NlXT1cIm9wZW5lZCA/ICdvcGVuJyA6ICdjbG9zZWQnXCIgKGNsaWNrT3V0c2lkZSk9XCJvcGVuZWQgPSBmYWxzZVwiPlxuXHQ8bmctY29udGFpbmVyICpuZ0lmPVwib3BlbmVkXCI+XG5cdFx0PG5nLWNvbnRhaW5lciBidW5kbGU9XCJlZGl0b3JcIj48L25nLWNvbnRhaW5lcj5cblx0PC9uZy1jb250YWluZXI+XG48L2Rpdj5cbiJdfQ==