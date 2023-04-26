/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, forwardRef, Input } from '@angular/core';
import { NG_ASYNC_VALIDATORS } from '@angular/forms';
import { isObservable, of } from 'rxjs';
import { catchError, debounceTime, map, take } from 'rxjs/operators';
/** @type {?} */
var DEBOUNCE_TIME = 250;
var ExistsValidator = /** @class */ (function () {
    function ExistsValidator() {
    }
    /**
     * @param {?} value
     * @return {?}
     */
    ExistsValidator.prototype.exists$ = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (typeof this.exists === 'function') {
            /** @type {?} */
            var oservableOrValue = this.exists(value);
            if (isObservable(oservableOrValue)) {
                return oservableOrValue.pipe(map((/**
                 * @param {?} exists
                 * @return {?}
                 */
                function (exists) {
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
    };
    /**
     * @param {?} control
     * @return {?}
     */
    ExistsValidator.prototype.validate = /**
     * @param {?} control
     * @return {?}
     */
    function (control) {
        return this.exists$(control.value).pipe(debounceTime(DEBOUNCE_TIME), catchError((/**
         * @param {?} response
         * @return {?}
         */
        function (response) {
            console.log('ExistsValidator.debounced$.catchError', response);
            return of(null);
        })), take(1));
    };
    ExistsValidator.decorators = [
        { type: Directive, args: [{
                    selector: '[exists][formControlName],[exists][formControl],[exists][ngModel]',
                    providers: [
                        { provide: NG_ASYNC_VALIDATORS, useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return ExistsValidator; })), multi: true },
                    ]
                },] }
    ];
    ExistsValidator.propDecorators = {
        exists: [{ type: Input }]
    };
    return ExistsValidator;
}());
export { ExistsValidator };
if (false) {
    /** @type {?} */
    ExistsValidator.prototype.exists;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhpc3RzLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvbnRyb2wvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9leGlzdHMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFtQyxtQkFBbUIsRUFBb0IsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4RyxPQUFPLEVBQUUsWUFBWSxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNwRCxPQUFPLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0lBRS9ELGFBQWEsR0FBVyxHQUFHO0FBRWpDO0lBQUE7SUFzQ0EsQ0FBQzs7Ozs7SUE1QkEsaUNBQU87Ozs7SUFBUCxVQUFRLEtBQWE7UUFDcEIsSUFBSSxPQUFPLElBQUksQ0FBQyxNQUFNLEtBQUssVUFBVSxFQUFFOztnQkFDaEMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFDM0MsSUFBSSxZQUFZLENBQUMsZ0JBQWdCLENBQUMsRUFBRTtnQkFDbkMsT0FBTyxnQkFBZ0IsQ0FBQyxJQUFJLENBQzNCLEdBQUc7Ozs7Z0JBQUMsVUFBQSxNQUFNO29CQUNULE9BQU8sTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUN6QyxDQUFDLEVBQUMsQ0FDRixDQUFDO2FBQ0Y7aUJBQU07Z0JBQ04sT0FBTyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUN0RDtTQUNEO2FBQU07WUFDTixPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNoQjtJQUNGLENBQUM7Ozs7O0lBRUQsa0NBQVE7Ozs7SUFBUixVQUFTLE9BQXdCO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUN0QyxZQUFZLENBQUMsYUFBYSxDQUFDLEVBQzNCLFVBQVU7Ozs7UUFBQyxVQUFDLFFBQVE7WUFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1Q0FBdUMsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUMvRCxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqQixDQUFDLEVBQUMsRUFDRixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQ1AsQ0FBQztJQUNILENBQUM7O2dCQXBDRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLG1FQUFtRTtvQkFDN0UsU0FBUyxFQUFFO3dCQUNWLEVBQUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLFdBQVcsRUFBRSxVQUFVOzs7NEJBQUMsY0FBTSxPQUFBLGVBQWUsRUFBZixDQUFlLEVBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO3FCQUM3RjtpQkFDRDs7O3lCQUdDLEtBQUs7O0lBOEJQLHNCQUFDO0NBQUEsQUF0Q0QsSUFzQ0M7U0FoQ1ksZUFBZTs7O0lBRTNCLGlDQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgZm9yd2FyZFJlZiwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sLCBBc3luY1ZhbGlkYXRvciwgTkdfQVNZTkNfVkFMSURBVE9SUywgVmFsaWRhdGlvbkVycm9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgaXNPYnNlcnZhYmxlLCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBjYXRjaEVycm9yLCBkZWJvdW5jZVRpbWUsIG1hcCwgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmNvbnN0IERFQk9VTkNFX1RJTUU6IG51bWJlciA9IDI1MDtcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG5cdHNlbGVjdG9yOiAnW2V4aXN0c11bZm9ybUNvbnRyb2xOYW1lXSxbZXhpc3RzXVtmb3JtQ29udHJvbF0sW2V4aXN0c11bbmdNb2RlbF0nLFxyXG5cdHByb3ZpZGVyczogW1xyXG5cdFx0eyBwcm92aWRlOiBOR19BU1lOQ19WQUxJREFUT1JTLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFeGlzdHNWYWxpZGF0b3IpLCBtdWx0aTogdHJ1ZSB9LFxyXG5cdF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEV4aXN0c1ZhbGlkYXRvciBpbXBsZW1lbnRzIEFzeW5jVmFsaWRhdG9yIHtcclxuXHJcblx0QElucHV0KCkgZXhpc3RzOiBGdW5jdGlvbjtcclxuXHJcblx0ZXhpc3RzJCh2YWx1ZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbD4ge1xyXG5cdFx0aWYgKHR5cGVvZiB0aGlzLmV4aXN0cyA9PT0gJ2Z1bmN0aW9uJykge1xyXG5cdFx0XHRjb25zdCBvc2VydmFibGVPclZhbHVlID0gdGhpcy5leGlzdHModmFsdWUpO1xyXG5cdFx0XHRpZiAoaXNPYnNlcnZhYmxlKG9zZXJ2YWJsZU9yVmFsdWUpKSB7XHJcblx0XHRcdFx0cmV0dXJuIG9zZXJ2YWJsZU9yVmFsdWUucGlwZShcclxuXHRcdFx0XHRcdG1hcChleGlzdHMgPT4ge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gZXhpc3RzID8geyBleGlzdHM6IHRydWUgfSA6IG51bGw7XHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmV0dXJuIG9mKG9zZXJ2YWJsZU9yVmFsdWUgPyB7IGV4aXN0czogdHJ1ZSB9IDogbnVsbCk7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJldHVybiBvZihudWxsKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHZhbGlkYXRlKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFByb21pc2U8VmFsaWRhdGlvbkVycm9ycyB8IG51bGw+IHwgT2JzZXJ2YWJsZTxWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbD4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuZXhpc3RzJChjb250cm9sLnZhbHVlKS5waXBlKFxyXG5cdFx0XHRkZWJvdW5jZVRpbWUoREVCT1VOQ0VfVElNRSksXHJcblx0XHRcdGNhdGNoRXJyb3IoKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ0V4aXN0c1ZhbGlkYXRvci5kZWJvdW5jZWQkLmNhdGNoRXJyb3InLCByZXNwb25zZSk7XHJcblx0XHRcdFx0cmV0dXJuIG9mKG51bGwpO1xyXG5cdFx0XHR9KSxcclxuXHRcdFx0dGFrZSgxKSxcclxuXHRcdCk7XHJcblx0fVxyXG5cclxufVxyXG4iXX0=