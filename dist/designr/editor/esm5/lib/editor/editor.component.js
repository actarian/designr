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
var EditorComponent = /** @class */ (function (_super) {
    tslib_1.__extends(EditorComponent, _super);
    function EditorComponent(platformId, configService, markdownService, formService, pageResolverService) {
        var _this = _super.call(this) || this;
        _this.platformId = platformId;
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
            // this.editing = this.configService.options.editor && !this.editing;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2VkaXRvci8iLCJzb3VyY2VzIjpbImxpYi9lZGl0b3IvZWRpdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDakYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUFpQixTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFL0csT0FBTyxFQUFFLGFBQWEsRUFBbUMsbUJBQW1CLEVBQUUsV0FBVyxFQUFzQixtQkFBbUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxSixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQy9DLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQztJQXdCcUMsMkNBQW1CO0lBWXZELHlCQUM4QixVQUFrQixFQUN2QyxhQUE0QixFQUM1QixlQUFnQyxFQUNoQyxXQUF3QixFQUN4QixtQkFBd0M7UUFMakQsWUFPQyxpQkFBTyxTQUNQO1FBUDZCLGdCQUFVLEdBQVYsVUFBVSxDQUFRO1FBQ3ZDLG1CQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLHFCQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxpQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4Qix5QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBVGpELGFBQU8sR0FBWSxLQUFLLENBQUM7UUFDekIsVUFBSSxHQUFZLEtBQUssQ0FBQztRQUN0QixlQUFTLEdBQVksS0FBSyxDQUFDOztJQVUzQixDQUFDO0lBRUQsc0JBQUksaUNBQUk7Ozs7UUFBUjtZQUNDLE9BQU8s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QUV0QyxVQUFVLEVBQUU7d0JBQ1gsT0FBTyxDQUFDLFdBQVcsRUFBRTs0QkFDcEIsS0FBSyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUM7Z0NBQ25CLE9BQU8sRUFBRSxDQUFDO2dDQUNWLFNBQVMsRUFBRSxlQUFlOzZCQUMxQixDQUFDLENBQUM7NEJBQ0gsS0FBSyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUM7Z0NBQ3JCLE9BQU8sRUFBRSxHQUFHO2dDQUNaLFNBQVMsRUFBRSxrQkFBa0I7NkJBQzdCLENBQUMsQ0FBQzs0QkFDSCxVQUFVLENBQUMsZ0JBQWdCLEVBQUU7Z0NBQzVCLE9BQU8sQ0FBQyxPQUFPLENBQUM7NkJBQ2hCLENBQUM7NEJBQ0YsVUFBVSxDQUFDLGdCQUFnQixFQUFFO2dDQUM1QixPQUFPLENBQUMsT0FBTyxDQUFDOzZCQUNoQixDQUFDO3lCQUNGLENBQUM7cUJBQ0Y7b0JBQ0QsYUFBYSxFQUFFLGlCQUFpQixDQUFDLFFBQVE7O2lCQUN6Qzs7Ozs2Q0FjRSxNQUFNLFNBQUMsV0FBVztnQkF6Q1osYUFBYTtnQkFDYixlQUFlO2dCQURzRCxXQUFXO2dCQUFzQixtQkFBbUI7Ozs0QkF1R2hJLFlBQVksU0FBQyxrQkFBa0IsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7SUF5QzdDLHNCQUFDO0NBQUEsQUE1SUQsQ0F3QnFDLG1CQUFtQixHQW9IdkQ7U0FwSFksZUFBZTs7Ozs7O0lBRTNCLG9DQUF3Qjs7Ozs7SUFDeEIsZ0NBQW9COztJQUVwQixtQ0FBNkI7O0lBQzdCLGdDQUFpQjs7SUFFakIsa0NBQXlCOztJQUN6QiwrQkFBc0I7O0lBQ3RCLG9DQUEyQjs7Ozs7SUFHMUIscUNBQStDOzs7OztJQUMvQyx3Q0FBb0M7Ozs7O0lBQ3BDLDBDQUF3Qzs7Ozs7SUFDeEMsc0NBQWdDOzs7OztJQUNoQyw4Q0FBZ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhbmltYXRlLCBzdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIHRyaWdnZXIgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgSG9zdExpc3RlbmVyLCBJbmplY3QsIFBMQVRGT1JNX0lELCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQ29uZmlnU2VydmljZSwgQ29udHJvbEJhc2UsIENvbnRyb2xCYXNlT3B0aW9ucywgRGlzcG9zYWJsZUNvbXBvbmVudCwgRm9ybVNlcnZpY2UsIFBhZ2UsIFBhZ2VSZXNvbHZlciwgUGFnZVJlc29sdmVyU2VydmljZSB9IGZyb20gJ0BkZXNpZ25yL2NvcmUnO1xuaW1wb3J0IHsgTWFya2Rvd25TZXJ2aWNlIH0gZnJvbSAnbmd4LW1hcmtkb3duJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnY29yZS1lZGl0b3InLFxuXHR0ZW1wbGF0ZVVybDogJy4vZWRpdG9yLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbJy4vZWRpdG9yLmNvbXBvbmVudC5zY3NzJ10sXG5cdGFuaW1hdGlvbnM6IFtcblx0XHR0cmlnZ2VyKCdvcGVuQ2xvc2UnLCBbXG5cdFx0XHRzdGF0ZSgnb3BlbicsIHN0eWxlKHtcblx0XHRcdFx0b3BhY2l0eTogMSxcblx0XHRcdFx0dHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwKScsXG5cdFx0XHR9KSksXG5cdFx0XHRzdGF0ZSgnY2xvc2VkJywgc3R5bGUoe1xuXHRcdFx0XHRvcGFjaXR5OiAwLjUsXG5cdFx0XHRcdHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMTAwJSknLFxuXHRcdFx0fSkpLFxuXHRcdFx0dHJhbnNpdGlvbignb3BlbiA9PiBjbG9zZWQnLCBbXG5cdFx0XHRcdGFuaW1hdGUoJzI1MG1zJylcblx0XHRcdF0pLFxuXHRcdFx0dHJhbnNpdGlvbignY2xvc2VkID0+IG9wZW4nLCBbXG5cdFx0XHRcdGFuaW1hdGUoJzE1MG1zJylcblx0XHRcdF0pLFxuXHRcdF0pLFxuXHRdLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5FbXVsYXRlZCxcbn0pXG5leHBvcnQgY2xhc3MgRWRpdG9yQ29tcG9uZW50IGV4dGVuZHMgRGlzcG9zYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuXG5cdHByaXZhdGUgX3BhZ2VDb3B5OiBQYWdlO1xuXHRwcml2YXRlIF9wYWdlOiBQYWdlO1xuXG5cdGNvbnRyb2xzOiBDb250cm9sQmFzZTxhbnk+W107XG5cdGdyb3VwOiBGb3JtR3JvdXA7XG5cblx0ZWRpdGluZzogYm9vbGVhbiA9IGZhbHNlO1xuXHRidXN5OiBib29sZWFuID0gZmFsc2U7XG5cdHN1Ym1pdHRlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogc3RyaW5nLFxuXHRcdHByaXZhdGUgY29uZmlnU2VydmljZTogQ29uZmlnU2VydmljZSxcblx0XHRwcml2YXRlIG1hcmtkb3duU2VydmljZTogTWFya2Rvd25TZXJ2aWNlLFxuXHRcdHByaXZhdGUgZm9ybVNlcnZpY2U6IEZvcm1TZXJ2aWNlLFxuXHRcdHByaXZhdGUgcGFnZVJlc29sdmVyU2VydmljZTogUGFnZVJlc29sdmVyU2VydmljZSxcblx0KSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGdldCBwYWdlKCk6IFBhZ2Uge1xuXHRcdHJldHVybiB0aGlzLl9wYWdlO1xuXHR9XG5cblx0c2V0IHBhZ2UocGFnZTogUGFnZSkge1xuXHRcdHRoaXMuX3BhZ2VDb3B5ID0gT2JqZWN0LmFzc2lnbih7fSwgcGFnZSk7XG5cdFx0dGhpcy5fcGFnZSA9IHBhZ2U7XG5cdFx0aWYgKHRoaXMuX3BhZ2UpIHtcblx0XHRcdHRoaXMuY29udHJvbHMgPSB0aGlzLmZvcm1TZXJ2aWNlLmdldENvbnRyb2xzRnJvbU9wdGlvbnModGhpcy5nZXRDb250cm9sc0J5UGFnZShwYWdlKSk7XG5cdFx0XHR0aGlzLmdyb3VwID0gdGhpcy5mb3JtU2VydmljZS5nZXRHcm91cEZyb21Db250cm9scyh0aGlzLmNvbnRyb2xzKTtcblx0XHRcdHRoaXMuZ3JvdXAudmFsdWVDaGFuZ2VzLnN1YnNjcmliZSh4ID0+IHtcblx0XHRcdFx0dGhpcy5vbkFzc2lnbih4KTsgLy8gT2JqZWN0LmFzc2lnbih0aGlzLl9wYWdlLCB4KTtcblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmNvbnRyb2xzID0gW107XG5cdFx0XHR0aGlzLmdyb3VwID0gbnVsbDtcblx0XHR9XG5cdH1cblxuXHRnZXQgY29tcG9uZW50TmFtZSgpOiBzdHJpbmcge1xuXHRcdGlmICh0aGlzLl9wYWdlKSB7XG5cdFx0XHRjb25zdCBjb21wb25lbnQgPSB0aGlzLmNvbmZpZ1NlcnZpY2Uub3B0aW9ucy5wYWdlc1t0aGlzLl9wYWdlLmNvbXBvbmVudF07XG5cdFx0XHRpZiAoY29tcG9uZW50KSB7XG5cdFx0XHRcdHJldHVybiBjb21wb25lbnQubmFtZTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRnZXRDb250cm9sc0J5UGFnZShwYWdlOiBQYWdlKTogQ29udHJvbEJhc2VPcHRpb25zPGFueT5bXSB7XG5cdFx0cmV0dXJuIHBhZ2UgPyBPYmplY3Qua2V5cyhwYWdlKS5maWx0ZXIoa2V5ID0+IHR5cGVvZiBwYWdlW2tleV0gIT09ICdvYmplY3QnKS5tYXAoKGtleTogc3RyaW5nLCBpOiBudW1iZXIpID0+IHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGtleToga2V5LFxuXHRcdFx0XHR2YWx1ZTogcGFnZVtrZXldLFxuXHRcdFx0XHRzY2hlbWE6IGtleSA9PT0gJ2Rlc2NyaXB0aW9uJyA/ICdtYXJrZG93bicgOiAndGV4dCcsXG5cdFx0XHRcdGxhYmVsOiBrZXksXG5cdFx0XHRcdHBsYWNlaG9sZGVyOiBrZXksXG5cdFx0XHRcdHJlcXVpcmVkOiBmYWxzZSxcblx0XHRcdFx0b3JkZXI6IGkgKyAxXG5cdFx0XHR9O1xuXHRcdH0pIDogW107XG5cdH1cblxuXHRuZ0FmdGVyVmlld0luaXQoKSB7XG5cdFx0aWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcblx0XHRcdHRoaXMucGFnZVJlc29sdmVyU2VydmljZS5ldmVudHMkLnBpcGUoXG5cdFx0XHRcdHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlKVxuXHRcdFx0KS5zdWJzY3JpYmUoKHJlc29sdmVyOiBQYWdlUmVzb2x2ZXIpID0+IHtcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ0VkaXRvckNvbXBvbmVudC5yZXNvbHZlcicsIHJlc29sdmVyKTtcblx0XHRcdFx0dGhpcy5wYWdlID0gcmVzb2x2ZXIgPyByZXNvbHZlci5wYWdlIDogbnVsbDtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmtleWRvd24nLCBbJyRldmVudCddKVxuXHRvbktleWRvd24oZTogS2V5Ym9hcmRFdmVudCkge1xuXHRcdGlmIChlLmtleSA9PT0gJ2UnICYmIGUuY3RybEtleSkge1xuXHRcdFx0Ly8gdGhpcy5lZGl0aW5nID0gdGhpcy5jb25maWdTZXJ2aWNlLm9wdGlvbnMuZWRpdG9yICYmICF0aGlzLmVkaXRpbmc7XG5cdFx0XHR0aGlzLmVkaXRpbmcgPSAhdGhpcy5lZGl0aW5nO1xuXHRcdFx0Ly8gY29uc29sZS5sb2coJ0FwcENvbXBvbmVudC5kb2N1bWVudDprZXlkb3duJywgZS5rZXksIGUuY3RybEtleSwgZS5hbHRLZXksIGUuY29kZSk7XG5cdFx0fVxuXHR9XG5cblx0b25SZXNldCgpIHtcblx0XHQvLyBjb25zb2xlLmxvZygnRWRpdG9yQ29tcG9uZW50Lm9uUmVzZXQnKTtcblx0XHRPYmplY3Qua2V5cyh0aGlzLmdyb3VwLmNvbnRyb2xzKS5mb3JFYWNoKGtleSA9PiB7XG5cdFx0XHR0aGlzLmdyb3VwLmdldChrZXkpLnNldFZhbHVlKHRoaXMuX3BhZ2VDb3B5W2tleV0pO1xuXHRcdH0pO1xuXHRcdC8qXG5cdFx0Y29uc3Qga2V5cyA9IHRoaXMuY29udHJvbHMubWFwKHggPT4geC5rZXkpO1xuXHRcdGtleXMuZm9yRWFjaChrID0+IHtcblx0XHRcdC8vIGNvbnNvbGUubG9nKGssIHRoaXMuX3BhZ2Vba10sIHRoaXMuX3BhZ2VDb3B5W2tdKTtcblx0XHRcdHRoaXMuX3BhZ2Vba10gPSB0aGlzLl9wYWdlQ29weVtrXTtcblx0XHR9KTtcblx0XHQqL1xuXHR9XG5cblx0b25TdWJtaXQobW9kZWwpIHtcblx0XHQvLyBjb25zb2xlLmxvZygnRWRpdG9yQ29tcG9uZW50Lm9uU3VibWl0JywgbW9kZWwpO1xuXHRcdHRoaXMub25Bc3NpZ24obW9kZWwpO1xuXHRcdC8vIE9iamVjdC5hc3NpZ24odGhpcy5fcGFnZSwgbW9kZWwpO1xuXHR9XG5cblx0b25Bc3NpZ24obW9kZWwpIHtcblx0XHRPYmplY3Qua2V5cyh0aGlzLmdyb3VwLmNvbnRyb2xzKS5mb3JFYWNoKGtleSA9PiB7XG5cdFx0XHRzd2l0Y2ggKGtleSkge1xuXHRcdFx0XHRjYXNlICdkZXNjcmlwdGlvbic6XG5cdFx0XHRcdFx0dGhpcy5fcGFnZVtrZXldID0gdGhpcy5tYXJrZG93blNlcnZpY2UuY29tcGlsZShtb2RlbFtrZXldKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHR0aGlzLl9wYWdlW2tleV0gPSBtb2RlbFtrZXldO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cbn1cbiJdfQ==