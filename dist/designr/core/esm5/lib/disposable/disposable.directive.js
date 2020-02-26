import { Directive } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
var DisposableDirective = /** @class */ (function () {
    function DisposableDirective() {
        this.unsubscribe = new Subject();
    }
    DisposableDirective.prototype.ngOnDestroy = function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
        // console.log('DisposableDirective.ngOnDestroy', this);
    };
    DisposableDirective.ɵfac = function DisposableDirective_Factory(t) { return new (t || DisposableDirective)(); };
    DisposableDirective.ɵdir = i0.ɵɵdefineDirective({ type: DisposableDirective, selectors: [["", "disposable-directive", ""]] });
    return DisposableDirective;
}());
export { DisposableDirective };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DisposableDirective, [{
        type: Directive,
        args: [{
                selector: '[disposable-directive]'
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzcG9zYWJsZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb3JlLyIsInNvdXJjZXMiOlsibGliL2Rpc3Bvc2FibGUvZGlzcG9zYWJsZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUNyRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDOztBQUUvQjtJQUFBO1FBS1csZ0JBQVcsR0FBUSxJQUFJLE9BQU8sRUFBRSxDQUFDO0tBUTNDO0lBTkEseUNBQVcsR0FBWDtRQUNDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM1Qix3REFBd0Q7SUFDekQsQ0FBQzswRkFSVyxtQkFBbUI7NERBQW5CLG1CQUFtQjs4QkFQaEM7Q0FpQkMsQUFiRCxJQWFDO1NBVlksbUJBQW1CO2tEQUFuQixtQkFBbUI7Y0FIL0IsU0FBUztlQUFDO2dCQUNWLFFBQVEsRUFBRSx3QkFBd0I7YUFDbEMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IERpcmVjdGl2ZSwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ1tkaXNwb3NhYmxlLWRpcmVjdGl2ZV0nXG59KVxuZXhwb3J0IGNsYXNzIERpc3Bvc2FibGVEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuXG5cdHByb3RlY3RlZCB1bnN1YnNjcmliZTogYW55ID0gbmV3IFN1YmplY3QoKTtcblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHR0aGlzLnVuc3Vic2NyaWJlLm5leHQoKTtcblx0XHR0aGlzLnVuc3Vic2NyaWJlLmNvbXBsZXRlKCk7XG5cdFx0Ly8gY29uc29sZS5sb2coJ0Rpc3Bvc2FibGVEaXJlY3RpdmUubmdPbkRlc3Ryb3knLCB0aGlzKTtcblx0fVxuXG59XG4iXX0=