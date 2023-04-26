/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { DisposableComponent } from '@designr/core';
var SectionsComponent = /** @class */ (function (_super) {
    tslib_1.__extends(SectionsComponent, _super);
    function SectionsComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SectionsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'section-sections',
                    template: "<ng-container *ngFor=\"let section of sections\">\n\t<section-outlet [section]=\"section\"></section-outlet>\n</ng-container>"
                }] }
    ];
    SectionsComponent.propDecorators = {
        sections: [{ type: Input }]
    };
    return SectionsComponent;
}(DisposableComponent));
export { SectionsComponent };
if (false) {
    /** @type {?} */
    SectionsComponent.prototype.sections;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VjdGlvbnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvc2VjdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9zZWN0aW9uL3NlY3Rpb25zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUdwRDtJQU11Qyw2Q0FBbUI7SUFOMUQ7O0lBVUEsQ0FBQzs7Z0JBVkEsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLFFBQVEsRUFBRSwrSEFFSztpQkFDZjs7OzJCQUdDLEtBQUs7O0lBRVAsd0JBQUM7Q0FBQSxBQVZELENBTXVDLG1CQUFtQixHQUl6RDtTQUpZLGlCQUFpQjs7O0lBRTdCLHFDQUE2QiIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERpc3Bvc2FibGVDb21wb25lbnQgfSBmcm9tICdAZGVzaWduci9jb3JlJztcclxuaW1wb3J0IHsgU2VjdGlvbiB9IGZyb20gJy4vc2VjdGlvbic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ3NlY3Rpb24tc2VjdGlvbnMnLFxyXG5cdHRlbXBsYXRlOiBgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgc2VjdGlvbiBvZiBzZWN0aW9uc1wiPlxyXG5cdDxzZWN0aW9uLW91dGxldCBbc2VjdGlvbl09XCJzZWN0aW9uXCI+PC9zZWN0aW9uLW91dGxldD5cclxuPC9uZy1jb250YWluZXI+YCxcclxufSlcclxuZXhwb3J0IGNsYXNzIFNlY3Rpb25zQ29tcG9uZW50IGV4dGVuZHMgRGlzcG9zYWJsZUNvbXBvbmVudCB7XHJcblxyXG5cdEBJbnB1dCgpIHNlY3Rpb25zOiBTZWN0aW9uW107XHJcblxyXG59XHJcbiJdfQ==