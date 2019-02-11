/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Injector } from '@angular/core';
import { ApiService } from '../api/api.service';
import * as i0 from "@angular/core";
export class Translate {
}
if (false) {
    /** @type {?} */
    Translate.prototype.id;
    /** @type {?} */
    Translate.prototype.value;
    /** @type {?} */
    Translate.prototype.defaultValue;
}
export class TranslateService extends ApiService {
    /**
     * @param {?} injector
     */
    constructor(injector) {
        super(injector);
        this.injector = injector;
    }
    /**
     * @return {?}
     */
    get collection() {
        return '/api/translate';
    }
    /**
     * @param {?} lang
     * @return {?}
     */
    use(lang) {
    }
    /**
     * @param {?} lang
     * @return {?}
     */
    setDefaultLang(lang) {
    }
    /**
     * @param {?} lang
     * @return {?}
     */
    addLangs(lang) {
    }
    /**
     * @return {?}
     */
    getBrowserLang() {
        return 'it';
    }
}
TranslateService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
TranslateService.ctorParameters = () => [
    { type: Injector }
];
/** @nocollapse */ TranslateService.ngInjectableDef = i0.defineInjectable({ factory: function TranslateService_Factory() { return new TranslateService(i0.inject(i0.INJECTOR)); }, token: TranslateService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @protected
     */
    TranslateService.prototype.injector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb3JlLyIsInNvdXJjZXMiOlsibGliL3RyYW5zbGF0ZS90cmFuc2xhdGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDOztBQUVoRCxNQUFNLE9BQU8sU0FBUztDQUlyQjs7O0lBSEEsdUJBQVc7O0lBQ1gsMEJBQWU7O0lBQ2YsaUNBQXNCOztBQU12QixNQUFNLE9BQU8sZ0JBQWlCLFNBQVEsVUFBcUI7Ozs7SUFNMUQsWUFDVyxRQUFrQjtRQUU1QixLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7UUFGTixhQUFRLEdBQVIsUUFBUSxDQUFVO0lBRzdCLENBQUM7Ozs7SUFSRCxJQUFJLFVBQVU7UUFDYixPQUFPLGdCQUFnQixDQUFDO0lBQ3pCLENBQUM7Ozs7O0lBUU0sR0FBRyxDQUFDLElBQVk7SUFFdkIsQ0FBQzs7Ozs7SUFFTSxjQUFjLENBQUMsSUFBWTtJQUVsQyxDQUFDOzs7OztJQUVNLFFBQVEsQ0FBQyxJQUFjO0lBRTlCLENBQUM7Ozs7SUFFTSxjQUFjO1FBQ3BCLE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQzs7O1lBN0JELFVBQVUsU0FBQztnQkFDWCxVQUFVLEVBQUUsTUFBTTthQUNsQjs7OztZQVhvQixRQUFROzs7Ozs7OztJQW1CM0Isb0NBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuLi9hcGkvYXBpLnNlcnZpY2UnO1xuXG5leHBvcnQgY2xhc3MgVHJhbnNsYXRlIHtcblx0aWQ6IHN0cmluZztcblx0dmFsdWU/OiBzdHJpbmc7XG5cdGRlZmF1bHRWYWx1ZT86IHN0cmluZztcbn1cblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgVHJhbnNsYXRlU2VydmljZSBleHRlbmRzIEFwaVNlcnZpY2U8VHJhbnNsYXRlPiAge1xuXG5cdGdldCBjb2xsZWN0aW9uKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICcvYXBpL3RyYW5zbGF0ZSc7XG5cdH1cblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcm90ZWN0ZWQgaW5qZWN0b3I6IEluamVjdG9yXG5cdCkge1xuXHRcdHN1cGVyKGluamVjdG9yKTtcblx0fVxuXG5cdHB1YmxpYyB1c2UobGFuZzogc3RyaW5nKSB7XG5cblx0fVxuXG5cdHB1YmxpYyBzZXREZWZhdWx0TGFuZyhsYW5nOiBzdHJpbmcpIHtcblxuXHR9XG5cblx0cHVibGljIGFkZExhbmdzKGxhbmc6IHN0cmluZ1tdKSB7XG5cblx0fVxuXG5cdHB1YmxpYyBnZXRCcm93c2VyTGFuZygpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnaXQnO1xuXHR9XG59XG4iXX0=