/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, forwardRef, Input } from '@angular/core';
import { NG_ASYNC_VALIDATORS } from '@angular/forms';
import { BehaviorSubject, isObservable, of } from 'rxjs';
import { catchError, debounceTime, switchMap, take } from 'rxjs/operators';
/** @type {?} */
const DEBOUNCE_TIME = 250;
export class ExistsValidator {
    constructor() {
        this.value$ = new BehaviorSubject(null);
        this.debounced$ = this.value$.pipe(debounceTime(DEBOUNCE_TIME), switchMap((/**
         * @param {?} value
         * @return {?}
         */
        (value) => {
            // console.log('ExistsValidator.debounced$', value);
            return this.exists$(value);
        })), catchError((/**
         * @param {?} response
         * @return {?}
         */
        (response) => {
            console.log('ExistsValidator.debounced$.catchError', response);
            return of(null);
        })), take(1));
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set value(value) {
        // console.log('value', value);
        if (value && String(value).trim() !== '') {
            this.value$.next(value);
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    exists$(value) {
        if (typeof this.exists === 'function') {
            /** @type {?} */
            const exists = this.exists(value);
            if (isObservable(exists)) {
                // console.log('ExistsValidator.exists$', value);
                return exists.pipe(switchMap((/**
                 * @param {?} exists
                 * @return {?}
                 */
                exists => {
                    // console.log('ExistsValidator.exists$', exists);
                    return of(this.getValidationError(Boolean(exists)));
                })));
            }
            else {
                return of(this.getValidationError(Boolean(exists)));
            }
        }
        else {
            return of(this.getValidationError(value ? true : false));
        }
    }
    /**
     * @param {?} exists
     * @return {?}
     */
    getValidationError(exists) {
        // console.log('ExistsValidator.getValidationError', exists);
        if (exists) {
            return {
                exists: true,
            };
        }
        else {
            return null;
        }
    }
    /**
     * @param {?} control
     * @return {?}
     */
    validate(control) {
        this.value = control.value;
        // console.log('ExistsValidator.validate', control.value, control);
        return this.debounced$;
    }
}
ExistsValidator.decorators = [
    { type: Directive, args: [{
                selector: '[exists][formControlName],[exists][formControl],[exists][ngModel]',
                providers: [
                    { provide: NG_ASYNC_VALIDATORS, useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => ExistsValidator)), multi: true },
                ]
            },] }
];
ExistsValidator.propDecorators = {
    exists: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhpc3RzLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvbnRyb2wvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9leGlzdHMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFtQyxtQkFBbUIsRUFBb0IsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4RyxPQUFPLEVBQUUsZUFBZSxFQUFFLFlBQVksRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDckUsT0FBTyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDOztNQUVyRSxhQUFhLEdBQVcsR0FBRztBQVFqQyxNQUFNLE9BQU8sZUFBZTtJQU41QjtRQVVTLFdBQU0sR0FBRyxJQUFJLGVBQWUsQ0FBUyxJQUFJLENBQUMsQ0FBQztRQUUzQyxlQUFVLEdBQXdDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUN6RSxZQUFZLENBQUMsYUFBYSxDQUFDLEVBQzNCLFNBQVM7Ozs7UUFBQyxDQUFDLEtBQWEsRUFBRSxFQUFFO1lBQzNCLG9EQUFvRDtZQUNwRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUIsQ0FBQyxFQUFDLEVBQ0YsVUFBVTs7OztRQUFDLENBQUMsUUFBUSxFQUFFLEVBQUU7WUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1Q0FBdUMsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUMvRCxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqQixDQUFDLEVBQUMsRUFDRixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQ1AsQ0FBQztJQTZDSCxDQUFDOzs7OztJQTNDQSxJQUFJLEtBQUssQ0FBQyxLQUFhO1FBQ3RCLCtCQUErQjtRQUMvQixJQUFJLEtBQUssSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQ3pDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3hCO0lBQ0YsQ0FBQzs7Ozs7SUFFRCxPQUFPLENBQUMsS0FBYTtRQUNwQixJQUFJLE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxVQUFVLEVBQUU7O2tCQUNoQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFDakMsSUFBSSxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBQ3pCLGlEQUFpRDtnQkFDakQsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUNqQixTQUFTOzs7O2dCQUFDLE1BQU0sQ0FBQyxFQUFFO29CQUNsQixrREFBa0Q7b0JBQ2xELE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNyRCxDQUFDLEVBQUMsQ0FDRixDQUFDO2FBQ0Y7aUJBQU07Z0JBQ04sT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDcEQ7U0FDRDthQUFNO1lBQ04sT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQ3pEO0lBQ0YsQ0FBQzs7Ozs7SUFFRCxrQkFBa0IsQ0FBQyxNQUFlO1FBQ2pDLDZEQUE2RDtRQUM3RCxJQUFJLE1BQU0sRUFBRTtZQUNYLE9BQU87Z0JBQ04sTUFBTSxFQUFFLElBQUk7YUFDWixDQUFDO1NBQ0Y7YUFBTTtZQUNOLE9BQU8sSUFBSSxDQUFDO1NBQ1o7SUFDRixDQUFDOzs7OztJQUVELFFBQVEsQ0FBQyxPQUF3QjtRQUNoQyxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFDM0IsbUVBQW1FO1FBQ25FLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN4QixDQUFDOzs7WUFsRUQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxtRUFBbUU7Z0JBQzdFLFNBQVMsRUFBRTtvQkFDVixFQUFFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxXQUFXLEVBQUUsVUFBVTs7O3dCQUFDLEdBQUcsRUFBRSxDQUFDLGVBQWUsRUFBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUU7aUJBQzdGO2FBQ0Q7OztxQkFHQyxLQUFLOzs7O0lBQU4saUNBQTBCOzs7OztJQUUxQixpQ0FBbUQ7Ozs7O0lBRW5ELHFDQVdFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBmb3J3YXJkUmVmLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sLCBBc3luY1ZhbGlkYXRvciwgTkdfQVNZTkNfVkFMSURBVE9SUywgVmFsaWRhdGlvbkVycm9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgaXNPYnNlcnZhYmxlLCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgZGVib3VuY2VUaW1lLCBzd2l0Y2hNYXAsIHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmNvbnN0IERFQk9VTkNFX1RJTUU6IG51bWJlciA9IDI1MDtcblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnW2V4aXN0c11bZm9ybUNvbnRyb2xOYW1lXSxbZXhpc3RzXVtmb3JtQ29udHJvbF0sW2V4aXN0c11bbmdNb2RlbF0nLFxuXHRwcm92aWRlcnM6IFtcblx0XHR7IHByb3ZpZGU6IE5HX0FTWU5DX1ZBTElEQVRPUlMsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEV4aXN0c1ZhbGlkYXRvciksIG11bHRpOiB0cnVlIH0sXG5cdF1cbn0pXG5leHBvcnQgY2xhc3MgRXhpc3RzVmFsaWRhdG9yIGltcGxlbWVudHMgQXN5bmNWYWxpZGF0b3Ige1xuXG5cdEBJbnB1dCgpIGV4aXN0czogRnVuY3Rpb247XG5cblx0cHJpdmF0ZSB2YWx1ZSQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4obnVsbCk7XG5cblx0cHJpdmF0ZSBkZWJvdW5jZWQkOiBPYnNlcnZhYmxlPFZhbGlkYXRpb25FcnJvcnMgfCBudWxsPiA9IHRoaXMudmFsdWUkLnBpcGUoXG5cdFx0ZGVib3VuY2VUaW1lKERFQk9VTkNFX1RJTUUpLFxuXHRcdHN3aXRjaE1hcCgodmFsdWU6IHN0cmluZykgPT4ge1xuXHRcdFx0Ly8gY29uc29sZS5sb2coJ0V4aXN0c1ZhbGlkYXRvci5kZWJvdW5jZWQkJywgdmFsdWUpO1xuXHRcdFx0cmV0dXJuIHRoaXMuZXhpc3RzJCh2YWx1ZSk7XG5cdFx0fSksXG5cdFx0Y2F0Y2hFcnJvcigocmVzcG9uc2UpID0+IHtcblx0XHRcdGNvbnNvbGUubG9nKCdFeGlzdHNWYWxpZGF0b3IuZGVib3VuY2VkJC5jYXRjaEVycm9yJywgcmVzcG9uc2UpO1xuXHRcdFx0cmV0dXJuIG9mKG51bGwpO1xuXHRcdH0pLFxuXHRcdHRha2UoMSksXG5cdCk7XG5cblx0c2V0IHZhbHVlKHZhbHVlOiBzdHJpbmcpIHtcblx0XHQvLyBjb25zb2xlLmxvZygndmFsdWUnLCB2YWx1ZSk7XG5cdFx0aWYgKHZhbHVlICYmIFN0cmluZyh2YWx1ZSkudHJpbSgpICE9PSAnJykge1xuXHRcdFx0dGhpcy52YWx1ZSQubmV4dCh2YWx1ZSk7XG5cdFx0fVxuXHR9XG5cblx0ZXhpc3RzJCh2YWx1ZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbD4ge1xuXHRcdGlmICh0eXBlb2YgdGhpcy5leGlzdHMgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdGNvbnN0IGV4aXN0cyA9IHRoaXMuZXhpc3RzKHZhbHVlKTtcblx0XHRcdGlmIChpc09ic2VydmFibGUoZXhpc3RzKSkge1xuXHRcdFx0XHQvLyBjb25zb2xlLmxvZygnRXhpc3RzVmFsaWRhdG9yLmV4aXN0cyQnLCB2YWx1ZSk7XG5cdFx0XHRcdHJldHVybiBleGlzdHMucGlwZShcblx0XHRcdFx0XHRzd2l0Y2hNYXAoZXhpc3RzID0+IHtcblx0XHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKCdFeGlzdHNWYWxpZGF0b3IuZXhpc3RzJCcsIGV4aXN0cyk7XG5cdFx0XHRcdFx0XHRyZXR1cm4gb2YodGhpcy5nZXRWYWxpZGF0aW9uRXJyb3IoQm9vbGVhbihleGlzdHMpKSk7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBvZih0aGlzLmdldFZhbGlkYXRpb25FcnJvcihCb29sZWFuKGV4aXN0cykpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIG9mKHRoaXMuZ2V0VmFsaWRhdGlvbkVycm9yKHZhbHVlID8gdHJ1ZSA6IGZhbHNlKSk7XG5cdFx0fVxuXHR9XG5cblx0Z2V0VmFsaWRhdGlvbkVycm9yKGV4aXN0czogYm9vbGVhbik6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcblx0XHQvLyBjb25zb2xlLmxvZygnRXhpc3RzVmFsaWRhdG9yLmdldFZhbGlkYXRpb25FcnJvcicsIGV4aXN0cyk7XG5cdFx0aWYgKGV4aXN0cykge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0ZXhpc3RzOiB0cnVlLFxuXHRcdFx0fTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHR9XG5cblx0dmFsaWRhdGUoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogUHJvbWlzZTxWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbD4gfCBPYnNlcnZhYmxlPFZhbGlkYXRpb25FcnJvcnMgfCBudWxsPiB7XG5cdFx0dGhpcy52YWx1ZSA9IGNvbnRyb2wudmFsdWU7XG5cdFx0Ly8gY29uc29sZS5sb2coJ0V4aXN0c1ZhbGlkYXRvci52YWxpZGF0ZScsIGNvbnRyb2wudmFsdWUsIGNvbnRyb2wpO1xuXHRcdHJldHVybiB0aGlzLmRlYm91bmNlZCQ7XG5cdH1cblxufVxuIl19