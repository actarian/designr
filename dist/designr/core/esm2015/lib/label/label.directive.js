/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        // console.log('LabelDirective.ngOnInit', this.element.nativeElement.innerHTML);
        this.labelService.getKey(this.label, this.element.nativeElement.innerHTML, this.labelParams).pipe(takeUntil(this.unsubscribe)).subscribe(label => {
            this.element.nativeElement.innerHTML = label;
            // console.log('LabelDirective.ngOnInit', label);
        });
        // console.log('LabelDirective.ngOnInit', this.label, this.labelParams, this.template, this.view);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFiZWwuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9sYWJlbC9sYWJlbC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNyRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFFekUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBSy9DLE1BQU0sT0FBTyxjQUFlLFNBQVEsbUJBQW1COzs7OztJQWF0RCxZQUNTLE9BQW1CLEVBQ25CLFlBQWlDO1FBRXpDLEtBQUssRUFBRSxDQUFDO1FBSEEsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUNuQixpQkFBWSxHQUFaLFlBQVksQ0FBcUI7SUFHMUMsQ0FBQzs7OztJQUVELFFBQVE7UUFDUCxnRkFBZ0Y7UUFDaEYsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FDaEcsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FDM0IsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDbkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUM3QyxpREFBaUQ7UUFDbEQsQ0FBQyxDQUFDLENBQUM7UUFDSCxrR0FBa0c7SUFDbkcsQ0FBQzs7O1lBaENELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsU0FBUzthQUNuQjs7OztZQVJtQixVQUFVO1lBSXJCLFlBQVk7OztvQkFlbkIsS0FBSzswQkFDTCxLQUFLOzs7O0lBVE4sNkJBQVk7O0lBQ1osbUNBQWtCOztJQU9sQiwrQkFBdUI7O0lBQ3ZCLHFDQUEwQjs7Ozs7SUFHekIsaUNBQTJCOzs7OztJQUMzQixzQ0FBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IERpc3Bvc2FibGVDb21wb25lbnQgfSBmcm9tICcuLi9kaXNwb3NhYmxlL2Rpc3Bvc2FibGUuY29tcG9uZW50JztcbmltcG9ydCB7IExhYmVsIH0gZnJvbSAnLi9sYWJlbCc7XG5pbXBvcnQgeyBMYWJlbFNlcnZpY2UgfSBmcm9tICcuL2xhYmVsLnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdbbGFiZWxdJ1xufSlcbmV4cG9ydCBjbGFzcyBMYWJlbERpcmVjdGl2ZSBleHRlbmRzIERpc3Bvc2FibGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdGtleTogc3RyaW5nO1xuXHRpbm5lckhUTUw6IHN0cmluZztcblxuXHQvKlxuXHRASW5wdXQoKSBzZXQgbGFiZWwoa2V5OiBzdHJpbmcpIHtcblx0XHQvLyBjb25zb2xlLmxvZygnTGFiZWxEaXJlY3RpdmUubGFiZWwnLCB0aGlzLmtleSwgdGhpcy5sYWJlbFBhcmFtcywgdGhpcy50ZW1wbGF0ZSwgdGhpcy52aWV3KTtcblx0fVxuXHQqL1xuXHRASW5wdXQoKSBsYWJlbDogc3RyaW5nO1xuXHRASW5wdXQoKSBsYWJlbFBhcmFtczogYW55O1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZixcblx0XHRwcml2YXRlIGxhYmVsU2VydmljZTogTGFiZWxTZXJ2aWNlPExhYmVsPixcblx0KSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdC8vIGNvbnNvbGUubG9nKCdMYWJlbERpcmVjdGl2ZS5uZ09uSW5pdCcsIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmlubmVySFRNTCk7XG5cdFx0dGhpcy5sYWJlbFNlcnZpY2UuZ2V0S2V5KHRoaXMubGFiZWwsIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmlubmVySFRNTCwgdGhpcy5sYWJlbFBhcmFtcykucGlwZShcblx0XHRcdHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlKVxuXHRcdCkuc3Vic2NyaWJlKGxhYmVsID0+IHtcblx0XHRcdHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmlubmVySFRNTCA9IGxhYmVsO1xuXHRcdFx0Ly8gY29uc29sZS5sb2coJ0xhYmVsRGlyZWN0aXZlLm5nT25Jbml0JywgbGFiZWwpO1xuXHRcdH0pO1xuXHRcdC8vIGNvbnNvbGUubG9nKCdMYWJlbERpcmVjdGl2ZS5uZ09uSW5pdCcsIHRoaXMubGFiZWwsIHRoaXMubGFiZWxQYXJhbXMsIHRoaXMudGVtcGxhdGUsIHRoaXMudmlldyk7XG5cdH1cbn1cbiJdfQ==