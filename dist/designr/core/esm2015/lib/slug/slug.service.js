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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2x1Zy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9zbHVnL3NsdWcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25FLE9BQU8sRUFBRSxlQUFlLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3ZELE9BQU8sRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU5RixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7O0FBRXpELE1BQU0sT0FBTyxPQUFPO0NBSW5COzs7SUFIQSxxQkFBWTs7SUFDWiwyQkFBa0I7O0lBQ2xCLHVCQUFjOztBQU1mLE1BQU0sT0FBTyxXQUFZLFNBQVEsYUFBNEI7Ozs7SUFZNUQsWUFDVyxRQUFrQjtRQUU1QixLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7UUFGTixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBUHJCLFNBQUksR0FBZ0MsRUFBRSxDQUFDO1FBQ3ZDLFlBQU8sR0FBZ0QsSUFBSSxlQUFlLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDL0UsYUFBUSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO0lBUXpELENBQUM7Ozs7SUFkRCxJQUFJLFVBQVU7UUFDYixPQUFPLFdBQVcsQ0FBQztJQUNwQixDQUFDOzs7OztJQWNELFNBQVMsQ0FBQyxHQUFXOztjQUNkLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRTtRQUN0QyxJQUFJLE1BQU0sQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDL0IsT0FBTyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDbkI7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QUM7Z0JBQzdCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzNCLENBQUMsRUFBQyxFQUNGLFVBQVU7Ozs7WUFBQyxLQUFLLENBQUMsRUFBRTtnQkFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQzs7c0JBQ2IsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNOzs7OztnQkFBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtvQkFDeEMsTUFBTSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxJQUFJLENBQUM7b0JBQzFCLE9BQU8sTUFBTSxDQUFDO2dCQUNmLENBQUMsR0FBRSxFQUFFLENBQUM7O3NCQUNBLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRTtnQkFDdEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7Z0JBQzlCLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2pCLENBQUMsRUFBQyxDQUNGLENBQUM7U0FDRjthQUFNO1lBQ04sT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDaEI7SUFDRixDQUFDOzs7WUE3RkQsVUFBVSxTQUFDO2dCQUNYLFVBQVUsRUFBRSxNQUFNO2FBQ2xCOzs7O1lBZGtDLFFBQVE7Ozs7Ozs7O0lBcUIxQywyQkFBK0M7Ozs7O0lBQy9DLDhCQUF1Rjs7Ozs7SUFDdkYsK0JBQXlEOztJQUV6RCxxQ0FBaUM7Ozs7O0lBR2hDLCtCQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciwgSW5qZWN0YWJsZSwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBjYXRjaEVycm9yLCBkZWJvdW5jZVRpbWUsIGZpbHRlciwgZmlyc3QsIG1hcCwgc3dpdGNoTWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IERvY3VtZW50SW5kZXggfSBmcm9tICcuLi9tb2RlbHMvZG9jdW1lbnQnO1xyXG5pbXBvcnQgeyBFbnRpdHlTZXJ2aWNlIH0gZnJvbSAnLi4vbW9kZWxzL2VudGl0eS5zZXJ2aWNlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBTbHVnS2V5IHtcclxuXHRpZD86IG51bWJlcjtcclxuXHRtbmVtb25pYz86IHN0cmluZztcclxuXHRzbHVnPzogc3RyaW5nO1xyXG59XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcblx0cHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTbHVnU2VydmljZSBleHRlbmRzIEVudGl0eVNlcnZpY2U8RG9jdW1lbnRJbmRleD4ge1xyXG5cclxuXHRnZXQgY29sbGVjdGlvbigpOiBzdHJpbmcge1xyXG5cdFx0cmV0dXJuIGAvYXBpL3NsdWdgO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBrZXlzOiB7IFtrZXk6IHN0cmluZ106IFNsdWdLZXk7IH0gPSB7fTtcclxuXHRwcml2YXRlIHZhbHVlcyQ6IEJlaGF2aW9yU3ViamVjdDx7IFtrZXk6IHN0cmluZ106IHN0cmluZzsgfT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHt9KTtcclxuXHRwcml2YXRlIGVtaXR0ZXIkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcblx0cHVibGljIG1pc3NpbmdIYW5kbGVyPzogRnVuY3Rpb247XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJvdGVjdGVkIGluamVjdG9yOiBJbmplY3RvcixcclxuXHQpIHtcclxuXHRcdHN1cGVyKGluamVjdG9yKTtcclxuXHR9XHJcblxyXG5cdHRyYW5zZm9ybShrZXk6IHN0cmluZyk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XHJcblx0XHRjb25zdCB2YWx1ZXMgPSB0aGlzLnZhbHVlcyQuZ2V0VmFsdWUoKTtcclxuXHRcdGlmICh2YWx1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG5cdFx0XHRyZXR1cm4gdmFsdWVzW2tleV07XHJcblx0XHR9IGVsc2UgaWYgKCF0aGlzLmtleXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG5cdFx0XHR2YWx1ZXNba2V5XSA9IG51bGw7XHJcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLmtleXMsIGtleSwge1xyXG5cdFx0XHRcdHZhbHVlOiB7IG1uZW1vbmljOiBrZXkgfSxcclxuXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxyXG5cdFx0XHRcdHdyaXRhYmxlOiBmYWxzZSxcclxuXHRcdFx0fSk7XHJcblx0XHRcdHRoaXMuZW1pdHRlciQuZW1pdCgpO1xyXG5cdFx0XHRyZXR1cm4gbnVsbDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHRyYW5zZm9ybSQoa2V5OiBzdHJpbmcpOiBPYnNlcnZhYmxlPHN0cmluZyB8IHVuZGVmaW5lZD4ge1xyXG5cdFx0Y29uc3QgdmFsdWVzID0gdGhpcy52YWx1ZXMkLmdldFZhbHVlKCk7XHJcblx0XHRpZiAodmFsdWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuXHRcdFx0cmV0dXJuIG9mKHZhbHVlc1trZXldKTtcclxuXHRcdH0gZWxzZSBpZiAoIXRoaXMua2V5cy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLmtleXMsIGtleSwge1xyXG5cdFx0XHRcdHZhbHVlOiB7IG1uZW1vbmljOiBrZXkgfSxcclxuXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxyXG5cdFx0XHRcdHdyaXRhYmxlOiBmYWxzZSxcclxuXHRcdFx0fSk7XHJcblx0XHRcdHRoaXMuZW1pdHRlciQuZW1pdCgpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRoaXMudmFsdWVzJC5waXBlKFxyXG5cdFx0XHRtYXAodmFsdWVzID0+IHZhbHVlc1trZXldKVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cdG9ic2VydmUkKCk6IE9ic2VydmFibGU8eyBba2V5OiBzdHJpbmddOiBzdHJpbmc7IH0+IHtcclxuXHRcdHJldHVybiB0aGlzLmVtaXR0ZXIkLnBpcGUoXHJcblx0XHRcdGRlYm91bmNlVGltZSgxKSxcclxuXHRcdFx0c3dpdGNoTWFwKHggPT4gdGhpcy5jb2xsZWN0JCgpKSxcclxuXHRcdFx0ZmlsdGVyKHggPT4geCAhPT0gbnVsbCksXHJcblx0XHRcdGZpcnN0KCksIC8vXHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblx0Y29sbGVjdCQoKTogT2JzZXJ2YWJsZTx7IFtrZXk6IHN0cmluZ106IHN0cmluZzsgfT4ge1xyXG5cdFx0aWYgKE9iamVjdC5rZXlzKHRoaXMua2V5cykubGVuZ3RoKSB7XHJcblx0XHRcdGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh0aGlzLmtleXMpLm1hcCh4ID0+IHRoaXMua2V5c1t4XSk7XHJcblx0XHRcdHRoaXMua2V5cyA9IHt9O1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5zdGF0ZVBvc3Qoa2V5cykucGlwZShcclxuXHRcdFx0XHRtYXAoKGl0ZW1zOiBEb2N1bWVudEluZGV4W10pID0+IHtcclxuXHRcdFx0XHRcdHJldHVybiBpdGVtcy5yZWR1Y2UoKHZhbHVlcywgeCkgPT4ge1xyXG5cdFx0XHRcdFx0XHR2YWx1ZXNbeC5tbmVtb25pY10gPSBbeC5zbHVnXTtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIHZhbHVlcztcclxuXHRcdFx0XHRcdH0sIHt9KTtcclxuXHRcdFx0XHR9KSxcclxuXHRcdFx0XHR0YXAoKHNsdWdzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZzsgfSkgPT4ge1xyXG5cdFx0XHRcdFx0Y29uc3QgdmFsdWVzID0gdGhpcy52YWx1ZXMkLmdldFZhbHVlKCk7XHJcblx0XHRcdFx0XHRPYmplY3QuYXNzaWduKHZhbHVlcywgc2x1Z3MpO1xyXG5cdFx0XHRcdFx0dGhpcy52YWx1ZXMkLm5leHQodmFsdWVzKTtcclxuXHRcdFx0XHR9KSxcclxuXHRcdFx0XHRjYXRjaEVycm9yKGVycm9yID0+IHtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHRcdFx0XHRcdGNvbnN0IGxhYmVscyA9IGtleXMucmVkdWNlKCh2YWx1ZXMsIHgpID0+IHtcclxuXHRcdFx0XHRcdFx0dmFsdWVzW3gubW5lbW9uaWNdID0gbnVsbDtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIHZhbHVlcztcclxuXHRcdFx0XHRcdH0sIHt9KTtcclxuXHRcdFx0XHRcdGNvbnN0IHZhbHVlcyA9IHRoaXMudmFsdWVzJC5nZXRWYWx1ZSgpO1xyXG5cdFx0XHRcdFx0T2JqZWN0LmFzc2lnbih2YWx1ZXMsIGxhYmVscyk7XHJcblx0XHRcdFx0XHRyZXR1cm4gb2YobnVsbCk7XHJcblx0XHRcdFx0fSksXHJcblx0XHRcdCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gb2YobnVsbCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxufVxyXG4iXX0=