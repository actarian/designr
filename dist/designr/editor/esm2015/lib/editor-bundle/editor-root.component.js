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
    const option_r3 = ctx.$implicit;
    i0.ɵɵnextContext();
    const _r1 = i0.ɵɵreference(2);
    i0.ɵɵadvance(1);
    i0.ɵɵclassMapInterpolate1("fieldset__field fieldset__field--", option_r3.schema, "");
    i0.ɵɵproperty("option", option_r3)("form", _r1);
} }
const _c0 = function (a0) { return { active: a0 }; };
const _c1 = function (a0) { return { "btn--busy": a0 }; };
function EditorRootComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "form", 1, 2);
    i0.ɵɵlistener("ngSubmit", function EditorRootComponent_ng_container_0_Template_form_ngSubmit_1_listener($event) { i0.ɵɵrestoreView(_r5); const _r1 = i0.ɵɵreference(2); const ctx_r4 = i0.ɵɵnextContext(); return _r1.valid && ctx_r4.onSubmit(_r1.value); });
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
    i0.ɵɵlistener("click", function EditorRootComponent_ng_container_0_Template_button_click_15_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.onReset(); });
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
    const _r1 = i0.ɵɵreference(2);
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("formGroup", _r1);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r0.page.id);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(10, _c0, ctx_r0.page.active));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r0.page.active ? "active" : "inactive");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.componentName);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("innerHTML", ctx_r0.page.title, i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r0.options);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", ctx_r0.submitted || !_r1.valid);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("disabled", ctx_r0.submitted || !_r1.valid)("ngClass", i0.ɵɵpureFunction1(12, _c1, ctx_r0.busy));
} }
export class EditorRootComponent extends DisposableComponent {
    constructor(platformId, configService, markdownService, formService, pageResolverService) {
        super();
        this.platformId = platformId;
        this.configService = configService;
        this.markdownService = markdownService;
        this.formService = formService;
        this.pageResolverService = pageResolverService;
        this.busy = false;
        this.submitted = false;
    }
    get page() {
        return this._page;
    }
    set page(page) {
        this._pageCopy = Object.assign({}, page);
        this._page = page;
        if (this._page) {
            this.options = this.formService.getOptions(this.getControlsByPage(page));
            this.form = this.formService.getFormGroup(this.options);
            this.form.valueChanges.subscribe(x => {
                this.onAssign(x); // Object.assign(this._page, x);
            });
        }
        else {
            this.options = [];
            this.form = null;
        }
    }
    get componentName() {
        if (this._page) {
            const component = this.configService.options.pages[this._page.component];
            if (component) {
                return component.name;
            }
        }
    }
    getControlsByPage(page) {
        return page ? Object.keys(page).filter(key => typeof page[key] !== 'object').map((key, i) => {
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
    }
    ngOnInit() {
        if (isPlatformBrowser(this.platformId)) {
            this.pageResolverService.events$.pipe(takeUntil(this.unsubscribe)).subscribe((resolver) => {
                // console.log('EditorRootComponent.resolver', resolver);
                this.page = resolver ? resolver.page : null;
            });
        }
    }
    onReset() {
        // console.log('EditorRootComponent.onReset');
        Object.keys(this.form.controls).forEach(key => {
            this.form.get(key).setValue(this._pageCopy[key]);
        });
        /*
        const keys = this.controls.map(x => x.key);
        keys.forEach(k => {
            // console.log(k, this._page[k], this._pageCopy[k]);
            this._page[k] = this._pageCopy[k];
        });
        */
    }
    onSubmit(model) {
        // console.log('EditorRootComponent.onSubmit', model);
        this.onAssign(model);
        // Object.assign(this._page, model);
    }
    onAssign(model) {
        Object.keys(this.form.controls).forEach(key => {
            switch (key) {
                case 'description':
                    this._page[key] = this.markdownService.compile(model[key]);
                    break;
                default:
                    this._page[key] = model[key];
            }
        });
    }
}
EditorRootComponent.ɵfac = function EditorRootComponent_Factory(t) { return new (t || EditorRootComponent)(i0.ɵɵdirectiveInject(PLATFORM_ID), i0.ɵɵdirectiveInject(i1.ConfigService), i0.ɵɵdirectiveInject(i2.MarkdownService), i0.ɵɵdirectiveInject(i3.FormService), i0.ɵɵdirectiveInject(i1.PageResolverService)); };
EditorRootComponent.ɵcmp = i0.ɵɵdefineComponent({ type: EditorRootComponent, selectors: [["editor-root-component"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 1, vars: 1, consts: [[4, "ngIf"], ["name", "form", "role", "form", "novalidate", "", "autocomplete", "off", 1, "form", 3, "formGroup", "ngSubmit"], ["form", "ngForm"], [1, "info"], [1, "id"], [1, "status", 3, "ngClass"], [1, "component"], [1, "h1", 3, "innerHTML"], [4, "ngFor", "ngForOf"], [1, "action-bar"], ["type", "text", "title", "Annulla", 1, "btn", "btn--secondary", 3, "disabled", "click"], ["type", "submit", "title", "Salva", 1, "btn", "btn--primary", 3, "disabled", "ngClass"], [3, "option", "form"]], template: function EditorRootComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, EditorRootComponent_ng_container_0_Template, 21, 14, "ng-container", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.page);
    } }, directives: [i4.NgIf, i5.ɵangular_packages_forms_forms_y, i5.NgControlStatusGroup, i5.FormGroupDirective, i4.NgClass, i4.NgForOf, i3.ControlOutletComponent], styles: ["[_nghost-%COMP%]{font-family:Arial,Helvetica,sans-serif;font-size:16px;line-height:1.5;background:#fafafa;color:#55555a}.h1[_ngcontent-%COMP%]{color:#55555a;font-size:19px}form[_ngcontent-%COMP%]{margin:0}label[_ngcontent-%COMP%]{display:block;width:100%;color:#55555a;font-weight:700;font-size:12px}.id[_ngcontent-%COMP%]{display:inline-block;padding:4px 6px;background:#0875c2;color:#fff;border-radius:3px;font-size:12px;line-height:1;margin-right:4px}.status[_ngcontent-%COMP%]{display:inline-block;padding:4px 6px;background:#fff;color:#000;border-radius:3px;font-size:12px;line-height:1;margin-right:4px}.status.active[_ngcontent-%COMP%]{background:green;color:#fff}.component[_ngcontent-%COMP%]{display:inline-block;font-size:14px;font-style:italic}"] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLXJvb3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvZWRpdG9yLyIsInNvdXJjZXMiOlsibGliL2VkaXRvci1idW5kbGUvZWRpdG9yLXJvb3QuY29tcG9uZW50LnRzIiwibGliL2VkaXRvci1idW5kbGUvZWRpdG9yLXJvb3QuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQVUsV0FBVyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTFGLE9BQU8sRUFBaUIsV0FBVyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDOUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxhQUFhLEVBQXNCLG1CQUFtQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDL0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7OztJQ016QywyQkFDQztJQUFBLHFDQUE0SDtJQUM3SCxpQkFBTTs7Ozs7SUFEVyxlQUEwRDtJQUExRCxvRkFBMEQ7SUFBQyxrQ0FBaUIsYUFBQTs7Ozs7O0lBZC9GLDZCQUNDO0lBQUEsa0NBQ0M7SUFEaUQsNlBBQStDO0lBQ2hHLDhCQUNDO0lBQUEsK0JBQWlCO0lBQUEsWUFBVztJQUFBLGlCQUFPO0lBQ25DLCtCQUF5RDtJQUFBLFlBQXVDO0lBQUEsaUJBQU87SUFDdkcsK0JBQXdCO0lBQUEsWUFBaUI7SUFBQSxpQkFBTztJQUNqRCxpQkFBTTtJQUNOLHNCQUNBO0lBQUEseUJBQTZDO0lBSTdDLHNCQUNBO0lBQUEscUZBQ0M7SUFHRCwrQkFDQztJQUFBLG1DQUF5SDtJQUFwQyxvTUFBbUI7SUFBaUIsNkJBQU07SUFBQSx3QkFBTztJQUFBLGlCQUFPO0lBQUEsaUJBQVM7SUFDdEosbUNBQXFJO0lBQUEsNkJBQU07SUFBQSxzQkFBSztJQUFBLGlCQUFPO0lBQUEsaUJBQVM7SUFDakssaUJBQU07SUFDUCxpQkFBTztJQUNSLDBCQUFlOzs7O0lBckJpQixlQUFrQjtJQUFsQiwrQkFBa0I7SUFFOUIsZUFBVztJQUFYLG9DQUFXO0lBQ1AsZUFBbUM7SUFBbkMseUVBQW1DO0lBQUMsZUFBdUM7SUFBdkMsZ0VBQXVDO0lBQ3hFLGVBQWlCO0lBQWpCLDBDQUFpQjtJQUczQixlQUF3QjtJQUF4QixnRUFBd0I7SUFLbEMsZUFBOEI7SUFBOUIsd0NBQThCO0lBS2EsZUFBcUM7SUFBckMseURBQXFDO0lBQ3JDLGVBQXFDO0lBQXJDLHlEQUFxQyxxREFBQTs7QURKdkYsTUFBTSxPQUFPLG1CQUFvQixTQUFRLG1CQUFtQjtJQVczRCxZQUM4QixVQUFrQixFQUN2QyxhQUE0QixFQUM1QixlQUFnQyxFQUNoQyxXQUF3QixFQUN4QixtQkFBd0M7UUFFaEQsS0FBSyxFQUFFLENBQUM7UUFOcUIsZUFBVSxHQUFWLFVBQVUsQ0FBUTtRQUN2QyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQVJqRCxTQUFJLEdBQVksS0FBSyxDQUFDO1FBQ3RCLGNBQVMsR0FBWSxLQUFLLENBQUM7SUFVM0IsQ0FBQztJQUVELElBQUksSUFBSTtRQUNQLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNuQixDQUFDO0lBRUQsSUFBSSxJQUFJLENBQUMsSUFBVTtRQUNsQixJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNmLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDekUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDeEQsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNwQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0NBQWdDO1lBQ25ELENBQUMsQ0FBQyxDQUFDO1NBQ0g7YUFBTTtZQUNOLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1lBQ2xCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1NBQ2pCO0lBQ0YsQ0FBQztJQUVELElBQUksYUFBYTtRQUNoQixJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZixNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUN6RSxJQUFJLFNBQVMsRUFBRTtnQkFDZCxPQUFPLFNBQVMsQ0FBQyxJQUFJLENBQUM7YUFDdEI7U0FDRDtJQUNGLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxJQUFVO1FBQzNCLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQVcsRUFBRSxDQUFTLEVBQUUsRUFBRTtZQUMzRyxPQUFPO2dCQUNOLEdBQUcsRUFBRSxHQUFHO2dCQUNSLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDO2dCQUNoQixNQUFNLEVBQUUsR0FBRyxLQUFLLGFBQWEsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxNQUFNO2dCQUNuRCxLQUFLLEVBQUUsR0FBRztnQkFDVixXQUFXLEVBQUUsR0FBRztnQkFDaEIsUUFBUSxFQUFFLEtBQUs7Z0JBQ2YsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDO2FBQ1osQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDVCxDQUFDO0lBRUQsUUFBUTtRQUNQLElBQUksaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUNwQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUMzQixDQUFDLFNBQVMsQ0FBQyxDQUFDLFFBQXNCLEVBQUUsRUFBRTtnQkFDdEMseURBQXlEO2dCQUN6RCxJQUFJLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQzdDLENBQUMsQ0FBQyxDQUFDO1NBQ0g7SUFDRixDQUFDO0lBRUQsT0FBTztRQUNOLDhDQUE4QztRQUM5QyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQzdDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDbEQsQ0FBQyxDQUFDLENBQUM7UUFDSDs7Ozs7O1VBTUU7SUFDSCxDQUFDO0lBRUQsUUFBUSxDQUFDLEtBQUs7UUFDYixzREFBc0Q7UUFDdEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyQixvQ0FBb0M7SUFDckMsQ0FBQztJQUVELFFBQVEsQ0FBQyxLQUFLO1FBQ2IsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUM3QyxRQUFRLEdBQUcsRUFBRTtnQkFDWixLQUFLLGFBQWE7b0JBQ2pCLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBQzNELE1BQU07Z0JBQ1A7b0JBQ0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDOUI7UUFDRixDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7O3NGQXhHVyxtQkFBbUIsdUJBWXRCLFdBQVc7d0RBWlIsbUJBQW1CO1FDZmhDLHdGQUNDOztRQURhLCtCQUFZOztrRERlYixtQkFBbUI7Y0FOL0IsU0FBUztlQUFDO2dCQUNWLFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLFdBQVcsRUFBRSw4QkFBOEI7Z0JBQzNDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixDQUFDO2dCQUMzQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsUUFBUTthQUN6Qzs7c0JBYUUsTUFBTTt1QkFBQyxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3QsIE9uSW5pdCwgUExBVEZPUk1fSUQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDb250cm9sT3B0aW9uLCBGb3JtU2VydmljZSB9IGZyb20gJ0BkZXNpZ25yL2NvbnRyb2wnO1xuaW1wb3J0IHsgRGlzcG9zYWJsZUNvbXBvbmVudCB9IGZyb20gJ0BkZXNpZ25yL2NvcmUnO1xuaW1wb3J0IHsgQ29uZmlnU2VydmljZSwgUGFnZSwgUGFnZVJlc29sdmVyLCBQYWdlUmVzb2x2ZXJTZXJ2aWNlIH0gZnJvbSAnQGRlc2lnbnIvcGFnZSc7XG5pbXBvcnQgeyBNYXJrZG93blNlcnZpY2UgfSBmcm9tICduZ3gtbWFya2Rvd24nO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdlZGl0b3Itcm9vdC1jb21wb25lbnQnLFxuXHR0ZW1wbGF0ZVVybDogJy4vZWRpdG9yLXJvb3QuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsnLi9lZGl0b3Itcm9vdC5jb21wb25lbnQuc2NzcyddLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5FbXVsYXRlZCxcbn0pXG5leHBvcnQgY2xhc3MgRWRpdG9yUm9vdENvbXBvbmVudCBleHRlbmRzIERpc3Bvc2FibGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdHByaXZhdGUgX3BhZ2VDb3B5OiBQYWdlO1xuXHRwcml2YXRlIF9wYWdlOiBQYWdlO1xuXG5cdG9wdGlvbnM6IENvbnRyb2xPcHRpb248YW55PltdO1xuXHRmb3JtOiBGb3JtR3JvdXA7XG5cblx0YnVzeTogYm9vbGVhbiA9IGZhbHNlO1xuXHRzdWJtaXR0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IHN0cmluZyxcblx0XHRwcml2YXRlIGNvbmZpZ1NlcnZpY2U6IENvbmZpZ1NlcnZpY2UsXG5cdFx0cHJpdmF0ZSBtYXJrZG93blNlcnZpY2U6IE1hcmtkb3duU2VydmljZSxcblx0XHRwcml2YXRlIGZvcm1TZXJ2aWNlOiBGb3JtU2VydmljZSxcblx0XHRwcml2YXRlIHBhZ2VSZXNvbHZlclNlcnZpY2U6IFBhZ2VSZXNvbHZlclNlcnZpY2UsXG5cdCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRnZXQgcGFnZSgpOiBQYWdlIHtcblx0XHRyZXR1cm4gdGhpcy5fcGFnZTtcblx0fVxuXG5cdHNldCBwYWdlKHBhZ2U6IFBhZ2UpIHtcblx0XHR0aGlzLl9wYWdlQ29weSA9IE9iamVjdC5hc3NpZ24oe30sIHBhZ2UpO1xuXHRcdHRoaXMuX3BhZ2UgPSBwYWdlO1xuXHRcdGlmICh0aGlzLl9wYWdlKSB7XG5cdFx0XHR0aGlzLm9wdGlvbnMgPSB0aGlzLmZvcm1TZXJ2aWNlLmdldE9wdGlvbnModGhpcy5nZXRDb250cm9sc0J5UGFnZShwYWdlKSk7XG5cdFx0XHR0aGlzLmZvcm0gPSB0aGlzLmZvcm1TZXJ2aWNlLmdldEZvcm1Hcm91cCh0aGlzLm9wdGlvbnMpO1xuXHRcdFx0dGhpcy5mb3JtLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoeCA9PiB7XG5cdFx0XHRcdHRoaXMub25Bc3NpZ24oeCk7IC8vIE9iamVjdC5hc3NpZ24odGhpcy5fcGFnZSwgeCk7XG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5vcHRpb25zID0gW107XG5cdFx0XHR0aGlzLmZvcm0gPSBudWxsO1xuXHRcdH1cblx0fVxuXG5cdGdldCBjb21wb25lbnROYW1lKCk6IHN0cmluZyB7XG5cdFx0aWYgKHRoaXMuX3BhZ2UpIHtcblx0XHRcdGNvbnN0IGNvbXBvbmVudCA9IHRoaXMuY29uZmlnU2VydmljZS5vcHRpb25zLnBhZ2VzW3RoaXMuX3BhZ2UuY29tcG9uZW50XTtcblx0XHRcdGlmIChjb21wb25lbnQpIHtcblx0XHRcdFx0cmV0dXJuIGNvbXBvbmVudC5uYW1lO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGdldENvbnRyb2xzQnlQYWdlKHBhZ2U6IFBhZ2UpOiBDb250cm9sT3B0aW9uPGFueT5bXSB7XG5cdFx0cmV0dXJuIHBhZ2UgPyBPYmplY3Qua2V5cyhwYWdlKS5maWx0ZXIoa2V5ID0+IHR5cGVvZiBwYWdlW2tleV0gIT09ICdvYmplY3QnKS5tYXAoKGtleTogc3RyaW5nLCBpOiBudW1iZXIpID0+IHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGtleToga2V5LFxuXHRcdFx0XHR2YWx1ZTogcGFnZVtrZXldLFxuXHRcdFx0XHRzY2hlbWE6IGtleSA9PT0gJ2Rlc2NyaXB0aW9uJyA/ICdtYXJrZG93bicgOiAndGV4dCcsXG5cdFx0XHRcdGxhYmVsOiBrZXksXG5cdFx0XHRcdHBsYWNlaG9sZGVyOiBrZXksXG5cdFx0XHRcdHJlcXVpcmVkOiBmYWxzZSxcblx0XHRcdFx0b3JkZXI6IGkgKyAxXG5cdFx0XHR9O1xuXHRcdH0pIDogW107XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHRpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuXHRcdFx0dGhpcy5wYWdlUmVzb2x2ZXJTZXJ2aWNlLmV2ZW50cyQucGlwZShcblx0XHRcdFx0dGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUpXG5cdFx0XHQpLnN1YnNjcmliZSgocmVzb2x2ZXI6IFBhZ2VSZXNvbHZlcikgPT4ge1xuXHRcdFx0XHQvLyBjb25zb2xlLmxvZygnRWRpdG9yUm9vdENvbXBvbmVudC5yZXNvbHZlcicsIHJlc29sdmVyKTtcblx0XHRcdFx0dGhpcy5wYWdlID0gcmVzb2x2ZXIgPyByZXNvbHZlci5wYWdlIDogbnVsbDtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdG9uUmVzZXQoKSB7XG5cdFx0Ly8gY29uc29sZS5sb2coJ0VkaXRvclJvb3RDb21wb25lbnQub25SZXNldCcpO1xuXHRcdE9iamVjdC5rZXlzKHRoaXMuZm9ybS5jb250cm9scykuZm9yRWFjaChrZXkgPT4ge1xuXHRcdFx0dGhpcy5mb3JtLmdldChrZXkpLnNldFZhbHVlKHRoaXMuX3BhZ2VDb3B5W2tleV0pO1xuXHRcdH0pO1xuXHRcdC8qXG5cdFx0Y29uc3Qga2V5cyA9IHRoaXMuY29udHJvbHMubWFwKHggPT4geC5rZXkpO1xuXHRcdGtleXMuZm9yRWFjaChrID0+IHtcblx0XHRcdC8vIGNvbnNvbGUubG9nKGssIHRoaXMuX3BhZ2Vba10sIHRoaXMuX3BhZ2VDb3B5W2tdKTtcblx0XHRcdHRoaXMuX3BhZ2Vba10gPSB0aGlzLl9wYWdlQ29weVtrXTtcblx0XHR9KTtcblx0XHQqL1xuXHR9XG5cblx0b25TdWJtaXQobW9kZWwpIHtcblx0XHQvLyBjb25zb2xlLmxvZygnRWRpdG9yUm9vdENvbXBvbmVudC5vblN1Ym1pdCcsIG1vZGVsKTtcblx0XHR0aGlzLm9uQXNzaWduKG1vZGVsKTtcblx0XHQvLyBPYmplY3QuYXNzaWduKHRoaXMuX3BhZ2UsIG1vZGVsKTtcblx0fVxuXG5cdG9uQXNzaWduKG1vZGVsKSB7XG5cdFx0T2JqZWN0LmtleXModGhpcy5mb3JtLmNvbnRyb2xzKS5mb3JFYWNoKGtleSA9PiB7XG5cdFx0XHRzd2l0Y2ggKGtleSkge1xuXHRcdFx0XHRjYXNlICdkZXNjcmlwdGlvbic6XG5cdFx0XHRcdFx0dGhpcy5fcGFnZVtrZXldID0gdGhpcy5tYXJrZG93blNlcnZpY2UuY29tcGlsZShtb2RlbFtrZXldKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHR0aGlzLl9wYWdlW2tleV0gPSBtb2RlbFtrZXldO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cbn1cbiIsIjxuZy1jb250YWluZXIgKm5nSWY9XCJwYWdlXCI+XG5cdDxmb3JtIGNsYXNzPVwiZm9ybVwiIG5hbWU9XCJmb3JtXCIgW2Zvcm1Hcm91cF09XCJmb3JtXCIgKG5nU3VibWl0KT1cImZvcm0udmFsaWQgJiYgb25TdWJtaXQoZm9ybS52YWx1ZSlcIiAjZm9ybT1cIm5nRm9ybVwiIHJvbGU9XCJmb3JtXCIgbm92YWxpZGF0ZSBhdXRvY29tcGxldGU9XCJvZmZcIj5cblx0XHQ8ZGl2IGNsYXNzPVwiaW5mb1wiPlxuXHRcdFx0PHNwYW4gY2xhc3M9XCJpZFwiPnt7cGFnZS5pZH19PC9zcGFuPlxuXHRcdFx0PHNwYW4gY2xhc3M9XCJzdGF0dXNcIiBbbmdDbGFzc109XCJ7IGFjdGl2ZTogcGFnZS5hY3RpdmUgfVwiPnt7cGFnZS5hY3RpdmUgPyAnYWN0aXZlJyA6ICdpbmFjdGl2ZSd9fTwvc3Bhbj5cblx0XHRcdDxzcGFuIGNsYXNzPVwiY29tcG9uZW50XCI+e3tjb21wb25lbnROYW1lfX08L3NwYW4+XG5cdFx0PC9kaXY+XG5cdFx0PGhyPlxuXHRcdDxoMiBjbGFzcz1cImgxXCIgW2lubmVySFRNTF09XCJwYWdlLnRpdGxlXCI+PC9oMj5cblx0XHQ8IS0tXG5cdFx0XHRcdDxwIFtpbm5lckhUTUxdPVwicGFnZS5kZXNjcmlwdGlvblwiPjwvcD5cblx0XHRcdFx0LS0+XG5cdFx0PGhyPlxuXHRcdDxkaXYgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBvcHRpb25zXCI+XG5cdFx0XHQ8Y29udHJvbC1vdXRsZXQgY2xhc3M9XCJmaWVsZHNldF9fZmllbGQgZmllbGRzZXRfX2ZpZWxkLS17e29wdGlvbi5zY2hlbWF9fVwiIFtvcHRpb25dPVwib3B0aW9uXCIgW2Zvcm1dPVwiZm9ybVwiPjwvY29udHJvbC1vdXRsZXQ+XG5cdFx0PC9kaXY+XG5cdFx0PCEtLSA8Y29udHJvbC1lZGl0YWJsZSBmb3JtQ29udHJvbE5hbWU9XCJlbWFpbFwiPjwvY29udHJvbC1lZGl0YWJsZT4gLS0+XG5cdFx0PGRpdiBjbGFzcz1cImFjdGlvbi1iYXJcIj5cblx0XHRcdDxidXR0b24gdHlwZT1cInRleHRcIiBjbGFzcz1cImJ0biBidG4tLXNlY29uZGFyeVwiIFtkaXNhYmxlZF09XCJzdWJtaXR0ZWQgfHwgIWZvcm0udmFsaWRcIiAoY2xpY2spPVwib25SZXNldCgpXCIgdGl0bGU9XCJBbm51bGxhXCI+PHNwYW4+QW5udWxsYTwvc3Bhbj48L2J1dHRvbj5cblx0XHRcdDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi0tcHJpbWFyeVwiIFtkaXNhYmxlZF09XCJzdWJtaXR0ZWQgfHwgIWZvcm0udmFsaWRcIiBbbmdDbGFzc109XCJ7ICdidG4tLWJ1c3knOiBidXN5IH1cIiB0aXRsZT1cIlNhbHZhXCI+PHNwYW4+U2FsdmE8L3NwYW4+PC9idXR0b24+XG5cdFx0PC9kaXY+XG5cdDwvZm9ybT5cbjwvbmctY29udGFpbmVyPlxuIl19