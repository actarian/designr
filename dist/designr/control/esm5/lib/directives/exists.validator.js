/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { isObservable, of } from 'rxjs';
import { catchError, debounceTime, map, take } from 'rxjs/operators';
/** @type {?} */
var DEBOUNCE_TIME = 250;
/**
 * @param {?} value
 * @param {?=} exists
 * @return {?}
 */
function exists$(value, exists) {
    if (typeof exists === 'function') {
        /** @type {?} */
        var oservableOrValue = exists(value);
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
    function (control) {
        return exists$(control.value, exists).pipe(debounceTime(DEBOUNCE_TIME), catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            console.log('existsValidator.catchError', error);
            return of(null);
        })), take(1));
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhpc3RzLnZhbGlkYXRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvbnRyb2wvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9leGlzdHMudmFsaWRhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsWUFBWSxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNwRCxPQUFPLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0lBRS9ELGFBQWEsR0FBVyxHQUFHOzs7Ozs7QUFFakMsU0FBUyxPQUFPLENBQUMsS0FBVSxFQUFFLE1BQWlCO0lBQzdDLElBQUksT0FBTyxNQUFNLEtBQUssVUFBVSxFQUFFOztZQUMzQixnQkFBZ0IsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ3RDLElBQUksWUFBWSxDQUFDLGdCQUFnQixDQUFDLEVBQUU7WUFDbkMsT0FBTyxnQkFBZ0IsQ0FBQyxJQUFJLENBQzNCLEdBQUc7Ozs7WUFBQyxVQUFBLE1BQU07Z0JBQ1QsT0FBTyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDekMsQ0FBQyxFQUFDLENBQ0YsQ0FBQztTQUNGO2FBQU07WUFDTixPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3REO0tBQ0Q7U0FBTTtRQUNOLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2hCO0FBQ0YsQ0FBQzs7Ozs7QUFFRCxNQUFNLFVBQVUsZUFBZSxDQUFDLE1BQWlCO0lBQ2hEOzs7O0lBQU8sVUFBQyxPQUF3QjtRQUMvQixPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FDekMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxFQUMzQixVQUFVOzs7O1FBQUMsVUFBQyxLQUFLO1lBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsNEJBQTRCLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDakQsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakIsQ0FBQyxFQUFDLEVBQ0YsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUNQLENBQUM7SUFDSCxDQUFDLEVBQUM7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sLCBBc3luY1ZhbGlkYXRvckZuLCBWYWxpZGF0aW9uRXJyb3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBpc09ic2VydmFibGUsIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGNhdGNoRXJyb3IsIGRlYm91bmNlVGltZSwgbWFwLCB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuY29uc3QgREVCT1VOQ0VfVElNRTogbnVtYmVyID0gMjUwO1xyXG5cclxuZnVuY3Rpb24gZXhpc3RzJCh2YWx1ZTogYW55LCBleGlzdHM/OiBGdW5jdGlvbik6IE9ic2VydmFibGU8VmFsaWRhdGlvbkVycm9ycyB8IG51bGw+IHtcclxuXHRpZiAodHlwZW9mIGV4aXN0cyA9PT0gJ2Z1bmN0aW9uJykge1xyXG5cdFx0Y29uc3Qgb3NlcnZhYmxlT3JWYWx1ZSA9IGV4aXN0cyh2YWx1ZSk7XHJcblx0XHRpZiAoaXNPYnNlcnZhYmxlKG9zZXJ2YWJsZU9yVmFsdWUpKSB7XHJcblx0XHRcdHJldHVybiBvc2VydmFibGVPclZhbHVlLnBpcGUoXHJcblx0XHRcdFx0bWFwKGV4aXN0cyA9PiB7XHJcblx0XHRcdFx0XHRyZXR1cm4gZXhpc3RzID8geyBleGlzdHM6IHRydWUgfSA6IG51bGw7XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0KTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJldHVybiBvZihvc2VydmFibGVPclZhbHVlID8geyBleGlzdHM6IHRydWUgfSA6IG51bGwpO1xyXG5cdFx0fVxyXG5cdH0gZWxzZSB7XHJcblx0XHRyZXR1cm4gb2YobnVsbCk7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZXhpc3RzVmFsaWRhdG9yKGV4aXN0cz86IEZ1bmN0aW9uKTogQXN5bmNWYWxpZGF0b3JGbiB7XHJcblx0cmV0dXJuIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBPYnNlcnZhYmxlPFZhbGlkYXRpb25FcnJvcnMgfCBudWxsPiA9PiB7XHJcblx0XHRyZXR1cm4gZXhpc3RzJChjb250cm9sLnZhbHVlLCBleGlzdHMpLnBpcGUoXHJcblx0XHRcdGRlYm91bmNlVGltZShERUJPVU5DRV9USU1FKSxcclxuXHRcdFx0Y2F0Y2hFcnJvcigoZXJyb3IpID0+IHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZygnZXhpc3RzVmFsaWRhdG9yLmNhdGNoRXJyb3InLCBlcnJvcik7XHJcblx0XHRcdFx0cmV0dXJuIG9mKG51bGwpO1xyXG5cdFx0XHR9KSxcclxuXHRcdFx0dGFrZSgxKSxcclxuXHRcdCk7XHJcblx0fTtcclxufVxyXG4iXX0=