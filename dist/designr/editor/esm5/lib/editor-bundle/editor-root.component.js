import { __extends } from "tslib";
import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID, ViewEncapsulation } from '@angular/core';
import { FormService } from '@designr/control';
import { DisposableComponent } from '@designr/core';
import { ConfigService, PageResolverService } from '@designr/page';
import { MarkdownService } from 'ngx-markdown';
import { takeUntil } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@designr/page";
import * as i2 from "ngx-markdown";
import * as i3 from "@designr/control";
import * as i4 from "@angular/common";
import * as i5 from "@angular/forms";
function EditorRootComponent_ng_container_0_div_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "control-outlet", 12);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var option_r11 = ctx.$implicit;
    i0.ɵɵnextContext();
    var _r9 = i0.ɵɵreference(2);
    i0.ɵɵadvance(1);
    i0.ɵɵclassMapInterpolate1("fieldset__field fieldset__field--", option_r11.schema, "");
    i0.ɵɵproperty("option", option_r11)("form", _r9);
} }
var _c0 = function (a0) { return { active: a0 }; };
var _c1 = function (a0) { return { "btn--busy": a0 }; };
function EditorRootComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    var _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "form", 1, 2);
    i0.ɵɵlistener("ngSubmit", function EditorRootComponent_ng_container_0_Template_form_ngSubmit_1_listener($event) { i0.ɵɵrestoreView(_r13); var _r9 = i0.ɵɵreference(2); var ctx_r12 = i0.ɵɵnextContext(); return _r9.valid && ctx_r12.onSubmit(_r9.value); });
    i0.ɵɵelementStart(3, "div", 3);
    i0.ɵɵelementStart(4, "span", 4);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "span", 5);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "span", 6);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelement(10, "hr");
    i0.ɵɵelement(11, "h2", 7);
    i0.ɵɵelement(12, "hr");
    i0.ɵɵtemplate(13, EditorRootComponent_ng_container_0_div_13_Template, 2, 5, "div", 8);
    i0.ɵɵelementStart(14, "div", 9);
    i0.ɵɵelementStart(15, "button", 10);
    i0.ɵɵlistener("click", function EditorRootComponent_ng_container_0_Template_button_click_15_listener($event) { i0.ɵɵrestoreView(_r13); var ctx_r14 = i0.ɵɵnextContext(); return ctx_r14.onReset(); });
    i0.ɵɵelementStart(16, "span");
    i0.ɵɵtext(17, "Annulla");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "button", 11);
    i0.ɵɵelementStart(19, "span");
    i0.ɵɵtext(20, "Salva");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var _r9 = i0.ɵɵreference(2);
    var ctx_r8 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("formGroup", _r9);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r8.page.id);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(10, _c0, ctx_r8.page.active));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r8.page.active ? "active" : "inactive");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r8.componentName);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("innerHTML", ctx_r8.page.title, i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r8.options);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", ctx_r8.submitted || !_r9.valid);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("disabled", ctx_r8.submitted || !_r9.valid)("ngClass", i0.ɵɵpureFunction1(12, _c1, ctx_r8.busy));
} }
var EditorRootComponent = /** @class */ (function (_super) {
    __extends(EditorRootComponent, _super);
    function EditorRootComponent(platformId, configService, markdownService, formService, pageResolverService) {
        var _this = _super.call(this) || this;
        _this.platformId = platformId;
        _this.configService = configService;
        _this.markdownService = markdownService;
        _this.formService = formService;
        _this.pageResolverService = pageResolverService;
        _this.busy = false;
        _this.submitted = false;
        return _this;
    }
    Object.defineProperty(EditorRootComponent.prototype, "page", {
        get: function () {
            return this._page;
        },
        set: function (page) {
            var _this = this;
            this._pageCopy = Object.assign({}, page);
            this._page = page;
            if (this._page) {
                this.options = this.formService.getOptions(this.getControlsByPage(page));
                this.form = this.formService.getFormGroup(this.options);
                this.form.valueChanges.subscribe(function (x) {
                    _this.onAssign(x); // Object.assign(this._page, x);
                });
            }
            else {
                this.options = [];
                this.form = null;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditorRootComponent.prototype, "componentName", {
        get: function () {
            if (this._page) {
                var component = this.configService.options.pages[this._page.component];
                if (component) {
                    return component.name;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    EditorRootComponent.prototype.getControlsByPage = function (page) {
        return page ? Object.keys(page).filter(function (key) { return typeof page[key] !== 'object'; }).map(function (key, i) {
            return {
                key: key,
                value: page[key],
                schema: key === 'description' ? 'markdown' : 'text',
                label: key,
                placeholder: key,
                required: false,
                order: i + 1
            };
        }) : [];
    };
    EditorRootComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (isPlatformBrowser(this.platformId)) {
            this.pageResolverService.events$.pipe(takeUntil(this.unsubscribe)).subscribe(function (resolver) {
                // console.log('EditorRootComponent.resolver', resolver);
                _this.page = resolver ? resolver.page : null;
            });
        }
    };
    EditorRootComponent.prototype.onReset = function () {
        var _this = this;
        // console.log('EditorRootComponent.onReset');
        Object.keys(this.form.controls).forEach(function (key) {
            _this.form.get(key).setValue(_this._pageCopy[key]);
        });
        /*
        const keys = this.controls.map(x => x.key);
        keys.forEach(k => {
            // console.log(k, this._page[k], this._pageCopy[k]);
            this._page[k] = this._pageCopy[k];
        });
        */
    };
    EditorRootComponent.prototype.onSubmit = function (model) {
        // console.log('EditorRootComponent.onSubmit', model);
        this.onAssign(model);
        // Object.assign(this._page, model);
    };
    EditorRootComponent.prototype.onAssign = function (model) {
        var _this = this;
        Object.keys(this.form.controls).forEach(function (key) {
            switch (key) {
                case 'description':
                    _this._page[key] = _this.markdownService.compile(model[key]);
                    break;
                default:
                    _this._page[key] = model[key];
            }
        });
    };
    EditorRootComponent.ɵfac = function EditorRootComponent_Factory(t) { return new (t || EditorRootComponent)(i0.ɵɵdirectiveInject(PLATFORM_ID), i0.ɵɵdirectiveInject(i1.ConfigService), i0.ɵɵdirectiveInject(i2.MarkdownService), i0.ɵɵdirectiveInject(i3.FormService), i0.ɵɵdirectiveInject(i1.PageResolverService)); };
    EditorRootComponent.ɵcmp = i0.ɵɵdefineComponent({ type: EditorRootComponent, selectors: [["editor-root-component"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 1, vars: 1, consts: [[4, "ngIf"], ["name", "form", "role", "form", "novalidate", "", "autocomplete", "off", 1, "form", 3, "formGroup", "ngSubmit"], ["form", "ngForm"], [1, "info"], [1, "id"], [1, "status", 3, "ngClass"], [1, "component"], [1, "h1", 3, "innerHTML"], [4, "ngFor", "ngForOf"], [1, "action-bar"], ["type", "text", "title", "Annulla", 1, "btn", "btn--secondary", 3, "disabled", "click"], ["type", "submit", "title", "Salva", 1, "btn", "btn--primary", 3, "disabled", "ngClass"], [3, "option", "form"]], template: function EditorRootComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, EditorRootComponent_ng_container_0_Template, 21, 14, "ng-container", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.page);
        } }, directives: [i4.NgIf, i5.ɵangular_packages_forms_forms_y, i5.NgControlStatusGroup, i5.FormGroupDirective, i4.NgClass, i4.NgForOf, i3.ControlOutletComponent], styles: ["[_nghost-%COMP%]{font-family:Arial,Helvetica,sans-serif;font-size:16px;line-height:1.5;background:#fafafa;color:#55555a}.h1[_ngcontent-%COMP%]{color:#55555a;font-size:19px}form[_ngcontent-%COMP%]{margin:0}label[_ngcontent-%COMP%]{display:block;width:100%;color:#55555a;font-weight:700;font-size:12px}.id[_ngcontent-%COMP%]{display:inline-block;padding:4px 6px;background:#0875c2;color:#fff;border-radius:3px;font-size:12px;line-height:1;margin-right:4px}.status[_ngcontent-%COMP%]{display:inline-block;padding:4px 6px;background:#fff;color:#000;border-radius:3px;font-size:12px;line-height:1;margin-right:4px}.status.active[_ngcontent-%COMP%]{background:green;color:#fff}.component[_ngcontent-%COMP%]{display:inline-block;font-size:14px;font-style:italic}"] });
    return EditorRootComponent;
}(DisposableComponent));
export { EditorRootComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(EditorRootComponent, [{
        type: Component,
        args: [{
                selector: 'editor-root-component',
                templateUrl: './editor-root.component.html',
                styleUrls: ['./editor-root.component.scss'],
                encapsulation: ViewEncapsulation.Emulated,
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }, { type: i1.ConfigService }, { type: i2.MarkdownService }, { type: i3.FormService }, { type: i1.PageResolverService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLXJvb3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvZWRpdG9yLyIsInNvdXJjZXMiOlsibGliL2VkaXRvci1idW5kbGUvZWRpdG9yLXJvb3QuY29tcG9uZW50LnRzIiwibGliL2VkaXRvci1idW5kbGUvZWRpdG9yLXJvb3QuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFVLFdBQVcsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUxRixPQUFPLEVBQWlCLFdBQVcsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQzlELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsYUFBYSxFQUFzQixtQkFBbUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQy9DLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7SUNNekMsMkJBQ0M7SUFBQSxxQ0FBNEg7SUFDN0gsaUJBQU07Ozs7O0lBRFcsZUFBMEQ7SUFBMUQscUZBQTBEO0lBQUMsbUNBQWlCLGFBQUE7Ozs7OztJQWQvRiw2QkFDQztJQUFBLGtDQUNDO0lBRGlELDRQQUErQztJQUNoRyw4QkFDQztJQUFBLCtCQUFpQjtJQUFBLFlBQVc7SUFBQSxpQkFBTztJQUNuQywrQkFBeUQ7SUFBQSxZQUF1QztJQUFBLGlCQUFPO0lBQ3ZHLCtCQUF3QjtJQUFBLFlBQWlCO0lBQUEsaUJBQU87SUFDakQsaUJBQU07SUFDTixzQkFDQTtJQUFBLHlCQUE2QztJQUk3QyxzQkFDQTtJQUFBLHFGQUNDO0lBR0QsK0JBQ0M7SUFBQSxtQ0FBeUg7SUFBcEMscU1BQW1CO0lBQWlCLDZC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QyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckIsb0NBQW9DO0lBQ3JDLENBQUM7SUFFRCxzQ0FBUSxHQUFSLFVBQVMsS0FBSztRQUFkLGlCQVVDO1FBVEEsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFBLEdBQUc7WUFDMUMsUUFBUSxHQUFHLEVBQUU7Z0JBQ1osS0FBSyxhQUFhO29CQUNqQixLQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO29CQUMzRCxNQUFNO2dCQUNQO29CQUNDLEtBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQzlCO1FBQ0YsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDOzBGQXhHVyxtQkFBbUIsdUJBWXRCLFdBQVc7NERBWlIsbUJBQW1CO1lDZmhDLHdGQUNDOztZQURhLCtCQUFZOzs4QkRBMUI7Q0F5SEMsQUFoSEQsQ0FNeUMsbUJBQW1CLEdBMEczRDtTQTFHWSxtQkFBbUI7a0RBQW5CLG1CQUFtQjtjQU4vQixTQUFTO2VBQUM7Z0JBQ1YsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsV0FBVyxFQUFFLDhCQUE4QjtnQkFDM0MsU0FBUyxFQUFFLENBQUMsOEJBQThCLENBQUM7Z0JBQzNDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxRQUFRO2FBQ3pDOztzQkFhRSxNQUFNO3VCQUFDLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDb21wb25lbnQsIEluamVjdCwgT25Jbml0LCBQTEFURk9STV9JRCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENvbnRyb2xPcHRpb24sIEZvcm1TZXJ2aWNlIH0gZnJvbSAnQGRlc2lnbnIvY29udHJvbCc7XG5pbXBvcnQgeyBEaXNwb3NhYmxlQ29tcG9uZW50IH0gZnJvbSAnQGRlc2lnbnIvY29yZSc7XG5pbXBvcnQgeyBDb25maWdTZXJ2aWNlLCBQYWdlLCBQYWdlUmVzb2x2ZXIsIFBhZ2VSZXNvbHZlclNlcnZpY2UgfSBmcm9tICdAZGVzaWduci9wYWdlJztcbmltcG9ydCB7IE1hcmtkb3duU2VydmljZSB9IGZyb20gJ25neC1tYXJrZG93bic7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2VkaXRvci1yb290LWNvbXBvbmVudCcsXG5cdHRlbXBsYXRlVXJsOiAnLi9lZGl0b3Itcm9vdC5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogWycuL2VkaXRvci1yb290LmNvbXBvbmVudC5zY3NzJ10sXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLkVtdWxhdGVkLFxufSlcbmV4cG9ydCBjbGFzcyBFZGl0b3JSb290Q29tcG9uZW50IGV4dGVuZHMgRGlzcG9zYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0cHJpdmF0ZSBfcGFnZUNvcHk6IFBhZ2U7XG5cdHByaXZhdGUgX3BhZ2U6IFBhZ2U7XG5cblx0b3B0aW9uczogQ29udHJvbE9wdGlvbjxhbnk+W107XG5cdGZvcm06IEZvcm1Hcm91cDtcblxuXHRidXN5OiBib29sZWFuID0gZmFsc2U7XG5cdHN1Ym1pdHRlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogc3RyaW5nLFxuXHRcdHByaXZhdGUgY29uZmlnU2VydmljZTogQ29uZmlnU2VydmljZSxcblx0XHRwcml2YXRlIG1hcmtkb3duU2VydmljZTogTWFya2Rvd25TZXJ2aWNlLFxuXHRcdHByaXZhdGUgZm9ybVNlcnZpY2U6IEZvcm1TZXJ2aWNlLFxuXHRcdHByaXZhdGUgcGFnZVJlc29sdmVyU2VydmljZTogUGFnZVJlc29sdmVyU2VydmljZSxcblx0KSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGdldCBwYWdlKCk6IFBhZ2Uge1xuXHRcdHJldHVybiB0aGlzLl9wYWdlO1xuXHR9XG5cblx0c2V0IHBhZ2UocGFnZTogUGFnZSkge1xuXHRcdHRoaXMuX3BhZ2VDb3B5ID0gT2JqZWN0LmFzc2lnbih7fSwgcGFnZSk7XG5cdFx0dGhpcy5fcGFnZSA9IHBhZ2U7XG5cdFx0aWYgKHRoaXMuX3BhZ2UpIHtcblx0XHRcdHRoaXMub3B0aW9ucyA9IHRoaXMuZm9ybVNlcnZpY2UuZ2V0T3B0aW9ucyh0aGlzLmdldENvbnRyb2xzQnlQYWdlKHBhZ2UpKTtcblx0XHRcdHRoaXMuZm9ybSA9IHRoaXMuZm9ybVNlcnZpY2UuZ2V0Rm9ybUdyb3VwKHRoaXMub3B0aW9ucyk7XG5cdFx0XHR0aGlzLmZvcm0udmFsdWVDaGFuZ2VzLnN1YnNjcmliZSh4ID0+IHtcblx0XHRcdFx0dGhpcy5vbkFzc2lnbih4KTsgLy8gT2JqZWN0LmFzc2lnbih0aGlzLl9wYWdlLCB4KTtcblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLm9wdGlvbnMgPSBbXTtcblx0XHRcdHRoaXMuZm9ybSA9IG51bGw7XG5cdFx0fVxuXHR9XG5cblx0Z2V0IGNvbXBvbmVudE5hbWUoKTogc3RyaW5nIHtcblx0XHRpZiAodGhpcy5fcGFnZSkge1xuXHRcdFx0Y29uc3QgY29tcG9uZW50ID0gdGhpcy5jb25maWdTZXJ2aWNlLm9wdGlvbnMucGFnZXNbdGhpcy5fcGFnZS5jb21wb25lbnRdO1xuXHRcdFx0aWYgKGNvbXBvbmVudCkge1xuXHRcdFx0XHRyZXR1cm4gY29tcG9uZW50Lm5hbWU7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Z2V0Q29udHJvbHNCeVBhZ2UocGFnZTogUGFnZSk6IENvbnRyb2xPcHRpb248YW55PltdIHtcblx0XHRyZXR1cm4gcGFnZSA/IE9iamVjdC5rZXlzKHBhZ2UpLmZpbHRlcihrZXkgPT4gdHlwZW9mIHBhZ2Vba2V5XSAhPT0gJ29iamVjdCcpLm1hcCgoa2V5OiBzdHJpbmcsIGk6IG51bWJlcikgPT4ge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0a2V5OiBrZXksXG5cdFx0XHRcdHZhbHVlOiBwYWdlW2tleV0sXG5cdFx0XHRcdHNjaGVtYToga2V5ID09PSAnZGVzY3JpcHRpb24nID8gJ21hcmtkb3duJyA6ICd0ZXh0Jyxcblx0XHRcdFx0bGFiZWw6IGtleSxcblx0XHRcdFx0cGxhY2Vob2xkZXI6IGtleSxcblx0XHRcdFx0cmVxdWlyZWQ6IGZhbHNlLFxuXHRcdFx0XHRvcmRlcjogaSArIDFcblx0XHRcdH07XG5cdFx0fSkgOiBbXTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG5cdFx0XHR0aGlzLnBhZ2VSZXNvbHZlclNlcnZpY2UuZXZlbnRzJC5waXBlKFxuXHRcdFx0XHR0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSlcblx0XHRcdCkuc3Vic2NyaWJlKChyZXNvbHZlcjogUGFnZVJlc29sdmVyKSA9PiB7XG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKCdFZGl0b3JSb290Q29tcG9uZW50LnJlc29sdmVyJywgcmVzb2x2ZXIpO1xuXHRcdFx0XHR0aGlzLnBhZ2UgPSByZXNvbHZlciA/IHJlc29sdmVyLnBhZ2UgOiBudWxsO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0b25SZXNldCgpIHtcblx0XHQvLyBjb25zb2xlLmxvZygnRWRpdG9yUm9vdENvbXBvbmVudC5vblJlc2V0Jyk7XG5cdFx0T2JqZWN0LmtleXModGhpcy5mb3JtLmNvbnRyb2xzKS5mb3JFYWNoKGtleSA9PiB7XG5cdFx0XHR0aGlzLmZvcm0uZ2V0KGtleSkuc2V0VmFsdWUodGhpcy5fcGFnZUNvcHlba2V5XSk7XG5cdFx0fSk7XG5cdFx0Lypcblx0XHRjb25zdCBrZXlzID0gdGhpcy5jb250cm9scy5tYXAoeCA9PiB4LmtleSk7XG5cdFx0a2V5cy5mb3JFYWNoKGsgPT4ge1xuXHRcdFx0Ly8gY29uc29sZS5sb2coaywgdGhpcy5fcGFnZVtrXSwgdGhpcy5fcGFnZUNvcHlba10pO1xuXHRcdFx0dGhpcy5fcGFnZVtrXSA9IHRoaXMuX3BhZ2VDb3B5W2tdO1xuXHRcdH0pO1xuXHRcdCovXG5cdH1cblxuXHRvblN1Ym1pdChtb2RlbCkge1xuXHRcdC8vIGNvbnNvbGUubG9nKCdFZGl0b3JSb290Q29tcG9uZW50Lm9uU3VibWl0JywgbW9kZWwpO1xuXHRcdHRoaXMub25Bc3NpZ24obW9kZWwpO1xuXHRcdC8vIE9iamVjdC5hc3NpZ24odGhpcy5fcGFnZSwgbW9kZWwpO1xuXHR9XG5cblx0b25Bc3NpZ24obW9kZWwpIHtcblx0XHRPYmplY3Qua2V5cyh0aGlzLmZvcm0uY29udHJvbHMpLmZvckVhY2goa2V5ID0+IHtcblx0XHRcdHN3aXRjaCAoa2V5KSB7XG5cdFx0XHRcdGNhc2UgJ2Rlc2NyaXB0aW9uJzpcblx0XHRcdFx0XHR0aGlzLl9wYWdlW2tleV0gPSB0aGlzLm1hcmtkb3duU2VydmljZS5jb21waWxlKG1vZGVsW2tleV0pO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdHRoaXMuX3BhZ2Vba2V5XSA9IG1vZGVsW2tleV07XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxufVxuIiwiPG5nLWNvbnRhaW5lciAqbmdJZj1cInBhZ2VcIj5cblx0PGZvcm0gY2xhc3M9XCJmb3JtXCIgbmFtZT1cImZvcm1cIiBbZm9ybUdyb3VwXT1cImZvcm1cIiAobmdTdWJtaXQpPVwiZm9ybS52YWxpZCAmJiBvblN1Ym1pdChmb3JtLnZhbHVlKVwiICNmb3JtPVwibmdGb3JtXCIgcm9sZT1cImZvcm1cIiBub3ZhbGlkYXRlIGF1dG9jb21wbGV0ZT1cIm9mZlwiPlxuXHRcdDxkaXYgY2xhc3M9XCJpbmZvXCI+XG5cdFx0XHQ8c3BhbiBjbGFzcz1cImlkXCI+e3twYWdlLmlkfX08L3NwYW4+XG5cdFx0XHQ8c3BhbiBjbGFzcz1cInN0YXR1c1wiIFtuZ0NsYXNzXT1cInsgYWN0aXZlOiBwYWdlLmFjdGl2ZSB9XCI+e3twYWdlLmFjdGl2ZSA/ICdhY3RpdmUnIDogJ2luYWN0aXZlJ319PC9zcGFuPlxuXHRcdFx0PHNwYW4gY2xhc3M9XCJjb21wb25lbnRcIj57e2NvbXBvbmVudE5hbWV9fTwvc3Bhbj5cblx0XHQ8L2Rpdj5cblx0XHQ8aHI+XG5cdFx0PGgyIGNsYXNzPVwiaDFcIiBbaW5uZXJIVE1MXT1cInBhZ2UudGl0bGVcIj48L2gyPlxuXHRcdDwhLS1cblx0XHRcdFx0PHAgW2lubmVySFRNTF09XCJwYWdlLmRlc2NyaXB0aW9uXCI+PC9wPlxuXHRcdFx0XHQtLT5cblx0XHQ8aHI+XG5cdFx0PGRpdiAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIG9wdGlvbnNcIj5cblx0XHRcdDxjb250cm9sLW91dGxldCBjbGFzcz1cImZpZWxkc2V0X19maWVsZCBmaWVsZHNldF9fZmllbGQtLXt7b3B0aW9uLnNjaGVtYX19XCIgW29wdGlvbl09XCJvcHRpb25cIiBbZm9ybV09XCJmb3JtXCI+PC9jb250cm9sLW91dGxldD5cblx0XHQ8L2Rpdj5cblx0XHQ8IS0tIDxjb250cm9sLWVkaXRhYmxlIGZvcm1Db250cm9sTmFtZT1cImVtYWlsXCI+PC9jb250cm9sLWVkaXRhYmxlPiAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwiYWN0aW9uLWJhclwiPlxuXHRcdFx0PGJ1dHRvbiB0eXBlPVwidGV4dFwiIGNsYXNzPVwiYnRuIGJ0bi0tc2Vjb25kYXJ5XCIgW2Rpc2FibGVkXT1cInN1Ym1pdHRlZCB8fCAhZm9ybS52YWxpZFwiIChjbGljayk9XCJvblJlc2V0KClcIiB0aXRsZT1cIkFubnVsbGFcIj48c3Bhbj5Bbm51bGxhPC9zcGFuPjwvYnV0dG9uPlxuXHRcdFx0PGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLS1wcmltYXJ5XCIgW2Rpc2FibGVkXT1cInN1Ym1pdHRlZCB8fCAhZm9ybS52YWxpZFwiIFtuZ0NsYXNzXT1cInsgJ2J0bi0tYnVzeSc6IGJ1c3kgfVwiIHRpdGxlPVwiU2FsdmFcIj48c3Bhbj5TYWx2YTwvc3Bhbj48L2J1dHRvbj5cblx0XHQ8L2Rpdj5cblx0PC9mb3JtPlxuPC9uZy1jb250YWluZXI+XG4iXX0=