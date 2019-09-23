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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhpc3RzLnZhbGlkYXRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvbnRyb2wvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9leGlzdHMudmFsaWRhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsWUFBWSxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNwRCxPQUFPLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0lBRS9ELGFBQWEsR0FBVyxHQUFHOzs7Ozs7QUFFakMsU0FBUyxPQUFPLENBQUMsS0FBVSxFQUFFLE1BQWlCO0lBQzdDLElBQUksT0FBTyxNQUFNLEtBQUssVUFBVSxFQUFFOztZQUMzQixnQkFBZ0IsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ3RDLElBQUksWUFBWSxDQUFDLGdCQUFnQixDQUFDLEVBQUU7WUFDbkMsT0FBTyxnQkFBZ0IsQ0FBQyxJQUFJLENBQzNCLEdBQUc7Ozs7WUFBQyxVQUFBLE1BQU07Z0JBQ1QsT0FBTyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDekMsQ0FBQyxFQUFDLENBQ0YsQ0FBQztTQUNGO2FBQU07WUFDTixPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3REO0tBQ0Q7U0FBTTtRQUNOLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2hCO0FBQ0YsQ0FBQzs7Ozs7QUFFRCxNQUFNLFVBQVUsZUFBZSxDQUFDLE1BQWlCO0lBQ2hEOzs7O0lBQU8sVUFBQyxPQUF3QjtRQUMvQixPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FDekMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxFQUMzQixVQUFVOzs7O1FBQUMsVUFBQyxLQUFLO1lBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsNEJBQTRCLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDakQsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakIsQ0FBQyxFQUFDLEVBQ0YsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUNQLENBQUM7SUFDSCxDQUFDLEVBQUM7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sLCBBc3luY1ZhbGlkYXRvckZuLCBWYWxpZGF0aW9uRXJyb3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgaXNPYnNlcnZhYmxlLCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgZGVib3VuY2VUaW1lLCBtYXAsIHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmNvbnN0IERFQk9VTkNFX1RJTUU6IG51bWJlciA9IDI1MDtcblxuZnVuY3Rpb24gZXhpc3RzJCh2YWx1ZTogYW55LCBleGlzdHM/OiBGdW5jdGlvbik6IE9ic2VydmFibGU8VmFsaWRhdGlvbkVycm9ycyB8IG51bGw+IHtcblx0aWYgKHR5cGVvZiBleGlzdHMgPT09ICdmdW5jdGlvbicpIHtcblx0XHRjb25zdCBvc2VydmFibGVPclZhbHVlID0gZXhpc3RzKHZhbHVlKTtcblx0XHRpZiAoaXNPYnNlcnZhYmxlKG9zZXJ2YWJsZU9yVmFsdWUpKSB7XG5cdFx0XHRyZXR1cm4gb3NlcnZhYmxlT3JWYWx1ZS5waXBlKFxuXHRcdFx0XHRtYXAoZXhpc3RzID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gZXhpc3RzID8geyBleGlzdHM6IHRydWUgfSA6IG51bGw7XG5cdFx0XHRcdH0pXG5cdFx0XHQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gb2Yob3NlcnZhYmxlT3JWYWx1ZSA/IHsgZXhpc3RzOiB0cnVlIH0gOiBudWxsKTtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIG9mKG51bGwpO1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleGlzdHNWYWxpZGF0b3IoZXhpc3RzPzogRnVuY3Rpb24pOiBBc3luY1ZhbGlkYXRvckZuIHtcblx0cmV0dXJuIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBPYnNlcnZhYmxlPFZhbGlkYXRpb25FcnJvcnMgfCBudWxsPiA9PiB7XG5cdFx0cmV0dXJuIGV4aXN0cyQoY29udHJvbC52YWx1ZSwgZXhpc3RzKS5waXBlKFxuXHRcdFx0ZGVib3VuY2VUaW1lKERFQk9VTkNFX1RJTUUpLFxuXHRcdFx0Y2F0Y2hFcnJvcigoZXJyb3IpID0+IHtcblx0XHRcdFx0Y29uc29sZS5sb2coJ2V4aXN0c1ZhbGlkYXRvci5jYXRjaEVycm9yJywgZXJyb3IpO1xuXHRcdFx0XHRyZXR1cm4gb2YobnVsbCk7XG5cdFx0XHR9KSxcblx0XHRcdHRha2UoMSksXG5cdFx0KTtcblx0fTtcbn1cbiJdfQ==