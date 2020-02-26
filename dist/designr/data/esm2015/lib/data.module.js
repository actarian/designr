import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CoreModule } from '@designr/core';
import { DATA_CONFIG } from './config/data.config';
import { DataService } from './config/data.service';
import { DataModuleComponent } from './data-module.component';
import { MemoryModule } from './memory/memory.module';
import * as i0 from "@angular/core";
const services = [
    DataService,
];
const components = [
    DataModuleComponent,
];
const directives = [];
const pipes = [];
const validators = [];
const guards = [];
export class DataModule {
    constructor(parentModule) {
        if (parentModule) {
            throw new Error('DataModule is already loaded. Import it in the AppModule only');
        }
    }
    static forRoot(config) {
        return {
            ngModule: DataModule,
            providers: [
                { provide: DATA_CONFIG, useValue: config },
                ...MemoryModule.forRoot(DataService, config.memory).providers
            ]
        };
    }
}
DataModule.ɵmod = i0.ɵɵdefineNgModule({ type: DataModule });
DataModule.ɵinj = i0.ɵɵdefineInjector({ factory: function DataModule_Factory(t) { return new (t || DataModule)(i0.ɵɵinject(DataModule, 12)); }, providers: [
        ...services,
    ], imports: [[
            CommonModule,
            HttpClientModule,
            MemoryModule,
            CoreModule,
        ],
        MemoryModule,
        CoreModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(DataModule, { declarations: [DataModuleComponent], imports: [CommonModule,
        HttpClientModule,
        MemoryModule,
        CoreModule], exports: [MemoryModule,
        CoreModule,
        DataModuleComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DataModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    HttpClientModule,
                    MemoryModule,
                    CoreModule,
                ],
                providers: [
                    ...services,
                ],
                declarations: [
                    ...components,
                ],
                exports: [
                    MemoryModule,
                    CoreModule,
                    ...components,
                ],
            }]
    }], function () { return [{ type: DataModule, decorators: [{
                type: Optional
            }, {
                type: SkipSelf
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9kYXRhLyIsInNvdXJjZXMiOlsibGliL2RhdGEubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQXVCLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7O0FBRXRELE1BQU0sUUFBUSxHQUFHO0lBQ2hCLFdBQVc7Q0FDWCxDQUFDO0FBRUYsTUFBTSxVQUFVLEdBQUc7SUFDbEIsbUJBQW1CO0NBQ25CLENBQUM7QUFFRixNQUFNLFVBQVUsR0FBRyxFQUNsQixDQUFDO0FBRUYsTUFBTSxLQUFLLEdBQUcsRUFDYixDQUFDO0FBRUYsTUFBTSxVQUFVLEdBQUcsRUFDbEIsQ0FBQztBQUVGLE1BQU0sTUFBTSxHQUFHLEVBQ2QsQ0FBQztBQXNCRixNQUFNLE9BQU8sVUFBVTtJQUV0QixZQUN5QixZQUF3QjtRQUVoRCxJQUFJLFlBQVksRUFBRTtZQUNqQixNQUFNLElBQUksS0FBSyxDQUFDLCtEQUErRCxDQUFDLENBQUM7U0FDakY7SUFDRixDQUFDO0lBRU0sTUFBTSxDQUFDLE9BQU8sQ0FDcEIsTUFBbUI7UUFFbkIsT0FBTztZQUNOLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFNBQVMsRUFBRTtnQkFDVixFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRTtnQkFDMUMsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUzthQUM3RDtTQUNELENBQUM7SUFDSCxDQUFDOzs4Q0FwQlcsVUFBVTttR0FBVixVQUFVLGNBR2lCLFVBQVUsc0JBaEJ0QztRQUNWLEdBQUcsUUFBUTtLQUNYLFlBUlE7WUFDUixZQUFZO1lBQ1osZ0JBQWdCO1lBQ2hCLFlBQVk7WUFDWixVQUFVO1NBQ1Y7UUFRQSxZQUFZO1FBQ1osVUFBVTt3RkFLQyxVQUFVLG1CQW5DdEIsbUJBQW1CLGFBaUJsQixZQUFZO1FBQ1osZ0JBQWdCO1FBQ2hCLFlBQVk7UUFDWixVQUFVLGFBU1YsWUFBWTtRQUNaLFVBQVU7UUE5QlgsbUJBQW1CO2tEQW1DUCxVQUFVO2NBcEJ0QixRQUFRO2VBQUM7Z0JBQ1QsT0FBTyxFQUFFO29CQUNSLFlBQVk7b0JBQ1osZ0JBQWdCO29CQUNoQixZQUFZO29CQUNaLFVBQVU7aUJBQ1Y7Z0JBQ0QsU0FBUyxFQUFFO29CQUNWLEdBQUcsUUFBUTtpQkFDWDtnQkFDRCxZQUFZLEVBQUU7b0JBQ2IsR0FBRyxVQUFVO2lCQUNiO2dCQUNELE9BQU8sRUFBRTtvQkFDUixZQUFZO29CQUNaLFVBQVU7b0JBQ1YsR0FBRyxVQUFVO2lCQUNiO2FBQ0Q7c0NBS3VDLFVBQVU7c0JBQS9DLFFBQVE7O3NCQUFJLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSwgT3B0aW9uYWwsIFNraXBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvcmVNb2R1bGUgfSBmcm9tICdAZGVzaWduci9jb3JlJztcclxuaW1wb3J0IHsgRGF0YUNvbmZpZywgREFUQV9DT05GSUcgfSBmcm9tICcuL2NvbmZpZy9kYXRhLmNvbmZpZyc7XHJcbmltcG9ydCB7IERhdGFTZXJ2aWNlIH0gZnJvbSAnLi9jb25maWcvZGF0YS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRGF0YU1vZHVsZUNvbXBvbmVudCB9IGZyb20gJy4vZGF0YS1tb2R1bGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTWVtb3J5TW9kdWxlIH0gZnJvbSAnLi9tZW1vcnkvbWVtb3J5Lm1vZHVsZSc7XHJcblxyXG5jb25zdCBzZXJ2aWNlcyA9IFtcclxuXHREYXRhU2VydmljZSxcclxuXTtcclxuXHJcbmNvbnN0IGNvbXBvbmVudHMgPSBbXHJcblx0RGF0YU1vZHVsZUNvbXBvbmVudCxcclxuXTtcclxuXHJcbmNvbnN0IGRpcmVjdGl2ZXMgPSBbXHJcbl07XHJcblxyXG5jb25zdCBwaXBlcyA9IFtcclxuXTtcclxuXHJcbmNvbnN0IHZhbGlkYXRvcnMgPSBbXHJcbl07XHJcblxyXG5jb25zdCBndWFyZHMgPSBbXHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG5cdGltcG9ydHM6IFtcclxuXHRcdENvbW1vbk1vZHVsZSxcclxuXHRcdEh0dHBDbGllbnRNb2R1bGUsXHJcblx0XHRNZW1vcnlNb2R1bGUsXHJcblx0XHRDb3JlTW9kdWxlLFxyXG5cdF0sXHJcblx0cHJvdmlkZXJzOiBbXHJcblx0XHQuLi5zZXJ2aWNlcyxcclxuXHRdLFxyXG5cdGRlY2xhcmF0aW9uczogW1xyXG5cdFx0Li4uY29tcG9uZW50cyxcclxuXHRdLFxyXG5cdGV4cG9ydHM6IFtcclxuXHRcdE1lbW9yeU1vZHVsZSxcclxuXHRcdENvcmVNb2R1bGUsXHJcblx0XHQuLi5jb21wb25lbnRzLFxyXG5cdF0sXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgRGF0YU1vZHVsZSB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0QE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcGFyZW50TW9kdWxlOiBEYXRhTW9kdWxlXHJcblx0KSB7XHJcblx0XHRpZiAocGFyZW50TW9kdWxlKSB7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcignRGF0YU1vZHVsZSBpcyBhbHJlYWR5IGxvYWRlZC4gSW1wb3J0IGl0IGluIHRoZSBBcHBNb2R1bGUgb25seScpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHVibGljIHN0YXRpYyBmb3JSb290KFxyXG5cdFx0Y29uZmlnPzogRGF0YUNvbmZpZyxcclxuXHQpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdG5nTW9kdWxlOiBEYXRhTW9kdWxlLFxyXG5cdFx0XHRwcm92aWRlcnM6IFtcclxuXHRcdFx0XHR7IHByb3ZpZGU6IERBVEFfQ09ORklHLCB1c2VWYWx1ZTogY29uZmlnIH0sXHJcblx0XHRcdFx0Li4uTWVtb3J5TW9kdWxlLmZvclJvb3QoRGF0YVNlcnZpY2UsIGNvbmZpZy5tZW1vcnkpLnByb3ZpZGVyc1xyXG5cdFx0XHRdXHJcblx0XHR9O1xyXG5cdH1cclxuXHJcbn1cclxuIl19