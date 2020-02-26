import { __extends } from "tslib";
import { isPlatformBrowser } from '@angular/common';
import { EventEmitter, Injectable, Injector } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { IdentityService } from '../models/identity.service';
import * as i0 from "@angular/core";
var TranslateService = /** @class */ (function (_super) {
    __extends(TranslateService, _super);
    function TranslateService(injector) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this.events = new EventEmitter();
        _this.language_ = new BehaviorSubject(undefined);
        _this.languages_ = new BehaviorSubject([]);
        _this.languages_.next(_this.config.languages);
        return _this;
    }
    Object.defineProperty(TranslateService.prototype, "collection", {
        get: function () {
            return '/api/translate';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TranslateService.prototype, "lang", {
        get: function () {
            return TranslateService.lang_;
        },
        set: function (lang) {
            if (lang !== TranslateService.lang_) {
                TranslateService.lang_ = lang;
                var languages = this.languages_.getValue();
                if (languages.length) {
                    var language = languages.find(function (x) { return x.lang === lang; });
                    this.language_.next(language);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TranslateService.prototype, "language", {
        get: function () {
            return this.language_.getValue();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TranslateService.prototype, "languages", {
        get: function () {
            return this.languages_.getValue();
        },
        enumerable: true,
        configurable: true
    });
    TranslateService.prototype.observe$ = function () {
        var _this = this;
        // console.log(new Error().stack);
        return this.language_.pipe(filter(function (x) { return x !== undefined; }), switchMap(function (language) { return _this.getTranslation(language.lang); }));
    };
    TranslateService.prototype.getTranslation = function (lang) {
        var _this = this;
        if (!lang || !lang.trim()) {
            return of(null);
        }
        TranslateService.lang_ = lang;
        if (TranslateService.cache[lang]) {
            return of(TranslateService.cache[lang]);
        }
        else {
            return this.get("?lang=" + lang, { lang: lang }).pipe(
            // take(1),
            map(function (x) {
                if (x.length && x[0]) {
                    var labels = x[0].labels;
                    TranslateService.cache[lang] = labels;
                    _this.events.emit(labels);
                    return labels;
                }
                else {
                    return of(null);
                }
            }));
        }
    };
    TranslateService.prototype.getTranslate = function (key, defaultValue, params) {
        // console.log('TranslateService.getTranslate', key, TranslateService.cache, TranslateService.lang_);
        if (key) {
            var value = null;
            var labels = TranslateService.cache[TranslateService.lang_];
            // console.log('labels', TranslateService.lang_, TranslateService.cache, labels);
            if (labels) {
                var keys = key.split('.');
                var k = keys.shift();
                while (keys.length > 0 && labels[k]) {
                    labels = labels[k];
                    k = keys.shift();
                }
                value = labels[k]; // || `{${k}}`;
                if (typeof value !== 'string') {
                    value = null;
                }
            }
            return this.parseTranslate(value, key, defaultValue, params);
        }
    };
    TranslateService.prototype.transform = function (key, defaultValue, params) {
        var value = this.getTranslate(key, defaultValue, params);
        return value;
    };
    TranslateService.prototype.parseTranslate = function (value, key, defaultValue, params) {
        if (value == null) {
            return defaultValue || this.missingTranslate(key);
        }
        else if (params) {
            return this.parseParams(value, params);
        }
        return value;
    };
    TranslateService.prototype.missingTranslate = function (key) {
        if (this.missingHandler) {
            return typeof this.missingHandler === 'function' ?
                this.missingHandler(key) :
                this.missingHandler;
        }
        return key;
    };
    TranslateService.prototype.parseParams = function (value, params) {
        var TEMPLATEREGEXP_ = /@([^{}\s]*)/g; // /{{\s?([^{}\s]*)\s?}}/g;
        return value.replace(TEMPLATEREGEXP_, function (text, key) {
            var replacer = params[key];
            return typeof replacer !== 'undefined' ? replacer : text;
        });
    };
    TranslateService.prototype.use = function (lang) {
    };
    TranslateService.prototype.setDefaultLang = function (lang) {
    };
    TranslateService.prototype.addLangs = function (lang) {
    };
    TranslateService.prototype.getBrowserLang = function () {
        if (isPlatformBrowser(this.platformId)) {
            var lang = this.getFirstBrowserLang() || this.config.defaultLanguage; // navigator.languages ? navigator.languages[0] : (navigator.language || navigator['userLanguage'] || this.config.defaultLanguage);
            // console.log('getBrowserLang', lang, navigator.languages);
            return lang;
        }
        else {
            return this.config.defaultLanguage;
        }
    };
    TranslateService.prototype.getFirstBrowserLang = function () {
        var lang = this.getFirstBrowserLocale();
        if (lang) {
            return lang.split('-')[0];
        }
    };
    TranslateService.prototype.getFirstBrowserLocale = function () {
        var navigator = window.navigator;
        var properties = ['language', 'browserLanguage', 'systemLanguage', 'userLanguage'];
        var lang;
        if (Array.isArray(navigator.languages)) {
            lang = navigator.languages[0];
        }
        var i = 0;
        while (!lang && i < properties.length) {
            lang = navigator[properties[i]];
            i++;
        }
        return lang;
    };
    TranslateService.cache = {};
    TranslateService.lang_ = null;
    TranslateService.ɵfac = function TranslateService_Factory(t) { return new (t || TranslateService)(i0.ɵɵinject(i0.Injector)); };
    TranslateService.ɵprov = i0.ɵɵdefineInjectable({ token: TranslateService, factory: TranslateService.ɵfac, providedIn: 'root' });
    return TranslateService;
}(IdentityService));
export { TranslateService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TranslateService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i0.Injector }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb3JlLyIsInNvdXJjZXMiOlsibGliL3RyYW5zbGF0ZS90cmFuc2xhdGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25FLE9BQU8sRUFBRSxlQUFlLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3ZELE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7QUFHN0Q7SUFHMkQsb0NBQWtCO0lBcUM1RSwwQkFDVyxRQUFrQjtRQUQ3QixZQUdDLGtCQUFNLFFBQVEsQ0FBQyxTQUVmO1FBSlUsY0FBUSxHQUFSLFFBQVEsQ0FBVTtRQTdCdEIsWUFBTSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRzlDLGVBQVMsR0FBUSxJQUFJLGVBQWUsQ0FBTSxTQUFTLENBQUMsQ0FBQztRQUNyRCxnQkFBVSxHQUFnQyxJQUFJLGVBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQTRCekUsS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQzs7SUFDN0MsQ0FBQztJQXJDRCxzQkFBSSx3Q0FBVTthQUFkO1lBQ0MsT0FBTyxnQkFBZ0IsQ0FBQztRQUN6QixDQUFDOzs7T0FBQTtJQVFELHNCQUFXLGtDQUFJO2FBQWY7WUFDQyxPQUFPLGdCQUFnQixDQUFDLEtBQUssQ0FBQztRQUMvQixDQUFDO2FBQ0QsVUFBZ0IsSUFBWTtZQUMzQixJQUFJLElBQUksS0FBSyxnQkFBZ0IsQ0FB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T0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzFCO0lBQ0YsQ0FBQztJQUVNLGdEQUFxQixHQUE1QjtRQUNDLElBQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUM7UUFDbkMsSUFBTSxVQUFVLEdBQUcsQ0FBQyxVQUFVLEVBQUUsaUJBQWlCLEVBQUUsZ0JBQWdCLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFDckYsSUFBSSxJQUFJLENBQUM7UUFDVCxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ3ZDLElBQUksR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzlCO1FBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1YsT0FBTyxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsVUFBVSxDQUFDLE1BQU0sRUFBRTtZQUN0QyxJQUFJLEdBQUcsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLENBQUMsRUFBRSxDQUFDO1NBQ0o7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7SUExS00sc0JBQUssR0FBTyxFQUFFLENBQUM7SUFDZixzQkFBSyxHQUFXLElBQUksQ0FBQztvRkFIaEIsZ0JBQWdCOzREQUFoQixnQkFBZ0IsV0FBaEIsZ0JBQWdCLG1CQUZoQixNQUFNOzJCQVJuQjtDQXdMQyxBQWpMRCxDQUcyRCxlQUFlLEdBOEt6RTtTQTlLWSxnQkFBZ0I7a0RBQWhCLGdCQUFnQjtjQUg1QixVQUFVO2VBQUM7Z0JBQ1gsVUFBVSxFQUFFLE1BQU07YUFDbEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIsIEluamVjdGFibGUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgSWRlbnRpdHlTZXJ2aWNlIH0gZnJvbSAnLi4vbW9kZWxzL2lkZW50aXR5LnNlcnZpY2UnO1xuaW1wb3J0IHsgVHJhbnNsYXRlIH0gZnJvbSAnLi90cmFuc2xhdGUnO1xuXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBUcmFuc2xhdGVTZXJ2aWNlPFQgZXh0ZW5kcyBUcmFuc2xhdGU+IGV4dGVuZHMgSWRlbnRpdHlTZXJ2aWNlPFQ+IHtcblxuXHRzdGF0aWMgY2FjaGU6IHt9ID0ge307XG5cdHN0YXRpYyBsYW5nXzogc3RyaW5nID0gbnVsbDtcblxuXHRnZXQgY29sbGVjdGlvbigpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnL2FwaS90cmFuc2xhdGUnO1xuXHR9XG5cblx0cHVibGljIGV2ZW50czogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdHB1YmxpYyBtaXNzaW5nSGFuZGxlcj86IEZ1bmN0aW9uO1xuXG5cdHByaXZhdGUgbGFuZ3VhZ2VfOiBhbnkgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGFueT4odW5kZWZpbmVkKTtcblx0cHJpdmF0ZSBsYW5ndWFnZXNfOiBCZWhhdmlvclN1YmplY3Q8QXJyYXk8YW55Pj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KFtdKTtcblxuXHRwdWJsaWMgZ2V0IGxhbmcoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gVHJhbnNsYXRlU2VydmljZS5sYW5nXztcblx0fVxuXHRwdWJsaWMgc2V0IGxhbmcobGFuZzogc3RyaW5nKSB7XG5cdFx0aWYgKGxhbmcgIT09IFRyYW5zbGF0ZVNlcnZpY2UubGFuZ18pIHtcblx0XHRcdFRyYW5zbGF0ZVNlcnZpY2UubGFuZ18gPSBsYW5nO1xuXHRcdFx0Y29uc3QgbGFuZ3VhZ2VzID0gdGhpcy5sYW5ndWFnZXNfLmdldFZhbHVlKCk7XG5cdFx0XHRpZiAobGFuZ3VhZ2VzLmxlbmd0aCkge1xuXHRcdFx0XHRjb25zdCBsYW5ndWFnZSA9IGxhbmd1YWdlcy5maW5kKHggPT4geC5sYW5nID09PSBsYW5nKTtcblx0XHRcdFx0dGhpcy5sYW5ndWFnZV8ubmV4dChsYW5ndWFnZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIGdldCBsYW5ndWFnZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5sYW5ndWFnZV8uZ2V0VmFsdWUoKTtcblx0fVxuXG5cdHB1YmxpYyBnZXQgbGFuZ3VhZ2VzKCkge1xuXHRcdHJldHVybiB0aGlzLmxhbmd1YWdlc18uZ2V0VmFsdWUoKTtcblx0fVxuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByb3RlY3RlZCBpbmplY3RvcjogSW5qZWN0b3Jcblx0KSB7XG5cdFx0c3VwZXIoaW5qZWN0b3IpO1xuXHRcdHRoaXMubGFuZ3VhZ2VzXy5uZXh0KHRoaXMuY29uZmlnLmxhbmd1YWdlcyk7XG5cdH1cblxuXHRwdWJsaWMgb2JzZXJ2ZSQoKTogT2JzZXJ2YWJsZTx7fT4ge1xuXHRcdC8vIGNvbnNvbGUubG9nKG5ldyBFcnJvcigpLnN0YWNrKTtcblx0XHRyZXR1cm4gdGhpcy5sYW5ndWFnZV8ucGlwZShcblx0XHRcdGZpbHRlcih4ID0+IHggIT09IHVuZGVmaW5lZCksXG5cdFx0XHRzd2l0Y2hNYXAoKGxhbmd1YWdlOiBhbnkpID0+IHRoaXMuZ2V0VHJhbnNsYXRpb24obGFuZ3VhZ2UubGFuZykpLFxuXHRcdCk7XG5cdH1cblxuXHRwdWJsaWMgZ2V0VHJhbnNsYXRpb24obGFuZzogc3RyaW5nKTogT2JzZXJ2YWJsZTx7fT4ge1xuXHRcdGlmICghbGFuZyB8fCAhbGFuZy50cmltKCkpIHtcblx0XHRcdHJldHVybiBvZihudWxsKTtcblx0XHR9XG5cdFx0VHJhbnNsYXRlU2VydmljZS5sYW5nXyA9IGxhbmc7XG5cdFx0aWYgKFRyYW5zbGF0ZVNlcnZpY2UuY2FjaGVbbGFuZ10pIHtcblx0XHRcdHJldHVybiBvZihUcmFuc2xhdGVTZXJ2aWNlLmNhY2hlW2xhbmddKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0KGA/bGFuZz0ke2xhbmd9YCwgeyBsYW5nIH0pLnBpcGUoXG5cdFx0XHRcdC8vIHRha2UoMSksXG5cdFx0XHRcdG1hcCgoeDogVHJhbnNsYXRlW10pID0+IHtcblx0XHRcdFx0XHRpZiAoeC5sZW5ndGggJiYgeFswXSkge1xuXHRcdFx0XHRcdFx0Y29uc3QgbGFiZWxzID0geFswXS5sYWJlbHM7XG5cdFx0XHRcdFx0XHRUcmFuc2xhdGVTZXJ2aWNlLmNhY2hlW2xhbmddID0gbGFiZWxzO1xuXHRcdFx0XHRcdFx0dGhpcy5ldmVudHMuZW1pdChsYWJlbHMpO1xuXHRcdFx0XHRcdFx0cmV0dXJuIGxhYmVscztcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cmV0dXJuIG9mKG51bGwpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSksXG5cdFx0XHRcdC8vIHRhcCh4ID0+IHRoaXMubG9nZ2VyLmxvZyhgZm91bmQgbGFiZWwgbWF0Y2hpbmcgXCIke2xhbmd9XCJgKSlcblx0XHRcdCk7XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIGdldFRyYW5zbGF0ZShrZXk6IHN0cmluZywgZGVmYXVsdFZhbHVlPzogc3RyaW5nLCBwYXJhbXM/OiBhbnkpOiBzdHJpbmcgfCBhbnkge1xuXHRcdC8vIGNvbnNvbGUubG9nKCdUcmFuc2xhdGVTZXJ2aWNlLmdldFRyYW5zbGF0ZScsIGtleSwgVHJhbnNsYXRlU2VydmljZS5jYWNoZSwgVHJhbnNsYXRlU2VydmljZS5sYW5nXyk7XG5cdFx0aWYgKGtleSkge1xuXHRcdFx0bGV0IHZhbHVlOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcblx0XHRcdGxldCBsYWJlbHM6IGFueSA9IFRyYW5zbGF0ZVNlcnZpY2UuY2FjaGVbVHJhbnNsYXRlU2VydmljZS5sYW5nX107XG5cdFx0XHQvLyBjb25zb2xlLmxvZygnbGFiZWxzJywgVHJhbnNsYXRlU2VydmljZS5sYW5nXywgVHJhbnNsYXRlU2VydmljZS5jYWNoZSwgbGFiZWxzKTtcblx0XHRcdGlmIChsYWJlbHMpIHtcblx0XHRcdFx0Y29uc3Qga2V5czogc3RyaW5nW10gPSBrZXkuc3BsaXQoJy4nKTtcblx0XHRcdFx0bGV0IGsgPSBrZXlzLnNoaWZ0KCk7XG5cdFx0XHRcdHdoaWxlIChrZXlzLmxlbmd0aCA+IDAgJiYgbGFiZWxzW2tdKSB7XG5cdFx0XHRcdFx0bGFiZWxzID0gbGFiZWxzW2tdO1xuXHRcdFx0XHRcdGsgPSBrZXlzLnNoaWZ0KCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0dmFsdWUgPSBsYWJlbHNba107IC8vIHx8IGB7JHtrfX1gO1xuXHRcdFx0XHRpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJykge1xuXHRcdFx0XHRcdHZhbHVlID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRoaXMucGFyc2VUcmFuc2xhdGUodmFsdWUsIGtleSwgZGVmYXVsdFZhbHVlLCBwYXJhbXMpO1xuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyB0cmFuc2Zvcm0oa2V5OiBzdHJpbmcsIGRlZmF1bHRWYWx1ZT86IHN0cmluZywgcGFyYW1zPzogYW55KTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcblx0XHRjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VHJhbnNsYXRlKGtleSwgZGVmYXVsdFZhbHVlLCBwYXJhbXMpO1xuXHRcdHJldHVybiB2YWx1ZTtcblx0fVxuXG5cdHByaXZhdGUgcGFyc2VUcmFuc2xhdGUodmFsdWU6IHN0cmluZyB8IG51bGwsIGtleTogc3RyaW5nLCBkZWZhdWx0VmFsdWU/OiBzdHJpbmcsIHBhcmFtcz86IGFueSk6IHN0cmluZyB8IGFueSB7XG5cdFx0aWYgKHZhbHVlID09IG51bGwpIHtcblx0XHRcdHJldHVybiBkZWZhdWx0VmFsdWUgfHwgdGhpcy5taXNzaW5nVHJhbnNsYXRlKGtleSk7XG5cdFx0fSBlbHNlIGlmIChwYXJhbXMpIHtcblx0XHRcdHJldHVybiB0aGlzLnBhcnNlUGFyYW1zKHZhbHVlLCBwYXJhbXMpO1xuXHRcdH1cblx0XHRyZXR1cm4gdmFsdWU7XG5cdH1cblxuXHRwcml2YXRlIG1pc3NpbmdUcmFuc2xhdGUoa2V5OiBzdHJpbmcpOiBzdHJpbmcge1xuXHRcdGlmICh0aGlzLm1pc3NpbmdIYW5kbGVyKSB7XG5cdFx0XHRyZXR1cm4gdHlwZW9mIHRoaXMubWlzc2luZ0hhbmRsZXIgPT09ICdmdW5jdGlvbicgP1xuXHRcdFx0XHR0aGlzLm1pc3NpbmdIYW5kbGVyKGtleSkgOlxuXHRcdFx0XHR0aGlzLm1pc3NpbmdIYW5kbGVyO1xuXHRcdH1cblx0XHRyZXR1cm4ga2V5O1xuXHR9XG5cblx0cHJpdmF0ZSBwYXJzZVBhcmFtcyh2YWx1ZTogc3RyaW5nLCBwYXJhbXM6IGFueSk6IHN0cmluZyB7XG5cdFx0Y29uc3QgVEVNUExBVEVSRUdFWFBfOiBSZWdFeHAgPSAvQChbXnt9XFxzXSopL2c7IC8vIC97e1xccz8oW157fVxcc10qKVxccz99fS9nO1xuXHRcdHJldHVybiB2YWx1ZS5yZXBsYWNlKFRFTVBMQVRFUkVHRVhQXywgKHRleHQ6IHN0cmluZywga2V5OiBzdHJpbmcpID0+IHtcblx0XHRcdGNvbnN0IHJlcGxhY2VyOiBzdHJpbmcgPSBwYXJhbXNba2V5XSBhcyBzdHJpbmc7XG5cdFx0XHRyZXR1cm4gdHlwZW9mIHJlcGxhY2VyICE9PSAndW5kZWZpbmVkJyA/IHJlcGxhY2VyIDogdGV4dDtcblx0XHR9KTtcblx0fVxuXG5cdHB1YmxpYyB1c2UobGFuZzogc3RyaW5nKSB7XG5cblx0fVxuXG5cdHB1YmxpYyBzZXREZWZhdWx0TGFuZyhsYW5nOiBzdHJpbmcpIHtcblxuXHR9XG5cblx0cHVibGljIGFkZExhbmdzKGxhbmc6IHN0cmluZ1tdKSB7XG5cblx0fVxuXG5cdHB1YmxpYyBnZXRCcm93c2VyTGFuZygpOiBzdHJpbmcge1xuXHRcdGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG5cdFx0XHRjb25zdCBsYW5nID0gdGhpcy5nZXRGaXJzdEJyb3dzZXJMYW5nKCkgfHwgdGhpcy5jb25maWcuZGVmYXVsdExhbmd1YWdlOyAvLyBuYXZpZ2F0b3IubGFuZ3VhZ2VzID8gbmF2aWdhdG9yLmxhbmd1YWdlc1swXSA6IChuYXZpZ2F0b3IubGFuZ3VhZ2UgfHwgbmF2aWdhdG9yWyd1c2VyTGFuZ3VhZ2UnXSB8fCB0aGlzLmNvbmZpZy5kZWZhdWx0TGFuZ3VhZ2UpO1xuXHRcdFx0Ly8gY29uc29sZS5sb2coJ2dldEJyb3dzZXJMYW5nJywgbGFuZywgbmF2aWdhdG9yLmxhbmd1YWdlcyk7XG5cdFx0XHRyZXR1cm4gbGFuZztcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuY29uZmlnLmRlZmF1bHRMYW5ndWFnZTtcblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgZ2V0Rmlyc3RCcm93c2VyTGFuZygpIHtcblx0XHRjb25zdCBsYW5nID0gdGhpcy5nZXRGaXJzdEJyb3dzZXJMb2NhbGUoKTtcblx0XHRpZiAobGFuZykge1xuXHRcdFx0cmV0dXJuIGxhbmcuc3BsaXQoJy0nKVswXTtcblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgZ2V0Rmlyc3RCcm93c2VyTG9jYWxlKCkge1xuXHRcdGNvbnN0IG5hdmlnYXRvciA9IHdpbmRvdy5uYXZpZ2F0b3I7XG5cdFx0Y29uc3QgcHJvcGVydGllcyA9IFsnbGFuZ3VhZ2UnLCAnYnJvd3Nlckxhbmd1YWdlJywgJ3N5c3RlbUxhbmd1YWdlJywgJ3VzZXJMYW5ndWFnZSddO1xuXHRcdGxldCBsYW5nO1xuXHRcdGlmIChBcnJheS5pc0FycmF5KG5hdmlnYXRvci5sYW5ndWFnZXMpKSB7XG5cdFx0XHRsYW5nID0gbmF2aWdhdG9yLmxhbmd1YWdlc1swXTtcblx0XHR9XG5cdFx0bGV0IGkgPSAwO1xuXHRcdHdoaWxlICghbGFuZyAmJiBpIDwgcHJvcGVydGllcy5sZW5ndGgpIHtcblx0XHRcdGxhbmcgPSBuYXZpZ2F0b3JbcHJvcGVydGllc1tpXV07XG5cdFx0XHRpKys7XG5cdFx0fVxuXHRcdHJldHVybiBsYW5nO1xuXHR9XG5cbn1cbiJdfQ==