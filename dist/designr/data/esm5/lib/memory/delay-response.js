import { Observable } from 'rxjs';
export function delayResponse(response$, ms) {
    return new Observable(function (observer) {
        var complete = false;
        var next = false;
        var subscription = response$.subscribe(function (value) {
            next = true;
            setTimeout(function () {
                observer.next(value);
                if (complete) {
                    observer.complete();
                }
            }, ms);
        }, function (error) {
            setTimeout(function () {
                observer.error(error);
            }, ms);
        }, function () {
            complete = true;
            if (!next) {
                observer.complete();
            }
        });
        return function () {
            return subscription.unsubscribe();
        };
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsYXktcmVzcG9uc2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9kYXRhLyIsInNvdXJjZXMiOlsibGliL21lbW9yeS9kZWxheS1yZXNwb25zZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRWxDLE1BQU0sVUFBVSxhQUFhLENBQUksU0FBd0IsRUFBRSxFQUFVO0lBQ3BFLE9BQU8sSUFBSSxVQUFVLENBQUksVUFBQSxRQUFRO1FBQ2hDLElBQUksUUFBUSxHQUFHLEtBQUssQ0FBQztRQUNyQixJQUFJLElBQUksR0FBRyxLQUFLLENBQUM7UUFDakIsSUFBTSxZQUFZLEdBQUcsU0FBUyxDQUFDLFNBQVMsQ0FDdkMsVUFBQSxLQUFLO1lBQ0osSUFBSSxHQUFHLElBQUksQ0FBQztZQUNaLFVBQVUsQ0FBQztnQkFDVixRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNyQixJQUFJLFFBQVEsRUFBRTtvQkFDYixRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7aUJBQ3BCO1lBQ0YsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ1IsQ0FBQyxFQUNELFVBQUEsS0FBSztZQUNKLFVBQVUsQ0FBQztnQkFDVixRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3ZCLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQTtRQUNQLENBQUMsRUFDRDtZQUNDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDaEIsSUFBSSxDQUFDLElBQUksRUFBRTtnQkFDVixRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDcEI7UUFDRixDQUFDLENBQ0QsQ0FBQztRQUNGLE9BQU87WUFDTixPQUFPLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQyxDQUFDLENBQUM7SUFDSCxDQUFDLENBQUMsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxheVJlc3BvbnNlPFQ+KHJlc3BvbnNlJDogT2JzZXJ2YWJsZTxUPiwgbXM6IG51bWJlcik6IE9ic2VydmFibGU8VD4ge1xuXHRyZXR1cm4gbmV3IE9ic2VydmFibGU8VD4ob2JzZXJ2ZXIgPT4ge1xuXHRcdGxldCBjb21wbGV0ZSA9IGZhbHNlO1xuXHRcdGxldCBuZXh0ID0gZmFsc2U7XG5cdFx0Y29uc3Qgc3Vic2NyaXB0aW9uID0gcmVzcG9uc2UkLnN1YnNjcmliZShcblx0XHRcdHZhbHVlID0+IHtcblx0XHRcdFx0bmV4dCA9IHRydWU7XG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdG9ic2VydmVyLm5leHQodmFsdWUpO1xuXHRcdFx0XHRcdGlmIChjb21wbGV0ZSkge1xuXHRcdFx0XHRcdFx0b2JzZXJ2ZXIuY29tcGxldGUoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sIG1zKTtcblx0XHRcdH0sXG5cdFx0XHRlcnJvciA9PiB7XG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdG9ic2VydmVyLmVycm9yKGVycm9yKTtcblx0XHRcdFx0fSwgbXMpXG5cdFx0XHR9LFxuXHRcdFx0KCkgPT4ge1xuXHRcdFx0XHRjb21wbGV0ZSA9IHRydWU7XG5cdFx0XHRcdGlmICghbmV4dCkge1xuXHRcdFx0XHRcdG9ic2VydmVyLmNvbXBsZXRlKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHQpO1xuXHRcdHJldHVybiAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG5cdFx0fTtcblx0fSk7XG59XG4iXX0=