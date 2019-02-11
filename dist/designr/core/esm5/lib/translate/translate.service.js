/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Injector } from '@angular/core';
import { ApiService } from '../api/api.service';
import * as i0 from "@angular/core";
var Translate = /** @class */ (function () {
    function Translate() {
    }
    return Translate;
}());
export { Translate };
if (false) {
    /** @type {?} */
    Translate.prototype.id;
    /** @type {?} */
    Translate.prototype.value;
    /** @type {?} */
    Translate.prototype.defaultValue;
}
var TranslateService = /** @class */ (function (_super) {
    tslib_1.__extends(TranslateService, _super);
    function TranslateService(injector) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        return _this;
    }
    Object.defineProperty(TranslateService.prototype, "collection", {
        get: /**
         * @return {?}
         */
        function () {
            return '/api/translate';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} lang
     * @return {?}
     */
    TranslateService.prototype.use = /**
     * @param {?} lang
     * @return {?}
     */
    function (lang) {
    };
    /**
     * @param {?} lang
     * @return {?}
     */
    TranslateService.prototype.setDefaultLang = /**
     * @param {?} lang
     * @return {?}
     */
    function (lang) {
    };
    /**
     * @param {?} lang
     * @return {?}
     */
    TranslateService.prototype.addLangs = /**
     * @param {?} lang
     * @return {?}
     */
    function (lang) {
    };
    /**
     * @return {?}
     */
    TranslateService.prototype.getBrowserLang = /**
     * @return {?}
     */
    function () {
        return 'it';
    };
    TranslateService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    TranslateService.ctorParameters = function () { return [
        { type: Injector }
    ]; };
    /** @nocollapse */ TranslateService.ngInjectableDef = i0.defineInjectable({ factory: function TranslateService_Factory() { return new TranslateService(i0.inject(i0.INJECTOR)); }, token: TranslateService, providedIn: "root" });
    return TranslateService;
}(ApiService));
export { TranslateService };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    TranslateService.prototype.injector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb3JlLyIsInNvdXJjZXMiOlsibGliL3RyYW5zbGF0ZS90cmFuc2xhdGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7QUFFaEQ7SUFBQTtJQUlBLENBQUM7SUFBRCxnQkFBQztBQUFELENBQUMsQUFKRCxJQUlDOzs7O0lBSEEsdUJBQVc7O0lBQ1gsMEJBQWU7O0lBQ2YsaUNBQXNCOztBQUd2QjtJQUdzQyw0Q0FBcUI7SUFNMUQsMEJBQ1csUUFBa0I7UUFEN0IsWUFHQyxrQkFBTSxRQUFRLENBQUMsU0FDZjtRQUhVLGNBQVEsR0FBUixRQUFRLENBQVU7O0lBRzdCLENBQUM7SUFSRCxzQkFBSSx3Q0FBVTs7OztRQUFkO1lBQ0MsT0FBTyxnQkFBZ0IsQ0FBQztRQUN6QixDQUFDOzs7T0FBQTs7Ozs7SUFRTSw4QkFBRzs7OztJQUFWLFVBQVcsSUFBWTtJQUV2QixDQUFDOzs7OztJQUVNLHlDQUFjOzs7O0lBQXJCLFVBQXNCLElBQVk7SUFFbEMsQ0FBQzs7Ozs7SUFFTSxtQ0FBUTs7OztJQUFmLFVBQWdCLElBQWM7SUFFOUIsQ0FBQzs7OztJQUVNLHlDQUFjOzs7SUFBckI7UUFDQyxPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7O2dCQTdCRCxVQUFVLFNBQUM7b0JBQ1gsVUFBVSxFQUFFLE1BQU07aUJBQ2xCOzs7O2dCQVhvQixRQUFROzs7MkJBQTdCO0NBdUNDLEFBOUJELENBR3NDLFVBQVUsR0EyQi9DO1NBM0JZLGdCQUFnQjs7Ozs7O0lBTzNCLG9DQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSAnLi4vYXBpL2FwaS5zZXJ2aWNlJztcblxuZXhwb3J0IGNsYXNzIFRyYW5zbGF0ZSB7XG5cdGlkOiBzdHJpbmc7XG5cdHZhbHVlPzogc3RyaW5nO1xuXHRkZWZhdWx0VmFsdWU/OiBzdHJpbmc7XG59XG5cbkBJbmplY3RhYmxlKHtcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFRyYW5zbGF0ZVNlcnZpY2UgZXh0ZW5kcyBBcGlTZXJ2aWNlPFRyYW5zbGF0ZT4gIHtcblxuXHRnZXQgY29sbGVjdGlvbigpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnL2FwaS90cmFuc2xhdGUnO1xuXHR9XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJvdGVjdGVkIGluamVjdG9yOiBJbmplY3RvclxuXHQpIHtcblx0XHRzdXBlcihpbmplY3Rvcik7XG5cdH1cblxuXHRwdWJsaWMgdXNlKGxhbmc6IHN0cmluZykge1xuXG5cdH1cblxuXHRwdWJsaWMgc2V0RGVmYXVsdExhbmcobGFuZzogc3RyaW5nKSB7XG5cblx0fVxuXG5cdHB1YmxpYyBhZGRMYW5ncyhsYW5nOiBzdHJpbmdbXSkge1xuXG5cdH1cblxuXHRwdWJsaWMgZ2V0QnJvd3NlckxhbmcoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ2l0Jztcblx0fVxufVxuIl19