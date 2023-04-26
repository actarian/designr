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
    observer => {
        /** @type {?} */
        let complete = false;
        /** @type {?} */
        let next = false;
        /** @type {?} */
        const subscription = response$.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        value => {
            next = true;
            setTimeout((/**
             * @return {?}
             */
            () => {
                observer.next(value);
                if (complete) {
                    observer.complete();
                }
            }), ms);
        }), (/**
         * @param {?} error
         * @return {?}
         */
        error => {
            setTimeout((/**
             * @return {?}
             */
            () => {
                observer.error(error);
            }), ms);
        }), (/**
         * @return {?}
         */
        () => {
            complete = true;
            if (!next) {
                observer.complete();
            }
        }));
        return (/**
         * @return {?}
         */
        () => {
            return subscription.unsubscribe();
        });
    }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsYXktcmVzcG9uc2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9kYXRhLyIsInNvdXJjZXMiOlsibGliL21lbW9yeS9kZWxheS1yZXNwb25zZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7Ozs7OztBQUVsQyxNQUFNLFVBQVUsYUFBYSxDQUFJLFNBQXdCLEVBQUUsRUFBVTtJQUNwRSxPQUFPLElBQUksVUFBVTs7OztJQUFJLFFBQVEsQ0FBQyxFQUFFOztZQUMvQixRQUFRLEdBQUcsS0FBSzs7WUFDaEIsSUFBSSxHQUFHLEtBQUs7O2NBQ1YsWUFBWSxHQUFHLFNBQVMsQ0FBQyxTQUFTOzs7O1FBQ3ZDLEtBQUssQ0FBQyxFQUFFO1lBQ1AsSUFBSSxHQUFHLElBQUksQ0FBQztZQUNaLFVBQVU7OztZQUFDLEdBQUcsRUFBRTtnQkFDZixRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNyQixJQUFJLFFBQVEsRUFBRTtvQkFDYixRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7aUJBQ3BCO1lBQ0YsQ0FBQyxHQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ1IsQ0FBQzs7OztRQUNELEtBQUssQ0FBQyxFQUFFO1lBQ1AsVUFBVTs7O1lBQUMsR0FBRyxFQUFFO2dCQUNmLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdkIsQ0FBQyxHQUFFLEVBQUUsQ0FBQyxDQUFBO1FBQ1AsQ0FBQzs7O1FBQ0QsR0FBRyxFQUFFO1lBQ0osUUFBUSxHQUFHLElBQUksQ0FBQztZQUNoQixJQUFJLENBQUMsSUFBSSxFQUFFO2dCQUNWLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUNwQjtRQUNGLENBQUMsRUFDRDtRQUNEOzs7UUFBTyxHQUFHLEVBQUU7WUFDWCxPQUFPLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQyxDQUFDLEVBQUM7SUFDSCxDQUFDLEVBQUMsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGVsYXlSZXNwb25zZTxUPihyZXNwb25zZSQ6IE9ic2VydmFibGU8VD4sIG1zOiBudW1iZXIpOiBPYnNlcnZhYmxlPFQ+IHtcclxuXHRyZXR1cm4gbmV3IE9ic2VydmFibGU8VD4ob2JzZXJ2ZXIgPT4ge1xyXG5cdFx0bGV0IGNvbXBsZXRlID0gZmFsc2U7XHJcblx0XHRsZXQgbmV4dCA9IGZhbHNlO1xyXG5cdFx0Y29uc3Qgc3Vic2NyaXB0aW9uID0gcmVzcG9uc2UkLnN1YnNjcmliZShcclxuXHRcdFx0dmFsdWUgPT4ge1xyXG5cdFx0XHRcdG5leHQgPSB0cnVlO1xyXG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0b2JzZXJ2ZXIubmV4dCh2YWx1ZSk7XHJcblx0XHRcdFx0XHRpZiAoY29tcGxldGUpIHtcclxuXHRcdFx0XHRcdFx0b2JzZXJ2ZXIuY29tcGxldGUoKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9LCBtcyk7XHJcblx0XHRcdH0sXHJcblx0XHRcdGVycm9yID0+IHtcclxuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdG9ic2VydmVyLmVycm9yKGVycm9yKTtcclxuXHRcdFx0XHR9LCBtcylcclxuXHRcdFx0fSxcclxuXHRcdFx0KCkgPT4ge1xyXG5cdFx0XHRcdGNvbXBsZXRlID0gdHJ1ZTtcclxuXHRcdFx0XHRpZiAoIW5leHQpIHtcclxuXHRcdFx0XHRcdG9ic2VydmVyLmNvbXBsZXRlKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHQpO1xyXG5cdFx0cmV0dXJuICgpID0+IHtcclxuXHRcdFx0cmV0dXJuIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG5cdFx0fTtcclxuXHR9KTtcclxufVxyXG4iXX0=