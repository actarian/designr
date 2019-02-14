/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpClientModule } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CoreModule } from '@designr/core';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DATA_CONFIG } from './config/data.config';
import { DataService } from './config/data.service';
import { DataModuleComponent } from './data-module.component';
import { MemoryService } from './memory/memory.service';
/** @type {?} */
const modules = [
    HttpClientModule,
    HttpClientInMemoryWebApiModule,
    CoreModule,
];
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
                ...HttpClientInMemoryWebApiModule.forRoot(MemoryService, config.memory).providers
            ]
        };
    }
}
DataModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    ...modules,
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
DataModule.ctorParameters = () => [
    { type: DataModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9kYXRhLyIsInNvdXJjZXMiOlsibGliL2RhdGEubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQXVCLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDM0UsT0FBTyxFQUFjLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0seUJBQXlCLENBQUM7O01BRWxELE9BQU8sR0FBRztJQUNmLGdCQUFnQjtJQUNoQiw4QkFBOEI7SUFDOUIsVUFBVTtDQUNWOztNQUVLLFFBQVEsR0FBRztJQUNoQixXQUFXO0NBQ1g7O01BRUssVUFBVSxHQUFHO0lBQ2xCLG1CQUFtQjtDQUNuQjs7TUFFSyxVQUFVLEdBQUcsRUFDbEI7O01BRUssS0FBSyxHQUFHLEVBQ2I7O01BRUssVUFBVSxHQUFHLEVBQ2xCOztNQUVLLE1BQU0sR0FBRyxFQUNkO0FBa0JELE1BQU0sT0FBTyxVQUFVOzs7O0lBRXRCLFlBQ3lCLFlBQXdCO1FBRWhELElBQUksWUFBWSxFQUFFO1lBQ2pCLE1BQU0sSUFBSSxLQUFLLENBQUMsK0RBQStELENBQUMsQ0FBQztTQUNqRjtJQUNGLENBQUM7Ozs7O0lBRU0sTUFBTSxDQUFDLE9BQU8sQ0FDcEIsTUFBbUI7UUFFbkIsT0FBTztZQUNOLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFNBQVMsRUFBRTtnQkFDVixFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRTtnQkFDMUMsR0FBRyw4QkFBOEIsQ0FBQyxPQUFPLENBQ3hDLGFBQWEsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUM1QixDQUFDLFNBQVM7YUFDWDtTQUNELENBQUM7SUFDSCxDQUFDOzs7WUF0Q0QsUUFBUSxTQUFDO2dCQUNULE9BQU8sRUFBRTtvQkFDUixHQUFHLE9BQU87aUJBQ1Y7Z0JBQ0QsU0FBUyxFQUFFO29CQUNWLEdBQUcsUUFBUTtpQkFDWDtnQkFDRCxZQUFZLEVBQUU7b0JBQ2IsR0FBRyxVQUFVO2lCQUNiO2dCQUNELE9BQU8sRUFBRTtvQkFDUixHQUFHLE9BQU87b0JBQ1YsR0FBRyxVQUFVO2lCQUNiO2FBQ0Q7Ozs7WUFLdUMsVUFBVSx1QkFBL0MsUUFBUSxZQUFJLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSwgT3B0aW9uYWwsIFNraXBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvcmVNb2R1bGUgfSBmcm9tICdAZGVzaWduci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudEluTWVtb3J5V2ViQXBpTW9kdWxlIH0gZnJvbSAnYW5ndWxhci1pbi1tZW1vcnktd2ViLWFwaSc7XHJcbmltcG9ydCB7IERhdGFDb25maWcsIERBVEFfQ09ORklHIH0gZnJvbSAnLi9jb25maWcvZGF0YS5jb25maWcnO1xyXG5pbXBvcnQgeyBEYXRhU2VydmljZSB9IGZyb20gJy4vY29uZmlnL2RhdGEuc2VydmljZSc7XHJcbmltcG9ydCB7IERhdGFNb2R1bGVDb21wb25lbnQgfSBmcm9tICcuL2RhdGEtbW9kdWxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1lbW9yeVNlcnZpY2UgfSBmcm9tICcuL21lbW9yeS9tZW1vcnkuc2VydmljZSc7XHJcblxyXG5jb25zdCBtb2R1bGVzID0gW1xyXG5cdEh0dHBDbGllbnRNb2R1bGUsXHJcblx0SHR0cENsaWVudEluTWVtb3J5V2ViQXBpTW9kdWxlLFxyXG5cdENvcmVNb2R1bGUsXHJcbl07XHJcblxyXG5jb25zdCBzZXJ2aWNlcyA9IFtcclxuXHREYXRhU2VydmljZSxcclxuXTtcclxuXHJcbmNvbnN0IGNvbXBvbmVudHMgPSBbXHJcblx0RGF0YU1vZHVsZUNvbXBvbmVudCxcclxuXTtcclxuXHJcbmNvbnN0IGRpcmVjdGl2ZXMgPSBbXHJcbl07XHJcblxyXG5jb25zdCBwaXBlcyA9IFtcclxuXTtcclxuXHJcbmNvbnN0IHZhbGlkYXRvcnMgPSBbXHJcbl07XHJcblxyXG5jb25zdCBndWFyZHMgPSBbXHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG5cdGltcG9ydHM6IFtcclxuXHRcdC4uLm1vZHVsZXMsXHJcblx0XSxcclxuXHRwcm92aWRlcnM6IFtcclxuXHRcdC4uLnNlcnZpY2VzLFxyXG5cdF0sXHJcblx0ZGVjbGFyYXRpb25zOiBbXHJcblx0XHQuLi5jb21wb25lbnRzLFxyXG5cdF0sXHJcblx0ZXhwb3J0czogW1xyXG5cdFx0Li4ubW9kdWxlcyxcclxuXHRcdC4uLmNvbXBvbmVudHMsXHJcblx0XSxcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBEYXRhTW9kdWxlIHtcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwYXJlbnRNb2R1bGU6IERhdGFNb2R1bGVcclxuXHQpIHtcclxuXHRcdGlmIChwYXJlbnRNb2R1bGUpIHtcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdEYXRhTW9kdWxlIGlzIGFscmVhZHkgbG9hZGVkLiBJbXBvcnQgaXQgaW4gdGhlIEFwcE1vZHVsZSBvbmx5Jyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc3RhdGljIGZvclJvb3QoXHJcblx0XHRjb25maWc/OiBEYXRhQ29uZmlnLFxyXG5cdCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0bmdNb2R1bGU6IERhdGFNb2R1bGUsXHJcblx0XHRcdHByb3ZpZGVyczogW1xyXG5cdFx0XHRcdHsgcHJvdmlkZTogREFUQV9DT05GSUcsIHVzZVZhbHVlOiBjb25maWcgfSxcclxuXHRcdFx0XHQuLi5IdHRwQ2xpZW50SW5NZW1vcnlXZWJBcGlNb2R1bGUuZm9yUm9vdChcclxuXHRcdFx0XHRcdE1lbW9yeVNlcnZpY2UsIGNvbmZpZy5tZW1vcnlcclxuXHRcdFx0XHQpLnByb3ZpZGVyc1xyXG5cdFx0XHRdXHJcblx0XHR9O1xyXG5cdH1cclxuXHJcbn1cclxuIl19