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
import { EditorRootComponent } from './editor-root.component';
/** @type {?} */
var services = [];
/** @type {?} */
var components = [
    EditorRootComponent,
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
}, ɵ1 = EditorRootComponent;
var EditorLazyModule = /** @class */ (function () {
    function EditorLazyModule(parentModule) {
        if (parentModule) {
            throw new Error('EditorLazyModule is already loaded. Import it in the AppModule only');
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
                    providers: tslib_1.__spread([
                        { provide: 'LAZY_ROOT_COMPONENT', useValue: ɵ1 }
                    ], services),
                    declarations: tslib_1.__spread([
                        EditorRootComponent
                    ], components),
                    entryComponents: [
                        EditorRootComponent,
                    ],
                    exports: tslib_1.__spread([
                        CoreModule
                    ], components),
                },] }
    ];
    /** @nocollapse */
    EditorLazyModule.ctorParameters = function () { return [
        { type: EditorLazyModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
    ]; };
    return EditorLazyModule;
}());
export { EditorLazyModule };
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLWxhenkubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvZWRpdG9yLyIsInNvdXJjZXMiOlsibGliL2VkaXRvci1sYXp5L2VkaXRvci1sYXp5Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxjQUFjLEVBQUUsYUFBYSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQzdELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDOztJQUV4RCxRQUFRLEdBQUcsRUFDaEI7O0lBRUssVUFBVSxHQUFHO0lBQ2xCLG1CQUFtQjtDQUNuQjs7SUFFSyxVQUFVLEdBQUcsRUFDbEI7O0lBRUssS0FBSyxHQUFHLEVBQ2I7O0lBRUssVUFBVSxHQUFHLEVBQ2xCOztJQUVLLE1BQU0sR0FBRyxFQUNkO1NBVWE7QUFDVCxhQUFhO0FBQ2IsZ0JBQWdCO0FBQ2hCLGdCQUFnQjtBQUNoQixrQkFBa0I7QUFDbEIsa0JBQWtCO0FBQ2xCLG9CQUFvQjtBQUNwQixxQkFBcUI7Q0FDckIsT0FPeUMsbUJBQW1CO0FBdkJqRTtJQXlDQywwQkFDeUIsWUFBOEI7UUFFdEQsSUFBSSxZQUFZLEVBQUU7WUFDakIsTUFBTSxJQUFJLEtBQUssQ0FBQyxxRUFBcUUsQ0FBQyxDQUFDO1NBQ3ZGO0lBQ0YsQ0FBQzs7Z0JBL0NELFFBQVEsU0FBQztvQkFDVCxPQUFPLEVBQUU7d0JBQ1IsWUFBWTt3QkFDWixXQUFXO3dCQUNYLG1CQUFtQjt3QkFDbkIsY0FBYyxDQUFDLE9BQU8sQ0FBQzs0QkFDdEIsYUFBYSxFQUFFO2dDQUNkLE9BQU8sRUFBRSxhQUFhO2dDQUN0QixRQUFRLElBUVA7NkJBQ0Q7eUJBQ0QsQ0FBQzt3QkFDRixVQUFVO3dCQUNWLGFBQWE7cUJBQ2I7b0JBQ0QsU0FBUzt3QkFDUixFQUFFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxRQUFRLElBQXFCLEVBQUU7dUJBQzlELFFBQVEsQ0FDWDtvQkFDRCxZQUFZO3dCQUNYLG1CQUFtQjt1QkFDaEIsVUFBVSxDQUNiO29CQUNELGVBQWUsRUFBRTt3QkFDaEIsbUJBQW1CO3FCQUNuQjtvQkFDRCxPQUFPO3dCQUNOLFVBQVU7dUJBQ1AsVUFBVSxDQUNiO2lCQUNEOzs7O2dCQUt1QyxnQkFBZ0IsdUJBQXJELFFBQVEsWUFBSSxRQUFROztJQU92Qix1QkFBQztDQUFBLEFBakRELElBaURDO1NBVlksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmdNb2R1bGUsIE9wdGlvbmFsLCBTa2lwU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgQ29udHJvbE1vZHVsZSB9IGZyb20gJ0BkZXNpZ25yL2NvbnRyb2wnO1xyXG5pbXBvcnQgeyBDb3JlTW9kdWxlIH0gZnJvbSAnQGRlc2lnbnIvY29yZSc7XHJcbmltcG9ydCB7IE1hcmtkb3duTW9kdWxlLCBNYXJrZWRPcHRpb25zIH0gZnJvbSAnbmd4LW1hcmtkb3duJztcclxuaW1wb3J0IHsgRWRpdG9yUm9vdENvbXBvbmVudCB9IGZyb20gJy4vZWRpdG9yLXJvb3QuY29tcG9uZW50JztcclxuXHJcbmNvbnN0IHNlcnZpY2VzID0gW1xyXG5dO1xyXG5cclxuY29uc3QgY29tcG9uZW50cyA9IFtcclxuXHRFZGl0b3JSb290Q29tcG9uZW50LFxyXG5dO1xyXG5cclxuY29uc3QgZGlyZWN0aXZlcyA9IFtcclxuXTtcclxuXHJcbmNvbnN0IHBpcGVzID0gW1xyXG5dO1xyXG5cclxuY29uc3QgdmFsaWRhdG9ycyA9IFtcclxuXTtcclxuXHJcbmNvbnN0IGd1YXJkcyA9IFtcclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcblx0aW1wb3J0czogW1xyXG5cdFx0Q29tbW9uTW9kdWxlLFxyXG5cdFx0Rm9ybXNNb2R1bGUsXHJcblx0XHRSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG5cdFx0TWFya2Rvd25Nb2R1bGUuZm9yUm9vdCh7XHJcblx0XHRcdG1hcmtlZE9wdGlvbnM6IHtcclxuXHRcdFx0XHRwcm92aWRlOiBNYXJrZWRPcHRpb25zLFxyXG5cdFx0XHRcdHVzZVZhbHVlOiB7XHJcblx0XHRcdFx0XHQvLyBnZm06IHRydWUsXHJcblx0XHRcdFx0XHQvLyB0YWJsZXM6IHRydWUsXHJcblx0XHRcdFx0XHQvLyBicmVha3M6IHRydWUsXHJcblx0XHRcdFx0XHQvLyBwZWRhbnRpYzogdHJ1ZSxcclxuXHRcdFx0XHRcdC8vIHNhbml0aXplOiB0cnVlLFxyXG5cdFx0XHRcdFx0Ly8gc21hcnRMaXN0czogdHJ1ZSxcclxuXHRcdFx0XHRcdC8vIHNtYXJ0eXBhbnRzOiB0cnVlLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdH0sXHJcblx0XHR9KSxcclxuXHRcdENvcmVNb2R1bGUsXHJcblx0XHRDb250cm9sTW9kdWxlLFxyXG5cdF0sXHJcblx0cHJvdmlkZXJzOiBbXHJcblx0XHR7IHByb3ZpZGU6ICdMQVpZX1JPT1RfQ09NUE9ORU5UJywgdXNlVmFsdWU6IEVkaXRvclJvb3RDb21wb25lbnQgfSxcclxuXHRcdC4uLnNlcnZpY2VzLFxyXG5cdF0sXHJcblx0ZGVjbGFyYXRpb25zOiBbXHJcblx0XHRFZGl0b3JSb290Q29tcG9uZW50LFxyXG5cdFx0Li4uY29tcG9uZW50cyxcclxuXHRdLFxyXG5cdGVudHJ5Q29tcG9uZW50czogW1xyXG5cdFx0RWRpdG9yUm9vdENvbXBvbmVudCxcclxuXHRdLFxyXG5cdGV4cG9ydHM6IFtcclxuXHRcdENvcmVNb2R1bGUsXHJcblx0XHQuLi5jb21wb25lbnRzLFxyXG5cdF0sXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgRWRpdG9yTGF6eU1vZHVsZSB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0QE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcGFyZW50TW9kdWxlOiBFZGl0b3JMYXp5TW9kdWxlXHJcblx0KSB7XHJcblx0XHRpZiAocGFyZW50TW9kdWxlKSB7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcignRWRpdG9yTGF6eU1vZHVsZSBpcyBhbHJlYWR5IGxvYWRlZC4gSW1wb3J0IGl0IGluIHRoZSBBcHBNb2R1bGUgb25seScpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcbn1cclxuIl19