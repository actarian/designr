/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule, NgModuleFactoryLoader, Optional, SkipSelf, SystemJsNgModuleLoader } from '@angular/core';
import { CoreModule } from '@designr/core';
import { EDITOR_CONFIG } from './config/editor.config';
import { EditorService } from './config/editor.service';
import { LazyModuleDirective } from './editor-lazy/lazy-module.directive';
import { EditorModuleComponent } from './editor-module.component';
import { PanelComponent } from './panel/panel.component';
/** @type {?} */
var services = [
    EditorService,
];
/** @type {?} */
var components = [
    EditorModuleComponent,
    PanelComponent,
];
/** @type {?} */
var directives = [
    LazyModuleDirective,
];
/** @type {?} */
var pipes = [];
/** @type {?} */
var validators = [];
/** @type {?} */
var guards = [];
var EditorModule = /** @class */ (function () {
    function EditorModule(parentModule) {
        if (parentModule) {
            throw new Error('EditorModule is already loaded. Import it in the AppModule only');
        }
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    EditorModule.forRoot = /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        return {
            ngModule: EditorModule,
            providers: [
                { provide: EDITOR_CONFIG, useValue: config },
            ]
        };
    };
    EditorModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        CoreModule,
                    ],
                    providers: tslib_1.__spread([
                        { provide: NgModuleFactoryLoader, useClass: SystemJsNgModuleLoader }
                    ], services),
                    declarations: tslib_1.__spread(components, directives),
                    exports: tslib_1.__spread([
                        CoreModule
                    ], components),
                },] }
    ];
    /** @nocollapse */
    EditorModule.ctorParameters = function () { return [
        { type: EditorModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
    ]; };
    return EditorModule;
}());
export { EditorModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2VkaXRvci8iLCJzb3VyY2VzIjpbImxpYi9lZGl0b3IubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBdUIsUUFBUSxFQUFFLHFCQUFxQixFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakksT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWdCLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7O0lBRW5ELFFBQVEsR0FBRztJQUNoQixhQUFhO0NBQ2I7O0lBRUssVUFBVSxHQUFHO0lBQ2xCLHFCQUFxQjtJQUNyQixjQUFjO0NBQ2Q7O0lBRUssVUFBVSxHQUFHO0lBQ2xCLG1CQUFtQjtDQUNuQjs7SUFFSyxLQUFLLEdBQUcsRUFDYjs7SUFFSyxVQUFVLEdBQUcsRUFDbEI7O0lBRUssTUFBTSxHQUFHLEVBQ2Q7QUFFRDtJQXFCQyxzQkFDeUIsWUFBMEI7UUFFbEQsSUFBSSxZQUFZLEVBQUU7WUFDakIsTUFBTSxJQUFJLEtBQUssQ0FBQyxpRUFBaUUsQ0FBQyxDQUFDO1NBQ25GO0lBQ0YsQ0FBQzs7Ozs7SUFFYSxvQkFBTzs7OztJQUFyQixVQUNDLE1BQXFCO1FBRXJCLE9BQU87WUFDTixRQUFRLEVBQUUsWUFBWTtZQUN0QixTQUFTLEVBQUU7Z0JBQ1YsRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUU7YUFDNUM7U0FDRCxDQUFDO0lBQ0gsQ0FBQzs7Z0JBdENELFFBQVEsU0FBQztvQkFDVCxPQUFPLEVBQUU7d0JBQ1IsWUFBWTt3QkFDWixVQUFVO3FCQUNWO29CQUNELFNBQVM7d0JBQ1IsRUFBRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsUUFBUSxFQUFFLHNCQUFzQixFQUFFO3VCQUNqRSxRQUFRLENBQ1g7b0JBQ0QsWUFBWSxtQkFDUixVQUFVLEVBQ1YsVUFBVSxDQUNiO29CQUNELE9BQU87d0JBQ04sVUFBVTt1QkFDUCxVQUFVLENBQ2I7aUJBQ0Q7Ozs7Z0JBS3VDLFlBQVksdUJBQWpELFFBQVEsWUFBSSxRQUFROztJQWtCdkIsbUJBQUM7Q0FBQSxBQXhDRCxJQXdDQztTQXJCWSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUsIE5nTW9kdWxlRmFjdG9yeUxvYWRlciwgT3B0aW9uYWwsIFNraXBTZWxmLCBTeXN0ZW1Kc05nTW9kdWxlTG9hZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvcmVNb2R1bGUgfSBmcm9tICdAZGVzaWduci9jb3JlJztcclxuaW1wb3J0IHsgRWRpdG9yQ29uZmlnLCBFRElUT1JfQ09ORklHIH0gZnJvbSAnLi9jb25maWcvZWRpdG9yLmNvbmZpZyc7XHJcbmltcG9ydCB7IEVkaXRvclNlcnZpY2UgfSBmcm9tICcuL2NvbmZpZy9lZGl0b3Iuc2VydmljZSc7XHJcbmltcG9ydCB7IExhenlNb2R1bGVEaXJlY3RpdmUgfSBmcm9tICcuL2VkaXRvci1sYXp5L2xhenktbW9kdWxlLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IEVkaXRvck1vZHVsZUNvbXBvbmVudCB9IGZyb20gJy4vZWRpdG9yLW1vZHVsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQYW5lbENvbXBvbmVudCB9IGZyb20gJy4vcGFuZWwvcGFuZWwuY29tcG9uZW50JztcclxuXHJcbmNvbnN0IHNlcnZpY2VzID0gW1xyXG5cdEVkaXRvclNlcnZpY2UsXHJcbl07XHJcblxyXG5jb25zdCBjb21wb25lbnRzID0gW1xyXG5cdEVkaXRvck1vZHVsZUNvbXBvbmVudCxcclxuXHRQYW5lbENvbXBvbmVudCxcclxuXTtcclxuXHJcbmNvbnN0IGRpcmVjdGl2ZXMgPSBbXHJcblx0TGF6eU1vZHVsZURpcmVjdGl2ZSxcclxuXTtcclxuXHJcbmNvbnN0IHBpcGVzID0gW1xyXG5dO1xyXG5cclxuY29uc3QgdmFsaWRhdG9ycyA9IFtcclxuXTtcclxuXHJcbmNvbnN0IGd1YXJkcyA9IFtcclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcblx0aW1wb3J0czogW1xyXG5cdFx0Q29tbW9uTW9kdWxlLFxyXG5cdFx0Q29yZU1vZHVsZSxcclxuXHRdLFxyXG5cdHByb3ZpZGVyczogW1xyXG5cdFx0eyBwcm92aWRlOiBOZ01vZHVsZUZhY3RvcnlMb2FkZXIsIHVzZUNsYXNzOiBTeXN0ZW1Kc05nTW9kdWxlTG9hZGVyIH0sXHJcblx0XHQuLi5zZXJ2aWNlcyxcclxuXHRdLFxyXG5cdGRlY2xhcmF0aW9uczogW1xyXG5cdFx0Li4uY29tcG9uZW50cyxcclxuXHRcdC4uLmRpcmVjdGl2ZXMsXHJcblx0XSxcclxuXHRleHBvcnRzOiBbXHJcblx0XHRDb3JlTW9kdWxlLFxyXG5cdFx0Li4uY29tcG9uZW50cyxcclxuXHRdLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEVkaXRvck1vZHVsZSB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0QE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcGFyZW50TW9kdWxlOiBFZGl0b3JNb2R1bGVcclxuXHQpIHtcclxuXHRcdGlmIChwYXJlbnRNb2R1bGUpIHtcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdFZGl0b3JNb2R1bGUgaXMgYWxyZWFkeSBsb2FkZWQuIEltcG9ydCBpdCBpbiB0aGUgQXBwTW9kdWxlIG9ubHknKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgZm9yUm9vdChcclxuXHRcdGNvbmZpZz86IEVkaXRvckNvbmZpZyxcclxuXHQpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdG5nTW9kdWxlOiBFZGl0b3JNb2R1bGUsXHJcblx0XHRcdHByb3ZpZGVyczogW1xyXG5cdFx0XHRcdHsgcHJvdmlkZTogRURJVE9SX0NPTkZJRywgdXNlVmFsdWU6IGNvbmZpZyB9LFxyXG5cdFx0XHRdXHJcblx0XHR9O1xyXG5cdH1cclxuXHJcbn1cclxuIl19