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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsYXktcmVzcG9uc2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9kYXRhLyIsInNvdXJjZXMiOlsibGliL21lbW9yeS9kZWxheS1yZXNwb25zZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7Ozs7OztBQUVsQyxNQUFNLFVBQVUsYUFBYSxDQUFJLFNBQXdCLEVBQUUsRUFBVTtJQUNwRSxPQUFPLElBQUksVUFBVTs7OztJQUFJLFVBQUEsUUFBUTs7WUFDNUIsUUFBUSxHQUFHLEtBQUs7O1lBQ2hCLElBQUksR0FBRyxLQUFLOztZQUNWLFlBQVksR0FBRyxTQUFTLENBQUMsU0FBUzs7OztRQUN2QyxVQUFBLEtBQUs7WUFDSixJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ1osVUFBVTs7O1lBQUM7Z0JBQ1YsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDckIsSUFBSSxRQUFRLEVBQUU7b0JBQ2IsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO2lCQUNwQjtZQUNGLENBQUMsR0FBRSxFQUFFLENBQUMsQ0FBQztRQUNSLENBQUM7Ozs7UUFDRCxVQUFBLEtBQUs7WUFDSixVQUFVOzs7WUFBQztnQkFDVixRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3ZCLENBQUMsR0FBRSxFQUFFLENBQUMsQ0FBQTtRQUNQLENBQUM7OztRQUNEO1lBQ0MsUUFBUSxHQUFHLElBQUksQ0FBQztZQUNoQixJQUFJLENBQUMsSUFBSSxFQUFFO2dCQUNWLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUNwQjtRQUNGLENBQUMsRUFDRDtRQUNEOzs7UUFBTztZQUNOLE9BQU8sWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25DLENBQUMsRUFBQztJQUNILENBQUMsRUFBQyxDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWxheVJlc3BvbnNlPFQ+KHJlc3BvbnNlJDogT2JzZXJ2YWJsZTxUPiwgbXM6IG51bWJlcik6IE9ic2VydmFibGU8VD4ge1xyXG5cdHJldHVybiBuZXcgT2JzZXJ2YWJsZTxUPihvYnNlcnZlciA9PiB7XHJcblx0XHRsZXQgY29tcGxldGUgPSBmYWxzZTtcclxuXHRcdGxldCBuZXh0ID0gZmFsc2U7XHJcblx0XHRjb25zdCBzdWJzY3JpcHRpb24gPSByZXNwb25zZSQuc3Vic2NyaWJlKFxyXG5cdFx0XHR2YWx1ZSA9PiB7XHJcblx0XHRcdFx0bmV4dCA9IHRydWU7XHJcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHRvYnNlcnZlci5uZXh0KHZhbHVlKTtcclxuXHRcdFx0XHRcdGlmIChjb21wbGV0ZSkge1xyXG5cdFx0XHRcdFx0XHRvYnNlcnZlci5jb21wbGV0ZSgpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0sIG1zKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0ZXJyb3IgPT4ge1xyXG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0b2JzZXJ2ZXIuZXJyb3IoZXJyb3IpO1xyXG5cdFx0XHRcdH0sIG1zKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQoKSA9PiB7XHJcblx0XHRcdFx0Y29tcGxldGUgPSB0cnVlO1xyXG5cdFx0XHRcdGlmICghbmV4dCkge1xyXG5cdFx0XHRcdFx0b2JzZXJ2ZXIuY29tcGxldGUoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdCk7XHJcblx0XHRyZXR1cm4gKCkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcblx0XHR9O1xyXG5cdH0pO1xyXG59XHJcbiJdfQ==