import { __read, __spread } from "tslib";
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CoreModule } from '@designr/core';
import { DATA_CONFIG } from './config/data.config';
import { DataService } from './config/data.service';
import { DataModuleComponent } from './data-module.component';
import { MemoryModule } from './memory/memory.module';
import * as i0 from "@angular/core";
var services = [
    DataService,
];
var components = [
    DataModuleComponent,
];
var directives = [];
var pipes = [];
var validators = [];
var guards = [];
var DataModule = /** @class */ (function () {
    function DataModule(parentModule) {
        if (parentModule) {
            throw new Error('DataModule is already loaded. Import it in the AppModule only');
        }
    }
    DataModule.forRoot = function (config) {
        return {
            ngModule: DataModule,
            providers: __spread([
                { provide: DATA_CONFIG, useValue: config }
            ], MemoryModule.forRoot(DataService, config.memory).providers)
        };
    };
    DataModule.ɵmod = i0.ɵɵdefineNgModule({ type: DataModule });
    DataModule.ɵinj = i0.ɵɵdefineInjector({ factory: function DataModule_Factory(t) { return new (t || DataModule)(i0.ɵɵinject(DataModule, 12)); }, providers: __spread(services), imports: [[
                CommonModule,
                HttpClientModule,
                MemoryModule,
                CoreModule,
            ],
            MemoryModule,
            CoreModule] });
    return DataModule;
}());
export { DataModule };
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
                providers: __spread(services),
                declarations: __spread(components),
                exports: __spread([
                    MemoryModule,
                    CoreModule
                ], components),
            }]
    }], function () { return [{ type: DataModule, decorators: [{
                type: Optional
            }, {
                type: SkipSelf
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9kYXRhLyIsInNvdXJjZXMiOlsibGliL2RhdGEubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUF1QixRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMvRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDcEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDOztBQUV0RCxJQUFNLFFBQVEsR0FBRztJQUNoQixXQUFXO0NBQ1gsQ0FBQztBQUVGLElBQU0sVUFBVSxHQUFHO0lBQ2xCLG1CQUFtQjtDQUNuQixDQUFDO0FBRUYsSUFBTSxVQUFVLEdBQUcsRUFDbEIsQ0FBQztBQUVGLElBQU0sS0FBSyxHQUFHLEVBQ2IsQ0FBQztBQUVGLElBQU0sVUFBVSxHQUFHLEVBQ2xCLENBQUM7QUFFRixJQUFNLE1BQU0sR0FBRyxFQUNkLENBQUM7QUFFRjtJQXNCQyxvQkFDeUIsWUFBd0I7UUFFaEQsSUFBSSxZQUFZLEVBQUU7WUFDakIsTUFBTSxJQUFJLEtBQUssQ0FBQywrREFBK0QsQ0FBQyxDQUFDO1NBQ2pGO0lBQ0YsQ0FBQztJQUVhLGtCQUFPLEdBQXJCLFVBQ0MsTUFBbUI7UUFFbkIsT0FBTztZQUNOLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFNBQVM7Z0JBQ1IsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUU7ZUFDdkMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsQ0FDN0Q7U0FDRCxDQUFDO0lBQ0gsQ0FBQztrREFwQlcsVUFBVTt1R0FBVixVQUFVLGNBR2lCLFVBQVUsK0JBZjdDLFFBQVEsYUFQSDtnQkFDUixZQUFZO2dCQUNaLGdCQUFnQjtnQkFDaEIsWUFBWTtnQkFDWixVQUFVO2FBQ1Y7WUFRQSxZQUFZO1lBQ1osVUFBVTtxQkE1Q1o7Q0F1RUMsQUExQ0QsSUEwQ0M7U0F0QlksVUFBVTt3RkFBVixVQUFVLG1CQW5DdEIsbUJBQW1CLGFBaUJsQixZQUFZO1FBQ1osZ0JBQWdCO1FBQ2hCLFlBQVk7UUFDWixVQUFVLGFBU1YsWUFBWTtRQUNaLFVBQVU7UUE5QlgsbUJBQW1CO2tEQW1DUCxVQUFVO2NBcEJ0QixRQUFRO2VBQUM7Z0JBQ1QsT0FBTyxFQUFFO29CQUNSLFlBQVk7b0JBQ1osZ0JBQWdCO29CQUNoQixZQUFZO29CQUNaLFVBQVU7aUJBQ1Y7Z0JBQ0QsU0FBUyxXQUNMLFFBQVEsQ0FDWDtnQkFDRCxZQUFZLFdBQ1IsVUFBVSxDQUNiO2dCQUNELE9BQU87b0JBQ04sWUFBWTtvQkFDWixVQUFVO21CQUNQLFVBQVUsQ0FDYjthQUNEO3NDQUt1QyxVQUFVO3NCQUEvQyxRQUFROztzQkFBSSxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUsIE9wdGlvbmFsLCBTa2lwU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb3JlTW9kdWxlIH0gZnJvbSAnQGRlc2lnbnIvY29yZSc7XHJcbmltcG9ydCB7IERhdGFDb25maWcsIERBVEFfQ09ORklHIH0gZnJvbSAnLi9jb25maWcvZGF0YS5jb25maWcnO1xyXG5pbXBvcnQgeyBEYXRhU2VydmljZSB9IGZyb20gJy4vY29uZmlnL2RhdGEuc2VydmljZSc7XHJcbmltcG9ydCB7IERhdGFNb2R1bGVDb21wb25lbnQgfSBmcm9tICcuL2RhdGEtbW9kdWxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1lbW9yeU1vZHVsZSB9IGZyb20gJy4vbWVtb3J5L21lbW9yeS5tb2R1bGUnO1xyXG5cclxuY29uc3Qgc2VydmljZXMgPSBbXHJcblx0RGF0YVNlcnZpY2UsXHJcbl07XHJcblxyXG5jb25zdCBjb21wb25lbnRzID0gW1xyXG5cdERhdGFNb2R1bGVDb21wb25lbnQsXHJcbl07XHJcblxyXG5jb25zdCBkaXJlY3RpdmVzID0gW1xyXG5dO1xyXG5cclxuY29uc3QgcGlwZXMgPSBbXHJcbl07XHJcblxyXG5jb25zdCB2YWxpZGF0b3JzID0gW1xyXG5dO1xyXG5cclxuY29uc3QgZ3VhcmRzID0gW1xyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRpbXBvcnRzOiBbXHJcblx0XHRDb21tb25Nb2R1bGUsXHJcblx0XHRIdHRwQ2xpZW50TW9kdWxlLFxyXG5cdFx0TWVtb3J5TW9kdWxlLFxyXG5cdFx0Q29yZU1vZHVsZSxcclxuXHRdLFxyXG5cdHByb3ZpZGVyczogW1xyXG5cdFx0Li4uc2VydmljZXMsXHJcblx0XSxcclxuXHRkZWNsYXJhdGlvbnM6IFtcclxuXHRcdC4uLmNvbXBvbmVudHMsXHJcblx0XSxcclxuXHRleHBvcnRzOiBbXHJcblx0XHRNZW1vcnlNb2R1bGUsXHJcblx0XHRDb3JlTW9kdWxlLFxyXG5cdFx0Li4uY29tcG9uZW50cyxcclxuXHRdLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIERhdGFNb2R1bGUge1xyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHBhcmVudE1vZHVsZTogRGF0YU1vZHVsZVxyXG5cdCkge1xyXG5cdFx0aWYgKHBhcmVudE1vZHVsZSkge1xyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0RhdGFNb2R1bGUgaXMgYWxyZWFkeSBsb2FkZWQuIEltcG9ydCBpdCBpbiB0aGUgQXBwTW9kdWxlIG9ubHknKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgZm9yUm9vdChcclxuXHRcdGNvbmZpZz86IERhdGFDb25maWcsXHJcblx0KTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRuZ01vZHVsZTogRGF0YU1vZHVsZSxcclxuXHRcdFx0cHJvdmlkZXJzOiBbXHJcblx0XHRcdFx0eyBwcm92aWRlOiBEQVRBX0NPTkZJRywgdXNlVmFsdWU6IGNvbmZpZyB9LFxyXG5cdFx0XHRcdC4uLk1lbW9yeU1vZHVsZS5mb3JSb290KERhdGFTZXJ2aWNlLCBjb25maWcubWVtb3J5KS5wcm92aWRlcnNcclxuXHRcdFx0XVxyXG5cdFx0fTtcclxuXHR9XHJcblxyXG59XHJcbiJdfQ==