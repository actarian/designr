import { ChangeDetectorRef, Injectable, Pipe } from '@angular/core';
import { TranslateService } from './translate.service';
import * as i0 from "@angular/core";
import * as i1 from "./translate.service";
var TranslatePipe = /** @class */ (function () {
    function TranslatePipe(ref, translateService) {
        var _this = this;
        this.ref = ref;
        this.translateService = translateService;
        this.translateService.events.subscribe(function (x) { return _this.ref.markForCheck(); });
    }
    TranslatePipe.prototype.transform = function (key, text, params) {
        // console.log(key, params);
        var label = this.translateService.getTranslate(key, text, params);
        // console.log('label', label, this.translateService.cache);
        return label;
    };
    TranslatePipe.ɵfac = function TranslatePipe_Factory(t) { return new (t || TranslatePipe)(i0.ɵɵinjectPipeChangeDetectorRef(), i0.ɵɵdirectiveInject(i1.TranslateService)); };
    TranslatePipe.ɵpipe = i0.ɵɵdefinePipe({ name: "translate", type: TranslatePipe, pure: false });
    TranslatePipe.ɵprov = i0.ɵɵdefineInjectable({ token: TranslatePipe, factory: TranslatePipe.ɵfac, providedIn: 'root' });
    return TranslatePipe;
}());
export { TranslatePipe };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TranslatePipe, [{
        type: Pipe,
        args: [{
                name: 'translate',
                pure: false,
            }]
    }, {
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.TranslateService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb3JlLyIsInNvdXJjZXMiOlsibGliL3RyYW5zbGF0ZS90cmFuc2xhdGUucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFFbkYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7OztBQUV2RDtJQVVDLHVCQUNTLEdBQXNCLEVBQ3BCLGdCQUE2QztRQUZ4RCxpQkFPQztRQU5RLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQ3BCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBNkI7UUFFdkQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQ3JDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsRUFBdkIsQ0FBdUIsQ0FDNUIsQ0FBQztJQUNILENBQUM7SUFFTSxpQ0FBUyxHQUFoQixVQUFpQixHQUFXLEVBQUUsSUFBYSxFQUFFLE1BQVk7UUFDeEQsNEJBQTRCO1FBQzVCLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNwRSw0REFBNEQ7UUFDNUQsT0FBTyxLQUFLLENBQUM7SUFDZCxDQUFDOzhFQWhCVyxhQUFhO3FFQUFiLGFBQWE7eURBQWIsYUFBYSxXQUFiLGFBQWEsbUJBRmIsTUFBTTt3QkFWbkI7Q0E4QkMsQUExQkQsSUEwQkM7U0FsQlksYUFBYTtrREFBYixhQUFhO2NBUnpCLElBQUk7ZUFBQztnQkFDTCxJQUFJLEVBQUUsV0FBVztnQkFDakIsSUFBSSxFQUFFLEtBQUs7YUFDWDs7Y0FFQSxVQUFVO2VBQUM7Z0JBQ1gsVUFBVSxFQUFFLE1BQU07YUFDbEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgSW5qZWN0YWJsZSwgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVHJhbnNsYXRlIH0gZnJvbSAnLi90cmFuc2xhdGUnO1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJy4vdHJhbnNsYXRlLnNlcnZpY2UnO1xuXG5AUGlwZSh7XG5cdG5hbWU6ICd0cmFuc2xhdGUnLFxuXHRwdXJlOiBmYWxzZSxcbn0pXG5cbkBJbmplY3RhYmxlKHtcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFRyYW5zbGF0ZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIHJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0cHJvdGVjdGVkIHRyYW5zbGF0ZVNlcnZpY2U6IFRyYW5zbGF0ZVNlcnZpY2U8VHJhbnNsYXRlPlxuXHQpIHtcblx0XHR0aGlzLnRyYW5zbGF0ZVNlcnZpY2UuZXZlbnRzLnN1YnNjcmliZShcblx0XHRcdHggPT4gdGhpcy5yZWYubWFya0ZvckNoZWNrKClcblx0XHQpO1xuXHR9XG5cblx0cHVibGljIHRyYW5zZm9ybShrZXk6IHN0cmluZywgdGV4dD86IHN0cmluZywgcGFyYW1zPzogYW55KTogc3RyaW5nIHtcblx0XHQvLyBjb25zb2xlLmxvZyhrZXksIHBhcmFtcyk7XG5cdFx0Y29uc3QgbGFiZWwgPSB0aGlzLnRyYW5zbGF0ZVNlcnZpY2UuZ2V0VHJhbnNsYXRlKGtleSwgdGV4dCwgcGFyYW1zKTtcblx0XHQvLyBjb25zb2xlLmxvZygnbGFiZWwnLCBsYWJlbCwgdGhpcy50cmFuc2xhdGVTZXJ2aWNlLmNhY2hlKTtcblx0XHRyZXR1cm4gbGFiZWw7XG5cdH1cblxufVxuIl19