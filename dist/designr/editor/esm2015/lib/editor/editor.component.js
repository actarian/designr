/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { animate, state, style, transition, trigger } from '@angular/animations';
import { isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, PLATFORM_ID, ViewEncapsulation } from '@angular/core';
import { ConfigService, DisposableComponent, FormService, PageResolverService } from '@designr/core';
import { MarkdownService } from 'ngx-markdown';
import { takeUntil } from 'rxjs/operators';
export class EditorComponent extends DisposableComponent {
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
        this.editing = false;
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
            this.controls = this.formService.getControlsFromOptions(this.getControlsByPage(page));
            this.group = this.formService.getGroupFromControls(this.controls);
            this.group.valueChanges.subscribe(x => {
                this.onAssign(x); // Object.assign(this._page, x);
            });
        }
        else {
            this.controls = [];
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
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (isPlatformBrowser(this.platformId)) {
            this.pageResolverService.events$.pipe(takeUntil(this.unsubscribe)).subscribe((resolver) => {
                // console.log('EditorComponent.resolver', resolver);
                this.page = resolver ? resolver.page : null;
            });
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onKeydown(e) {
        if (e.key === 'e' && e.ctrlKey) {
            // this.editing = this.configService.options.editor && !this.editing;
            this.editing = !this.editing;
            // console.log('AppComponent.document:keydown', e.key, e.ctrlKey, e.altKey, e.code);
        }
    }
    /**
     * @return {?}
     */
    onReset() {
        // console.log('EditorComponent.onReset');
        Object.keys(this.group.controls).forEach(key => {
            this.group.get(key).setValue(this._pageCopy[key]);
        });
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
        // console.log('EditorComponent.onSubmit', model);
        this.onAssign(model);
        // Object.assign(this._page, model);
    }
    /**
     * @param {?} model
     * @return {?}
     */
    onAssign(model) {
        Object.keys(this.group.controls).forEach(key => {
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
EditorComponent.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: ConfigService },
    { type: MarkdownService },
    { type: FormService },
    { type: PageResolverService }
];
EditorComponent.propDecorators = {
    onKeydown: [{ type: HostListener, args: ['document:keydown', ['$event'],] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2VkaXRvci8iLCJzb3VyY2VzIjpbImxpYi9lZGl0b3IvZWRpdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQWlCLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvRyxPQUFPLEVBQUUsYUFBYSxFQUFtQyxtQkFBbUIsRUFBRSxXQUFXLEVBQXNCLG1CQUFtQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFKLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDL0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBMEIzQyxNQUFNLE9BQU8sZUFBZ0IsU0FBUSxtQkFBbUI7Ozs7Ozs7O0lBWXZELFlBQzhCLFVBQWtCLEVBQ3ZDLGFBQTRCLEVBQzVCLGVBQWdDLEVBQ2hDLFdBQXdCLEVBQ3hCLG1CQUF3QztRQUVoRCxLQUFLLEVBQUUsQ0FBQztRQU5xQixlQUFVLEdBQVYsVUFBVSxDQUFRO1FBQ3ZDLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4Qix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBVGpELFlBQU8sR0FBWSxLQUFLLENBQUM7UUFDekIsU0FBSSxHQUFZLEtBQUssQ0FBQztRQUN0QixjQUFTLEdBQVksS0FBSyxDQUFDO0lBVTNCLENBQUM7Ozs7SUFFRCxJQUFJLElBQUk7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T0FBTyxFQUFFLENBQUM7NEJBQ1YsU0FBUyxFQUFFLGVBQWU7eUJBQzFCLENBQUMsQ0FBQzt3QkFDSCxLQUFLLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQzs0QkFDckIsT0FBTyxFQUFFLEdBQUc7NEJBQ1osU0FBUyxFQUFFLGtCQUFrQjt5QkFDN0IsQ0FBQyxDQUFDO3dCQUNILFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRTs0QkFDNUIsT0FBTyxDQUFDLE9BQU8sQ0FBQzt5QkFDaEIsQ0FBQzt3QkFDRixVQUFVLENBQUMsZ0JBQWdCLEVBQUU7NEJBQzVCLE9BQU8sQ0FBQyxPQUFPLENBQUM7eUJBQ2hCLENBQUM7cUJBQ0YsQ0FBQztpQkFDRjtnQkFDRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsUUFBUTs7YUFDekM7Ozs7eUNBY0UsTUFBTSxTQUFDLFdBQVc7WUF6Q1osYUFBYTtZQUNiLGVBQWU7WUFEc0QsV0FBVztZQUFzQixtQkFBbUI7Ozt3QkF1R2hJLFlBQVksU0FBQyxrQkFBa0IsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7Ozs7OztJQXpFNUMsb0NBQXdCOzs7OztJQUN4QixnQ0FBb0I7O0lBRXBCLG1DQUE2Qjs7SUFDN0IsZ0NBQWlCOztJQUVqQixrQ0FBeUI7O0lBQ3pCLCtCQUFzQjs7SUFDdEIsb0NBQTJCOzs7OztJQUcxQixxQ0FBK0M7Ozs7O0lBQy9DLHdDQUFvQzs7Ozs7SUFDcEMsMENBQXdDOzs7OztJQUN4QyxzQ0FBZ0M7Ozs7O0lBQ2hDLDhDQUFnRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFuaW1hdGUsIHN0YXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgdHJpZ2dlciB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBIb3N0TGlzdGVuZXIsIEluamVjdCwgUExBVEZPUk1fSUQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDb25maWdTZXJ2aWNlLCBDb250cm9sQmFzZSwgQ29udHJvbEJhc2VPcHRpb25zLCBEaXNwb3NhYmxlQ29tcG9uZW50LCBGb3JtU2VydmljZSwgUGFnZSwgUGFnZVJlc29sdmVyLCBQYWdlUmVzb2x2ZXJTZXJ2aWNlIH0gZnJvbSAnQGRlc2lnbnIvY29yZSc7XG5pbXBvcnQgeyBNYXJrZG93blNlcnZpY2UgfSBmcm9tICduZ3gtbWFya2Rvd24nO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdjb3JlLWVkaXRvcicsXG5cdHRlbXBsYXRlVXJsOiAnLi9lZGl0b3IuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsnLi9lZGl0b3IuY29tcG9uZW50LnNjc3MnXSxcblx0YW5pbWF0aW9uczogW1xuXHRcdHRyaWdnZXIoJ29wZW5DbG9zZScsIFtcblx0XHRcdHN0YXRlKCdvcGVuJywgc3R5bGUoe1xuXHRcdFx0XHRvcGFjaXR5OiAxLFxuXHRcdFx0XHR0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDApJyxcblx0XHRcdH0pKSxcblx0XHRcdHN0YXRlKCdjbG9zZWQnLCBzdHlsZSh7XG5cdFx0XHRcdG9wYWNpdHk6IDAuNSxcblx0XHRcdFx0dHJhbnNmb3JtOiAndHJhbnNsYXRlWCgxMDAlKScsXG5cdFx0XHR9KSksXG5cdFx0XHR0cmFuc2l0aW9uKCdvcGVuID0+IGNsb3NlZCcsIFtcblx0XHRcdFx0YW5pbWF0ZSgnMjUwbXMnKVxuXHRcdFx0XSksXG5cdFx0XHR0cmFuc2l0aW9uKCdjbG9zZWQgPT4gb3BlbicsIFtcblx0XHRcdFx0YW5pbWF0ZSgnMTUwbXMnKVxuXHRcdFx0XSksXG5cdFx0XSksXG5cdF0sXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLkVtdWxhdGVkLFxufSlcbmV4cG9ydCBjbGFzcyBFZGl0b3JDb21wb25lbnQgZXh0ZW5kcyBEaXNwb3NhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG5cblx0cHJpdmF0ZSBfcGFnZUNvcHk6IFBhZ2U7XG5cdHByaXZhdGUgX3BhZ2U6IFBhZ2U7XG5cblx0Y29udHJvbHM6IENvbnRyb2xCYXNlPGFueT5bXTtcblx0Z3JvdXA6IEZvcm1Hcm91cDtcblxuXHRlZGl0aW5nOiBib29sZWFuID0gZmFsc2U7XG5cdGJ1c3k6IGJvb2xlYW4gPSBmYWxzZTtcblx0c3VibWl0dGVkOiBib29sZWFuID0gZmFsc2U7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0QEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBzdHJpbmcsXG5cdFx0cHJpdmF0ZSBjb25maWdTZXJ2aWNlOiBDb25maWdTZXJ2aWNlLFxuXHRcdHByaXZhdGUgbWFya2Rvd25TZXJ2aWNlOiBNYXJrZG93blNlcnZpY2UsXG5cdFx0cHJpdmF0ZSBmb3JtU2VydmljZTogRm9ybVNlcnZpY2UsXG5cdFx0cHJpdmF0ZSBwYWdlUmVzb2x2ZXJTZXJ2aWNlOiBQYWdlUmVzb2x2ZXJTZXJ2aWNlLFxuXHQpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0Z2V0IHBhZ2UoKTogUGFnZSB7XG5cdFx0cmV0dXJuIHRoaXMuX3BhZ2U7XG5cdH1cblxuXHRzZXQgcGFnZShwYWdlOiBQYWdlKSB7XG5cdFx0dGhpcy5fcGFnZUNvcHkgPSBPYmplY3QuYXNzaWduKHt9LCBwYWdlKTtcblx0XHR0aGlzLl9wYWdlID0gcGFnZTtcblx0XHRpZiAodGhpcy5fcGFnZSkge1xuXHRcdFx0dGhpcy5jb250cm9scyA9IHRoaXMuZm9ybVNlcnZpY2UuZ2V0Q29udHJvbHNGcm9tT3B0aW9ucyh0aGlzLmdldENvbnRyb2xzQnlQYWdlKHBhZ2UpKTtcblx0XHRcdHRoaXMuZ3JvdXAgPSB0aGlzLmZvcm1TZXJ2aWNlLmdldEdyb3VwRnJvbUNvbnRyb2xzKHRoaXMuY29udHJvbHMpO1xuXHRcdFx0dGhpcy5ncm91cC52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKHggPT4ge1xuXHRcdFx0XHR0aGlzLm9uQXNzaWduKHgpOyAvLyBPYmplY3QuYXNzaWduKHRoaXMuX3BhZ2UsIHgpO1xuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuY29udHJvbHMgPSBbXTtcblx0XHRcdHRoaXMuZ3JvdXAgPSBudWxsO1xuXHRcdH1cblx0fVxuXG5cdGdldCBjb21wb25lbnROYW1lKCk6IHN0cmluZyB7XG5cdFx0aWYgKHRoaXMuX3BhZ2UpIHtcblx0XHRcdGNvbnN0IGNvbXBvbmVudCA9IHRoaXMuY29uZmlnU2VydmljZS5vcHRpb25zLnBhZ2VzW3RoaXMuX3BhZ2UuY29tcG9uZW50XTtcblx0XHRcdGlmIChjb21wb25lbnQpIHtcblx0XHRcdFx0cmV0dXJuIGNvbXBvbmVudC5uYW1lO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGdldENvbnRyb2xzQnlQYWdlKHBhZ2U6IFBhZ2UpOiBDb250cm9sQmFzZU9wdGlvbnM8YW55PltdIHtcblx0XHRyZXR1cm4gcGFnZSA/IE9iamVjdC5rZXlzKHBhZ2UpLmZpbHRlcihrZXkgPT4gdHlwZW9mIHBhZ2Vba2V5XSAhPT0gJ29iamVjdCcpLm1hcCgoa2V5OiBzdHJpbmcsIGk6IG51bWJlcikgPT4ge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0a2V5OiBrZXksXG5cdFx0XHRcdHZhbHVlOiBwYWdlW2tleV0sXG5cdFx0XHRcdHNjaGVtYToga2V5ID09PSAnZGVzY3JpcHRpb24nID8gJ21hcmtkb3duJyA6ICd0ZXh0Jyxcblx0XHRcdFx0bGFiZWw6IGtleSxcblx0XHRcdFx0cGxhY2Vob2xkZXI6IGtleSxcblx0XHRcdFx0cmVxdWlyZWQ6IGZhbHNlLFxuXHRcdFx0XHRvcmRlcjogaSArIDFcblx0XHRcdH07XG5cdFx0fSkgOiBbXTtcblx0fVxuXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblx0XHRpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuXHRcdFx0dGhpcy5wYWdlUmVzb2x2ZXJTZXJ2aWNlLmV2ZW50cyQucGlwZShcblx0XHRcdFx0dGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUpXG5cdFx0XHQpLnN1YnNjcmliZSgocmVzb2x2ZXI6IFBhZ2VSZXNvbHZlcikgPT4ge1xuXHRcdFx0XHQvLyBjb25zb2xlLmxvZygnRWRpdG9yQ29tcG9uZW50LnJlc29sdmVyJywgcmVzb2x2ZXIpO1xuXHRcdFx0XHR0aGlzLnBhZ2UgPSByZXNvbHZlciA/IHJlc29sdmVyLnBhZ2UgOiBudWxsO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0QEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6a2V5ZG93bicsIFsnJGV2ZW50J10pXG5cdG9uS2V5ZG93bihlOiBLZXlib2FyZEV2ZW50KSB7XG5cdFx0aWYgKGUua2V5ID09PSAnZScgJiYgZS5jdHJsS2V5KSB7XG5cdFx0XHQvLyB0aGlzLmVkaXRpbmcgPSB0aGlzLmNvbmZpZ1NlcnZpY2Uub3B0aW9ucy5lZGl0b3IgJiYgIXRoaXMuZWRpdGluZztcblx0XHRcdHRoaXMuZWRpdGluZyA9ICF0aGlzLmVkaXRpbmc7XG5cdFx0XHQvLyBjb25zb2xlLmxvZygnQXBwQ29tcG9uZW50LmRvY3VtZW50OmtleWRvd24nLCBlLmtleSwgZS5jdHJsS2V5LCBlLmFsdEtleSwgZS5jb2RlKTtcblx0XHR9XG5cdH1cblxuXHRvblJlc2V0KCkge1xuXHRcdC8vIGNvbnNvbGUubG9nKCdFZGl0b3JDb21wb25lbnQub25SZXNldCcpO1xuXHRcdE9iamVjdC5rZXlzKHRoaXMuZ3JvdXAuY29udHJvbHMpLmZvckVhY2goa2V5ID0+IHtcblx0XHRcdHRoaXMuZ3JvdXAuZ2V0KGtleSkuc2V0VmFsdWUodGhpcy5fcGFnZUNvcHlba2V5XSk7XG5cdFx0fSk7XG5cdFx0Lypcblx0XHRjb25zdCBrZXlzID0gdGhpcy5jb250cm9scy5tYXAoeCA9PiB4LmtleSk7XG5cdFx0a2V5cy5mb3JFYWNoKGsgPT4ge1xuXHRcdFx0Ly8gY29uc29sZS5sb2coaywgdGhpcy5fcGFnZVtrXSwgdGhpcy5fcGFnZUNvcHlba10pO1xuXHRcdFx0dGhpcy5fcGFnZVtrXSA9IHRoaXMuX3BhZ2VDb3B5W2tdO1xuXHRcdH0pO1xuXHRcdCovXG5cdH1cblxuXHRvblN1Ym1pdChtb2RlbCkge1xuXHRcdC8vIGNvbnNvbGUubG9nKCdFZGl0b3JDb21wb25lbnQub25TdWJtaXQnLCBtb2RlbCk7XG5cdFx0dGhpcy5vbkFzc2lnbihtb2RlbCk7XG5cdFx0Ly8gT2JqZWN0LmFzc2lnbih0aGlzLl9wYWdlLCBtb2RlbCk7XG5cdH1cblxuXHRvbkFzc2lnbihtb2RlbCkge1xuXHRcdE9iamVjdC5rZXlzKHRoaXMuZ3JvdXAuY29udHJvbHMpLmZvckVhY2goa2V5ID0+IHtcblx0XHRcdHN3aXRjaCAoa2V5KSB7XG5cdFx0XHRcdGNhc2UgJ2Rlc2NyaXB0aW9uJzpcblx0XHRcdFx0XHR0aGlzLl9wYWdlW2tleV0gPSB0aGlzLm1hcmtkb3duU2VydmljZS5jb21waWxlKG1vZGVsW2tleV0pO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdHRoaXMuX3BhZ2Vba2V5XSA9IG1vZGVsW2tleV07XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxufVxuIl19