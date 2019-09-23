/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { isObservable, of } from 'rxjs';
import { catchError, debounceTime, map, take } from 'rxjs/operators';
/** @type {?} */
const DEBOUNCE_TIME = 250;
/**
 * @param {?} value
 * @param {?=} exists
 * @return {?}
 */
function exists$(value, exists) {
    if (typeof exists === 'function') {
        /** @type {?} */
        const oservableOrValue = exists(value);
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
 * @param {?=} exists
 * @return {?}
 */
export function existsValidator(exists) {
    return (/**
     * @param {?} control
     * @return {?}
     */
    (control) => {
        return exists$(control.value, exists).pipe(debounceTime(DEBOUNCE_TIME), catchError((/**
         * @param {?} error
         * @return {?}
         */
        (error) => {
            console.log('existsValidator.catchError', error);
            return of(null);
        })), take(1));
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhpc3RzLnZhbGlkYXRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvbnRyb2wvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9leGlzdHMudmFsaWRhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsWUFBWSxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNwRCxPQUFPLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O01BRS9ELGFBQWEsR0FBVyxHQUFHOzs7Ozs7QUFFakMsU0FBUyxPQUFPLENBQUMsS0FBVSxFQUFFLE1BQWlCO0lBQzdDLElBQUksT0FBTyxNQUFNLEtBQUssVUFBVSxFQUFFOztjQUMzQixnQkFBZ0IsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ3RDLElBQUksWUFBWSxDQUFDLGdCQUFnQixDQUFDLEVBQUU7WUFDbkMsT0FBTyxnQkFBZ0IsQ0FBQyxJQUFJLENBQzNCLEdBQUc7Ozs7WUFBQyxNQUFNLENBQUMsRUFBRTtnQkFDWixPQUFPLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUN6QyxDQUFDLEVBQUMsQ0FDRixDQUFDO1NBQ0Y7YUFBTTtZQUNOLE9BQU8sRUFBRSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDdEQ7S0FDRDtTQUFNO1FBQ04sT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDaEI7QUFDRixDQUFDOzs7OztBQUVELE1BQU0sVUFBVSxlQUFlLENBQUMsTUFBaUI7SUFDaEQ7Ozs7SUFBTyxDQUFDLE9BQXdCLEVBQXVDLEVBQUU7UUFDeEUsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQ3pDLFlBQVksQ0FBQyxhQUFhLENBQUMsRUFDM0IsVUFBVTs7OztRQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUNqRCxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqQixDQUFDLEVBQUMsRUFDRixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQ1AsQ0FBQztJQUNILENBQUMsRUFBQztBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wsIEFzeW5jVmFsaWRhdG9yRm4sIFZhbGlkYXRpb25FcnJvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBpc09ic2VydmFibGUsIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBkZWJvdW5jZVRpbWUsIG1hcCwgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuY29uc3QgREVCT1VOQ0VfVElNRTogbnVtYmVyID0gMjUwO1xuXG5mdW5jdGlvbiBleGlzdHMkKHZhbHVlOiBhbnksIGV4aXN0cz86IEZ1bmN0aW9uKTogT2JzZXJ2YWJsZTxWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbD4ge1xuXHRpZiAodHlwZW9mIGV4aXN0cyA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdGNvbnN0IG9zZXJ2YWJsZU9yVmFsdWUgPSBleGlzdHModmFsdWUpO1xuXHRcdGlmIChpc09ic2VydmFibGUob3NlcnZhYmxlT3JWYWx1ZSkpIHtcblx0XHRcdHJldHVybiBvc2VydmFibGVPclZhbHVlLnBpcGUoXG5cdFx0XHRcdG1hcChleGlzdHMgPT4ge1xuXHRcdFx0XHRcdHJldHVybiBleGlzdHMgPyB7IGV4aXN0czogdHJ1ZSB9IDogbnVsbDtcblx0XHRcdFx0fSlcblx0XHRcdCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBvZihvc2VydmFibGVPclZhbHVlID8geyBleGlzdHM6IHRydWUgfSA6IG51bGwpO1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gb2YobnVsbCk7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4aXN0c1ZhbGlkYXRvcihleGlzdHM/OiBGdW5jdGlvbik6IEFzeW5jVmFsaWRhdG9yRm4ge1xuXHRyZXR1cm4gKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IE9ic2VydmFibGU8VmFsaWRhdGlvbkVycm9ycyB8IG51bGw+ID0+IHtcblx0XHRyZXR1cm4gZXhpc3RzJChjb250cm9sLnZhbHVlLCBleGlzdHMpLnBpcGUoXG5cdFx0XHRkZWJvdW5jZVRpbWUoREVCT1VOQ0VfVElNRSksXG5cdFx0XHRjYXRjaEVycm9yKChlcnJvcikgPT4ge1xuXHRcdFx0XHRjb25zb2xlLmxvZygnZXhpc3RzVmFsaWRhdG9yLmNhdGNoRXJyb3InLCBlcnJvcik7XG5cdFx0XHRcdHJldHVybiBvZihudWxsKTtcblx0XHRcdH0pLFxuXHRcdFx0dGFrZSgxKSxcblx0XHQpO1xuXHR9O1xufVxuIl19