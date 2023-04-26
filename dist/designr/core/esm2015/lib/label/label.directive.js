/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Input } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { DisposableComponent } from '../disposable/disposable.component';
import { LabelService } from './label.service';
export class LabelDirective extends DisposableComponent {
    /**
     * @param {?} element
     * @param {?} labelService
     */
    constructor(element, labelService) {
        super();
        this.element = element;
        this.labelService = labelService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.labelService.transform$(this.label, this.element.nativeElement.innerHTML, this.labelParams).pipe(takeUntil(this.unsubscribe)).subscribe((/**
         * @param {?} label
         * @return {?}
         */
        label => {
            this.element.nativeElement.innerHTML = label;
        }));
    }
}
LabelDirective.decorators = [
    { type: Directive, args: [{
                selector: '[label]'
            },] }
];
/** @nocollapse */
LabelDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: LabelService }
];
LabelDirective.propDecorators = {
    label: [{ type: Input }],
    labelParams: [{ type: Input }]
};
if (false) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFiZWwuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9sYWJlbC9sYWJlbC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNyRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFFekUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBSy9DLE1BQU0sT0FBTyxjQUFlLFNBQVEsbUJBQW1COzs7OztJQU90RCxZQUNTLE9BQW1CLEVBQ25CLFlBQWlDO1FBRXpDLEtBQUssRUFBRSxDQUFDO1FBSEEsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUNuQixpQkFBWSxHQUFaLFlBQVksQ0FBcUI7SUFHMUMsQ0FBQzs7OztJQUVELFFBQVE7UUFDUCxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUNwRyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUMzQixDQUFDLFNBQVM7Ozs7UUFBQyxLQUFLLENBQUMsRUFBRTtZQUNuQixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQzlDLENBQUMsRUFBQyxDQUFDO0lBQ0osQ0FBQzs7O1lBdkJELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsU0FBUzthQUNuQjs7OztZQVJtQixVQUFVO1lBSXJCLFlBQVk7OztvQkFTbkIsS0FBSzswQkFDTCxLQUFLOzs7O0lBRE4sK0JBQXVCOztJQUN2QixxQ0FBMEI7Ozs7O0lBR3pCLGlDQUEyQjs7Ozs7SUFDM0Isc0NBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgRGlzcG9zYWJsZUNvbXBvbmVudCB9IGZyb20gJy4uL2Rpc3Bvc2FibGUvZGlzcG9zYWJsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMYWJlbCB9IGZyb20gJy4vbGFiZWwnO1xyXG5pbXBvcnQgeyBMYWJlbFNlcnZpY2UgfSBmcm9tICcuL2xhYmVsLnNlcnZpY2UnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcblx0c2VsZWN0b3I6ICdbbGFiZWxdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTGFiZWxEaXJlY3RpdmUgZXh0ZW5kcyBEaXNwb3NhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcblx0Ly8ga2V5OiBzdHJpbmc7XHJcblx0Ly8gaW5uZXJIVE1MOiBzdHJpbmc7XHJcblx0QElucHV0KCkgbGFiZWw6IHN0cmluZztcclxuXHRASW5wdXQoKSBsYWJlbFBhcmFtczogYW55O1xyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZixcclxuXHRcdHByaXZhdGUgbGFiZWxTZXJ2aWNlOiBMYWJlbFNlcnZpY2U8TGFiZWw+LFxyXG5cdCkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHR9XHJcblxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0dGhpcy5sYWJlbFNlcnZpY2UudHJhbnNmb3JtJCh0aGlzLmxhYmVsLCB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5pbm5lckhUTUwsIHRoaXMubGFiZWxQYXJhbXMpLnBpcGUoXHJcblx0XHRcdHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlKVxyXG5cdFx0KS5zdWJzY3JpYmUobGFiZWwgPT4ge1xyXG5cdFx0XHR0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5pbm5lckhUTUwgPSBsYWJlbDtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcbn1cclxuIl19