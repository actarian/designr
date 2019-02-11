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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhpc3RzLnZhbGlkYXRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJsaWIvZm9ybXMvZXhpc3RzLnZhbGlkYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBbUMsbUJBQW1CLEVBQW9CLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEcsT0FBTyxFQUFFLGVBQWUsRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDOztJQUVyRSxhQUFhLEdBQVcsR0FBRztBQUVqQztJQUFBO1FBQUEsaUJBcURDO1FBN0NRLFdBQU0sR0FBRyxJQUFJLGVBQWUsQ0FBUyxJQUFJLENBQUMsQ0FBQztRQU0zQyxlQUFVLEdBQXdDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUN6RSxZQUFZLENBQUMsYUFBYSxDQUFDLEVBQzNCLFNBQVMsQ0FBQyxVQUFDLEtBQWE7WUFDdkIsb0RBQW9EO1lBQ3BELE9BQU8sS0FBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1QixDQUFDLENBQUMsRUFDRixVQUFVLENBQUMsVUFBQyxRQUFRO1lBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUNBQXVDLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDL0QsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakIsQ0FBQyxDQUFDLEVBQ0YsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUNQLENBQUM7SUE0QkgsQ0FBQztJQTVDQSxzQkFBSSxrQ0FBSzs7Ozs7UUFBVCxVQUFVLEtBQWE7WUFDdEIsSUFBSSxLQUFLLElBQUksS0FBSyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRTtnQkFDakMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDeEI7UUFDRixDQUFDOzs7T0FBQTs7Ozs7SUFnQkQsaUNBQU87Ozs7SUFBUCxVQUFRLEtBQWE7UUFDcEIsSUFBSSxPQUFPLElBQUksQ0FBQyxNQUFNLEtBQUssVUFBVSxFQUFFO1lBQ3RDLGlEQUFpRDtZQUNqRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUM3QixTQUFTLENBQUMsVUFBQSxNQUFNO2dCQUNmLElBQUksTUFBTSxFQUFFO29CQUNYLE9BQU8sRUFBRSxDQUFDO3dCQUNULE1BQU0sRUFBRSxJQUFJO3FCQUNaLENBQUMsQ0FBQztpQkFDSDtxQkFBTTtvQkFDTixPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDaEI7WUFDRixDQUFDLENBQUMsQ0FDRixDQUFDO1NBQ0Y7YUFBTTtZQUNOLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2hCO0lBQ0YsQ0FBQzs7Ozs7SUFFRCxrQ0FBUTs7OztJQUFSLFVBQVMsT0FBd0I7UUFDaEMsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO1FBQzNCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN4QixDQUFDOztnQkFuREQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxtRUFBbUU7b0JBQzdFLFNBQVMsRUFBRTt3QkFDVixFQUFFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSxlQUFlLEVBQWYsQ0FBZSxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRTtxQkFDN0Y7aUJBQ0Q7Ozt5QkFzQkMsS0FBSzs7SUEwQlAsc0JBQUM7Q0FBQSxBQXJERCxJQXFEQztTQS9DWSxlQUFlOzs7Ozs7SUFFM0IsaUNBQW1EOzs7OztJQU1uRCxxQ0FXRTs7SUFFRixpQ0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIGZvcndhcmRSZWYsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wsIEFzeW5jVmFsaWRhdG9yLCBOR19BU1lOQ19WQUxJREFUT1JTLCBWYWxpZGF0aW9uRXJyb3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgZGVib3VuY2VUaW1lLCBzd2l0Y2hNYXAsIHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmNvbnN0IERFQk9VTkNFX1RJTUU6IG51bWJlciA9IDI1MDtcblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnW2V4aXN0c11bZm9ybUNvbnRyb2xOYW1lXSxbZXhpc3RzXVtmb3JtQ29udHJvbF0sW2V4aXN0c11bbmdNb2RlbF0nLFxuXHRwcm92aWRlcnM6IFtcblx0XHR7IHByb3ZpZGU6IE5HX0FTWU5DX1ZBTElEQVRPUlMsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEV4aXN0c1ZhbGlkYXRvciksIG11bHRpOiB0cnVlIH0sXG5cdF1cbn0pXG5leHBvcnQgY2xhc3MgRXhpc3RzVmFsaWRhdG9yIGltcGxlbWVudHMgQXN5bmNWYWxpZGF0b3Ige1xuXG5cdHByaXZhdGUgdmFsdWVzID0gbmV3IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+KG51bGwpO1xuXHRzZXQgdmFsdWUodmFsdWU6IHN0cmluZykge1xuXHRcdGlmICh2YWx1ZSAmJiB2YWx1ZS50cmltKCkgIT09ICcnKSB7XG5cdFx0XHR0aGlzLnZhbHVlcy5uZXh0KHZhbHVlKTtcblx0XHR9XG5cdH1cblx0cHJpdmF0ZSBkZWJvdW5jZWQkOiBPYnNlcnZhYmxlPFZhbGlkYXRpb25FcnJvcnMgfCBudWxsPiA9IHRoaXMudmFsdWVzLnBpcGUoXG5cdFx0ZGVib3VuY2VUaW1lKERFQk9VTkNFX1RJTUUpLFxuXHRcdHN3aXRjaE1hcCgodmFsdWU6IHN0cmluZykgPT4ge1xuXHRcdFx0Ly8gY29uc29sZS5sb2coJ0V4aXN0c1ZhbGlkYXRvci5kZWJvdW5jZWQkJywgdmFsdWUpO1xuXHRcdFx0cmV0dXJuIHRoaXMuZXhpc3RzJCh2YWx1ZSk7XG5cdFx0fSksXG5cdFx0Y2F0Y2hFcnJvcigocmVzcG9uc2UpID0+IHtcblx0XHRcdGNvbnNvbGUubG9nKCdFeGlzdHNWYWxpZGF0b3IuZGVib3VuY2VkJC5jYXRjaEVycm9yJywgcmVzcG9uc2UpO1xuXHRcdFx0cmV0dXJuIG9mKG51bGwpO1xuXHRcdH0pLFxuXHRcdHRha2UoMSksXG5cdCk7XG5cblx0QElucHV0KCkgZXhpc3RzOiBGdW5jdGlvbjtcblxuXHRleGlzdHMkKHZhbHVlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFZhbGlkYXRpb25FcnJvcnMgfCBudWxsPiB7XG5cdFx0aWYgKHR5cGVvZiB0aGlzLmV4aXN0cyA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0Ly8gY29uc29sZS5sb2coJ0V4aXN0c1ZhbGlkYXRvci5leGlzdHMkJywgdmFsdWUpO1xuXHRcdFx0cmV0dXJuIHRoaXMuZXhpc3RzKHZhbHVlKS5waXBlKFxuXHRcdFx0XHRzd2l0Y2hNYXAoZXhpc3RzID0+IHtcblx0XHRcdFx0XHRpZiAoZXhpc3RzKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gb2Yoe1xuXHRcdFx0XHRcdFx0XHRleGlzdHM6IHRydWUsXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cmV0dXJuIG9mKG51bGwpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSksXG5cdFx0XHQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gb2YobnVsbCk7XG5cdFx0fVxuXHR9XG5cblx0dmFsaWRhdGUoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogUHJvbWlzZTxWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbD4gfCBPYnNlcnZhYmxlPFZhbGlkYXRpb25FcnJvcnMgfCBudWxsPiB7XG5cdFx0dGhpcy52YWx1ZSA9IGNvbnRyb2wudmFsdWU7XG5cdFx0cmV0dXJuIHRoaXMuZGVib3VuY2VkJDtcblx0fVxuXG59XG4iXX0=