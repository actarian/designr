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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzcG9zYWJsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9jb3JlLyIsInNvdXJjZXMiOlsibGliL2Rpc3Bvc2FibGUvZGlzcG9zYWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDckQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUvQjtJQUFBO1FBS1csZ0JBQVcsR0FBUSxJQUFJLE9BQU8sRUFBRSxDQUFDO0lBUTVDLENBQUM7Ozs7SUFOQSx5Q0FBVzs7O0lBQVg7UUFDQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDNUIsd0RBQXdEO0lBQ3pELENBQUM7O2dCQVhELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsRUFBRTtpQkFDWjs7SUFXRCwwQkFBQztDQUFBLEFBYkQsSUFhQztTQVZZLG1CQUFtQjs7Ozs7O0lBRS9CLDBDQUEyQyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHR0ZW1wbGF0ZTogJydcclxufSlcclxuZXhwb3J0IGNsYXNzIERpc3Bvc2FibGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG5cclxuXHRwcm90ZWN0ZWQgdW5zdWJzY3JpYmU6IGFueSA9IG5ldyBTdWJqZWN0KCk7XHJcblxyXG5cdG5nT25EZXN0cm95KCkge1xyXG5cdFx0dGhpcy51bnN1YnNjcmliZS5uZXh0KCk7XHJcblx0XHR0aGlzLnVuc3Vic2NyaWJlLmNvbXBsZXRlKCk7XHJcblx0XHQvLyBjb25zb2xlLmxvZygnRGlzcG9zYWJsZUNvbXBvbmVudC5uZ09uRGVzdHJveScsIHRoaXMpO1xyXG5cdH1cclxuXHJcbn1cclxuIl19