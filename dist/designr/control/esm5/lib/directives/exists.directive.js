/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, forwardRef, Input } from '@angular/core';
import { NG_ASYNC_VALIDATORS } from '@angular/forms';
import { BehaviorSubject, isObservable, of } from 'rxjs';
import { catchError, debounceTime, switchMap, take } from 'rxjs/operators';
/** @type {?} */
var DEBOUNCE_TIME = 250;
var ExistsValidator = /** @class */ (function () {
    function ExistsValidator() {
        var _this = this;
        this.value$ = new BehaviorSubject(null);
        this.debounced$ = this.value$.pipe(debounceTime(DEBOUNCE_TIME), switchMap((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            // console.log('ExistsValidator.debounced$', value);
            return _this.exists$(value);
        })), catchError((/**
         * @param {?} response
         * @return {?}
         */
        function (response) {
            console.log('ExistsValidator.debounced$.catchError', response);
            return of(null);
        })), take(1));
    }
    Object.defineProperty(ExistsValidator.prototype, "value", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            // console.log('value', value);
            if (value && String(value).trim() !== '') {
                this.value$.next(value);
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
        var _this = this;
        if (typeof this.exists === 'function') {
            /** @type {?} */
            var exists = this.exists(value);
            if (isObservable(exists)) {
                // console.log('ExistsValidator.exists$', value);
                return exists.pipe(switchMap((/**
                 * @param {?} exists
                 * @return {?}
                 */
                function (exists) {
                    // console.log('ExistsValidator.exists$', exists);
                    return of(_this.getValidationError(Boolean(exists)));
                })));
            }
            else {
                return of(this.getValidationError(Boolean(exists)));
            }
        }
        else {
            return of(this.getValidationError(value ? true : false));
        }
    };
    /**
     * @param {?} exists
     * @return {?}
     */
    ExistsValidator.prototype.getValidationError = /**
     * @param {?} exists
     * @return {?}
     */
    function (exists) {
        // console.log('ExistsValidator.getValidationError', exists);
        if (exists) {
            return {
                exists: true,
            };
        }
        else {
            return null;
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
        // console.log('ExistsValidator.validate', control.value, control);
        return this.debounced$;
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
    /**
     * @type {?}
     * @private
     */
    ExistsValidator.prototype.value$;
    /**
     * @type {?}
     * @private
     */
    ExistsValidator.prototype.debounced$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhpc3RzLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvbnRyb2wvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9leGlzdHMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFtQyxtQkFBbUIsRUFBb0IsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4RyxPQUFPLEVBQUUsZUFBZSxFQUFFLFlBQVksRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDckUsT0FBTyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDOztJQUVyRSxhQUFhLEdBQVcsR0FBRztBQUVqQztJQUFBO1FBQUEsaUJBb0VDO1FBMURRLFdBQU0sR0FBRyxJQUFJLGVBQWUsQ0FBUyxJQUFJLENBQUMsQ0FBQztRQUUzQyxlQUFVLEdBQXdDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUN6RSxZQUFZLENBQUMsYUFBYSxDQUFDLEVBQzNCLFNBQVM7Ozs7UUFBQyxVQUFDLEtBQWE7WUFDdkIsb0RBQW9EO1lBQ3BELE9BQU8sS0FBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1QixDQUFDLEVBQUMsRUFDRixVQUFVOzs7O1FBQUMsVUFBQyxRQUFRO1lBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUNBQXVDLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDL0QsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakIsQ0FBQyxFQUFDLEVBQ0YsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUNQLENBQUM7SUE2Q0gsQ0FBQztJQTNDQSxzQkFBSSxrQ0FBSzs7Ozs7UUFBVCxVQUFVLEtBQWE7WUFDdEIsK0JBQStCO1lBQy9CLElBQUksS0FBSyxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUU7Z0JBQ3pDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3hCO1FBQ0YsQ0FBQzs7O09BQUE7Ozs7O0lBRUQsaUNBQU87Ozs7SUFBUCxVQUFRLEtBQWE7UUFBckIsaUJBaUJDO1FBaEJBLElBQUksT0FBTyxJQUFJLENBQUMsTUFBTSxLQUFLLFVBQVUsRUFBRTs7Z0JBQ2hDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztZQUNqQyxJQUFJLFlBQVksQ0FBQyxNQUFNLENBQUMsRUFBRTtnQkFDekIsaURBQWlEO2dCQUNqRCxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQ2pCLFNBQVM7Ozs7Z0JBQUMsVUFBQSxNQUFNO29CQUNmLGtEQUFrRDtvQkFDbEQsT0FBTyxFQUFFLENBQUMsS0FBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3JELENBQUMsRUFBQyxDQUNGLENBQUM7YUFDRjtpQkFBTTtnQkFDTixPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNwRDtTQUNEO2FBQU07WUFDTixPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDekQ7SUFDRixDQUFDOzs7OztJQUVELDRDQUFrQjs7OztJQUFsQixVQUFtQixNQUFlO1FBQ2pDLDZEQUE2RDtRQUM3RCxJQUFJLE1BQU0sRUFBRTtZQUNYLE9BQU87Z0JBQ04sTUFBTSxFQUFFLElBQUk7YUFDWixDQUFDO1NBQ0Y7YUFBTTtZQUNOLE9BQU8sSUFBSSxDQUFDO1NBQ1o7SUFDRixDQUFDOzs7OztJQUVELGtDQUFROzs7O0lBQVIsVUFBUyxPQUF3QjtRQUNoQyxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFDM0IsbUVBQW1FO1FBQ25FLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN4QixDQUFDOztnQkFsRUQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxtRUFBbUU7b0JBQzdFLFNBQVMsRUFBRTt3QkFDVixFQUFFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxXQUFXLEVBQUUsVUFBVTs7OzRCQUFDLGNBQU0sT0FBQSxlQUFlLEVBQWYsQ0FBZSxFQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRTtxQkFDN0Y7aUJBQ0Q7Ozt5QkFHQyxLQUFLOztJQTREUCxzQkFBQztDQUFBLEFBcEVELElBb0VDO1NBOURZLGVBQWU7OztJQUUzQixpQ0FBMEI7Ozs7O0lBRTFCLGlDQUFtRDs7Ozs7SUFFbkQscUNBV0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIGZvcndhcmRSZWYsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wsIEFzeW5jVmFsaWRhdG9yLCBOR19BU1lOQ19WQUxJREFUT1JTLCBWYWxpZGF0aW9uRXJyb3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBpc09ic2VydmFibGUsIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBkZWJvdW5jZVRpbWUsIHN3aXRjaE1hcCwgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuY29uc3QgREVCT1VOQ0VfVElNRTogbnVtYmVyID0gMjUwO1xuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdbZXhpc3RzXVtmb3JtQ29udHJvbE5hbWVdLFtleGlzdHNdW2Zvcm1Db250cm9sXSxbZXhpc3RzXVtuZ01vZGVsXScsXG5cdHByb3ZpZGVyczogW1xuXHRcdHsgcHJvdmlkZTogTkdfQVNZTkNfVkFMSURBVE9SUywgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRXhpc3RzVmFsaWRhdG9yKSwgbXVsdGk6IHRydWUgfSxcblx0XVxufSlcbmV4cG9ydCBjbGFzcyBFeGlzdHNWYWxpZGF0b3IgaW1wbGVtZW50cyBBc3luY1ZhbGlkYXRvciB7XG5cblx0QElucHV0KCkgZXhpc3RzOiBGdW5jdGlvbjtcblxuXHRwcml2YXRlIHZhbHVlJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPihudWxsKTtcblxuXHRwcml2YXRlIGRlYm91bmNlZCQ6IE9ic2VydmFibGU8VmFsaWRhdGlvbkVycm9ycyB8IG51bGw+ID0gdGhpcy52YWx1ZSQucGlwZShcblx0XHRkZWJvdW5jZVRpbWUoREVCT1VOQ0VfVElNRSksXG5cdFx0c3dpdGNoTWFwKCh2YWx1ZTogc3RyaW5nKSA9PiB7XG5cdFx0XHQvLyBjb25zb2xlLmxvZygnRXhpc3RzVmFsaWRhdG9yLmRlYm91bmNlZCQnLCB2YWx1ZSk7XG5cdFx0XHRyZXR1cm4gdGhpcy5leGlzdHMkKHZhbHVlKTtcblx0XHR9KSxcblx0XHRjYXRjaEVycm9yKChyZXNwb25zZSkgPT4ge1xuXHRcdFx0Y29uc29sZS5sb2coJ0V4aXN0c1ZhbGlkYXRvci5kZWJvdW5jZWQkLmNhdGNoRXJyb3InLCByZXNwb25zZSk7XG5cdFx0XHRyZXR1cm4gb2YobnVsbCk7XG5cdFx0fSksXG5cdFx0dGFrZSgxKSxcblx0KTtcblxuXHRzZXQgdmFsdWUodmFsdWU6IHN0cmluZykge1xuXHRcdC8vIGNvbnNvbGUubG9nKCd2YWx1ZScsIHZhbHVlKTtcblx0XHRpZiAodmFsdWUgJiYgU3RyaW5nKHZhbHVlKS50cmltKCkgIT09ICcnKSB7XG5cdFx0XHR0aGlzLnZhbHVlJC5uZXh0KHZhbHVlKTtcblx0XHR9XG5cdH1cblxuXHRleGlzdHMkKHZhbHVlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFZhbGlkYXRpb25FcnJvcnMgfCBudWxsPiB7XG5cdFx0aWYgKHR5cGVvZiB0aGlzLmV4aXN0cyA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0Y29uc3QgZXhpc3RzID0gdGhpcy5leGlzdHModmFsdWUpO1xuXHRcdFx0aWYgKGlzT2JzZXJ2YWJsZShleGlzdHMpKSB7XG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKCdFeGlzdHNWYWxpZGF0b3IuZXhpc3RzJCcsIHZhbHVlKTtcblx0XHRcdFx0cmV0dXJuIGV4aXN0cy5waXBlKFxuXHRcdFx0XHRcdHN3aXRjaE1hcChleGlzdHMgPT4ge1xuXHRcdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ0V4aXN0c1ZhbGlkYXRvci5leGlzdHMkJywgZXhpc3RzKTtcblx0XHRcdFx0XHRcdHJldHVybiBvZih0aGlzLmdldFZhbGlkYXRpb25FcnJvcihCb29sZWFuKGV4aXN0cykpKTtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIG9mKHRoaXMuZ2V0VmFsaWRhdGlvbkVycm9yKEJvb2xlYW4oZXhpc3RzKSkpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gb2YodGhpcy5nZXRWYWxpZGF0aW9uRXJyb3IodmFsdWUgPyB0cnVlIDogZmFsc2UpKTtcblx0XHR9XG5cdH1cblxuXHRnZXRWYWxpZGF0aW9uRXJyb3IoZXhpc3RzOiBib29sZWFuKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xuXHRcdC8vIGNvbnNvbGUubG9nKCdFeGlzdHNWYWxpZGF0b3IuZ2V0VmFsaWRhdGlvbkVycm9yJywgZXhpc3RzKTtcblx0XHRpZiAoZXhpc3RzKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRleGlzdHM6IHRydWUsXG5cdFx0XHR9O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdH1cblxuXHR2YWxpZGF0ZShjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBQcm9taXNlPFZhbGlkYXRpb25FcnJvcnMgfCBudWxsPiB8IE9ic2VydmFibGU8VmFsaWRhdGlvbkVycm9ycyB8IG51bGw+IHtcblx0XHR0aGlzLnZhbHVlID0gY29udHJvbC52YWx1ZTtcblx0XHQvLyBjb25zb2xlLmxvZygnRXhpc3RzVmFsaWRhdG9yLnZhbGlkYXRlJywgY29udHJvbC52YWx1ZSwgY29udHJvbCk7XG5cdFx0cmV0dXJuIHRoaXMuZGVib3VuY2VkJDtcblx0fVxuXG59XG4iXX0=