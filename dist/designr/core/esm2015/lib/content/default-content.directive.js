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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1jb250ZW50LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJsaWIvY29udGVudC9kZWZhdWx0LWNvbnRlbnQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQXVCLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFLNUgsTUFBTSxPQUFPLHVCQUF1Qjs7Ozs7O0lBTW5DLFlBQ0MsT0FBbUIsRUFDWCxTQUEyQixFQUMzQixRQUFtQjtRQURuQixjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUMzQixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBTHBCLGVBQVUsR0FBRyxJQUFJLENBQUM7UUFNekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDO0lBQ3RDLENBQUM7Ozs7SUFFRCxxQkFBcUI7O1lBQ2hCLFVBQVUsR0FBRyxLQUFLO1FBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNoRSxLQUFLLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRTs7a0JBQ3ZELElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDdkMsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLENBQUMsRUFBRTtnQkFDL0MsVUFBVSxHQUFHLElBQUksQ0FBQztnQkFDbEIsTUFBTTthQUNOO1NBQ0Q7UUFDRCxJQUFJLFVBQVUsS0FBSyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25DLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1lBQzdCLElBQUksVUFBVSxFQUFFO2dCQUNmLHVEQUF1RDtnQkFDdkQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQzthQUN2QjtpQkFBTTtnQkFDTixvREFBb0Q7Z0JBQ3BELElBQUksQ0FBQyxTQUFTLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ2hEO1NBQ0Q7SUFDRixDQUFDOzs7WUFwQ0QsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxXQUFXO2FBQ3JCOzs7O1lBSndDLFVBQVU7WUFBaUMsZ0JBQWdCO1lBQXhDLFNBQVM7OztzQkFPbkUsS0FBSzs7OztJQUFOLDBDQUFtQzs7Ozs7SUFDbkMsMENBQTZCOzs7OztJQUM3Qiw2Q0FBMEI7Ozs7O0lBSXpCLDRDQUFtQzs7Ozs7SUFDbkMsMkNBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJDb250ZW50Q2hlY2tlZCwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgUmVuZGVyZXIyLCBUZW1wbGF0ZVJlZiwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcblx0c2VsZWN0b3I6ICdbZGVmYXVsdF0nLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGVmYXVsdENvbnRlbnREaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRDaGVja2VkIHtcclxuXHJcblx0QElucHV0KCkgZGVmYXVsdDogVGVtcGxhdGVSZWY8YW55PjtcclxuXHRwcml2YXRlIGVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG5cdHByaXZhdGUgaGFzQ29udGVudCA9IHRydWU7XHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0ZWxlbWVudDogRWxlbWVudFJlZixcclxuXHRcdHByaXZhdGUgY29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmLFxyXG5cdFx0cHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7XHJcblx0XHR0aGlzLmVsZW1lbnQgPSBlbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XHJcblx0fVxyXG5cclxuXHRuZ0FmdGVyQ29udGVudENoZWNrZWQoKTogdm9pZCB7XHJcblx0XHRsZXQgaGFzQ29udGVudCA9IGZhbHNlO1xyXG5cdFx0Y29uc29sZS5sb2coJ0RlZmF1bHRDb250ZW50RGlyZWN0aXZlJywgdGhpcy5lbGVtZW50LmNoaWxkTm9kZXMpO1xyXG5cdFx0Zm9yIChsZXQgaSA9IHRoaXMuZWxlbWVudC5jaGlsZE5vZGVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XHJcblx0XHRcdGNvbnN0IG5vZGUgPSB0aGlzLmVsZW1lbnQuY2hpbGROb2Rlc1tpXTtcclxuXHRcdFx0aWYgKG5vZGUubm9kZVR5cGUgPT09IDEgfHwgbm9kZS5ub2RlVHlwZSA9PT0gMykge1xyXG5cdFx0XHRcdGhhc0NvbnRlbnQgPSB0cnVlO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRpZiAoaGFzQ29udGVudCAhPT0gdGhpcy5oYXNDb250ZW50KSB7XHJcblx0XHRcdHRoaXMuaGFzQ29udGVudCA9IGhhc0NvbnRlbnQ7XHJcblx0XHRcdGlmIChoYXNDb250ZW50KSB7XHJcblx0XHRcdFx0Ly8gdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnQsICdpcy1lbXB0eScpO1xyXG5cdFx0XHRcdHRoaXMuY29udGFpbmVyLmNsZWFyKCk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Ly8gdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnQsICdpcy1lbXB0eScpO1xyXG5cdFx0XHRcdHRoaXMuY29udGFpbmVyLmNyZWF0ZUVtYmVkZGVkVmlldyh0aGlzLmRlZmF1bHQpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxufVxyXG4iXX0=