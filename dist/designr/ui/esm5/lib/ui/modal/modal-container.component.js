import { __extends } from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { DisposableComponent } from '@designr/core';
import { map, takeUntil } from 'rxjs/operators';
import { ModalService } from './modal.service';
import * as i0 from "@angular/core";
import * as i1 from "./modal.service";
import * as i2 from "@angular/common";
import * as i3 from "./modal-view.component";
import * as i4 from "@designr/core";
function ModalContainerComponent_button_4_Template(rf, ctx) { if (rf & 1) {
    var _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 9);
    i0.ɵɵlistener("click", function ModalContainerComponent_button_4_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r11); var ctx_r10 = i0.ɵɵnextContext(); return ctx_r10.doPrev(); });
    i0.ɵɵpipe(1, "label");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(2, "svg");
    i0.ɵɵelement(3, "use", 10);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(4, "span");
    i0.ɵɵtext(5);
    i0.ɵɵpipe(6, "label");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("title", i0.ɵɵpipeBind2(1, 2, "modal.back", "back"));
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(6, 5, "modal.back", "back"));
} }
function ModalContainerComponent_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "core-modal-view-component", 11);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var modal_r12 = ctx.$implicit;
    var last_r13 = ctx.last;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("modal", modal_r12)("hidden", !last_r13);
} }
var _c0 = function (a0) { return { active: a0 }; };
var ModalContainerComponent = /** @class */ (function (_super) {
    __extends(ModalContainerComponent, _super);
    function ModalContainerComponent(modalService) {
        var _this = _super.call(this) || this;
        _this.modalService = modalService;
        _this.modalCount = 0;
        return _this;
    }
    ModalContainerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.modalService.modals$.pipe(takeUntil(this.unsubscribe), map(function (modals) {
            _this.modalCount = modals.length;
            var modal = modals.length ? modals[modals.length - 1] : null;
            return modal;
        })).subscribe(function (modal) {
            _this.className = modal ? modal.className : null;
        });
    };
    ModalContainerComponent.prototype.doClose = function () {
        this.modalService.close();
    };
    ModalContainerComponent.prototype.doPrev = function () {
        this.modalService.prev();
    };
    ModalContainerComponent.ɵfac = function ModalContainerComponent_Factory(t) { return new (t || ModalContainerComponent)(i0.ɵɵdirectiveInject(i1.ModalService)); };
    ModalContainerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ModalContainerComponent, selectors: [["core-modal-container-component"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 14, vars: 12, consts: [[1, "modal", 3, "ngClass"], [1, "modal__background", 3, "click"], [1, "modal__page", 3, "ngClass"], [1, "modal__header"], ["type", "button", "class", "btn btn--prev", 3, "title", "click", 4, "ngIf"], ["type", "button", "title", "'modal.close' | label : 'close'", 1, "btn", "btn--close", 3, "click"], [0, "xlink", "href", "#close"], [1, "modal__content"], [4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn--prev", 3, "title", "click"], [0, "xlink", "href", "#prev"], [3, "modal", "hidden"]], template: function ModalContainerComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "div", 1);
            i0.ɵɵlistener("click", function ModalContainerComponent_Template_div_click_1_listener($event) { return ctx.doClose(); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "div", 2);
            i0.ɵɵelementStart(3, "div", 3);
            i0.ɵɵtemplate(4, ModalContainerComponent_button_4_Template, 7, 8, "button", 4);
            i0.ɵɵelementStart(5, "button", 5);
            i0.ɵɵlistener("click", function ModalContainerComponent_Template_button_click_5_listener($event) { return ctx.doClose(); });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(6, "svg");
            i0.ɵɵelement(7, "use", 6);
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(8, "span");
            i0.ɵɵtext(9);
            i0.ɵɵpipe(10, "label");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "div", 7);
            i0.ɵɵtemplate(12, ModalContainerComponent_ng_container_12_Template, 2, 2, "ng-container", 8);
            i0.ɵɵpipe(13, "async");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(10, _c0, ctx.modalCount > 0));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngClass", ctx.className);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.modalCount > 1);
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(10, 5, "modal.close", "close"));
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(13, 8, ctx.modalService.modals$));
        } }, directives: [i2.NgClass, i2.NgIf, i2.NgForOf, i3.ModalViewComponent], pipes: [i4.LabelPipe, i2.AsyncPipe], encapsulation: 2 });
    return ModalContainerComponent;
}(DisposableComponent));
export { ModalContainerComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ModalContainerComponent, [{
        type: Component,
        args: [{
                selector: 'core-modal-container-component',
                templateUrl: './modal-container.component.html',
                encapsulation: ViewEncapsulation.Emulated,
            }]
    }], function () { return [{ type: i1.ModalService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL3VpLyIsInNvdXJjZXMiOlsibGliL3VpL21vZGFsL21vZGFsLWNvbnRhaW5lci5jb21wb25lbnQudHMiLCJsaWIvdWkvbW9kYWwvbW9kYWwtY29udGFpbmVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWhELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7Ozs7Ozs7SUNBNUMsaUNBQ0M7SUFEMkMsaU1BQWtCOztJQUM3RCxtQkFBSztJQUFMLDJCQUFLO0lBQUEsMEJBQTBCO0lBQUEsaUJBQU07SUFBQyxvQkFBTTtJQUFOLDRCQUFNO0lBQUEsWUFBaUM7O0lBQUEsaUJBQU87SUFDckYsaUJBQVM7O0lBRjZFLGtFQUF1QztJQUNoRixlQUFpQztJQUFqQyxnRUFBaUM7OztJQU85RSw2QkFDQztJQUFBLGdEQUF3RjtJQUN6RiwwQkFBZTs7OztJQURhLGVBQWU7SUFBZixpQ0FBZSxxQkFBQTs7O0FEUDlDO0lBTTZDLDJDQUFtQjtJQUsvRCxpQ0FDUSxZQUEwQjtRQURsQyxZQUdDLGlCQUFPLFNBQ1A7UUFITyxrQkFBWSxHQUFaLFlBQVksQ0FBYztRQUpsQyxnQkFBVSxHQUFXLENBQUMsQ0FBQzs7SUFPdkIsQ0FBQztJQUVELDBDQUFRLEdBQVI7UUFBQSxpQkFXQztRQVZBLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FDN0IsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFDM0IsR0FBRyxDQUFDLFVBQUMsTUFBZTtZQUNuQixLQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7WUFDaEMsSUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUMvRCxPQUFPLEtBQUssQ0FBQztRQUNkLENBQUMsQ0FBQyxDQUNGLENBQUMsU0FBUyxDQUFDLFVBQUMsS0FBWTtZQUN4QixLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ2pELENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVELHlDQUFPLEdBQVA7UUFDQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCx3Q0FBTSxHQUFOO1FBQ0MsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMxQixDQUFDO2tHQTlCVyx1QkFBdUI7Z0VBQXZCLHVCQUF1QjtZQ1pwQyw4QkFDQztZQUFBLDhCQUF5RDtZQUExQix1R0FBUyxhQUFTLElBQUM7WUFBQyxpQkFBTTtZQUN6RCw4QkFDQztZQUFBLDhCQUNDO1lBQUEsOEVBQ0M7WUFFRCxpQ0FDQztZQUQ0QywwR0FBUyxhQUFTLElBQUM7WUFDL0QsbUJBQUs7WUFBTCwyQkFBSztZQUFBLHlCQUEyQjtZQUFBLGlCQUFNO1lBQUMsb0JBQU07WUFBTiw0QkFBTTtZQUFBLFlBQW1DOztZQUFBLGlCQUFPO1lBQ3hGLGlCQUFTO1lBQ1YsaUJBQU07WUFDTiwrQkFDQztZQUFBLDRGQUNDOztZQUVGLGlCQUFNO1lBQ1AsaUJBQU07WUFDUCxpQkFBTTs7WUFqQmEseUVBQXNDO1lBRS9CLGVBQXFCO1lBQXJCLHVDQUFxQjtZQUVtQixlQUFzQjtZQUF0Qix5Q0FBc0I7WUFJdkMsZUFBbUM7WUFBbkMsbUVBQW1DO1lBSW5FLGVBQXNFO1lBQXRFLHlFQUFzRTs7a0NEWnZGO0NBNENDLEFBdENELENBTTZDLG1CQUFtQixHQWdDL0Q7U0FoQ1ksdUJBQXVCO2tEQUF2Qix1QkFBdUI7Y0FObkMsU0FBUztlQUFDO2dCQUNWLFFBQVEsRUFBRSxnQ0FBZ0M7Z0JBQzFDLFdBQVcsRUFBRSxrQ0FBa0M7Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxRQUFRO2FBQ3pDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEaXNwb3NhYmxlQ29tcG9uZW50IH0gZnJvbSAnQGRlc2lnbnIvY29yZSc7XG5pbXBvcnQgeyBtYXAsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE1vZGFsIH0gZnJvbSAnLi9tb2RhbCc7XG5pbXBvcnQgeyBNb2RhbFNlcnZpY2UgfSBmcm9tICcuL21vZGFsLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdjb3JlLW1vZGFsLWNvbnRhaW5lci1jb21wb25lbnQnLFxuXHR0ZW1wbGF0ZVVybDogJy4vbW9kYWwtY29udGFpbmVyLmNvbXBvbmVudC5odG1sJyxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uRW11bGF0ZWQsXG59KVxuXG5leHBvcnQgY2xhc3MgTW9kYWxDb250YWluZXJDb21wb25lbnQgZXh0ZW5kcyBEaXNwb3NhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRtb2RhbENvdW50OiBudW1iZXIgPSAwO1xuXHRjbGFzc05hbWU/OiBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHVibGljIG1vZGFsU2VydmljZTogTW9kYWxTZXJ2aWNlXG5cdCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHR0aGlzLm1vZGFsU2VydmljZS5tb2RhbHMkLnBpcGUoXG5cdFx0XHR0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSksXG5cdFx0XHRtYXAoKG1vZGFsczogTW9kYWxbXSkgPT4ge1xuXHRcdFx0XHR0aGlzLm1vZGFsQ291bnQgPSBtb2RhbHMubGVuZ3RoO1xuXHRcdFx0XHRjb25zdCBtb2RhbCA9IG1vZGFscy5sZW5ndGggPyBtb2RhbHNbbW9kYWxzLmxlbmd0aCAtIDFdIDogbnVsbDtcblx0XHRcdFx0cmV0dXJuIG1vZGFsO1xuXHRcdFx0fSlcblx0XHQpLnN1YnNjcmliZSgobW9kYWw6IE1vZGFsKSA9PiB7XG5cdFx0XHR0aGlzLmNsYXNzTmFtZSA9IG1vZGFsID8gbW9kYWwuY2xhc3NOYW1lIDogbnVsbDtcblx0XHR9KTtcblx0fVxuXG5cdGRvQ2xvc2UoKSB7XG5cdFx0dGhpcy5tb2RhbFNlcnZpY2UuY2xvc2UoKTtcblx0fVxuXG5cdGRvUHJldigpIHtcblx0XHR0aGlzLm1vZGFsU2VydmljZS5wcmV2KCk7XG5cdH1cblxufVxuIiwiPGRpdiBjbGFzcz1cIm1vZGFsXCIgW25nQ2xhc3NdPVwieyBhY3RpdmU6IG1vZGFsQ291bnQgPiAwIH1cIj5cclxuXHQ8ZGl2IGNsYXNzPVwibW9kYWxfX2JhY2tncm91bmRcIiAoY2xpY2spPVwiZG9DbG9zZSgpXCI+PC9kaXY+XHJcblx0PGRpdiBjbGFzcz1cIm1vZGFsX19wYWdlXCIgW25nQ2xhc3NdPVwiY2xhc3NOYW1lXCI+XHJcblx0XHQ8ZGl2IGNsYXNzPVwibW9kYWxfX2hlYWRlclwiPlxyXG5cdFx0XHQ8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tLXByZXZcIiAoY2xpY2spPVwiZG9QcmV2KClcIiAqbmdJZj1cIm1vZGFsQ291bnQgPiAxXCIgW3RpdGxlXT1cIidtb2RhbC5iYWNrJyB8IGxhYmVsIDogJ2JhY2snXCI+XHJcblx0XHRcdFx0PHN2Zz48dXNlIHhsaW5rOmhyZWY9XCIjcHJldlwiIC8+PC9zdmc+IDxzcGFuPnt7J21vZGFsLmJhY2snIHwgbGFiZWwgOiAnYmFjayd9fTwvc3Bhbj5cclxuXHRcdFx0PC9idXR0b24+XHJcblx0XHRcdDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi0tY2xvc2VcIiAoY2xpY2spPVwiZG9DbG9zZSgpXCIgdGl0bGU9XCInbW9kYWwuY2xvc2UnIHwgbGFiZWwgOiAnY2xvc2UnXCI+XHJcblx0XHRcdFx0PHN2Zz48dXNlIHhsaW5rOmhyZWY9XCIjY2xvc2VcIiAvPjwvc3ZnPiA8c3Bhbj57eydtb2RhbC5jbG9zZScgfCBsYWJlbCA6ICdjbG9zZSd9fTwvc3Bhbj5cclxuXHRcdFx0PC9idXR0b24+XHJcblx0XHQ8L2Rpdj5cclxuXHRcdDxkaXYgY2xhc3M9XCJtb2RhbF9fY29udGVudFwiPlxyXG5cdFx0XHQ8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBtb2RhbCBvZiAobW9kYWxTZXJ2aWNlLm1vZGFscyQgfCBhc3luYyk7IGxldCBsYXN0ID0gbGFzdDtcIj5cclxuXHRcdFx0XHQ8Y29yZS1tb2RhbC12aWV3LWNvbXBvbmVudCBbbW9kYWxdPVwibW9kYWxcIiBbaGlkZGVuXT1cIiFsYXN0XCI+PC9jb3JlLW1vZGFsLXZpZXctY29tcG9uZW50PlxyXG5cdFx0XHQ8L25nLWNvbnRhaW5lcj5cclxuXHRcdDwvZGl2PlxyXG5cdDwvZGl2PlxyXG48L2Rpdj5cclxuIl19