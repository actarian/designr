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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsYXktcmVzcG9uc2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9kYXRhLyIsInNvdXJjZXMiOlsibGliL21lbW9yeS9kZWxheS1yZXNwb25zZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7Ozs7OztBQUVsQyxNQUFNLFVBQVUsYUFBYSxDQUFJLFNBQXdCLEVBQUUsRUFBVTtJQUNwRSxPQUFPLElBQUksVUFBVSxDQUFJLFFBQVEsQ0FBQyxFQUFFOztZQUMvQixRQUFRLEdBQUcsS0FBSzs7WUFDaEIsSUFBSSxHQUFHLEtBQUs7O2NBQ1YsWUFBWSxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQ3ZDLEtBQUssQ0FBQyxFQUFFO1lBQ1AsSUFBSSxHQUFHLElBQUksQ0FBQztZQUNaLFVBQVUsQ0FBQyxHQUFHLEVBQUU7Z0JBQ2YsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDckIsSUFBSSxRQUFRLEVBQUU7b0JBQ2IsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO2lCQUNwQjtZQUNGLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNSLENBQUMsRUFDRCxLQUFLLENBQUMsRUFBRTtZQUNQLFVBQVUsQ0FBQyxHQUFHLEVBQUU7Z0JBQ2YsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN2QixDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUE7UUFDUCxDQUFDLEVBQ0QsR0FBRyxFQUFFO1lBQ0osUUFBUSxHQUFHLElBQUksQ0FBQztZQUNoQixJQUFJLENBQUMsSUFBSSxFQUFFO2dCQUNWLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUNwQjtRQUNGLENBQUMsQ0FDRDtRQUNELE9BQU8sR0FBRyxFQUFFO1lBQ1gsT0FBTyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkMsQ0FBQyxDQUFDO0lBQ0gsQ0FBQyxDQUFDLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgZnVuY3Rpb24gZGVsYXlSZXNwb25zZTxUPihyZXNwb25zZSQ6IE9ic2VydmFibGU8VD4sIG1zOiBudW1iZXIpOiBPYnNlcnZhYmxlPFQ+IHtcblx0cmV0dXJuIG5ldyBPYnNlcnZhYmxlPFQ+KG9ic2VydmVyID0+IHtcblx0XHRsZXQgY29tcGxldGUgPSBmYWxzZTtcblx0XHRsZXQgbmV4dCA9IGZhbHNlO1xuXHRcdGNvbnN0IHN1YnNjcmlwdGlvbiA9IHJlc3BvbnNlJC5zdWJzY3JpYmUoXG5cdFx0XHR2YWx1ZSA9PiB7XG5cdFx0XHRcdG5leHQgPSB0cnVlO1xuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0XHRvYnNlcnZlci5uZXh0KHZhbHVlKTtcblx0XHRcdFx0XHRpZiAoY29tcGxldGUpIHtcblx0XHRcdFx0XHRcdG9ic2VydmVyLmNvbXBsZXRlKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LCBtcyk7XG5cdFx0XHR9LFxuXHRcdFx0ZXJyb3IgPT4ge1xuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0XHRvYnNlcnZlci5lcnJvcihlcnJvcik7XG5cdFx0XHRcdH0sIG1zKVxuXHRcdFx0fSxcblx0XHRcdCgpID0+IHtcblx0XHRcdFx0Y29tcGxldGUgPSB0cnVlO1xuXHRcdFx0XHRpZiAoIW5leHQpIHtcblx0XHRcdFx0XHRvYnNlcnZlci5jb21wbGV0ZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0KTtcblx0XHRyZXR1cm4gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuXHRcdH07XG5cdH0pO1xufVxuIl19