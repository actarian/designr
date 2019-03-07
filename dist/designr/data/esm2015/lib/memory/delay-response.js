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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsYXktcmVzcG9uc2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9kYXRhLyIsInNvdXJjZXMiOlsibGliL21lbW9yeS9kZWxheS1yZXNwb25zZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7Ozs7OztBQUVsQyxNQUFNLFVBQVUsYUFBYSxDQUFJLFNBQXdCLEVBQUUsRUFBVTtJQUNwRSxPQUFPLElBQUksVUFBVTs7OztJQUFJLFFBQVEsQ0FBQyxFQUFFOztZQUMvQixRQUFRLEdBQUcsS0FBSzs7WUFDaEIsSUFBSSxHQUFHLEtBQUs7O2NBQ1YsWUFBWSxHQUFHLFNBQVMsQ0FBQyxTQUFTOzs7O1FBQ3ZDLEtBQUssQ0FBQyxFQUFFO1lBQ1AsSUFBSSxHQUFHLElBQUksQ0FBQztZQUNaLFVBQVU7OztZQUFDLEdBQUcsRUFBRTtnQkFDZixRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNyQixJQUFJLFFBQVEsRUFBRTtvQkFDYixRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7aUJBQ3BCO1lBQ0YsQ0FBQyxHQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ1IsQ0FBQzs7OztRQUNELEtBQUssQ0FBQyxFQUFFO1lBQ1AsVUFBVTs7O1lBQUMsR0FBRyxFQUFFO2dCQUNmLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdkIsQ0FBQyxHQUFFLEVBQUUsQ0FBQyxDQUFBO1FBQ1AsQ0FBQzs7O1FBQ0QsR0FBRyxFQUFFO1lBQ0osUUFBUSxHQUFHLElBQUksQ0FBQztZQUNoQixJQUFJLENBQUMsSUFBSSxFQUFFO2dCQUNWLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUNwQjtRQUNGLENBQUMsRUFDRDtRQUNEOzs7UUFBTyxHQUFHLEVBQUU7WUFDWCxPQUFPLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQyxDQUFDLEVBQUM7SUFDSCxDQUFDLEVBQUMsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxheVJlc3BvbnNlPFQ+KHJlc3BvbnNlJDogT2JzZXJ2YWJsZTxUPiwgbXM6IG51bWJlcik6IE9ic2VydmFibGU8VD4ge1xuXHRyZXR1cm4gbmV3IE9ic2VydmFibGU8VD4ob2JzZXJ2ZXIgPT4ge1xuXHRcdGxldCBjb21wbGV0ZSA9IGZhbHNlO1xuXHRcdGxldCBuZXh0ID0gZmFsc2U7XG5cdFx0Y29uc3Qgc3Vic2NyaXB0aW9uID0gcmVzcG9uc2UkLnN1YnNjcmliZShcblx0XHRcdHZhbHVlID0+IHtcblx0XHRcdFx0bmV4dCA9IHRydWU7XG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdG9ic2VydmVyLm5leHQodmFsdWUpO1xuXHRcdFx0XHRcdGlmIChjb21wbGV0ZSkge1xuXHRcdFx0XHRcdFx0b2JzZXJ2ZXIuY29tcGxldGUoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sIG1zKTtcblx0XHRcdH0sXG5cdFx0XHRlcnJvciA9PiB7XG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdG9ic2VydmVyLmVycm9yKGVycm9yKTtcblx0XHRcdFx0fSwgbXMpXG5cdFx0XHR9LFxuXHRcdFx0KCkgPT4ge1xuXHRcdFx0XHRjb21wbGV0ZSA9IHRydWU7XG5cdFx0XHRcdGlmICghbmV4dCkge1xuXHRcdFx0XHRcdG9ic2VydmVyLmNvbXBsZXRlKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHQpO1xuXHRcdHJldHVybiAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG5cdFx0fTtcblx0fSk7XG59XG4iXX0=