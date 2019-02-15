/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { animate, state, style, transition, trigger } from '@angular/animations';
import { isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, PLATFORM_ID, ViewEncapsulation } from '@angular/core';
import { DisposableComponent, FormService } from '@designr/core';
import { PageResolverService, PageService } from '@designr/page';
import { MarkdownService } from 'ngx-markdown';
import { takeUntil } from 'rxjs/operators';
import { EditorConfig, EDITOR_CONFIG } from '../config/editor.config';
var EditorComponent = /** @class */ (function (_super) {
    tslib_1.__extends(EditorComponent, _super);
    function EditorComponent(platformId, config, pageService, markdownService, formService, pageResolverService) {
        var _this = _super.call(this) || this;
        _this.platformId = platformId;
        _this.config = config;
        _this.pageService = pageService;
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
                var component = this.pageService.options.pages[this._page.component];
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
        { type: PageService },
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
    EditorComponent.prototype.pageService;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2VkaXRvci8iLCJzb3VyY2VzIjpbImxpYi9lZGl0b3IvZWRpdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDakYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUFpQixTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFL0csT0FBTyxFQUFtQyxtQkFBbUIsRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEcsT0FBTyxFQUFzQixtQkFBbUIsRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUMvQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLFlBQVksRUFBRSxhQUFhLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUV0RTtJQXdCcUMsMkNBQW1CO0lBWXZELHlCQUM4QixVQUFrQixFQUNoQixNQUFvQixFQUMzQyxXQUF3QixFQUN4QixlQUFnQyxFQUNoQyxXQUF3QixFQUN4QixtQkFBd0M7UUFOakQsWUFRQyxpQkFBTyxTQUNQO1FBUjZCLGdCQUFVLEdBQVYsVUFBVSxDQUFRO1FBQ2hCLFlBQU0sR0FBTixNQUFNLENBQWM7UUFDM0MsaUJBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIscUJBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLGlCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLHlCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFW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QixrQ0FBeUI7O0lBQ3pCLCtCQUFzQjs7SUFDdEIsb0NBQTJCOzs7OztJQUcxQixxQ0FBK0M7Ozs7O0lBQy9DLGlDQUFtRDs7Ozs7SUFDbkQsc0NBQWdDOzs7OztJQUNoQywwQ0FBd0M7Ozs7O0lBQ3hDLHNDQUFnQzs7Ozs7SUFDaEMsOENBQWdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYW5pbWF0ZSwgc3RhdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEhvc3RMaXN0ZW5lciwgSW5qZWN0LCBQTEFURk9STV9JRCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENvbnRyb2xCYXNlLCBDb250cm9sQmFzZU9wdGlvbnMsIERpc3Bvc2FibGVDb21wb25lbnQsIEZvcm1TZXJ2aWNlIH0gZnJvbSAnQGRlc2lnbnIvY29yZSc7XG5pbXBvcnQgeyBQYWdlLCBQYWdlUmVzb2x2ZXIsIFBhZ2VSZXNvbHZlclNlcnZpY2UsIFBhZ2VTZXJ2aWNlIH0gZnJvbSAnQGRlc2lnbnIvcGFnZSc7XG5pbXBvcnQgeyBNYXJrZG93blNlcnZpY2UgfSBmcm9tICduZ3gtbWFya2Rvd24nO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgRWRpdG9yQ29uZmlnLCBFRElUT1JfQ09ORklHIH0gZnJvbSAnLi4vY29uZmlnL2VkaXRvci5jb25maWcnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdjb3JlLWVkaXRvcicsXG5cdHRlbXBsYXRlVXJsOiAnLi9lZGl0b3IuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsnLi9lZGl0b3IuY29tcG9uZW50LnNjc3MnXSxcblx0YW5pbWF0aW9uczogW1xuXHRcdHRyaWdnZXIoJ29wZW5DbG9zZScsIFtcblx0XHRcdHN0YXRlKCdvcGVuJywgc3R5bGUoe1xuXHRcdFx0XHRvcGFjaXR5OiAxLFxuXHRcdFx0XHR0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDApJyxcblx0XHRcdH0pKSxcblx0XHRcdHN0YXRlKCdjbG9zZWQnLCBzdHlsZSh7XG5cdFx0XHRcdG9wYWNpdHk6IDAuNSxcblx0XHRcdFx0dHJhbnNmb3JtOiAndHJhbnNsYXRlWCgxMDAlKScsXG5cdFx0XHR9KSksXG5cdFx0XHR0cmFuc2l0aW9uKCdvcGVuID0+IGNsb3NlZCcsIFtcblx0XHRcdFx0YW5pbWF0ZSgnMjUwbXMnKVxuXHRcdFx0XSksXG5cdFx0XHR0cmFuc2l0aW9uKCdjbG9zZWQgPT4gb3BlbicsIFtcblx0XHRcdFx0YW5pbWF0ZSgnMTUwbXMnKVxuXHRcdFx0XSksXG5cdFx0XSksXG5cdF0sXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLkVtdWxhdGVkLFxufSlcbmV4cG9ydCBjbGFzcyBFZGl0b3JDb21wb25lbnQgZXh0ZW5kcyBEaXNwb3NhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG5cblx0cHJpdmF0ZSBfcGFnZUNvcHk6IFBhZ2U7XG5cdHByaXZhdGUgX3BhZ2U6IFBhZ2U7XG5cblx0Y29udHJvbHM6IENvbnRyb2xCYXNlPGFueT5bXTtcblx0Z3JvdXA6IEZvcm1Hcm91cDtcblxuXHRlZGl0aW5nOiBib29sZWFuID0gZmFsc2U7XG5cdGJ1c3k6IGJvb2xlYW4gPSBmYWxzZTtcblx0c3VibWl0dGVkOiBib29sZWFuID0gZmFsc2U7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0QEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBzdHJpbmcsXG5cdFx0QEluamVjdChFRElUT1JfQ09ORklHKSBwcml2YXRlIGNvbmZpZzogRWRpdG9yQ29uZmlnLFxuXHRcdHByaXZhdGUgcGFnZVNlcnZpY2U6IFBhZ2VTZXJ2aWNlLFxuXHRcdHByaXZhdGUgbWFya2Rvd25TZXJ2aWNlOiBNYXJrZG93blNlcnZpY2UsXG5cdFx0cHJpdmF0ZSBmb3JtU2VydmljZTogRm9ybVNlcnZpY2UsXG5cdFx0cHJpdmF0ZSBwYWdlUmVzb2x2ZXJTZXJ2aWNlOiBQYWdlUmVzb2x2ZXJTZXJ2aWNlLFxuXHQpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0Z2V0IHBhZ2UoKTogUGFnZSB7XG5cdFx0cmV0dXJuIHRoaXMuX3BhZ2U7XG5cdH1cblxuXHRzZXQgcGFnZShwYWdlOiBQYWdlKSB7XG5cdFx0dGhpcy5fcGFnZUNvcHkgPSBPYmplY3QuYXNzaWduKHt9LCBwYWdlKTtcblx0XHR0aGlzLl9wYWdlID0gcGFnZTtcblx0XHRpZiAodGhpcy5fcGFnZSkge1xuXHRcdFx0dGhpcy5jb250cm9scyA9IHRoaXMuZm9ybVNlcnZpY2UuZ2V0Q29udHJvbHNGcm9tT3B0aW9ucyh0aGlzLmdldENvbnRyb2xzQnlQYWdlKHBhZ2UpKTtcblx0XHRcdHRoaXMuZ3JvdXAgPSB0aGlzLmZvcm1TZXJ2aWNlLmdldEdyb3VwRnJvbUNvbnRyb2xzKHRoaXMuY29udHJvbHMpO1xuXHRcdFx0dGhpcy5ncm91cC52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKHggPT4ge1xuXHRcdFx0XHR0aGlzLm9uQXNzaWduKHgpOyAvLyBPYmplY3QuYXNzaWduKHRoaXMuX3BhZ2UsIHgpO1xuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuY29udHJvbHMgPSBbXTtcblx0XHRcdHRoaXMuZ3JvdXAgPSBudWxsO1xuXHRcdH1cblx0fVxuXG5cdGdldCBjb21wb25lbnROYW1lKCk6IHN0cmluZyB7XG5cdFx0aWYgKHRoaXMuX3BhZ2UpIHtcblx0XHRcdGNvbnN0IGNvbXBvbmVudCA9IHRoaXMucGFnZVNlcnZpY2Uub3B0aW9ucy5wYWdlc1t0aGlzLl9wYWdlLmNvbXBvbmVudF07XG5cdFx0XHRpZiAoY29tcG9uZW50KSB7XG5cdFx0XHRcdHJldHVybiBjb21wb25lbnQubmFtZTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRnZXRDb250cm9sc0J5UGFnZShwYWdlOiBQYWdlKTogQ29udHJvbEJhc2VPcHRpb25zPGFueT5bXSB7XG5cdFx0cmV0dXJuIHBhZ2UgPyBPYmplY3Qua2V5cyhwYWdlKS5maWx0ZXIoa2V5ID0+IHR5cGVvZiBwYWdlW2tleV0gIT09ICdvYmplY3QnKS5tYXAoKGtleTogc3RyaW5nLCBpOiBudW1iZXIpID0+IHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGtleToga2V5LFxuXHRcdFx0XHR2YWx1ZTogcGFnZVtrZXldLFxuXHRcdFx0XHRzY2hlbWE6IGtleSA9PT0gJ2Rlc2NyaXB0aW9uJyA/ICdtYXJrZG93bicgOiAndGV4dCcsXG5cdFx0XHRcdGxhYmVsOiBrZXksXG5cdFx0XHRcdHBsYWNlaG9sZGVyOiBrZXksXG5cdFx0XHRcdHJlcXVpcmVkOiBmYWxzZSxcblx0XHRcdFx0b3JkZXI6IGkgKyAxXG5cdFx0XHR9O1xuXHRcdH0pIDogW107XG5cdH1cblxuXHRuZ0FmdGVyVmlld0luaXQoKSB7XG5cdFx0aWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcblx0XHRcdHRoaXMucGFnZVJlc29sdmVyU2VydmljZS5ldmVudHMkLnBpcGUoXG5cdFx0XHRcdHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlKVxuXHRcdFx0KS5zdWJzY3JpYmUoKHJlc29sdmVyOiBQYWdlUmVzb2x2ZXIpID0+IHtcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ0VkaXRvckNvbXBvbmVudC5yZXNvbHZlcicsIHJlc29sdmVyKTtcblx0XHRcdFx0dGhpcy5wYWdlID0gcmVzb2x2ZXIgPyByZXNvbHZlci5wYWdlIDogbnVsbDtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmtleWRvd24nLCBbJyRldmVudCddKVxuXHRvbktleWRvd24oZTogS2V5Ym9hcmRFdmVudCkge1xuXHRcdGlmIChlLmtleSA9PT0gJ2UnICYmIGUuY3RybEtleSkge1xuXHRcdFx0dGhpcy5lZGl0aW5nID0gdGhpcy5jb25maWcuZW5hYmxlZCAmJiAhdGhpcy5lZGl0aW5nO1xuXHRcdFx0dGhpcy5lZGl0aW5nID0gIXRoaXMuZWRpdGluZztcblx0XHRcdC8vIGNvbnNvbGUubG9nKCdBcHBDb21wb25lbnQuZG9jdW1lbnQ6a2V5ZG93bicsIGUua2V5LCBlLmN0cmxLZXksIGUuYWx0S2V5LCBlLmNvZGUpO1xuXHRcdH1cblx0fVxuXG5cdG9uUmVzZXQoKSB7XG5cdFx0Ly8gY29uc29sZS5sb2coJ0VkaXRvckNvbXBvbmVudC5vblJlc2V0Jyk7XG5cdFx0T2JqZWN0LmtleXModGhpcy5ncm91cC5jb250cm9scykuZm9yRWFjaChrZXkgPT4ge1xuXHRcdFx0dGhpcy5ncm91cC5nZXQoa2V5KS5zZXRWYWx1ZSh0aGlzLl9wYWdlQ29weVtrZXldKTtcblx0XHR9KTtcblx0XHQvKlxuXHRcdGNvbnN0IGtleXMgPSB0aGlzLmNvbnRyb2xzLm1hcCh4ID0+IHgua2V5KTtcblx0XHRrZXlzLmZvckVhY2goayA9PiB7XG5cdFx0XHQvLyBjb25zb2xlLmxvZyhrLCB0aGlzLl9wYWdlW2tdLCB0aGlzLl9wYWdlQ29weVtrXSk7XG5cdFx0XHR0aGlzLl9wYWdlW2tdID0gdGhpcy5fcGFnZUNvcHlba107XG5cdFx0fSk7XG5cdFx0Ki9cblx0fVxuXG5cdG9uU3VibWl0KG1vZGVsKSB7XG5cdFx0Ly8gY29uc29sZS5sb2coJ0VkaXRvckNvbXBvbmVudC5vblN1Ym1pdCcsIG1vZGVsKTtcblx0XHR0aGlzLm9uQXNzaWduKG1vZGVsKTtcblx0XHQvLyBPYmplY3QuYXNzaWduKHRoaXMuX3BhZ2UsIG1vZGVsKTtcblx0fVxuXG5cdG9uQXNzaWduKG1vZGVsKSB7XG5cdFx0T2JqZWN0LmtleXModGhpcy5ncm91cC5jb250cm9scykuZm9yRWFjaChrZXkgPT4ge1xuXHRcdFx0c3dpdGNoIChrZXkpIHtcblx0XHRcdFx0Y2FzZSAnZGVzY3JpcHRpb24nOlxuXHRcdFx0XHRcdHRoaXMuX3BhZ2Vba2V5XSA9IHRoaXMubWFya2Rvd25TZXJ2aWNlLmNvbXBpbGUobW9kZWxba2V5XSk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0dGhpcy5fcGFnZVtrZXldID0gbW9kZWxba2V5XTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG59XG4iXX0=