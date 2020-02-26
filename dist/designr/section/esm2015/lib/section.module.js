import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CoreModule } from '@designr/core';
import { SECTION_CONFIG } from './config/section.config';
import { SectionModuleComponent } from './section-module.component';
import { SectionOutletComponent } from './section/section-outlet.component';
import { SectionComponent } from './section/section.component';
import { SectionService } from './section/section.service';
import { SectionsComponent } from './section/sections.component';
import * as i0 from "@angular/core";
const services = [
    SectionService,
];
const components = [
    SectionModuleComponent,
    SectionOutletComponent,
    SectionComponent,
    SectionsComponent,
];
const directives = [];
const pipes = [];
const validators = [];
const guards = [];
export class SectionModule {
    constructor(parentModule) {
        if (parentModule) {
            throw new Error('SectionModule is already loaded. Import it in the AppModule only');
        }
    }
    static forRoot(config) {
        return {
            ngModule: SectionModule,
            providers: [{
                    provide: SECTION_CONFIG, useValue: config
                }]
        };
    }
}
SectionModule.ɵmod = i0.ɵɵdefineNgModule({ type: SectionModule });
SectionModule.ɵinj = i0.ɵɵdefineInjector({ factory: function SectionModule_Factory(t) { return new (t || SectionModule)(i0.ɵɵinject(SectionModule, 12)); }, providers: [
        ...services,
    ], imports: [[
            CommonModule,
            CoreModule,
        ],
        CoreModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SectionModule, { declarations: [SectionModuleComponent,
        SectionOutletComponent,
        SectionComponent,
        SectionsComponent], imports: [CommonModule,
        CoreModule], exports: [CoreModule,
        SectionModuleComponent,
        SectionOutletComponent,
        SectionComponent,
        SectionsComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SectionModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    CoreModule,
                ],
                providers: [
                    ...services,
                ],
                declarations: [
                    ...components,
                ],
                entryComponents: [
                    ...components,
                ],
                exports: [
                    CoreModule,
                    ...components,
                ],
            }]
    }], function () { return [{ type: SectionModule, decorators: [{
                type: Optional
            }, {
                type: SkipSelf
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VjdGlvbi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9zZWN0aW9uLyIsInNvdXJjZXMiOlsibGliL3NlY3Rpb24ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQXVCLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFpQixjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN4RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUM1RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sOEJBQThCLENBQUM7O0FBRWpFLE1BQU0sUUFBUSxHQUFHO0lBQ2hCLGNBQWM7Q0FDZCxDQUFDO0FBRUYsTUFBTSxVQUFVLEdBQUc7SUFDbEIsc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsaUJBQWlCO0NBQ2pCLENBQUM7QUFFRixNQUFNLFVBQVUsR0FBRyxFQUNsQixDQUFDO0FBRUYsTUFBTSxLQUFLLEdBQUcsRUFDYixDQUFDO0FBRUYsTUFBTSxVQUFVLEdBQUcsRUFDbEIsQ0FBQztBQUVGLE1BQU0sTUFBTSxHQUFHLEVBQ2QsQ0FBQztBQXNCRixNQUFNLE9BQU8sYUFBYTtJQUV6QixZQUN5QixZQUEyQjtRQUVuRCxJQUFJLFlBQVksRUFBRTtZQUNqQixNQUFNLElBQUksS0FBSyxDQUFDLGtFQUFrRSxDQUFDLENBQUM7U0FDcEY7SUFDRixDQUFDO0lBRU0sTUFBTSxDQUFDLE9BQU8sQ0FDcEIsTUFBc0I7UUFFdEIsT0FBTztZQUNOLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFNBQVMsRUFBRSxDQUFDO29CQUNYLE9BQU8sRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLE1BQU07aUJBQ3pDLENBQUM7U0FDRixDQUFDO0lBQ0gsQ0FBQzs7aURBbkJXLGFBQWE7eUdBQWIsYUFBYSxjQUdjLGFBQWEsc0JBbEJ6QztRQUNWLEdBQUcsUUFBUTtLQUNYLFlBTlE7WUFDUixZQUFZO1lBQ1osVUFBVTtTQUNWO1FBV0EsVUFBVTt3RkFLQyxhQUFhLG1CQXRDekIsc0JBQXNCO1FBQ3RCLHNCQUFzQjtRQUN0QixnQkFBZ0I7UUFDaEIsaUJBQWlCLGFBaUJoQixZQUFZO1FBQ1osVUFBVSxhQVlWLFVBQVU7UUFqQ1gsc0JBQXNCO1FBQ3RCLHNCQUFzQjtRQUN0QixnQkFBZ0I7UUFDaEIsaUJBQWlCO2tEQW1DTCxhQUFhO2NBcEJ6QixRQUFRO2VBQUM7Z0JBQ1QsT0FBTyxFQUFFO29CQUNSLFlBQVk7b0JBQ1osVUFBVTtpQkFDVjtnQkFDRCxTQUFTLEVBQUU7b0JBQ1YsR0FBRyxRQUFRO2lCQUNYO2dCQUNELFlBQVksRUFBRTtvQkFDYixHQUFHLFVBQVU7aUJBQ2I7Z0JBQ0QsZUFBZSxFQUFFO29CQUNoQixHQUFHLFVBQVU7aUJBQ2I7Z0JBQ0QsT0FBTyxFQUFFO29CQUNSLFVBQVU7b0JBQ1YsR0FBRyxVQUFVO2lCQUNiO2FBQ0Q7c0NBS3VDLGFBQWE7c0JBQWxELFFBQVE7O3NCQUFJLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSwgT3B0aW9uYWwsIFNraXBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvcmVNb2R1bGUgfSBmcm9tICdAZGVzaWduci9jb3JlJztcclxuaW1wb3J0IHsgU2VjdGlvbkNvbmZpZywgU0VDVElPTl9DT05GSUcgfSBmcm9tICcuL2NvbmZpZy9zZWN0aW9uLmNvbmZpZyc7XHJcbmltcG9ydCB7IFNlY3Rpb25Nb2R1bGVDb21wb25lbnQgfSBmcm9tICcuL3NlY3Rpb24tbW9kdWxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNlY3Rpb25PdXRsZXRDb21wb25lbnQgfSBmcm9tICcuL3NlY3Rpb24vc2VjdGlvbi1vdXRsZXQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU2VjdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vc2VjdGlvbi9zZWN0aW9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNlY3Rpb25TZXJ2aWNlIH0gZnJvbSAnLi9zZWN0aW9uL3NlY3Rpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IFNlY3Rpb25zQ29tcG9uZW50IH0gZnJvbSAnLi9zZWN0aW9uL3NlY3Rpb25zLmNvbXBvbmVudCc7XHJcblxyXG5jb25zdCBzZXJ2aWNlcyA9IFtcclxuXHRTZWN0aW9uU2VydmljZSxcclxuXTtcclxuXHJcbmNvbnN0IGNvbXBvbmVudHMgPSBbXHJcblx0U2VjdGlvbk1vZHVsZUNvbXBvbmVudCxcclxuXHRTZWN0aW9uT3V0bGV0Q29tcG9uZW50LFxyXG5cdFNlY3Rpb25Db21wb25lbnQsXHJcblx0U2VjdGlvbnNDb21wb25lbnQsXHJcbl07XHJcblxyXG5jb25zdCBkaXJlY3RpdmVzID0gW1xyXG5dO1xyXG5cclxuY29uc3QgcGlwZXMgPSBbXHJcbl07XHJcblxyXG5jb25zdCB2YWxpZGF0b3JzID0gW1xyXG5dO1xyXG5cclxuY29uc3QgZ3VhcmRzID0gW1xyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRpbXBvcnRzOiBbXHJcblx0XHRDb21tb25Nb2R1bGUsXHJcblx0XHRDb3JlTW9kdWxlLFxyXG5cdF0sXHJcblx0cHJvdmlkZXJzOiBbXHJcblx0XHQuLi5zZXJ2aWNlcyxcclxuXHRdLFxyXG5cdGRlY2xhcmF0aW9uczogW1xyXG5cdFx0Li4uY29tcG9uZW50cyxcclxuXHRdLFxyXG5cdGVudHJ5Q29tcG9uZW50czogW1xyXG5cdFx0Li4uY29tcG9uZW50cyxcclxuXHRdLFxyXG5cdGV4cG9ydHM6IFtcclxuXHRcdENvcmVNb2R1bGUsXHJcblx0XHQuLi5jb21wb25lbnRzLFxyXG5cdF0sXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgU2VjdGlvbk1vZHVsZSB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0QE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcGFyZW50TW9kdWxlOiBTZWN0aW9uTW9kdWxlXHJcblx0KSB7XHJcblx0XHRpZiAocGFyZW50TW9kdWxlKSB7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcignU2VjdGlvbk1vZHVsZSBpcyBhbHJlYWR5IGxvYWRlZC4gSW1wb3J0IGl0IGluIHRoZSBBcHBNb2R1bGUgb25seScpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHVibGljIHN0YXRpYyBmb3JSb290KFxyXG5cdFx0Y29uZmlnPzogU2VjdGlvbkNvbmZpZyxcclxuXHQpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdG5nTW9kdWxlOiBTZWN0aW9uTW9kdWxlLFxyXG5cdFx0XHRwcm92aWRlcnM6IFt7XHJcblx0XHRcdFx0cHJvdmlkZTogU0VDVElPTl9DT05GSUcsIHVzZVZhbHVlOiBjb25maWdcclxuXHRcdFx0fV1cclxuXHRcdH07XHJcblx0fVxyXG5cclxufVxyXG4iXX0=