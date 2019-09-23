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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhpc3RzLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvbnRyb2wvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9leGlzdHMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFtQyxtQkFBbUIsRUFBb0IsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4RyxPQUFPLEVBQUUsWUFBWSxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNwRCxPQUFPLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O01BRS9ELGFBQWEsR0FBVyxHQUFHO0FBUWpDLE1BQU0sT0FBTyxlQUFlOzs7OztJQUkzQixPQUFPLENBQUMsS0FBYTtRQUNwQixJQUFJLE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxVQUFVLEVBQUU7O2tCQUNoQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztZQUMzQyxJQUFJLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFO2dCQUNuQyxPQUFPLGdCQUFnQixDQUFDLElBQUksQ0FDM0IsR0FBRzs7OztnQkFBQyxNQUFNLENBQUMsRUFBRTtvQkFDWixPQUFPLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDekMsQ0FBQyxFQUFDLENBQ0YsQ0FBQzthQUNGO2lCQUFNO2dCQUNOLE9BQU8sRUFBRSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDdEQ7U0FDRDthQUFNO1lBQ04sT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDaEI7SUFDRixDQUFDOzs7OztJQUVELFFBQVEsQ0FBQyxPQUF3QjtRQUNoQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FDdEMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxFQUMzQixVQUFVOzs7O1FBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRTtZQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLHVDQUF1QyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQy9ELE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pCLENBQUMsRUFBQyxFQUNGLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FDUCxDQUFDO0lBQ0gsQ0FBQzs7O1lBcENELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsbUVBQW1FO2dCQUM3RSxTQUFTLEVBQUU7b0JBQ1YsRUFBRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsV0FBVyxFQUFFLFVBQVU7Ozt3QkFBQyxHQUFHLEVBQUUsQ0FBQyxlQUFlLEVBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO2lCQUM3RjthQUNEOzs7cUJBR0MsS0FBSzs7OztJQUFOLGlDQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgZm9yd2FyZFJlZiwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbCwgQXN5bmNWYWxpZGF0b3IsIE5HX0FTWU5DX1ZBTElEQVRPUlMsIFZhbGlkYXRpb25FcnJvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBpc09ic2VydmFibGUsIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBkZWJvdW5jZVRpbWUsIG1hcCwgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuY29uc3QgREVCT1VOQ0VfVElNRTogbnVtYmVyID0gMjUwO1xuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdbZXhpc3RzXVtmb3JtQ29udHJvbE5hbWVdLFtleGlzdHNdW2Zvcm1Db250cm9sXSxbZXhpc3RzXVtuZ01vZGVsXScsXG5cdHByb3ZpZGVyczogW1xuXHRcdHsgcHJvdmlkZTogTkdfQVNZTkNfVkFMSURBVE9SUywgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRXhpc3RzVmFsaWRhdG9yKSwgbXVsdGk6IHRydWUgfSxcblx0XVxufSlcbmV4cG9ydCBjbGFzcyBFeGlzdHNWYWxpZGF0b3IgaW1wbGVtZW50cyBBc3luY1ZhbGlkYXRvciB7XG5cblx0QElucHV0KCkgZXhpc3RzOiBGdW5jdGlvbjtcblxuXHRleGlzdHMkKHZhbHVlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFZhbGlkYXRpb25FcnJvcnMgfCBudWxsPiB7XG5cdFx0aWYgKHR5cGVvZiB0aGlzLmV4aXN0cyA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0Y29uc3Qgb3NlcnZhYmxlT3JWYWx1ZSA9IHRoaXMuZXhpc3RzKHZhbHVlKTtcblx0XHRcdGlmIChpc09ic2VydmFibGUob3NlcnZhYmxlT3JWYWx1ZSkpIHtcblx0XHRcdFx0cmV0dXJuIG9zZXJ2YWJsZU9yVmFsdWUucGlwZShcblx0XHRcdFx0XHRtYXAoZXhpc3RzID0+IHtcblx0XHRcdFx0XHRcdHJldHVybiBleGlzdHMgPyB7IGV4aXN0czogdHJ1ZSB9IDogbnVsbDtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIG9mKG9zZXJ2YWJsZU9yVmFsdWUgPyB7IGV4aXN0czogdHJ1ZSB9IDogbnVsbCk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBvZihudWxsKTtcblx0XHR9XG5cdH1cblxuXHR2YWxpZGF0ZShjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBQcm9taXNlPFZhbGlkYXRpb25FcnJvcnMgfCBudWxsPiB8IE9ic2VydmFibGU8VmFsaWRhdGlvbkVycm9ycyB8IG51bGw+IHtcblx0XHRyZXR1cm4gdGhpcy5leGlzdHMkKGNvbnRyb2wudmFsdWUpLnBpcGUoXG5cdFx0XHRkZWJvdW5jZVRpbWUoREVCT1VOQ0VfVElNRSksXG5cdFx0XHRjYXRjaEVycm9yKChyZXNwb25zZSkgPT4ge1xuXHRcdFx0XHRjb25zb2xlLmxvZygnRXhpc3RzVmFsaWRhdG9yLmRlYm91bmNlZCQuY2F0Y2hFcnJvcicsIHJlc3BvbnNlKTtcblx0XHRcdFx0cmV0dXJuIG9mKG51bGwpO1xuXHRcdFx0fSksXG5cdFx0XHR0YWtlKDEpLFxuXHRcdCk7XG5cdH1cblxufVxuIl19