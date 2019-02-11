/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { Subject } from 'rxjs';
export class DisposableComponent {
    constructor() {
        this.unsubscribe = new Subject();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.unsubscribe.next();
        this.unsubscribe.complete();
        // console.log('DisposableComponent.ngOnDestroy', this);
    }
}
DisposableComponent.decorators = [
    { type: Component, args: [{
                template: ''
            }] }
];
if (false) {
    /**
     * @type {?}
     * @protected
     */
    DisposableComponent.prototype.unsubscribe;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzcG9zYWJsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb3JlLyIsInNvdXJjZXMiOlsibGliL2Rpc3Bvc2FibGUvZGlzcG9zYWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDckQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUsvQixNQUFNLE9BQU8sbUJBQW1CO0lBSGhDO1FBS1csZ0JBQVcsR0FBUSxJQUFJLE9BQU8sRUFBRSxDQUFDO0lBUTVDLENBQUM7Ozs7SUFOQSxXQUFXO1FBQ1YsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzVCLHdEQUF3RDtJQUN6RCxDQUFDOzs7WUFYRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLEVBQUU7YUFDWjs7Ozs7OztJQUdBLDBDQUEyQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG5cdHRlbXBsYXRlOiAnJ1xufSlcbmV4cG9ydCBjbGFzcyBEaXNwb3NhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcblxuXHRwcm90ZWN0ZWQgdW5zdWJzY3JpYmU6IGFueSA9IG5ldyBTdWJqZWN0KCk7XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0dGhpcy51bnN1YnNjcmliZS5uZXh0KCk7XG5cdFx0dGhpcy51bnN1YnNjcmliZS5jb21wbGV0ZSgpO1xuXHRcdC8vIGNvbnNvbGUubG9nKCdEaXNwb3NhYmxlQ29tcG9uZW50Lm5nT25EZXN0cm95JywgdGhpcyk7XG5cdH1cblxufVxuIl19