/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Input } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { DisposableComponent } from '../disposable/disposable.component';
import { TranslateService } from './translate.service';
export class TranslateDirective extends DisposableComponent {
    /**
     * @param {?} element
     * @param {?} translateService
     */
    constructor(element, translateService) {
        super();
        this.element = element;
        this.translateService = translateService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // console.log('TranslateDirective.ngOnInit', this.element.nativeElement.innerHTML);
        this.translateService.getTranslate(this.translate, this.element.nativeElement.innerHTML, this.translateParams).pipe(takeUntil(this.unsubscribe)).subscribe((/**
         * @param {?} translate
         * @return {?}
         */
        translate => {
            this.element.nativeElement.innerHTML = translate;
            // console.log('TranslateDirective.ngOnInit', translate);
        }));
        // console.log('TranslateDirective.ngOnInit', this.translate, this.translateParams, this.template, this.view);
    }
}
TranslateDirective.decorators = [
    { type: Directive, args: [{
                selector: '[translate]'
            },] }
];
/** @nocollapse */
TranslateDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: TranslateService }
];
TranslateDirective.propDecorators = {
    translate: [{ type: Input }],
    translateParams: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJsaWIvdHJhbnNsYXRlL3RyYW5zbGF0ZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNyRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFFekUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFLdkQsTUFBTSxPQUFPLGtCQUFtQixTQUFRLG1CQUFtQjs7Ozs7SUFhMUQsWUFDUyxPQUFtQixFQUNuQixnQkFBNkM7UUFFckQsS0FBSyxFQUFFLENBQUM7UUFIQSxZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQ25CLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBNkI7SUFHdEQsQ0FBQzs7OztJQUVELFFBQVE7UUFDUCxvRkFBb0Y7UUFDcEYsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsSUFBSSxDQUNsSCxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUMzQixDQUFDLFNBQVM7Ozs7UUFBQyxTQUFTLENBQUMsRUFBRTtZQUN2QixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1lBQ2pELHlEQUF5RDtRQUMxRCxDQUFDLEVBQUMsQ0FBQztRQUNILDhHQUE4RztJQUMvRyxDQUFDOzs7WUFoQ0QsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxhQUFhO2FBQ3ZCOzs7O1lBUm1CLFVBQVU7WUFJckIsZ0JBQWdCOzs7d0JBZXZCLEtBQUs7OEJBQ0wsS0FBSzs7OztJQVROLGlDQUFZOztJQUNaLHVDQUFrQjs7SUFPbEIsdUNBQTJCOztJQUMzQiw2Q0FBOEI7Ozs7O0lBRzdCLHFDQUEyQjs7Ozs7SUFDM0IsOENBQXFEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBEaXNwb3NhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi4vZGlzcG9zYWJsZS9kaXNwb3NhYmxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUcmFuc2xhdGUgfSBmcm9tICcuL3RyYW5zbGF0ZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnLi90cmFuc2xhdGUuc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ1t0cmFuc2xhdGVdJ1xufSlcbmV4cG9ydCBjbGFzcyBUcmFuc2xhdGVEaXJlY3RpdmUgZXh0ZW5kcyBEaXNwb3NhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRrZXk6IHN0cmluZztcblx0aW5uZXJIVE1MOiBzdHJpbmc7XG5cblx0Lypcblx0QElucHV0KCkgc2V0IHRyYW5zbGF0ZShrZXk6IHN0cmluZykge1xuXHRcdC8vIGNvbnNvbGUubG9nKCdUcmFuc2xhdGVEaXJlY3RpdmUudHJhbnNsYXRlJywgdGhpcy5rZXksIHRoaXMudHJhbnNsYXRlUGFyYW1zLCB0aGlzLnRlbXBsYXRlLCB0aGlzLnZpZXcpO1xuXHR9XG5cdCovXG5cdEBJbnB1dCgpIHRyYW5zbGF0ZTogc3RyaW5nO1xuXHRASW5wdXQoKSB0cmFuc2xhdGVQYXJhbXM6IGFueTtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYsXG5cdFx0cHJpdmF0ZSB0cmFuc2xhdGVTZXJ2aWNlOiBUcmFuc2xhdGVTZXJ2aWNlPFRyYW5zbGF0ZT4sXG5cdCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHQvLyBjb25zb2xlLmxvZygnVHJhbnNsYXRlRGlyZWN0aXZlLm5nT25Jbml0JywgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MKTtcblx0XHR0aGlzLnRyYW5zbGF0ZVNlcnZpY2UuZ2V0VHJhbnNsYXRlKHRoaXMudHJhbnNsYXRlLCB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5pbm5lckhUTUwsIHRoaXMudHJhbnNsYXRlUGFyYW1zKS5waXBlKFxuXHRcdFx0dGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUpXG5cdFx0KS5zdWJzY3JpYmUodHJhbnNsYXRlID0+IHtcblx0XHRcdHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmlubmVySFRNTCA9IHRyYW5zbGF0ZTtcblx0XHRcdC8vIGNvbnNvbGUubG9nKCdUcmFuc2xhdGVEaXJlY3RpdmUubmdPbkluaXQnLCB0cmFuc2xhdGUpO1xuXHRcdH0pO1xuXHRcdC8vIGNvbnNvbGUubG9nKCdUcmFuc2xhdGVEaXJlY3RpdmUubmdPbkluaXQnLCB0aGlzLnRyYW5zbGF0ZSwgdGhpcy50cmFuc2xhdGVQYXJhbXMsIHRoaXMudGVtcGxhdGUsIHRoaXMudmlldyk7XG5cdH1cbn1cbiJdfQ==