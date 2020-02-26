import { Inject, Injectable } from '@angular/core';
import { CoreConfig, CORE_CONFIG } from './core.config';
import * as i0 from "@angular/core";
import * as i1 from "./core.config";
var CoreService = /** @class */ (function () {
    function CoreService(options) {
        // console.log('CoreService', options);
        options = options || {};
        // options.defaultPage = (options.defaultPage || PageNotFoundComponent) as Type<PageComponent>;
        // options.notFoundPage = (options.notFoundPage || PageNotFoundComponent) as Type<PageComponent>;
        this.options = new CoreConfig(options);
    }
    CoreService.ɵfac = function CoreService_Factory(t) { return new (t || CoreService)(i0.ɵɵinject(CORE_CONFIG)); };
    CoreService.ɵprov = i0.ɵɵdefineInjectable({ token: CoreService, factory: CoreService.ɵfac, providedIn: 'root' });
    return CoreService;
}());
export { CoreService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CoreService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.CoreConfig, decorators: [{
                type: Inject,
                args: [CORE_CONFIG]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9jb25maWcvY29yZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFFeEQ7SUFPQyxxQkFDc0IsT0FBbUI7UUFFeEMsdUNBQXVDO1FBQ3ZDLE9BQU8sR0FBRyxPQUFPLElBQUksRUFBRSxDQUFDO1FBQ3hCLCtGQUErRjtRQUMvRixpR0FBaUc7UUFDakcsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN4QyxDQUFDOzBFQVpXLFdBQVcsY0FLZCxXQUFXO3VEQUxSLFdBQVcsV0FBWCxXQUFXLG1CQUZYLE1BQU07c0JBTG5CO0NBcUJDLEFBakJELElBaUJDO1NBZFksV0FBVztrREFBWCxXQUFXO2NBSHZCLFVBQVU7ZUFBQztnQkFDWCxVQUFVLEVBQUUsTUFBTTthQUNsQjs7c0JBTUUsTUFBTTt1QkFBQyxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmVDb25maWcsIENPUkVfQ09ORklHIH0gZnJvbSAnLi9jb3JlLmNvbmZpZyc7XG5cbkBJbmplY3RhYmxlKHtcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIENvcmVTZXJ2aWNlIHtcblxuXHRwdWJsaWMgb3B0aW9uczogQ29yZUNvbmZpZztcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRASW5qZWN0KENPUkVfQ09ORklHKSBvcHRpb25zOiBDb3JlQ29uZmlnXG5cdCkge1xuXHRcdC8vIGNvbnNvbGUubG9nKCdDb3JlU2VydmljZScsIG9wdGlvbnMpO1xuXHRcdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXHRcdC8vIG9wdGlvbnMuZGVmYXVsdFBhZ2UgPSAob3B0aW9ucy5kZWZhdWx0UGFnZSB8fCBQYWdlTm90Rm91bmRDb21wb25lbnQpIGFzIFR5cGU8UGFnZUNvbXBvbmVudD47XG5cdFx0Ly8gb3B0aW9ucy5ub3RGb3VuZFBhZ2UgPSAob3B0aW9ucy5ub3RGb3VuZFBhZ2UgfHwgUGFnZU5vdEZvdW5kQ29tcG9uZW50KSBhcyBUeXBlPFBhZ2VDb21wb25lbnQ+O1xuXHRcdHRoaXMub3B0aW9ucyA9IG5ldyBDb3JlQ29uZmlnKG9wdGlvbnMpO1xuXHR9XG5cbn1cbiJdfQ==