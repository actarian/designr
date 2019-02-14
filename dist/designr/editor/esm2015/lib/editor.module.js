/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CoreModule } from '@designr/core';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';
import { EDITOR_CONFIG } from './config/editor.config';
import { EditorService } from './config/editor.service';
import { EditorModuleComponent } from './editor-module.component';
import { EditorComponent } from './editor/editor.component';
/** @type {?} */
const modules = [
    MarkdownModule,
    CoreModule,
];
/** @type {?} */
const services = [
    EditorService,
];
/** @type {?} */
const components = [
    EditorModuleComponent,
    EditorComponent,
];
/** @type {?} */
const directives = [];
/** @type {?} */
const pipes = [];
/** @type {?} */
const validators = [];
/** @type {?} */
const guards = [];
const ɵ0 = {
// gfm: true,
// tables: true,
// breaks: true,
// pedantic: true,
// sanitize: true,
// smartLists: true,
// smartypants: true,
};
export class EditorModule {
    /**
     * @param {?} parentModule
     */
    constructor(parentModule) {
        if (parentModule) {
            throw new Error('EditorModule is already loaded. Import it in the AppModule only');
        }
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    static forRoot(config) {
        return {
            ngModule: EditorModule,
            providers: [
                { provide: EDITOR_CONFIG, useValue: config || {} },
            ]
        };
    }
}
EditorModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    MarkdownModule.forRoot({
                        markedOptions: {
                            provide: MarkedOptions,
                            useValue: ɵ0,
                        },
                    }),
                    CoreModule,
                ],
                providers: [
                    ...services,
                ],
                declarations: [
                    ...components,
                ],
                exports: [
                    ...modules,
                    ...components,
                ],
            },] }
];
/** @nocollapse */
EditorModule.ctorParameters = () => [
    { type: EditorModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
];
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2VkaXRvci8iLCJzb3VyY2VzIjpbImxpYi9lZGl0b3IubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQXVCLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxhQUFhLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDN0QsT0FBTyxFQUFnQixhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDeEQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJCQUEyQixDQUFDOztNQUV0RCxPQUFPLEdBQUc7SUFDZixjQUFjO0lBQ2QsVUFBVTtDQUNWOztNQUVLLFFBQVEsR0FBRztJQUNoQixhQUFhO0NBQ2I7O01BRUssVUFBVSxHQUFHO0lBQ2xCLHFCQUFxQjtJQUNyQixlQUFlO0NBQ2Y7O01BRUssVUFBVSxHQUFHLEVBQ2xCOztNQUVLLEtBQUssR0FBRyxFQUNiOztNQUVLLFVBQVUsR0FBRyxFQUNsQjs7TUFFSyxNQUFNLEdBQUcsRUFDZDtXQU9hO0FBQ1QsYUFBYTtBQUNiLGdCQUFnQjtBQUNoQixnQkFBZ0I7QUFDaEIsa0JBQWtCO0FBQ2xCLGtCQUFrQjtBQUNsQixvQkFBb0I7QUFDcEIscUJBQXFCO0NBQ3JCO0FBaUJMLE1BQU0sT0FBTyxZQUFZOzs7O0lBRXhCLFlBQ3lCLFlBQTBCO1FBRWxELElBQUksWUFBWSxFQUFFO1lBQ2pCLE1BQU0sSUFBSSxLQUFLLENBQUMsaUVBQWlFLENBQUMsQ0FBQztTQUNuRjtJQUNGLENBQUM7Ozs7O0lBRU0sTUFBTSxDQUFDLE9BQU8sQ0FDcEIsTUFBcUI7UUFFckIsT0FBTztZQUNOLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFNBQVMsRUFBRTtnQkFDVixFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLE1BQU0sSUFBSSxFQUFFLEVBQUU7YUFDbEQ7U0FDRCxDQUFDO0lBQ0gsQ0FBQzs7O1lBakRELFFBQVEsU0FBQztnQkFDVCxPQUFPLEVBQUU7b0JBQ1IsY0FBYyxDQUFDLE9BQU8sQ0FBQzt3QkFDdEIsYUFBYSxFQUFFOzRCQUNkLE9BQU8sRUFBRSxhQUFhOzRCQUN0QixRQUFRLElBUVA7eUJBQ0Q7cUJBQ0QsQ0FBQztvQkFDRixVQUFVO2lCQUNWO2dCQUNELFNBQVMsRUFBRTtvQkFDVixHQUFHLFFBQVE7aUJBQ1g7Z0JBQ0QsWUFBWSxFQUFFO29CQUNiLEdBQUcsVUFBVTtpQkFDYjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1IsR0FBRyxPQUFPO29CQUNWLEdBQUcsVUFBVTtpQkFDYjthQUNEOzs7O1lBS3VDLFlBQVksdUJBQWpELFFBQVEsWUFBSSxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUsIE9wdGlvbmFsLCBTa2lwU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb3JlTW9kdWxlIH0gZnJvbSAnQGRlc2lnbnIvY29yZSc7XHJcbmltcG9ydCB7IE1hcmtkb3duTW9kdWxlLCBNYXJrZWRPcHRpb25zIH0gZnJvbSAnbmd4LW1hcmtkb3duJztcclxuaW1wb3J0IHsgRWRpdG9yQ29uZmlnLCBFRElUT1JfQ09ORklHIH0gZnJvbSAnLi9jb25maWcvZWRpdG9yLmNvbmZpZyc7XHJcbmltcG9ydCB7IEVkaXRvclNlcnZpY2UgfSBmcm9tICcuL2NvbmZpZy9lZGl0b3Iuc2VydmljZSc7XHJcbmltcG9ydCB7IEVkaXRvck1vZHVsZUNvbXBvbmVudCB9IGZyb20gJy4vZWRpdG9yLW1vZHVsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBFZGl0b3JDb21wb25lbnQgfSBmcm9tICcuL2VkaXRvci9lZGl0b3IuY29tcG9uZW50JztcclxuXHJcbmNvbnN0IG1vZHVsZXMgPSBbXHJcblx0TWFya2Rvd25Nb2R1bGUsXHJcblx0Q29yZU1vZHVsZSxcclxuXTtcclxuXHJcbmNvbnN0IHNlcnZpY2VzID0gW1xyXG5cdEVkaXRvclNlcnZpY2UsXHJcbl07XHJcblxyXG5jb25zdCBjb21wb25lbnRzID0gW1xyXG5cdEVkaXRvck1vZHVsZUNvbXBvbmVudCxcclxuXHRFZGl0b3JDb21wb25lbnQsXHJcbl07XHJcblxyXG5jb25zdCBkaXJlY3RpdmVzID0gW1xyXG5dO1xyXG5cclxuY29uc3QgcGlwZXMgPSBbXHJcbl07XHJcblxyXG5jb25zdCB2YWxpZGF0b3JzID0gW1xyXG5dO1xyXG5cclxuY29uc3QgZ3VhcmRzID0gW1xyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRpbXBvcnRzOiBbXHJcblx0XHRNYXJrZG93bk1vZHVsZS5mb3JSb290KHtcclxuXHRcdFx0bWFya2VkT3B0aW9uczoge1xyXG5cdFx0XHRcdHByb3ZpZGU6IE1hcmtlZE9wdGlvbnMsXHJcblx0XHRcdFx0dXNlVmFsdWU6IHtcclxuXHRcdFx0XHRcdC8vIGdmbTogdHJ1ZSxcclxuXHRcdFx0XHRcdC8vIHRhYmxlczogdHJ1ZSxcclxuXHRcdFx0XHRcdC8vIGJyZWFrczogdHJ1ZSxcclxuXHRcdFx0XHRcdC8vIHBlZGFudGljOiB0cnVlLFxyXG5cdFx0XHRcdFx0Ly8gc2FuaXRpemU6IHRydWUsXHJcblx0XHRcdFx0XHQvLyBzbWFydExpc3RzOiB0cnVlLFxyXG5cdFx0XHRcdFx0Ly8gc21hcnR5cGFudHM6IHRydWUsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0fSxcclxuXHRcdH0pLFxyXG5cdFx0Q29yZU1vZHVsZSxcclxuXHRdLFxyXG5cdHByb3ZpZGVyczogW1xyXG5cdFx0Li4uc2VydmljZXMsXHJcblx0XSxcclxuXHRkZWNsYXJhdGlvbnM6IFtcclxuXHRcdC4uLmNvbXBvbmVudHMsXHJcblx0XSxcclxuXHRleHBvcnRzOiBbXHJcblx0XHQuLi5tb2R1bGVzLFxyXG5cdFx0Li4uY29tcG9uZW50cyxcclxuXHRdLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEVkaXRvck1vZHVsZSB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0QE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcGFyZW50TW9kdWxlOiBFZGl0b3JNb2R1bGVcclxuXHQpIHtcclxuXHRcdGlmIChwYXJlbnRNb2R1bGUpIHtcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdFZGl0b3JNb2R1bGUgaXMgYWxyZWFkeSBsb2FkZWQuIEltcG9ydCBpdCBpbiB0aGUgQXBwTW9kdWxlIG9ubHknKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgZm9yUm9vdChcclxuXHRcdGNvbmZpZz86IEVkaXRvckNvbmZpZyxcclxuXHQpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdG5nTW9kdWxlOiBFZGl0b3JNb2R1bGUsXHJcblx0XHRcdHByb3ZpZGVyczogW1xyXG5cdFx0XHRcdHsgcHJvdmlkZTogRURJVE9SX0NPTkZJRywgdXNlVmFsdWU6IGNvbmZpZyB8fCB7fSB9LFxyXG5cdFx0XHRdXHJcblx0XHR9O1xyXG5cdH1cclxuXHJcbn1cclxuIl19