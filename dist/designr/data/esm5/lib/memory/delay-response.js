/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Observable } from 'rxjs';
/**
 * @template T
 * @param {?} response$
 * @param {?} ms
 * @return {?}
 */
export function delayResponse(response$, ms) {
    return new Observable((/**
     * @param {?} observer
     * @return {?}
     */
    function (observer) {
        /** @type {?} */
        var complete = false;
        /** @type {?} */
        var next = false;
        /** @type {?} */
        var subscription = response$.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            next = true;
            setTimeout((/**
             * @return {?}
             */
            function () {
                observer.next(value);
                if (complete) {
                    observer.complete();
                }
            }), ms);
        }), (/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            setTimeout((/**
             * @return {?}
             */
            function () {
                observer.error(error);
            }), ms);
        }), (/**
         * @return {?}
         */
        function () {
            complete = true;
            if (!next) {
                observer.complete();
            }
        }));
        return (/**
         * @return {?}
         */
        function () {
            return subscription.unsubscribe();
        });
    }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsYXktcmVzcG9uc2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9kYXRhLyIsInNvdXJjZXMiOlsibGliL21lbW9yeS9kZWxheS1yZXNwb25zZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7Ozs7OztBQUVsQyxNQUFNLFVBQVUsYUFBYSxDQUFJLFNBQXdCLEVBQUUsRUFBVTtJQUNwRSxPQUFPLElBQUksVUFBVTs7OztJQUFJLFVBQUEsUUFBUTs7WUFDNUIsUUFBUSxHQUFHLEtBQUs7O1lBQ2hCLElBQUksR0FBRyxLQUFLOztZQUNWLFlBQVksR0FBRyxTQUFTLENBQUMsU0FBUzs7OztRQUN2QyxVQUFBLEtBQUs7WUFDSixJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ1osVUFBVTs7O1lBQUM7Z0JBQ1YsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDckIsSUFBSSxRQUFRLEVBQUU7b0JBQ2IsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO2lCQUNwQjtZQUNGLENBQUMsR0FBRSxFQUFFLENBQUMsQ0FBQztRQUNSLENBQUM7Ozs7UUFDRCxVQUFBLEtBQUs7WUFDSixVQUFVOzs7WUFBQztnQkFDVixRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3ZCLENBQUMsR0FBRSxFQUFFLENBQUMsQ0FBQTtRQUNQLENBQUM7OztRQUNEO1lBQ0MsUUFBUSxHQUFHLElBQUksQ0FBQztZQUNoQixJQUFJLENBQUMsSUFBSSxFQUFFO2dCQUNWLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUNwQjtRQUNGLENBQUMsRUFDRDtRQUNEOzs7UUFBTztZQUNOLE9BQU8sWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25DLENBQUMsRUFBQztJQUNILENBQUMsRUFBQyxDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGF5UmVzcG9uc2U8VD4ocmVzcG9uc2UkOiBPYnNlcnZhYmxlPFQ+LCBtczogbnVtYmVyKTogT2JzZXJ2YWJsZTxUPiB7XG5cdHJldHVybiBuZXcgT2JzZXJ2YWJsZTxUPihvYnNlcnZlciA9PiB7XG5cdFx0bGV0IGNvbXBsZXRlID0gZmFsc2U7XG5cdFx0bGV0IG5leHQgPSBmYWxzZTtcblx0XHRjb25zdCBzdWJzY3JpcHRpb24gPSByZXNwb25zZSQuc3Vic2NyaWJlKFxuXHRcdFx0dmFsdWUgPT4ge1xuXHRcdFx0XHRuZXh0ID0gdHJ1ZTtcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0b2JzZXJ2ZXIubmV4dCh2YWx1ZSk7XG5cdFx0XHRcdFx0aWYgKGNvbXBsZXRlKSB7XG5cdFx0XHRcdFx0XHRvYnNlcnZlci5jb21wbGV0ZSgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSwgbXMpO1xuXHRcdFx0fSxcblx0XHRcdGVycm9yID0+IHtcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0b2JzZXJ2ZXIuZXJyb3IoZXJyb3IpO1xuXHRcdFx0XHR9LCBtcylcblx0XHRcdH0sXG5cdFx0XHQoKSA9PiB7XG5cdFx0XHRcdGNvbXBsZXRlID0gdHJ1ZTtcblx0XHRcdFx0aWYgKCFuZXh0KSB7XG5cdFx0XHRcdFx0b2JzZXJ2ZXIuY29tcGxldGUoKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdCk7XG5cdFx0cmV0dXJuICgpID0+IHtcblx0XHRcdHJldHVybiBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcblx0XHR9O1xuXHR9KTtcbn1cbiJdfQ==