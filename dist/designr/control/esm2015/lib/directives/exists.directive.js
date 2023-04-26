/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, forwardRef, Input } from '@angular/core';
import { NG_ASYNC_VALIDATORS } from '@angular/forms';
import { isObservable, of } from 'rxjs';
import { catchError, debounceTime, map, take } from 'rxjs/operators';
/** @type {?} */
const DEBOUNCE_TIME = 250;
export class ExistsValidator {
    /**
     * @param {?} value
     * @return {?}
     */
    exists$(value) {
        if (typeof this.exists === 'function') {
            /** @type {?} */
            const oservableOrValue = this.exists(value);
            if (isObservable(oservableOrValue)) {
                return oservableOrValue.pipe(map((/**
                 * @param {?} exists
                 * @return {?}
                 */
                exists => {
                    return exists ? { exists: true } : null;
                })));
            }
            else {
                return of(oservableOrValue ? { exists: true } : null);
            }
        }
        else {
            return of(null);
        }
    }
    /**
     * @param {?} control
     * @return {?}
     */
    validate(control) {
        return this.exists$(control.value).pipe(debounceTime(DEBOUNCE_TIME), catchError((/**
         * @param {?} response
         * @return {?}
         */
        (response) => {
            console.log('ExistsValidator.debounced$.catchError', response);
            return of(null);
        })), take(1));
    }
}
ExistsValidator.decorators = [
    { type: Directive, args: [{
                selector: '[exists][formControlName],[exists][formControl],[exists][ngModel]',
                providers: [
                    { provide: NG_ASYNC_VALIDATORS, useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => ExistsValidator)), multi: true },
                ]
            },] }
];
ExistsValidator.propDecorators = {
    exists: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ExistsValidator.prototype.exists;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhpc3RzLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvbnRyb2wvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9leGlzdHMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFtQyxtQkFBbUIsRUFBb0IsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4RyxPQUFPLEVBQUUsWUFBWSxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNwRCxPQUFPLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O01BRS9ELGFBQWEsR0FBVyxHQUFHO0FBUWpDLE1BQU0sT0FBTyxlQUFlOzs7OztJQUkzQixPQUFPLENBQUMsS0FBYTtRQUNwQixJQUFJLE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxVQUFVLEVBQUU7O2tCQUNoQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztZQUMzQyxJQUFJLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFO2dCQUNuQyxPQUFPLGdCQUFnQixDQUFDLElBQUksQ0FDM0IsR0FBRzs7OztnQkFBQyxNQUFNLENBQUMsRUFBRTtvQkFDWixPQUFPLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDekMsQ0FBQyxFQUFDLENBQ0YsQ0FBQzthQUNGO2lCQUFNO2dCQUNOLE9BQU8sRUFBRSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDdEQ7U0FDRDthQUFNO1lBQ04sT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDaEI7SUFDRixDQUFDOzs7OztJQUVELFFBQVEsQ0FBQyxPQUF3QjtRQUNoQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FDdEMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxFQUMzQixVQUFVOzs7O1FBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRTtZQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLHVDQUF1QyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQy9ELE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pCLENBQUMsRUFBQyxFQUNGLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FDUCxDQUFDO0lBQ0gsQ0FBQzs7O1lBcENELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsbUVBQW1FO2dCQUM3RSxTQUFTLEVBQUU7b0JBQ1YsRUFBRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsV0FBVyxFQUFFLFVBQVU7Ozt3QkFBQyxHQUFHLEVBQUUsQ0FBQyxlQUFlLEVBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO2lCQUM3RjthQUNEOzs7cUJBR0MsS0FBSzs7OztJQUFOLGlDQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgZm9yd2FyZFJlZiwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sLCBBc3luY1ZhbGlkYXRvciwgTkdfQVNZTkNfVkFMSURBVE9SUywgVmFsaWRhdGlvbkVycm9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgaXNPYnNlcnZhYmxlLCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBjYXRjaEVycm9yLCBkZWJvdW5jZVRpbWUsIG1hcCwgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmNvbnN0IERFQk9VTkNFX1RJTUU6IG51bWJlciA9IDI1MDtcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG5cdHNlbGVjdG9yOiAnW2V4aXN0c11bZm9ybUNvbnRyb2xOYW1lXSxbZXhpc3RzXVtmb3JtQ29udHJvbF0sW2V4aXN0c11bbmdNb2RlbF0nLFxyXG5cdHByb3ZpZGVyczogW1xyXG5cdFx0eyBwcm92aWRlOiBOR19BU1lOQ19WQUxJREFUT1JTLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFeGlzdHNWYWxpZGF0b3IpLCBtdWx0aTogdHJ1ZSB9LFxyXG5cdF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEV4aXN0c1ZhbGlkYXRvciBpbXBsZW1lbnRzIEFzeW5jVmFsaWRhdG9yIHtcclxuXHJcblx0QElucHV0KCkgZXhpc3RzOiBGdW5jdGlvbjtcclxuXHJcblx0ZXhpc3RzJCh2YWx1ZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbD4ge1xyXG5cdFx0aWYgKHR5cGVvZiB0aGlzLmV4aXN0cyA9PT0gJ2Z1bmN0aW9uJykge1xyXG5cdFx0XHRjb25zdCBvc2VydmFibGVPclZhbHVlID0gdGhpcy5leGlzdHModmFsdWUpO1xyXG5cdFx0XHRpZiAoaXNPYnNlcnZhYmxlKG9zZXJ2YWJsZU9yVmFsdWUpKSB7XHJcblx0XHRcdFx0cmV0dXJuIG9zZXJ2YWJsZU9yVmFsdWUucGlwZShcclxuXHRcdFx0XHRcdG1hcChleGlzdHMgPT4ge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gZXhpc3RzID8geyBleGlzdHM6IHRydWUgfSA6IG51bGw7XHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmV0dXJuIG9mKG9zZXJ2YWJsZU9yVmFsdWUgPyB7IGV4aXN0czogdHJ1ZSB9IDogbnVsbCk7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJldHVybiBvZihudWxsKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHZhbGlkYXRlKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFByb21pc2U8VmFsaWRhdGlvbkVycm9ycyB8IG51bGw+IHwgT2JzZXJ2YWJsZTxWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbD4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuZXhpc3RzJChjb250cm9sLnZhbHVlKS5waXBlKFxyXG5cdFx0XHRkZWJvdW5jZVRpbWUoREVCT1VOQ0VfVElNRSksXHJcblx0XHRcdGNhdGNoRXJyb3IoKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ0V4aXN0c1ZhbGlkYXRvci5kZWJvdW5jZWQkLmNhdGNoRXJyb3InLCByZXNwb25zZSk7XHJcblx0XHRcdFx0cmV0dXJuIG9mKG51bGwpO1xyXG5cdFx0XHR9KSxcclxuXHRcdFx0dGFrZSgxKSxcclxuXHRcdCk7XHJcblx0fVxyXG5cclxufVxyXG4iXX0=