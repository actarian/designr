import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ControlModule } from '@designr/control';
import { CoreModule } from '@designr/core';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';
import { EditorRootComponent } from './editor-root.component';
import * as i0 from "@angular/core";
import * as i1 from "ngx-markdown";
const services = [];
const components = [
    EditorRootComponent,
];
const directives = [];
const pipes = [];
const validators = [];
const guards = [];
export class EditorBundleModule {
    constructor(parentModule) {
        if (parentModule) {
            throw new Error('EditorBundleModule is already loaded. Import it in the AppModule only');
        }
    }
}
EditorBundleModule.ɵmod = i0.ɵɵdefineNgModule({ type: EditorBundleModule });
EditorBundleModule.ɵinj = i0.ɵɵdefineInjector({ factory: function EditorBundleModule_Factory(t) { return new (t || EditorBundleModule)(i0.ɵɵinject(EditorBundleModule, 12)); }, providers: [
        { provide: 'LAZY_ROOT_COMPONENT', useValue: EditorRootComponent },
        ...services,
    ], imports: [[
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            MarkdownModule.forRoot({
                markedOptions: {
                    provide: MarkedOptions,
                    useValue: {
                    // gfm: true,
                    // tables: true,
                    // breaks: true,
                    // pedantic: true,
                    // sanitize: true,
                    // smartLists: true,
                    // smartypants: true,
                    },
                },
            }),
            CoreModule,
            ControlModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(EditorBundleModule, { declarations: [EditorRootComponent,
        EditorRootComponent], imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule, i1.MarkdownModule, CoreModule,
        ControlModule], exports: [EditorRootComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(EditorBundleModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    MarkdownModule.forRoot({
                        markedOptions: {
                            provide: MarkedOptions,
                            useValue: {
                            // gfm: true,
                            // tables: true,
                            // breaks: true,
                            // pedantic: true,
                            // sanitize: true,
                            // smartLists: true,
                            // smartypants: true,
                            },
                        },
                    }),
                    CoreModule,
                    ControlModule,
                ],
                providers: [
                    { provide: 'LAZY_ROOT_COMPONENT', useValue: EditorRootComponent },
                    ...services,
                ],
                declarations: [
                    EditorRootComponent,
                    ...components,
                ],
                entryComponents: [
                    EditorRootComponent,
                ],
                exports: [
                    ...components,
                ],
            }]
    }], function () { return [{ type: EditorBundleModule, decorators: [{
                type: Optional
            }, {
                type: SkipSelf
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLWJ1bmRsZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9lZGl0b3IvIiwic291cmNlcyI6WyJsaWIvZWRpdG9yLWJ1bmRsZS9lZGl0b3ItYnVuZGxlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDakQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsY0FBYyxFQUFFLGFBQWEsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUM3RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7O0FBRTlELE1BQU0sUUFBUSxHQUFHLEVBQ2hCLENBQUM7QUFFRixNQUFNLFVBQVUsR0FBRztJQUNsQixtQkFBbUI7Q0FDbkIsQ0FBQztBQUVGLE1BQU0sVUFBVSxHQUFHLEVBQ2xCLENBQUM7QUFFRixNQUFNLEtBQUssR0FBRyxFQUNiLENBQUM7QUFFRixNQUFNLFVBQVUsR0FBRyxFQUNsQixDQUFDO0FBRUYsTUFBTSxNQUFNLEdBQUcsRUFDZCxDQUFDO0FBd0NGLE1BQU0sT0FBTyxrQkFBa0I7SUFFOUIsWUFDeUIsWUFBZ0M7UUFFeEQsSUFBSSxZQUFZLEVBQUU7WUFDakIsTUFBTSxJQUFJLEtBQUssQ0FBQyx1RUFBdUUsQ0FBQyxDQUFDO1NBQ3pGO0lBQ0YsQ0FBQzs7c0RBUlcsa0JBQWtCO21IQUFsQixrQkFBa0IsY0FHUyxrQkFBa0Isc0JBbkI5QztRQUNWLEVBQUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLFFBQVEsRUFBRSxtQkFBbUIsRUFBRTtRQUNqRSxHQUFHLFFBQVE7S0FDWCxZQXhCUTtZQUNSLFlBQVk7WUFDWixXQUFXO1lBQ1gsbUJBQW1CO1lBQ25CLGNBQWMsQ0FBQyxPQUFPLENBQUM7Z0JBQ3RCLGFBQWEsRUFBRTtvQkFDZCxPQUFPLEVBQUUsYUFBYTtvQkFDdEIsUUFBUSxFQUFFO29CQUNULGFBQWE7b0JBQ2IsZ0JBQWdCO29CQUNoQixnQkFBZ0I7b0JBQ2hCLGtCQUFrQjtvQkFDbEIsa0JBQWtCO29CQUNsQixvQkFBb0I7b0JBQ3BCLHFCQUFxQjtxQkFDckI7aUJBQ0Q7YUFDRCxDQUFDO1lBQ0YsVUFBVTtZQUNWLGFBQWE7U0FDYjt3RkFpQlcsa0JBQWtCLG1CQVg3QixtQkFBbUI7UUExQ3BCLG1CQUFtQixhQWlCbEIsWUFBWTtRQUNaLFdBQVc7UUFDWCxtQkFBbUIscUJBZW5CLFVBQVU7UUFDVixhQUFhLGFBbkNkLG1CQUFtQjtrREFxRFAsa0JBQWtCO2NBdEM5QixRQUFRO2VBQUM7Z0JBQ1QsT0FBTyxFQUFFO29CQUNSLFlBQVk7b0JBQ1osV0FBVztvQkFDWCxtQkFBbUI7b0JBQ25CLGNBQWMsQ0FBQyxPQUFPLENBQUM7d0JBQ3RCLGFBQWEsRUFBRTs0QkFDZCxPQUFPLEVBQUUsYUFBYTs0QkFDdEIsUUFBUSxFQUFFOzRCQUNULGFBQWE7NEJBQ2IsZ0JBQWdCOzRCQUNoQixnQkFBZ0I7NEJBQ2hCLGtCQUFrQjs0QkFDbEIsa0JBQWtCOzRCQUNsQixvQkFBb0I7NEJBQ3BCLHFCQUFxQjs2QkFDckI7eUJBQ0Q7cUJBQ0QsQ0FBQztvQkFDRixVQUFVO29CQUNWLGFBQWE7aUJBQ2I7Z0JBQ0QsU0FBUyxFQUFFO29CQUNWLEVBQUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLFFBQVEsRUFBRSxtQkFBbUIsRUFBRTtvQkFDakUsR0FBRyxRQUFRO2lCQUNYO2dCQUNELFlBQVksRUFBRTtvQkFDYixtQkFBbUI7b0JBQ25CLEdBQUcsVUFBVTtpQkFDYjtnQkFDRCxlQUFlLEVBQUU7b0JBQ2hCLG1CQUFtQjtpQkFDbkI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNSLEdBQUcsVUFBVTtpQkFDYjthQUNEO3NDQUt1QyxrQkFBa0I7c0JBQXZELFFBQVE7O3NCQUFJLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSwgT3B0aW9uYWwsIFNraXBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBDb250cm9sTW9kdWxlIH0gZnJvbSAnQGRlc2lnbnIvY29udHJvbCc7XHJcbmltcG9ydCB7IENvcmVNb2R1bGUgfSBmcm9tICdAZGVzaWduci9jb3JlJztcclxuaW1wb3J0IHsgTWFya2Rvd25Nb2R1bGUsIE1hcmtlZE9wdGlvbnMgfSBmcm9tICduZ3gtbWFya2Rvd24nO1xyXG5pbXBvcnQgeyBFZGl0b3JSb290Q29tcG9uZW50IH0gZnJvbSAnLi9lZGl0b3Itcm9vdC5jb21wb25lbnQnO1xyXG5cclxuY29uc3Qgc2VydmljZXMgPSBbXHJcbl07XHJcblxyXG5jb25zdCBjb21wb25lbnRzID0gW1xyXG5cdEVkaXRvclJvb3RDb21wb25lbnQsXHJcbl07XHJcblxyXG5jb25zdCBkaXJlY3RpdmVzID0gW1xyXG5dO1xyXG5cclxuY29uc3QgcGlwZXMgPSBbXHJcbl07XHJcblxyXG5jb25zdCB2YWxpZGF0b3JzID0gW1xyXG5dO1xyXG5cclxuY29uc3QgZ3VhcmRzID0gW1xyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRpbXBvcnRzOiBbXHJcblx0XHRDb21tb25Nb2R1bGUsXHJcblx0XHRGb3Jtc01vZHVsZSxcclxuXHRcdFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcblx0XHRNYXJrZG93bk1vZHVsZS5mb3JSb290KHtcclxuXHRcdFx0bWFya2VkT3B0aW9uczoge1xyXG5cdFx0XHRcdHByb3ZpZGU6IE1hcmtlZE9wdGlvbnMsXHJcblx0XHRcdFx0dXNlVmFsdWU6IHtcclxuXHRcdFx0XHRcdC8vIGdmbTogdHJ1ZSxcclxuXHRcdFx0XHRcdC8vIHRhYmxlczogdHJ1ZSxcclxuXHRcdFx0XHRcdC8vIGJyZWFrczogdHJ1ZSxcclxuXHRcdFx0XHRcdC8vIHBlZGFudGljOiB0cnVlLFxyXG5cdFx0XHRcdFx0Ly8gc2FuaXRpemU6IHRydWUsXHJcblx0XHRcdFx0XHQvLyBzbWFydExpc3RzOiB0cnVlLFxyXG5cdFx0XHRcdFx0Ly8gc21hcnR5cGFudHM6IHRydWUsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0fSxcclxuXHRcdH0pLFxyXG5cdFx0Q29yZU1vZHVsZSxcclxuXHRcdENvbnRyb2xNb2R1bGUsXHJcblx0XSxcclxuXHRwcm92aWRlcnM6IFtcclxuXHRcdHsgcHJvdmlkZTogJ0xBWllfUk9PVF9DT01QT05FTlQnLCB1c2VWYWx1ZTogRWRpdG9yUm9vdENvbXBvbmVudCB9LFxyXG5cdFx0Li4uc2VydmljZXMsXHJcblx0XSxcclxuXHRkZWNsYXJhdGlvbnM6IFtcclxuXHRcdEVkaXRvclJvb3RDb21wb25lbnQsXHJcblx0XHQuLi5jb21wb25lbnRzLFxyXG5cdF0sXHJcblx0ZW50cnlDb21wb25lbnRzOiBbXHJcblx0XHRFZGl0b3JSb290Q29tcG9uZW50LFxyXG5cdF0sXHJcblx0ZXhwb3J0czogW1xyXG5cdFx0Li4uY29tcG9uZW50cyxcclxuXHRdLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEVkaXRvckJ1bmRsZU1vZHVsZSB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0QE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcGFyZW50TW9kdWxlOiBFZGl0b3JCdW5kbGVNb2R1bGVcclxuXHQpIHtcclxuXHRcdGlmIChwYXJlbnRNb2R1bGUpIHtcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdFZGl0b3JCdW5kbGVNb2R1bGUgaXMgYWxyZWFkeSBsb2FkZWQuIEltcG9ydCBpdCBpbiB0aGUgQXBwTW9kdWxlIG9ubHknKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG59XHJcbiJdfQ==