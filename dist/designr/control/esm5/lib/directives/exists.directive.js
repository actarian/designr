import { Directive, forwardRef, Input } from '@angular/core';
import { NG_ASYNC_VALIDATORS } from '@angular/forms';
import { isObservable, of } from 'rxjs';
import { catchError, debounceTime, map, take } from 'rxjs/operators';
import * as i0 from "@angular/core";
var DEBOUNCE_TIME = 250;
var ExistsValidator = /** @class */ (function () {
    function ExistsValidator() {
    }
    ExistsValidator.prototype.exists$ = function (value) {
        if (typeof this.exists === 'function') {
            var oservableOrValue = this.exists(value);
            if (isObservable(oservableOrValue)) {
                return oservableOrValue.pipe(map(function (exists) {
                    return exists ? { exists: true } : null;
                }));
            }
            else {
                return of(oservableOrValue ? { exists: true } : null);
            }
        }
        else {
            return of(null);
        }
    };
    ExistsValidator.prototype.validate = function (control) {
        return this.exists$(control.value).pipe(debounceTime(DEBOUNCE_TIME), catchError(function (response) {
            console.log('ExistsValidator.debounced$.catchError', response);
            return of(null);
        }), take(1));
    };
    ExistsValidator.ɵfac = function ExistsValidator_Factory(t) { return new (t || ExistsValidator)(); };
    ExistsValidator.ɵdir = i0.ɵɵdefineDirective({ type: ExistsValidator, selectors: [["", "exists", "", "formControlName", ""], ["", "exists", "", "formControl", ""], ["", "exists", "", "ngModel", ""]], inputs: { exists: "exists" }, features: [i0.ɵɵProvidersFeature([
                { provide: NG_ASYNC_VALIDATORS, useExisting: forwardRef(function () { return ExistsValidator; }), multi: true },
            ])] });
    return ExistsValidator;
}());
export { ExistsValidator };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ExistsValidator, [{
        type: Directive,
        args: [{
                selector: '[exists][formControlName],[exists][formControl],[exists][ngModel]',
                providers: [
                    { provide: NG_ASYNC_VALIDATORS, useExisting: forwardRef(function () { return ExistsValidator; }), multi: true },
                ]
            }]
    }], null, { exists: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhpc3RzLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvbnRyb2wvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9leGlzdHMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQW1DLG1CQUFtQixFQUFvQixNQUFNLGdCQUFnQixDQUFDO0FBQ3hHLE9BQU8sRUFBRSxZQUFZLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFFckUsSUFBTSxhQUFhLEdBQVcsR0FBRyxDQUFDO0FBRWxDO0lBQUE7S0FzQ0M7SUE1QkEsaUNBQU8sR0FBUCxVQUFRLEtBQWE7UUFDcEIsSUFBSSxPQUFPLElBQUksQ0FBQyxNQUFNLEtBQUssVUFBVSxFQUFFO1lBQ3RDLElBQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM1QyxJQUFJLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFO2dCQUNuQyxPQUFPLGdCQUFnQixDQUFDLElBQUksQ0FDM0IsR0FBRyxDQUFDLFVBQUEsTUFBTTtvQkFDVCxPQUFPLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDekMsQ0FBQyxDQUFDLENBQ0YsQ0FBQzthQUNGO2lCQUFNO2dCQUNOLE9BQU8sRUFBRSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDdEQ7U0FDRDthQUFNO1lBQ04sT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDaEI7SUFDRixDQUFDO0lBRUQsa0NBQVEsR0FBUixVQUFTLE9BQXdCO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUN0QyxZQUFZLENBQUMsYUFBYSxDQUFDLEVBQzNCLFVBQVUsQ0FBQyxVQUFDLFFBQVE7WUFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1Q0FBdUMsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUMvRCxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqQixDQUFDLENBQUMsRUFDRixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQ1AsQ0FBQztJQUNILENBQUM7a0ZBOUJXLGVBQWU7d0RBQWYsZUFBZSxtTUFKaEI7Z0JBQ1YsRUFBRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsZUFBZSxFQUFmLENBQWUsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUU7YUFDN0Y7MEJBWEY7Q0E2Q0MsQUF0Q0QsSUFzQ0M7U0FoQ1ksZUFBZTtrREFBZixlQUFlO2NBTjNCLFNBQVM7ZUFBQztnQkFDVixRQUFRLEVBQUUsbUVBQW1FO2dCQUM3RSxTQUFTLEVBQUU7b0JBQ1YsRUFBRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsZUFBZSxFQUFmLENBQWUsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUU7aUJBQzdGO2FBQ0Q7O2tCQUdDLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIGZvcndhcmRSZWYsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wsIEFzeW5jVmFsaWRhdG9yLCBOR19BU1lOQ19WQUxJREFUT1JTLCBWYWxpZGF0aW9uRXJyb3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgaXNPYnNlcnZhYmxlLCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgZGVib3VuY2VUaW1lLCBtYXAsIHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmNvbnN0IERFQk9VTkNFX1RJTUU6IG51bWJlciA9IDI1MDtcblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnW2V4aXN0c11bZm9ybUNvbnRyb2xOYW1lXSxbZXhpc3RzXVtmb3JtQ29udHJvbF0sW2V4aXN0c11bbmdNb2RlbF0nLFxuXHRwcm92aWRlcnM6IFtcblx0XHR7IHByb3ZpZGU6IE5HX0FTWU5DX1ZBTElEQVRPUlMsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEV4aXN0c1ZhbGlkYXRvciksIG11bHRpOiB0cnVlIH0sXG5cdF1cbn0pXG5leHBvcnQgY2xhc3MgRXhpc3RzVmFsaWRhdG9yIGltcGxlbWVudHMgQXN5bmNWYWxpZGF0b3Ige1xuXG5cdEBJbnB1dCgpIGV4aXN0czogRnVuY3Rpb247XG5cblx0ZXhpc3RzJCh2YWx1ZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbD4ge1xuXHRcdGlmICh0eXBlb2YgdGhpcy5leGlzdHMgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdGNvbnN0IG9zZXJ2YWJsZU9yVmFsdWUgPSB0aGlzLmV4aXN0cyh2YWx1ZSk7XG5cdFx0XHRpZiAoaXNPYnNlcnZhYmxlKG9zZXJ2YWJsZU9yVmFsdWUpKSB7XG5cdFx0XHRcdHJldHVybiBvc2VydmFibGVPclZhbHVlLnBpcGUoXG5cdFx0XHRcdFx0bWFwKGV4aXN0cyA9PiB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZXhpc3RzID8geyBleGlzdHM6IHRydWUgfSA6IG51bGw7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBvZihvc2VydmFibGVPclZhbHVlID8geyBleGlzdHM6IHRydWUgfSA6IG51bGwpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gb2YobnVsbCk7XG5cdFx0fVxuXHR9XG5cblx0dmFsaWRhdGUoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogUHJvbWlzZTxWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbD4gfCBPYnNlcnZhYmxlPFZhbGlkYXRpb25FcnJvcnMgfCBudWxsPiB7XG5cdFx0cmV0dXJuIHRoaXMuZXhpc3RzJChjb250cm9sLnZhbHVlKS5waXBlKFxuXHRcdFx0ZGVib3VuY2VUaW1lKERFQk9VTkNFX1RJTUUpLFxuXHRcdFx0Y2F0Y2hFcnJvcigocmVzcG9uc2UpID0+IHtcblx0XHRcdFx0Y29uc29sZS5sb2coJ0V4aXN0c1ZhbGlkYXRvci5kZWJvdW5jZWQkLmNhdGNoRXJyb3InLCByZXNwb25zZSk7XG5cdFx0XHRcdHJldHVybiBvZihudWxsKTtcblx0XHRcdH0pLFxuXHRcdFx0dGFrZSgxKSxcblx0XHQpO1xuXHR9XG5cbn1cbiJdfQ==