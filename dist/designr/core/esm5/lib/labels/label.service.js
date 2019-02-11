/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { EventEmitter, Injectable, Injector } from '@angular/core';
import { BehaviorSubject, of, Subject } from 'rxjs';
import { catchError, filter, first, map, take, tap } from 'rxjs/operators';
import { ApiService } from '../api/api.service';
import * as i0 from "@angular/core";
var LabelKey = /** @class */ (function () {
    function LabelKey() {
    }
    return LabelKey;
}());
export { LabelKey };
if (false) {
    /** @type {?} */
    LabelKey.prototype.id;
    /** @type {?} */
    LabelKey.prototype.value;
    /** @type {?} */
    LabelKey.prototype.defaultValue;
}
/**
 * @template T
 */
var LabelService = /** @class */ (function (_super) {
    tslib_1.__extends(LabelService, _super);
    function LabelService(injector) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this._language = new BehaviorSubject({});
        _this.language = _this._language.asObservable();
        _this._languages = new BehaviorSubject([]);
        _this.languages = _this._languages.asObservable();
        _this.events = new EventEmitter();
        _this.cache = {};
        // !!! new async pipe
        _this.collectedKeys = {};
        // private cache: { [key: string]: string; } = {};
        _this.labels$ = new Subject();
        _this.emitter = new EventEmitter();
        _this._languages.next(_this.config.languages);
        _this._lang = _this.config.defaultLanguage;
        _this.getTranslation(_this.lang).subscribe(function (x) {
            // console.log(x);
        });
        return _this;
    }
    Object.defineProperty(LabelService.prototype, "collection", {
        get: /**
         * @return {?}
         */
        function () {
            return '/api/label';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LabelService.prototype, "lang", {
        get: /**
         * @return {?}
         */
        function () {
            return this._lang;
        },
        set: /**
         * @param {?} lang
         * @return {?}
         */
        function (lang) {
            if (lang !== this._lang) {
                this._lang = lang;
                /** @type {?} */
                var language = this._languages.getValue().find(function (x) { return x.lang === lang; });
                this._language.next(language);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} lang
     * @return {?}
     */
    LabelService.prototype.getTranslation = /**
     * @param {?} lang
     * @return {?}
     */
    function (lang) {
        var _this = this;
        if (!lang || !lang.trim()) {
            return of(null);
        }
        this.lang = lang;
        if (this.cache[lang]) {
            return of(this.cache[lang]);
        }
        else {
            return this.get({ lang: lang }).pipe(take(1), map(function (x) {
                if (x[0]) {
                    /** @type {?} */
                    var labels = x[0].labels;
                    _this.cache[lang] = labels;
                    _this.events.emit(labels);
                    return labels;
                }
                else {
                    return of(null);
                }
            }));
        }
    };
    /**
     * @param {?} key
     * @param {?=} defaultValue
     * @param {?=} params
     * @return {?}
     */
    LabelService.prototype.getLabel = /**
     * @param {?} key
     * @param {?=} defaultValue
     * @param {?=} params
     * @return {?}
     */
    function (key, defaultValue, params) {
        /** @type {?} */
        var value = null;
        /** @type {?} */
        var labels = this.cache[this.lang];
        if (labels) {
            /** @type {?} */
            var keys = key.split('.');
            /** @type {?} */
            var k = keys.shift();
            while (keys.length > 0 && labels[k]) {
                labels = labels[k];
                k = keys.shift();
            }
            value = labels[k] || "{" + k + "}";
        }
        return this.parseLabel(value, key, defaultValue, params);
    };
    /**
     * @private
     * @param {?} value
     * @param {?} key
     * @param {?=} defaultValue
     * @param {?=} params
     * @return {?}
     */
    LabelService.prototype.parseLabel = /**
     * @private
     * @param {?} value
     * @param {?} key
     * @param {?=} defaultValue
     * @param {?=} params
     * @return {?}
     */
    function (value, key, defaultValue, params) {
        if (value == null) {
            value = defaultValue;
        }
        if (value == null) {
            return this.missingLabel(key);
        }
        else if (params) {
            return this.parseParams(value, params);
        }
        return value;
    };
    /**
     * @private
     * @param {?} key
     * @return {?}
     */
    LabelService.prototype.missingLabel = /**
     * @private
     * @param {?} key
     * @return {?}
     */
    function (key) {
        if (this.missingHandler) {
            return typeof this.missingHandler === 'function' ?
                this.missingHandler(key) :
                this.missingHandler;
        }
        return key;
    };
    /**
     * @private
     * @param {?} value
     * @param {?} params
     * @return {?}
     */
    LabelService.prototype.parseParams = /**
     * @private
     * @param {?} value
     * @param {?} params
     * @return {?}
     */
    function (value, params) {
        /** @type {?} */
        var TEMPLATE_REGEXP = /@\s?([^{}\s]*)\s?/g;
        return value.replace(TEMPLATE_REGEXP, function (text, key) {
            /** @type {?} */
            var replacer = (/** @type {?} */ (params[key]));
            return typeof replacer !== 'undefined' ? replacer : text;
        });
    };
    //
    //
    /**
     * @param {?} key
     * @param {?=} defaultValue
     * @param {?=} params
     * @return {?}
     */
    LabelService.prototype.getKey = 
    //
    /**
     * @param {?} key
     * @param {?=} defaultValue
     * @param {?=} params
     * @return {?}
     */
    function (key, defaultValue, params) {
        var _this = this;
        if (this.cache.hasOwnProperty(key)) {
            return of(this.cache[key]);
        }
        else {
            Object.defineProperty(this.collectedKeys, key, {
                value: { id: key, defaultValue: defaultValue },
                enumerable: true,
                writable: false,
            });
            this.cache[key] = null;
        }
        return this.labels$.pipe(map(function (items) { return items[key] || null; }), filter(function (label) { return label !== null; }), 
        // tap(label => console.log('getKey', key, label)),
        map(function (label) { return _this.parseLabel(label, key, defaultValue, params); }));
    };
    /**
     * @return {?}
     */
    LabelService.prototype.register = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.emitter.pipe(
        // throttleTime(500),
        tap(function () {
            _this.collectKeys().pipe(first()).subscribe(function (keys) {
                // console.log('LabelService.collected', keys);
            });
        }));
    };
    /**
     * @return {?}
     */
    LabelService.prototype.collect = /**
     * @return {?}
     */
    function () {
        if (Object.keys(this.collectedKeys).length) {
            this.emitter.emit();
        }
    };
    /**
     * @private
     * @return {?}
     */
    LabelService.prototype.collectKeys = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var keys = Object.keys(this.collectedKeys).map(function (x) { return _this.collectedKeys[x]; });
        this.collectedKeys = {};
        if (keys.length) {
            // console.log('LabelService.collectKeys', JSON.stringify(keys));
            return this.statePost("/api/i18n/labels", keys).pipe(map(function (keys) {
                /** @type {?} */
                var items = {};
                keys.forEach(function (x) { return items[x.id] = x.value || x.defaultValue; });
                return items;
            }), tap(function (items) {
                Object.assign(_this.cache, items);
                _this.labels$.next(_this.cache);
                // console.log('collectKeys', this.cache);
            }), catchError(function (error) {
                console.log('LabelService.collectKeys.error', error);
                return of({});
            }));
            /*
            return this.post(`/api/i18n/labels`, keys).pipe(
                map((keys: LabelKey[]) => {
                    const items = {};
                    keys.forEach(x => items[x.id] = x.value || x.defaultValue);
                    return items;
                }),
                tap((items: { [key: string]: string; }) => {
                    Object.assign(this.cache, items);
                    this.labels$.next(this.cache);
                    // console.log('collectKeys', this.cache);
                }),
            );
            */
        }
        else {
            return of({});
        }
    };
    LabelService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    LabelService.ctorParameters = function () { return [
        { type: Injector }
    ]; };
    /** @nocollapse */ LabelService.ngInjectableDef = i0.defineInjectable({ factory: function LabelService_Factory() { return new LabelService(i0.inject(i0.INJECTOR)); }, token: LabelService, providedIn: "root" });
    return LabelService;
}(ApiService));
export { LabelService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    LabelService.prototype._language;
    /** @type {?} */
    LabelService.prototype.language;
    /**
     * @type {?}
     * @private
     */
    LabelService.prototype._languages;
    /** @type {?} */
    LabelService.prototype.languages;
    /**
     * @type {?}
     * @private
     */
    LabelService.prototype._lang;
    /** @type {?} */
    LabelService.prototype.events;
    /** @type {?} */
    LabelService.prototype.missingHandler;
    /** @type {?} */
    LabelService.prototype.cache;
    /**
     * @type {?}
     * @private
     */
    LabelService.prototype.collectedKeys;
    /**
     * @type {?}
     * @private
     */
    LabelService.prototype.labels$;
    /**
     * @type {?}
     * @private
     */
    LabelService.prototype.emitter;
    /**
     * @type {?}
     * @protected
     */
    LabelService.prototype.injector;
}
/**
 * @param {?} injector
 * @return {?}
 */
export function CustomTranslateLoader(injector) {
    return new LabelService(injector);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFiZWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJsaWIvbGFiZWxzL2xhYmVsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkUsT0FBTyxFQUFFLGVBQWUsRUFBYyxFQUFFLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7QUFHaEQ7SUFBQTtJQUlBLENBQUM7SUFBRCxlQUFDO0FBQUQsQ0FBQyxBQUpELElBSUM7Ozs7SUFIQSxzQkFBWTs7SUFDWix5QkFBZTs7SUFDZixnQ0FBc0I7Ozs7O0FBR3ZCO0lBR21ELHdDQUFhO0lBaUMvRCxzQkFDVyxRQUFrQjtRQUQ3QixZQUdDLGtCQUFNLFFBQVEsQ0FBQyxTQU1mO1FBUlUsY0FBUSxHQUFSLFFBQVEsQ0FBVTtRQTVCckIsZUFBUyxHQUFRLElBQUksZUFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2pDLGNBQVEsR0FBb0IsS0FBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNsRSxnQkFBVSxHQUFnQyxJQUFJLGVBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMxRCxlQUFTLEdBQXNCLEtBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFLENBQUM7UUFjdkUsWUFBTSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRS9DLFdBQUssR0FBTyxFQUFFLENBQUM7O1FBR2QsbUJBQWEsR0FBaUMsRUFBRSxDQUFDOztRQUVqRCxhQUFPLEdBQXdDLElB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YmxlLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlLCBvZiwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgZmlsdGVyLCBmaXJzdCwgbWFwLCB0YWtlLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSAnLi4vYXBpL2FwaS5zZXJ2aWNlJztcbmltcG9ydCB7IExhYmVsIH0gZnJvbSAnLi9sYWJlbCc7XG5cbmV4cG9ydCBjbGFzcyBMYWJlbEtleSB7XG5cdGlkPzogc3RyaW5nO1xuXHR2YWx1ZT86IHN0cmluZztcblx0ZGVmYXVsdFZhbHVlPzogc3RyaW5nO1xufVxuXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBMYWJlbFNlcnZpY2U8VCBleHRlbmRzIExhYmVsPiBleHRlbmRzIEFwaVNlcnZpY2U8VD4ge1xuXG5cdGdldCBjb2xsZWN0aW9uKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICcvYXBpL2xhYmVsJztcblx0fVxuXG5cdHByaXZhdGUgX2xhbmd1YWdlOiBhbnkgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHt9KTtcblx0cHVibGljIHJlYWRvbmx5IGxhbmd1YWdlOiBPYnNlcnZhYmxlPGFueT4gPSB0aGlzLl9sYW5ndWFnZS5hc09ic2VydmFibGUoKTtcblx0cHJpdmF0ZSBfbGFuZ3VhZ2VzOiBCZWhhdmlvclN1YmplY3Q8QXJyYXk8YW55Pj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KFtdKTtcblx0cHVibGljIHJlYWRvbmx5IGxhbmd1YWdlczogT2JzZXJ2YWJsZTxhbnlbXT4gPSB0aGlzLl9sYW5ndWFnZXMuYXNPYnNlcnZhYmxlKCk7XG5cblx0cHJpdmF0ZSBfbGFuZzogc3RyaW5nO1xuXHRwdWJsaWMgZ2V0IGxhbmcoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5fbGFuZztcblx0fVxuXHRwdWJsaWMgc2V0IGxhbmcobGFuZzogc3RyaW5nKSB7XG5cdFx0aWYgKGxhbmcgIT09IHRoaXMuX2xhbmcpIHtcblx0XHRcdHRoaXMuX2xhbmcgPSBsYW5nO1xuXHRcdFx0Y29uc3QgbGFuZ3VhZ2UgPSB0aGlzLl9sYW5ndWFnZXMuZ2V0VmFsdWUoKS5maW5kKHggPT4geC5sYW5nID09PSBsYW5nKTtcblx0XHRcdHRoaXMuX2xhbmd1YWdlLm5leHQobGFuZ3VhZ2UpO1xuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyBldmVudHM6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRwdWJsaWMgbWlzc2luZ0hhbmRsZXI/OiBGdW5jdGlvbjtcblx0cHVibGljIGNhY2hlOiB7fSA9IHt9O1xuXG5cdC8vICEhISBuZXcgYXN5bmMgcGlwZVxuXHRwcml2YXRlIGNvbGxlY3RlZEtleXM6IHsgW2tleTogc3RyaW5nXTogTGFiZWxLZXk7IH0gPSB7fTtcblx0Ly8gcHJpdmF0ZSBjYWNoZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmc7IH0gPSB7fTtcblx0cHJpdmF0ZSBsYWJlbHMkOiBTdWJqZWN0PHsgW2tleTogc3RyaW5nXTogc3RyaW5nOyB9PiA9IG5ldyBTdWJqZWN0KCk7XG5cdHByaXZhdGUgZW1pdHRlcjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJvdGVjdGVkIGluamVjdG9yOiBJbmplY3Rvcixcblx0KSB7XG5cdFx0c3VwZXIoaW5qZWN0b3IpO1xuXHRcdHRoaXMuX2xhbmd1YWdlcy5uZXh0KHRoaXMuY29uZmlnLmxhbmd1YWdlcyk7XG5cdFx0dGhpcy5fbGFuZyA9IHRoaXMuY29uZmlnLmRlZmF1bHRMYW5ndWFnZTtcblx0XHR0aGlzLmdldFRyYW5zbGF0aW9uKHRoaXMubGFuZykuc3Vic2NyaWJlKHggPT4ge1xuXHRcdFx0Ly8gY29uc29sZS5sb2coeCk7XG5cdFx0fSk7XG5cdH1cblxuXHRwdWJsaWMgZ2V0VHJhbnNsYXRpb24obGFuZzogc3RyaW5nKTogT2JzZXJ2YWJsZTx7fT4ge1xuXHRcdGlmICghbGFuZyB8fCAhbGFuZy50cmltKCkpIHtcblx0XHRcdHJldHVybiBvZihudWxsKTtcblx0XHR9XG5cdFx0dGhpcy5sYW5nID0gbGFuZztcblx0XHRpZiAodGhpcy5jYWNoZVtsYW5nXSkge1xuXHRcdFx0cmV0dXJuIG9mKHRoaXMuY2FjaGVbbGFuZ10pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXQoeyBsYW5nIH0pLnBpcGUoXG5cdFx0XHRcdHRha2UoMSksXG5cdFx0XHRcdG1hcCgoeDogTGFiZWxbXSkgPT4ge1xuXHRcdFx0XHRcdGlmICh4WzBdKSB7XG5cdFx0XHRcdFx0XHRjb25zdCBsYWJlbHMgPSB4WzBdLmxhYmVscztcblx0XHRcdFx0XHRcdHRoaXMuY2FjaGVbbGFuZ10gPSBsYWJlbHM7XG5cdFx0XHRcdFx0XHR0aGlzLmV2ZW50cy5lbWl0KGxhYmVscyk7XG5cdFx0XHRcdFx0XHRyZXR1cm4gbGFiZWxzO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gb2YobnVsbCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KSxcblx0XHRcdFx0Lypcblx0XHRcdFx0dGFwKHggPT4ge1xuXHRcdFx0XHRcdC8vIHRoaXMubG9nZ2VyLmxvZyhgZm91bmQgbGFiZWwgbWF0Y2hpbmcgXCIke2xhbmd9XCJgKTtcblx0XHRcdFx0fSlcblx0XHRcdFx0Ki9cblx0XHRcdCk7XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIGdldExhYmVsKGtleTogc3RyaW5nLCBkZWZhdWx0VmFsdWU/OiBzdHJpbmcsIHBhcmFtcz86IGFueSk6IHN0cmluZyB8IGFueSB7XG5cdFx0bGV0IHZhbHVlOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcblx0XHRsZXQgbGFiZWxzOiBhbnkgPSB0aGlzLmNhY2hlW3RoaXMubGFuZ107XG5cdFx0aWYgKGxhYmVscykge1xuXHRcdFx0Y29uc3Qga2V5czogc3RyaW5nW10gPSBrZXkuc3BsaXQoJy4nKTtcblx0XHRcdGxldCBrID0ga2V5cy5zaGlmdCgpO1xuXHRcdFx0d2hpbGUgKGtleXMubGVuZ3RoID4gMCAmJiBsYWJlbHNba10pIHtcblx0XHRcdFx0bGFiZWxzID0gbGFiZWxzW2tdO1xuXHRcdFx0XHRrID0ga2V5cy5zaGlmdCgpO1xuXHRcdFx0fVxuXHRcdFx0dmFsdWUgPSBsYWJlbHNba10gfHwgYHske2t9fWA7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLnBhcnNlTGFiZWwodmFsdWUsIGtleSwgZGVmYXVsdFZhbHVlLCBwYXJhbXMpO1xuXHR9XG5cblx0cHJpdmF0ZSBwYXJzZUxhYmVsKHZhbHVlOiBzdHJpbmcgfCBudWxsLCBrZXk6IHN0cmluZywgZGVmYXVsdFZhbHVlPzogc3RyaW5nLCBwYXJhbXM/OiBhbnkpOiBzdHJpbmcgfCBhbnkge1xuXHRcdGlmICh2YWx1ZSA9PSBudWxsKSB7XG5cdFx0XHR2YWx1ZSA9IGRlZmF1bHRWYWx1ZTtcblx0XHR9XG5cdFx0aWYgKHZhbHVlID09IG51bGwpIHtcblx0XHRcdHJldHVybiB0aGlzLm1pc3NpbmdMYWJlbChrZXkpO1xuXHRcdH0gZWxzZSBpZiAocGFyYW1zKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5wYXJzZVBhcmFtcyh2YWx1ZSwgcGFyYW1zKTtcblx0XHR9XG5cdFx0cmV0dXJuIHZhbHVlO1xuXHR9XG5cblx0cHJpdmF0ZSBtaXNzaW5nTGFiZWwoa2V5OiBzdHJpbmcpOiBzdHJpbmcge1xuXHRcdGlmICh0aGlzLm1pc3NpbmdIYW5kbGVyKSB7XG5cdFx0XHRyZXR1cm4gdHlwZW9mIHRoaXMubWlzc2luZ0hhbmRsZXIgPT09ICdmdW5jdGlvbicgP1xuXHRcdFx0XHR0aGlzLm1pc3NpbmdIYW5kbGVyKGtleSkgOlxuXHRcdFx0XHR0aGlzLm1pc3NpbmdIYW5kbGVyO1xuXHRcdH1cblx0XHRyZXR1cm4ga2V5O1xuXHR9XG5cblx0cHJpdmF0ZSBwYXJzZVBhcmFtcyh2YWx1ZTogc3RyaW5nLCBwYXJhbXM6IGFueSk6IHN0cmluZyB7XG5cdFx0Y29uc3QgVEVNUExBVEVfUkVHRVhQOiBSZWdFeHAgPSAvQFxccz8oW157fVxcc10qKVxccz8vZzsgLy8gL3t7XFxzPyhbXnt9XFxzXSopXFxzP319L2c7XG5cdFx0cmV0dXJuIHZhbHVlLnJlcGxhY2UoVEVNUExBVEVfUkVHRVhQLCAodGV4dDogc3RyaW5nLCBrZXk6IHN0cmluZykgPT4ge1xuXHRcdFx0Y29uc3QgcmVwbGFjZXI6IHN0cmluZyA9IHBhcmFtc1trZXldIGFzIHN0cmluZztcblx0XHRcdHJldHVybiB0eXBlb2YgcmVwbGFjZXIgIT09ICd1bmRlZmluZWQnID8gcmVwbGFjZXIgOiB0ZXh0O1xuXHRcdH0pO1xuXHR9XG5cblx0Ly9cblxuXHRnZXRLZXkoa2V5OiBzdHJpbmcsIGRlZmF1bHRWYWx1ZT86IHN0cmluZywgcGFyYW1zPzogYW55KTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcblx0XHRpZiAodGhpcy5jYWNoZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG5cdFx0XHRyZXR1cm4gb2YodGhpcy5jYWNoZVtrZXldKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMuY29sbGVjdGVkS2V5cywga2V5LCB7XG5cdFx0XHRcdHZhbHVlOiB7IGlkOiBrZXksIGRlZmF1bHRWYWx1ZTogZGVmYXVsdFZhbHVlIH0sXG5cdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRcdHdyaXRhYmxlOiBmYWxzZSxcblx0XHRcdH0pO1xuXHRcdFx0dGhpcy5jYWNoZVtrZXldID0gbnVsbDtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMubGFiZWxzJC5waXBlKFxuXHRcdFx0bWFwKGl0ZW1zID0+IGl0ZW1zW2tleV0gfHwgbnVsbCksXG5cdFx0XHRmaWx0ZXIobGFiZWwgPT4gbGFiZWwgIT09IG51bGwpLFxuXHRcdFx0Ly8gdGFwKGxhYmVsID0+IGNvbnNvbGUubG9nKCdnZXRLZXknLCBrZXksIGxhYmVsKSksXG5cdFx0XHRtYXAobGFiZWwgPT4gdGhpcy5wYXJzZUxhYmVsKGxhYmVsLCBrZXksIGRlZmF1bHRWYWx1ZSwgcGFyYW1zKSksXG5cdFx0KTtcblx0fVxuXG5cdHJlZ2lzdGVyKCk6IE9ic2VydmFibGU8YW55PiB7XG5cdFx0cmV0dXJuIHRoaXMuZW1pdHRlci5waXBlKFxuXHRcdFx0Ly8gdGhyb3R0bGVUaW1lKDUwMCksXG5cdFx0XHR0YXAoKCkgPT4ge1xuXHRcdFx0XHR0aGlzLmNvbGxlY3RLZXlzKCkucGlwZShcblx0XHRcdFx0XHRmaXJzdCgpLFxuXHRcdFx0XHQpLnN1YnNjcmliZSgoa2V5cykgPT4ge1xuXHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKCdMYWJlbFNlcnZpY2UuY29sbGVjdGVkJywga2V5cyk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSlcblx0XHQpO1xuXHR9XG5cblx0Y29sbGVjdCgpOiB2b2lkIHtcblx0XHRpZiAoT2JqZWN0LmtleXModGhpcy5jb2xsZWN0ZWRLZXlzKS5sZW5ndGgpIHtcblx0XHRcdHRoaXMuZW1pdHRlci5lbWl0KCk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjb2xsZWN0S2V5cygpOiBPYnNlcnZhYmxlPHsgW2tleTogc3RyaW5nXTogc3RyaW5nOyB9PiB7XG5cdFx0Y29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuY29sbGVjdGVkS2V5cykubWFwKHggPT4gdGhpcy5jb2xsZWN0ZWRLZXlzW3hdKTtcblx0XHR0aGlzLmNvbGxlY3RlZEtleXMgPSB7fTtcblx0XHRpZiAoa2V5cy5sZW5ndGgpIHtcblx0XHRcdC8vIGNvbnNvbGUubG9nKCdMYWJlbFNlcnZpY2UuY29sbGVjdEtleXMnLCBKU09OLnN0cmluZ2lmeShrZXlzKSk7XG5cdFx0XHRyZXR1cm4gdGhpcy5zdGF0ZVBvc3QoYC9hcGkvaTE4bi9sYWJlbHNgLCBrZXlzKS5waXBlKFxuXHRcdFx0XHRtYXAoKGtleXM6IExhYmVsS2V5W10pID0+IHtcblx0XHRcdFx0XHRjb25zdCBpdGVtcyA9IHt9O1xuXHRcdFx0XHRcdGtleXMuZm9yRWFjaCh4ID0+IGl0ZW1zW3guaWRdID0geC52YWx1ZSB8fCB4LmRlZmF1bHRWYWx1ZSk7XG5cdFx0XHRcdFx0cmV0dXJuIGl0ZW1zO1xuXHRcdFx0XHR9KSxcblx0XHRcdFx0dGFwKChpdGVtczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmc7IH0pID0+IHtcblx0XHRcdFx0XHRPYmplY3QuYXNzaWduKHRoaXMuY2FjaGUsIGl0ZW1zKTtcblx0XHRcdFx0XHR0aGlzLmxhYmVscyQubmV4dCh0aGlzLmNhY2hlKTtcblx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZygnY29sbGVjdEtleXMnLCB0aGlzLmNhY2hlKTtcblx0XHRcdFx0fSksXG5cdFx0XHRcdGNhdGNoRXJyb3IoZXJyb3IgPT4ge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdMYWJlbFNlcnZpY2UuY29sbGVjdEtleXMuZXJyb3InLCBlcnJvcik7XG5cdFx0XHRcdFx0cmV0dXJuIG9mKHt9KTtcblx0XHRcdFx0fSksXG5cdFx0XHQpO1xuXHRcdFx0Lypcblx0XHRcdHJldHVybiB0aGlzLnBvc3QoYC9hcGkvaTE4bi9sYWJlbHNgLCBrZXlzKS5waXBlKFxuXHRcdFx0XHRtYXAoKGtleXM6IExhYmVsS2V5W10pID0+IHtcblx0XHRcdFx0XHRjb25zdCBpdGVtcyA9IHt9O1xuXHRcdFx0XHRcdGtleXMuZm9yRWFjaCh4ID0+IGl0ZW1zW3guaWRdID0geC52YWx1ZSB8fCB4LmRlZmF1bHRWYWx1ZSk7XG5cdFx0XHRcdFx0cmV0dXJuIGl0ZW1zO1xuXHRcdFx0XHR9KSxcblx0XHRcdFx0dGFwKChpdGVtczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmc7IH0pID0+IHtcblx0XHRcdFx0XHRPYmplY3QuYXNzaWduKHRoaXMuY2FjaGUsIGl0ZW1zKTtcblx0XHRcdFx0XHR0aGlzLmxhYmVscyQubmV4dCh0aGlzLmNhY2hlKTtcblx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZygnY29sbGVjdEtleXMnLCB0aGlzLmNhY2hlKTtcblx0XHRcdFx0fSksXG5cdFx0XHQpO1xuXHRcdFx0Ki9cblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIG9mKHt9KTtcblx0XHR9XG5cdH1cblxufVxuXG5leHBvcnQgZnVuY3Rpb24gQ3VzdG9tVHJhbnNsYXRlTG9hZGVyKGluamVjdG9yOiBJbmplY3Rvcikge1xuXHRyZXR1cm4gbmV3IExhYmVsU2VydmljZShpbmplY3Rvcik7XG59XG5cbiJdfQ==