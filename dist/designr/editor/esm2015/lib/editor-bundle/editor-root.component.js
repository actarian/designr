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
            this.form = this.formService.getFormGroup(this.options);
            this.form.valueChanges.subscribe((/**
             * @param {?} x
             * @return {?}
             */
            x => {
                this.onAssign(x); // Object.assign(this._page, x);
            }));
        }
        else {
            this.options = [];
            this.form = null;
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
        Object.keys(this.form.controls).forEach((/**
         * @param {?} key
         * @return {?}
         */
        key => {
            this.form.get(key).setValue(this._pageCopy[key]);
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
        Object.keys(this.form.controls).forEach((/**
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
                template: "<ng-container *ngIf=\"page\">\r\n\t<form class=\"form\" name=\"form\" [formGroup]=\"form\" (ngSubmit)=\"form.valid && onSubmit(form.value)\" #form=\"ngForm\" role=\"form\" novalidate autocomplete=\"off\">\r\n\t\t<div class=\"info\">\r\n\t\t\t<span class=\"id\">{{page.id}}</span>\r\n\t\t\t<span class=\"status\" [ngClass]=\"{ active: page.active }\">{{page.active ? 'active' : 'inactive'}}</span>\r\n\t\t\t<span class=\"component\">{{componentName}}</span>\r\n\t\t</div>\r\n\t\t<hr>\r\n\t\t<h2 class=\"h1\" [innerHTML]=\"page.title\"></h2>\r\n\t\t<!--\r\n\t\t\t\t<p [innerHTML]=\"page.description\"></p>\r\n\t\t\t\t-->\r\n\t\t<hr>\r\n\t\t<div *ngFor=\"let option of options\">\r\n\t\t\t<control-outlet class=\"fieldset__field fieldset__field--{{option.schema}}\" [option]=\"option\" [form]=\"form\"></control-outlet>\r\n\t\t</div>\r\n\t\t<!-- <control-editable formControlName=\"email\"></control-editable> -->\r\n\t\t<div class=\"action-bar\">\r\n\t\t\t<button type=\"text\" class=\"btn btn--secondary\" [disabled]=\"submitted || !form.valid\" (click)=\"onReset()\" title=\"Annulla\"><span>Annulla</span></button>\r\n\t\t\t<button type=\"submit\" class=\"btn btn--primary\" [disabled]=\"submitted || !form.valid\" [ngClass]=\"{ 'btn--busy': busy }\" title=\"Salva\"><span>Salva</span></button>\r\n\t\t</div>\r\n\t</form>\r\n</ng-container>\r\n",
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
    EditorRootComponent.prototype.form;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLXJvb3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvZWRpdG9yLyIsInNvdXJjZXMiOlsibGliL2VkaXRvci1idW5kbGUvZWRpdG9yLXJvb3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBVSxXQUFXLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUYsT0FBTyxFQUFpQixXQUFXLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUM5RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLGFBQWEsRUFBc0IsbUJBQW1CLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUMvQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFRM0MsTUFBTSxPQUFPLG1CQUFvQixTQUFRLG1CQUFtQjs7Ozs7Ozs7SUFXM0QsWUFDOEIsVUFBa0IsRUFDdkMsYUFBNEIsRUFDNUIsZUFBZ0MsRUFDaEMsV0FBd0IsRUFDeEIsbUJBQXdDO1FBRWhELEtBQUssRUFBRSxDQUFDO1FBTnFCLGVBQVUsR0FBVixVQUFVLENBQVE7UUFDdkMsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFSakQsU0FBSSxHQUFZLEtBQUssQ0FBQztRQUN0QixjQUFTLEdBQVksS0FBSyxDQUFDO0lBVTNCLENBQUM7Ozs7SUFFRCxJQUFJLElBQUk7UUFDUCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDbkIsQ0FB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b3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0LCBPbkluaXQsIFBMQVRGT1JNX0lELCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IENvbnRyb2xPcHRpb24sIEZvcm1TZXJ2aWNlIH0gZnJvbSAnQGRlc2lnbnIvY29udHJvbCc7XHJcbmltcG9ydCB7IERpc3Bvc2FibGVDb21wb25lbnQgfSBmcm9tICdAZGVzaWduci9jb3JlJztcclxuaW1wb3J0IHsgQ29uZmlnU2VydmljZSwgUGFnZSwgUGFnZVJlc29sdmVyLCBQYWdlUmVzb2x2ZXJTZXJ2aWNlIH0gZnJvbSAnQGRlc2lnbnIvcGFnZSc7XHJcbmltcG9ydCB7IE1hcmtkb3duU2VydmljZSB9IGZyb20gJ25neC1tYXJrZG93bic7XHJcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAnZWRpdG9yLXJvb3QtY29tcG9uZW50JyxcclxuXHR0ZW1wbGF0ZVVybDogJy4vZWRpdG9yLXJvb3QuY29tcG9uZW50Lmh0bWwnLFxyXG5cdHN0eWxlVXJsczogWycuL2VkaXRvci1yb290LmNvbXBvbmVudC5zY3NzJ10sXHJcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uRW11bGF0ZWQsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFZGl0b3JSb290Q29tcG9uZW50IGV4dGVuZHMgRGlzcG9zYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG5cdHByaXZhdGUgX3BhZ2VDb3B5OiBQYWdlO1xyXG5cdHByaXZhdGUgX3BhZ2U6IFBhZ2U7XHJcblxyXG5cdG9wdGlvbnM6IENvbnRyb2xPcHRpb248YW55PltdO1xyXG5cdGZvcm06IEZvcm1Hcm91cDtcclxuXHJcblx0YnVzeTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cdHN1Ym1pdHRlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogc3RyaW5nLFxyXG5cdFx0cHJpdmF0ZSBjb25maWdTZXJ2aWNlOiBDb25maWdTZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSBtYXJrZG93blNlcnZpY2U6IE1hcmtkb3duU2VydmljZSxcclxuXHRcdHByaXZhdGUgZm9ybVNlcnZpY2U6IEZvcm1TZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSBwYWdlUmVzb2x2ZXJTZXJ2aWNlOiBQYWdlUmVzb2x2ZXJTZXJ2aWNlLFxyXG5cdCkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHR9XHJcblxyXG5cdGdldCBwYWdlKCk6IFBhZ2Uge1xyXG5cdFx0cmV0dXJuIHRoaXMuX3BhZ2U7XHJcblx0fVxyXG5cclxuXHRzZXQgcGFnZShwYWdlOiBQYWdlKSB7XHJcblx0XHR0aGlzLl9wYWdlQ29weSA9IE9iamVjdC5hc3NpZ24oe30sIHBhZ2UpO1xyXG5cdFx0dGhpcy5fcGFnZSA9IHBhZ2U7XHJcblx0XHRpZiAodGhpcy5fcGFnZSkge1xyXG5cdFx0XHR0aGlzLm9wdGlvbnMgPSB0aGlzLmZvcm1TZXJ2aWNlLmdldE9wdGlvbnModGhpcy5nZXRDb250cm9sc0J5UGFnZShwYWdlKSk7XHJcblx0XHRcdHRoaXMuZm9ybSA9IHRoaXMuZm9ybVNlcnZpY2UuZ2V0Rm9ybUdyb3VwKHRoaXMub3B0aW9ucyk7XHJcblx0XHRcdHRoaXMuZm9ybS52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKHggPT4ge1xyXG5cdFx0XHRcdHRoaXMub25Bc3NpZ24oeCk7IC8vIE9iamVjdC5hc3NpZ24odGhpcy5fcGFnZSwgeCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5vcHRpb25zID0gW107XHJcblx0XHRcdHRoaXMuZm9ybSA9IG51bGw7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRnZXQgY29tcG9uZW50TmFtZSgpOiBzdHJpbmcge1xyXG5cdFx0aWYgKHRoaXMuX3BhZ2UpIHtcclxuXHRcdFx0Y29uc3QgY29tcG9uZW50ID0gdGhpcy5jb25maWdTZXJ2aWNlLm9wdGlvbnMucGFnZXNbdGhpcy5fcGFnZS5jb21wb25lbnRdO1xyXG5cdFx0XHRpZiAoY29tcG9uZW50KSB7XHJcblx0XHRcdFx0cmV0dXJuIGNvbXBvbmVudC5uYW1lO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRnZXRDb250cm9sc0J5UGFnZShwYWdlOiBQYWdlKTogQ29udHJvbE9wdGlvbjxhbnk+W10ge1xyXG5cdFx0cmV0dXJuIHBhZ2UgPyBPYmplY3Qua2V5cyhwYWdlKS5maWx0ZXIoa2V5ID0+IHR5cGVvZiBwYWdlW2tleV0gIT09ICdvYmplY3QnKS5tYXAoKGtleTogc3RyaW5nLCBpOiBudW1iZXIpID0+IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRrZXk6IGtleSxcclxuXHRcdFx0XHR2YWx1ZTogcGFnZVtrZXldLFxyXG5cdFx0XHRcdHNjaGVtYToga2V5ID09PSAnZGVzY3JpcHRpb24nID8gJ21hcmtkb3duJyA6ICd0ZXh0JyxcclxuXHRcdFx0XHRsYWJlbDoga2V5LFxyXG5cdFx0XHRcdHBsYWNlaG9sZGVyOiBrZXksXHJcblx0XHRcdFx0cmVxdWlyZWQ6IGZhbHNlLFxyXG5cdFx0XHRcdG9yZGVyOiBpICsgMVxyXG5cdFx0XHR9O1xyXG5cdFx0fSkgOiBbXTtcclxuXHR9XHJcblxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0aWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcclxuXHRcdFx0dGhpcy5wYWdlUmVzb2x2ZXJTZXJ2aWNlLmV2ZW50cyQucGlwZShcclxuXHRcdFx0XHR0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSlcclxuXHRcdFx0KS5zdWJzY3JpYmUoKHJlc29sdmVyOiBQYWdlUmVzb2x2ZXIpID0+IHtcclxuXHRcdFx0XHQvLyBjb25zb2xlLmxvZygnRWRpdG9yUm9vdENvbXBvbmVudC5yZXNvbHZlcicsIHJlc29sdmVyKTtcclxuXHRcdFx0XHR0aGlzLnBhZ2UgPSByZXNvbHZlciA/IHJlc29sdmVyLnBhZ2UgOiBudWxsO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdG9uUmVzZXQoKSB7XHJcblx0XHQvLyBjb25zb2xlLmxvZygnRWRpdG9yUm9vdENvbXBvbmVudC5vblJlc2V0Jyk7XHJcblx0XHRPYmplY3Qua2V5cyh0aGlzLmZvcm0uY29udHJvbHMpLmZvckVhY2goa2V5ID0+IHtcclxuXHRcdFx0dGhpcy5mb3JtLmdldChrZXkpLnNldFZhbHVlKHRoaXMuX3BhZ2VDb3B5W2tleV0pO1xyXG5cdFx0fSk7XHJcblx0XHQvKlxyXG5cdFx0Y29uc3Qga2V5cyA9IHRoaXMuY29udHJvbHMubWFwKHggPT4geC5rZXkpO1xyXG5cdFx0a2V5cy5mb3JFYWNoKGsgPT4ge1xyXG5cdFx0XHQvLyBjb25zb2xlLmxvZyhrLCB0aGlzLl9wYWdlW2tdLCB0aGlzLl9wYWdlQ29weVtrXSk7XHJcblx0XHRcdHRoaXMuX3BhZ2Vba10gPSB0aGlzLl9wYWdlQ29weVtrXTtcclxuXHRcdH0pO1xyXG5cdFx0Ki9cclxuXHR9XHJcblxyXG5cdG9uU3VibWl0KG1vZGVsKSB7XHJcblx0XHQvLyBjb25zb2xlLmxvZygnRWRpdG9yUm9vdENvbXBvbmVudC5vblN1Ym1pdCcsIG1vZGVsKTtcclxuXHRcdHRoaXMub25Bc3NpZ24obW9kZWwpO1xyXG5cdFx0Ly8gT2JqZWN0LmFzc2lnbih0aGlzLl9wYWdlLCBtb2RlbCk7XHJcblx0fVxyXG5cclxuXHRvbkFzc2lnbihtb2RlbCkge1xyXG5cdFx0T2JqZWN0LmtleXModGhpcy5mb3JtLmNvbnRyb2xzKS5mb3JFYWNoKGtleSA9PiB7XHJcblx0XHRcdHN3aXRjaCAoa2V5KSB7XHJcblx0XHRcdFx0Y2FzZSAnZGVzY3JpcHRpb24nOlxyXG5cdFx0XHRcdFx0dGhpcy5fcGFnZVtrZXldID0gdGhpcy5tYXJrZG93blNlcnZpY2UuY29tcGlsZShtb2RlbFtrZXldKTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0XHR0aGlzLl9wYWdlW2tleV0gPSBtb2RlbFtrZXldO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG59XHJcbiJdfQ==