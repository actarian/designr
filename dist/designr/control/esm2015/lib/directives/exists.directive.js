/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, forwardRef, Input } from '@angular/core';
import { NG_ASYNC_VALIDATORS } from '@angular/forms';
import { BehaviorSubject, isObservable, of } from 'rxjs';
import { catchError, debounceTime, map, switchMap, take } from 'rxjs/operators';
/** @type {?} */
const DEBOUNCE_TIME = 250;
export class ExistsValidator {
    constructor() {
        this.value$ = new BehaviorSubject(null);
        this.debounced$ = this.value$.pipe(debounceTime(DEBOUNCE_TIME), switchMap((/**
         * @param {?} value
         * @return {?}
         */
        (value) => {
            // console.log('ExistsValidator.debounced$', value);
            return this.exists$(value);
        })), catchError((/**
         * @param {?} response
         * @return {?}
         */
        (response) => {
            console.log('ExistsValidator.debounced$.catchError', response);
            return of(null);
        })), take(1));
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set value(value) {
        // console.log('value', value);
        if (value && String(value).trim() !== '') {
            this.value$.next(value);
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    exists$(value) {
        if (typeof this.exists === 'function') {
            /** @type {?} */
            const exists = this.exists(value);
            if (isObservable(exists)) {
                return exists.pipe(map((/**
                 * @param {?} exists
                 * @return {?}
                 */
                exists => {
                    return exists ? { exists: true } : null;
                })));
            }
            else {
                return of(exists ? { exists: true } : null);
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
        this.value = control.value;
        // console.log('ExistsValidator.validate', control.value, control);
        return this.debounced$;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhpc3RzLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvbnRyb2wvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9leGlzdHMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFtQyxtQkFBbUIsRUFBb0IsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4RyxPQUFPLEVBQUUsZUFBZSxFQUFFLFlBQVksRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDckUsT0FBTyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7TUFFMUUsYUFBYSxHQUFXLEdBQUc7QUFRakMsTUFBTSxPQUFPLGVBQWU7SUFONUI7UUFVUyxXQUFNLEdBQUcsSUFBSSxlQUFlLENBQVMsSUFBSSxDQUFDLENBQUM7UUFFM0MsZUFBVSxHQUF3QyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FDekUsWUFBWSxDQUFDLGFBQWEsQ0FBQyxFQUMzQixTQUFTOzs7O1FBQUMsQ0FBQyxLQUFhLEVBQUUsRUFBRTtZQUMzQixvREFBb0Q7WUFDcEQsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVCLENBQUMsRUFBQyxFQUNGLFVBQVU7Ozs7UUFBQyxDQUFDLFFBQVEsRUFBRSxFQUFFO1lBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUNBQXVDLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDL0QsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakIsQ0FBQyxFQUFDLEVBQ0YsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUNQLENBQUM7SUFnQ0gsQ0FBQzs7Ozs7SUE5QkEsSUFBSSxLQUFLLENBQUMsS0FBYTtRQUN0QiwrQkFBK0I7UUFDL0IsSUFBSSxLQUFLLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUN6QyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN4QjtJQUNGLENBQUM7Ozs7O0lBRUQsT0FBTyxDQUFDLEtBQWE7UUFDcEIsSUFBSSxPQUFPLElBQUksQ0FBQyxNQUFNLEtBQUssVUFBVSxFQUFFOztrQkFDaEMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1lBQ2pDLElBQUksWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUN6QixPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQ2pCLEdBQUc7Ozs7Z0JBQUMsTUFBTSxDQUFDLEVBQUU7b0JBQ1osT0FBTyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQ3pDLENBQUMsRUFBQyxDQUNGLENBQUM7YUFDRjtpQkFBTTtnQkFDTixPQUFPLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUM1QztTQUNEO2FBQU07WUFDTixPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNoQjtJQUNGLENBQUM7Ozs7O0lBRUQsUUFBUSxDQUFDLE9BQXdCO1FBQ2hDLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUMzQixtRUFBbUU7UUFDbkUsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3hCLENBQUM7OztZQXJERCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLG1FQUFtRTtnQkFDN0UsU0FBUyxFQUFFO29CQUNWLEVBQUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLFdBQVcsRUFBRSxVQUFVOzs7d0JBQUMsR0FBRyxFQUFFLENBQUMsZUFBZSxFQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRTtpQkFDN0Y7YUFDRDs7O3FCQUdDLEtBQUs7Ozs7SUFBTixpQ0FBMEI7Ozs7O0lBRTFCLGlDQUFtRDs7Ozs7SUFFbkQscUNBV0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIGZvcndhcmRSZWYsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wsIEFzeW5jVmFsaWRhdG9yLCBOR19BU1lOQ19WQUxJREFUT1JTLCBWYWxpZGF0aW9uRXJyb3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBpc09ic2VydmFibGUsIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBkZWJvdW5jZVRpbWUsIG1hcCwgc3dpdGNoTWFwLCB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5jb25zdCBERUJPVU5DRV9USU1FOiBudW1iZXIgPSAyNTA7XG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ1tleGlzdHNdW2Zvcm1Db250cm9sTmFtZV0sW2V4aXN0c11bZm9ybUNvbnRyb2xdLFtleGlzdHNdW25nTW9kZWxdJyxcblx0cHJvdmlkZXJzOiBbXG5cdFx0eyBwcm92aWRlOiBOR19BU1lOQ19WQUxJREFUT1JTLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFeGlzdHNWYWxpZGF0b3IpLCBtdWx0aTogdHJ1ZSB9LFxuXHRdXG59KVxuZXhwb3J0IGNsYXNzIEV4aXN0c1ZhbGlkYXRvciBpbXBsZW1lbnRzIEFzeW5jVmFsaWRhdG9yIHtcblxuXHRASW5wdXQoKSBleGlzdHM6IEZ1bmN0aW9uO1xuXG5cdHByaXZhdGUgdmFsdWUkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+KG51bGwpO1xuXG5cdHByaXZhdGUgZGVib3VuY2VkJDogT2JzZXJ2YWJsZTxWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbD4gPSB0aGlzLnZhbHVlJC5waXBlKFxuXHRcdGRlYm91bmNlVGltZShERUJPVU5DRV9USU1FKSxcblx0XHRzd2l0Y2hNYXAoKHZhbHVlOiBzdHJpbmcpID0+IHtcblx0XHRcdC8vIGNvbnNvbGUubG9nKCdFeGlzdHNWYWxpZGF0b3IuZGVib3VuY2VkJCcsIHZhbHVlKTtcblx0XHRcdHJldHVybiB0aGlzLmV4aXN0cyQodmFsdWUpO1xuXHRcdH0pLFxuXHRcdGNhdGNoRXJyb3IoKHJlc3BvbnNlKSA9PiB7XG5cdFx0XHRjb25zb2xlLmxvZygnRXhpc3RzVmFsaWRhdG9yLmRlYm91bmNlZCQuY2F0Y2hFcnJvcicsIHJlc3BvbnNlKTtcblx0XHRcdHJldHVybiBvZihudWxsKTtcblx0XHR9KSxcblx0XHR0YWtlKDEpLFxuXHQpO1xuXG5cdHNldCB2YWx1ZSh2YWx1ZTogc3RyaW5nKSB7XG5cdFx0Ly8gY29uc29sZS5sb2coJ3ZhbHVlJywgdmFsdWUpO1xuXHRcdGlmICh2YWx1ZSAmJiBTdHJpbmcodmFsdWUpLnRyaW0oKSAhPT0gJycpIHtcblx0XHRcdHRoaXMudmFsdWUkLm5leHQodmFsdWUpO1xuXHRcdH1cblx0fVxuXG5cdGV4aXN0cyQodmFsdWU6IHN0cmluZyk6IE9ic2VydmFibGU8VmFsaWRhdGlvbkVycm9ycyB8IG51bGw+IHtcblx0XHRpZiAodHlwZW9mIHRoaXMuZXhpc3RzID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRjb25zdCBleGlzdHMgPSB0aGlzLmV4aXN0cyh2YWx1ZSk7XG5cdFx0XHRpZiAoaXNPYnNlcnZhYmxlKGV4aXN0cykpIHtcblx0XHRcdFx0cmV0dXJuIGV4aXN0cy5waXBlKFxuXHRcdFx0XHRcdG1hcChleGlzdHMgPT4ge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGV4aXN0cyA/IHsgZXhpc3RzOiB0cnVlIH0gOiBudWxsO1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gb2YoZXhpc3RzID8geyBleGlzdHM6IHRydWUgfSA6IG51bGwpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gb2YobnVsbCk7XG5cdFx0fVxuXHR9XG5cblx0dmFsaWRhdGUoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogUHJvbWlzZTxWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbD4gfCBPYnNlcnZhYmxlPFZhbGlkYXRpb25FcnJvcnMgfCBudWxsPiB7XG5cdFx0dGhpcy52YWx1ZSA9IGNvbnRyb2wudmFsdWU7XG5cdFx0Ly8gY29uc29sZS5sb2coJ0V4aXN0c1ZhbGlkYXRvci52YWxpZGF0ZScsIGNvbnRyb2wudmFsdWUsIGNvbnRyb2wpO1xuXHRcdHJldHVybiB0aGlzLmRlYm91bmNlZCQ7XG5cdH1cblxufVxuIl19