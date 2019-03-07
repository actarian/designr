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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1jb250ZW50LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJsaWIvY29udGVudC9kZWZhdWx0LWNvbnRlbnQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQXVCLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFNUg7SUFTQyxpQ0FDQyxPQUFtQixFQUNYLFNBQTJCLEVBQzNCLFFBQW1CO1FBRG5CLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBQzNCLGFBQVEsR0FBUixRQUFRLENBQVc7UUFMcEIsZUFBVSxHQUFHLElBQUksQ0FBQztRQU16QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUM7SUFDdEMsQ0FBQzs7OztJQUVELHVEQUFxQjs7O0lBQXJCOztZQUNLLFVBQVUsR0FBRyxLQUFLO1FBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNoRSxLQUFLLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRTs7Z0JBQ3ZELElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDdkMsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLENBQUMsRUFBRTtnQkFDL0MsVUFBVSxHQUFHLElBQUksQ0FBQztnQkFDbEIsTUFBTTthQUNOO1NBQ0Q7UUFDRCxJQUFJLFVBQVUsS0FBSyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25DLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1lBQzdCLElBQUksVUFBVSxFQUFFO2dCQUNmLHVEQUF1RDtnQkFDdkQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQzthQUN2QjtpQkFBTTtnQkFDTixvREFBb0Q7Z0JBQ3BELElBQUksQ0FBQyxTQUFTLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ2hEO1NBQ0Q7SUFDRixDQUFDOztnQkFwQ0QsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxXQUFXO2lCQUNyQjs7OztnQkFKd0MsVUFBVTtnQkFBaUMsZ0JBQWdCO2dCQUF4QyxTQUFTOzs7MEJBT25FLEtBQUs7O0lBaUNQLDhCQUFDO0NBQUEsQUF0Q0QsSUFzQ0M7U0FuQ1ksdUJBQXVCOzs7SUFFbkMsMENBQW1DOzs7OztJQUNuQywwQ0FBNkI7Ozs7O0lBQzdCLDZDQUEwQjs7Ozs7SUFJekIsNENBQW1DOzs7OztJQUNuQywyQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlckNvbnRlbnRDaGVja2VkLCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBSZW5kZXJlcjIsIFRlbXBsYXRlUmVmLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ1tkZWZhdWx0XScsXG59KVxuZXhwb3J0IGNsYXNzIERlZmF1bHRDb250ZW50RGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50Q2hlY2tlZCB7XG5cblx0QElucHV0KCkgZGVmYXVsdDogVGVtcGxhdGVSZWY8YW55Pjtcblx0cHJpdmF0ZSBlbGVtZW50OiBIVE1MRWxlbWVudDtcblx0cHJpdmF0ZSBoYXNDb250ZW50ID0gdHJ1ZTtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRlbGVtZW50OiBFbGVtZW50UmVmLFxuXHRcdHByaXZhdGUgY29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmLFxuXHRcdHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuXHRcdHRoaXMuZWxlbWVudCA9IGVsZW1lbnQubmF0aXZlRWxlbWVudDtcblx0fVxuXG5cdG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpOiB2b2lkIHtcblx0XHRsZXQgaGFzQ29udGVudCA9IGZhbHNlO1xuXHRcdGNvbnNvbGUubG9nKCdEZWZhdWx0Q29udGVudERpcmVjdGl2ZScsIHRoaXMuZWxlbWVudC5jaGlsZE5vZGVzKTtcblx0XHRmb3IgKGxldCBpID0gdGhpcy5lbGVtZW50LmNoaWxkTm9kZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcblx0XHRcdGNvbnN0IG5vZGUgPSB0aGlzLmVsZW1lbnQuY2hpbGROb2Rlc1tpXTtcblx0XHRcdGlmIChub2RlLm5vZGVUeXBlID09PSAxIHx8IG5vZGUubm9kZVR5cGUgPT09IDMpIHtcblx0XHRcdFx0aGFzQ29udGVudCA9IHRydWU7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAoaGFzQ29udGVudCAhPT0gdGhpcy5oYXNDb250ZW50KSB7XG5cdFx0XHR0aGlzLmhhc0NvbnRlbnQgPSBoYXNDb250ZW50O1xuXHRcdFx0aWYgKGhhc0NvbnRlbnQpIHtcblx0XHRcdFx0Ly8gdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnQsICdpcy1lbXB0eScpO1xuXHRcdFx0XHR0aGlzLmNvbnRhaW5lci5jbGVhcigpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnQsICdpcy1lbXB0eScpO1xuXHRcdFx0XHR0aGlzLmNvbnRhaW5lci5jcmVhdGVFbWJlZGRlZFZpZXcodGhpcy5kZWZhdWx0KTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxufVxuIl19