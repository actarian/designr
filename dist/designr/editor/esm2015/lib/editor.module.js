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
import { EDITOR_CONFIG } from './config/editor.config';
import { EditorService } from './config/editor.service';
import { EditorModuleComponent } from './editor-module.component';
import { EditorComponent } from './editor/editor.component';
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
                { provide: EDITOR_CONFIG, useValue: config },
            ]
        };
    }
}
EditorModule.decorators = [
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
                    ...services,
                ],
                declarations: [
                    ...components,
                ],
                exports: [
                    CoreModule,
                    ...components,
                ],
            },] }
];
/** @nocollapse */
EditorModule.ctorParameters = () => [
    { type: EditorModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
];
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2VkaXRvci8iLCJzb3VyY2VzIjpbImxpYi9lZGl0b3IubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUF1QixRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRixPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxhQUFhLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDN0QsT0FBTyxFQUFnQixhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDeEQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJCQUEyQixDQUFDOztNQUV0RCxRQUFRLEdBQUc7SUFDaEIsYUFBYTtDQUNiOztNQUVLLFVBQVUsR0FBRztJQUNsQixxQkFBcUI7SUFDckIsZUFBZTtDQUNmOztNQUVLLFVBQVUsR0FBRyxFQUNsQjs7TUFFSyxLQUFLLEdBQUcsRUFDYjs7TUFFSyxVQUFVLEdBQUcsRUFDbEI7O01BRUssTUFBTSxHQUFHLEVBQ2Q7V0FVYTtBQUNULGFBQWE7QUFDYixnQkFBZ0I7QUFDaEIsZ0JBQWdCO0FBQ2hCLGtCQUFrQjtBQUNsQixrQkFBa0I7QUFDbEIsb0JBQW9CO0FBQ3BCLHFCQUFxQjtDQUNyQjtBQWtCTCxNQUFNLE9BQU8sWUFBWTs7OztJQUV4QixZQUN5QixZQUEwQjtRQUVsRCxJQUFJLFlBQVksRUFBRTtZQUNqQixNQUFNLElBQUksS0FBSyxDQUFDLGlFQUFpRSxDQUFDLENBQUM7U0FDbkY7SUFDRixDQUFDOzs7OztJQUVNLE1BQU0sQ0FBQyxPQUFPLENBQ3BCLE1BQXFCO1FBRXJCLE9BQU87WUFDTixRQUFRLEVBQUUsWUFBWTtZQUN0QixTQUFTLEVBQUU7Z0JBQ1YsRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUU7YUFDNUM7U0FDRCxDQUFDO0lBQ0gsQ0FBQzs7O1lBckRELFFBQVEsU0FBQztnQkFDVCxPQUFPLEVBQUU7b0JBQ1IsWUFBWTtvQkFDWixXQUFXO29CQUNYLG1CQUFtQjtvQkFDbkIsY0FBYyxDQUFDLE9BQU8sQ0FBQzt3QkFDdEIsYUFBYSxFQUFFOzRCQUNkLE9BQU8sRUFBRSxhQUFhOzRCQUN0QixRQUFRLElBUVA7eUJBQ0Q7cUJBQ0QsQ0FBQztvQkFDRixVQUFVO29CQUNWLGFBQWE7aUJBQ2I7Z0JBQ0QsU0FBUyxFQUFFO29CQUNWLEdBQUcsUUFBUTtpQkFDWDtnQkFDRCxZQUFZLEVBQUU7b0JBQ2IsR0FBRyxVQUFVO2lCQUNiO2dCQUNELE9BQU8sRUFBRTtvQkFDUixVQUFVO29CQUNWLEdBQUcsVUFBVTtpQkFDYjthQUNEOzs7O1lBS3VDLFlBQVksdUJBQWpELFFBQVEsWUFBSSxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUsIE9wdGlvbmFsLCBTa2lwU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgQ29udHJvbE1vZHVsZSB9IGZyb20gJ0BkZXNpZ25yL2NvbnRyb2wnO1xyXG5pbXBvcnQgeyBDb3JlTW9kdWxlIH0gZnJvbSAnQGRlc2lnbnIvY29yZSc7XHJcbmltcG9ydCB7IE1hcmtkb3duTW9kdWxlLCBNYXJrZWRPcHRpb25zIH0gZnJvbSAnbmd4LW1hcmtkb3duJztcclxuaW1wb3J0IHsgRWRpdG9yQ29uZmlnLCBFRElUT1JfQ09ORklHIH0gZnJvbSAnLi9jb25maWcvZWRpdG9yLmNvbmZpZyc7XHJcbmltcG9ydCB7IEVkaXRvclNlcnZpY2UgfSBmcm9tICcuL2NvbmZpZy9lZGl0b3Iuc2VydmljZSc7XHJcbmltcG9ydCB7IEVkaXRvck1vZHVsZUNvbXBvbmVudCB9IGZyb20gJy4vZWRpdG9yLW1vZHVsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBFZGl0b3JDb21wb25lbnQgfSBmcm9tICcuL2VkaXRvci9lZGl0b3IuY29tcG9uZW50JztcclxuXHJcbmNvbnN0IHNlcnZpY2VzID0gW1xyXG5cdEVkaXRvclNlcnZpY2UsXHJcbl07XHJcblxyXG5jb25zdCBjb21wb25lbnRzID0gW1xyXG5cdEVkaXRvck1vZHVsZUNvbXBvbmVudCxcclxuXHRFZGl0b3JDb21wb25lbnQsXHJcbl07XHJcblxyXG5jb25zdCBkaXJlY3RpdmVzID0gW1xyXG5dO1xyXG5cclxuY29uc3QgcGlwZXMgPSBbXHJcbl07XHJcblxyXG5jb25zdCB2YWxpZGF0b3JzID0gW1xyXG5dO1xyXG5cclxuY29uc3QgZ3VhcmRzID0gW1xyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRpbXBvcnRzOiBbXHJcblx0XHRDb21tb25Nb2R1bGUsXHJcblx0XHRGb3Jtc01vZHVsZSxcclxuXHRcdFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcblx0XHRNYXJrZG93bk1vZHVsZS5mb3JSb290KHtcclxuXHRcdFx0bWFya2VkT3B0aW9uczoge1xyXG5cdFx0XHRcdHByb3ZpZGU6IE1hcmtlZE9wdGlvbnMsXHJcblx0XHRcdFx0dXNlVmFsdWU6IHtcclxuXHRcdFx0XHRcdC8vIGdmbTogdHJ1ZSxcclxuXHRcdFx0XHRcdC8vIHRhYmxlczogdHJ1ZSxcclxuXHRcdFx0XHRcdC8vIGJyZWFrczogdHJ1ZSxcclxuXHRcdFx0XHRcdC8vIHBlZGFudGljOiB0cnVlLFxyXG5cdFx0XHRcdFx0Ly8gc2FuaXRpemU6IHRydWUsXHJcblx0XHRcdFx0XHQvLyBzbWFydExpc3RzOiB0cnVlLFxyXG5cdFx0XHRcdFx0Ly8gc21hcnR5cGFudHM6IHRydWUsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0fSxcclxuXHRcdH0pLFxyXG5cdFx0Q29yZU1vZHVsZSxcclxuXHRcdENvbnRyb2xNb2R1bGUsXHJcblx0XSxcclxuXHRwcm92aWRlcnM6IFtcclxuXHRcdC4uLnNlcnZpY2VzLFxyXG5cdF0sXHJcblx0ZGVjbGFyYXRpb25zOiBbXHJcblx0XHQuLi5jb21wb25lbnRzLFxyXG5cdF0sXHJcblx0ZXhwb3J0czogW1xyXG5cdFx0Q29yZU1vZHVsZSxcclxuXHRcdC4uLmNvbXBvbmVudHMsXHJcblx0XSxcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBFZGl0b3JNb2R1bGUge1xyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHBhcmVudE1vZHVsZTogRWRpdG9yTW9kdWxlXHJcblx0KSB7XHJcblx0XHRpZiAocGFyZW50TW9kdWxlKSB7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcignRWRpdG9yTW9kdWxlIGlzIGFscmVhZHkgbG9hZGVkLiBJbXBvcnQgaXQgaW4gdGhlIEFwcE1vZHVsZSBvbmx5Jyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc3RhdGljIGZvclJvb3QoXHJcblx0XHRjb25maWc/OiBFZGl0b3JDb25maWcsXHJcblx0KTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRuZ01vZHVsZTogRWRpdG9yTW9kdWxlLFxyXG5cdFx0XHRwcm92aWRlcnM6IFtcclxuXHRcdFx0XHR7IHByb3ZpZGU6IEVESVRPUl9DT05GSUcsIHVzZVZhbHVlOiBjb25maWcgfSxcclxuXHRcdFx0XVxyXG5cdFx0fTtcclxuXHR9XHJcblxyXG59XHJcbiJdfQ==