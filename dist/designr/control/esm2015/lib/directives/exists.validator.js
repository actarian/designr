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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhpc3RzLnZhbGlkYXRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvbnRyb2wvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9leGlzdHMudmFsaWRhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsWUFBWSxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNwRCxPQUFPLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O01BRS9ELGFBQWEsR0FBVyxHQUFHOzs7Ozs7QUFFakMsU0FBUyxPQUFPLENBQUMsS0FBVSxFQUFFLE1BQWlCO0lBQzdDLElBQUksT0FBTyxNQUFNLEtBQUssVUFBVSxFQUFFOztjQUMzQixnQkFBZ0IsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ3RDLElBQUksWUFBWSxDQUFDLGdCQUFnQixDQUFDLEVBQUU7WUFDbkMsT0FBTyxnQkFBZ0IsQ0FBQyxJQUFJLENBQzNCLEdBQUc7Ozs7WUFBQyxNQUFNLENBQUMsRUFBRTtnQkFDWixPQUFPLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUN6QyxDQUFDLEVBQUMsQ0FDRixDQUFDO1NBQ0Y7YUFBTTtZQUNOLE9BQU8sRUFBRSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDdEQ7S0FDRDtTQUFNO1FBQ04sT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDaEI7QUFDRixDQUFDOzs7OztBQUVELE1BQU0sVUFBVSxlQUFlLENBQUMsTUFBaUI7SUFDaEQ7Ozs7SUFBTyxDQUFDLE9BQXdCLEVBQXVDLEVBQUU7UUFDeEUsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQ3pDLFlBQVksQ0FBQyxhQUFhLENBQUMsRUFDM0IsVUFBVTs7OztRQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUNqRCxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqQixDQUFDLEVBQUMsRUFDRixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQ1AsQ0FBQztJQUNILENBQUMsRUFBQztBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wsIEFzeW5jVmFsaWRhdG9yRm4sIFZhbGlkYXRpb25FcnJvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IGlzT2JzZXJ2YWJsZSwgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgY2F0Y2hFcnJvciwgZGVib3VuY2VUaW1lLCBtYXAsIHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5jb25zdCBERUJPVU5DRV9USU1FOiBudW1iZXIgPSAyNTA7XHJcblxyXG5mdW5jdGlvbiBleGlzdHMkKHZhbHVlOiBhbnksIGV4aXN0cz86IEZ1bmN0aW9uKTogT2JzZXJ2YWJsZTxWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbD4ge1xyXG5cdGlmICh0eXBlb2YgZXhpc3RzID09PSAnZnVuY3Rpb24nKSB7XHJcblx0XHRjb25zdCBvc2VydmFibGVPclZhbHVlID0gZXhpc3RzKHZhbHVlKTtcclxuXHRcdGlmIChpc09ic2VydmFibGUob3NlcnZhYmxlT3JWYWx1ZSkpIHtcclxuXHRcdFx0cmV0dXJuIG9zZXJ2YWJsZU9yVmFsdWUucGlwZShcclxuXHRcdFx0XHRtYXAoZXhpc3RzID0+IHtcclxuXHRcdFx0XHRcdHJldHVybiBleGlzdHMgPyB7IGV4aXN0czogdHJ1ZSB9IDogbnVsbDtcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuIG9mKG9zZXJ2YWJsZU9yVmFsdWUgPyB7IGV4aXN0czogdHJ1ZSB9IDogbnVsbCk7XHJcblx0XHR9XHJcblx0fSBlbHNlIHtcclxuXHRcdHJldHVybiBvZihudWxsKTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBleGlzdHNWYWxpZGF0b3IoZXhpc3RzPzogRnVuY3Rpb24pOiBBc3luY1ZhbGlkYXRvckZuIHtcclxuXHRyZXR1cm4gKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IE9ic2VydmFibGU8VmFsaWRhdGlvbkVycm9ycyB8IG51bGw+ID0+IHtcclxuXHRcdHJldHVybiBleGlzdHMkKGNvbnRyb2wudmFsdWUsIGV4aXN0cykucGlwZShcclxuXHRcdFx0ZGVib3VuY2VUaW1lKERFQk9VTkNFX1RJTUUpLFxyXG5cdFx0XHRjYXRjaEVycm9yKChlcnJvcikgPT4ge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCdleGlzdHNWYWxpZGF0b3IuY2F0Y2hFcnJvcicsIGVycm9yKTtcclxuXHRcdFx0XHRyZXR1cm4gb2YobnVsbCk7XHJcblx0XHRcdH0pLFxyXG5cdFx0XHR0YWtlKDEpLFxyXG5cdFx0KTtcclxuXHR9O1xyXG59XHJcbiJdfQ==