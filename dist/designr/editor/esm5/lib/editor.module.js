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
    EditorModule.ctorParameters = function () { return [
        { type: EditorModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
    ]; };
    return EditorModule;
}());
export { EditorModule };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2VkaXRvci8iLCJzb3VyY2VzIjpbImxpYi9lZGl0b3IubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxjQUFjLEVBQUUsYUFBYSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQzdELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztTQVc5QztBQUNULGFBQWE7QUFDYixnQkFBZ0I7QUFDaEIsZ0JBQWdCO0FBQ2hCLGtCQUFrQjtBQUNsQixrQkFBa0I7QUFDbEIsb0JBQW9CO0FBQ3BCLHFCQUFxQjtDQUNyQjtBQWpCTDtJQW1DQyxzQkFDeUIsWUFBMEI7UUFFbEQsSUFBSSxZQUFZLEVBQUU7WUFDakIsTUFBTSxJQUFJLEtBQUssQ0FBQyxpRUFBaUUsQ0FBQyxDQUFDO1NBQ25GO0lBQ0YsQ0FBQzs7Z0JBekNELFFBQVEsU0FBQztvQkFDVCxPQUFPLEVBQUU7d0JBQ1IsWUFBWTt3QkFDWixnQkFBZ0I7d0JBQ2hCLFdBQVc7d0JBQ1gsbUJBQW1CO3dCQUNuQixjQUFjLENBQUMsT0FBTyxDQUFDOzRCQUN0QixhQUFhLEVBQUU7Z0NBQ2QsT0FBTyxFQUFFLGFBQWE7Z0NBQ3RCLFFBQVEsSUFRUDs2QkFDRDt5QkFDRCxDQUFDO3dCQUNGLFVBQVU7cUJBQ1Y7b0JBQ0QsWUFBWSxFQUFFO3dCQUNiLHFCQUFxQjt3QkFDckIsZUFBZTtxQkFDZjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1IscUJBQXFCO3dCQUNyQixlQUFlO3FCQUNmO29CQUNELFNBQVMsRUFBRSxFQUFFO2lCQUNiOzs7O2dCQUt1QyxZQUFZLHVCQUFqRCxRQUFRLFlBQUksUUFBUTs7SUFPdkIsbUJBQUM7Q0FBQSxBQTNDRCxJQTJDQztTQVZZLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSwgT3B0aW9uYWwsIFNraXBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBDb3JlTW9kdWxlIH0gZnJvbSAnQGRlc2lnbnIvY29yZSc7XHJcbmltcG9ydCB7IE1hcmtkb3duTW9kdWxlLCBNYXJrZWRPcHRpb25zIH0gZnJvbSAnbmd4LW1hcmtkb3duJztcclxuaW1wb3J0IHsgRWRpdG9yTW9kdWxlQ29tcG9uZW50IH0gZnJvbSAnLi9lZGl0b3ItbW9kdWxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEVkaXRvckNvbXBvbmVudCB9IGZyb20gJy4vZWRpdG9yL2VkaXRvci5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRpbXBvcnRzOiBbXHJcblx0XHRDb21tb25Nb2R1bGUsXHJcblx0XHRIdHRwQ2xpZW50TW9kdWxlLFxyXG5cdFx0Rm9ybXNNb2R1bGUsXHJcblx0XHRSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG5cdFx0TWFya2Rvd25Nb2R1bGUuZm9yUm9vdCh7XHJcblx0XHRcdG1hcmtlZE9wdGlvbnM6IHtcclxuXHRcdFx0XHRwcm92aWRlOiBNYXJrZWRPcHRpb25zLFxyXG5cdFx0XHRcdHVzZVZhbHVlOiB7XHJcblx0XHRcdFx0XHQvLyBnZm06IHRydWUsXHJcblx0XHRcdFx0XHQvLyB0YWJsZXM6IHRydWUsXHJcblx0XHRcdFx0XHQvLyBicmVha3M6IHRydWUsXHJcblx0XHRcdFx0XHQvLyBwZWRhbnRpYzogdHJ1ZSxcclxuXHRcdFx0XHRcdC8vIHNhbml0aXplOiB0cnVlLFxyXG5cdFx0XHRcdFx0Ly8gc21hcnRMaXN0czogdHJ1ZSxcclxuXHRcdFx0XHRcdC8vIHNtYXJ0eXBhbnRzOiB0cnVlLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdH0sXHJcblx0XHR9KSxcclxuXHRcdENvcmVNb2R1bGUsXHJcblx0XSxcclxuXHRkZWNsYXJhdGlvbnM6IFtcclxuXHRcdEVkaXRvck1vZHVsZUNvbXBvbmVudCxcclxuXHRcdEVkaXRvckNvbXBvbmVudCxcclxuXHRdLFxyXG5cdGV4cG9ydHM6IFtcclxuXHRcdEVkaXRvck1vZHVsZUNvbXBvbmVudCxcclxuXHRcdEVkaXRvckNvbXBvbmVudCxcclxuXHRdLFxyXG5cdHByb3ZpZGVyczogW10sXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgRWRpdG9yTW9kdWxlIHtcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwYXJlbnRNb2R1bGU6IEVkaXRvck1vZHVsZVxyXG5cdCkge1xyXG5cdFx0aWYgKHBhcmVudE1vZHVsZSkge1xyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0VkaXRvck1vZHVsZSBpcyBhbHJlYWR5IGxvYWRlZC4gSW1wb3J0IGl0IGluIHRoZSBBcHBNb2R1bGUgb25seScpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcbn1cclxuIl19