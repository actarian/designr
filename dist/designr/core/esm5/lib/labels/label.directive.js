/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, ElementRef, Input } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { DisposableComponent } from '../disposable/disposable.component';
import { LabelService } from './label.service';
var LabelDirective = /** @class */ (function (_super) {
    tslib_1.__extends(LabelDirective, _super);
    function LabelDirective(element, labelService) {
        var _this = _super.call(this) || this;
        _this.element = element;
        _this.labelService = labelService;
        return _this;
    }
    /**
     * @return {?}
     */
    LabelDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // console.log('LabelDirective.ngOnInit', this.element.nativeElement.innerHTML);
        this.labelService.getKey(this.label, this.element.nativeElement.innerHTML, this.labelParams).pipe(takeUntil(this.unsubscribe)).subscribe(function (label) {
            _this.element.nativeElement.innerHTML = label;
            // console.log('LabelDirective.ngOnInit', label);
        });
        // console.log('LabelDirective.ngOnInit', this.label, this.labelParams, this.template, this.view);
    };
    LabelDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[label]'
                },] }
    ];
    /** @nocollapse */
    LabelDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: LabelService }
    ]; };
    LabelDirective.propDecorators = {
        label: [{ type: Input }],
        labelParams: [{ type: Input }]
    };
    return LabelDirective;
}(DisposableComponent));
export { LabelDirective };
if (false) {
    /** @type {?} */
    LabelDirective.prototype.key;
    /** @type {?} */
    LabelDirective.prototype.innerHTML;
    /** @type {?} */
    LabelDirective.prototype.label;
    /** @type {?} */
    LabelDirective.prototype.labelParams;
    /**
     * @type {?}
     * @private
     */
    LabelDirective.prototype.element;
    /**
     * @type {?}
     * @private
     */
    LabelDirective.prototype.labelService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFiZWwuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9sYWJlbHMvbGFiZWwuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUV6RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0M7SUFHb0MsMENBQW1CO0lBYXRELHdCQUNTLE9BQW1CLEVBQ25CLFlBQWlDO1FBRjFDLFlBSUMsaUJBQU8sU0FDUDtRQUpRLGFBQU8sR0FBUCxPQUFPLENBQVk7UUFDbkIsa0JBQVksR0FBWixZQUFZLENBQXFCOztJQUcxQyxDQUFDOzs7O0lBRUQsaUNBQVE7OztJQUFSO1FBQUEsaUJBU0M7UUFSQSxnRkFBZ0Y7UUFDaEYsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FDaEcsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FDM0IsQ0FBQyxTQUFTLENBQUMsVUFBQSxLQUFLO1lBQ2hCLEtBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDN0MsaURBQWlEO1FBQ2xELENBQUMsQ0FBQyxDQUFDO1FBQ0gsa0dBQWtHO0lBQ25HLENBQUM7O2dCQWhDRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLFNBQVM7aUJBQ25COzs7O2dCQVJtQixVQUFVO2dCQUlyQixZQUFZOzs7d0JBZW5CLEtBQUs7OEJBQ0wsS0FBSzs7SUFtQlAscUJBQUM7Q0FBQSxBQWpDRCxDQUdvQyxtQkFBbUIsR0E4QnREO1NBOUJZLGNBQWM7OztJQUUxQiw2QkFBWTs7SUFDWixtQ0FBa0I7O0lBT2xCLCtCQUF1Qjs7SUFDdkIscUNBQTBCOzs7OztJQUd6QixpQ0FBMkI7Ozs7O0lBQzNCLHNDQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgRGlzcG9zYWJsZUNvbXBvbmVudCB9IGZyb20gJy4uL2Rpc3Bvc2FibGUvZGlzcG9zYWJsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGFiZWwgfSBmcm9tICcuL2xhYmVsJztcbmltcG9ydCB7IExhYmVsU2VydmljZSB9IGZyb20gJy4vbGFiZWwuc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ1tsYWJlbF0nXG59KVxuZXhwb3J0IGNsYXNzIExhYmVsRGlyZWN0aXZlIGV4dGVuZHMgRGlzcG9zYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0a2V5OiBzdHJpbmc7XG5cdGlubmVySFRNTDogc3RyaW5nO1xuXG5cdC8qXG5cdEBJbnB1dCgpIHNldCBsYWJlbChrZXk6IHN0cmluZykge1xuXHRcdC8vIGNvbnNvbGUubG9nKCdMYWJlbERpcmVjdGl2ZS5sYWJlbCcsIHRoaXMua2V5LCB0aGlzLmxhYmVsUGFyYW1zLCB0aGlzLnRlbXBsYXRlLCB0aGlzLnZpZXcpO1xuXHR9XG5cdCovXG5cdEBJbnB1dCgpIGxhYmVsOiBzdHJpbmc7XG5cdEBJbnB1dCgpIGxhYmVsUGFyYW1zOiBhbnk7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLFxuXHRcdHByaXZhdGUgbGFiZWxTZXJ2aWNlOiBMYWJlbFNlcnZpY2U8TGFiZWw+LFxuXHQpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0Ly8gY29uc29sZS5sb2coJ0xhYmVsRGlyZWN0aXZlLm5nT25Jbml0JywgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MKTtcblx0XHR0aGlzLmxhYmVsU2VydmljZS5nZXRLZXkodGhpcy5sYWJlbCwgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MLCB0aGlzLmxhYmVsUGFyYW1zKS5waXBlKFxuXHRcdFx0dGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUpXG5cdFx0KS5zdWJzY3JpYmUobGFiZWwgPT4ge1xuXHRcdFx0dGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MID0gbGFiZWw7XG5cdFx0XHQvLyBjb25zb2xlLmxvZygnTGFiZWxEaXJlY3RpdmUubmdPbkluaXQnLCBsYWJlbCk7XG5cdFx0fSk7XG5cdFx0Ly8gY29uc29sZS5sb2coJ0xhYmVsRGlyZWN0aXZlLm5nT25Jbml0JywgdGhpcy5sYWJlbCwgdGhpcy5sYWJlbFBhcmFtcywgdGhpcy50ZW1wbGF0ZSwgdGhpcy52aWV3KTtcblx0fVxufVxuIl19