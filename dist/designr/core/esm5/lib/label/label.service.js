import { __extends } from "tslib";
import { EventEmitter, Injectable, Injector } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { catchError, debounceTime, filter, map, switchMap, tap } from 'rxjs/operators';
import { ApiService } from '../api/api.service';
import * as i0 from "@angular/core";
var LabelKey = /** @class */ (function () {
    function LabelKey() {
    }
    return LabelKey;
}());
export { LabelKey };
var LabelService = /** @class */ (function (_super) {
    __extends(LabelService, _super);
    function LabelService(injector) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this.keys = {};
        _this.values$ = new BehaviorSubject({});
        _this.emitter$ = new EventEmitter();
        return _this;
    }
    Object.defineProperty(LabelService.prototype, "collection", {
        get: function () {
            return '/api/label';
        },
        enumerable: true,
        configurable: true
    });
    LabelService.prototype.transform = function (key, defaultValue, params) {
        var values = this.values$.getValue();
        if (values.hasOwnProperty(key)) {
            return this.parseLabel(values[key], params);
        }
        else if (!this.keys.hasOwnProperty(key)) {
            values[key] = null;
            Object.defineProperty(this.keys, key, {
                value: { id: key, defaultValue: defaultValue },
                enumerable: true,
                writable: false,
            });
            this.emitter$.emit();
            return null;
        }
    };
    LabelService.prototype.transform$ = function (key, defaultValue, params) {
        var _this = this;
        var values = this.values$.getValue();
        if (values.hasOwnProperty(key)) {
            return of(this.parseLabel(values[key], params));
        }
        else if (!this.keys.hasOwnProperty(key)) {
            values[key] = null;
            Object.defineProperty(this.keys, key, {
                value: { id: key, defaultValue: defaultValue },
                enumerable: true,
                writable: false,
            });
            this.emitter$.emit();
        }
        return this.values$.pipe(map(function (values) { return _this.parseLabel(values[key], params); }));
    };
    LabelService.prototype.observe$ = function () {
        var _this = this;
        return this.emitter$.pipe(debounceTime(1), switchMap(function (x) { return _this.collect$(); }), filter(function (x) { return x !== null; }));
    };
    LabelService.prototype.collect$ = function () {
        var _this = this;
        if (Object.keys(this.keys).length) {
            var keys_1 = Object.keys(this.keys).map(function (x) { return _this.keys[x]; });
            this.keys = {};
            return this.statePost(keys_1).pipe(map(function (labels) {
                return labels.reduce(function (values, x) {
                    values[x.id] = _this.getLabel(x);
                    return values;
                }, {});
            }), tap(function (labels) {
                var values = _this.values$.getValue();
                Object.assign(values, labels);
                _this.values$.next(values);
            }), catchError(function (error) {
                console.log(error);
                var labels = keys_1.reduce(function (values, x) {
                    values[x.id] = _this.getLabel(x);
                    return values;
                }, {});
                var values = _this.values$.getValue();
                Object.assign(values, labels);
                // return this.values$.next(values);
                return of(null);
            }));
        }
        else {
            return of(null);
        }
    };
    LabelService.prototype.parseLabel = function (value, params) {
        if (value && params) {
            var TEMPLATE_REGEXP = /@([^{}\s]*)/g;
            return value.replace(TEMPLATE_REGEXP, function (text, key) {
                var replacer = params[key];
                return typeof replacer !== 'undefined' ? replacer : text;
            });
        }
        else {
            return value;
        }
    };
    LabelService.prototype.getLabel = function (label) {
        return label.value || label.defaultValue || this.getMissingLabel(label);
    };
    LabelService.prototype.getMissingLabel = function (label) {
        if (typeof this.missingHandler === 'function') {
            return this.missingHandler(label);
        }
        return label.id;
    };
    LabelService.ɵfac = function LabelService_Factory(t) { return new (t || LabelService)(i0.ɵɵinject(i0.Injector)); };
    LabelService.ɵprov = i0.ɵɵdefineInjectable({ token: LabelService, factory: LabelService.ɵfac, providedIn: 'root' });
    return LabelService;
}(ApiService));
export { LabelService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(LabelService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i0.Injector }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFiZWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJsaWIvbGFiZWwvbGFiZWwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25FLE9BQU8sRUFBRSxlQUFlLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3ZELE9BQU8sRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7QUFHaEQ7SUFBQTtJQUlBLENBQUM7SUFBRCxlQUFDO0FBQUQsQ0FBQyxBQUpELElBSUM7O0FBRUQ7SUFHbUQsZ0NBQWE7SUFZL0Qsc0JBQ1csUUFBa0I7UUFEN0IsWUFHQyxrQkFBTSxRQUFRLENBQUMsU0FDZjtRQUhVLGNBQVEsR0FBUixRQUFRLENBQVU7UUFQckIsVUFBSSxHQUFpQyxFQUFFLENBQUM7UUFDeEMsYUFBTyxHQUFnRCxJQUFJLGVBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMvRSxjQUFRLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7O0lBUXpELENBQUM7SUFkRCxzQkFBSSxvQ0FBVTthQUFkO1lBQ0MsT0FBTyxZQUFZLENBQUM7UUFDckIsQ0FBQzs7O09BQUE7SUFjRCxnQ0FBUyxHQUFULFVBQVUsR0FBVyxFQUFFLFlBQXFCLEVBQUUsTUFBWTtRQUN6RCxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3ZDLElBQUksTUFBTSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUMvQixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxD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LEVBQUU7WUFDcEIsSUFBTSxlQUFlLEdBQVcsY0FBYyxDQUFDO1lBQy9DLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxlQUFlLEVBQUUsVUFBQyxJQUFZLEVBQUUsR0FBVztnQkFDL0QsSUFBTSxRQUFRLEdBQVcsTUFBTSxDQUFDLEdBQUcsQ0FBVyxDQUFDO2dCQUMvQyxPQUFPLE9BQU8sUUFBUSxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDMUQsQ0FBQyxDQUFDLENBQUM7U0FDSDthQUFNO1lBQ04sT0FBTyxLQUFLLENBQUM7U0FDYjtJQUNGLENBQUM7SUFFTywrQkFBUSxHQUFoQixVQUFpQixLQUFlO1FBQy9CLE9BQU8sS0FBSyxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDekUsQ0FBQztJQUVPLHNDQUFlLEdBQXZCLFVBQXdCLEtBQWU7UUFDdEMsSUFBSSxPQUFPLElBQUksQ0FBQyxjQUFjLEtBQUssVUFBVSxFQUFFO1lBQzlDLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNsQztRQUNELE9BQU8sS0FBSyxDQUFDLEVBQUUsQ0FBQztJQUNqQixDQUFDOzRFQWxIVyxZQUFZO3dEQUFaLFlBQVksV0FBWixZQUFZLG1CQUZaLE1BQU07dUJBYm5CO0NBbUlDLEFBdkhELENBR21ELFVBQVUsR0FvSDVEO1NBcEhZLFlBQVk7a0RBQVosWUFBWTtjQUh4QixVQUFVO2VBQUM7Z0JBQ1gsVUFBVSxFQUFFLE1BQU07YUFDbEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIsIEluamVjdGFibGUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBkZWJvdW5jZVRpbWUsIGZpbHRlciwgbWFwLCBzd2l0Y2hNYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuLi9hcGkvYXBpLnNlcnZpY2UnO1xuaW1wb3J0IHsgTGFiZWwgfSBmcm9tICcuL2xhYmVsJztcblxuZXhwb3J0IGNsYXNzIExhYmVsS2V5IHtcblx0aWQ/OiBzdHJpbmc7XG5cdHZhbHVlPzogc3RyaW5nO1xuXHRkZWZhdWx0VmFsdWU/OiBzdHJpbmc7XG59XG5cbkBJbmplY3RhYmxlKHtcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIExhYmVsU2VydmljZTxUIGV4dGVuZHMgTGFiZWw+IGV4dGVuZHMgQXBpU2VydmljZTxUPiB7XG5cblx0Z2V0IGNvbGxlY3Rpb24oKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJy9hcGkvbGFiZWwnO1xuXHR9XG5cblx0cHJpdmF0ZSBrZXlzOiB7IFtrZXk6IHN0cmluZ106IExhYmVsS2V5OyB9ID0ge307XG5cdHByaXZhdGUgdmFsdWVzJDogQmVoYXZpb3JTdWJqZWN0PHsgW2tleTogc3RyaW5nXTogc3RyaW5nOyB9PiA9IG5ldyBCZWhhdmlvclN1YmplY3Qoe30pO1xuXHRwcml2YXRlIGVtaXR0ZXIkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRwdWJsaWMgbWlzc2luZ0hhbmRsZXI/OiBGdW5jdGlvbjtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcm90ZWN0ZWQgaW5qZWN0b3I6IEluamVjdG9yLFxuXHQpIHtcblx0XHRzdXBlcihpbmplY3Rvcik7XG5cdH1cblxuXHR0cmFuc2Zvcm0oa2V5OiBzdHJpbmcsIGRlZmF1bHRWYWx1ZT86IHN0cmluZywgcGFyYW1zPzogYW55KTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcblx0XHRjb25zdCB2YWx1ZXMgPSB0aGlzLnZhbHVlcyQuZ2V0VmFsdWUoKTtcblx0XHRpZiAodmFsdWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcblx0XHRcdHJldHVybiB0aGlzLnBhcnNlTGFiZWwodmFsdWVzW2tleV0sIHBhcmFtcyk7XG5cdFx0fSBlbHNlIGlmICghdGhpcy5rZXlzLmhhc093blByb3BlcnR5KGtleSkpIHtcblx0XHRcdHZhbHVlc1trZXldID0gbnVsbDtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLmtleXMsIGtleSwge1xuXHRcdFx0XHR2YWx1ZTogeyBpZDoga2V5LCBkZWZhdWx0VmFsdWU6IGRlZmF1bHRWYWx1ZSB9LFxuXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0XHR3cml0YWJsZTogZmFsc2UsXG5cdFx0XHR9KTtcblx0XHRcdHRoaXMuZW1pdHRlciQuZW1pdCgpO1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHR9XG5cblx0dHJhbnNmb3JtJChrZXk6IHN0cmluZywgZGVmYXVsdFZhbHVlPzogc3RyaW5nLCBwYXJhbXM/OiBhbnkpOiBPYnNlcnZhYmxlPHN0cmluZyB8IHVuZGVmaW5lZD4ge1xuXHRcdGNvbnN0IHZhbHVlcyA9IHRoaXMudmFsdWVzJC5nZXRWYWx1ZSgpO1xuXHRcdGlmICh2YWx1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuXHRcdFx0cmV0dXJuIG9mKHRoaXMucGFyc2VMYWJlbCh2YWx1ZXNba2V5XSwgcGFyYW1zKSk7XG5cdFx0fSBlbHNlIGlmICghdGhpcy5rZXlzLmhhc093blByb3BlcnR5KGtleSkpIHtcblx0XHRcdHZhbHVlc1trZXldID0gbnVsbDtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLmtleXMsIGtleSwge1xuXHRcdFx0XHR2YWx1ZTogeyBpZDoga2V5LCBkZWZhdWx0VmFsdWU6IGRlZmF1bHRWYWx1ZSB9LFxuXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0XHR3cml0YWJsZTogZmFsc2UsXG5cdFx0XHR9KTtcblx0XHRcdHRoaXMuZW1pdHRlciQuZW1pdCgpO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy52YWx1ZXMkLnBpcGUoXG5cdFx0XHRtYXAodmFsdWVzID0+IHRoaXMucGFyc2VMYWJlbCh2YWx1ZXNba2V5XSwgcGFyYW1zKSlcblx0XHQpO1xuXHR9XG5cblx0b2JzZXJ2ZSQoKTogT2JzZXJ2YWJsZTx7IFtrZXk6IHN0cmluZ106IHN0cmluZzsgfT4ge1xuXHRcdHJldHVybiB0aGlzLmVtaXR0ZXIkLnBpcGUoXG5cdFx0XHRkZWJvdW5jZVRpbWUoMSksXG5cdFx0XHRzd2l0Y2hNYXAoeCA9PiB0aGlzLmNvbGxlY3QkKCkpLFxuXHRcdFx0ZmlsdGVyKHggPT4geCAhPT0gbnVsbCksXG5cdFx0KTtcblx0fVxuXG5cdGNvbGxlY3QkKCk6IE9ic2VydmFibGU8eyBba2V5OiBzdHJpbmddOiBzdHJpbmc7IH0+IHtcblx0XHRpZiAoT2JqZWN0LmtleXModGhpcy5rZXlzKS5sZW5ndGgpIHtcblx0XHRcdGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh0aGlzLmtleXMpLm1hcCh4ID0+IHRoaXMua2V5c1t4XSk7XG5cdFx0XHR0aGlzLmtleXMgPSB7fTtcblx0XHRcdHJldHVybiB0aGlzLnN0YXRlUG9zdChrZXlzKS5waXBlKFxuXHRcdFx0XHRtYXAoKGxhYmVsczogTGFiZWxLZXlbXSkgPT4ge1xuXHRcdFx0XHRcdHJldHVybiBsYWJlbHMucmVkdWNlKCh2YWx1ZXMsIHgpID0+IHtcblx0XHRcdFx0XHRcdHZhbHVlc1t4LmlkXSA9IHRoaXMuZ2V0TGFiZWwoeCk7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdmFsdWVzO1xuXHRcdFx0XHRcdH0sIHt9KTtcblx0XHRcdFx0fSksXG5cdFx0XHRcdHRhcCgobGFiZWxzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZzsgfSkgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IHZhbHVlcyA9IHRoaXMudmFsdWVzJC5nZXRWYWx1ZSgpO1xuXHRcdFx0XHRcdE9iamVjdC5hc3NpZ24odmFsdWVzLCBsYWJlbHMpO1xuXHRcdFx0XHRcdHRoaXMudmFsdWVzJC5uZXh0KHZhbHVlcyk7XG5cdFx0XHRcdH0pLFxuXHRcdFx0XHRjYXRjaEVycm9yKGVycm9yID0+IHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XG5cdFx0XHRcdFx0Y29uc3QgbGFiZWxzID0ga2V5cy5yZWR1Y2UoKHZhbHVlcywgeCkgPT4ge1xuXHRcdFx0XHRcdFx0dmFsdWVzW3guaWRdID0gdGhpcy5nZXRMYWJlbCh4KTtcblx0XHRcdFx0XHRcdHJldHVybiB2YWx1ZXM7XG5cdFx0XHRcdFx0fSwge30pO1xuXHRcdFx0XHRcdGNvbnN0IHZhbHVlcyA9IHRoaXMudmFsdWVzJC5nZXRWYWx1ZSgpO1xuXHRcdFx0XHRcdE9iamVjdC5hc3NpZ24odmFsdWVzLCBsYWJlbHMpO1xuXHRcdFx0XHRcdC8vIHJldHVybiB0aGlzLnZhbHVlcyQubmV4dCh2YWx1ZXMpO1xuXHRcdFx0XHRcdHJldHVybiBvZihudWxsKTtcblx0XHRcdFx0fSksXG5cdFx0XHQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gb2YobnVsbCk7XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIHBhcnNlTGFiZWwodmFsdWU6IHN0cmluZywgcGFyYW1zOiBhbnkpOiBzdHJpbmcge1xuXHRcdGlmICh2YWx1ZSAmJiBwYXJhbXMpIHtcblx0XHRcdGNvbnN0IFRFTVBMQVRFX1JFR0VYUDogUmVnRXhwID0gL0AoW157fVxcc10qKS9nO1xuXHRcdFx0cmV0dXJuIHZhbHVlLnJlcGxhY2UoVEVNUExBVEVfUkVHRVhQLCAodGV4dDogc3RyaW5nLCBrZXk6IHN0cmluZykgPT4ge1xuXHRcdFx0XHRjb25zdCByZXBsYWNlcjogc3RyaW5nID0gcGFyYW1zW2tleV0gYXMgc3RyaW5nO1xuXHRcdFx0XHRyZXR1cm4gdHlwZW9mIHJlcGxhY2VyICE9PSAndW5kZWZpbmVkJyA/IHJlcGxhY2VyIDogdGV4dDtcblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBnZXRMYWJlbChsYWJlbDogTGFiZWxLZXkpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuXHRcdHJldHVybiBsYWJlbC52YWx1ZSB8fCBsYWJlbC5kZWZhdWx0VmFsdWUgfHwgdGhpcy5nZXRNaXNzaW5nTGFiZWwobGFiZWwpO1xuXHR9XG5cblx0cHJpdmF0ZSBnZXRNaXNzaW5nTGFiZWwobGFiZWw6IExhYmVsS2V5KTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcblx0XHRpZiAodHlwZW9mIHRoaXMubWlzc2luZ0hhbmRsZXIgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdHJldHVybiB0aGlzLm1pc3NpbmdIYW5kbGVyKGxhYmVsKTtcblx0XHR9XG5cdFx0cmV0dXJuIGxhYmVsLmlkO1xuXHR9XG5cbn1cbiJdfQ==