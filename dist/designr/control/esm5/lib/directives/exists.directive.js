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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhpc3RzLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvbnRyb2wvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9leGlzdHMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFtQyxtQkFBbUIsRUFBb0IsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4RyxPQUFPLEVBQUUsWUFBWSxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNwRCxPQUFPLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0lBRS9ELGFBQWEsR0FBVyxHQUFHO0FBRWpDO0lBQUE7SUFzQ0EsQ0FBQzs7Ozs7SUE1QkEsaUNBQU87Ozs7SUFBUCxVQUFRLEtBQWE7UUFDcEIsSUFBSSxPQUFPLElBQUksQ0FBQyxNQUFNLEtBQUssVUFBVSxFQUFFOztnQkFDaEMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFDM0MsSUFBSSxZQUFZLENBQUMsZ0JBQWdCLENBQUMsRUFBRTtnQkFDbkMsT0FBTyxnQkFBZ0IsQ0FBQyxJQUFJLENBQzNCLEdBQUc7Ozs7Z0JBQUMsVUFBQSxNQUFNO29CQUNULE9BQU8sTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUN6QyxDQUFDLEVBQUMsQ0FDRixDQUFDO2FBQ0Y7aUJBQU07Z0JBQ04sT0FBTyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUN0RDtTQUNEO2FBQU07WUFDTixPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNoQjtJQUNGLENBQUM7Ozs7O0lBRUQsa0NBQVE7Ozs7SUFBUixVQUFTLE9BQXdCO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUN0QyxZQUFZLENBQUMsYUFBYSxDQUFDLEVBQzNCLFVBQVU7Ozs7UUFBQyxVQUFDLFFBQVE7WUFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1Q0FBdUMsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUMvRCxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqQixDQUFDLEVBQUMsRUFDRixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQ1AsQ0FBQztJQUNILENBQUM7O2dCQXBDRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLG1FQUFtRTtvQkFDN0UsU0FBUyxFQUFFO3dCQUNWLEVBQUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLFdBQVcsRUFBRSxVQUFVOzs7NEJBQUMsY0FBTSxPQUFBLGVBQWUsRUFBZixDQUFlLEVBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO3FCQUM3RjtpQkFDRDs7O3lCQUdDLEtBQUs7O0lBOEJQLHNCQUFDO0NBQUEsQUF0Q0QsSUFzQ0M7U0FoQ1ksZUFBZTs7O0lBRTNCLGlDQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgZm9yd2FyZFJlZiwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbCwgQXN5bmNWYWxpZGF0b3IsIE5HX0FTWU5DX1ZBTElEQVRPUlMsIFZhbGlkYXRpb25FcnJvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBpc09ic2VydmFibGUsIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBkZWJvdW5jZVRpbWUsIG1hcCwgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuY29uc3QgREVCT1VOQ0VfVElNRTogbnVtYmVyID0gMjUwO1xuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdbZXhpc3RzXVtmb3JtQ29udHJvbE5hbWVdLFtleGlzdHNdW2Zvcm1Db250cm9sXSxbZXhpc3RzXVtuZ01vZGVsXScsXG5cdHByb3ZpZGVyczogW1xuXHRcdHsgcHJvdmlkZTogTkdfQVNZTkNfVkFMSURBVE9SUywgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRXhpc3RzVmFsaWRhdG9yKSwgbXVsdGk6IHRydWUgfSxcblx0XVxufSlcbmV4cG9ydCBjbGFzcyBFeGlzdHNWYWxpZGF0b3IgaW1wbGVtZW50cyBBc3luY1ZhbGlkYXRvciB7XG5cblx0QElucHV0KCkgZXhpc3RzOiBGdW5jdGlvbjtcblxuXHRleGlzdHMkKHZhbHVlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFZhbGlkYXRpb25FcnJvcnMgfCBudWxsPiB7XG5cdFx0aWYgKHR5cGVvZiB0aGlzLmV4aXN0cyA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0Y29uc3Qgb3NlcnZhYmxlT3JWYWx1ZSA9IHRoaXMuZXhpc3RzKHZhbHVlKTtcblx0XHRcdGlmIChpc09ic2VydmFibGUob3NlcnZhYmxlT3JWYWx1ZSkpIHtcblx0XHRcdFx0cmV0dXJuIG9zZXJ2YWJsZU9yVmFsdWUucGlwZShcblx0XHRcdFx0XHRtYXAoZXhpc3RzID0+IHtcblx0XHRcdFx0XHRcdHJldHVybiBleGlzdHMgPyB7IGV4aXN0czogdHJ1ZSB9IDogbnVsbDtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIG9mKG9zZXJ2YWJsZU9yVmFsdWUgPyB7IGV4aXN0czogdHJ1ZSB9IDogbnVsbCk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBvZihudWxsKTtcblx0XHR9XG5cdH1cblxuXHR2YWxpZGF0ZShjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBQcm9taXNlPFZhbGlkYXRpb25FcnJvcnMgfCBudWxsPiB8IE9ic2VydmFibGU8VmFsaWRhdGlvbkVycm9ycyB8IG51bGw+IHtcblx0XHRyZXR1cm4gdGhpcy5leGlzdHMkKGNvbnRyb2wudmFsdWUpLnBpcGUoXG5cdFx0XHRkZWJvdW5jZVRpbWUoREVCT1VOQ0VfVElNRSksXG5cdFx0XHRjYXRjaEVycm9yKChyZXNwb25zZSkgPT4ge1xuXHRcdFx0XHRjb25zb2xlLmxvZygnRXhpc3RzVmFsaWRhdG9yLmRlYm91bmNlZCQuY2F0Y2hFcnJvcicsIHJlc3BvbnNlKTtcblx0XHRcdFx0cmV0dXJuIG9mKG51bGwpO1xuXHRcdFx0fSksXG5cdFx0XHR0YWtlKDEpLFxuXHRcdCk7XG5cdH1cblxufVxuIl19