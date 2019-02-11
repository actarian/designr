/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, forwardRef, Input } from '@angular/core';
import { NG_ASYNC_VALIDATORS } from '@angular/forms';
import { BehaviorSubject, of } from 'rxjs';
import { catchError, debounceTime, switchMap, take } from 'rxjs/operators';
/** @type {?} */
const DEBOUNCE_TIME = 250;
export class ExistsValidator {
    constructor() {
        this.values = new BehaviorSubject(null);
        this.debounced$ = this.values.pipe(debounceTime(DEBOUNCE_TIME), switchMap((value) => {
            // console.log('ExistsValidator.debounced$', value);
            return this.exists$(value);
        }), catchError((response) => {
            console.log('ExistsValidator.debounced$.catchError', response);
            return of(null);
        }), take(1));
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set value(value) {
        if (value && value.trim() !== '') {
            this.values.next(value);
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    exists$(value) {
        if (typeof this.exists === 'function') {
            // console.log('ExistsValidator.exists$', value);
            return this.exists(value).pipe(switchMap(exists => {
                if (exists) {
                    return of({
                        exists: true,
                    });
                }
                else {
                    return of(null);
                }
            }));
        }
        else {
            return of(null);
        }
    }
    /**
     * @param {?} control
     * @return {?}
     */
    validate(control) {
        this.value = control.value;
        return this.debounced$;
    }
}
ExistsValidator.decorators = [
    { type: Directive, args: [{
                selector: '[exists][formControlName],[exists][formControl],[exists][ngModel]',
                providers: [
                    { provide: NG_ASYNC_VALIDATORS, useExisting: forwardRef(() => ExistsValidator), multi: true },
                ]
            },] }
];
ExistsValidator.propDecorators = {
    exists: [{ type: Input }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    ExistsValidator.prototype.values;
    /**
     * @type {?}
     * @private
     */
    ExistsValidator.prototype.debounced$;
    /** @type {?} */
    ExistsValidator.prototype.exists;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhpc3RzLnZhbGlkYXRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJsaWIvZm9ybXMvZXhpc3RzLnZhbGlkYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBbUMsbUJBQW1CLEVBQW9CLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEcsT0FBTyxFQUFFLGVBQWUsRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDOztNQUVyRSxhQUFhLEdBQVcsR0FBRztBQVFqQyxNQUFNLE9BQU8sZUFBZTtJQU41QjtRQVFTLFdBQU0sR0FBRyxJQUFJLGVBQWUsQ0FBUyxJQUFJLENBQUMsQ0FBQztRQU0zQyxlQUFVLEdBQXdDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUN6RSxZQUFZLENBQUMsYUFBYSxDQUFDLEVBQzNCLFNBQVMsQ0FBQyxDQUFDLEtBQWEsRUFBRSxFQUFFO1lBQzNCLG9EQUFvRDtZQUNwRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUIsQ0FBQyxDQUFDLEVBQ0YsVUFBVSxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUU7WUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1Q0FBdUMsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUMvRCxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqQixDQUFDLENBQUMsRUFDRixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQ1AsQ0FBQztJQTRCSCxDQUFDOzs7OztJQTVDQSxJQUFJLEtBQUssQ0FBQyxLQUFhO1FBQ3RCLElBQUksS0FBSyxJQUFJLEtBQUssQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUU7WUFDakMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDeEI7SUFDRixDQUFDOzs7OztJQWdCRCxPQUFPLENBQUMsS0FBYTtRQUNwQixJQUFJLE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxVQUFVLEVBQUU7WUFDdEMsaURBQWlEO1lBQ2pELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQzdCLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRTtnQkFDbEIsSUFBSSxNQUFNLEVBQUU7b0JBQ1gsT0FBTyxFQUFFLENBQUM7d0JBQ1QsTUFBTSxFQUFFLElBQUk7cUJBQ1osQ0FBQyxDQUFDO2lCQUNIO3FCQUFNO29CQUNOLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUNoQjtZQUNGLENBQUMsQ0FBQyxDQUNGLENBQUM7U0FDRjthQUFNO1lBQ04sT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDaEI7SUFDRixDQUFDOzs7OztJQUVELFFBQVEsQ0FBQyxPQUF3QjtRQUNoQyxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFDM0IsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3hCLENBQUM7OztZQW5ERCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLG1FQUFtRTtnQkFDN0UsU0FBUyxFQUFFO29CQUNWLEVBQUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsZUFBZSxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRTtpQkFDN0Y7YUFDRDs7O3FCQXNCQyxLQUFLOzs7Ozs7O0lBbkJOLGlDQUFtRDs7Ozs7SUFNbkQscUNBV0U7O0lBRUYsaUNBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBmb3J3YXJkUmVmLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sLCBBc3luY1ZhbGlkYXRvciwgTkdfQVNZTkNfVkFMSURBVE9SUywgVmFsaWRhdGlvbkVycm9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIGRlYm91bmNlVGltZSwgc3dpdGNoTWFwLCB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5jb25zdCBERUJPVU5DRV9USU1FOiBudW1iZXIgPSAyNTA7XG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ1tleGlzdHNdW2Zvcm1Db250cm9sTmFtZV0sW2V4aXN0c11bZm9ybUNvbnRyb2xdLFtleGlzdHNdW25nTW9kZWxdJyxcblx0cHJvdmlkZXJzOiBbXG5cdFx0eyBwcm92aWRlOiBOR19BU1lOQ19WQUxJREFUT1JTLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFeGlzdHNWYWxpZGF0b3IpLCBtdWx0aTogdHJ1ZSB9LFxuXHRdXG59KVxuZXhwb3J0IGNsYXNzIEV4aXN0c1ZhbGlkYXRvciBpbXBsZW1lbnRzIEFzeW5jVmFsaWRhdG9yIHtcblxuXHRwcml2YXRlIHZhbHVlcyA9IG5ldyBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPihudWxsKTtcblx0c2V0IHZhbHVlKHZhbHVlOiBzdHJpbmcpIHtcblx0XHRpZiAodmFsdWUgJiYgdmFsdWUudHJpbSgpICE9PSAnJykge1xuXHRcdFx0dGhpcy52YWx1ZXMubmV4dCh2YWx1ZSk7XG5cdFx0fVxuXHR9XG5cdHByaXZhdGUgZGVib3VuY2VkJDogT2JzZXJ2YWJsZTxWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbD4gPSB0aGlzLnZhbHVlcy5waXBlKFxuXHRcdGRlYm91bmNlVGltZShERUJPVU5DRV9USU1FKSxcblx0XHRzd2l0Y2hNYXAoKHZhbHVlOiBzdHJpbmcpID0+IHtcblx0XHRcdC8vIGNvbnNvbGUubG9nKCdFeGlzdHNWYWxpZGF0b3IuZGVib3VuY2VkJCcsIHZhbHVlKTtcblx0XHRcdHJldHVybiB0aGlzLmV4aXN0cyQodmFsdWUpO1xuXHRcdH0pLFxuXHRcdGNhdGNoRXJyb3IoKHJlc3BvbnNlKSA9PiB7XG5cdFx0XHRjb25zb2xlLmxvZygnRXhpc3RzVmFsaWRhdG9yLmRlYm91bmNlZCQuY2F0Y2hFcnJvcicsIHJlc3BvbnNlKTtcblx0XHRcdHJldHVybiBvZihudWxsKTtcblx0XHR9KSxcblx0XHR0YWtlKDEpLFxuXHQpO1xuXG5cdEBJbnB1dCgpIGV4aXN0czogRnVuY3Rpb247XG5cblx0ZXhpc3RzJCh2YWx1ZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbD4ge1xuXHRcdGlmICh0eXBlb2YgdGhpcy5leGlzdHMgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdC8vIGNvbnNvbGUubG9nKCdFeGlzdHNWYWxpZGF0b3IuZXhpc3RzJCcsIHZhbHVlKTtcblx0XHRcdHJldHVybiB0aGlzLmV4aXN0cyh2YWx1ZSkucGlwZShcblx0XHRcdFx0c3dpdGNoTWFwKGV4aXN0cyA9PiB7XG5cdFx0XHRcdFx0aWYgKGV4aXN0cykge1xuXHRcdFx0XHRcdFx0cmV0dXJuIG9mKHtcblx0XHRcdFx0XHRcdFx0ZXhpc3RzOiB0cnVlLFxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHJldHVybiBvZihudWxsKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pLFxuXHRcdFx0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIG9mKG51bGwpO1xuXHRcdH1cblx0fVxuXG5cdHZhbGlkYXRlKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFByb21pc2U8VmFsaWRhdGlvbkVycm9ycyB8IG51bGw+IHwgT2JzZXJ2YWJsZTxWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbD4ge1xuXHRcdHRoaXMudmFsdWUgPSBjb250cm9sLnZhbHVlO1xuXHRcdHJldHVybiB0aGlzLmRlYm91bmNlZCQ7XG5cdH1cblxufVxuIl19