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
export class PanelComponent extends DisposableComponent {
    constructor(platformId, config) {
        super();
        this.platformId = platformId;
        this.config = config;
        this.opened = false;
    }
    onKeydown(event) {
        if (event.key === 'e' && event.ctrlKey) {
            this.opened = this.config.enabled && !this.opened;
            console.log('PanelComponent.document:keydown', this.opened);
        }
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvZWRpdG9yLyIsInNvdXJjZXMiOlsibGliL3BhbmVsL3BhbmVsLmNvbXBvbmVudC50cyIsImxpYi9wYW5lbC9wYW5lbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2pGLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEcsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7OztJQ0ZyRSw2QkFDQztJQUFBLDJCQUE2QztJQUM5QywwQkFBZTs7QUQwQmhCLE1BQU0sT0FBTyxjQUFlLFNBQVEsbUJBQW1CO0lBSXRELFlBQzhCLFVBQWtCLEVBQ2hCLE1BQW9CO1FBRW5ELEtBQUssRUFBRSxDQUFDO1FBSHFCLGVBQVUsR0FBVixVQUFVLENBQVE7UUFDaEIsV0FBTSxHQUFOLE1BQU0sQ0FBYztRQUpwRCxXQUFNLEdBQVksS0FBSyxDQUFDO0lBT3hCLENBQUM7SUFHRCxTQUFTLENBQUMsS0FBb0I7UUFDN0IsSUFBSSxLQUFLLENBQUMsR0FBRyxLQUFLLEdBQUcsSUFBSSxLQUFLLENBQUMsT0FBTyxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQ2xELE9BQU8sQ0FBQyxHQUFHLENBQUMsaUNBQWlDLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzVEO0lBQ0YsQ0FBQzs7NEVBakJXLGNBQWMsdUJBS2pCLFdBQVcsd0JBQ1gsYUFBYTttREFOVixjQUFjOzs7UUM3QjNCLDhCQUNDO1FBRDRELHlIQUF5QixLQUFLLElBQUM7UUFDM0YsaUZBQ0M7UUFFRixpQkFBTTs7UUFKYSwyREFBeUM7UUFDN0MsZUFBYztRQUFkLGlDQUFjOzRkRFFoQjtZQUNYLE9BQU8sQ0FBQyxXQUFXLEVBQUU7Z0JBQ3BCLEtBQUssQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDO29CQUNuQixPQUFPLEVBQUUsQ0FBQztvQkFDVixTQUFTLEVBQUUsZUFBZTtpQkFDMUIsQ0FBQyxDQUFDO2dCQUNILEtBQUssQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDO29CQUNyQixPQUFPLEVBQUUsR0FBRztvQkFDWixTQUFTLEVBQUUsa0JBQWtCO2lCQUM3QixDQUFDLENBQUM7Z0JBQ0gsVUFBVSxDQUFDLGdCQUFnQixFQUFFO29CQUM1QixPQUFPLENBQUMsT0FBTyxDQUFDO2lCQUNoQixDQUFDO2dCQUNGLFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRTtvQkFDNUIsT0FBTyxDQUFDLE9BQU8sQ0FBQztpQkFDaEIsQ0FBQzthQUNGLENBQUM7U0FDRjtrREFHVyxjQUFjO2NBeEIxQixTQUFTO2VBQUM7Z0JBQ1YsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsV0FBVyxFQUFFLHdCQUF3QjtnQkFDckMsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7Z0JBQ3JDLFVBQVUsRUFBRTtvQkFDWCxPQUFPLENBQUMsV0FBVyxFQUFFO3dCQUNwQixLQUFLLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQzs0QkFDbkIsT0FBTyxFQUFFLENBQUM7NEJBQ1YsU0FBUyxFQUFFLGVBQWU7eUJBQzFCLENBQUMsQ0FBQzt3QkFDSCxLQUFLLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQzs0QkFDckIsT0FBTyxFQUFFLEdBQUc7NEJBQ1osU0FBUyxFQUFFLGtCQUFrQjt5QkFDN0IsQ0FBQyxDQUFDO3dCQUNILFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRTs0QkFDNUIsT0FBTyxDQUFDLE9BQU8sQ0FBQzt5QkFDaEIsQ0FBQzt3QkFDRixVQUFVLENBQUMsZ0JBQWdCLEVBQUU7NEJBQzVCLE9BQU8sQ0FBQyxPQUFPLENBQUM7eUJBQ2hCLENBQUM7cUJBQ0YsQ0FBQztpQkFDRjtnQkFDRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsUUFBUTthQUN6Qzs7c0JBTUUsTUFBTTt1QkFBQyxXQUFXOztzQkFDbEIsTUFBTTt1QkFBQyxhQUFhOztrQkFLckIsWUFBWTttQkFBQyxrQkFBa0IsRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFuaW1hdGUsIHN0YXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgdHJpZ2dlciB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0TGlzdGVuZXIsIEluamVjdCwgUExBVEZPUk1fSUQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEaXNwb3NhYmxlQ29tcG9uZW50IH0gZnJvbSAnQGRlc2lnbnIvY29yZSc7XG5pbXBvcnQgeyBFZGl0b3JDb25maWcsIEVESVRPUl9DT05GSUcgfSBmcm9tICcuLi9jb25maWcvZWRpdG9yLmNvbmZpZyc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ3BhbmVsLWNvbXBvbmVudCcsXG5cdHRlbXBsYXRlVXJsOiAnLi9wYW5lbC5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogWycuL3BhbmVsLmNvbXBvbmVudC5zY3NzJ10sXG5cdGFuaW1hdGlvbnM6IFtcblx0XHR0cmlnZ2VyKCdvcGVuQ2xvc2UnLCBbXG5cdFx0XHRzdGF0ZSgnb3BlbicsIHN0eWxlKHtcblx0XHRcdFx0b3BhY2l0eTogMSxcblx0XHRcdFx0dHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwKScsXG5cdFx0XHR9KSksXG5cdFx0XHRzdGF0ZSgnY2xvc2VkJywgc3R5bGUoe1xuXHRcdFx0XHRvcGFjaXR5OiAwLjUsXG5cdFx0XHRcdHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMTAwJSknLFxuXHRcdFx0fSkpLFxuXHRcdFx0dHJhbnNpdGlvbignb3BlbiA9PiBjbG9zZWQnLCBbXG5cdFx0XHRcdGFuaW1hdGUoJzI1MG1zJylcblx0XHRcdF0pLFxuXHRcdFx0dHJhbnNpdGlvbignY2xvc2VkID0+IG9wZW4nLCBbXG5cdFx0XHRcdGFuaW1hdGUoJzE1MG1zJylcblx0XHRcdF0pLFxuXHRcdF0pLFxuXHRdLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5FbXVsYXRlZCxcbn0pXG5leHBvcnQgY2xhc3MgUGFuZWxDb21wb25lbnQgZXh0ZW5kcyBEaXNwb3NhYmxlQ29tcG9uZW50IHtcblxuXHRvcGVuZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IHN0cmluZyxcblx0XHRASW5qZWN0KEVESVRPUl9DT05GSUcpIHByaXZhdGUgY29uZmlnOiBFZGl0b3JDb25maWcsXG5cdCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRASG9zdExpc3RlbmVyKCdkb2N1bWVudDprZXlkb3duJywgWyckZXZlbnQnXSlcblx0b25LZXlkb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG5cdFx0aWYgKGV2ZW50LmtleSA9PT0gJ2UnICYmIGV2ZW50LmN0cmxLZXkpIHtcblx0XHRcdHRoaXMub3BlbmVkID0gdGhpcy5jb25maWcuZW5hYmxlZCAmJiAhdGhpcy5vcGVuZWQ7XG5cdFx0XHRjb25zb2xlLmxvZygnUGFuZWxDb21wb25lbnQuZG9jdW1lbnQ6a2V5ZG93bicsIHRoaXMub3BlbmVkKTtcblx0XHR9XG5cdH1cblxufVxuIiwiPGRpdiBjbGFzcz1cInBhbmVsXCIgW0BvcGVuQ2xvc2VdPVwib3BlbmVkID8gJ29wZW4nIDogJ2Nsb3NlZCdcIiAoY2xpY2tPdXRzaWRlKT1cIm9wZW5lZCA9IGZhbHNlXCI+XG5cdDxuZy1jb250YWluZXIgKm5nSWY9XCJvcGVuZWRcIj5cblx0XHQ8bmctY29udGFpbmVyIGJ1bmRsZT1cImVkaXRvclwiPjwvbmctY29udGFpbmVyPlxuXHQ8L25nLWNvbnRhaW5lcj5cbjwvZGl2PlxuIl19