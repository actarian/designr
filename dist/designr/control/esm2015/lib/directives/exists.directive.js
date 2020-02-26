import { Directive, forwardRef, Input } from '@angular/core';
import { NG_ASYNC_VALIDATORS } from '@angular/forms';
import { isObservable, of } from 'rxjs';
import { catchError, debounceTime, map, take } from 'rxjs/operators';
import * as i0 from "@angular/core";
const DEBOUNCE_TIME = 250;
export class ExistsValidator {
    exists$(value) {
        if (typeof this.exists === 'function') {
            const oservableOrValue = this.exists(value);
            if (isObservable(oservableOrValue)) {
                return oservableOrValue.pipe(map(exists => {
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
    }
    validate(control) {
        return this.exists$(control.value).pipe(debounceTime(DEBOUNCE_TIME), catchError((response) => {
            console.log('ExistsValidator.debounced$.catchError', response);
            return of(null);
        }), take(1));
    }
}
ExistsValidator.ɵfac = function ExistsValidator_Factory(t) { return new (t || ExistsValidator)(); };
ExistsValidator.ɵdir = i0.ɵɵdefineDirective({ type: ExistsValidator, selectors: [["", "exists", "", "formControlName", ""], ["", "exists", "", "formControl", ""], ["", "exists", "", "ngModel", ""]], inputs: { exists: "exists" }, features: [i0.ɵɵProvidersFeature([
            { provide: NG_ASYNC_VALIDATORS, useExisting: forwardRef(() => ExistsValidator), multi: true },
        ])] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ExistsValidator, [{
        type: Directive,
        args: [{
                selector: '[exists][formControlName],[exists][formControl],[exists][ngModel]',
                providers: [
                    { provide: NG_ASYNC_VALIDATORS, useExisting: forwardRef(() => ExistsValidator), multi: true },
                ]
            }]
    }], null, { exists: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhpc3RzLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvbnRyb2wvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9leGlzdHMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQW1DLG1CQUFtQixFQUFvQixNQUFNLGdCQUFnQixDQUFDO0FBQ3hHLE9BQU8sRUFBRSxZQUFZLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFFckUsTUFBTSxhQUFhLEdBQVcsR0FBRyxDQUFDO0FBUWxDLE1BQU0sT0FBTyxlQUFlO0lBSTNCLE9BQU8sQ0FBQyxLQUFhO1FBQ3BCLElBQUksT0FBTyxJQUFJLENBQUMsTUFBTSxLQUFLLFVBQVUsRUFBRTtZQUN0QyxNQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDNUMsSUFBSSxZQUFZLENBQUMsZ0JBQWdCLENBQUMsRUFBRTtnQkFDbkMsT0FBTyxnQkFBZ0IsQ0FBQyxJQUFJLENBQzNCLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRTtvQkFDWixPQUFPLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDekMsQ0FBQyxDQUFDLENBQ0YsQ0FBQzthQUNGO2lCQUFNO2dCQUNOLE9BQU8sRUFBRSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDdEQ7U0FDRDthQUFNO1lBQ04sT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDaEI7SUFDRixDQUFDO0lBRUQsUUFBUSxDQUFDLE9BQXdCO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUN0QyxZQUFZLENBQUMsYUFBYSxDQUFDLEVBQzNCLFVBQVUsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFO1lBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUNBQXVDLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDL0QsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakIsQ0FBQyxDQUFDLEVBQ0YsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUNQLENBQUM7SUFDSCxDQUFDOzs4RUE5QlcsZUFBZTtvREFBZixlQUFlLG1NQUpoQjtZQUNWLEVBQUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsZUFBZSxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRTtTQUM3RjtrREFFVyxlQUFlO2NBTjNCLFNBQVM7ZUFBQztnQkFDVixRQUFRLEVBQUUsbUVBQW1FO2dCQUM3RSxTQUFTLEVBQUU7b0JBQ1YsRUFBRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxlQUFlLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO2lCQUM3RjthQUNEOztrQkFHQyxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBmb3J3YXJkUmVmLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sLCBBc3luY1ZhbGlkYXRvciwgTkdfQVNZTkNfVkFMSURBVE9SUywgVmFsaWRhdGlvbkVycm9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IGlzT2JzZXJ2YWJsZSwgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIGRlYm91bmNlVGltZSwgbWFwLCB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5jb25zdCBERUJPVU5DRV9USU1FOiBudW1iZXIgPSAyNTA7XG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ1tleGlzdHNdW2Zvcm1Db250cm9sTmFtZV0sW2V4aXN0c11bZm9ybUNvbnRyb2xdLFtleGlzdHNdW25nTW9kZWxdJyxcblx0cHJvdmlkZXJzOiBbXG5cdFx0eyBwcm92aWRlOiBOR19BU1lOQ19WQUxJREFUT1JTLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFeGlzdHNWYWxpZGF0b3IpLCBtdWx0aTogdHJ1ZSB9LFxuXHRdXG59KVxuZXhwb3J0IGNsYXNzIEV4aXN0c1ZhbGlkYXRvciBpbXBsZW1lbnRzIEFzeW5jVmFsaWRhdG9yIHtcblxuXHRASW5wdXQoKSBleGlzdHM6IEZ1bmN0aW9uO1xuXG5cdGV4aXN0cyQodmFsdWU6IHN0cmluZyk6IE9ic2VydmFibGU8VmFsaWRhdGlvbkVycm9ycyB8IG51bGw+IHtcblx0XHRpZiAodHlwZW9mIHRoaXMuZXhpc3RzID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRjb25zdCBvc2VydmFibGVPclZhbHVlID0gdGhpcy5leGlzdHModmFsdWUpO1xuXHRcdFx0aWYgKGlzT2JzZXJ2YWJsZShvc2VydmFibGVPclZhbHVlKSkge1xuXHRcdFx0XHRyZXR1cm4gb3NlcnZhYmxlT3JWYWx1ZS5waXBlKFxuXHRcdFx0XHRcdG1hcChleGlzdHMgPT4ge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGV4aXN0cyA/IHsgZXhpc3RzOiB0cnVlIH0gOiBudWxsO1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gb2Yob3NlcnZhYmxlT3JWYWx1ZSA/IHsgZXhpc3RzOiB0cnVlIH0gOiBudWxsKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIG9mKG51bGwpO1xuXHRcdH1cblx0fVxuXG5cdHZhbGlkYXRlKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFByb21pc2U8VmFsaWRhdGlvbkVycm9ycyB8IG51bGw+IHwgT2JzZXJ2YWJsZTxWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbD4ge1xuXHRcdHJldHVybiB0aGlzLmV4aXN0cyQoY29udHJvbC52YWx1ZSkucGlwZShcblx0XHRcdGRlYm91bmNlVGltZShERUJPVU5DRV9USU1FKSxcblx0XHRcdGNhdGNoRXJyb3IoKHJlc3BvbnNlKSA9PiB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdFeGlzdHNWYWxpZGF0b3IuZGVib3VuY2VkJC5jYXRjaEVycm9yJywgcmVzcG9uc2UpO1xuXHRcdFx0XHRyZXR1cm4gb2YobnVsbCk7XG5cdFx0XHR9KSxcblx0XHRcdHRha2UoMSksXG5cdFx0KTtcblx0fVxuXG59XG4iXX0=