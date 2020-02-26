import { Inject, Injectable } from '@angular/core';
import { PluginsConfig, PLUGINS_CONFIG } from './plugins.config';
import * as i0 from "@angular/core";
import * as i1 from "./plugins.config";
var PluginsService = /** @class */ (function () {
    function PluginsService(options) {
        // console.log('PluginsService', options);
        options = options || {};
        // options.defaultPage = (options.defaultPage || PageNotFoundComponent) as Type<PageComponent>;
        // options.notFoundPage = (options.notFoundPage || PageNotFoundComponent) as Type<PageComponent>;
        this.options = new PluginsConfig(options);
    }
    PluginsService.ɵfac = function PluginsService_Factory(t) { return new (t || PluginsService)(i0.ɵɵinject(PLUGINS_CONFIG)); };
    PluginsService.ɵprov = i0.ɵɵdefineInjectable({ token: PluginsService, factory: PluginsService.ɵfac, providedIn: 'root' });
    return PluginsService;
}());
export { PluginsService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PluginsService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.PluginsConfig, decorators: [{
                type: Inject,
                args: [PLUGINS_CONFIG]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGx1Z2lucy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvcGx1Z2lucy8iLCJzb3VyY2VzIjpbImxpYi9jb25maWcvcGx1Z2lucy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxhQUFhLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7OztBQUVqRTtJQU9DLHdCQUN5QixPQUFzQjtRQUU5QywwQ0FBMEM7UUFDMUMsT0FBTyxHQUFHLE9BQU8sSUFBSSxFQUFFLENBQUM7UUFDeEIsK0ZBQStGO1FBQy9GLGlHQUFpRztRQUNqRyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzNDLENBQUM7Z0ZBWlcsY0FBYyxjQUtqQixjQUFjOzBEQUxYLGNBQWMsV0FBZCxjQUFjLG1CQUZkLE1BQU07eUJBTG5CO0NBcUJDLEFBakJELElBaUJDO1NBZFksY0FBYztrREFBZCxjQUFjO2NBSDFCLFVBQVU7ZUFBQztnQkFDWCxVQUFVLEVBQUUsTUFBTTthQUNsQjs7c0JBTUUsTUFBTTt1QkFBQyxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsdWdpbnNDb25maWcsIFBMVUdJTlNfQ09ORklHIH0gZnJvbSAnLi9wbHVnaW5zLmNvbmZpZyc7XG5cbkBJbmplY3RhYmxlKHtcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFBsdWdpbnNTZXJ2aWNlIHtcblxuXHRwdWJsaWMgb3B0aW9uczogUGx1Z2luc0NvbmZpZztcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRASW5qZWN0KFBMVUdJTlNfQ09ORklHKSBvcHRpb25zOiBQbHVnaW5zQ29uZmlnXG5cdCkge1xuXHRcdC8vIGNvbnNvbGUubG9nKCdQbHVnaW5zU2VydmljZScsIG9wdGlvbnMpO1xuXHRcdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXHRcdC8vIG9wdGlvbnMuZGVmYXVsdFBhZ2UgPSAob3B0aW9ucy5kZWZhdWx0UGFnZSB8fCBQYWdlTm90Rm91bmRDb21wb25lbnQpIGFzIFR5cGU8UGFnZUNvbXBvbmVudD47XG5cdFx0Ly8gb3B0aW9ucy5ub3RGb3VuZFBhZ2UgPSAob3B0aW9ucy5ub3RGb3VuZFBhZ2UgfHwgUGFnZU5vdEZvdW5kQ29tcG9uZW50KSBhcyBUeXBlPFBhZ2VDb21wb25lbnQ+O1xuXHRcdHRoaXMub3B0aW9ucyA9IG5ldyBQbHVnaW5zQ29uZmlnKG9wdGlvbnMpO1xuXHR9XG5cbn1cbiJdfQ==