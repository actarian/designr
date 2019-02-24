/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, ElementRef, Input } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { DisposableComponent } from '../disposable/disposable.component';
import { TranslateService } from './translate.service';
var TranslateDirective = /** @class */ (function (_super) {
    tslib_1.__extends(TranslateDirective, _super);
    function TranslateDirective(element, translateService) {
        var _this = _super.call(this) || this;
        _this.element = element;
        _this.translateService = translateService;
        return _this;
    }
    /**
     * @return {?}
     */
    TranslateDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // console.log('TranslateDirective.ngOnInit', this.element.nativeElement.innerHTML);
        this.translateService.getTranslate(this.translate, this.element.nativeElement.innerHTML, this.translateParams).pipe(takeUntil(this.unsubscribe)).subscribe(function (translate) {
            _this.element.nativeElement.innerHTML = translate;
            // console.log('TranslateDirective.ngOnInit', translate);
        });
        // console.log('TranslateDirective.ngOnInit', this.translate, this.translateParams, this.template, this.view);
    };
    TranslateDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[translate]'
                },] }
    ];
    /** @nocollapse */
    TranslateDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: TranslateService }
    ]; };
    TranslateDirective.propDecorators = {
        translate: [{ type: Input }],
        translateParams: [{ type: Input }]
    };
    return TranslateDirective;
}(DisposableComponent));
export { TranslateDirective };
if (false) {
    /** @type {?} */
    TranslateDirective.prototype.key;
    /** @type {?} */
    TranslateDirective.prototype.innerHTML;
    /** @type {?} */
    TranslateDirective.prototype.translate;
    /** @type {?} */
    TranslateDirective.prototype.translateParams;
    /**
     * @type {?}
     * @private
     */
    TranslateDirective.prototype.element;
    /**
     * @type {?}
     * @private
     */
    TranslateDirective.prototype.translateService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJsaWIvdHJhbnNsYXRlL3RyYW5zbGF0ZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDckUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBRXpFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXZEO0lBR3dDLDhDQUFtQjtJQWExRCw0QkFDUyxPQUFtQixFQUNuQixnQkFBNkM7UUFGdEQsWUFJQyxpQkFBTyxTQUNQO1FBSlEsYUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUNuQixzQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQTZCOztJQUd0RCxDQUFDOzs7O0lBRUQscUNBQVE7OztJQUFSO1FBQUEsaUJBU0M7UUFSQSxvRkFBb0Y7UUFDcEYsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsSUFBSSxDQUNsSCxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUMzQixDQUFDLFNBQVMsQ0FBQyxVQUFBLFNBQVM7WUFDcEIsS0FBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztZQUNqRCx5REFBeUQ7UUFDMUQsQ0FBQyxDQUFDLENBQUM7UUFDSCw4R0FBOEc7SUFDL0csQ0FBQzs7Z0JBaENELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsYUFBYTtpQkFDdkI7Ozs7Z0JBUm1CLFVBQVU7Z0JBSXJCLGdCQUFnQjs7OzRCQWV2QixLQUFLO2tDQUNMLEtBQUs7O0lBbUJQLHlCQUFDO0NBQUEsQUFqQ0QsQ0FHd0MsbUJBQW1CLEdBOEIxRDtTQTlCWSxrQkFBa0I7OztJQUU5QixpQ0FBWTs7SUFDWix1Q0FBa0I7O0lBT2xCLHVDQUEyQjs7SUFDM0IsNkNBQThCOzs7OztJQUc3QixxQ0FBMkI7Ozs7O0lBQzNCLDhDQUFxRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgRGlzcG9zYWJsZUNvbXBvbmVudCB9IGZyb20gJy4uL2Rpc3Bvc2FibGUvZGlzcG9zYWJsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVHJhbnNsYXRlIH0gZnJvbSAnLi90cmFuc2xhdGUnO1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJy4vdHJhbnNsYXRlLnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdbdHJhbnNsYXRlXSdcbn0pXG5leHBvcnQgY2xhc3MgVHJhbnNsYXRlRGlyZWN0aXZlIGV4dGVuZHMgRGlzcG9zYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0a2V5OiBzdHJpbmc7XG5cdGlubmVySFRNTDogc3RyaW5nO1xuXG5cdC8qXG5cdEBJbnB1dCgpIHNldCB0cmFuc2xhdGUoa2V5OiBzdHJpbmcpIHtcblx0XHQvLyBjb25zb2xlLmxvZygnVHJhbnNsYXRlRGlyZWN0aXZlLnRyYW5zbGF0ZScsIHRoaXMua2V5LCB0aGlzLnRyYW5zbGF0ZVBhcmFtcywgdGhpcy50ZW1wbGF0ZSwgdGhpcy52aWV3KTtcblx0fVxuXHQqL1xuXHRASW5wdXQoKSB0cmFuc2xhdGU6IHN0cmluZztcblx0QElucHV0KCkgdHJhbnNsYXRlUGFyYW1zOiBhbnk7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLFxuXHRcdHByaXZhdGUgdHJhbnNsYXRlU2VydmljZTogVHJhbnNsYXRlU2VydmljZTxUcmFuc2xhdGU+LFxuXHQpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0Ly8gY29uc29sZS5sb2coJ1RyYW5zbGF0ZURpcmVjdGl2ZS5uZ09uSW5pdCcsIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmlubmVySFRNTCk7XG5cdFx0dGhpcy50cmFuc2xhdGVTZXJ2aWNlLmdldFRyYW5zbGF0ZSh0aGlzLnRyYW5zbGF0ZSwgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MLCB0aGlzLnRyYW5zbGF0ZVBhcmFtcykucGlwZShcblx0XHRcdHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlKVxuXHRcdCkuc3Vic2NyaWJlKHRyYW5zbGF0ZSA9PiB7XG5cdFx0XHR0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5pbm5lckhUTUwgPSB0cmFuc2xhdGU7XG5cdFx0XHQvLyBjb25zb2xlLmxvZygnVHJhbnNsYXRlRGlyZWN0aXZlLm5nT25Jbml0JywgdHJhbnNsYXRlKTtcblx0XHR9KTtcblx0XHQvLyBjb25zb2xlLmxvZygnVHJhbnNsYXRlRGlyZWN0aXZlLm5nT25Jbml0JywgdGhpcy50cmFuc2xhdGUsIHRoaXMudHJhbnNsYXRlUGFyYW1zLCB0aGlzLnRlbXBsYXRlLCB0aGlzLnZpZXcpO1xuXHR9XG59XG4iXX0=