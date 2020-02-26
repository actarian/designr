import { __extends } from "tslib";
import { Component, Input } from '@angular/core';
import { DisposableComponent } from '@designr/core';
import { Section } from './section';
import * as i0 from "@angular/core";
var SectionComponent = /** @class */ (function (_super) {
    __extends(SectionComponent, _super);
    function SectionComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SectionComponent.ɵfac = function SectionComponent_Factory(t) { return ɵSectionComponent_BaseFactory(t || SectionComponent); };
    SectionComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SectionComponent, selectors: [["core-section"]], inputs: { section: "section" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 2, vars: 0, consts: [[1, "section"]], template: function SectionComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 0);
            i0.ɵɵtext(1, "Section not found!");
            i0.ɵɵelementEnd();
        } }, encapsulation: 2 });
    return SectionComponent;
}(DisposableComponent));
export { SectionComponent };
var ɵSectionComponent_BaseFactory = i0.ɵɵgetInheritedFactory(SectionComponent);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SectionComponent, [{
        type: Component,
        args: [{
                selector: 'core-section',
                template: "<section class=\"section\">Section not found!</section>",
            }]
    }], null, { section: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VjdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9zZWN0aW9uLyIsInNvdXJjZXMiOlsibGliL3NlY3Rpb24vc2VjdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sV0FBVyxDQUFDOztBQU1wQztJQUlzQyxvQ0FBbUI7SUFKekQ7O0tBTUM7NkdBRlksZ0JBQWdCO3lEQUFoQixnQkFBZ0I7WUFGakIsa0NBQXlCO1lBQUEsa0NBQWtCO1lBQUEsaUJBQVU7OzJCQVhqRTtDQWVDLEFBTkQsQ0FJc0MsbUJBQW1CLEdBRXhEO1NBRlksZ0JBQWdCOzZEQUFoQixnQkFBZ0I7a0RBQWhCLGdCQUFnQjtjQUo1QixTQUFTO2VBQUM7Z0JBQ1YsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLFFBQVEsRUFBRSx5REFBdUQ7YUFDakU7O2tCQUVDLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERpc3Bvc2FibGVDb21wb25lbnQgfSBmcm9tICdAZGVzaWduci9jb3JlJztcbmltcG9ydCB7IFNlY3Rpb24gfSBmcm9tICcuL3NlY3Rpb24nO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNlY3Rpb25Jbml0IHtcblx0U2VjdGlvbkluaXQoKTogdm9pZDtcbn1cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnY29yZS1zZWN0aW9uJyxcblx0dGVtcGxhdGU6IGA8c2VjdGlvbiBjbGFzcz1cInNlY3Rpb25cIj5TZWN0aW9uIG5vdCBmb3VuZCE8L3NlY3Rpb24+YCxcbn0pXG5leHBvcnQgY2xhc3MgU2VjdGlvbkNvbXBvbmVudCBleHRlbmRzIERpc3Bvc2FibGVDb21wb25lbnQge1xuXHRASW5wdXQoKSBzZWN0aW9uOiBTZWN0aW9uO1xufVxuIl19