import { Directive, ElementRef, Input } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { DisposableDirective } from '../disposable/disposable.directive';
import { TranslateService } from './translate.service';
import * as i0 from "@angular/core";
import * as i1 from "./translate.service";
export class TranslateDirective extends DisposableDirective {
    constructor(element, translateService) {
        super();
        this.element = element;
        this.translateService = translateService;
    }
    ngOnInit() {
        // console.log('TranslateDirective.ngOnInit', this.element.nativeElement.innerHTML);
        this.translateService.getTranslate(this.translate, this.element.nativeElement.innerHTML, this.translateParams).pipe(takeUntil(this.unsubscribe)).subscribe(translate => {
            this.element.nativeElement.innerHTML = translate;
            // console.log('TranslateDirective.ngOnInit', translate);
        });
        // console.log('TranslateDirective.ngOnInit', this.translate, this.translateParams, this.template, this.view);
    }
}
TranslateDirective.ɵfac = function TranslateDirective_Factory(t) { return new (t || TranslateDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.TranslateService)); };
TranslateDirective.ɵdir = i0.ɵɵdefineDirective({ type: TranslateDirective, selectors: [["", "translate", ""]], inputs: { translate: "translate", translateParams: "translateParams" }, features: [i0.ɵɵInheritDefinitionFeature] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TranslateDirective, [{
        type: Directive,
        args: [{
                selector: '[translate]'
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.TranslateService }]; }, { translate: [{
            type: Input
        }], translateParams: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJsaWIvdHJhbnNsYXRlL3RyYW5zbGF0ZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUV6RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7O0FBS3ZELE1BQU0sT0FBTyxrQkFBbUIsU0FBUSxtQkFBbUI7SUFhMUQsWUFDUyxPQUFtQixFQUNuQixnQkFBNkM7UUFFckQsS0FBSyxFQUFFLENBQUM7UUFIQSxZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQ25CLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBNkI7SUFHdEQsQ0FBQztJQUVELFFBQVE7UUFDUCxvRkFBb0Y7UUFDcEYsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsSUFBSSxDQUNsSCxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUMzQixDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUN2QixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1lBQ2pELHlEQUF5RDtRQUMxRCxDQUFDLENBQUMsQ0FBQztRQUNILDhHQUE4RztJQUMvRyxDQUFDOztvRkE3Qlcsa0JBQWtCO3VEQUFsQixrQkFBa0I7a0RBQWxCLGtCQUFrQjtjQUg5QixTQUFTO2VBQUM7Z0JBQ1YsUUFBUSxFQUFFLGFBQWE7YUFDdkI7O2tCQVdDLEtBQUs7O2tCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IERpc3Bvc2FibGVEaXJlY3RpdmUgfSBmcm9tICcuLi9kaXNwb3NhYmxlL2Rpc3Bvc2FibGUuZGlyZWN0aXZlJztcbmltcG9ydCB7IFRyYW5zbGF0ZSB9IGZyb20gJy4vdHJhbnNsYXRlJztcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICcuL3RyYW5zbGF0ZS5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnW3RyYW5zbGF0ZV0nXG59KVxuZXhwb3J0IGNsYXNzIFRyYW5zbGF0ZURpcmVjdGl2ZSBleHRlbmRzIERpc3Bvc2FibGVEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdGtleTogc3RyaW5nO1xuXHRpbm5lckhUTUw6IHN0cmluZztcblxuXHQvKlxuXHRASW5wdXQoKSBzZXQgdHJhbnNsYXRlKGtleTogc3RyaW5nKSB7XG5cdFx0Ly8gY29uc29sZS5sb2coJ1RyYW5zbGF0ZURpcmVjdGl2ZS50cmFuc2xhdGUnLCB0aGlzLmtleSwgdGhpcy50cmFuc2xhdGVQYXJhbXMsIHRoaXMudGVtcGxhdGUsIHRoaXMudmlldyk7XG5cdH1cblx0Ki9cblx0QElucHV0KCkgdHJhbnNsYXRlOiBzdHJpbmc7XG5cdEBJbnB1dCgpIHRyYW5zbGF0ZVBhcmFtczogYW55O1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZixcblx0XHRwcml2YXRlIHRyYW5zbGF0ZVNlcnZpY2U6IFRyYW5zbGF0ZVNlcnZpY2U8VHJhbnNsYXRlPixcblx0KSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdC8vIGNvbnNvbGUubG9nKCdUcmFuc2xhdGVEaXJlY3RpdmUubmdPbkluaXQnLCB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5pbm5lckhUTUwpO1xuXHRcdHRoaXMudHJhbnNsYXRlU2VydmljZS5nZXRUcmFuc2xhdGUodGhpcy50cmFuc2xhdGUsIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmlubmVySFRNTCwgdGhpcy50cmFuc2xhdGVQYXJhbXMpLnBpcGUoXG5cdFx0XHR0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSlcblx0XHQpLnN1YnNjcmliZSh0cmFuc2xhdGUgPT4ge1xuXHRcdFx0dGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MID0gdHJhbnNsYXRlO1xuXHRcdFx0Ly8gY29uc29sZS5sb2coJ1RyYW5zbGF0ZURpcmVjdGl2ZS5uZ09uSW5pdCcsIHRyYW5zbGF0ZSk7XG5cdFx0fSk7XG5cdFx0Ly8gY29uc29sZS5sb2coJ1RyYW5zbGF0ZURpcmVjdGl2ZS5uZ09uSW5pdCcsIHRoaXMudHJhbnNsYXRlLCB0aGlzLnRyYW5zbGF0ZVBhcmFtcywgdGhpcy50ZW1wbGF0ZSwgdGhpcy52aWV3KTtcblx0fVxufVxuIl19