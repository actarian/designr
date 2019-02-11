/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '@designr/core';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';
import { EditorModuleComponent } from './editor-module.component';
import { EditorComponent } from './editor/editor.component';
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
}
EditorModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    HttpClientModule,
                    FormsModule,
                    ReactiveFormsModule,
                    MarkdownModule.forRoot({
                        markedOptions: {
                            provide: MarkedOptions,
                            useValue: ɵ0,
                        },
                    }),
                    CoreModule,
                ],
                declarations: [
                    EditorModuleComponent,
                    EditorComponent,
                ],
                exports: [
                    EditorModuleComponent,
                    EditorComponent,
                ],
                providers: [],
            },] }
];
/** @nocollapse */
EditorModule.ctorParameters = () => [
    { type: EditorModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
];
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2VkaXRvci8iLCJzb3VyY2VzIjpbImxpYi9lZGl0b3IubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxjQUFjLEVBQUUsYUFBYSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQzdELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztXQVc5QztBQUNULGFBQWE7QUFDYixnQkFBZ0I7QUFDaEIsZ0JBQWdCO0FBQ2hCLGtCQUFrQjtBQUNsQixrQkFBa0I7QUFDbEIsb0JBQW9CO0FBQ3BCLHFCQUFxQjtDQUNyQjtBQWdCTCxNQUFNLE9BQU8sWUFBWTs7OztJQUV4QixZQUN5QixZQUEwQjtRQUVsRCxJQUFJLFlBQVksRUFBRTtZQUNqQixNQUFNLElBQUksS0FBSyxDQUFDLGlFQUFpRSxDQUFDLENBQUM7U0FDbkY7SUFDRixDQUFDOzs7WUF6Q0QsUUFBUSxTQUFDO2dCQUNULE9BQU8sRUFBRTtvQkFDUixZQUFZO29CQUNaLGdCQUFnQjtvQkFDaEIsV0FBVztvQkFDWCxtQkFBbUI7b0JBQ25CLGNBQWMsQ0FBQyxPQUFPLENBQUM7d0JBQ3RCLGFBQWEsRUFBRTs0QkFDZCxPQUFPLEVBQUUsYUFBYTs0QkFDdEIsUUFBUSxJQVFQO3lCQUNEO3FCQUNELENBQUM7b0JBQ0YsVUFBVTtpQkFDVjtnQkFDRCxZQUFZLEVBQUU7b0JBQ2IscUJBQXFCO29CQUNyQixlQUFlO2lCQUNmO2dCQUNELE9BQU8sRUFBRTtvQkFDUixxQkFBcUI7b0JBQ3JCLGVBQWU7aUJBQ2Y7Z0JBQ0QsU0FBUyxFQUFFLEVBQUU7YUFDYjs7OztZQUt1QyxZQUFZLHVCQUFqRCxRQUFRLFlBQUksUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IE5nTW9kdWxlLCBPcHRpb25hbCwgU2tpcFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IENvcmVNb2R1bGUgfSBmcm9tICdAZGVzaWduci9jb3JlJztcclxuaW1wb3J0IHsgTWFya2Rvd25Nb2R1bGUsIE1hcmtlZE9wdGlvbnMgfSBmcm9tICduZ3gtbWFya2Rvd24nO1xyXG5pbXBvcnQgeyBFZGl0b3JNb2R1bGVDb21wb25lbnQgfSBmcm9tICcuL2VkaXRvci1tb2R1bGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRWRpdG9yQ29tcG9uZW50IH0gZnJvbSAnLi9lZGl0b3IvZWRpdG9yLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG5cdGltcG9ydHM6IFtcclxuXHRcdENvbW1vbk1vZHVsZSxcclxuXHRcdEh0dHBDbGllbnRNb2R1bGUsXHJcblx0XHRGb3Jtc01vZHVsZSxcclxuXHRcdFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcblx0XHRNYXJrZG93bk1vZHVsZS5mb3JSb290KHtcclxuXHRcdFx0bWFya2VkT3B0aW9uczoge1xyXG5cdFx0XHRcdHByb3ZpZGU6IE1hcmtlZE9wdGlvbnMsXHJcblx0XHRcdFx0dXNlVmFsdWU6IHtcclxuXHRcdFx0XHRcdC8vIGdmbTogdHJ1ZSxcclxuXHRcdFx0XHRcdC8vIHRhYmxlczogdHJ1ZSxcclxuXHRcdFx0XHRcdC8vIGJyZWFrczogdHJ1ZSxcclxuXHRcdFx0XHRcdC8vIHBlZGFudGljOiB0cnVlLFxyXG5cdFx0XHRcdFx0Ly8gc2FuaXRpemU6IHRydWUsXHJcblx0XHRcdFx0XHQvLyBzbWFydExpc3RzOiB0cnVlLFxyXG5cdFx0XHRcdFx0Ly8gc21hcnR5cGFudHM6IHRydWUsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0fSxcclxuXHRcdH0pLFxyXG5cdFx0Q29yZU1vZHVsZSxcclxuXHRdLFxyXG5cdGRlY2xhcmF0aW9uczogW1xyXG5cdFx0RWRpdG9yTW9kdWxlQ29tcG9uZW50LFxyXG5cdFx0RWRpdG9yQ29tcG9uZW50LFxyXG5cdF0sXHJcblx0ZXhwb3J0czogW1xyXG5cdFx0RWRpdG9yTW9kdWxlQ29tcG9uZW50LFxyXG5cdFx0RWRpdG9yQ29tcG9uZW50LFxyXG5cdF0sXHJcblx0cHJvdmlkZXJzOiBbXSxcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBFZGl0b3JNb2R1bGUge1xyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHBhcmVudE1vZHVsZTogRWRpdG9yTW9kdWxlXHJcblx0KSB7XHJcblx0XHRpZiAocGFyZW50TW9kdWxlKSB7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcignRWRpdG9yTW9kdWxlIGlzIGFscmVhZHkgbG9hZGVkLiBJbXBvcnQgaXQgaW4gdGhlIEFwcE1vZHVsZSBvbmx5Jyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxufVxyXG4iXX0=