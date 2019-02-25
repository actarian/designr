/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ControlModule } from '@designr/control';
import { CoreModule } from '@designr/core';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';
import { EditorRootComponent } from './editor-root.component';
/** @type {?} */
const services = [];
/** @type {?} */
const components = [
    EditorRootComponent,
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
}, ɵ1 = EditorRootComponent;
export class EditorLazyModule {
    /**
     * @param {?} parentModule
     */
    constructor(parentModule) {
        if (parentModule) {
            throw new Error('EditorLazyModule is already loaded. Import it in the AppModule only');
        }
    }
}
EditorLazyModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    MarkdownModule.forRoot({
                        markedOptions: {
                            provide: MarkedOptions,
                            useValue: ɵ0,
                        },
                    }),
                    CoreModule,
                    ControlModule,
                ],
                providers: [
                    { provide: 'LAZY_ROOT_COMPONENT', useValue: ɵ1 },
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
                    CoreModule,
                    ...components,
                ],
            },] }
];
/** @nocollapse */
EditorLazyModule.ctorParameters = () => [
    { type: EditorLazyModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
];
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLWxhenkubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvZWRpdG9yLyIsInNvdXJjZXMiOlsibGliL2VkaXRvci1sYXp5L2VkaXRvci1sYXp5Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxhQUFhLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDN0QsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7O01BRXhELFFBQVEsR0FBRyxFQUNoQjs7TUFFSyxVQUFVLEdBQUc7SUFDbEIsbUJBQW1CO0NBQ25COztNQUVLLFVBQVUsR0FBRyxFQUNsQjs7TUFFSyxLQUFLLEdBQUcsRUFDYjs7TUFFSyxVQUFVLEdBQUcsRUFDbEI7O01BRUssTUFBTSxHQUFHLEVBQ2Q7V0FVYTtBQUNULGFBQWE7QUFDYixnQkFBZ0I7QUFDaEIsZ0JBQWdCO0FBQ2hCLGtCQUFrQjtBQUNsQixrQkFBa0I7QUFDbEIsb0JBQW9CO0FBQ3BCLHFCQUFxQjtDQUNyQixPQU95QyxtQkFBbUI7QUFnQmpFLE1BQU0sT0FBTyxnQkFBZ0I7Ozs7SUFFNUIsWUFDeUIsWUFBOEI7UUFFdEQsSUFBSSxZQUFZLEVBQUU7WUFDakIsTUFBTSxJQUFJLEtBQUssQ0FBQyxxRUFBcUUsQ0FBQyxDQUFDO1NBQ3ZGO0lBQ0YsQ0FBQzs7O1lBL0NELFFBQVEsU0FBQztnQkFDVCxPQUFPLEVBQUU7b0JBQ1IsWUFBWTtvQkFDWixXQUFXO29CQUNYLG1CQUFtQjtvQkFDbkIsY0FBYyxDQUFDLE9BQU8sQ0FBQzt3QkFDdEIsYUFBYSxFQUFFOzRCQUNkLE9BQU8sRUFBRSxhQUFhOzRCQUN0QixRQUFRLElBUVA7eUJBQ0Q7cUJBQ0QsQ0FBQztvQkFDRixVQUFVO29CQUNWLGFBQWE7aUJBQ2I7Z0JBQ0QsU0FBUyxFQUFFO29CQUNWLEVBQUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLFFBQVEsSUFBcUIsRUFBRTtvQkFDakUsR0FBRyxRQUFRO2lCQUNYO2dCQUNELFlBQVksRUFBRTtvQkFDYixtQkFBbUI7b0JBQ25CLEdBQUcsVUFBVTtpQkFDYjtnQkFDRCxlQUFlLEVBQUU7b0JBQ2hCLG1CQUFtQjtpQkFDbkI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNSLFVBQVU7b0JBQ1YsR0FBRyxVQUFVO2lCQUNiO2FBQ0Q7Ozs7WUFLdUMsZ0JBQWdCLHVCQUFyRCxRQUFRLFlBQUksUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE5nTW9kdWxlLCBPcHRpb25hbCwgU2tpcFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IENvbnRyb2xNb2R1bGUgfSBmcm9tICdAZGVzaWduci9jb250cm9sJztcclxuaW1wb3J0IHsgQ29yZU1vZHVsZSB9IGZyb20gJ0BkZXNpZ25yL2NvcmUnO1xyXG5pbXBvcnQgeyBNYXJrZG93bk1vZHVsZSwgTWFya2VkT3B0aW9ucyB9IGZyb20gJ25neC1tYXJrZG93bic7XHJcbmltcG9ydCB7IEVkaXRvclJvb3RDb21wb25lbnQgfSBmcm9tICcuL2VkaXRvci1yb290LmNvbXBvbmVudCc7XHJcblxyXG5jb25zdCBzZXJ2aWNlcyA9IFtcclxuXTtcclxuXHJcbmNvbnN0IGNvbXBvbmVudHMgPSBbXHJcblx0RWRpdG9yUm9vdENvbXBvbmVudCxcclxuXTtcclxuXHJcbmNvbnN0IGRpcmVjdGl2ZXMgPSBbXHJcbl07XHJcblxyXG5jb25zdCBwaXBlcyA9IFtcclxuXTtcclxuXHJcbmNvbnN0IHZhbGlkYXRvcnMgPSBbXHJcbl07XHJcblxyXG5jb25zdCBndWFyZHMgPSBbXHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG5cdGltcG9ydHM6IFtcclxuXHRcdENvbW1vbk1vZHVsZSxcclxuXHRcdEZvcm1zTW9kdWxlLFxyXG5cdFx0UmVhY3RpdmVGb3Jtc01vZHVsZSxcclxuXHRcdE1hcmtkb3duTW9kdWxlLmZvclJvb3Qoe1xyXG5cdFx0XHRtYXJrZWRPcHRpb25zOiB7XHJcblx0XHRcdFx0cHJvdmlkZTogTWFya2VkT3B0aW9ucyxcclxuXHRcdFx0XHR1c2VWYWx1ZToge1xyXG5cdFx0XHRcdFx0Ly8gZ2ZtOiB0cnVlLFxyXG5cdFx0XHRcdFx0Ly8gdGFibGVzOiB0cnVlLFxyXG5cdFx0XHRcdFx0Ly8gYnJlYWtzOiB0cnVlLFxyXG5cdFx0XHRcdFx0Ly8gcGVkYW50aWM6IHRydWUsXHJcblx0XHRcdFx0XHQvLyBzYW5pdGl6ZTogdHJ1ZSxcclxuXHRcdFx0XHRcdC8vIHNtYXJ0TGlzdHM6IHRydWUsXHJcblx0XHRcdFx0XHQvLyBzbWFydHlwYW50czogdHJ1ZSxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHR9LFxyXG5cdFx0fSksXHJcblx0XHRDb3JlTW9kdWxlLFxyXG5cdFx0Q29udHJvbE1vZHVsZSxcclxuXHRdLFxyXG5cdHByb3ZpZGVyczogW1xyXG5cdFx0eyBwcm92aWRlOiAnTEFaWV9ST09UX0NPTVBPTkVOVCcsIHVzZVZhbHVlOiBFZGl0b3JSb290Q29tcG9uZW50IH0sXHJcblx0XHQuLi5zZXJ2aWNlcyxcclxuXHRdLFxyXG5cdGRlY2xhcmF0aW9uczogW1xyXG5cdFx0RWRpdG9yUm9vdENvbXBvbmVudCxcclxuXHRcdC4uLmNvbXBvbmVudHMsXHJcblx0XSxcclxuXHRlbnRyeUNvbXBvbmVudHM6IFtcclxuXHRcdEVkaXRvclJvb3RDb21wb25lbnQsXHJcblx0XSxcclxuXHRleHBvcnRzOiBbXHJcblx0XHRDb3JlTW9kdWxlLFxyXG5cdFx0Li4uY29tcG9uZW50cyxcclxuXHRdLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEVkaXRvckxhenlNb2R1bGUge1xyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHBhcmVudE1vZHVsZTogRWRpdG9yTGF6eU1vZHVsZVxyXG5cdCkge1xyXG5cdFx0aWYgKHBhcmVudE1vZHVsZSkge1xyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0VkaXRvckxhenlNb2R1bGUgaXMgYWxyZWFkeSBsb2FkZWQuIEltcG9ydCBpdCBpbiB0aGUgQXBwTW9kdWxlIG9ubHknKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG59XHJcbiJdfQ==