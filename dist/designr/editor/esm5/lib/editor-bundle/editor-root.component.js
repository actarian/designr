/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID, ViewEncapsulation } from '@angular/core';
import { FormService } from '@designr/control';
import { DisposableComponent } from '@designr/core';
import { ConfigService, PageResolverService } from '@designr/page';
import { MarkdownService } from 'ngx-markdown';
import { takeUntil } from 'rxjs/operators';
var EditorRootComponent = /** @class */ (function (_super) {
    tslib_1.__extends(EditorRootComponent, _super);
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
        get: /**
         * @return {?}
         */
        function () {
            return this._page;
        },
        set: /**
         * @param {?} page
         * @return {?}
         */
        function (page) {
            var _this = this;
            this._pageCopy = Object.assign({}, page);
            this._page = page;
            if (this._page) {
                this.options = this.formService.getOptions(this.getControlsByPage(page));
                this.form = this.formService.getFormGroup(this.options);
                this.form.valueChanges.subscribe((/**
                 * @param {?} x
                 * @return {?}
                 */
                function (x) {
                    _this.onAssign(x); // Object.assign(this._page, x);
                }));
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
        get: /**
         * @return {?}
         */
        function () {
            if (this._page) {
                /** @type {?} */
                var component = this.configService.options.pages[this._page.component];
                if (component) {
                    return component.name;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} page
     * @return {?}
     */
    EditorRootComponent.prototype.getControlsByPage = /**
     * @param {?} page
     * @return {?}
     */
    function (page) {
        return page ? Object.keys(page).filter((/**
         * @param {?} key
         * @return {?}
         */
        function (key) { return typeof page[key] !== 'object'; })).map((/**
         * @param {?} key
         * @param {?} i
         * @return {?}
         */
        function (key, i) {
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
    };
    /**
     * @return {?}
     */
    EditorRootComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (isPlatformBrowser(this.platformId)) {
            this.pageResolverService.events$.pipe(takeUntil(this.unsubscribe)).subscribe((/**
             * @param {?} resolver
             * @return {?}
             */
            function (resolver) {
                // console.log('EditorRootComponent.resolver', resolver);
                _this.page = resolver ? resolver.page : null;
            }));
        }
    };
    /**
     * @return {?}
     */
    EditorRootComponent.prototype.onReset = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // console.log('EditorRootComponent.onReset');
        Object.keys(this.form.controls).forEach((/**
         * @param {?} key
         * @return {?}
         */
        function (key) {
            _this.form.get(key).setValue(_this._pageCopy[key]);
        }));
        /*
        const keys = this.controls.map(x => x.key);
        keys.forEach(k => {
            // console.log(k, this._page[k], this._pageCopy[k]);
            this._page[k] = this._pageCopy[k];
        });
        */
    };
    /**
     * @param {?} model
     * @return {?}
     */
    EditorRootComponent.prototype.onSubmit = /**
     * @param {?} model
     * @return {?}
     */
    function (model) {
        // console.log('EditorRootComponent.onSubmit', model);
        this.onAssign(model);
        // Object.assign(this._page, model);
    };
    /**
     * @param {?} model
     * @return {?}
     */
    EditorRootComponent.prototype.onAssign = /**
     * @param {?} model
     * @return {?}
     */
    function (model) {
        var _this = this;
        Object.keys(this.form.controls).forEach((/**
         * @param {?} key
         * @return {?}
         */
        function (key) {
            switch (key) {
                case 'description':
                    _this._page[key] = _this.markdownService.compile(model[key]);
                    break;
                default:
                    _this._page[key] = model[key];
            }
        }));
    };
    EditorRootComponent.decorators = [
        { type: Component, args: [{
                    selector: 'editor-root-component',
                    template: "<ng-container *ngIf=\"page\">\r\n\t<form class=\"form\" name=\"form\" [formGroup]=\"form\" (ngSubmit)=\"form.valid && onSubmit(form.value)\" #form=\"ngForm\" role=\"form\" novalidate autocomplete=\"off\">\r\n\t\t<div class=\"info\">\r\n\t\t\t<span class=\"id\">{{page.id}}</span>\r\n\t\t\t<span class=\"status\" [ngClass]=\"{ active: page.active }\">{{page.active ? 'active' : 'inactive'}}</span>\r\n\t\t\t<span class=\"component\">{{componentName}}</span>\r\n\t\t</div>\r\n\t\t<hr>\r\n\t\t<h2 class=\"h1\" [innerHTML]=\"page.title\"></h2>\r\n\t\t<!--\r\n\t\t\t\t<p [innerHTML]=\"page.description\"></p>\r\n\t\t\t\t-->\r\n\t\t<hr>\r\n\t\t<div *ngFor=\"let option of options\">\r\n\t\t\t<control-outlet class=\"fieldset__field fieldset__field--{{option.schema}}\" [option]=\"option\" [form]=\"form\"></control-outlet>\r\n\t\t</div>\r\n\t\t<!-- <control-editable formControlName=\"email\"></control-editable> -->\r\n\t\t<div class=\"action-bar\">\r\n\t\t\t<button type=\"text\" class=\"btn btn--secondary\" [disabled]=\"submitted || !form.valid\" (click)=\"onReset()\" title=\"Annulla\"><span>Annulla</span></button>\r\n\t\t\t<button type=\"submit\" class=\"btn btn--primary\" [disabled]=\"submitted || !form.valid\" [ngClass]=\"{ 'btn--busy': busy }\" title=\"Salva\"><span>Salva</span></button>\r\n\t\t</div>\r\n\t</form>\r\n</ng-container>\r\n",
                    encapsulation: ViewEncapsulation.Emulated,
                    styles: [":host{font-family:Arial,Helvetica,sans-serif;font-size:16px;line-height:1.5;background:#fafafa;color:#55555a}.h1{color:#55555a;font-size:19px}form{margin:0}label{display:block;width:100%;color:#55555a;font-weight:700;font-size:12px}.id{display:inline-block;padding:4px 6px;background:#0875c2;color:#fff;border-radius:3px;font-size:12px;line-height:1;margin-right:4px}.status{display:inline-block;padding:4px 6px;background:#fff;color:#000;border-radius:3px;font-size:12px;line-height:1;margin-right:4px}.status.active{background:green;color:#fff}.component{display:inline-block;font-size:14px;font-style:italic}"]
                }] }
    ];
    /** @nocollapse */
    EditorRootComponent.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: ConfigService },
        { type: MarkdownService },
        { type: FormService },
        { type: PageResolverService }
    ]; };
    return EditorRootComponent;
}(DisposableComponent));
export { EditorRootComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLXJvb3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvZWRpdG9yLyIsInNvdXJjZXMiOlsibGliL2VkaXRvci1idW5kbGUvZWRpdG9yLXJvb3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQVUsV0FBVyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTFGLE9BQU8sRUFBaUIsV0FBVyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDOUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxhQUFhLEVBQXNCLG1CQUFtQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDL0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDO0lBTXlDLCtDQUFtQjtJQVczRCw2QkFDOEIsVUFBa0IsRUFDdkMsYUFBNEIsRUFDNUIsZUFBZ0MsRUFDaEMsV0FBd0IsRUFDeEIsbUJBQXdDO1FBTGpELFlBT0MsaUJBQU8sU0FDUDtRQVA2QixnQkFBVSxHQUFWLFVBQVUsQ0FBUTtRQUN2QyxtQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixxQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsaUJBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIseUJBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQVJqRCxVQUFJLEdBQVksS0FBSyxDQUFDO1FBQ3RCLGVBQVMsR0FBWSxLQUFLLENBQUM7O0lBVTNCLENBQUM7SUFFRCxzQkFBSSxxQ0FBSTs7OztRQUFSO1lBQ0MsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ25CLENBQUM7Ozs7O1FBRUQs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LHNDQUE4Qjs7SUFDOUIsbUNBQWdCOztJQUVoQixtQ0FBc0I7O0lBQ3RCLHdDQUEyQjs7Ozs7SUFHMUIseUNBQStDOzs7OztJQUMvQyw0Q0FBb0M7Ozs7O0lBQ3BDLDhDQUF3Qzs7Ozs7SUFDeEMsMENBQWdDOzs7OztJQUNoQyxrREFBZ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0LCBPbkluaXQsIFBMQVRGT1JNX0lELCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IENvbnRyb2xPcHRpb24sIEZvcm1TZXJ2aWNlIH0gZnJvbSAnQGRlc2lnbnIvY29udHJvbCc7XHJcbmltcG9ydCB7IERpc3Bvc2FibGVDb21wb25lbnQgfSBmcm9tICdAZGVzaWduci9jb3JlJztcclxuaW1wb3J0IHsgQ29uZmlnU2VydmljZSwgUGFnZSwgUGFnZVJlc29sdmVyLCBQYWdlUmVzb2x2ZXJTZXJ2aWNlIH0gZnJvbSAnQGRlc2lnbnIvcGFnZSc7XHJcbmltcG9ydCB7IE1hcmtkb3duU2VydmljZSB9IGZyb20gJ25neC1tYXJrZG93bic7XHJcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAnZWRpdG9yLXJvb3QtY29tcG9uZW50JyxcclxuXHR0ZW1wbGF0ZVVybDogJy4vZWRpdG9yLXJvb3QuY29tcG9uZW50Lmh0bWwnLFxyXG5cdHN0eWxlVXJsczogWycuL2VkaXRvci1yb290LmNvbXBvbmVudC5zY3NzJ10sXHJcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uRW11bGF0ZWQsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFZGl0b3JSb290Q29tcG9uZW50IGV4dGVuZHMgRGlzcG9zYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG5cdHByaXZhdGUgX3BhZ2VDb3B5OiBQYWdlO1xyXG5cdHByaXZhdGUgX3BhZ2U6IFBhZ2U7XHJcblxyXG5cdG9wdGlvbnM6IENvbnRyb2xPcHRpb248YW55PltdO1xyXG5cdGZvcm06IEZvcm1Hcm91cDtcclxuXHJcblx0YnVzeTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cdHN1Ym1pdHRlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogc3RyaW5nLFxyXG5cdFx0cHJpdmF0ZSBjb25maWdTZXJ2aWNlOiBDb25maWdTZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSBtYXJrZG93blNlcnZpY2U6IE1hcmtkb3duU2VydmljZSxcclxuXHRcdHByaXZhdGUgZm9ybVNlcnZpY2U6IEZvcm1TZXJ2aWNlLFxyXG5cdFx0cHJpdmF0ZSBwYWdlUmVzb2x2ZXJTZXJ2aWNlOiBQYWdlUmVzb2x2ZXJTZXJ2aWNlLFxyXG5cdCkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHR9XHJcblxyXG5cdGdldCBwYWdlKCk6IFBhZ2Uge1xyXG5cdFx0cmV0dXJuIHRoaXMuX3BhZ2U7XHJcblx0fVxyXG5cclxuXHRzZXQgcGFnZShwYWdlOiBQYWdlKSB7XHJcblx0XHR0aGlzLl9wYWdlQ29weSA9IE9iamVjdC5hc3NpZ24oe30sIHBhZ2UpO1xyXG5cdFx0dGhpcy5fcGFnZSA9IHBhZ2U7XHJcblx0XHRpZiAodGhpcy5fcGFnZSkge1xyXG5cdFx0XHR0aGlzLm9wdGlvbnMgPSB0aGlzLmZvcm1TZXJ2aWNlLmdldE9wdGlvbnModGhpcy5nZXRDb250cm9sc0J5UGFnZShwYWdlKSk7XHJcblx0XHRcdHRoaXMuZm9ybSA9IHRoaXMuZm9ybVNlcnZpY2UuZ2V0Rm9ybUdyb3VwKHRoaXMub3B0aW9ucyk7XHJcblx0XHRcdHRoaXMuZm9ybS52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKHggPT4ge1xyXG5cdFx0XHRcdHRoaXMub25Bc3NpZ24oeCk7IC8vIE9iamVjdC5hc3NpZ24odGhpcy5fcGFnZSwgeCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5vcHRpb25zID0gW107XHJcblx0XHRcdHRoaXMuZm9ybSA9IG51bGw7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRnZXQgY29tcG9uZW50TmFtZSgpOiBzdHJpbmcge1xyXG5cdFx0aWYgKHRoaXMuX3BhZ2UpIHtcclxuXHRcdFx0Y29uc3QgY29tcG9uZW50ID0gdGhpcy5jb25maWdTZXJ2aWNlLm9wdGlvbnMucGFnZXNbdGhpcy5fcGFnZS5jb21wb25lbnRdO1xyXG5cdFx0XHRpZiAoY29tcG9uZW50KSB7XHJcblx0XHRcdFx0cmV0dXJuIGNvbXBvbmVudC5uYW1lO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRnZXRDb250cm9sc0J5UGFnZShwYWdlOiBQYWdlKTogQ29udHJvbE9wdGlvbjxhbnk+W10ge1xyXG5cdFx0cmV0dXJuIHBhZ2UgPyBPYmplY3Qua2V5cyhwYWdlKS5maWx0ZXIoa2V5ID0+IHR5cGVvZiBwYWdlW2tleV0gIT09ICdvYmplY3QnKS5tYXAoKGtleTogc3RyaW5nLCBpOiBudW1iZXIpID0+IHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRrZXk6IGtleSxcclxuXHRcdFx0XHR2YWx1ZTogcGFnZVtrZXldLFxyXG5cdFx0XHRcdHNjaGVtYToga2V5ID09PSAnZGVzY3JpcHRpb24nID8gJ21hcmtkb3duJyA6ICd0ZXh0JyxcclxuXHRcdFx0XHRsYWJlbDoga2V5LFxyXG5cdFx0XHRcdHBsYWNlaG9sZGVyOiBrZXksXHJcblx0XHRcdFx0cmVxdWlyZWQ6IGZhbHNlLFxyXG5cdFx0XHRcdG9yZGVyOiBpICsgMVxyXG5cdFx0XHR9O1xyXG5cdFx0fSkgOiBbXTtcclxuXHR9XHJcblxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0aWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcclxuXHRcdFx0dGhpcy5wYWdlUmVzb2x2ZXJTZXJ2aWNlLmV2ZW50cyQucGlwZShcclxuXHRcdFx0XHR0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSlcclxuXHRcdFx0KS5zdWJzY3JpYmUoKHJlc29sdmVyOiBQYWdlUmVzb2x2ZXIpID0+IHtcclxuXHRcdFx0XHQvLyBjb25zb2xlLmxvZygnRWRpdG9yUm9vdENvbXBvbmVudC5yZXNvbHZlcicsIHJlc29sdmVyKTtcclxuXHRcdFx0XHR0aGlzLnBhZ2UgPSByZXNvbHZlciA/IHJlc29sdmVyLnBhZ2UgOiBudWxsO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdG9uUmVzZXQoKSB7XHJcblx0XHQvLyBjb25zb2xlLmxvZygnRWRpdG9yUm9vdENvbXBvbmVudC5vblJlc2V0Jyk7XHJcblx0XHRPYmplY3Qua2V5cyh0aGlzLmZvcm0uY29udHJvbHMpLmZvckVhY2goa2V5ID0+IHtcclxuXHRcdFx0dGhpcy5mb3JtLmdldChrZXkpLnNldFZhbHVlKHRoaXMuX3BhZ2VDb3B5W2tleV0pO1xyXG5cdFx0fSk7XHJcblx0XHQvKlxyXG5cdFx0Y29uc3Qga2V5cyA9IHRoaXMuY29udHJvbHMubWFwKHggPT4geC5rZXkpO1xyXG5cdFx0a2V5cy5mb3JFYWNoKGsgPT4ge1xyXG5cdFx0XHQvLyBjb25zb2xlLmxvZyhrLCB0aGlzLl9wYWdlW2tdLCB0aGlzLl9wYWdlQ29weVtrXSk7XHJcblx0XHRcdHRoaXMuX3BhZ2Vba10gPSB0aGlzLl9wYWdlQ29weVtrXTtcclxuXHRcdH0pO1xyXG5cdFx0Ki9cclxuXHR9XHJcblxyXG5cdG9uU3VibWl0KG1vZGVsKSB7XHJcblx0XHQvLyBjb25zb2xlLmxvZygnRWRpdG9yUm9vdENvbXBvbmVudC5vblN1Ym1pdCcsIG1vZGVsKTtcclxuXHRcdHRoaXMub25Bc3NpZ24obW9kZWwpO1xyXG5cdFx0Ly8gT2JqZWN0LmFzc2lnbih0aGlzLl9wYWdlLCBtb2RlbCk7XHJcblx0fVxyXG5cclxuXHRvbkFzc2lnbihtb2RlbCkge1xyXG5cdFx0T2JqZWN0LmtleXModGhpcy5mb3JtLmNvbnRyb2xzKS5mb3JFYWNoKGtleSA9PiB7XHJcblx0XHRcdHN3aXRjaCAoa2V5KSB7XHJcblx0XHRcdFx0Y2FzZSAnZGVzY3JpcHRpb24nOlxyXG5cdFx0XHRcdFx0dGhpcy5fcGFnZVtrZXldID0gdGhpcy5tYXJrZG93blNlcnZpY2UuY29tcGlsZShtb2RlbFtrZXldKTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0XHR0aGlzLl9wYWdlW2tleV0gPSBtb2RlbFtrZXldO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG59XHJcbiJdfQ==