/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Input, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';
var DefaultContentDirective = /** @class */ (function () {
    function DefaultContentDirective(element, container, renderer) {
        this.container = container;
        this.renderer = renderer;
        this.hasContent = true;
        this.element = element.nativeElement;
    }
    /**
     * @return {?}
     */
    DefaultContentDirective.prototype.ngAfterContentChecked = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var hasContent = false;
        console.log('DefaultContentDirective', this.element.childNodes);
        for (var i = this.element.childNodes.length - 1; i >= 0; --i) {
            /** @type {?} */
            var node = this.element.childNodes[i];
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
    };
    DefaultContentDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[default]',
                },] }
    ];
    /** @nocollapse */
    DefaultContentDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ViewContainerRef },
        { type: Renderer2 }
    ]; };
    DefaultContentDirective.propDecorators = {
        default: [{ type: Input }]
    };
    return DefaultContentDirective;
}());
export { DefaultContentDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1jb250ZW50LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJsaWIvY29udGVudC9kZWZhdWx0LWNvbnRlbnQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQXVCLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFNUg7SUFTQyxpQ0FDQyxPQUFtQixFQUNYLFNBQTJCLEVBQzNCLFFBQW1CO1FBRG5CLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBQzNCLGFBQVEsR0FBUixRQUFRLENBQVc7UUFMcEIsZUFBVSxHQUFHLElBQUksQ0FBQztRQU16QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUM7SUFDdEMsQ0FBQzs7OztJQUVELHVEQUFxQjs7O0lBQXJCOztZQUNLLFVBQVUsR0FBRyxLQUFLO1FBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNoRSxLQUFLLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRTs7Z0JBQ3ZELElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDdkMsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLENBQUMsRUFBRTtnQkFDL0MsVUFBVSxHQUFHLElBQUksQ0FBQztnQkFDbEIsTUFBTTthQUNOO1NBQ0Q7UUFDRCxJQUFJLFVBQVUsS0FBSyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25DLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1lBQzdCLElBQUksVUFBVSxFQUFFO2dCQUNmLHVEQUF1RDtnQkFDdkQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQzthQUN2QjtpQkFBTTtnQkFDTixvREFBb0Q7Z0JBQ3BELElBQUksQ0FBQyxTQUFTLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ2hEO1NBQ0Q7SUFDRixDQUFDOztnQkFwQ0QsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxXQUFXO2lCQUNyQjs7OztnQkFKd0MsVUFBVTtnQkFBaUMsZ0JBQWdCO2dCQUF4QyxTQUFTOzs7MEJBT25FLEtBQUs7O0lBaUNQLDhCQUFDO0NBQUEsQUF0Q0QsSUFzQ0M7U0FuQ1ksdUJBQXVCOzs7SUFFbkMsMENBQW1DOzs7OztJQUNuQywwQ0FBNkI7Ozs7O0lBQzdCLDZDQUEwQjs7Ozs7SUFJekIsNENBQW1DOzs7OztJQUNuQywyQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlckNvbnRlbnRDaGVja2VkLCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBSZW5kZXJlcjIsIFRlbXBsYXRlUmVmLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuXHRzZWxlY3RvcjogJ1tkZWZhdWx0XScsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEZWZhdWx0Q29udGVudERpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyQ29udGVudENoZWNrZWQge1xyXG5cclxuXHRASW5wdXQoKSBkZWZhdWx0OiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG5cdHByaXZhdGUgZWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcblx0cHJpdmF0ZSBoYXNDb250ZW50ID0gdHJ1ZTtcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRlbGVtZW50OiBFbGVtZW50UmVmLFxyXG5cdFx0cHJpdmF0ZSBjb250YWluZXI6IFZpZXdDb250YWluZXJSZWYsXHJcblx0XHRwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcclxuXHRcdHRoaXMuZWxlbWVudCA9IGVsZW1lbnQubmF0aXZlRWxlbWVudDtcclxuXHR9XHJcblxyXG5cdG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpOiB2b2lkIHtcclxuXHRcdGxldCBoYXNDb250ZW50ID0gZmFsc2U7XHJcblx0XHRjb25zb2xlLmxvZygnRGVmYXVsdENvbnRlbnREaXJlY3RpdmUnLCB0aGlzLmVsZW1lbnQuY2hpbGROb2Rlcyk7XHJcblx0XHRmb3IgKGxldCBpID0gdGhpcy5lbGVtZW50LmNoaWxkTm9kZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcclxuXHRcdFx0Y29uc3Qgbm9kZSA9IHRoaXMuZWxlbWVudC5jaGlsZE5vZGVzW2ldO1xyXG5cdFx0XHRpZiAobm9kZS5ub2RlVHlwZSA9PT0gMSB8fCBub2RlLm5vZGVUeXBlID09PSAzKSB7XHJcblx0XHRcdFx0aGFzQ29udGVudCA9IHRydWU7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGlmIChoYXNDb250ZW50ICE9PSB0aGlzLmhhc0NvbnRlbnQpIHtcclxuXHRcdFx0dGhpcy5oYXNDb250ZW50ID0gaGFzQ29udGVudDtcclxuXHRcdFx0aWYgKGhhc0NvbnRlbnQpIHtcclxuXHRcdFx0XHQvLyB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudCwgJ2lzLWVtcHR5Jyk7XHJcblx0XHRcdFx0dGhpcy5jb250YWluZXIuY2xlYXIoKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHQvLyB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudCwgJ2lzLWVtcHR5Jyk7XHJcblx0XHRcdFx0dGhpcy5jb250YWluZXIuY3JlYXRlRW1iZWRkZWRWaWV3KHRoaXMuZGVmYXVsdCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG59XHJcbiJdfQ==