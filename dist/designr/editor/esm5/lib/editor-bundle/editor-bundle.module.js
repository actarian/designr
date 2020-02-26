import { __read, __spread } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ControlModule } from '@designr/control';
import { CoreModule } from '@designr/core';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';
import { EditorRootComponent } from './editor-root.component';
import * as i0 from "@angular/core";
import * as i1 from "ngx-markdown";
var services = [];
var components = [
    EditorRootComponent,
];
var directives = [];
var pipes = [];
var validators = [];
var guards = [];
var EditorBundleModule = /** @class */ (function () {
    function EditorBundleModule(parentModule) {
        if (parentModule) {
            throw new Error('EditorBundleModule is already loaded. Import it in the AppModule only');
        }
    }
    EditorBundleModule.ɵmod = i0.ɵɵdefineNgModule({ type: EditorBundleModule });
    EditorBundleModule.ɵinj = i0.ɵɵdefineInjector({ factory: function EditorBundleModule_Factory(t) { return new (t || EditorBundleModule)(i0.ɵɵinject(EditorBundleModule, 12)); }, providers: __spread([
            { provide: 'LAZY_ROOT_COMPONENT', useValue: EditorRootComponent }
        ], services), imports: [[
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
    return EditorBundleModule;
}());
export { EditorBundleModule };
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
                providers: __spread([
                    { provide: 'LAZY_ROOT_COMPONENT', useValue: EditorRootComponent }
                ], services),
                declarations: __spread([
                    EditorRootComponent
                ], components),
                entryComponents: [
                    EditorRootComponent,
                ],
                exports: __spread(components),
            }]
    }], function () { return [{ type: EditorBundleModule, decorators: [{
                type: Optional
            }, {
                type: SkipSelf
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLWJ1bmRsZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9lZGl0b3IvIiwic291cmNlcyI6WyJsaWIvZWRpdG9yLWJ1bmRsZS9lZGl0b3ItYnVuZGxlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxhQUFhLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDN0QsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7OztBQUU5RCxJQUFNLFFBQVEsR0FBRyxFQUNoQixDQUFDO0FBRUYsSUFBTSxVQUFVLEdBQUc7SUFDbEIsbUJBQW1CO0NBQ25CLENBQUM7QUFFRixJQUFNLFVBQVUsR0FBRyxFQUNsQixDQUFDO0FBRUYsSUFBTSxLQUFLLEdBQUcsRUFDYixDQUFDO0FBRUYsSUFBTSxVQUFVLEdBQUcsRUFDbEIsQ0FBQztBQUVGLElBQU0sTUFBTSxHQUFHLEVBQ2QsQ0FBQztBQUVGO0lBd0NDLDRCQUN5QixZQUFnQztRQUV4RCxJQUFJLFlBQVksRUFBRTtZQUNqQixNQUFNLElBQUksS0FBSyxDQUFDLHVFQUF1RSxDQUFDLENBQUM7U0FDekY7SUFDRixDQUFDOzBEQVJXLGtCQUFrQjt1SEFBbEIsa0JBQWtCLGNBR1Msa0JBQWtCO1lBbEJ4RCxFQUFFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxRQUFRLEVBQUUsbUJBQW1CLEVBQUU7V0FDOUQsUUFBUSxhQXZCSDtnQkFDUixZQUFZO2dCQUNaLFdBQVc7Z0JBQ1gsbUJBQW1CO2dCQUNuQixjQUFjLENBQUMsT0FBTyxDQUFDO29CQUN0QixhQUFhLEVBQUU7d0JBQ2QsT0FBTyxFQUFFLGFBQWE7d0JBQ3RCLFFBQVEsRUFBRTt3QkFDVCxhQUFhO3dCQUNiLGdCQUFnQjt3QkFDaEIsZ0JBQWdCO3dCQUNoQixrQkFBa0I7d0JBQ2xCLGtCQUFrQjt3QkFDbEIsb0JBQW9CO3dCQUNwQixxQkFBcUI7eUJBQ3JCO3FCQUNEO2lCQUNELENBQUM7Z0JBQ0YsVUFBVTtnQkFDVixhQUFhO2FBQ2I7NkJBaERGO0NBMkVDLEFBaERELElBZ0RDO1NBVlksa0JBQWtCO3dGQUFsQixrQkFBa0IsbUJBWDdCLG1CQUFtQjtRQTFDcEIsbUJBQW1CLGFBaUJsQixZQUFZO1FBQ1osV0FBVztRQUNYLG1CQUFtQixxQkFlbkIsVUFBVTtRQUNWLGFBQWEsYUFuQ2QsbUJBQW1CO2tEQXFEUCxrQkFBa0I7Y0F0QzlCLFFBQVE7ZUFBQztnQkFDVCxPQUFPLEVBQUU7b0JBQ1IsWUFBWTtvQkFDWixXQUFXO29CQUNYLG1CQUFtQjtvQkFDbkIsY0FBYyxDQUFDLE9BQU8sQ0FBQzt3QkFDdEIsYUFBYSxFQUFFOzRCQUNkLE9BQU8sRUFBRSxhQUFhOzRCQUN0QixRQUFRLEVBQUU7NEJBQ1QsYUFBYTs0QkFDYixnQkFBZ0I7NEJBQ2hCLGdCQUFnQjs0QkFDaEIsa0JBQWtCOzRCQUNsQixrQkFBa0I7NEJBQ2xCLG9CQUFvQjs0QkFDcEIscUJBQXFCOzZCQUNyQjt5QkFDRDtxQkFDRCxDQUFDO29CQUNGLFVBQVU7b0JBQ1YsYUFBYTtpQkFDYjtnQkFDRCxTQUFTO29CQUNSLEVBQUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLFFBQVEsRUFBRSxtQkFBbUIsRUFBRTttQkFDOUQsUUFBUSxDQUNYO2dCQUNELFlBQVk7b0JBQ1gsbUJBQW1CO21CQUNoQixVQUFVLENBQ2I7Z0JBQ0QsZUFBZSxFQUFFO29CQUNoQixtQkFBbUI7aUJBQ25CO2dCQUNELE9BQU8sV0FDSCxVQUFVLENBQ2I7YUFDRDtzQ0FLdUMsa0JBQWtCO3NCQUF2RCxRQUFROztzQkFBSSxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmdNb2R1bGUsIE9wdGlvbmFsLCBTa2lwU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgQ29udHJvbE1vZHVsZSB9IGZyb20gJ0BkZXNpZ25yL2NvbnRyb2wnO1xyXG5pbXBvcnQgeyBDb3JlTW9kdWxlIH0gZnJvbSAnQGRlc2lnbnIvY29yZSc7XHJcbmltcG9ydCB7IE1hcmtkb3duTW9kdWxlLCBNYXJrZWRPcHRpb25zIH0gZnJvbSAnbmd4LW1hcmtkb3duJztcclxuaW1wb3J0IHsgRWRpdG9yUm9vdENvbXBvbmVudCB9IGZyb20gJy4vZWRpdG9yLXJvb3QuY29tcG9uZW50JztcclxuXHJcbmNvbnN0IHNlcnZpY2VzID0gW1xyXG5dO1xyXG5cclxuY29uc3QgY29tcG9uZW50cyA9IFtcclxuXHRFZGl0b3JSb290Q29tcG9uZW50LFxyXG5dO1xyXG5cclxuY29uc3QgZGlyZWN0aXZlcyA9IFtcclxuXTtcclxuXHJcbmNvbnN0IHBpcGVzID0gW1xyXG5dO1xyXG5cclxuY29uc3QgdmFsaWRhdG9ycyA9IFtcclxuXTtcclxuXHJcbmNvbnN0IGd1YXJkcyA9IFtcclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcblx0aW1wb3J0czogW1xyXG5cdFx0Q29tbW9uTW9kdWxlLFxyXG5cdFx0Rm9ybXNNb2R1bGUsXHJcblx0XHRSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG5cdFx0TWFya2Rvd25Nb2R1bGUuZm9yUm9vdCh7XHJcblx0XHRcdG1hcmtlZE9wdGlvbnM6IHtcclxuXHRcdFx0XHRwcm92aWRlOiBNYXJrZWRPcHRpb25zLFxyXG5cdFx0XHRcdHVzZVZhbHVlOiB7XHJcblx0XHRcdFx0XHQvLyBnZm06IHRydWUsXHJcblx0XHRcdFx0XHQvLyB0YWJsZXM6IHRydWUsXHJcblx0XHRcdFx0XHQvLyBicmVha3M6IHRydWUsXHJcblx0XHRcdFx0XHQvLyBwZWRhbnRpYzogdHJ1ZSxcclxuXHRcdFx0XHRcdC8vIHNhbml0aXplOiB0cnVlLFxyXG5cdFx0XHRcdFx0Ly8gc21hcnRMaXN0czogdHJ1ZSxcclxuXHRcdFx0XHRcdC8vIHNtYXJ0eXBhbnRzOiB0cnVlLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdH0sXHJcblx0XHR9KSxcclxuXHRcdENvcmVNb2R1bGUsXHJcblx0XHRDb250cm9sTW9kdWxlLFxyXG5cdF0sXHJcblx0cHJvdmlkZXJzOiBbXHJcblx0XHR7IHByb3ZpZGU6ICdMQVpZX1JPT1RfQ09NUE9ORU5UJywgdXNlVmFsdWU6IEVkaXRvclJvb3RDb21wb25lbnQgfSxcclxuXHRcdC4uLnNlcnZpY2VzLFxyXG5cdF0sXHJcblx0ZGVjbGFyYXRpb25zOiBbXHJcblx0XHRFZGl0b3JSb290Q29tcG9uZW50LFxyXG5cdFx0Li4uY29tcG9uZW50cyxcclxuXHRdLFxyXG5cdGVudHJ5Q29tcG9uZW50czogW1xyXG5cdFx0RWRpdG9yUm9vdENvbXBvbmVudCxcclxuXHRdLFxyXG5cdGV4cG9ydHM6IFtcclxuXHRcdC4uLmNvbXBvbmVudHMsXHJcblx0XSxcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBFZGl0b3JCdW5kbGVNb2R1bGUge1xyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHBhcmVudE1vZHVsZTogRWRpdG9yQnVuZGxlTW9kdWxlXHJcblx0KSB7XHJcblx0XHRpZiAocGFyZW50TW9kdWxlKSB7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcignRWRpdG9yQnVuZGxlTW9kdWxlIGlzIGFscmVhZHkgbG9hZGVkLiBJbXBvcnQgaXQgaW4gdGhlIEFwcE1vZHVsZSBvbmx5Jyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxufVxyXG4iXX0=