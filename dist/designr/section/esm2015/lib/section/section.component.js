import { Component, Input } from '@angular/core';
import { DisposableComponent } from '@designr/core';
import { Section } from './section';
import * as i0 from "@angular/core";
export class SectionComponent extends DisposableComponent {
}
SectionComponent.ɵfac = function SectionComponent_Factory(t) { return ɵSectionComponent_BaseFactory(t || SectionComponent); };
SectionComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SectionComponent, selectors: [["core-section"]], inputs: { section: "section" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 2, vars: 0, consts: [[1, "section"]], template: function SectionComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "section", 0);
        i0.ɵɵtext(1, "Section not found!");
        i0.ɵɵelementEnd();
    } }, encapsulation: 2 });
const ɵSectionComponent_BaseFactory = i0.ɵɵgetInheritedFactory(SectionComponent);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SectionComponent, [{
        type: Component,
        args: [{
                selector: 'core-section',
                template: `<section class="section">Section not found!</section>`,
            }]
    }], null, { section: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VjdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9zZWN0aW9uLyIsInNvdXJjZXMiOlsibGliL3NlY3Rpb24vc2VjdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxXQUFXLENBQUM7O0FBVXBDLE1BQU0sT0FBTyxnQkFBaUIsU0FBUSxtQkFBbUI7O3lHQUE1QyxnQkFBZ0I7cURBQWhCLGdCQUFnQjtRQUZqQixrQ0FBeUI7UUFBQSxrQ0FBa0I7UUFBQSxpQkFBVTs7K0RBRXBELGdCQUFnQjtrREFBaEIsZ0JBQWdCO2NBSjVCLFNBQVM7ZUFBQztnQkFDVixRQUFRLEVBQUUsY0FBYztnQkFDeEIsUUFBUSxFQUFFLHVEQUF1RDthQUNqRTs7a0JBRUMsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGlzcG9zYWJsZUNvbXBvbmVudCB9IGZyb20gJ0BkZXNpZ25yL2NvcmUnO1xuaW1wb3J0IHsgU2VjdGlvbiB9IGZyb20gJy4vc2VjdGlvbic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VjdGlvbkluaXQge1xuXHRTZWN0aW9uSW5pdCgpOiB2b2lkO1xufVxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdjb3JlLXNlY3Rpb24nLFxuXHR0ZW1wbGF0ZTogYDxzZWN0aW9uIGNsYXNzPVwic2VjdGlvblwiPlNlY3Rpb24gbm90IGZvdW5kITwvc2VjdGlvbj5gLFxufSlcbmV4cG9ydCBjbGFzcyBTZWN0aW9uQ29tcG9uZW50IGV4dGVuZHMgRGlzcG9zYWJsZUNvbXBvbmVudCB7XG5cdEBJbnB1dCgpIHNlY3Rpb246IFNlY3Rpb247XG59XG4iXX0=