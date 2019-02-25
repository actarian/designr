/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID, ViewEncapsulation } from '@angular/core';
import { FormService } from '@designr/control';
import { DisposableComponent } from '@designr/core';
import { PageResolverService, PageService } from '@designr/page';
import { MarkdownService } from 'ngx-markdown';
import { takeUntil } from 'rxjs/operators';
var EditorRootComponent = /** @class */ (function (_super) {
    tslib_1.__extends(EditorRootComponent, _super);
    function EditorRootComponent(platformId, pageService, markdownService, formService, pageResolverService) {
        var _this = _super.call(this) || this;
        _this.platformId = platformId;
        _this.pageService = pageService;
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
    Object.defineProperty(EditorRootComponent.prototype, "componentName", {
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
    EditorRootComponent.prototype.getControlsByPage = /**
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
    EditorRootComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (isPlatformBrowser(this.platformId)) {
            this.pageResolverService.events$.pipe(takeUntil(this.unsubscribe)).subscribe(function (resolver) {
                // console.log('EditorRootComponent.resolver', resolver);
                _this.page = resolver ? resolver.page : null;
            });
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
    EditorRootComponent.decorators = [
        { type: Component, args: [{
                    selector: 'editor-root-component',
                    template: "<ng-container *ngIf=\"page\">\n\t<form class=\"form\" name=\"group\" [formGroup]=\"group\" (ngSubmit)=\"group.valid && onSubmit(group.value)\" #form=\"ngForm\" role=\"form\" novalidate autocomplete=\"off\">\n\t\t<div class=\"info\">\n\t\t\t<span class=\"id\">{{page.id}}</span>\n\t\t\t<span class=\"status\" [ngClass]=\"{ active: page.active }\">{{page.active ? 'active' : 'inactive'}}</span>\n\t\t\t<span class=\"component\">{{componentName}}</span>\n\t\t</div>\n\t\t<hr>\n\t\t<h2 class=\"h1\" [innerHTML]=\"page.title\"></h2>\n\t\t<!--\n\t\t\t\t<p [innerHTML]=\"page.description\"></p>\n\t\t\t\t-->\n\t\t<hr>\n\t\t<!--\n\t\t\t\t<div class=\"fieldset\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label>Label</label>\n\t\t\t\t\t\t<input placeholder=\"placeholder\" type=\"text\" class=\"form-control\" required [(ngModel)]=\"model.title\" name=\"title\" #title=\"ngModel\" autocomplete=\"title\">\n\t\t\t\t\t\t<div *ngIf=\"title.invalid && (form.submitted || title.dirty || title.touched)\" class=\"alert alert--danger\">\n\t\t\t\t\t\t\t<div *ngIf=\"title.errors.required\">{{ 'errors.required' | translate }}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t-->\n\t\t<div *ngFor=\"let control of controls\">\n\t\t\t<core-control [control]=\"control\" [form]=\"group\"></core-control>\n\t\t</div>\n\t\t<!-- <control-editable formControlName=\"email\"></control-editable> -->\n\t\t<div class=\"action-bar\">\n\t\t\t<button type=\"text\" class=\"btn btn--secondary\" [disabled]=\"submitted || !group.valid\" (click)=\"onReset()\" title=\"Annulla\"><span>Annulla</span></button>\n\t\t\t<button type=\"submit\" class=\"btn btn--primary\" [disabled]=\"submitted || !group.valid\" [ngClass]=\"{ 'btn--busy': busy }\" title=\"Salva\"><span>Salva</span></button>\n\t\t</div>\n\t</form>\n</ng-container>\n",
                    encapsulation: ViewEncapsulation.Emulated,
                    styles: [":host{font-family:Arial,Helvetica,sans-serif;font-size:16px;line-height:1.5;background:#fafafa;color:#55555a}:host .h1{color:#55555a}:host form{margin:0}:host label{display:block;width:100%;color:#55555a;font-weight:700;font-size:12px}@media (max-width:1024px){:host{display:none}}.id{display:inline-block;padding:4px 6px;background:#0875c2;color:#fff;border-radius:3px;font-size:12px;line-height:1;margin-right:4px}.status{display:inline-block;padding:4px 6px;background:#fff;color:#000;border-radius:3px;font-size:12px;line-height:1;margin-right:4px}.status.active{background:green;color:#fff}.component{display:inline-block;font-size:14px;font-style:italic}::-webkit-scrollbar{width:0}::-webkit-scrollbar-track{background:0 0}::-webkit-scrollbar-thumb{background:0 0}::-webkit-scrollbar-thumb:hover{background:0 0}"]
                }] }
    ];
    /** @nocollapse */
    EditorRootComponent.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: PageService },
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
    EditorRootComponent.prototype.controls;
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
    EditorRootComponent.prototype.pageService;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLXJvb3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvZWRpdG9yLyIsInNvdXJjZXMiOlsibGliL2VkaXRvci1sYXp5L2VkaXRvci1yb290LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFBaUIsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakcsT0FBTyxFQUFtQyxXQUFXLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNoRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFzQixtQkFBbUIsRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUMvQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0M7SUFNeUMsK0NBQW1CO0lBVzNELDZCQUM4QixVQUFrQixFQUN2QyxXQUF3QixFQUN4QixlQUFnQyxFQUNoQyxXQUF3QixFQUN4QixtQkFBd0M7UUFMakQsWUFPQyxpQkFBTyxTQUNQO1FBUDZCLGdCQUFVLEdBQVYsVUFBVSxDQUFRO1FBQ3ZDLGlCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLHFCQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxpQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4Qix5QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBUmpELFVBQUksR0FBWSxLQUFLLENBQUM7UUFDdEIsZUFBUyxHQUFZLEtBQUssQ0FBQzs7SUFVM0IsQ0FBQztJQUVELHNCQUFJLHFDQUFJOzs7O1FBQVI7WUFDQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDbkIsQ0FBQzs7Ozs7UUFFRCxV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QixvQ0FBaUI7O0lBRWpCLG1DQUFzQjs7SUFDdEIsd0NBQTJCOzs7OztJQUcxQix5Q0FBK0M7Ozs7O0lBQy9DLDBDQUFnQzs7Ozs7SUFDaEMsOENBQXdDOzs7OztJQUN4QywwQ0FBZ0M7Ozs7O0lBQ2hDLGtEQUFnRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgSW5qZWN0LCBQTEFURk9STV9JRCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENvbnRyb2xCYXNlLCBDb250cm9sQmFzZU9wdGlvbnMsIEZvcm1TZXJ2aWNlIH0gZnJvbSAnQGRlc2lnbnIvY29udHJvbCc7XG5pbXBvcnQgeyBEaXNwb3NhYmxlQ29tcG9uZW50IH0gZnJvbSAnQGRlc2lnbnIvY29yZSc7XG5pbXBvcnQgeyBQYWdlLCBQYWdlUmVzb2x2ZXIsIFBhZ2VSZXNvbHZlclNlcnZpY2UsIFBhZ2VTZXJ2aWNlIH0gZnJvbSAnQGRlc2lnbnIvcGFnZSc7XG5pbXBvcnQgeyBNYXJrZG93blNlcnZpY2UgfSBmcm9tICduZ3gtbWFya2Rvd24nO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdlZGl0b3Itcm9vdC1jb21wb25lbnQnLFxuXHR0ZW1wbGF0ZVVybDogJy4vZWRpdG9yLXJvb3QuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsnLi9lZGl0b3Itcm9vdC5jb21wb25lbnQuc2NzcyddLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5FbXVsYXRlZCxcbn0pXG5leHBvcnQgY2xhc3MgRWRpdG9yUm9vdENvbXBvbmVudCBleHRlbmRzIERpc3Bvc2FibGVDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcblxuXHRwcml2YXRlIF9wYWdlQ29weTogUGFnZTtcblx0cHJpdmF0ZSBfcGFnZTogUGFnZTtcblxuXHRjb250cm9sczogQ29udHJvbEJhc2U8YW55PltdO1xuXHRncm91cDogRm9ybUdyb3VwO1xuXG5cdGJ1c3k6IGJvb2xlYW4gPSBmYWxzZTtcblx0c3VibWl0dGVkOiBib29sZWFuID0gZmFsc2U7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0QEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBzdHJpbmcsXG5cdFx0cHJpdmF0ZSBwYWdlU2VydmljZTogUGFnZVNlcnZpY2UsXG5cdFx0cHJpdmF0ZSBtYXJrZG93blNlcnZpY2U6IE1hcmtkb3duU2VydmljZSxcblx0XHRwcml2YXRlIGZvcm1TZXJ2aWNlOiBGb3JtU2VydmljZSxcblx0XHRwcml2YXRlIHBhZ2VSZXNvbHZlclNlcnZpY2U6IFBhZ2VSZXNvbHZlclNlcnZpY2UsXG5cdCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRnZXQgcGFnZSgpOiBQYWdlIHtcblx0XHRyZXR1cm4gdGhpcy5fcGFnZTtcblx0fVxuXG5cdHNldCBwYWdlKHBhZ2U6IFBhZ2UpIHtcblx0XHR0aGlzLl9wYWdlQ29weSA9IE9iamVjdC5hc3NpZ24oe30sIHBhZ2UpO1xuXHRcdHRoaXMuX3BhZ2UgPSBwYWdlO1xuXHRcdGlmICh0aGlzLl9wYWdlKSB7XG5cdFx0XHR0aGlzLmNvbnRyb2xzID0gdGhpcy5mb3JtU2VydmljZS5nZXRDb250cm9sc0Zyb21PcHRpb25zKHRoaXMuZ2V0Q29udHJvbHNCeVBhZ2UocGFnZSkpO1xuXHRcdFx0dGhpcy5ncm91cCA9IHRoaXMuZm9ybVNlcnZpY2UuZ2V0R3JvdXBGcm9tQ29udHJvbHModGhpcy5jb250cm9scyk7XG5cdFx0XHR0aGlzLmdyb3VwLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoeCA9PiB7XG5cdFx0XHRcdHRoaXMub25Bc3NpZ24oeCk7IC8vIE9iamVjdC5hc3NpZ24odGhpcy5fcGFnZSwgeCk7XG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5jb250cm9scyA9IFtdO1xuXHRcdFx0dGhpcy5ncm91cCA9IG51bGw7XG5cdFx0fVxuXHR9XG5cblx0Z2V0IGNvbXBvbmVudE5hbWUoKTogc3RyaW5nIHtcblx0XHRpZiAodGhpcy5fcGFnZSkge1xuXHRcdFx0Y29uc3QgY29tcG9uZW50ID0gdGhpcy5wYWdlU2VydmljZS5vcHRpb25zLnBhZ2VzW3RoaXMuX3BhZ2UuY29tcG9uZW50XTtcblx0XHRcdGlmIChjb21wb25lbnQpIHtcblx0XHRcdFx0cmV0dXJuIGNvbXBvbmVudC5uYW1lO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGdldENvbnRyb2xzQnlQYWdlKHBhZ2U6IFBhZ2UpOiBDb250cm9sQmFzZU9wdGlvbnM8YW55PltdIHtcblx0XHRyZXR1cm4gcGFnZSA/IE9iamVjdC5rZXlzKHBhZ2UpLmZpbHRlcihrZXkgPT4gdHlwZW9mIHBhZ2Vba2V5XSAhPT0gJ29iamVjdCcpLm1hcCgoa2V5OiBzdHJpbmcsIGk6IG51bWJlcikgPT4ge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0a2V5OiBrZXksXG5cdFx0XHRcdHZhbHVlOiBwYWdlW2tleV0sXG5cdFx0XHRcdHNjaGVtYToga2V5ID09PSAnZGVzY3JpcHRpb24nID8gJ21hcmtkb3duJyA6ICd0ZXh0Jyxcblx0XHRcdFx0bGFiZWw6IGtleSxcblx0XHRcdFx0cGxhY2Vob2xkZXI6IGtleSxcblx0XHRcdFx0cmVxdWlyZWQ6IGZhbHNlLFxuXHRcdFx0XHRvcmRlcjogaSArIDFcblx0XHRcdH07XG5cdFx0fSkgOiBbXTtcblx0fVxuXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblx0XHRpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuXHRcdFx0dGhpcy5wYWdlUmVzb2x2ZXJTZXJ2aWNlLmV2ZW50cyQucGlwZShcblx0XHRcdFx0dGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUpXG5cdFx0XHQpLnN1YnNjcmliZSgocmVzb2x2ZXI6IFBhZ2VSZXNvbHZlcikgPT4ge1xuXHRcdFx0XHQvLyBjb25zb2xlLmxvZygnRWRpdG9yUm9vdENvbXBvbmVudC5yZXNvbHZlcicsIHJlc29sdmVyKTtcblx0XHRcdFx0dGhpcy5wYWdlID0gcmVzb2x2ZXIgPyByZXNvbHZlci5wYWdlIDogbnVsbDtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdG9uUmVzZXQoKSB7XG5cdFx0Ly8gY29uc29sZS5sb2coJ0VkaXRvclJvb3RDb21wb25lbnQub25SZXNldCcpO1xuXHRcdE9iamVjdC5rZXlzKHRoaXMuZ3JvdXAuY29udHJvbHMpLmZvckVhY2goa2V5ID0+IHtcblx0XHRcdHRoaXMuZ3JvdXAuZ2V0KGtleSkuc2V0VmFsdWUodGhpcy5fcGFnZUNvcHlba2V5XSk7XG5cdFx0fSk7XG5cdFx0Lypcblx0XHRjb25zdCBrZXlzID0gdGhpcy5jb250cm9scy5tYXAoeCA9PiB4LmtleSk7XG5cdFx0a2V5cy5mb3JFYWNoKGsgPT4ge1xuXHRcdFx0Ly8gY29uc29sZS5sb2coaywgdGhpcy5fcGFnZVtrXSwgdGhpcy5fcGFnZUNvcHlba10pO1xuXHRcdFx0dGhpcy5fcGFnZVtrXSA9IHRoaXMuX3BhZ2VDb3B5W2tdO1xuXHRcdH0pO1xuXHRcdCovXG5cdH1cblxuXHRvblN1Ym1pdChtb2RlbCkge1xuXHRcdC8vIGNvbnNvbGUubG9nKCdFZGl0b3JSb290Q29tcG9uZW50Lm9uU3VibWl0JywgbW9kZWwpO1xuXHRcdHRoaXMub25Bc3NpZ24obW9kZWwpO1xuXHRcdC8vIE9iamVjdC5hc3NpZ24odGhpcy5fcGFnZSwgbW9kZWwpO1xuXHR9XG5cblx0b25Bc3NpZ24obW9kZWwpIHtcblx0XHRPYmplY3Qua2V5cyh0aGlzLmdyb3VwLmNvbnRyb2xzKS5mb3JFYWNoKGtleSA9PiB7XG5cdFx0XHRzd2l0Y2ggKGtleSkge1xuXHRcdFx0XHRjYXNlICdkZXNjcmlwdGlvbic6XG5cdFx0XHRcdFx0dGhpcy5fcGFnZVtrZXldID0gdGhpcy5tYXJrZG93blNlcnZpY2UuY29tcGlsZShtb2RlbFtrZXldKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHR0aGlzLl9wYWdlW2tleV0gPSBtb2RlbFtrZXldO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cbn1cbiJdfQ==