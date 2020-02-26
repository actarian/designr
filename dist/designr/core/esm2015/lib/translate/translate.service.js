import { isPlatformBrowser } from '@angular/common';
import { EventEmitter, Injectable, Injector } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { IdentityService } from '../models/identity.service';
import * as i0 from "@angular/core";
export class TranslateService extends IdentityService {
    constructor(injector) {
        super(injector);
        this.injector = injector;
        this.events = new EventEmitter();
        this.language_ = new BehaviorSubject(undefined);
        this.languages_ = new BehaviorSubject([]);
        this.languages_.next(this.config.languages);
    }
    get collection() {
        return '/api/translate';
    }
    get lang() {
        return TranslateService.lang_;
    }
    set lang(lang) {
        if (lang !== TranslateService.lang_) {
            TranslateService.lang_ = lang;
            const languages = this.languages_.getValue();
            if (languages.length) {
                const language = languages.find(x => x.lang === lang);
                this.language_.next(language);
            }
        }
    }
    get language() {
        return this.language_.getValue();
    }
    get languages() {
        return this.languages_.getValue();
    }
    observe$() {
        // console.log(new Error().stack);
        return this.language_.pipe(filter(x => x !== undefined), switchMap((language) => this.getTranslation(language.lang)));
    }
    getTranslation(lang) {
        if (!lang || !lang.trim()) {
            return of(null);
        }
        TranslateService.lang_ = lang;
        if (TranslateService.cache[lang]) {
            return of(TranslateService.cache[lang]);
        }
        else {
            return this.get(`?lang=${lang}`, { lang }).pipe(
            // take(1),
            map((x) => {
                if (x.length && x[0]) {
                    const labels = x[0].labels;
                    TranslateService.cache[lang] = labels;
                    this.events.emit(labels);
                    return labels;
                }
                else {
                    return of(null);
                }
            }));
        }
    }
    getTranslate(key, defaultValue, params) {
        // console.log('TranslateService.getTranslate', key, TranslateService.cache, TranslateService.lang_);
        if (key) {
            let value = null;
            let labels = TranslateService.cache[TranslateService.lang_];
            // console.log('labels', TranslateService.lang_, TranslateService.cache, labels);
            if (labels) {
                const keys = key.split('.');
                let k = keys.shift();
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
    }
    transform(key, defaultValue, params) {
        const value = this.getTranslate(key, defaultValue, params);
        return value;
    }
    parseTranslate(value, key, defaultValue, params) {
        if (value == null) {
            return defaultValue || this.missingTranslate(key);
        }
        else if (params) {
            return this.parseParams(value, params);
        }
        return value;
    }
    missingTranslate(key) {
        if (this.missingHandler) {
            return typeof this.missingHandler === 'function' ?
                this.missingHandler(key) :
                this.missingHandler;
        }
        return key;
    }
    parseParams(value, params) {
        const TEMPLATEREGEXP_ = /@([^{}\s]*)/g; // /{{\s?([^{}\s]*)\s?}}/g;
        return value.replace(TEMPLATEREGEXP_, (text, key) => {
            const replacer = params[key];
            return typeof replacer !== 'undefined' ? replacer : text;
        });
    }
    use(lang) {
    }
    setDefaultLang(lang) {
    }
    addLangs(lang) {
    }
    getBrowserLang() {
        if (isPlatformBrowser(this.platformId)) {
            const lang = this.getFirstBrowserLang() || this.config.defaultLanguage; // navigator.languages ? navigator.languages[0] : (navigator.language || navigator['userLanguage'] || this.config.defaultLanguage);
            // console.log('getBrowserLang', lang, navigator.languages);
            return lang;
        }
        else {
            return this.config.defaultLanguage;
        }
    }
    getFirstBrowserLang() {
        const lang = this.getFirstBrowserLocale();
        if (lang) {
            return lang.split('-')[0];
        }
    }
    getFirstBrowserLocale() {
        const navigator = window.navigator;
        const properties = ['language', 'browserLanguage', 'systemLanguage', 'userLanguage'];
        let lang;
        if (Array.isArray(navigator.languages)) {
            lang = navigator.languages[0];
        }
        let i = 0;
        while (!lang && i < properties.length) {
            lang = navigator[properties[i]];
            i++;
        }
        return lang;
    }
}
TranslateService.cache = {};
TranslateService.lang_ = null;
TranslateService.ɵfac = function TranslateService_Factory(t) { return new (t || TranslateService)(i0.ɵɵinject(i0.Injector)); };
TranslateService.ɵprov = i0.ɵɵdefineInjectable({ token: TranslateService, factory: TranslateService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TranslateService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i0.Injector }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb3JlLyIsInNvdXJjZXMiOlsibGliL3RyYW5zbGF0ZS90cmFuc2xhdGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkUsT0FBTyxFQUFFLGVBQWUsRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdkQsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDRCQUE0QixDQUFDOztBQU03RCxNQUFNLE9BQU8sZ0JBQXNDLFNBQVEsZUFBa0I7SUFxQzVFLFlBQ1csUUFBa0I7UUFFNUIsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRk4sYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQTdCdEIsV0FBTSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRzlDLGNBQVMsR0FBUSxJQUFJLGVBQWUsQ0FBTSxTQUFTLENBQUMsQ0FBQztRQUNyRCxlQUFVLEdBQWdDLElBQUksZUFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBNEJ6RSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFyQ0QsSUFBSSxVQUFVO1FBQ2IsT0FBTyxnQkFBZ0IsQ0FBQztJQUN6QixDQUFDO0lBUUQsSUFBVyxJQUFJO1FBQ2QsT0FBTyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7SUFDL0IsQ0FBQztJQUNELElBQVcsSUFBSSxDQUFDLElBQVk7UUFDM0IsSUFBSSxJQUFJLEtBQUssZ0JBQWdCLENBQUMs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QUUsaUJBQWlCLEVBQUUsZ0JBQWdCLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFDckYsSUFBSSxJQUFJLENBQUM7UUFDVCxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ3ZDLElBQUksR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzlCO1FBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1YsT0FBTyxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsVUFBVSxDQUFDLE1BQU0sRUFBRTtZQUN0QyxJQUFJLEdBQUcsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLENBQUMsRUFBRSxDQUFDO1NBQ0o7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7O0FBMUtNLHNCQUFLLEdBQU8sRUFBRSxDQUFDO0FBQ2Ysc0JBQUssR0FBVyxJQUFJLENBQUM7Z0ZBSGhCLGdCQUFnQjt3REFBaEIsZ0JBQWdCLFdBQWhCLGdCQUFnQixtQkFGaEIsTUFBTTtrREFFTixnQkFBZ0I7Y0FINUIsVUFBVTtlQUFDO2dCQUNYLFVBQVUsRUFBRSxNQUFNO2FBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBJbmplY3RhYmxlLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IElkZW50aXR5U2VydmljZSB9IGZyb20gJy4uL21vZGVscy9pZGVudGl0eS5zZXJ2aWNlJztcbmltcG9ydCB7IFRyYW5zbGF0ZSB9IGZyb20gJy4vdHJhbnNsYXRlJztcblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgVHJhbnNsYXRlU2VydmljZTxUIGV4dGVuZHMgVHJhbnNsYXRlPiBleHRlbmRzIElkZW50aXR5U2VydmljZTxUPiB7XG5cblx0c3RhdGljIGNhY2hlOiB7fSA9IHt9O1xuXHRzdGF0aWMgbGFuZ186IHN0cmluZyA9IG51bGw7XG5cblx0Z2V0IGNvbGxlY3Rpb24oKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJy9hcGkvdHJhbnNsYXRlJztcblx0fVxuXG5cdHB1YmxpYyBldmVudHM6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRwdWJsaWMgbWlzc2luZ0hhbmRsZXI/OiBGdW5jdGlvbjtcblxuXHRwcml2YXRlIGxhbmd1YWdlXzogYW55ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxhbnk+KHVuZGVmaW5lZCk7XG5cdHByaXZhdGUgbGFuZ3VhZ2VzXzogQmVoYXZpb3JTdWJqZWN0PEFycmF5PGFueT4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChbXSk7XG5cblx0cHVibGljIGdldCBsYW5nKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIFRyYW5zbGF0ZVNlcnZpY2UubGFuZ187XG5cdH1cblx0cHVibGljIHNldCBsYW5nKGxhbmc6IHN0cmluZykge1xuXHRcdGlmIChsYW5nICE9PSBUcmFuc2xhdGVTZXJ2aWNlLmxhbmdfKSB7XG5cdFx0XHRUcmFuc2xhdGVTZXJ2aWNlLmxhbmdfID0gbGFuZztcblx0XHRcdGNvbnN0IGxhbmd1YWdlcyA9IHRoaXMubGFuZ3VhZ2VzXy5nZXRWYWx1ZSgpO1xuXHRcdFx0aWYgKGxhbmd1YWdlcy5sZW5ndGgpIHtcblx0XHRcdFx0Y29uc3QgbGFuZ3VhZ2UgPSBsYW5ndWFnZXMuZmluZCh4ID0+IHgubGFuZyA9PT0gbGFuZyk7XG5cdFx0XHRcdHRoaXMubGFuZ3VhZ2VfLm5leHQobGFuZ3VhZ2UpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyBnZXQgbGFuZ3VhZ2UoKSB7XG5cdFx0cmV0dXJuIHRoaXMubGFuZ3VhZ2VfLmdldFZhbHVlKCk7XG5cdH1cblxuXHRwdWJsaWMgZ2V0IGxhbmd1YWdlcygpIHtcblx0XHRyZXR1cm4gdGhpcy5sYW5ndWFnZXNfLmdldFZhbHVlKCk7XG5cdH1cblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcm90ZWN0ZWQgaW5qZWN0b3I6IEluamVjdG9yXG5cdCkge1xuXHRcdHN1cGVyKGluamVjdG9yKTtcblx0XHR0aGlzLmxhbmd1YWdlc18ubmV4dCh0aGlzLmNvbmZpZy5sYW5ndWFnZXMpO1xuXHR9XG5cblx0cHVibGljIG9ic2VydmUkKCk6IE9ic2VydmFibGU8e30+IHtcblx0XHQvLyBjb25zb2xlLmxvZyhuZXcgRXJyb3IoKS5zdGFjayk7XG5cdFx0cmV0dXJuIHRoaXMubGFuZ3VhZ2VfLnBpcGUoXG5cdFx0XHRmaWx0ZXIoeCA9PiB4ICE9PSB1bmRlZmluZWQpLFxuXHRcdFx0c3dpdGNoTWFwKChsYW5ndWFnZTogYW55KSA9PiB0aGlzLmdldFRyYW5zbGF0aW9uKGxhbmd1YWdlLmxhbmcpKSxcblx0XHQpO1xuXHR9XG5cblx0cHVibGljIGdldFRyYW5zbGF0aW9uKGxhbmc6IHN0cmluZyk6IE9ic2VydmFibGU8e30+IHtcblx0XHRpZiAoIWxhbmcgfHwgIWxhbmcudHJpbSgpKSB7XG5cdFx0XHRyZXR1cm4gb2YobnVsbCk7XG5cdFx0fVxuXHRcdFRyYW5zbGF0ZVNlcnZpY2UubGFuZ18gPSBsYW5nO1xuXHRcdGlmIChUcmFuc2xhdGVTZXJ2aWNlLmNhY2hlW2xhbmddKSB7XG5cdFx0XHRyZXR1cm4gb2YoVHJhbnNsYXRlU2VydmljZS5jYWNoZVtsYW5nXSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmdldChgP2xhbmc9JHtsYW5nfWAsIHsgbGFuZyB9KS5waXBlKFxuXHRcdFx0XHQvLyB0YWtlKDEpLFxuXHRcdFx0XHRtYXAoKHg6IFRyYW5zbGF0ZVtdKSA9PiB7XG5cdFx0XHRcdFx0aWYgKHgubGVuZ3RoICYmIHhbMF0pIHtcblx0XHRcdFx0XHRcdGNvbnN0IGxhYmVscyA9IHhbMF0ubGFiZWxzO1xuXHRcdFx0XHRcdFx0VHJhbnNsYXRlU2VydmljZS5jYWNoZVtsYW5nXSA9IGxhYmVscztcblx0XHRcdFx0XHRcdHRoaXMuZXZlbnRzLmVtaXQobGFiZWxzKTtcblx0XHRcdFx0XHRcdHJldHVybiBsYWJlbHM7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHJldHVybiBvZihudWxsKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pLFxuXHRcdFx0XHQvLyB0YXAoeCA9PiB0aGlzLmxvZ2dlci5sb2coYGZvdW5kIGxhYmVsIG1hdGNoaW5nIFwiJHtsYW5nfVwiYCkpXG5cdFx0XHQpO1xuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyBnZXRUcmFuc2xhdGUoa2V5OiBzdHJpbmcsIGRlZmF1bHRWYWx1ZT86IHN0cmluZywgcGFyYW1zPzogYW55KTogc3RyaW5nIHwgYW55IHtcblx0XHQvLyBjb25zb2xlLmxvZygnVHJhbnNsYXRlU2VydmljZS5nZXRUcmFuc2xhdGUnLCBrZXksIFRyYW5zbGF0ZVNlcnZpY2UuY2FjaGUsIFRyYW5zbGF0ZVNlcnZpY2UubGFuZ18pO1xuXHRcdGlmIChrZXkpIHtcblx0XHRcdGxldCB2YWx1ZTogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG5cdFx0XHRsZXQgbGFiZWxzOiBhbnkgPSBUcmFuc2xhdGVTZXJ2aWNlLmNhY2hlW1RyYW5zbGF0ZVNlcnZpY2UubGFuZ19dO1xuXHRcdFx0Ly8gY29uc29sZS5sb2coJ2xhYmVscycsIFRyYW5zbGF0ZVNlcnZpY2UubGFuZ18sIFRyYW5zbGF0ZVNlcnZpY2UuY2FjaGUsIGxhYmVscyk7XG5cdFx0XHRpZiAobGFiZWxzKSB7XG5cdFx0XHRcdGNvbnN0IGtleXM6IHN0cmluZ1tdID0ga2V5LnNwbGl0KCcuJyk7XG5cdFx0XHRcdGxldCBrID0ga2V5cy5zaGlmdCgpO1xuXHRcdFx0XHR3aGlsZSAoa2V5cy5sZW5ndGggPiAwICYmIGxhYmVsc1trXSkge1xuXHRcdFx0XHRcdGxhYmVscyA9IGxhYmVsc1trXTtcblx0XHRcdFx0XHRrID0ga2V5cy5zaGlmdCgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHZhbHVlID0gbGFiZWxzW2tdOyAvLyB8fCBgeyR7a319YDtcblx0XHRcdFx0aWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycpIHtcblx0XHRcdFx0XHR2YWx1ZSA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiB0aGlzLnBhcnNlVHJhbnNsYXRlKHZhbHVlLCBrZXksIGRlZmF1bHRWYWx1ZSwgcGFyYW1zKTtcblx0XHR9XG5cdH1cblxuXHRwdWJsaWMgdHJhbnNmb3JtKGtleTogc3RyaW5nLCBkZWZhdWx0VmFsdWU/OiBzdHJpbmcsIHBhcmFtcz86IGFueSk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG5cdFx0Y29uc3QgdmFsdWUgPSB0aGlzLmdldFRyYW5zbGF0ZShrZXksIGRlZmF1bHRWYWx1ZSwgcGFyYW1zKTtcblx0XHRyZXR1cm4gdmFsdWU7XG5cdH1cblxuXHRwcml2YXRlIHBhcnNlVHJhbnNsYXRlKHZhbHVlOiBzdHJpbmcgfCBudWxsLCBrZXk6IHN0cmluZywgZGVmYXVsdFZhbHVlPzogc3RyaW5nLCBwYXJhbXM/OiBhbnkpOiBzdHJpbmcgfCBhbnkge1xuXHRcdGlmICh2YWx1ZSA9PSBudWxsKSB7XG5cdFx0XHRyZXR1cm4gZGVmYXVsdFZhbHVlIHx8IHRoaXMubWlzc2luZ1RyYW5zbGF0ZShrZXkpO1xuXHRcdH0gZWxzZSBpZiAocGFyYW1zKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5wYXJzZVBhcmFtcyh2YWx1ZSwgcGFyYW1zKTtcblx0XHR9XG5cdFx0cmV0dXJuIHZhbHVlO1xuXHR9XG5cblx0cHJpdmF0ZSBtaXNzaW5nVHJhbnNsYXRlKGtleTogc3RyaW5nKTogc3RyaW5nIHtcblx0XHRpZiAodGhpcy5taXNzaW5nSGFuZGxlcikge1xuXHRcdFx0cmV0dXJuIHR5cGVvZiB0aGlzLm1pc3NpbmdIYW5kbGVyID09PSAnZnVuY3Rpb24nID9cblx0XHRcdFx0dGhpcy5taXNzaW5nSGFuZGxlcihrZXkpIDpcblx0XHRcdFx0dGhpcy5taXNzaW5nSGFuZGxlcjtcblx0XHR9XG5cdFx0cmV0dXJuIGtleTtcblx0fVxuXG5cdHByaXZhdGUgcGFyc2VQYXJhbXModmFsdWU6IHN0cmluZywgcGFyYW1zOiBhbnkpOiBzdHJpbmcge1xuXHRcdGNvbnN0IFRFTVBMQVRFUkVHRVhQXzogUmVnRXhwID0gL0AoW157fVxcc10qKS9nOyAvLyAve3tcXHM/KFtee31cXHNdKilcXHM/fX0vZztcblx0XHRyZXR1cm4gdmFsdWUucmVwbGFjZShURU1QTEFURVJFR0VYUF8sICh0ZXh0OiBzdHJpbmcsIGtleTogc3RyaW5nKSA9PiB7XG5cdFx0XHRjb25zdCByZXBsYWNlcjogc3RyaW5nID0gcGFyYW1zW2tleV0gYXMgc3RyaW5nO1xuXHRcdFx0cmV0dXJuIHR5cGVvZiByZXBsYWNlciAhPT0gJ3VuZGVmaW5lZCcgPyByZXBsYWNlciA6IHRleHQ7XG5cdFx0fSk7XG5cdH1cblxuXHRwdWJsaWMgdXNlKGxhbmc6IHN0cmluZykge1xuXG5cdH1cblxuXHRwdWJsaWMgc2V0RGVmYXVsdExhbmcobGFuZzogc3RyaW5nKSB7XG5cblx0fVxuXG5cdHB1YmxpYyBhZGRMYW5ncyhsYW5nOiBzdHJpbmdbXSkge1xuXG5cdH1cblxuXHRwdWJsaWMgZ2V0QnJvd3NlckxhbmcoKTogc3RyaW5nIHtcblx0XHRpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuXHRcdFx0Y29uc3QgbGFuZyA9IHRoaXMuZ2V0Rmlyc3RCcm93c2VyTGFuZygpIHx8IHRoaXMuY29uZmlnLmRlZmF1bHRMYW5ndWFnZTsgLy8gbmF2aWdhdG9yLmxhbmd1YWdlcyA/IG5hdmlnYXRvci5sYW5ndWFnZXNbMF0gOiAobmF2aWdhdG9yLmxhbmd1YWdlIHx8IG5hdmlnYXRvclsndXNlckxhbmd1YWdlJ10gfHwgdGhpcy5jb25maWcuZGVmYXVsdExhbmd1YWdlKTtcblx0XHRcdC8vIGNvbnNvbGUubG9nKCdnZXRCcm93c2VyTGFuZycsIGxhbmcsIG5hdmlnYXRvci5sYW5ndWFnZXMpO1xuXHRcdFx0cmV0dXJuIGxhbmc7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmNvbmZpZy5kZWZhdWx0TGFuZ3VhZ2U7XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIGdldEZpcnN0QnJvd3NlckxhbmcoKSB7XG5cdFx0Y29uc3QgbGFuZyA9IHRoaXMuZ2V0Rmlyc3RCcm93c2VyTG9jYWxlKCk7XG5cdFx0aWYgKGxhbmcpIHtcblx0XHRcdHJldHVybiBsYW5nLnNwbGl0KCctJylbMF07XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIGdldEZpcnN0QnJvd3NlckxvY2FsZSgpIHtcblx0XHRjb25zdCBuYXZpZ2F0b3IgPSB3aW5kb3cubmF2aWdhdG9yO1xuXHRcdGNvbnN0IHByb3BlcnRpZXMgPSBbJ2xhbmd1YWdlJywgJ2Jyb3dzZXJMYW5ndWFnZScsICdzeXN0ZW1MYW5ndWFnZScsICd1c2VyTGFuZ3VhZ2UnXTtcblx0XHRsZXQgbGFuZztcblx0XHRpZiAoQXJyYXkuaXNBcnJheShuYXZpZ2F0b3IubGFuZ3VhZ2VzKSkge1xuXHRcdFx0bGFuZyA9IG5hdmlnYXRvci5sYW5ndWFnZXNbMF07XG5cdFx0fVxuXHRcdGxldCBpID0gMDtcblx0XHR3aGlsZSAoIWxhbmcgJiYgaSA8IHByb3BlcnRpZXMubGVuZ3RoKSB7XG5cdFx0XHRsYW5nID0gbmF2aWdhdG9yW3Byb3BlcnRpZXNbaV1dO1xuXHRcdFx0aSsrO1xuXHRcdH1cblx0XHRyZXR1cm4gbGFuZztcblx0fVxuXG59XG4iXX0=