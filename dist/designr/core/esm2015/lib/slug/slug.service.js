/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EventEmitter, Injectable, Injector } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { catchError, debounceTime, filter, first, map, switchMap, tap } from 'rxjs/operators';
import { EntityService } from '../models/entity.service';
import * as i0 from "@angular/core";
export class SlugKey {
}
if (false) {
    /** @type {?} */
    SlugKey.prototype.id;
    /** @type {?} */
    SlugKey.prototype.mnemonic;
    /** @type {?} */
    SlugKey.prototype.slug;
}
export class SlugService extends EntityService {
    /**
     * @param {?} injector
     */
    constructor(injector) {
        super(injector);
        this.injector = injector;
        this.keys = {};
        this.values$ = new BehaviorSubject({});
        this.emitter$ = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get collection() {
        return `/api/slug`;
    }
    /**
     * @param {?} key
     * @return {?}
     */
    transform(key) {
        /** @type {?} */
        const values = this.values$.getValue();
        if (values.hasOwnProperty(key)) {
            return values[key];
        }
        else if (!this.keys.hasOwnProperty(key)) {
            values[key] = null;
            Object.defineProperty(this.keys, key, {
                value: { mnemonic: key },
                enumerable: true,
                writable: false,
            });
            this.emitter$.emit();
            return null;
        }
    }
    /**
     * @param {?} key
     * @return {?}
     */
    transform$(key) {
        /** @type {?} */
        const values = this.values$.getValue();
        if (values.hasOwnProperty(key)) {
            return of(values[key]);
        }
        else if (!this.keys.hasOwnProperty(key)) {
            Object.defineProperty(this.keys, key, {
                value: { mnemonic: key },
                enumerable: true,
                writable: false,
            });
            this.emitter$.emit();
        }
        return this.values$.pipe(map((/**
         * @param {?} values
         * @return {?}
         */
        values => values[key])));
    }
    /**
     * @return {?}
     */
    observe$() {
        return this.emitter$.pipe(debounceTime(1), switchMap((/**
         * @param {?} x
         * @return {?}
         */
        x => this.collect$())), filter((/**
         * @param {?} x
         * @return {?}
         */
        x => x !== null)), first());
    }
    /**
     * @return {?}
     */
    collect$() {
        if (Object.keys(this.keys).length) {
            /** @type {?} */
            const keys = Object.keys(this.keys).map((/**
             * @param {?} x
             * @return {?}
             */
            x => this.keys[x]));
            this.keys = {};
            return this.statePost(keys).pipe(map((/**
             * @param {?} items
             * @return {?}
             */
            (items) => {
                return items.reduce((/**
                 * @param {?} values
                 * @param {?} x
                 * @return {?}
                 */
                (values, x) => {
                    values[x.mnemonic] = [x.slug];
                    return values;
                }), {});
            })), tap((/**
             * @param {?} slugs
             * @return {?}
             */
            (slugs) => {
                /** @type {?} */
                const values = this.values$.getValue();
                Object.assign(values, slugs);
                this.values$.next(values);
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            error => {
                console.log(error);
                /** @type {?} */
                const labels = keys.reduce((/**
                 * @param {?} values
                 * @param {?} x
                 * @return {?}
                 */
                (values, x) => {
                    values[x.mnemonic] = null;
                    return values;
                }), {});
                /** @type {?} */
                const values = this.values$.getValue();
                Object.assign(values, labels);
                return of(null);
            })));
        }
        else {
            return of(null);
        }
    }
}
SlugService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
SlugService.ctorParameters = () => [
    { type: Injector }
];
/** @nocollapse */ SlugService.ngInjectableDef = i0.defineInjectable({ factory: function SlugService_Factory() { return new SlugService(i0.inject(i0.INJECTOR)); }, token: SlugService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    SlugService.prototype.keys;
    /**
     * @type {?}
     * @private
     */
    SlugService.prototype.values$;
    /**
     * @type {?}
     * @private
     */
    SlugService.prototype.emitter$;
    /** @type {?} */
    SlugService.prototype.missingHandler;
    /**
     * @type {?}
     * @protected
     */
    SlugService.prototype.injector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2x1Zy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zbHVnL3NsdWcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25FLE9BQU8sRUFBRSxlQUFlLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3ZELE9BQU8sRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU5RixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7O0FBRXpELE1BQU0sT0FBTyxPQUFPO0NBSW5COzs7SUFIQSxxQkFBWTs7SUFDWiwyQkFBa0I7O0lBQ2xCLHVCQUFjOztBQU1mLE1BQU0sT0FBTyxXQUFZLFNBQVEsYUFBNEI7Ozs7SUFZNUQsWUFDVyxRQUFrQjtRQUU1QixLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7UUFGTixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBUHJCLFNBQUksR0FBZ0MsRUFBRSxDQUFDO1FBQ3ZDLFlBQU8sR0FBZ0QsSUFBSSxlQUFlLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDL0UsYUFBUSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO0lBUXpELENBQUM7Ozs7SUFkRCxJQUFJLFVBQVU7UUFDYixPQUFPLFdBQVcsQ0FBQztJQUNwQixDQUFDOzs7OztJQWNELFNBQVMsQ0FBQyxHQUFXOztjQUNkLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRTtRQUN0QyxJQUFJLE1BQU0sQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDL0IsT0FBTyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDbkI7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QUM7Z0JBQzdCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzNCLENBQUMsRUFBQyxFQUNGLFVBQVU7Ozs7WUFBQyxLQUFLLENBQUMsRUFBRTtnQkFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQzs7c0JBQ2IsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNOzs7OztnQkFBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtvQkFDeEMsTUFBTSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxJQUFJLENBQUM7b0JBQzFCLE9BQU8sTUFBTSxDQUFDO2dCQUNmLENBQUMsR0FBRSxFQUFFLENBQUM7O3NCQUNBLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRTtnQkFDdEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7Z0JBQzlCLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2pCLENBQUMsRUFBQyxDQUNGLENBQUM7U0FDRjthQUFNO1lBQ04sT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDaEI7SUFDRixDQUFDOzs7WUE3RkQsVUFBVSxTQUFDO2dCQUNYLFVBQVUsRUFBRSxNQUFNO2FBQ2xCOzs7O1lBZGtDLFFBQVE7Ozs7Ozs7O0lBcUIxQywyQkFBK0M7Ozs7O0lBQy9DLDhCQUF1Rjs7Ozs7SUFDdkYsK0JBQXlEOztJQUV6RCxxQ0FBaUM7Ozs7O0lBR2hDLCtCQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciwgSW5qZWN0YWJsZSwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIGRlYm91bmNlVGltZSwgZmlsdGVyLCBmaXJzdCwgbWFwLCBzd2l0Y2hNYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IERvY3VtZW50SW5kZXggfSBmcm9tICcuLi9tb2RlbHMvZG9jdW1lbnQnO1xuaW1wb3J0IHsgRW50aXR5U2VydmljZSB9IGZyb20gJy4uL21vZGVscy9lbnRpdHkuc2VydmljZSc7XG5cbmV4cG9ydCBjbGFzcyBTbHVnS2V5IHtcblx0aWQ/OiBudW1iZXI7XG5cdG1uZW1vbmljPzogc3RyaW5nO1xuXHRzbHVnPzogc3RyaW5nO1xufVxuXG5ASW5qZWN0YWJsZSh7XG5cdHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBTbHVnU2VydmljZSBleHRlbmRzIEVudGl0eVNlcnZpY2U8RG9jdW1lbnRJbmRleD4ge1xuXG5cdGdldCBjb2xsZWN0aW9uKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIGAvYXBpL3NsdWdgO1xuXHR9XG5cblx0cHJpdmF0ZSBrZXlzOiB7IFtrZXk6IHN0cmluZ106IFNsdWdLZXk7IH0gPSB7fTtcblx0cHJpdmF0ZSB2YWx1ZXMkOiBCZWhhdmlvclN1YmplY3Q8eyBba2V5OiBzdHJpbmddOiBzdHJpbmc7IH0+ID0gbmV3IEJlaGF2aW9yU3ViamVjdCh7fSk7XG5cdHByaXZhdGUgZW1pdHRlciQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdHB1YmxpYyBtaXNzaW5nSGFuZGxlcj86IEZ1bmN0aW9uO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByb3RlY3RlZCBpbmplY3RvcjogSW5qZWN0b3IsXG5cdCkge1xuXHRcdHN1cGVyKGluamVjdG9yKTtcblx0fVxuXG5cdHRyYW5zZm9ybShrZXk6IHN0cmluZyk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG5cdFx0Y29uc3QgdmFsdWVzID0gdGhpcy52YWx1ZXMkLmdldFZhbHVlKCk7XG5cdFx0aWYgKHZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG5cdFx0XHRyZXR1cm4gdmFsdWVzW2tleV07XG5cdFx0fSBlbHNlIGlmICghdGhpcy5rZXlzLmhhc093blByb3BlcnR5KGtleSkpIHtcblx0XHRcdHZhbHVlc1trZXldID0gbnVsbDtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLmtleXMsIGtleSwge1xuXHRcdFx0XHR2YWx1ZTogeyBtbmVtb25pYzoga2V5IH0sXG5cdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRcdHdyaXRhYmxlOiBmYWxzZSxcblx0XHRcdH0pO1xuXHRcdFx0dGhpcy5lbWl0dGVyJC5lbWl0KCk7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdH1cblxuXHR0cmFuc2Zvcm0kKGtleTogc3RyaW5nKTogT2JzZXJ2YWJsZTxzdHJpbmcgfCB1bmRlZmluZWQ+IHtcblx0XHRjb25zdCB2YWx1ZXMgPSB0aGlzLnZhbHVlcyQuZ2V0VmFsdWUoKTtcblx0XHRpZiAodmFsdWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcblx0XHRcdHJldHVybiBvZih2YWx1ZXNba2V5XSk7XG5cdFx0fSBlbHNlIGlmICghdGhpcy5rZXlzLmhhc093blByb3BlcnR5KGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLmtleXMsIGtleSwge1xuXHRcdFx0XHR2YWx1ZTogeyBtbmVtb25pYzoga2V5IH0sXG5cdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRcdHdyaXRhYmxlOiBmYWxzZSxcblx0XHRcdH0pO1xuXHRcdFx0dGhpcy5lbWl0dGVyJC5lbWl0KCk7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLnZhbHVlcyQucGlwZShcblx0XHRcdG1hcCh2YWx1ZXMgPT4gdmFsdWVzW2tleV0pXG5cdFx0KTtcblx0fVxuXG5cdG9ic2VydmUkKCk6IE9ic2VydmFibGU8eyBba2V5OiBzdHJpbmddOiBzdHJpbmc7IH0+IHtcblx0XHRyZXR1cm4gdGhpcy5lbWl0dGVyJC5waXBlKFxuXHRcdFx0ZGVib3VuY2VUaW1lKDEpLFxuXHRcdFx0c3dpdGNoTWFwKHggPT4gdGhpcy5jb2xsZWN0JCgpKSxcblx0XHRcdGZpbHRlcih4ID0+IHggIT09IG51bGwpLFxuXHRcdFx0Zmlyc3QoKSwgLy9cblx0XHQpO1xuXHR9XG5cblx0Y29sbGVjdCQoKTogT2JzZXJ2YWJsZTx7IFtrZXk6IHN0cmluZ106IHN0cmluZzsgfT4ge1xuXHRcdGlmIChPYmplY3Qua2V5cyh0aGlzLmtleXMpLmxlbmd0aCkge1xuXHRcdFx0Y29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMua2V5cykubWFwKHggPT4gdGhpcy5rZXlzW3hdKTtcblx0XHRcdHRoaXMua2V5cyA9IHt9O1xuXHRcdFx0cmV0dXJuIHRoaXMuc3RhdGVQb3N0KGtleXMpLnBpcGUoXG5cdFx0XHRcdG1hcCgoaXRlbXM6IERvY3VtZW50SW5kZXhbXSkgPT4ge1xuXHRcdFx0XHRcdHJldHVybiBpdGVtcy5yZWR1Y2UoKHZhbHVlcywgeCkgPT4ge1xuXHRcdFx0XHRcdFx0dmFsdWVzW3gubW5lbW9uaWNdID0gW3guc2x1Z107XG5cdFx0XHRcdFx0XHRyZXR1cm4gdmFsdWVzO1xuXHRcdFx0XHRcdH0sIHt9KTtcblx0XHRcdFx0fSksXG5cdFx0XHRcdHRhcCgoc2x1Z3M6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nOyB9KSA9PiB7XG5cdFx0XHRcdFx0Y29uc3QgdmFsdWVzID0gdGhpcy52YWx1ZXMkLmdldFZhbHVlKCk7XG5cdFx0XHRcdFx0T2JqZWN0LmFzc2lnbih2YWx1ZXMsIHNsdWdzKTtcblx0XHRcdFx0XHR0aGlzLnZhbHVlcyQubmV4dCh2YWx1ZXMpO1xuXHRcdFx0XHR9KSxcblx0XHRcdFx0Y2F0Y2hFcnJvcihlcnJvciA9PiB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xuXHRcdFx0XHRcdGNvbnN0IGxhYmVscyA9IGtleXMucmVkdWNlKCh2YWx1ZXMsIHgpID0+IHtcblx0XHRcdFx0XHRcdHZhbHVlc1t4Lm1uZW1vbmljXSA9IG51bGw7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdmFsdWVzO1xuXHRcdFx0XHRcdH0sIHt9KTtcblx0XHRcdFx0XHRjb25zdCB2YWx1ZXMgPSB0aGlzLnZhbHVlcyQuZ2V0VmFsdWUoKTtcblx0XHRcdFx0XHRPYmplY3QuYXNzaWduKHZhbHVlcywgbGFiZWxzKTtcblx0XHRcdFx0XHRyZXR1cm4gb2YobnVsbCk7XG5cdFx0XHRcdH0pLFxuXHRcdFx0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIG9mKG51bGwpO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=