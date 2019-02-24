/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var services = [
    EditorService,
];
/** @type {?} */
var components = [
    EditorModuleComponent,
    EditorComponent,
];
/** @type {?} */
var directives = [];
/** @type {?} */
var pipes = [];
/** @type {?} */
var validators = [];
/** @type {?} */
var guards = [];
var ɵ0 = {
// gfm: true,
// tables: true,
// breaks: true,
// pedantic: true,
// sanitize: true,
// smartLists: true,
// smartypants: true,
};
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
                    providers: tslib_1.__spread(services),
                    declarations: tslib_1.__spread(components),
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
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2VkaXRvci8iLCJzb3VyY2VzIjpbImxpYi9lZGl0b3IubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBdUIsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEYsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxjQUFjLEVBQUUsYUFBYSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQzdELE9BQU8sRUFBZ0IsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDckUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3hELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7SUFFdEQsUUFBUSxHQUFHO0lBQ2hCLGFBQWE7Q0FDYjs7SUFFSyxVQUFVLEdBQUc7SUFDbEIscUJBQXFCO0lBQ3JCLGVBQWU7Q0FDZjs7SUFFSyxVQUFVLEdBQUcsRUFDbEI7O0lBRUssS0FBSyxHQUFHLEVBQ2I7O0lBRUssVUFBVSxHQUFHLEVBQ2xCOztJQUVLLE1BQU0sR0FBRyxFQUNkO1NBVWE7QUFDVCxhQUFhO0FBQ2IsZ0JBQWdCO0FBQ2hCLGdCQUFnQjtBQUNoQixrQkFBa0I7QUFDbEIsa0JBQWtCO0FBQ2xCLG9CQUFvQjtBQUNwQixxQkFBcUI7Q0FDckI7QUFoQkw7SUFvQ0Msc0JBQ3lCLFlBQTBCO1FBRWxELElBQUksWUFBWSxFQUFFO1lBQ2pCLE1BQU0sSUFBSSxLQUFLLENBQUMsaUVBQWlFLENBQUMsQ0FBQztTQUNuRjtJQUNGLENBQUM7Ozs7O0lBRWEsb0JBQU87Ozs7SUFBckIsVUFDQyxNQUFxQjtRQUVyQixPQUFPO1lBQ04sUUFBUSxFQUFFLFlBQVk7WUFDdEIsU0FBUyxFQUFFO2dCQUNWLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFO2FBQzVDO1NBQ0QsQ0FBQztJQUNILENBQUM7O2dCQXJERCxRQUFRLFNBQUM7b0JBQ1QsT0FBTyxFQUFFO3dCQUNSLFlBQVk7d0JBQ1osV0FBVzt3QkFDWCxtQkFBbUI7d0JBQ25CLGNBQWMsQ0FBQyxPQUFPLENBQUM7NEJBQ3RCLGFBQWEsRUFBRTtnQ0FDZCxPQUFPLEVBQUUsYUFBYTtnQ0FDdEIsUUFBUSxJQVFQOzZCQUNEO3lCQUNELENBQUM7d0JBQ0YsVUFBVTt3QkFDVixhQUFhO3FCQUNiO29CQUNELFNBQVMsbUJBQ0wsUUFBUSxDQUNYO29CQUNELFlBQVksbUJBQ1IsVUFBVSxDQUNiO29CQUNELE9BQU87d0JBQ04sVUFBVTt1QkFDUCxVQUFVLENBQ2I7aUJBQ0Q7Ozs7Z0JBS3VDLFlBQVksdUJBQWpELFFBQVEsWUFBSSxRQUFROztJQWtCdkIsbUJBQUM7Q0FBQSxBQXZERCxJQXVEQztTQXJCWSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUsIE9wdGlvbmFsLCBTa2lwU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgQ29udHJvbE1vZHVsZSB9IGZyb20gJ0BkZXNpZ25yL2NvbnRyb2wnO1xyXG5pbXBvcnQgeyBDb3JlTW9kdWxlIH0gZnJvbSAnQGRlc2lnbnIvY29yZSc7XHJcbmltcG9ydCB7IE1hcmtkb3duTW9kdWxlLCBNYXJrZWRPcHRpb25zIH0gZnJvbSAnbmd4LW1hcmtkb3duJztcclxuaW1wb3J0IHsgRWRpdG9yQ29uZmlnLCBFRElUT1JfQ09ORklHIH0gZnJvbSAnLi9jb25maWcvZWRpdG9yLmNvbmZpZyc7XHJcbmltcG9ydCB7IEVkaXRvclNlcnZpY2UgfSBmcm9tICcuL2NvbmZpZy9lZGl0b3Iuc2VydmljZSc7XHJcbmltcG9ydCB7IEVkaXRvck1vZHVsZUNvbXBvbmVudCB9IGZyb20gJy4vZWRpdG9yLW1vZHVsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBFZGl0b3JDb21wb25lbnQgfSBmcm9tICcuL2VkaXRvci9lZGl0b3IuY29tcG9uZW50JztcclxuXHJcbmNvbnN0IHNlcnZpY2VzID0gW1xyXG5cdEVkaXRvclNlcnZpY2UsXHJcbl07XHJcblxyXG5jb25zdCBjb21wb25lbnRzID0gW1xyXG5cdEVkaXRvck1vZHVsZUNvbXBvbmVudCxcclxuXHRFZGl0b3JDb21wb25lbnQsXHJcbl07XHJcblxyXG5jb25zdCBkaXJlY3RpdmVzID0gW1xyXG5dO1xyXG5cclxuY29uc3QgcGlwZXMgPSBbXHJcbl07XHJcblxyXG5jb25zdCB2YWxpZGF0b3JzID0gW1xyXG5dO1xyXG5cclxuY29uc3QgZ3VhcmRzID0gW1xyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRpbXBvcnRzOiBbXHJcblx0XHRDb21tb25Nb2R1bGUsXHJcblx0XHRGb3Jtc01vZHVsZSxcclxuXHRcdFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcblx0XHRNYXJrZG93bk1vZHVsZS5mb3JSb290KHtcclxuXHRcdFx0bWFya2VkT3B0aW9uczoge1xyXG5cdFx0XHRcdHByb3ZpZGU6IE1hcmtlZE9wdGlvbnMsXHJcblx0XHRcdFx0dXNlVmFsdWU6IHtcclxuXHRcdFx0XHRcdC8vIGdmbTogdHJ1ZSxcclxuXHRcdFx0XHRcdC8vIHRhYmxlczogdHJ1ZSxcclxuXHRcdFx0XHRcdC8vIGJyZWFrczogdHJ1ZSxcclxuXHRcdFx0XHRcdC8vIHBlZGFudGljOiB0cnVlLFxyXG5cdFx0XHRcdFx0Ly8gc2FuaXRpemU6IHRydWUsXHJcblx0XHRcdFx0XHQvLyBzbWFydExpc3RzOiB0cnVlLFxyXG5cdFx0XHRcdFx0Ly8gc21hcnR5cGFudHM6IHRydWUsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0fSxcclxuXHRcdH0pLFxyXG5cdFx0Q29yZU1vZHVsZSxcclxuXHRcdENvbnRyb2xNb2R1bGUsXHJcblx0XSxcclxuXHRwcm92aWRlcnM6IFtcclxuXHRcdC4uLnNlcnZpY2VzLFxyXG5cdF0sXHJcblx0ZGVjbGFyYXRpb25zOiBbXHJcblx0XHQuLi5jb21wb25lbnRzLFxyXG5cdF0sXHJcblx0ZXhwb3J0czogW1xyXG5cdFx0Q29yZU1vZHVsZSxcclxuXHRcdC4uLmNvbXBvbmVudHMsXHJcblx0XSxcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBFZGl0b3JNb2R1bGUge1xyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHBhcmVudE1vZHVsZTogRWRpdG9yTW9kdWxlXHJcblx0KSB7XHJcblx0XHRpZiAocGFyZW50TW9kdWxlKSB7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcignRWRpdG9yTW9kdWxlIGlzIGFscmVhZHkgbG9hZGVkLiBJbXBvcnQgaXQgaW4gdGhlIEFwcE1vZHVsZSBvbmx5Jyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc3RhdGljIGZvclJvb3QoXHJcblx0XHRjb25maWc/OiBFZGl0b3JDb25maWcsXHJcblx0KTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRuZ01vZHVsZTogRWRpdG9yTW9kdWxlLFxyXG5cdFx0XHRwcm92aWRlcnM6IFtcclxuXHRcdFx0XHR7IHByb3ZpZGU6IEVESVRPUl9DT05GSUcsIHVzZVZhbHVlOiBjb25maWcgfSxcclxuXHRcdFx0XVxyXG5cdFx0fTtcclxuXHR9XHJcblxyXG59XHJcbiJdfQ==