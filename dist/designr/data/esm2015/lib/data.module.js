/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CoreModule } from '@designr/core';
import { DATA_CONFIG } from './config/data.config';
import { DataService } from './config/data.service';
import { DataModuleComponent } from './data-module.component';
import { HttpClientMemoryModule } from './memory/http-client-memory.module';
/** @type {?} */
const services = [
    DataService,
];
/** @type {?} */
const components = [
    DataModuleComponent,
];
/** @type {?} */
const directives = [];
/** @type {?} */
const pipes = [];
/** @type {?} */
const validators = [];
/** @type {?} */
const guards = [];
export class DataModule {
    /**
     * @param {?} parentModule
     */
    constructor(parentModule) {
        if (parentModule) {
            throw new Error('DataModule is already loaded. Import it in the AppModule only');
        }
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    static forRoot(config) {
        return {
            ngModule: DataModule,
            providers: [
                { provide: DATA_CONFIG, useValue: config },
                ...HttpClientMemoryModule.forRoot(DataService, config.memory).providers
            ]
        };
    }
}
DataModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    HttpClientModule,
                    HttpClientMemoryModule,
                    CoreModule,
                ],
                providers: [
                    ...services,
                ],
                declarations: [
                    ...components,
                ],
                exports: [
                    HttpClientMemoryModule,
                    CoreModule,
                    ...components,
                ],
            },] }
];
/** @nocollapse */
DataModule.ctorParameters = () => [
    { type: DataModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9kYXRhLyIsInNvdXJjZXMiOlsibGliL2RhdGEubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUF1QixRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMvRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDcEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7O01BRXRFLFFBQVEsR0FBRztJQUNoQixXQUFXO0NBQ1g7O01BRUssVUFBVSxHQUFHO0lBQ2xCLG1CQUFtQjtDQUNuQjs7TUFFSyxVQUFVLEdBQUcsRUFDbEI7O01BRUssS0FBSyxHQUFHLEVBQ2I7O01BRUssVUFBVSxHQUFHLEVBQ2xCOztNQUVLLE1BQU0sR0FBRyxFQUNkO0FBc0JELE1BQU0sT0FBTyxVQUFVOzs7O0lBRXRCLFlBQ3lCLFlBQXdCO1FBRWhELElBQUksWUFBWSxFQUFFO1lBQ2pCLE1BQU0sSUFBSSxLQUFLLENBQUMsK0RBQStELENBQUMsQ0FBQztTQUNqRjtJQUNGLENBQUM7Ozs7O0lBRU0sTUFBTSxDQUFDLE9BQU8sQ0FDcEIsTUFBbUI7UUFFbkIsT0FBTztZQUNOLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFNBQVMsRUFBRTtnQkFDVixFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRTtnQkFDMUMsR0FBRyxzQkFBc0IsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTO2FBQ3ZFO1NBQ0QsQ0FBQztJQUNILENBQUM7OztZQXhDRCxRQUFRLFNBQUM7Z0JBQ1QsT0FBTyxFQUFFO29CQUNSLFlBQVk7b0JBQ1osZ0JBQWdCO29CQUNoQixzQkFBc0I7b0JBQ3RCLFVBQVU7aUJBQ1Y7Z0JBQ0QsU0FBUyxFQUFFO29CQUNWLEdBQUcsUUFBUTtpQkFDWDtnQkFDRCxZQUFZLEVBQUU7b0JBQ2IsR0FBRyxVQUFVO2lCQUNiO2dCQUNELE9BQU8sRUFBRTtvQkFDUixzQkFBc0I7b0JBQ3RCLFVBQVU7b0JBQ1YsR0FBRyxVQUFVO2lCQUNiO2FBQ0Q7Ozs7WUFLdUMsVUFBVSx1QkFBL0MsUUFBUSxZQUFJLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSwgT3B0aW9uYWwsIFNraXBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvcmVNb2R1bGUgfSBmcm9tICdAZGVzaWduci9jb3JlJztcclxuaW1wb3J0IHsgRGF0YUNvbmZpZywgREFUQV9DT05GSUcgfSBmcm9tICcuL2NvbmZpZy9kYXRhLmNvbmZpZyc7XHJcbmltcG9ydCB7IERhdGFTZXJ2aWNlIH0gZnJvbSAnLi9jb25maWcvZGF0YS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRGF0YU1vZHVsZUNvbXBvbmVudCB9IGZyb20gJy4vZGF0YS1tb2R1bGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSHR0cENsaWVudE1lbW9yeU1vZHVsZSB9IGZyb20gJy4vbWVtb3J5L2h0dHAtY2xpZW50LW1lbW9yeS5tb2R1bGUnO1xyXG5cclxuY29uc3Qgc2VydmljZXMgPSBbXHJcblx0RGF0YVNlcnZpY2UsXHJcbl07XHJcblxyXG5jb25zdCBjb21wb25lbnRzID0gW1xyXG5cdERhdGFNb2R1bGVDb21wb25lbnQsXHJcbl07XHJcblxyXG5jb25zdCBkaXJlY3RpdmVzID0gW1xyXG5dO1xyXG5cclxuY29uc3QgcGlwZXMgPSBbXHJcbl07XHJcblxyXG5jb25zdCB2YWxpZGF0b3JzID0gW1xyXG5dO1xyXG5cclxuY29uc3QgZ3VhcmRzID0gW1xyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRpbXBvcnRzOiBbXHJcblx0XHRDb21tb25Nb2R1bGUsXHJcblx0XHRIdHRwQ2xpZW50TW9kdWxlLFxyXG5cdFx0SHR0cENsaWVudE1lbW9yeU1vZHVsZSxcclxuXHRcdENvcmVNb2R1bGUsXHJcblx0XSxcclxuXHRwcm92aWRlcnM6IFtcclxuXHRcdC4uLnNlcnZpY2VzLFxyXG5cdF0sXHJcblx0ZGVjbGFyYXRpb25zOiBbXHJcblx0XHQuLi5jb21wb25lbnRzLFxyXG5cdF0sXHJcblx0ZXhwb3J0czogW1xyXG5cdFx0SHR0cENsaWVudE1lbW9yeU1vZHVsZSxcclxuXHRcdENvcmVNb2R1bGUsXHJcblx0XHQuLi5jb21wb25lbnRzLFxyXG5cdF0sXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgRGF0YU1vZHVsZSB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0QE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcGFyZW50TW9kdWxlOiBEYXRhTW9kdWxlXHJcblx0KSB7XHJcblx0XHRpZiAocGFyZW50TW9kdWxlKSB7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcignRGF0YU1vZHVsZSBpcyBhbHJlYWR5IGxvYWRlZC4gSW1wb3J0IGl0IGluIHRoZSBBcHBNb2R1bGUgb25seScpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHVibGljIHN0YXRpYyBmb3JSb290KFxyXG5cdFx0Y29uZmlnPzogRGF0YUNvbmZpZyxcclxuXHQpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdG5nTW9kdWxlOiBEYXRhTW9kdWxlLFxyXG5cdFx0XHRwcm92aWRlcnM6IFtcclxuXHRcdFx0XHR7IHByb3ZpZGU6IERBVEFfQ09ORklHLCB1c2VWYWx1ZTogY29uZmlnIH0sXHJcblx0XHRcdFx0Li4uSHR0cENsaWVudE1lbW9yeU1vZHVsZS5mb3JSb290KERhdGFTZXJ2aWNlLCBjb25maWcubWVtb3J5KS5wcm92aWRlcnNcclxuXHRcdFx0XVxyXG5cdFx0fTtcclxuXHR9XHJcblxyXG59XHJcbiJdfQ==