/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, forwardRef, Input } from '@angular/core';
import { NG_ASYNC_VALIDATORS } from '@angular/forms';
import { BehaviorSubject, of } from 'rxjs';
import { catchError, debounceTime, switchMap, take } from 'rxjs/operators';
/** @type {?} */
var DEBOUNCE_TIME = 250;
var ExistsValidator = /** @class */ (function () {
    function ExistsValidator() {
        var _this = this;
        this.values = new BehaviorSubject(null);
        this.debounced$ = this.values.pipe(debounceTime(DEBOUNCE_TIME), switchMap(function (value) {
            // console.log('ExistsValidator.debounced$', value);
            return _this.exists$(value);
        }), catchError(function (response) {
            console.log('ExistsValidator.debounced$.catchError', response);
            return of(null);
        }), take(1));
    }
    Object.defineProperty(ExistsValidator.prototype, "value", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value && value.trim() !== '') {
                this.values.next(value);
            }
        },
        enumerable: true,
        configurable: true
    });
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
            // console.log('ExistsValidator.exists$', value);
            return this.exists(value).pipe(switchMap(function (exists) {
                if (exists) {
                    return of({
                        exists: true,
                    });
                }
                else {
                    return of(null);
                }
            }));
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
        this.value = control.value;
        return this.debounced$;
    };
    ExistsValidator.decorators = [
        { type: Directive, args: [{
                    selector: '[exists][formControlName],[exists][formControl],[exists][ngModel]',
                    providers: [
                        { provide: NG_ASYNC_VALIDATORS, useExisting: forwardRef(function () { return ExistsValidator; }), multi: true },
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
    /**
     * @type {?}
     * @private
     */
    ExistsValidator.prototype.values;
    /**
     * @type {?}
     * @private
     */
    ExistsValidator.prototype.debounced$;
    /** @type {?} */
    ExistsValidator.prototype.exists;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhpc3RzLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvbnRyb2wvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9leGlzdHMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFtQyxtQkFBbUIsRUFBb0IsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4RyxPQUFPLEVBQUUsZUFBZSxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN2RCxPQUFPLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0lBRXJFLGFBQWEsR0FBVyxHQUFHO0FBRWpDO0lBQUE7UUFBQSxpQkFxREM7UUE3Q1EsV0FBTSxHQUFHLElBQUksZUFBZSxDQUFTLElBQUksQ0FBQyxDQUFDO1FBTTNDLGVBQVUsR0FBd0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQ3pFLFlBQVksQ0FBQyxhQUFhLENBQUMsRUFDM0IsU0FBUyxDQUFDLFVBQUMsS0FBYTtZQUN2QixvREFBb0Q7WUFDcEQsT0FBTyxLQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVCLENBQUMsQ0FBQyxFQUNGLFVBQVUsQ0FBQyxVQUFDLFFBQVE7WUFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1Q0FBdUMsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUMvRCxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqQixDQUFDLENBQUMsRUFDRixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQ1AsQ0FBQztJQTRCSCxDQUFDO0lBNUNBLHNCQUFJLGtDQUFLOzs7OztRQUFULFVBQVUsS0FBYTtZQUN0QixJQUFJLEtBQUssSUFBSSxLQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFO2dCQUNqQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUN4QjtRQUNGLENBQUM7OztPQUFBOzs7OztJQWdCRCxpQ0FBTzs7OztJQUFQLFVBQVEsS0FBYTtRQUNwQixJQUFJLE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxVQUFVLEVBQUU7WUFDdEMsaURBQWlEO1lBQ2pELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQzdCLFNBQVMsQ0FBQyxVQUFBLE1BQU07Z0JBQ2YsSUFBSSxNQUFNLEVBQUU7b0JBQ1gsT0FBTyxFQUFFLENBQUM7d0JBQ1QsTUFBTSxFQUFFLElBQUk7cUJBQ1osQ0FBQyxDQUFDO2lCQUNIO3FCQUFNO29CQUNOLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUNoQjtZQUNGLENBQUMsQ0FBQyxDQUNGLENBQUM7U0FDRjthQUFNO1lBQ04sT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDaEI7SUFDRixDQUFDOzs7OztJQUVELGtDQUFROzs7O0lBQVIsVUFBUyxPQUF3QjtRQUNoQyxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFDM0IsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3hCLENBQUM7O2dCQW5ERCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLG1FQUFtRTtvQkFDN0UsU0FBUyxFQUFFO3dCQUNWLEVBQUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLGVBQWUsRUFBZixDQUFlLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO3FCQUM3RjtpQkFDRDs7O3lCQXNCQyxLQUFLOztJQTBCUCxzQkFBQztDQUFBLEFBckRELElBcURDO1NBL0NZLGVBQWU7Ozs7OztJQUUzQixpQ0FBbUQ7Ozs7O0lBTW5ELHFDQVdFOztJQUVGLGlDQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgZm9yd2FyZFJlZiwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbCwgQXN5bmNWYWxpZGF0b3IsIE5HX0FTWU5DX1ZBTElEQVRPUlMsIFZhbGlkYXRpb25FcnJvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBkZWJvdW5jZVRpbWUsIHN3aXRjaE1hcCwgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuY29uc3QgREVCT1VOQ0VfVElNRTogbnVtYmVyID0gMjUwO1xuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdbZXhpc3RzXVtmb3JtQ29udHJvbE5hbWVdLFtleGlzdHNdW2Zvcm1Db250cm9sXSxbZXhpc3RzXVtuZ01vZGVsXScsXG5cdHByb3ZpZGVyczogW1xuXHRcdHsgcHJvdmlkZTogTkdfQVNZTkNfVkFMSURBVE9SUywgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRXhpc3RzVmFsaWRhdG9yKSwgbXVsdGk6IHRydWUgfSxcblx0XVxufSlcbmV4cG9ydCBjbGFzcyBFeGlzdHNWYWxpZGF0b3IgaW1wbGVtZW50cyBBc3luY1ZhbGlkYXRvciB7XG5cblx0cHJpdmF0ZSB2YWx1ZXMgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4obnVsbCk7XG5cdHNldCB2YWx1ZSh2YWx1ZTogc3RyaW5nKSB7XG5cdFx0aWYgKHZhbHVlICYmIHZhbHVlLnRyaW0oKSAhPT0gJycpIHtcblx0XHRcdHRoaXMudmFsdWVzLm5leHQodmFsdWUpO1xuXHRcdH1cblx0fVxuXHRwcml2YXRlIGRlYm91bmNlZCQ6IE9ic2VydmFibGU8VmFsaWRhdGlvbkVycm9ycyB8IG51bGw+ID0gdGhpcy52YWx1ZXMucGlwZShcblx0XHRkZWJvdW5jZVRpbWUoREVCT1VOQ0VfVElNRSksXG5cdFx0c3dpdGNoTWFwKCh2YWx1ZTogc3RyaW5nKSA9PiB7XG5cdFx0XHQvLyBjb25zb2xlLmxvZygnRXhpc3RzVmFsaWRhdG9yLmRlYm91bmNlZCQnLCB2YWx1ZSk7XG5cdFx0XHRyZXR1cm4gdGhpcy5leGlzdHMkKHZhbHVlKTtcblx0XHR9KSxcblx0XHRjYXRjaEVycm9yKChyZXNwb25zZSkgPT4ge1xuXHRcdFx0Y29uc29sZS5sb2coJ0V4aXN0c1ZhbGlkYXRvci5kZWJvdW5jZWQkLmNhdGNoRXJyb3InLCByZXNwb25zZSk7XG5cdFx0XHRyZXR1cm4gb2YobnVsbCk7XG5cdFx0fSksXG5cdFx0dGFrZSgxKSxcblx0KTtcblxuXHRASW5wdXQoKSBleGlzdHM6IEZ1bmN0aW9uO1xuXG5cdGV4aXN0cyQodmFsdWU6IHN0cmluZyk6IE9ic2VydmFibGU8VmFsaWRhdGlvbkVycm9ycyB8IG51bGw+IHtcblx0XHRpZiAodHlwZW9mIHRoaXMuZXhpc3RzID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHQvLyBjb25zb2xlLmxvZygnRXhpc3RzVmFsaWRhdG9yLmV4aXN0cyQnLCB2YWx1ZSk7XG5cdFx0XHRyZXR1cm4gdGhpcy5leGlzdHModmFsdWUpLnBpcGUoXG5cdFx0XHRcdHN3aXRjaE1hcChleGlzdHMgPT4ge1xuXHRcdFx0XHRcdGlmIChleGlzdHMpIHtcblx0XHRcdFx0XHRcdHJldHVybiBvZih7XG5cdFx0XHRcdFx0XHRcdGV4aXN0czogdHJ1ZSxcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gb2YobnVsbCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KSxcblx0XHRcdCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBvZihudWxsKTtcblx0XHR9XG5cdH1cblxuXHR2YWxpZGF0ZShjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBQcm9taXNlPFZhbGlkYXRpb25FcnJvcnMgfCBudWxsPiB8IE9ic2VydmFibGU8VmFsaWRhdGlvbkVycm9ycyB8IG51bGw+IHtcblx0XHR0aGlzLnZhbHVlID0gY29udHJvbC52YWx1ZTtcblx0XHRyZXR1cm4gdGhpcy5kZWJvdW5jZWQkO1xuXHR9XG5cbn1cbiJdfQ==