/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Input, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';
export class DefaultContentDirective {
    /**
     * @param {?} element
     * @param {?} container
     * @param {?} renderer
     */
    constructor(element, container, renderer) {
        this.container = container;
        this.renderer = renderer;
        this.hasContent = true;
        this.element = element.nativeElement;
    }
    /**
     * @return {?}
     */
    ngAfterContentChecked() {
        /** @type {?} */
        let hasContent = false;
        console.log('DefaultContentDirective', this.element.childNodes);
        for (let i = this.element.childNodes.length - 1; i >= 0; --i) {
            /** @type {?} */
            const node = this.element.childNodes[i];
            if (node.nodeType === 1 || node.nodeType === 3) {
                hasContent = true;
                break;
            }
        }
        if (hasContent !== this.hasContent) {
            this.hasContent = hasContent;
            if (hasContent) {
                // this.renderer.removeClass(this.element, 'is-empty');
                this.container.clear();
            }
            else {
                // this.renderer.addClass(this.element, 'is-empty');
                this.container.createEmbeddedView(this.default);
            }
        }
    }
}
DefaultContentDirective.decorators = [
    { type: Directive, args: [{
                selector: '[default]',
            },] }
];
/** @nocollapse */
DefaultContentDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: ViewContainerRef },
    { type: Renderer2 }
];
DefaultContentDirective.propDecorators = {
    default: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    DefaultContentDirective.prototype.default;
    /**
     * @type {?}
     * @private
     */
    DefaultContentDirective.prototype.element;
    /**
     * @type {?}
     * @private
     */
    DefaultContentDirective.prototype.hasContent;
    /**
     * @type {?}
     * @private
     */
    DefaultContentDirective.prototype.container;
    /**
     * @type {?}
     * @private
     */
    DefaultContentDirective.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1jb250ZW50LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJsaWIvY29udGVudC9kZWZhdWx0LWNvbnRlbnQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQXVCLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFLNUgsTUFBTSxPQUFPLHVCQUF1Qjs7Ozs7O0lBTW5DLFlBQ0MsT0FBbUIsRUFDWCxTQUEyQixFQUMzQixRQUFtQjtRQURuQixjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUMzQixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBTHBCLGVBQVUsR0FBRyxJQUFJLENBQUM7UUFNekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDO0lBQ3RDLENBQUM7Ozs7SUFFRCxxQkFBcUI7O1lBQ2hCLFVBQVUsR0FBRyxLQUFLO1FBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNoRSxLQUFLLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRTs7a0JBQ3ZELElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDdkMsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLENBQUMsRUFBRTtnQkFDL0MsVUFBVSxHQUFHLElBQUksQ0FBQztnQkFDbEIsTUFBTTthQUNOO1NBQ0Q7UUFDRCxJQUFJLFVBQVUsS0FBSyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25DLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1lBQzdCLElBQUksVUFBVSxFQUFFO2dCQUNmLHVEQUF1RDtnQkFDdkQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQzthQUN2QjtpQkFBTTtnQkFDTixvREFBb0Q7Z0JBQ3BELElBQUksQ0FBQyxTQUFTLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ2hEO1NBQ0Q7SUFDRixDQUFDOzs7WUFwQ0QsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxXQUFXO2FBQ3JCOzs7O1lBSndDLFVBQVU7WUFBaUMsZ0JBQWdCO1lBQXhDLFNBQVM7OztzQkFPbkUsS0FBSzs7OztJQUFOLDBDQUFtQzs7Ozs7SUFDbkMsMENBQTZCOzs7OztJQUM3Qiw2Q0FBMEI7Ozs7O0lBSXpCLDRDQUFtQzs7Ozs7SUFDbkMsMkNBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJDb250ZW50Q2hlY2tlZCwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgUmVuZGVyZXIyLCBUZW1wbGF0ZVJlZiwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdbZGVmYXVsdF0nLFxufSlcbmV4cG9ydCBjbGFzcyBEZWZhdWx0Q29udGVudERpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyQ29udGVudENoZWNrZWQge1xuXG5cdEBJbnB1dCgpIGRlZmF1bHQ6IFRlbXBsYXRlUmVmPGFueT47XG5cdHByaXZhdGUgZWxlbWVudDogSFRNTEVsZW1lbnQ7XG5cdHByaXZhdGUgaGFzQ29udGVudCA9IHRydWU7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0ZWxlbWVudDogRWxlbWVudFJlZixcblx0XHRwcml2YXRlIGNvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZixcblx0XHRwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcblx0XHR0aGlzLmVsZW1lbnQgPSBlbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG5cdH1cblxuXHRuZ0FmdGVyQ29udGVudENoZWNrZWQoKTogdm9pZCB7XG5cdFx0bGV0IGhhc0NvbnRlbnQgPSBmYWxzZTtcblx0XHRjb25zb2xlLmxvZygnRGVmYXVsdENvbnRlbnREaXJlY3RpdmUnLCB0aGlzLmVsZW1lbnQuY2hpbGROb2Rlcyk7XG5cdFx0Zm9yIChsZXQgaSA9IHRoaXMuZWxlbWVudC5jaGlsZE5vZGVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG5cdFx0XHRjb25zdCBub2RlID0gdGhpcy5lbGVtZW50LmNoaWxkTm9kZXNbaV07XG5cdFx0XHRpZiAobm9kZS5ub2RlVHlwZSA9PT0gMSB8fCBub2RlLm5vZGVUeXBlID09PSAzKSB7XG5cdFx0XHRcdGhhc0NvbnRlbnQgPSB0cnVlO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKGhhc0NvbnRlbnQgIT09IHRoaXMuaGFzQ29udGVudCkge1xuXHRcdFx0dGhpcy5oYXNDb250ZW50ID0gaGFzQ29udGVudDtcblx0XHRcdGlmIChoYXNDb250ZW50KSB7XG5cdFx0XHRcdC8vIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50LCAnaXMtZW1wdHknKTtcblx0XHRcdFx0dGhpcy5jb250YWluZXIuY2xlYXIoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50LCAnaXMtZW1wdHknKTtcblx0XHRcdFx0dGhpcy5jb250YWluZXIuY3JlYXRlRW1iZWRkZWRWaWV3KHRoaXMuZGVmYXVsdCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==