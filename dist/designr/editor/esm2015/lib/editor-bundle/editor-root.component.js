/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID, ViewEncapsulation } from '@angular/core';
import { FormService } from '@designr/control';
import { DisposableComponent } from '@designr/core';
import { ConfigService, PageResolverService } from '@designr/page';
import { MarkdownService } from 'ngx-markdown';
import { takeUntil } from 'rxjs/operators';
export class EditorRootComponent extends DisposableComponent {
    /**
     * @param {?} platformId
     * @param {?} configService
     * @param {?} markdownService
     * @param {?} formService
     * @param {?} pageResolverService
     */
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
    /**
     * @return {?}
     */
    get page() {
        return this._page;
    }
    /**
     * @param {?} page
     * @return {?}
     */
    set page(page) {
        this._pageCopy = Object.assign({}, page);
        this._page = page;
        if (this._page) {
            this.options = this.formService.getOptions(this.getControlsByPage(page));
            this.group = this.formService.getFormGroup(this.options);
            this.group.valueChanges.subscribe((/**
             * @param {?} x
             * @return {?}
             */
            x => {
                this.onAssign(x); // Object.assign(this._page, x);
            }));
        }
        else {
            this.options = [];
            this.group = null;
        }
    }
    /**
     * @return {?}
     */
    get componentName() {
        if (this._page) {
            /** @type {?} */
            const component = this.configService.options.pages[this._page.component];
            if (component) {
                return component.name;
            }
        }
    }
    /**
     * @param {?} page
     * @return {?}
     */
    getControlsByPage(page) {
        return page ? Object.keys(page).filter((/**
         * @param {?} key
         * @return {?}
         */
        key => typeof page[key] !== 'object')).map((/**
         * @param {?} key
         * @param {?} i
         * @return {?}
         */
        (key, i) => {
            return {
                key: key,
                value: page[key],
                schema: key === 'description' ? 'markdown' : 'text',
                label: key,
                placeholder: key,
                required: false,
                order: i + 1
            };
        })) : [];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (isPlatformBrowser(this.platformId)) {
            this.pageResolverService.events$.pipe(takeUntil(this.unsubscribe)).subscribe((/**
             * @param {?} resolver
             * @return {?}
             */
            (resolver) => {
                // console.log('EditorRootComponent.resolver', resolver);
                this.page = resolver ? resolver.page : null;
            }));
        }
    }
    /**
     * @return {?}
     */
    onReset() {
        // console.log('EditorRootComponent.onReset');
        Object.keys(this.group.controls).forEach((/**
         * @param {?} key
         * @return {?}
         */
        key => {
            this.group.get(key).setValue(this._pageCopy[key]);
        }));
        /*
        const keys = this.controls.map(x => x.key);
        keys.forEach(k => {
            // console.log(k, this._page[k], this._pageCopy[k]);
            this._page[k] = this._pageCopy[k];
        });
        */
    }
    /**
     * @param {?} model
     * @return {?}
     */
    onSubmit(model) {
        // console.log('EditorRootComponent.onSubmit', model);
        this.onAssign(model);
        // Object.assign(this._page, model);
    }
    /**
     * @param {?} model
     * @return {?}
     */
    onAssign(model) {
        Object.keys(this.group.controls).forEach((/**
         * @param {?} key
         * @return {?}
         */
        key => {
            switch (key) {
                case 'description':
                    this._page[key] = this.markdownService.compile(model[key]);
                    break;
                default:
                    this._page[key] = model[key];
            }
        }));
    }
}
EditorRootComponent.decorators = [
    { type: Component, args: [{
                selector: 'editor-root-component',
                template: "<ng-container *ngIf=\"page\">\n\t<form class=\"form\" name=\"group\" [formGroup]=\"group\" (ngSubmit)=\"group.valid && onSubmit(group.value)\" #form=\"ngForm\" role=\"form\" novalidate autocomplete=\"off\">\n\t\t<div class=\"info\">\n\t\t\t<span class=\"id\">{{page.id}}</span>\n\t\t\t<span class=\"status\" [ngClass]=\"{ active: page.active }\">{{page.active ? 'active' : 'inactive'}}</span>\n\t\t\t<span class=\"component\">{{componentName}}</span>\n\t\t</div>\n\t\t<hr>\n\t\t<h2 class=\"h1\" [innerHTML]=\"page.title\"></h2>\n\t\t<!--\n\t\t\t\t<p [innerHTML]=\"page.description\"></p>\n\t\t\t\t-->\n\t\t<hr>\n\t\t<div *ngFor=\"let option of options\">\n\t\t\t<control-outlet class=\"fieldset__field\" [option]=\"option\" [form]=\"group\"></control-outlet>\n\t\t</div>\n\t\t<!-- <control-editable formControlName=\"email\"></control-editable> -->\n\t\t<div class=\"action-bar\">\n\t\t\t<button type=\"text\" class=\"btn btn--secondary\" [disabled]=\"submitted || !group.valid\" (click)=\"onReset()\" title=\"Annulla\"><span>Annulla</span></button>\n\t\t\t<button type=\"submit\" class=\"btn btn--primary\" [disabled]=\"submitted || !group.valid\" [ngClass]=\"{ 'btn--busy': busy }\" title=\"Salva\"><span>Salva</span></button>\n\t\t</div>\n\t</form>\n</ng-container>\n",
                encapsulation: ViewEncapsulation.Emulated,
                styles: [":host{font-family:Arial,Helvetica,sans-serif;font-size:16px;line-height:1.5;background:#fafafa;color:#55555a}.h1{color:#55555a;font-size:19px}form{margin:0}label{display:block;width:100%;color:#55555a;font-weight:700;font-size:12px}.id{display:inline-block;padding:4px 6px;background:#0875c2;color:#fff;border-radius:3px;font-size:12px;line-height:1;margin-right:4px}.status{display:inline-block;padding:4px 6px;background:#fff;color:#000;border-radius:3px;font-size:12px;line-height:1;margin-right:4px}.status.active{background:green;color:#fff}.component{display:inline-block;font-size:14px;font-style:italic}"]
            }] }
];
/** @nocollapse */
EditorRootComponent.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: ConfigService },
    { type: MarkdownService },
    { type: FormService },
    { type: PageResolverService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    EditorRootComponent.prototype._pageCopy;
    /**
     * @type {?}
     * @private
     */
    EditorRootComponent.prototype._page;
    /** @type {?} */
    EditorRootComponent.prototype.options;
    /** @type {?} */
    EditorRootComponent.prototype.group;
    /** @type {?} */
    EditorRootComponent.prototype.busy;
    /** @type {?} */
    EditorRootComponent.prototype.submitted;
    /**
     * @type {?}
     * @private
     */
    EditorRootComponent.prototype.platformId;
    /**
     * @type {?}
     * @private
     */
    EditorRootComponent.prototype.configService;
    /**
     * @type {?}
     * @private
     */
    EditorRootComponent.prototype.markdownService;
    /**
     * @type {?}
     * @private
     */
    EditorRootComponent.prototype.formService;
    /**
     * @type {?}
     * @private
     */
    EditorRootComponent.prototype.pageResolverService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLXJvb3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvZWRpdG9yLyIsInNvdXJjZXMiOlsibGliL2VkaXRvci1idW5kbGUvZWRpdG9yLXJvb3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBVSxXQUFXLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUYsT0FBTyxFQUFpQixXQUFXLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUM5RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLGFBQWEsRUFBc0IsbUJBQW1CLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUMvQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFRM0MsTUFBTSxPQUFPLG1CQUFvQixTQUFRLG1CQUFtQjs7Ozs7Ozs7SUFXM0QsWUFDOEIsVUFBa0IsRUFDdkMsYUFBNEIsRUFDNUIsZUFBZ0MsRUFDaEMsV0FBd0IsRUFDeEIsbUJBQXdDO1FBRWhELEtBQUssRUFBRSxDQUFDO1FBTnFCLGVBQVUsR0FBVixVQUFVLENBQVE7UUFDdkMsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFSakQsU0FBSSxHQUFZLEtBQUssQ0FBQztRQUN0QixjQUFTLEdBQVksS0FBSyxDQUFDO0lBVTNCLENBQUM7Ozs7SUFFRCxJQUFJLElBQUk7UUFDUCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDbkIsQ0FBQzs7Ozs7SUFFRCxJQUFJLElBQUksQ0FBQyxJQUFVO1FBQ2xCLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDbEIsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2YsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUN6RSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN6RCxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxTQUFTOzs7O1lBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3JDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxnQ0FBZ0M7WUFDbkQsQ0FBQyxFQUFDLENBQUM7U0FDSDthQUFNO1lBQ04sSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7WUFDbEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7U0FDbEI7SUFDRixDQUFDOzs7O0lBRUQsSUFBSSxhQUFhO1FBQ2hCLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTs7a0JBQ1QsU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQztZQUN4RSxJQUFJLFNBQVMsRUFBRTtnQkFDZCxPQUFPLFNBQVMsQ0FBQyxJQUFJLENBQUM7YUFDdEI7U0FDRDtJQUNGLENBQUM7Ozs7O0lBRUQsaUJBQWlCLENBQUMsSUFBVTtRQUMzQixPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNOzs7O1FBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxRQUFRLEVBQUMsQ0FBQyxHQUFHOzs7OztRQUFDLENBQUMsR0FBVyxFQUFFLENBQVMsRUFBRSxFQUFFO1lBQzNHLE9BQU87Z0JBQ04sR0FBRyxFQUFFLEdBQUc7Z0JBQ1IsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUM7Z0JBQ2hCLE1BQU0sRUFBRSxHQUFHLEtBQUssYUFBYSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLE1BQU07Z0JBQ25ELEtBQUssRUFBRSxHQUFHO2dCQUNWLFdBQVcsRUFBRSxHQUFHO2dCQUNoQixRQUFRLEVBQUUsS0FBSztnQkFDZixLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUM7YUFDWixDQUFDO1FBQ0gsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNULENBQUM7Ozs7SUFFRCxRQUFRO1FBQ1AsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDdkMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQ3BDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQzNCLENBQUMsU0FBUzs7OztZQUFDLENBQUMsUUFBc0IsRUFBRSxFQUFFO2dCQUN0Qyx5REFBeUQ7Z0JBQ3pELElBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDN0MsQ0FBQyxFQUFDLENBQUM7U0FDSDtJQUNGLENBQUM7Ozs7SUFFRCxPQUFPO1FBQ04sOENBQThDO1FBQzlDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPOzs7O1FBQUMsR0FBRyxDQUFDLEVBQUU7WUFDOUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNuRCxDQUFDLEVBQUMsQ0FBQztRQUNIOzs7Ozs7VUFNRTtJQUNILENBQUM7Ozs7O0lBRUQsUUFBUSxDQUFDLEtBQUs7UUFDYixzREFBc0Q7UUFDdEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyQixvQ0FBb0M7SUFDckMsQ0FBQzs7Ozs7SUFFRCxRQUFRLENBQUMsS0FBSztRQUNiLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPOzs7O1FBQUMsR0FBRyxDQUFDLEVBQUU7WUFDOUMsUUFBUSxHQUFHLEVBQUU7Z0JBQ1osS0FBSyxhQUFhO29CQUNqQixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO29CQUMzRCxNQUFNO2dCQUNQO29CQUNDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQzlCO1FBQ0YsQ0FBQyxFQUFDLENBQUM7SUFDSixDQUFDOzs7WUE5R0QsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLGt3Q0FBMkM7Z0JBRTNDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxRQUFROzthQUN6Qzs7Ozt5Q0FhRSxNQUFNLFNBQUMsV0FBVztZQXRCWixhQUFhO1lBQ2IsZUFBZTtZQUhBLFdBQVc7WUFFUyxtQkFBbUI7Ozs7Ozs7SUFZOUQsd0NBQXdCOzs7OztJQUN4QixvQ0FBb0I7O0lBRXBCLHNDQUE4Qjs7SUFDOUIsb0NBQWlCOztJQUVqQixtQ0FBc0I7O0lBQ3RCLHdDQUEyQjs7Ozs7SUFHMUIseUNBQStDOzs7OztJQUMvQyw0Q0FBb0M7Ozs7O0lBQ3BDLDhDQUF3Qzs7Ozs7SUFDeEMsMENBQWdDOzs7OztJQUNoQyxrREFBZ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDb21wb25lbnQsIEluamVjdCwgT25Jbml0LCBQTEFURk9STV9JRCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENvbnRyb2xPcHRpb24sIEZvcm1TZXJ2aWNlIH0gZnJvbSAnQGRlc2lnbnIvY29udHJvbCc7XG5pbXBvcnQgeyBEaXNwb3NhYmxlQ29tcG9uZW50IH0gZnJvbSAnQGRlc2lnbnIvY29yZSc7XG5pbXBvcnQgeyBDb25maWdTZXJ2aWNlLCBQYWdlLCBQYWdlUmVzb2x2ZXIsIFBhZ2VSZXNvbHZlclNlcnZpY2UgfSBmcm9tICdAZGVzaWduci9wYWdlJztcbmltcG9ydCB7IE1hcmtkb3duU2VydmljZSB9IGZyb20gJ25neC1tYXJrZG93bic7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2VkaXRvci1yb290LWNvbXBvbmVudCcsXG5cdHRlbXBsYXRlVXJsOiAnLi9lZGl0b3Itcm9vdC5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogWycuL2VkaXRvci1yb290LmNvbXBvbmVudC5zY3NzJ10sXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLkVtdWxhdGVkLFxufSlcbmV4cG9ydCBjbGFzcyBFZGl0b3JSb290Q29tcG9uZW50IGV4dGVuZHMgRGlzcG9zYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0cHJpdmF0ZSBfcGFnZUNvcHk6IFBhZ2U7XG5cdHByaXZhdGUgX3BhZ2U6IFBhZ2U7XG5cblx0b3B0aW9uczogQ29udHJvbE9wdGlvbjxhbnk+W107XG5cdGdyb3VwOiBGb3JtR3JvdXA7XG5cblx0YnVzeTogYm9vbGVhbiA9IGZhbHNlO1xuXHRzdWJtaXR0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IHN0cmluZyxcblx0XHRwcml2YXRlIGNvbmZpZ1NlcnZpY2U6IENvbmZpZ1NlcnZpY2UsXG5cdFx0cHJpdmF0ZSBtYXJrZG93blNlcnZpY2U6IE1hcmtkb3duU2VydmljZSxcblx0XHRwcml2YXRlIGZvcm1TZXJ2aWNlOiBGb3JtU2VydmljZSxcblx0XHRwcml2YXRlIHBhZ2VSZXNvbHZlclNlcnZpY2U6IFBhZ2VSZXNvbHZlclNlcnZpY2UsXG5cdCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRnZXQgcGFnZSgpOiBQYWdlIHtcblx0XHRyZXR1cm4gdGhpcy5fcGFnZTtcblx0fVxuXG5cdHNldCBwYWdlKHBhZ2U6IFBhZ2UpIHtcblx0XHR0aGlzLl9wYWdlQ29weSA9IE9iamVjdC5hc3NpZ24oe30sIHBhZ2UpO1xuXHRcdHRoaXMuX3BhZ2UgPSBwYWdlO1xuXHRcdGlmICh0aGlzLl9wYWdlKSB7XG5cdFx0XHR0aGlzLm9wdGlvbnMgPSB0aGlzLmZvcm1TZXJ2aWNlLmdldE9wdGlvbnModGhpcy5nZXRDb250cm9sc0J5UGFnZShwYWdlKSk7XG5cdFx0XHR0aGlzLmdyb3VwID0gdGhpcy5mb3JtU2VydmljZS5nZXRGb3JtR3JvdXAodGhpcy5vcHRpb25zKTtcblx0XHRcdHRoaXMuZ3JvdXAudmFsdWVDaGFuZ2VzLnN1YnNjcmliZSh4ID0+IHtcblx0XHRcdFx0dGhpcy5vbkFzc2lnbih4KTsgLy8gT2JqZWN0LmFzc2lnbih0aGlzLl9wYWdlLCB4KTtcblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLm9wdGlvbnMgPSBbXTtcblx0XHRcdHRoaXMuZ3JvdXAgPSBudWxsO1xuXHRcdH1cblx0fVxuXG5cdGdldCBjb21wb25lbnROYW1lKCk6IHN0cmluZyB7XG5cdFx0aWYgKHRoaXMuX3BhZ2UpIHtcblx0XHRcdGNvbnN0IGNvbXBvbmVudCA9IHRoaXMuY29uZmlnU2VydmljZS5vcHRpb25zLnBhZ2VzW3RoaXMuX3BhZ2UuY29tcG9uZW50XTtcblx0XHRcdGlmIChjb21wb25lbnQpIHtcblx0XHRcdFx0cmV0dXJuIGNvbXBvbmVudC5uYW1lO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGdldENvbnRyb2xzQnlQYWdlKHBhZ2U6IFBhZ2UpOiBDb250cm9sT3B0aW9uPGFueT5bXSB7XG5cdFx0cmV0dXJuIHBhZ2UgPyBPYmplY3Qua2V5cyhwYWdlKS5maWx0ZXIoa2V5ID0+IHR5cGVvZiBwYWdlW2tleV0gIT09ICdvYmplY3QnKS5tYXAoKGtleTogc3RyaW5nLCBpOiBudW1iZXIpID0+IHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGtleToga2V5LFxuXHRcdFx0XHR2YWx1ZTogcGFnZVtrZXldLFxuXHRcdFx0XHRzY2hlbWE6IGtleSA9PT0gJ2Rlc2NyaXB0aW9uJyA/ICdtYXJrZG93bicgOiAndGV4dCcsXG5cdFx0XHRcdGxhYmVsOiBrZXksXG5cdFx0XHRcdHBsYWNlaG9sZGVyOiBrZXksXG5cdFx0XHRcdHJlcXVpcmVkOiBmYWxzZSxcblx0XHRcdFx0b3JkZXI6IGkgKyAxXG5cdFx0XHR9O1xuXHRcdH0pIDogW107XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHRpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuXHRcdFx0dGhpcy5wYWdlUmVzb2x2ZXJTZXJ2aWNlLmV2ZW50cyQucGlwZShcblx0XHRcdFx0dGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUpXG5cdFx0XHQpLnN1YnNjcmliZSgocmVzb2x2ZXI6IFBhZ2VSZXNvbHZlcikgPT4ge1xuXHRcdFx0XHQvLyBjb25zb2xlLmxvZygnRWRpdG9yUm9vdENvbXBvbmVudC5yZXNvbHZlcicsIHJlc29sdmVyKTtcblx0XHRcdFx0dGhpcy5wYWdlID0gcmVzb2x2ZXIgPyByZXNvbHZlci5wYWdlIDogbnVsbDtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdG9uUmVzZXQoKSB7XG5cdFx0Ly8gY29uc29sZS5sb2coJ0VkaXRvclJvb3RDb21wb25lbnQub25SZXNldCcpO1xuXHRcdE9iamVjdC5rZXlzKHRoaXMuZ3JvdXAuY29udHJvbHMpLmZvckVhY2goa2V5ID0+IHtcblx0XHRcdHRoaXMuZ3JvdXAuZ2V0KGtleSkuc2V0VmFsdWUodGhpcy5fcGFnZUNvcHlba2V5XSk7XG5cdFx0fSk7XG5cdFx0Lypcblx0XHRjb25zdCBrZXlzID0gdGhpcy5jb250cm9scy5tYXAoeCA9PiB4LmtleSk7XG5cdFx0a2V5cy5mb3JFYWNoKGsgPT4ge1xuXHRcdFx0Ly8gY29uc29sZS5sb2coaywgdGhpcy5fcGFnZVtrXSwgdGhpcy5fcGFnZUNvcHlba10pO1xuXHRcdFx0dGhpcy5fcGFnZVtrXSA9IHRoaXMuX3BhZ2VDb3B5W2tdO1xuXHRcdH0pO1xuXHRcdCovXG5cdH1cblxuXHRvblN1Ym1pdChtb2RlbCkge1xuXHRcdC8vIGNvbnNvbGUubG9nKCdFZGl0b3JSb290Q29tcG9uZW50Lm9uU3VibWl0JywgbW9kZWwpO1xuXHRcdHRoaXMub25Bc3NpZ24obW9kZWwpO1xuXHRcdC8vIE9iamVjdC5hc3NpZ24odGhpcy5fcGFnZSwgbW9kZWwpO1xuXHR9XG5cblx0b25Bc3NpZ24obW9kZWwpIHtcblx0XHRPYmplY3Qua2V5cyh0aGlzLmdyb3VwLmNvbnRyb2xzKS5mb3JFYWNoKGtleSA9PiB7XG5cdFx0XHRzd2l0Y2ggKGtleSkge1xuXHRcdFx0XHRjYXNlICdkZXNjcmlwdGlvbic6XG5cdFx0XHRcdFx0dGhpcy5fcGFnZVtrZXldID0gdGhpcy5tYXJrZG93blNlcnZpY2UuY29tcGlsZShtb2RlbFtrZXldKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHR0aGlzLl9wYWdlW2tleV0gPSBtb2RlbFtrZXldO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cbn1cbiJdfQ==