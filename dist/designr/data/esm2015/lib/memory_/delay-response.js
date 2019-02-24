/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Observable } from 'rxjs';
/**
 * @template T
 * @param {?} response$
 * @param {?} ms
 * @return {?}
 */
export function delayResponse(response$, ms) {
    return new Observable(observer => {
        /** @type {?} */
        let complete = false;
        /** @type {?} */
        let next = false;
        /** @type {?} */
        const subscription = response$.subscribe(value => {
            next = true;
            setTimeout(() => {
                observer.next(value);
                if (complete) {
                    observer.complete();
                }
            }, ms);
        }, error => {
            setTimeout(() => {
                observer.error(error);
            }, ms);
        }, () => {
            complete = true;
            if (!next) {
                observer.complete();
            }
        });
        return () => {
            return subscription.unsubscribe();
        };
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsYXktcmVzcG9uc2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9kYXRhLyIsInNvdXJjZXMiOlsibGliL21lbW9yeV8vZGVsYXktcmVzcG9uc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7Ozs7QUFFbEMsTUFBTSxVQUFVLGFBQWEsQ0FBSSxTQUF3QixFQUFFLEVBQVU7SUFDcEUsT0FBTyxJQUFJLFVBQVUsQ0FBSSxRQUFRLENBQUMsRUFBRTs7WUFDL0IsUUFBUSxHQUFHLEtBQUs7O1lBQ2hCLElBQUksR0FBRyxLQUFLOztjQUNWLFlBQVksR0FBRyxTQUFTLENBQUMsU0FBUyxDQUN2QyxLQUFLLENBQUMsRUFBRTtZQUNQLElBQUksR0FBRyxJQUFJLENBQUM7WUFDWixVQUFVLENBQUMsR0FBRyxFQUFFO2dCQUNmLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3JCLElBQUksUUFBUSxFQUFFO29CQUNiLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztpQkFDcEI7WUFDRixDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDUixDQUFDLEVBQ0QsS0FBSyxDQUFDLEVBQUU7WUFDUCxVQUFVLENBQUMsR0FBRyxFQUFFO2dCQUNmLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdkIsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFBO1FBQ1AsQ0FBQyxFQUNELEdBQUcsRUFBRTtZQUNKLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDaEIsSUFBSSxDQUFDLElBQUksRUFBRTtnQkFDVixRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDcEI7UUFDRixDQUFDLENBQ0Q7UUFDRCxPQUFPLEdBQUcsRUFBRTtZQUNYLE9BQU8sWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25DLENBQUMsQ0FBQztJQUNILENBQUMsQ0FBQyxDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGF5UmVzcG9uc2U8VD4ocmVzcG9uc2UkOiBPYnNlcnZhYmxlPFQ+LCBtczogbnVtYmVyKTogT2JzZXJ2YWJsZTxUPiB7XG5cdHJldHVybiBuZXcgT2JzZXJ2YWJsZTxUPihvYnNlcnZlciA9PiB7XG5cdFx0bGV0IGNvbXBsZXRlID0gZmFsc2U7XG5cdFx0bGV0IG5leHQgPSBmYWxzZTtcblx0XHRjb25zdCBzdWJzY3JpcHRpb24gPSByZXNwb25zZSQuc3Vic2NyaWJlKFxuXHRcdFx0dmFsdWUgPT4ge1xuXHRcdFx0XHRuZXh0ID0gdHJ1ZTtcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0b2JzZXJ2ZXIubmV4dCh2YWx1ZSk7XG5cdFx0XHRcdFx0aWYgKGNvbXBsZXRlKSB7XG5cdFx0XHRcdFx0XHRvYnNlcnZlci5jb21wbGV0ZSgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSwgbXMpO1xuXHRcdFx0fSxcblx0XHRcdGVycm9yID0+IHtcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0b2JzZXJ2ZXIuZXJyb3IoZXJyb3IpO1xuXHRcdFx0XHR9LCBtcylcblx0XHRcdH0sXG5cdFx0XHQoKSA9PiB7XG5cdFx0XHRcdGNvbXBsZXRlID0gdHJ1ZTtcblx0XHRcdFx0aWYgKCFuZXh0KSB7XG5cdFx0XHRcdFx0b2JzZXJ2ZXIuY29tcGxldGUoKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdCk7XG5cdFx0cmV0dXJuICgpID0+IHtcblx0XHRcdHJldHVybiBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcblx0XHR9O1xuXHR9KTtcbn1cbiJdfQ==