/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, forwardRef, Input } from '@angular/core';
import { NG_ASYNC_VALIDATORS } from '@angular/forms';
import { BehaviorSubject, isObservable, of } from 'rxjs';
import { catchError, debounceTime, map, switchMap, take } from 'rxjs/operators';
/** @type {?} */
var DEBOUNCE_TIME = 250;
var ExistsValidator = /** @class */ (function () {
    function ExistsValidator() {
        var _this = this;
        this.value$ = new BehaviorSubject(null);
        this.debounced$ = this.value$.pipe(debounceTime(DEBOUNCE_TIME), switchMap((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            // console.log('ExistsValidator.debounced$', value);
            return _this.exists$(value);
        })), catchError((/**
         * @param {?} response
         * @return {?}
         */
        function (response) {
            console.log('ExistsValidator.debounced$.catchError', response);
            return of(null);
        })), take(1));
    }
    Object.defineProperty(ExistsValidator.prototype, "value", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            // console.log('value', value);
            if (value && String(value).trim() !== '') {
                this.value$.next(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} value
     * @return {?}
     */
    ExistsValidator.prototype.exists$ = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (typeof this.exists === 'function') {
            /** @type {?} */
            var exists = this.exists(value);
            if (isObservable(exists)) {
                return exists.pipe(map((/**
                 * @param {?} exists
                 * @return {?}
                 */
                function (exists) {
                    return exists ? { exists: true } : null;
                })));
            }
            else {
                return of(exists ? { exists: true } : null);
            }
        }
        else {
            return of(null);
        }
    };
    /**
     * @param {?} control
     * @return {?}
     */
    ExistsValidator.prototype.validate = /**
     * @param {?} control
     * @return {?}
     */
    function (control) {
        this.value = control.value;
        // console.log('ExistsValidator.validate', control.value, control);
        return this.debounced$;
    };
    ExistsValidator.decorators = [
        { type: Directive, args: [{
                    selector: '[exists][formControlName],[exists][formControl],[exists][ngModel]',
                    providers: [
                        { provide: NG_ASYNC_VALIDATORS, useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return ExistsValidator; })), multi: true },
                    ]
                },] }
    ];
    ExistsValidator.propDecorators = {
        exists: [{ type: Input }]
    };
    return ExistsValidator;
}());
export { ExistsValidator };
if (false) {
    /** @type {?} */
    ExistsValidator.prototype.exists;
    /**
     * @type {?}
     * @private
     */
    ExistsValidator.prototype.value$;
    /**
     * @type {?}
     * @private
     */
    ExistsValidator.prototype.debounced$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhpc3RzLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvbnRyb2wvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9leGlzdHMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFtQyxtQkFBbUIsRUFBb0IsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4RyxPQUFPLEVBQUUsZUFBZSxFQUFFLFlBQVksRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDckUsT0FBTyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7SUFFMUUsYUFBYSxHQUFXLEdBQUc7QUFFakM7SUFBQTtRQUFBLGlCQXVEQztRQTdDUSxXQUFNLEdBQUcsSUFBSSxlQUFlLENBQVMsSUFBSSxDQUFDLENBQUM7UUFFM0MsZUFBVSxHQUF3QyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FDekUsWUFBWSxDQUFDLGFBQWEsQ0FBQyxFQUMzQixTQUFTOzs7O1FBQUMsVUFBQyxLQUFhO1lBQ3ZCLG9EQUFvRDtZQUNwRCxPQUFPLEtBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUIsQ0FBQyxFQUFDLEVBQ0YsVUFBVTs7OztRQUFDLFVBQUMsUUFBUTtZQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLHVDQUF1QyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQy9ELE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pCLENBQUMsRUFBQyxFQUNGLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FDUCxDQUFDO0lBZ0NILENBQUM7SUE5QkEsc0JBQUksa0NBQUs7Ozs7O1FBQVQsVUFBVSxLQUFhO1lBQ3RCLCtCQUErQjtZQUMvQixJQUFJLEtBQUssSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFO2dCQUN6QyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUN4QjtRQUNGLENBQUM7OztPQUFBOzs7OztJQUVELGlDQUFPOzs7O0lBQVAsVUFBUSxLQUFhO1FBQ3BCLElBQUksT0FBTyxJQUFJLENBQUMsTUFBTSxLQUFLLFVBQVUsRUFBRTs7Z0JBQ2hDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztZQUNqQyxJQUFJLFlBQVksQ0FBQyxNQUFNLENBQUMsRUFBRTtnQkFDekIsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUNqQixHQUFHOzs7O2dCQUFDLFVBQUEsTUFBTTtvQkFDVCxPQUFPLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDekMsQ0FBQyxFQUFDLENBQ0YsQ0FBQzthQUNGO2lCQUFNO2dCQUNOLE9BQU8sRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzVDO1NBQ0Q7YUFBTTtZQUNOLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2hCO0lBQ0YsQ0FBQzs7Ozs7SUFFRCxrQ0FBUTs7OztJQUFSLFVBQVMsT0FBd0I7UUFDaEMsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO1FBQzNCLG1FQUFtRTtRQUNuRSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDeEIsQ0FBQzs7Z0JBckRELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsbUVBQW1FO29CQUM3RSxTQUFTLEVBQUU7d0JBQ1YsRUFBRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsV0FBVyxFQUFFLFVBQVU7Ozs0QkFBQyxjQUFNLE9BQUEsZUFBZSxFQUFmLENBQWUsRUFBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUU7cUJBQzdGO2lCQUNEOzs7eUJBR0MsS0FBSzs7SUErQ1Asc0JBQUM7Q0FBQSxBQXZERCxJQXVEQztTQWpEWSxlQUFlOzs7SUFFM0IsaUNBQTBCOzs7OztJQUUxQixpQ0FBbUQ7Ozs7O0lBRW5ELHFDQVdFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBmb3J3YXJkUmVmLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sLCBBc3luY1ZhbGlkYXRvciwgTkdfQVNZTkNfVkFMSURBVE9SUywgVmFsaWRhdGlvbkVycm9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgaXNPYnNlcnZhYmxlLCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgZGVib3VuY2VUaW1lLCBtYXAsIHN3aXRjaE1hcCwgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuY29uc3QgREVCT1VOQ0VfVElNRTogbnVtYmVyID0gMjUwO1xuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdbZXhpc3RzXVtmb3JtQ29udHJvbE5hbWVdLFtleGlzdHNdW2Zvcm1Db250cm9sXSxbZXhpc3RzXVtuZ01vZGVsXScsXG5cdHByb3ZpZGVyczogW1xuXHRcdHsgcHJvdmlkZTogTkdfQVNZTkNfVkFMSURBVE9SUywgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRXhpc3RzVmFsaWRhdG9yKSwgbXVsdGk6IHRydWUgfSxcblx0XVxufSlcbmV4cG9ydCBjbGFzcyBFeGlzdHNWYWxpZGF0b3IgaW1wbGVtZW50cyBBc3luY1ZhbGlkYXRvciB7XG5cblx0QElucHV0KCkgZXhpc3RzOiBGdW5jdGlvbjtcblxuXHRwcml2YXRlIHZhbHVlJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPihudWxsKTtcblxuXHRwcml2YXRlIGRlYm91bmNlZCQ6IE9ic2VydmFibGU8VmFsaWRhdGlvbkVycm9ycyB8IG51bGw+ID0gdGhpcy52YWx1ZSQucGlwZShcblx0XHRkZWJvdW5jZVRpbWUoREVCT1VOQ0VfVElNRSksXG5cdFx0c3dpdGNoTWFwKCh2YWx1ZTogc3RyaW5nKSA9PiB7XG5cdFx0XHQvLyBjb25zb2xlLmxvZygnRXhpc3RzVmFsaWRhdG9yLmRlYm91bmNlZCQnLCB2YWx1ZSk7XG5cdFx0XHRyZXR1cm4gdGhpcy5leGlzdHMkKHZhbHVlKTtcblx0XHR9KSxcblx0XHRjYXRjaEVycm9yKChyZXNwb25zZSkgPT4ge1xuXHRcdFx0Y29uc29sZS5sb2coJ0V4aXN0c1ZhbGlkYXRvci5kZWJvdW5jZWQkLmNhdGNoRXJyb3InLCByZXNwb25zZSk7XG5cdFx0XHRyZXR1cm4gb2YobnVsbCk7XG5cdFx0fSksXG5cdFx0dGFrZSgxKSxcblx0KTtcblxuXHRzZXQgdmFsdWUodmFsdWU6IHN0cmluZykge1xuXHRcdC8vIGNvbnNvbGUubG9nKCd2YWx1ZScsIHZhbHVlKTtcblx0XHRpZiAodmFsdWUgJiYgU3RyaW5nKHZhbHVlKS50cmltKCkgIT09ICcnKSB7XG5cdFx0XHR0aGlzLnZhbHVlJC5uZXh0KHZhbHVlKTtcblx0XHR9XG5cdH1cblxuXHRleGlzdHMkKHZhbHVlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFZhbGlkYXRpb25FcnJvcnMgfCBudWxsPiB7XG5cdFx0aWYgKHR5cGVvZiB0aGlzLmV4aXN0cyA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0Y29uc3QgZXhpc3RzID0gdGhpcy5leGlzdHModmFsdWUpO1xuXHRcdFx0aWYgKGlzT2JzZXJ2YWJsZShleGlzdHMpKSB7XG5cdFx0XHRcdHJldHVybiBleGlzdHMucGlwZShcblx0XHRcdFx0XHRtYXAoZXhpc3RzID0+IHtcblx0XHRcdFx0XHRcdHJldHVybiBleGlzdHMgPyB7IGV4aXN0czogdHJ1ZSB9IDogbnVsbDtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIG9mKGV4aXN0cyA/IHsgZXhpc3RzOiB0cnVlIH0gOiBudWxsKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIG9mKG51bGwpO1xuXHRcdH1cblx0fVxuXG5cdHZhbGlkYXRlKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFByb21pc2U8VmFsaWRhdGlvbkVycm9ycyB8IG51bGw+IHwgT2JzZXJ2YWJsZTxWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbD4ge1xuXHRcdHRoaXMudmFsdWUgPSBjb250cm9sLnZhbHVlO1xuXHRcdC8vIGNvbnNvbGUubG9nKCdFeGlzdHNWYWxpZGF0b3IudmFsaWRhdGUnLCBjb250cm9sLnZhbHVlLCBjb250cm9sKTtcblx0XHRyZXR1cm4gdGhpcy5kZWJvdW5jZWQkO1xuXHR9XG5cbn1cbiJdfQ==