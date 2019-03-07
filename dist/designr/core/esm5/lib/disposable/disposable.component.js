/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { Subject } from 'rxjs';
var DisposableComponent = /** @class */ (function () {
    function DisposableComponent() {
        this.unsubscribe = new Subject();
    }
    /**
     * @return {?}
     */
    DisposableComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
        // console.log('DisposableComponent.ngOnDestroy', this);
    };
    DisposableComponent.decorators = [
        { type: Component, args: [{
                    template: ''
                }] }
    ];
    return DisposableComponent;
}());
export { DisposableComponent };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    DisposableComponent.prototype.unsubscribe;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzcG9zYWJsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb3JlLyIsInNvdXJjZXMiOlsibGliL2Rpc3Bvc2FibGUvZGlzcG9zYWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDckQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUvQjtJQUFBO1FBS1csZ0JBQVcsR0FBUSxJQUFJLE9BQU8sRUFBRSxDQUFDO0lBUTVDLENBQUM7Ozs7SUFOQSx5Q0FBVzs7O0lBQVg7UUFDQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDNUIsd0RBQXdEO0lBQ3pELENBQUM7O2dCQVhELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsRUFBRTtpQkFDWjs7SUFXRCwwQkFBQztDQUFBLEFBYkQsSUFhQztTQVZZLG1CQUFtQjs7Ozs7O0lBRS9CLDBDQUEyQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG5cdHRlbXBsYXRlOiAnJ1xufSlcbmV4cG9ydCBjbGFzcyBEaXNwb3NhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcblxuXHRwcm90ZWN0ZWQgdW5zdWJzY3JpYmU6IGFueSA9IG5ldyBTdWJqZWN0KCk7XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0dGhpcy51bnN1YnNjcmliZS5uZXh0KCk7XG5cdFx0dGhpcy51bnN1YnNjcmliZS5jb21wbGV0ZSgpO1xuXHRcdC8vIGNvbnNvbGUubG9nKCdEaXNwb3NhYmxlQ29tcG9uZW50Lm5nT25EZXN0cm95JywgdGhpcyk7XG5cdH1cblxufVxuIl19