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
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 9);
    i0.ɵɵlistener("click", function ModalContainerComponent_button_4_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.doPrev(); });
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
    const modal_r4 = ctx.$implicit;
    const last_r5 = ctx.last;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("modal", modal_r4)("hidden", !last_r5);
} }
const _c0 = function (a0) { return { active: a0 }; };
export class ModalContainerComponent extends DisposableComponent {
    constructor(modalService) {
        super();
        this.modalService = modalService;
        this.modalCount = 0;
    }
    ngOnInit() {
        this.modalService.modals$.pipe(takeUntil(this.unsubscribe), map((modals) => {
            this.modalCount = modals.length;
            const modal = modals.length ? modals[modals.length - 1] : null;
            return modal;
        })).subscribe((modal) => {
            this.className = modal ? modal.className : null;
        });
    }
    doClose() {
        this.modalService.close();
    }
    doPrev() {
        this.modalService.prev();
    }
}
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
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ModalContainerComponent, [{
        type: Component,
        args: [{
                selector: 'core-modal-container-component',
                templateUrl: './modal-container.component.html',
                encapsulation: ViewEncapsulation.Emulated,
            }]
    }], function () { return [{ type: i1.ModalService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL3VpLyIsInNvdXJjZXMiOlsibGliL3VpL21vZGFsL21vZGFsLWNvbnRhaW5lci5jb21wb25lbnQudHMiLCJsaWIvdWkvbW9kYWwvbW9kYWwtY29udGFpbmVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFaEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7Ozs7OztJQ0E1QyxpQ0FDQztJQUQyQyxnTUFBa0I7O0lBQzdELG1CQUFLO0lBQUwsMkJBQUs7SUFBQSwwQkFBMEI7SUFBQSxpQkFBTTtJQUFDLG9CQUFNO0lBQU4sNEJBQU07SUFBQSxZQUFpQzs7SUFBQSxpQkFBTztJQUNyRixpQkFBUzs7SUFGNkUsa0VBQXVDO0lBQ2hGLGVBQWlDO0lBQWpDLGdFQUFpQzs7O0lBTzlFLDZCQUNDO0lBQUEsZ0RBQXdGO0lBQ3pGLDBCQUFlOzs7O0lBRGEsZUFBZTtJQUFmLGdDQUFlLG9CQUFBOzs7QUREOUMsTUFBTSxPQUFPLHVCQUF3QixTQUFRLG1CQUFtQjtJQUsvRCxZQUNRLFlBQTBCO1FBRWpDLEtBQUssRUFBRSxDQUFDO1FBRkQsaUJBQVksR0FBWixZQUFZLENBQWM7UUFKbEMsZUFBVSxHQUFXLENBQUMsQ0FBQztJQU92QixDQUFDO0lBRUQsUUFBUTtRQUNQLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FDN0IsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFDM0IsR0FBRyxDQUFDLENBQUMsTUFBZSxFQUFFLEVBQUU7WUFDdkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO1lBQ2hDLE1BQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDL0QsT0FBTyxLQUFLLENBQUM7UUFDZCxDQUFDLENBQUMsQ0FDRixDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQVksRUFBRSxFQUFFO1lBQzVCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDakQsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBRUQsT0FBTztRQUNOLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVELE1BQU07UUFDTCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzFCLENBQUM7OzhGQTlCVyx1QkFBdUI7NERBQXZCLHVCQUF1QjtRQ1pwQyw4QkFDQztRQUFBLDhCQUF5RDtRQUExQix1R0FBUyxhQUFTLElBQUM7UUFBQyxpQkFBTTtRQUN6RCw4QkFDQztRQUFBLDhCQUNDO1FBQUEsOEVBQ0M7UUFFRCxpQ0FDQztRQUQ0QywwR0FBUyxhQUFTLElBQUM7UUFDL0QsbUJBQUs7UUFBTCwyQkFBSztRQUFBLHlCQUEyQjtRQUFBLGlCQUFNO1FBQUMsb0JBQU07UUFBTiw0QkFBTTtRQUFBLFlBQW1DOztRQUFBLGlCQUFPO1FBQ3hGLGlCQUFTO1FBQ1YsaUJBQU07UUFDTiwrQkFDQztRQUFBLDRGQUNDOztRQUVGLGlCQUFNO1FBQ1AsaUJBQU07UUFDUCxpQkFBTTs7UUFqQmEseUVBQXNDO1FBRS9CLGVBQXFCO1FBQXJCLHVDQUFxQjtRQUVtQixlQUFzQjtRQUF0Qix5Q0FBc0I7UUFJdkMsZUFBbUM7UUFBbkMsbUVBQW1DO1FBSW5FLGVBQXNFO1FBQXRFLHlFQUFzRTs7a0REQTFFLHVCQUF1QjtjQU5uQyxTQUFTO2VBQUM7Z0JBQ1YsUUFBUSxFQUFFLGdDQUFnQztnQkFDMUMsV0FBVyxFQUFFLGtDQUFrQztnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLFFBQVE7YUFDekMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERpc3Bvc2FibGVDb21wb25lbnQgfSBmcm9tICdAZGVzaWduci9jb3JlJztcbmltcG9ydCB7IG1hcCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTW9kYWwgfSBmcm9tICcuL21vZGFsJztcbmltcG9ydCB7IE1vZGFsU2VydmljZSB9IGZyb20gJy4vbW9kYWwuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2NvcmUtbW9kYWwtY29udGFpbmVyLWNvbXBvbmVudCcsXG5cdHRlbXBsYXRlVXJsOiAnLi9tb2RhbC1jb250YWluZXIuY29tcG9uZW50Lmh0bWwnLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5FbXVsYXRlZCxcbn0pXG5cbmV4cG9ydCBjbGFzcyBNb2RhbENvbnRhaW5lckNvbXBvbmVudCBleHRlbmRzIERpc3Bvc2FibGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdG1vZGFsQ291bnQ6IG51bWJlciA9IDA7XG5cdGNsYXNzTmFtZT86IHN0cmluZztcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwdWJsaWMgbW9kYWxTZXJ2aWNlOiBNb2RhbFNlcnZpY2Vcblx0KSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMubW9kYWxTZXJ2aWNlLm1vZGFscyQucGlwZShcblx0XHRcdHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlKSxcblx0XHRcdG1hcCgobW9kYWxzOiBNb2RhbFtdKSA9PiB7XG5cdFx0XHRcdHRoaXMubW9kYWxDb3VudCA9IG1vZGFscy5sZW5ndGg7XG5cdFx0XHRcdGNvbnN0IG1vZGFsID0gbW9kYWxzLmxlbmd0aCA/IG1vZGFsc1ttb2RhbHMubGVuZ3RoIC0gMV0gOiBudWxsO1xuXHRcdFx0XHRyZXR1cm4gbW9kYWw7XG5cdFx0XHR9KVxuXHRcdCkuc3Vic2NyaWJlKChtb2RhbDogTW9kYWwpID0+IHtcblx0XHRcdHRoaXMuY2xhc3NOYW1lID0gbW9kYWwgPyBtb2RhbC5jbGFzc05hbWUgOiBudWxsO1xuXHRcdH0pO1xuXHR9XG5cblx0ZG9DbG9zZSgpIHtcblx0XHR0aGlzLm1vZGFsU2VydmljZS5jbG9zZSgpO1xuXHR9XG5cblx0ZG9QcmV2KCkge1xuXHRcdHRoaXMubW9kYWxTZXJ2aWNlLnByZXYoKTtcblx0fVxuXG59XG4iLCI8ZGl2IGNsYXNzPVwibW9kYWxcIiBbbmdDbGFzc109XCJ7IGFjdGl2ZTogbW9kYWxDb3VudCA+IDAgfVwiPlxyXG5cdDxkaXYgY2xhc3M9XCJtb2RhbF9fYmFja2dyb3VuZFwiIChjbGljayk9XCJkb0Nsb3NlKClcIj48L2Rpdj5cclxuXHQ8ZGl2IGNsYXNzPVwibW9kYWxfX3BhZ2VcIiBbbmdDbGFzc109XCJjbGFzc05hbWVcIj5cclxuXHRcdDxkaXYgY2xhc3M9XCJtb2RhbF9faGVhZGVyXCI+XHJcblx0XHRcdDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi0tcHJldlwiIChjbGljayk9XCJkb1ByZXYoKVwiICpuZ0lmPVwibW9kYWxDb3VudCA+IDFcIiBbdGl0bGVdPVwiJ21vZGFsLmJhY2snIHwgbGFiZWwgOiAnYmFjaydcIj5cclxuXHRcdFx0XHQ8c3ZnPjx1c2UgeGxpbms6aHJlZj1cIiNwcmV2XCIgLz48L3N2Zz4gPHNwYW4+e3snbW9kYWwuYmFjaycgfCBsYWJlbCA6ICdiYWNrJ319PC9zcGFuPlxyXG5cdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLS1jbG9zZVwiIChjbGljayk9XCJkb0Nsb3NlKClcIiB0aXRsZT1cIidtb2RhbC5jbG9zZScgfCBsYWJlbCA6ICdjbG9zZSdcIj5cclxuXHRcdFx0XHQ8c3ZnPjx1c2UgeGxpbms6aHJlZj1cIiNjbG9zZVwiIC8+PC9zdmc+IDxzcGFuPnt7J21vZGFsLmNsb3NlJyB8IGxhYmVsIDogJ2Nsb3NlJ319PC9zcGFuPlxyXG5cdFx0XHQ8L2J1dHRvbj5cclxuXHRcdDwvZGl2PlxyXG5cdFx0PGRpdiBjbGFzcz1cIm1vZGFsX19jb250ZW50XCI+XHJcblx0XHRcdDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IG1vZGFsIG9mIChtb2RhbFNlcnZpY2UubW9kYWxzJCB8IGFzeW5jKTsgbGV0IGxhc3QgPSBsYXN0O1wiPlxyXG5cdFx0XHRcdDxjb3JlLW1vZGFsLXZpZXctY29tcG9uZW50IFttb2RhbF09XCJtb2RhbFwiIFtoaWRkZW5dPVwiIWxhc3RcIj48L2NvcmUtbW9kYWwtdmlldy1jb21wb25lbnQ+XHJcblx0XHRcdDwvbmctY29udGFpbmVyPlxyXG5cdFx0PC9kaXY+XHJcblx0PC9kaXY+XHJcbjwvZGl2PlxyXG4iXX0=