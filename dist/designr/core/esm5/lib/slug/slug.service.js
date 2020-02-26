import { __extends } from "tslib";
import { EventEmitter, Injectable, Injector } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { catchError, debounceTime, filter, first, map, switchMap, tap } from 'rxjs/operators';
import { EntityService } from '../models/entity.service';
import * as i0 from "@angular/core";
var SlugKey = /** @class */ (function () {
    function SlugKey() {
    }
    return SlugKey;
}());
export { SlugKey };
var SlugService = /** @class */ (function (_super) {
    __extends(SlugService, _super);
    function SlugService(injector) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this.keys = {};
        _this.values$ = new BehaviorSubject({});
        _this.emitter$ = new EventEmitter();
        return _this;
    }
    Object.defineProperty(SlugService.prototype, "collection", {
        get: function () {
            return "/api/slug";
        },
        enumerable: true,
        configurable: true
    });
    SlugService.prototype.transform = function (key) {
        var values = this.values$.getValue();
        if (values.hasOwnProperty(key)) {
            return values[key];
        }
        else if (!this.keys.hasOwnProperty(key)) {
            values[key] = null;
            Object.defineProperty(this.keys, key, {
                value: { mnemonic: key },
                enumerable: true,
                writable: false,
            });
            this.emitter$.emit();
            return null;
        }
    };
    SlugService.prototype.transform$ = function (key) {
        var values = this.values$.getValue();
        if (values.hasOwnProperty(key)) {
            return of(values[key]);
        }
        else if (!this.keys.hasOwnProperty(key)) {
            Object.defineProperty(this.keys, key, {
                value: { mnemonic: key },
                enumerable: true,
                writable: false,
            });
            this.emitter$.emit();
        }
        return this.values$.pipe(map(function (values) { return values[key]; }));
    };
    SlugService.prototype.observe$ = function () {
        var _this = this;
        return this.emitter$.pipe(debounceTime(1), switchMap(function (x) { return _this.collect$(); }), filter(function (x) { return x !== null; }), first());
    };
    SlugService.prototype.collect$ = function () {
        var _this = this;
        if (Object.keys(this.keys).length) {
            var keys_1 = Object.keys(this.keys).map(function (x) { return _this.keys[x]; });
            this.keys = {};
            return this.statePost(keys_1).pipe(map(function (items) {
                return items.reduce(function (values, x) {
                    values[x.mnemonic] = [x.slug];
                    return values;
                }, {});
            }), tap(function (slugs) {
                var values = _this.values$.getValue();
                Object.assign(values, slugs);
                _this.values$.next(values);
            }), catchError(function (error) {
                console.log(error);
                var labels = keys_1.reduce(function (values, x) {
                    values[x.mnemonic] = null;
                    return values;
                }, {});
                var values = _this.values$.getValue();
                Object.assign(values, labels);
                return of(null);
            }));
        }
        else {
            return of(null);
        }
    };
    SlugService.ɵfac = function SlugService_Factory(t) { return new (t || SlugService)(i0.ɵɵinject(i0.Injector)); };
    SlugService.ɵprov = i0.ɵɵdefineInjectable({ token: SlugService, factory: SlugService.ɵfac, providedIn: 'root' });
    return SlugService;
}(EntityService));
export { SlugService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SlugService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i0.Injector }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2x1Zy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zbHVnL3NsdWcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25FLE9BQU8sRUFBRSxlQUFlLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3ZELE9BQU8sRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU5RixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7O0FBRXpEO0lBQUE7SUFJQSxDQUFDO0lBQUQsY0FBQztBQUFELENBQUMsQUFKRCxJQUlDOztBQUVEO0lBR2lDLCtCQUE0QjtJQVk1RCxxQkFDVyxRQUFrQjtRQUQ3QixZQUdDLGtCQUFNLFFBQVEsQ0FBQyxTQUNmO1FBSFUsY0FBUSxHQUFSLFFBQVEsQ0FBVTtRQVByQixVQUFJLEdBQWdDLEVBQUUsQ0FBQztRQUN2QyxhQUFPLEdBQWdELElBQUksZUFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQy9FLGNBQVEsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQzs7SUFRekQsQ0FBQztJQWRELHNCQUFJLG1DQUFVO2FBQWQ7WUFDQyxPQUFPLFdBQVcsQ0FBQztRQUNwQixDQUFDOzs7T0FBQTtJQWNELCtCQUFTLEdBQVQsVUFBVSxHQUFXO1FBQ3BCLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDdkMsSUFBSSxNQUFNLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQy9CLE9BQU8sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ25CO2FBQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQzFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUM7WUFDbkIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRTtnQkFDckMsS0FBSyxFQUFFLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRTtnQkFDeEIsVUFBVSxFQUFFLElBQUk7Z0JBQ2hCLFFBQVEsRUFBRSxLQUFLO2FBQ2YsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNyQixPQUFPLElBQUksQ0FBQztTQUNaO0lBQ0YsQ0FBQztJQUVELGdDQUFVLEdBQVYsVUFBVyxHQUFXO1FBQ3JCLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDdkMsSUFBSSxNQUFNLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQy9CLE9BQU8sRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ3ZCO2FBQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQzFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUU7Z0JBQ3JDLEtBQUssRUFBRSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUU7Z0JBQ3hCLFVBQVUsRUFBRSxJQUFJO2dCQUNoQixRQUFRLEVBQUUsS0FBSzthQUNmLENBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDckI7UUFDRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUN2QixHQUFHLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQVgsQ0FBVyxDQUFDLENBQzFCLENBQUM7SUFDSCxDQUFDO0lBRUQsOEJBQVEsR0FBUjtRQUFBLGlCQU9DO1FBTkEsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDeEIsWUFBWSxDQUFDLENBQUMsQ0FBQyxFQUNmLFNBQVMsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxRQUFRLEVBQUUsRUFBZixDQUFlLENBQUMsRUFDL0IsTUFBTSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxLQUFLLElBQUksRUFBVixDQUFVLENBQUMsRUFDdkIsS0FBSyxFQUFFLENBQ1AsQ0FBQztJQUNILENBQUM7SUFFRCw4QkFBUSxHQUFSO1FBQUEsaUJBOEJDO1FBN0JBLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxFQUFFO1lBQ2xDLElBQU0sTUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQVosQ0FBWSxDQUFDLENBQUM7WUFDM0QsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7WUFDZixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBSSxDQUFDLENBQUMsSUFBSSxDQUMvQixHQUFHLENBQUMsVUFBQyxLQUFzQjtnQkFDMUIsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQUMsTUFBTSxFQUFFLENBQUM7b0JBQzdCLE1BQU0sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQzlCLE9BQU8sTUFBTSxDQUFDO2dCQUNmLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUNSLENBQUMsQ0FBQyxFQUNGLEdBQUcsQ0FBQyxVQUFDLEtBQWlDO2dCQUNyQyxJQUFNLE1BQU0sR0FBRyxLQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUN2QyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDN0IsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDM0IsQ0FBQyxDQUFDLEVBQ0YsVUFBVSxDQUFDLFVBQUEsS0FBSztnQkFDZixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNuQixJQUFNLE1BQU0sR0FBRyxNQUFJLENBQUMsTUFBTSxDQUFDLFVBQUMsTUFBTSxFQUFFLENBQUM7b0JBQ3BDLE1BQU0sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsSUFBSSxDQUFDO29CQUMxQixPQUFPLE1BQU0sQ0FBQztnQkFDZixDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7Z0JBQ1AsSUFBTSxNQUFNLEdBQUcsS0FBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDdkMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7Z0JBQzlCLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2pCLENBQUMsQ0FBQyxDQUNGLENBQUM7U0FDRjthQUFNO1lBQ04sT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDaEI7SUFDRixDQUFDOzBFQTFGVyxXQUFXO3VEQUFYLFdBQVcsV0FBWCxXQUFXLG1CQUZYLE1BQU07c0JBYm5CO0NBMkdDLEFBL0ZELENBR2lDLGFBQWEsR0E0RjdDO1NBNUZZLFdBQVc7a0RBQVgsV0FBVztjQUh2QixVQUFVO2VBQUM7Z0JBQ1gsVUFBVSxFQUFFLE1BQU07YUFDbEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIsIEluamVjdGFibGUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBkZWJvdW5jZVRpbWUsIGZpbHRlciwgZmlyc3QsIG1hcCwgc3dpdGNoTWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBEb2N1bWVudEluZGV4IH0gZnJvbSAnLi4vbW9kZWxzL2RvY3VtZW50JztcbmltcG9ydCB7IEVudGl0eVNlcnZpY2UgfSBmcm9tICcuLi9tb2RlbHMvZW50aXR5LnNlcnZpY2UnO1xuXG5leHBvcnQgY2xhc3MgU2x1Z0tleSB7XG5cdGlkPzogbnVtYmVyO1xuXHRtbmVtb25pYz86IHN0cmluZztcblx0c2x1Zz86IHN0cmluZztcbn1cblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgU2x1Z1NlcnZpY2UgZXh0ZW5kcyBFbnRpdHlTZXJ2aWNlPERvY3VtZW50SW5kZXg+IHtcblxuXHRnZXQgY29sbGVjdGlvbigpOiBzdHJpbmcge1xuXHRcdHJldHVybiBgL2FwaS9zbHVnYDtcblx0fVxuXG5cdHByaXZhdGUga2V5czogeyBba2V5OiBzdHJpbmddOiBTbHVnS2V5OyB9ID0ge307XG5cdHByaXZhdGUgdmFsdWVzJDogQmVoYXZpb3JTdWJqZWN0PHsgW2tleTogc3RyaW5nXTogc3RyaW5nOyB9PiA9IG5ldyBCZWhhdmlvclN1YmplY3Qoe30pO1xuXHRwcml2YXRlIGVtaXR0ZXIkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRwdWJsaWMgbWlzc2luZ0hhbmRsZXI/OiBGdW5jdGlvbjtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcm90ZWN0ZWQgaW5qZWN0b3I6IEluamVjdG9yLFxuXHQpIHtcblx0XHRzdXBlcihpbmplY3Rvcik7XG5cdH1cblxuXHR0cmFuc2Zvcm0oa2V5OiBzdHJpbmcpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuXHRcdGNvbnN0IHZhbHVlcyA9IHRoaXMudmFsdWVzJC5nZXRWYWx1ZSgpO1xuXHRcdGlmICh2YWx1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuXHRcdFx0cmV0dXJuIHZhbHVlc1trZXldO1xuXHRcdH0gZWxzZSBpZiAoIXRoaXMua2V5cy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG5cdFx0XHR2YWx1ZXNba2V5XSA9IG51bGw7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcy5rZXlzLCBrZXksIHtcblx0XHRcdFx0dmFsdWU6IHsgbW5lbW9uaWM6IGtleSB9LFxuXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0XHR3cml0YWJsZTogZmFsc2UsXG5cdFx0XHR9KTtcblx0XHRcdHRoaXMuZW1pdHRlciQuZW1pdCgpO1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHR9XG5cblx0dHJhbnNmb3JtJChrZXk6IHN0cmluZyk6IE9ic2VydmFibGU8c3RyaW5nIHwgdW5kZWZpbmVkPiB7XG5cdFx0Y29uc3QgdmFsdWVzID0gdGhpcy52YWx1ZXMkLmdldFZhbHVlKCk7XG5cdFx0aWYgKHZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG5cdFx0XHRyZXR1cm4gb2YodmFsdWVzW2tleV0pO1xuXHRcdH0gZWxzZSBpZiAoIXRoaXMua2V5cy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcy5rZXlzLCBrZXksIHtcblx0XHRcdFx0dmFsdWU6IHsgbW5lbW9uaWM6IGtleSB9LFxuXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0XHR3cml0YWJsZTogZmFsc2UsXG5cdFx0XHR9KTtcblx0XHRcdHRoaXMuZW1pdHRlciQuZW1pdCgpO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy52YWx1ZXMkLnBpcGUoXG5cdFx0XHRtYXAodmFsdWVzID0+IHZhbHVlc1trZXldKVxuXHRcdCk7XG5cdH1cblxuXHRvYnNlcnZlJCgpOiBPYnNlcnZhYmxlPHsgW2tleTogc3RyaW5nXTogc3RyaW5nOyB9PiB7XG5cdFx0cmV0dXJuIHRoaXMuZW1pdHRlciQucGlwZShcblx0XHRcdGRlYm91bmNlVGltZSgxKSxcblx0XHRcdHN3aXRjaE1hcCh4ID0+IHRoaXMuY29sbGVjdCQoKSksXG5cdFx0XHRmaWx0ZXIoeCA9PiB4ICE9PSBudWxsKSxcblx0XHRcdGZpcnN0KCksIC8vXG5cdFx0KTtcblx0fVxuXG5cdGNvbGxlY3QkKCk6IE9ic2VydmFibGU8eyBba2V5OiBzdHJpbmddOiBzdHJpbmc7IH0+IHtcblx0XHRpZiAoT2JqZWN0LmtleXModGhpcy5rZXlzKS5sZW5ndGgpIHtcblx0XHRcdGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh0aGlzLmtleXMpLm1hcCh4ID0+IHRoaXMua2V5c1t4XSk7XG5cdFx0XHR0aGlzLmtleXMgPSB7fTtcblx0XHRcdHJldHVybiB0aGlzLnN0YXRlUG9zdChrZXlzKS5waXBlKFxuXHRcdFx0XHRtYXAoKGl0ZW1zOiBEb2N1bWVudEluZGV4W10pID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gaXRlbXMucmVkdWNlKCh2YWx1ZXMsIHgpID0+IHtcblx0XHRcdFx0XHRcdHZhbHVlc1t4Lm1uZW1vbmljXSA9IFt4LnNsdWddO1xuXHRcdFx0XHRcdFx0cmV0dXJuIHZhbHVlcztcblx0XHRcdFx0XHR9LCB7fSk7XG5cdFx0XHRcdH0pLFxuXHRcdFx0XHR0YXAoKHNsdWdzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZzsgfSkgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IHZhbHVlcyA9IHRoaXMudmFsdWVzJC5nZXRWYWx1ZSgpO1xuXHRcdFx0XHRcdE9iamVjdC5hc3NpZ24odmFsdWVzLCBzbHVncyk7XG5cdFx0XHRcdFx0dGhpcy52YWx1ZXMkLm5leHQodmFsdWVzKTtcblx0XHRcdFx0fSksXG5cdFx0XHRcdGNhdGNoRXJyb3IoZXJyb3IgPT4ge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcblx0XHRcdFx0XHRjb25zdCBsYWJlbHMgPSBrZXlzLnJlZHVjZSgodmFsdWVzLCB4KSA9PiB7XG5cdFx0XHRcdFx0XHR2YWx1ZXNbeC5tbmVtb25pY10gPSBudWxsO1xuXHRcdFx0XHRcdFx0cmV0dXJuIHZhbHVlcztcblx0XHRcdFx0XHR9LCB7fSk7XG5cdFx0XHRcdFx0Y29uc3QgdmFsdWVzID0gdGhpcy52YWx1ZXMkLmdldFZhbHVlKCk7XG5cdFx0XHRcdFx0T2JqZWN0LmFzc2lnbih2YWx1ZXMsIGxhYmVscyk7XG5cdFx0XHRcdFx0cmV0dXJuIG9mKG51bGwpO1xuXHRcdFx0XHR9KSxcblx0XHRcdCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBvZihudWxsKTtcblx0XHR9XG5cdH1cblxufVxuIl19