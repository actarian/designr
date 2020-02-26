import { __extends } from "tslib";
import { Directive, ElementRef, Input } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { DisposableDirective } from '../disposable/disposable.directive';
import { LabelService } from './label.service';
import * as i0 from "@angular/core";
import * as i1 from "./label.service";
var LabelDirective = /** @class */ (function (_super) {
    __extends(LabelDirective, _super);
    function LabelDirective(element, labelService) {
        var _this = _super.call(this) || this;
        _this.element = element;
        _this.labelService = labelService;
        return _this;
    }
    LabelDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.labelService.transform$(this.label, this.element.nativeElement.innerHTML, this.labelParams).pipe(takeUntil(this.unsubscribe)).subscribe(function (label) {
            _this.element.nativeElement.innerHTML = label;
        });
    };
    LabelDirective.ɵfac = function LabelDirective_Factory(t) { return new (t || LabelDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.LabelService)); };
    LabelDirective.ɵdir = i0.ɵɵdefineDirective({ type: LabelDirective, selectors: [["", "label", ""]], inputs: { label: "label", labelParams: "labelParams" }, features: [i0.ɵɵInheritDefinitionFeature] });
    return LabelDirective;
}(DisposableDirective));
export { LabelDirective };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(LabelDirective, [{
        type: Directive,
        args: [{
                selector: '[label]'
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.LabelService }]; }, { label: [{
            type: Input
        }], labelParams: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFiZWwuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9sYWJlbC9sYWJlbC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNyRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFFekUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7QUFFL0M7SUFHb0Msa0NBQW1CO0lBT3RELHdCQUNTLE9BQW1CLEVBQ25CLFlBQWlDO1FBRjFDLFlBSUMsaUJBQU8sU0FDUDtRQUpRLGFBQU8sR0FBUCxPQUFPLENBQVk7UUFDbkIsa0JBQVksR0FBWixZQUFZLENBQXFCOztJQUcxQyxDQUFDO0lBRUQsaUNBQVEsR0FBUjtRQUFBLGlCQU1DO1FBTEEsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FDcEcsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FDM0IsQ0FBQyxTQUFTLENBQUMsVUFBQSxLQUFLO1lBQ2hCLEtBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDOUMsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO2dGQXBCVyxjQUFjO3VEQUFkLGNBQWM7eUJBVDNCO0NBK0JDLEFBekJELENBR29DLG1CQUFtQixHQXNCdEQ7U0F0QlksY0FBYztrREFBZCxjQUFjO2NBSDFCLFNBQVM7ZUFBQztnQkFDVixRQUFRLEVBQUUsU0FBUzthQUNuQjs7a0JBS0MsS0FBSzs7a0JBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgRGlzcG9zYWJsZURpcmVjdGl2ZSB9IGZyb20gJy4uL2Rpc3Bvc2FibGUvZGlzcG9zYWJsZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTGFiZWwgfSBmcm9tICcuL2xhYmVsJztcbmltcG9ydCB7IExhYmVsU2VydmljZSB9IGZyb20gJy4vbGFiZWwuc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ1tsYWJlbF0nXG59KVxuZXhwb3J0IGNsYXNzIExhYmVsRGlyZWN0aXZlIGV4dGVuZHMgRGlzcG9zYWJsZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0Ly8ga2V5OiBzdHJpbmc7XG5cdC8vIGlubmVySFRNTDogc3RyaW5nO1xuXHRASW5wdXQoKSBsYWJlbDogc3RyaW5nO1xuXHRASW5wdXQoKSBsYWJlbFBhcmFtczogYW55O1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZixcblx0XHRwcml2YXRlIGxhYmVsU2VydmljZTogTGFiZWxTZXJ2aWNlPExhYmVsPixcblx0KSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMubGFiZWxTZXJ2aWNlLnRyYW5zZm9ybSQodGhpcy5sYWJlbCwgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MLCB0aGlzLmxhYmVsUGFyYW1zKS5waXBlKFxuXHRcdFx0dGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUpXG5cdFx0KS5zdWJzY3JpYmUobGFiZWwgPT4ge1xuXHRcdFx0dGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MID0gbGFiZWw7XG5cdFx0fSk7XG5cdH1cblxufVxuIl19