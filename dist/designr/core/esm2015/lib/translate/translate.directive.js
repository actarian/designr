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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJsaWIvdHJhbnNsYXRlL3RyYW5zbGF0ZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNyRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFFekUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFLdkQsTUFBTSxPQUFPLGtCQUFtQixTQUFRLG1CQUFtQjs7Ozs7SUFhMUQsWUFDUyxPQUFtQixFQUNuQixnQkFBNkM7UUFFckQsS0FBSyxFQUFFLENBQUM7UUFIQSxZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQ25CLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBNkI7SUFHdEQsQ0FBQzs7OztJQUVELFFBQVE7UUFDUCxvRkFBb0Y7UUFDcEYsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsSUFBSSxDQUNsSCxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUMzQixDQUFDLFNBQVM7Ozs7UUFBQyxTQUFTLENBQUMsRUFBRTtZQUN2QixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1lBQ2pELHlEQUF5RDtRQUMxRCxDQUFDLEVBQUMsQ0FBQztRQUNILDhHQUE4RztJQUMvRyxDQUFDOzs7WUFoQ0QsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxhQUFhO2FBQ3ZCOzs7O1lBUm1CLFVBQVU7WUFJckIsZ0JBQWdCOzs7d0JBZXZCLEtBQUs7OEJBQ0wsS0FBSzs7OztJQVROLGlDQUFZOztJQUNaLHVDQUFrQjs7SUFPbEIsdUNBQTJCOztJQUMzQiw2Q0FBOEI7Ozs7O0lBRzdCLHFDQUEyQjs7Ozs7SUFDM0IsOENBQXFEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgRGlzcG9zYWJsZUNvbXBvbmVudCB9IGZyb20gJy4uL2Rpc3Bvc2FibGUvZGlzcG9zYWJsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGUgfSBmcm9tICcuL3RyYW5zbGF0ZSc7XHJcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICcuL3RyYW5zbGF0ZS5zZXJ2aWNlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG5cdHNlbGVjdG9yOiAnW3RyYW5zbGF0ZV0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUcmFuc2xhdGVEaXJlY3RpdmUgZXh0ZW5kcyBEaXNwb3NhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcblx0a2V5OiBzdHJpbmc7XHJcblx0aW5uZXJIVE1MOiBzdHJpbmc7XHJcblxyXG5cdC8qXHJcblx0QElucHV0KCkgc2V0IHRyYW5zbGF0ZShrZXk6IHN0cmluZykge1xyXG5cdFx0Ly8gY29uc29sZS5sb2coJ1RyYW5zbGF0ZURpcmVjdGl2ZS50cmFuc2xhdGUnLCB0aGlzLmtleSwgdGhpcy50cmFuc2xhdGVQYXJhbXMsIHRoaXMudGVtcGxhdGUsIHRoaXMudmlldyk7XHJcblx0fVxyXG5cdCovXHJcblx0QElucHV0KCkgdHJhbnNsYXRlOiBzdHJpbmc7XHJcblx0QElucHV0KCkgdHJhbnNsYXRlUGFyYW1zOiBhbnk7XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLFxyXG5cdFx0cHJpdmF0ZSB0cmFuc2xhdGVTZXJ2aWNlOiBUcmFuc2xhdGVTZXJ2aWNlPFRyYW5zbGF0ZT4sXHJcblx0KSB7XHJcblx0XHRzdXBlcigpO1xyXG5cdH1cclxuXHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHQvLyBjb25zb2xlLmxvZygnVHJhbnNsYXRlRGlyZWN0aXZlLm5nT25Jbml0JywgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MKTtcclxuXHRcdHRoaXMudHJhbnNsYXRlU2VydmljZS5nZXRUcmFuc2xhdGUodGhpcy50cmFuc2xhdGUsIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmlubmVySFRNTCwgdGhpcy50cmFuc2xhdGVQYXJhbXMpLnBpcGUoXHJcblx0XHRcdHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlKVxyXG5cdFx0KS5zdWJzY3JpYmUodHJhbnNsYXRlID0+IHtcclxuXHRcdFx0dGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MID0gdHJhbnNsYXRlO1xyXG5cdFx0XHQvLyBjb25zb2xlLmxvZygnVHJhbnNsYXRlRGlyZWN0aXZlLm5nT25Jbml0JywgdHJhbnNsYXRlKTtcclxuXHRcdH0pO1xyXG5cdFx0Ly8gY29uc29sZS5sb2coJ1RyYW5zbGF0ZURpcmVjdGl2ZS5uZ09uSW5pdCcsIHRoaXMudHJhbnNsYXRlLCB0aGlzLnRyYW5zbGF0ZVBhcmFtcywgdGhpcy50ZW1wbGF0ZSwgdGhpcy52aWV3KTtcclxuXHR9XHJcbn1cclxuIl19