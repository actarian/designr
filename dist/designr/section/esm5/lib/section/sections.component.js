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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VjdGlvbnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvc2VjdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9zZWN0aW9uL3NlY3Rpb25zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUdwRDtJQU11Qyw2Q0FBbUI7SUFOMUQ7O0lBVUEsQ0FBQzs7Z0JBVkEsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLFFBQVEsRUFBRSwrSEFFSztpQkFDZjs7OzJCQUdDLEtBQUs7O0lBRVAsd0JBQUM7Q0FBQSxBQVZELENBTXVDLG1CQUFtQixHQUl6RDtTQUpZLGlCQUFpQjs7O0lBRTdCLHFDQUE2QiIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGlzcG9zYWJsZUNvbXBvbmVudCB9IGZyb20gJ0BkZXNpZ25yL2NvcmUnO1xuaW1wb3J0IHsgU2VjdGlvbiB9IGZyb20gJy4vc2VjdGlvbic7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ3NlY3Rpb24tc2VjdGlvbnMnLFxuXHR0ZW1wbGF0ZTogYDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IHNlY3Rpb24gb2Ygc2VjdGlvbnNcIj5cblx0PHNlY3Rpb24tb3V0bGV0IFtzZWN0aW9uXT1cInNlY3Rpb25cIj48L3NlY3Rpb24tb3V0bGV0PlxuPC9uZy1jb250YWluZXI+YCxcbn0pXG5leHBvcnQgY2xhc3MgU2VjdGlvbnNDb21wb25lbnQgZXh0ZW5kcyBEaXNwb3NhYmxlQ29tcG9uZW50IHtcblxuXHRASW5wdXQoKSBzZWN0aW9uczogU2VjdGlvbltdO1xuXG59XG4iXX0=