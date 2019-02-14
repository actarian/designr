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
import { EditorConfig, EDITOR_CONFIG } from '../config/editor.config';
export class EditorComponent extends DisposableComponent {
    /**
     * @param {?} platformId
     * @param {?} config
     * @param {?} configService
     * @param {?} markdownService
     * @param {?} formService
     * @param {?} pageResolverService
     */
    constructor(platformId, config, configService, markdownService, formService, pageResolverService) {
        super();
        this.platformId = platformId;
        this.config = config;
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
            this.editing = this.config.enabled && !this.editing;
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
    { type: EditorConfig, decorators: [{ type: Inject, args: [EDITOR_CONFIG,] }] },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2VkaXRvci8iLCJzb3VyY2VzIjpbImxpYi9lZGl0b3IvZWRpdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQWlCLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvRyxPQUFPLEVBQUUsYUFBYSxFQUFtQyxtQkFBbUIsRUFBRSxXQUFXLEVBQXNCLG1CQUFtQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFKLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDL0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUEwQnRFLE1BQU0sT0FBTyxlQUFnQixTQUFRLG1CQUFtQjs7Ozs7Ozs7O0lBWXZELFlBQzhCLFVBQWtCLEVBQ2hCLE1BQW9CLEVBQzNDLGFBQTRCLEVBQzVCLGVBQWdDLEVBQ2hDLFdBQXdCLEVBQ3hCLG1CQUF3QztRQUVoRCxLQUFLLEVBQUUsQ0FBQztRQVBxQixlQUFVLEdBQVYsVUFBVSxDQUFRO1FBQ2hCLFdBQU0sR0FBTixNQUFNLENBQWM7UUFDM0Msa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFWakQsWUFBTyxHQUFZ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dGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIHRyaWdnZXIgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgSG9zdExpc3RlbmVyLCBJbmplY3QsIFBMQVRGT1JNX0lELCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQ29uZmlnU2VydmljZSwgQ29udHJvbEJhc2UsIENvbnRyb2xCYXNlT3B0aW9ucywgRGlzcG9zYWJsZUNvbXBvbmVudCwgRm9ybVNlcnZpY2UsIFBhZ2UsIFBhZ2VSZXNvbHZlciwgUGFnZVJlc29sdmVyU2VydmljZSB9IGZyb20gJ0BkZXNpZ25yL2NvcmUnO1xuaW1wb3J0IHsgTWFya2Rvd25TZXJ2aWNlIH0gZnJvbSAnbmd4LW1hcmtkb3duJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEVkaXRvckNvbmZpZywgRURJVE9SX0NPTkZJRyB9IGZyb20gJy4uL2NvbmZpZy9lZGl0b3IuY29uZmlnJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnY29yZS1lZGl0b3InLFxuXHR0ZW1wbGF0ZVVybDogJy4vZWRpdG9yLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbJy4vZWRpdG9yLmNvbXBvbmVudC5zY3NzJ10sXG5cdGFuaW1hdGlvbnM6IFtcblx0XHR0cmlnZ2VyKCdvcGVuQ2xvc2UnLCBbXG5cdFx0XHRzdGF0ZSgnb3BlbicsIHN0eWxlKHtcblx0XHRcdFx0b3BhY2l0eTogMSxcblx0XHRcdFx0dHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwKScsXG5cdFx0XHR9KSksXG5cdFx0XHRzdGF0ZSgnY2xvc2VkJywgc3R5bGUoe1xuXHRcdFx0XHRvcGFjaXR5OiAwLjUsXG5cdFx0XHRcdHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMTAwJSknLFxuXHRcdFx0fSkpLFxuXHRcdFx0dHJhbnNpdGlvbignb3BlbiA9PiBjbG9zZWQnLCBbXG5cdFx0XHRcdGFuaW1hdGUoJzI1MG1zJylcblx0XHRcdF0pLFxuXHRcdFx0dHJhbnNpdGlvbignY2xvc2VkID0+IG9wZW4nLCBbXG5cdFx0XHRcdGFuaW1hdGUoJzE1MG1zJylcblx0XHRcdF0pLFxuXHRcdF0pLFxuXHRdLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5FbXVsYXRlZCxcbn0pXG5leHBvcnQgY2xhc3MgRWRpdG9yQ29tcG9uZW50IGV4dGVuZHMgRGlzcG9zYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuXG5cdHByaXZhdGUgX3BhZ2VDb3B5OiBQYWdlO1xuXHRwcml2YXRlIF9wYWdlOiBQYWdlO1xuXG5cdGNvbnRyb2xzOiBDb250cm9sQmFzZTxhbnk+W107XG5cdGdyb3VwOiBGb3JtR3JvdXA7XG5cblx0ZWRpdGluZzogYm9vbGVhbiA9IGZhbHNlO1xuXHRidXN5OiBib29sZWFuID0gZmFsc2U7XG5cdHN1Ym1pdHRlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogc3RyaW5nLFxuXHRcdEBJbmplY3QoRURJVE9SX0NPTkZJRykgcHJpdmF0ZSBjb25maWc6IEVkaXRvckNvbmZpZyxcblx0XHRwcml2YXRlIGNvbmZpZ1NlcnZpY2U6IENvbmZpZ1NlcnZpY2UsXG5cdFx0cHJpdmF0ZSBtYXJrZG93blNlcnZpY2U6IE1hcmtkb3duU2VydmljZSxcblx0XHRwcml2YXRlIGZvcm1TZXJ2aWNlOiBGb3JtU2VydmljZSxcblx0XHRwcml2YXRlIHBhZ2VSZXNvbHZlclNlcnZpY2U6IFBhZ2VSZXNvbHZlclNlcnZpY2UsXG5cdCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRnZXQgcGFnZSgpOiBQYWdlIHtcblx0XHRyZXR1cm4gdGhpcy5fcGFnZTtcblx0fVxuXG5cdHNldCBwYWdlKHBhZ2U6IFBhZ2UpIHtcblx0XHR0aGlzLl9wYWdlQ29weSA9IE9iamVjdC5hc3NpZ24oe30sIHBhZ2UpO1xuXHRcdHRoaXMuX3BhZ2UgPSBwYWdlO1xuXHRcdGlmICh0aGlzLl9wYWdlKSB7XG5cdFx0XHR0aGlzLmNvbnRyb2xzID0gdGhpcy5mb3JtU2VydmljZS5nZXRDb250cm9sc0Zyb21PcHRpb25zKHRoaXMuZ2V0Q29udHJvbHNCeVBhZ2UocGFnZSkpO1xuXHRcdFx0dGhpcy5ncm91cCA9IHRoaXMuZm9ybVNlcnZpY2UuZ2V0R3JvdXBGcm9tQ29udHJvbHModGhpcy5jb250cm9scyk7XG5cdFx0XHR0aGlzLmdyb3VwLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoeCA9PiB7XG5cdFx0XHRcdHRoaXMub25Bc3NpZ24oeCk7IC8vIE9iamVjdC5hc3NpZ24odGhpcy5fcGFnZSwgeCk7XG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5jb250cm9scyA9IFtdO1xuXHRcdFx0dGhpcy5ncm91cCA9IG51bGw7XG5cdFx0fVxuXHR9XG5cblx0Z2V0IGNvbXBvbmVudE5hbWUoKTogc3RyaW5nIHtcblx0XHRpZiAodGhpcy5fcGFnZSkge1xuXHRcdFx0Y29uc3QgY29tcG9uZW50ID0gdGhpcy5jb25maWdTZXJ2aWNlLm9wdGlvbnMucGFnZXNbdGhpcy5fcGFnZS5jb21wb25lbnRdO1xuXHRcdFx0aWYgKGNvbXBvbmVudCkge1xuXHRcdFx0XHRyZXR1cm4gY29tcG9uZW50Lm5hbWU7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Z2V0Q29udHJvbHNCeVBhZ2UocGFnZTogUGFnZSk6IENvbnRyb2xCYXNlT3B0aW9uczxhbnk+W10ge1xuXHRcdHJldHVybiBwYWdlID8gT2JqZWN0LmtleXMocGFnZSkuZmlsdGVyKGtleSA9PiB0eXBlb2YgcGFnZVtrZXldICE9PSAnb2JqZWN0JykubWFwKChrZXk6IHN0cmluZywgaTogbnVtYmVyKSA9PiB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRrZXk6IGtleSxcblx0XHRcdFx0dmFsdWU6IHBhZ2Vba2V5XSxcblx0XHRcdFx0c2NoZW1hOiBrZXkgPT09ICdkZXNjcmlwdGlvbicgPyAnbWFya2Rvd24nIDogJ3RleHQnLFxuXHRcdFx0XHRsYWJlbDoga2V5LFxuXHRcdFx0XHRwbGFjZWhvbGRlcjoga2V5LFxuXHRcdFx0XHRyZXF1aXJlZDogZmFsc2UsXG5cdFx0XHRcdG9yZGVyOiBpICsgMVxuXHRcdFx0fTtcblx0XHR9KSA6IFtdO1xuXHR9XG5cblx0bmdBZnRlclZpZXdJbml0KCkge1xuXHRcdGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG5cdFx0XHR0aGlzLnBhZ2VSZXNvbHZlclNlcnZpY2UuZXZlbnRzJC5waXBlKFxuXHRcdFx0XHR0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSlcblx0XHRcdCkuc3Vic2NyaWJlKChyZXNvbHZlcjogUGFnZVJlc29sdmVyKSA9PiB7XG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKCdFZGl0b3JDb21wb25lbnQucmVzb2x2ZXInLCByZXNvbHZlcik7XG5cdFx0XHRcdHRoaXMucGFnZSA9IHJlc29sdmVyID8gcmVzb2x2ZXIucGFnZSA6IG51bGw7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHRASG9zdExpc3RlbmVyKCdkb2N1bWVudDprZXlkb3duJywgWyckZXZlbnQnXSlcblx0b25LZXlkb3duKGU6IEtleWJvYXJkRXZlbnQpIHtcblx0XHRpZiAoZS5rZXkgPT09ICdlJyAmJiBlLmN0cmxLZXkpIHtcblx0XHRcdHRoaXMuZWRpdGluZyA9IHRoaXMuY29uZmlnLmVuYWJsZWQgJiYgIXRoaXMuZWRpdGluZztcblx0XHRcdHRoaXMuZWRpdGluZyA9ICF0aGlzLmVkaXRpbmc7XG5cdFx0XHQvLyBjb25zb2xlLmxvZygnQXBwQ29tcG9uZW50LmRvY3VtZW50OmtleWRvd24nLCBlLmtleSwgZS5jdHJsS2V5LCBlLmFsdEtleSwgZS5jb2RlKTtcblx0XHR9XG5cdH1cblxuXHRvblJlc2V0KCkge1xuXHRcdC8vIGNvbnNvbGUubG9nKCdFZGl0b3JDb21wb25lbnQub25SZXNldCcpO1xuXHRcdE9iamVjdC5rZXlzKHRoaXMuZ3JvdXAuY29udHJvbHMpLmZvckVhY2goa2V5ID0+IHtcblx0XHRcdHRoaXMuZ3JvdXAuZ2V0KGtleSkuc2V0VmFsdWUodGhpcy5fcGFnZUNvcHlba2V5XSk7XG5cdFx0fSk7XG5cdFx0Lypcblx0XHRjb25zdCBrZXlzID0gdGhpcy5jb250cm9scy5tYXAoeCA9PiB4LmtleSk7XG5cdFx0a2V5cy5mb3JFYWNoKGsgPT4ge1xuXHRcdFx0Ly8gY29uc29sZS5sb2coaywgdGhpcy5fcGFnZVtrXSwgdGhpcy5fcGFnZUNvcHlba10pO1xuXHRcdFx0dGhpcy5fcGFnZVtrXSA9IHRoaXMuX3BhZ2VDb3B5W2tdO1xuXHRcdH0pO1xuXHRcdCovXG5cdH1cblxuXHRvblN1Ym1pdChtb2RlbCkge1xuXHRcdC8vIGNvbnNvbGUubG9nKCdFZGl0b3JDb21wb25lbnQub25TdWJtaXQnLCBtb2RlbCk7XG5cdFx0dGhpcy5vbkFzc2lnbihtb2RlbCk7XG5cdFx0Ly8gT2JqZWN0LmFzc2lnbih0aGlzLl9wYWdlLCBtb2RlbCk7XG5cdH1cblxuXHRvbkFzc2lnbihtb2RlbCkge1xuXHRcdE9iamVjdC5rZXlzKHRoaXMuZ3JvdXAuY29udHJvbHMpLmZvckVhY2goa2V5ID0+IHtcblx0XHRcdHN3aXRjaCAoa2V5KSB7XG5cdFx0XHRcdGNhc2UgJ2Rlc2NyaXB0aW9uJzpcblx0XHRcdFx0XHR0aGlzLl9wYWdlW2tleV0gPSB0aGlzLm1hcmtkb3duU2VydmljZS5jb21waWxlKG1vZGVsW2tleV0pO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdHRoaXMuX3BhZ2Vba2V5XSA9IG1vZGVsW2tleV07XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxufVxuIl19