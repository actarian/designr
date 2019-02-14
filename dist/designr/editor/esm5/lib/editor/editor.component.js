/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { animate, state, style, transition, trigger } from '@angular/animations';
import { isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, PLATFORM_ID, ViewEncapsulation } from '@angular/core';
import { ConfigService, DisposableComponent, FormService, PageResolverService } from '@designr/core';
import { MarkdownService } from 'ngx-markdown';
import { takeUntil } from 'rxjs/operators';
import { EditorConfig, EDITOR_CONFIG } from '../config/editor.config';
var EditorComponent = /** @class */ (function (_super) {
    tslib_1.__extends(EditorComponent, _super);
    function EditorComponent(platformId, config, configService, markdownService, formService, pageResolverService) {
        var _this = _super.call(this) || this;
        _this.platformId = platformId;
        _this.config = config;
        _this.configService = configService;
        _this.markdownService = markdownService;
        _this.formService = formService;
        _this.pageResolverService = pageResolverService;
        _this.editing = false;
        _this.busy = false;
        _this.submitted = false;
        return _this;
    }
    Object.defineProperty(EditorComponent.prototype, "page", {
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
                this.controls = this.formService.getControlsFromOptions(this.getControlsByPage(page));
                this.group = this.formService.getGroupFromControls(this.controls);
                this.group.valueChanges.subscribe(function (x) {
                    _this.onAssign(x); // Object.assign(this._page, x);
                });
            }
            else {
                this.controls = [];
                this.group = null;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditorComponent.prototype, "componentName", {
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
    EditorComponent.prototype.getControlsByPage = /**
     * @param {?} page
     * @return {?}
     */
    function (page) {
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
    /**
     * @return {?}
     */
    EditorComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (isPlatformBrowser(this.platformId)) {
            this.pageResolverService.events$.pipe(takeUntil(this.unsubscribe)).subscribe(function (resolver) {
                // console.log('EditorComponent.resolver', resolver);
                _this.page = resolver ? resolver.page : null;
            });
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    EditorComponent.prototype.onKeydown = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (e.key === 'e' && e.ctrlKey) {
            this.editing = this.config.enabled && !this.editing;
            this.editing = !this.editing;
            // console.log('AppComponent.document:keydown', e.key, e.ctrlKey, e.altKey, e.code);
        }
    };
    /**
     * @return {?}
     */
    EditorComponent.prototype.onReset = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // console.log('EditorComponent.onReset');
        Object.keys(this.group.controls).forEach(function (key) {
            _this.group.get(key).setValue(_this._pageCopy[key]);
        });
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
    EditorComponent.prototype.onSubmit = /**
     * @param {?} model
     * @return {?}
     */
    function (model) {
        // console.log('EditorComponent.onSubmit', model);
        this.onAssign(model);
        // Object.assign(this._page, model);
    };
    /**
     * @param {?} model
     * @return {?}
     */
    EditorComponent.prototype.onAssign = /**
     * @param {?} model
     * @return {?}
     */
    function (model) {
        var _this = this;
        Object.keys(this.group.controls).forEach(function (key) {
            switch (key) {
                case 'description':
                    _this._page[key] = _this.markdownService.compile(model[key]);
                    break;
                default:
                    _this._page[key] = model[key];
            }
        });
    };
    EditorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'core-editor',
                    template: "<ng-container>\n\t<div class=\"page--editor\" [@openClose]=\"editing ? 'open' : 'closed'\" (clickOutside)=\"editing = false\">\n\t\t<ng-container *ngIf=\"editing && page\">\n\t\t\t<form class=\"form\" name=\"group\" [formGroup]=\"group\" (ngSubmit)=\"group.valid && onSubmit(group.value)\" #form=\"ngForm\" role=\"form\" novalidate autocomplete=\"off\">\n\t\t\t\t<div class=\"info\">\n\t\t\t\t\t<span class=\"id\">{{page.id}}</span>\n\t\t\t\t\t<span class=\"status\" [ngClass]=\"{ active: page.active }\">{{page.active ? 'active' : 'inactive'}}</span>\n\t\t\t\t\t<span class=\"component\">{{componentName}}</span>\n\t\t\t\t</div>\n\t\t\t\t<hr>\n\t\t\t\t<h2 class=\"h1\" [innerHTML]=\"page.title\"></h2>\n\t\t\t\t<!--\n\t\t\t\t<p [innerHTML]=\"page.description\"></p>\n\t\t\t\t-->\n\t\t\t\t<hr>\n\t\t\t\t<!--\n\t\t\t\t<div class=\"fieldset\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label>Label</label>\n\t\t\t\t\t\t<input placeholder=\"placeholder\" type=\"text\" class=\"form-control\" required [(ngModel)]=\"model.title\" name=\"title\" #title=\"ngModel\" autocomplete=\"title\">\n\t\t\t\t\t\t<div *ngIf=\"title.invalid && (form.submitted || title.dirty || title.touched)\" class=\"alert alert-danger\">\n\t\t\t\t\t\t\t<div *ngIf=\"title.errors.required\">{{ 'errors.required' | translate }}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t-->\n\t\t\t\t<div *ngFor=\"let control of controls\">\n\t\t\t\t\t<core-control [control]=\"control\" [form]=\"group\"></core-control>\n\t\t\t\t</div>\n\t\t\t\t<!-- <control-editable formControlName=\"email\"></control-editable> -->\n\t\t\t\t<div class=\"action-bar\">\n\t\t\t\t\t<button type=\"text\" class=\"btn btn--dimmed\" [disabled]=\"submitted || !group.valid\" (click)=\"onReset()\" title=\"Annulla\"><span>Annulla</span></button>\n\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"submitted || !group.valid\" [ngClass]=\"{ 'btn--busy': busy }\" title=\"Salva\"><span>Salva</span></button>\n\t\t\t\t</div>\n\t\t\t</form>\n\t\t</ng-container>\n\t</div>\n</ng-container>\n",
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
                    styles: [":host form{margin:0}:host label{display:block;width:100%;color:#55555a;font-weight:700;font-size:12px}.page--editor{position:fixed;top:0;right:0;width:320px;height:100vh;padding:15px;overflow-x:hidden;overflow-y:auto;font-family:Arial,Helvetica,sans-serif;font-size:16px;line-height:1.5;background:#fafafa;color:#55555a}.page--editor .h1{color:#55555a}@media (max-width:1024px){.page--editor{display:none}}.id{display:inline-block;padding:4px 6px;background:#0875c2;color:#fff;border-radius:3px;font-size:12px;line-height:1;margin-right:4px}.status{display:inline-block;padding:4px 6px;background:#fff;color:#000;border-radius:3px;font-size:12px;line-height:1;margin-right:4px}.status.active{background:green;color:#fff}.component{display:inline-block;font-size:14px;font-style:italic}::-webkit-scrollbar{width:0}::-webkit-scrollbar-track{background:0 0}::-webkit-scrollbar-thumb{background:0 0}::-webkit-scrollbar-thumb:hover{background:0 0}"]
                }] }
    ];
    /** @nocollapse */
    EditorComponent.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: EditorConfig, decorators: [{ type: Inject, args: [EDITOR_CONFIG,] }] },
        { type: ConfigService },
        { type: MarkdownService },
        { type: FormService },
        { type: PageResolverService }
    ]; };
    EditorComponent.propDecorators = {
        onKeydown: [{ type: HostListener, args: ['document:keydown', ['$event'],] }]
    };
    return EditorComponent;
}(DisposableComponent));
export { EditorComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    EditorComponent.prototype._pageCopy;
    /**
     * @type {?}
     * @private
     */
    EditorComponent.prototype._page;
    /** @type {?} */
    EditorComponent.prototype.controls;
    /** @type {?} */
    EditorComponent.prototype.group;
    /** @type {?} */
    EditorComponent.prototype.editing;
    /** @type {?} */
    EditorComponent.prototype.busy;
    /** @type {?} */
    EditorComponent.prototype.submitted;
    /**
     * @type {?}
     * @private
     */
    EditorComponent.prototype.platformId;
    /**
     * @type {?}
     * @private
     */
    EditorComponent.prototype.config;
    /**
     * @type {?}
     * @private
     */
    EditorComponent.prototype.configService;
    /**
     * @type {?}
     * @private
     */
    EditorComponent.prototype.markdownService;
    /**
     * @type {?}
     * @private
     */
    EditorComponent.prototype.formService;
    /**
     * @type {?}
     * @private
     */
    EditorComponent.prototype.pageResolverService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2VkaXRvci8iLCJzb3VyY2VzIjpbImxpYi9lZGl0b3IvZWRpdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDakYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUFpQixTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFL0csT0FBTyxFQUFFLGFBQWEsRUFBbUMsbUJBQW1CLEVBQUUsV0FBVyxFQUFzQixtQkFBbUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxSixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQy9DLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsWUFBWSxFQUFFLGFBQWEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRXRFO0lBd0JxQywyQ0FBbUI7SUFZdkQseUJBQzhCLFVBQWtCLEVBQ2hCLE1BQW9CLEVBQzNDLGFBQTRCLEVBQzVCLGVBQWdDLEVBQ2hDLFdBQXdCLEVBQ3hCLG1CQUF3QztRQU5qRCxZQVFDLGlCQUFPLFNBQ1A7UUFSNkIsZ0JBQVUsR0FBVixVQUFVLENBQVE7UUFDaEIsWUFBTSxHQUFOLE1BQU0sQ0FBYztRQUMzQyxtQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixxQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsaUJBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIseUJBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQVZqRCxhQUFPLEdBQVksS0FBSyxDQUFDO1FBQ3pCLFVB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QTJCOzs7OztJQUcxQixxQ0FBK0M7Ozs7O0lBQy9DLGlDQUFtRDs7Ozs7SUFDbkQsd0NBQW9DOzs7OztJQUNwQywwQ0FBd0M7Ozs7O0lBQ3hDLHNDQUFnQzs7Ozs7SUFDaEMsOENBQWdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYW5pbWF0ZSwgc3RhdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEhvc3RMaXN0ZW5lciwgSW5qZWN0LCBQTEFURk9STV9JRCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENvbmZpZ1NlcnZpY2UsIENvbnRyb2xCYXNlLCBDb250cm9sQmFzZU9wdGlvbnMsIERpc3Bvc2FibGVDb21wb25lbnQsIEZvcm1TZXJ2aWNlLCBQYWdlLCBQYWdlUmVzb2x2ZXIsIFBhZ2VSZXNvbHZlclNlcnZpY2UgfSBmcm9tICdAZGVzaWduci9jb3JlJztcbmltcG9ydCB7IE1hcmtkb3duU2VydmljZSB9IGZyb20gJ25neC1tYXJrZG93bic7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBFZGl0b3JDb25maWcsIEVESVRPUl9DT05GSUcgfSBmcm9tICcuLi9jb25maWcvZWRpdG9yLmNvbmZpZyc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2NvcmUtZWRpdG9yJyxcblx0dGVtcGxhdGVVcmw6ICcuL2VkaXRvci5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogWycuL2VkaXRvci5jb21wb25lbnQuc2NzcyddLFxuXHRhbmltYXRpb25zOiBbXG5cdFx0dHJpZ2dlcignb3BlbkNsb3NlJywgW1xuXHRcdFx0c3RhdGUoJ29wZW4nLCBzdHlsZSh7XG5cdFx0XHRcdG9wYWNpdHk6IDEsXG5cdFx0XHRcdHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMCknLFxuXHRcdFx0fSkpLFxuXHRcdFx0c3RhdGUoJ2Nsb3NlZCcsIHN0eWxlKHtcblx0XHRcdFx0b3BhY2l0eTogMC41LFxuXHRcdFx0XHR0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDEwMCUpJyxcblx0XHRcdH0pKSxcblx0XHRcdHRyYW5zaXRpb24oJ29wZW4gPT4gY2xvc2VkJywgW1xuXHRcdFx0XHRhbmltYXRlKCcyNTBtcycpXG5cdFx0XHRdKSxcblx0XHRcdHRyYW5zaXRpb24oJ2Nsb3NlZCA9PiBvcGVuJywgW1xuXHRcdFx0XHRhbmltYXRlKCcxNTBtcycpXG5cdFx0XHRdKSxcblx0XHRdKSxcblx0XSxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uRW11bGF0ZWQsXG59KVxuZXhwb3J0IGNsYXNzIEVkaXRvckNvbXBvbmVudCBleHRlbmRzIERpc3Bvc2FibGVDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcblxuXHRwcml2YXRlIF9wYWdlQ29weTogUGFnZTtcblx0cHJpdmF0ZSBfcGFnZTogUGFnZTtcblxuXHRjb250cm9sczogQ29udHJvbEJhc2U8YW55PltdO1xuXHRncm91cDogRm9ybUdyb3VwO1xuXG5cdGVkaXRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcblx0YnVzeTogYm9vbGVhbiA9IGZhbHNlO1xuXHRzdWJtaXR0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IHN0cmluZyxcblx0XHRASW5qZWN0KEVESVRPUl9DT05GSUcpIHByaXZhdGUgY29uZmlnOiBFZGl0b3JDb25maWcsXG5cdFx0cHJpdmF0ZSBjb25maWdTZXJ2aWNlOiBDb25maWdTZXJ2aWNlLFxuXHRcdHByaXZhdGUgbWFya2Rvd25TZXJ2aWNlOiBNYXJrZG93blNlcnZpY2UsXG5cdFx0cHJpdmF0ZSBmb3JtU2VydmljZTogRm9ybVNlcnZpY2UsXG5cdFx0cHJpdmF0ZSBwYWdlUmVzb2x2ZXJTZXJ2aWNlOiBQYWdlUmVzb2x2ZXJTZXJ2aWNlLFxuXHQpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0Z2V0IHBhZ2UoKTogUGFnZSB7XG5cdFx0cmV0dXJuIHRoaXMuX3BhZ2U7XG5cdH1cblxuXHRzZXQgcGFnZShwYWdlOiBQYWdlKSB7XG5cdFx0dGhpcy5fcGFnZUNvcHkgPSBPYmplY3QuYXNzaWduKHt9LCBwYWdlKTtcblx0XHR0aGlzLl9wYWdlID0gcGFnZTtcblx0XHRpZiAodGhpcy5fcGFnZSkge1xuXHRcdFx0dGhpcy5jb250cm9scyA9IHRoaXMuZm9ybVNlcnZpY2UuZ2V0Q29udHJvbHNGcm9tT3B0aW9ucyh0aGlzLmdldENvbnRyb2xzQnlQYWdlKHBhZ2UpKTtcblx0XHRcdHRoaXMuZ3JvdXAgPSB0aGlzLmZvcm1TZXJ2aWNlLmdldEdyb3VwRnJvbUNvbnRyb2xzKHRoaXMuY29udHJvbHMpO1xuXHRcdFx0dGhpcy5ncm91cC52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKHggPT4ge1xuXHRcdFx0XHR0aGlzLm9uQXNzaWduKHgpOyAvLyBPYmplY3QuYXNzaWduKHRoaXMuX3BhZ2UsIHgpO1xuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuY29udHJvbHMgPSBbXTtcblx0XHRcdHRoaXMuZ3JvdXAgPSBudWxsO1xuXHRcdH1cblx0fVxuXG5cdGdldCBjb21wb25lbnROYW1lKCk6IHN0cmluZyB7XG5cdFx0aWYgKHRoaXMuX3BhZ2UpIHtcblx0XHRcdGNvbnN0IGNvbXBvbmVudCA9IHRoaXMuY29uZmlnU2VydmljZS5vcHRpb25zLnBhZ2VzW3RoaXMuX3BhZ2UuY29tcG9uZW50XTtcblx0XHRcdGlmIChjb21wb25lbnQpIHtcblx0XHRcdFx0cmV0dXJuIGNvbXBvbmVudC5uYW1lO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGdldENvbnRyb2xzQnlQYWdlKHBhZ2U6IFBhZ2UpOiBDb250cm9sQmFzZU9wdGlvbnM8YW55PltdIHtcblx0XHRyZXR1cm4gcGFnZSA/IE9iamVjdC5rZXlzKHBhZ2UpLmZpbHRlcihrZXkgPT4gdHlwZW9mIHBhZ2Vba2V5XSAhPT0gJ29iamVjdCcpLm1hcCgoa2V5OiBzdHJpbmcsIGk6IG51bWJlcikgPT4ge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0a2V5OiBrZXksXG5cdFx0XHRcdHZhbHVlOiBwYWdlW2tleV0sXG5cdFx0XHRcdHNjaGVtYToga2V5ID09PSAnZGVzY3JpcHRpb24nID8gJ21hcmtkb3duJyA6ICd0ZXh0Jyxcblx0XHRcdFx0bGFiZWw6IGtleSxcblx0XHRcdFx0cGxhY2Vob2xkZXI6IGtleSxcblx0XHRcdFx0cmVxdWlyZWQ6IGZhbHNlLFxuXHRcdFx0XHRvcmRlcjogaSArIDFcblx0XHRcdH07XG5cdFx0fSkgOiBbXTtcblx0fVxuXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblx0XHRpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuXHRcdFx0dGhpcy5wYWdlUmVzb2x2ZXJTZXJ2aWNlLmV2ZW50cyQucGlwZShcblx0XHRcdFx0dGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUpXG5cdFx0XHQpLnN1YnNjcmliZSgocmVzb2x2ZXI6IFBhZ2VSZXNvbHZlcikgPT4ge1xuXHRcdFx0XHQvLyBjb25zb2xlLmxvZygnRWRpdG9yQ29tcG9uZW50LnJlc29sdmVyJywgcmVzb2x2ZXIpO1xuXHRcdFx0XHR0aGlzLnBhZ2UgPSByZXNvbHZlciA/IHJlc29sdmVyLnBhZ2UgOiBudWxsO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0QEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6a2V5ZG93bicsIFsnJGV2ZW50J10pXG5cdG9uS2V5ZG93bihlOiBLZXlib2FyZEV2ZW50KSB7XG5cdFx0aWYgKGUua2V5ID09PSAnZScgJiYgZS5jdHJsS2V5KSB7XG5cdFx0XHR0aGlzLmVkaXRpbmcgPSB0aGlzLmNvbmZpZy5lbmFibGVkICYmICF0aGlzLmVkaXRpbmc7XG5cdFx0XHR0aGlzLmVkaXRpbmcgPSAhdGhpcy5lZGl0aW5nO1xuXHRcdFx0Ly8gY29uc29sZS5sb2coJ0FwcENvbXBvbmVudC5kb2N1bWVudDprZXlkb3duJywgZS5rZXksIGUuY3RybEtleSwgZS5hbHRLZXksIGUuY29kZSk7XG5cdFx0fVxuXHR9XG5cblx0b25SZXNldCgpIHtcblx0XHQvLyBjb25zb2xlLmxvZygnRWRpdG9yQ29tcG9uZW50Lm9uUmVzZXQnKTtcblx0XHRPYmplY3Qua2V5cyh0aGlzLmdyb3VwLmNvbnRyb2xzKS5mb3JFYWNoKGtleSA9PiB7XG5cdFx0XHR0aGlzLmdyb3VwLmdldChrZXkpLnNldFZhbHVlKHRoaXMuX3BhZ2VDb3B5W2tleV0pO1xuXHRcdH0pO1xuXHRcdC8qXG5cdFx0Y29uc3Qga2V5cyA9IHRoaXMuY29udHJvbHMubWFwKHggPT4geC5rZXkpO1xuXHRcdGtleXMuZm9yRWFjaChrID0+IHtcblx0XHRcdC8vIGNvbnNvbGUubG9nKGssIHRoaXMuX3BhZ2Vba10sIHRoaXMuX3BhZ2VDb3B5W2tdKTtcblx0XHRcdHRoaXMuX3BhZ2Vba10gPSB0aGlzLl9wYWdlQ29weVtrXTtcblx0XHR9KTtcblx0XHQqL1xuXHR9XG5cblx0b25TdWJtaXQobW9kZWwpIHtcblx0XHQvLyBjb25zb2xlLmxvZygnRWRpdG9yQ29tcG9uZW50Lm9uU3VibWl0JywgbW9kZWwpO1xuXHRcdHRoaXMub25Bc3NpZ24obW9kZWwpO1xuXHRcdC8vIE9iamVjdC5hc3NpZ24odGhpcy5fcGFnZSwgbW9kZWwpO1xuXHR9XG5cblx0b25Bc3NpZ24obW9kZWwpIHtcblx0XHRPYmplY3Qua2V5cyh0aGlzLmdyb3VwLmNvbnRyb2xzKS5mb3JFYWNoKGtleSA9PiB7XG5cdFx0XHRzd2l0Y2ggKGtleSkge1xuXHRcdFx0XHRjYXNlICdkZXNjcmlwdGlvbic6XG5cdFx0XHRcdFx0dGhpcy5fcGFnZVtrZXldID0gdGhpcy5tYXJrZG93blNlcnZpY2UuY29tcGlsZShtb2RlbFtrZXldKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHR0aGlzLl9wYWdlW2tleV0gPSBtb2RlbFtrZXldO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cbn1cbiJdfQ==