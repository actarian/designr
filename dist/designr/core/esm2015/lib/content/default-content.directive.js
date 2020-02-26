import { Directive, ElementRef, Input, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';
import * as i0 from "@angular/core";
export class DefaultContentDirective {
    constructor(element, container, renderer) {
        this.container = container;
        this.renderer = renderer;
        this.hasContent = true;
        this.element = element.nativeElement;
    }
    ngAfterContentChecked() {
        let hasContent = false;
        console.log('DefaultContentDirective', this.element.childNodes);
        for (let i = this.element.childNodes.length - 1; i >= 0; --i) {
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
DefaultContentDirective.ɵfac = function DefaultContentDirective_Factory(t) { return new (t || DefaultContentDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ViewContainerRef), i0.ɵɵdirectiveInject(i0.Renderer2)); };
DefaultContentDirective.ɵdir = i0.ɵɵdefineDirective({ type: DefaultContentDirective, selectors: [["", "default", ""]], inputs: { default: "default" } });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DefaultContentDirective, [{
        type: Directive,
        args: [{
                selector: '[default]',
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.ViewContainerRef }, { type: i0.Renderer2 }]; }, { default: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1jb250ZW50LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJsaWIvY29udGVudC9kZWZhdWx0LWNvbnRlbnQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBdUIsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFLNUgsTUFBTSxPQUFPLHVCQUF1QjtJQU1uQyxZQUNDLE9BQW1CLEVBQ1gsU0FBMkIsRUFDM0IsUUFBbUI7UUFEbkIsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUFDM0IsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUxwQixlQUFVLEdBQUcsSUFBSSxDQUFDO1FBTXpCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQztJQUN0QyxDQUFDO0lBRUQscUJBQXFCO1FBQ3BCLElBQUksVUFBVSxHQUFHLEtBQUssQ0FBQztRQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDaEUsS0FBSyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUU7WUFDN0QsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEMsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLENBQUMsRUFBRTtnQkFDL0MsVUFBVSxHQUFHLElBQUksQ0FBQztnQkFDbEIsTUFBTTthQUNOO1NBQ0Q7UUFDRCxJQUFJLFVBQVUsS0FBSyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25DLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1lBQzdCLElBQUksVUFBVSxFQUFFO2dCQUNmLHVEQUF1RDtnQkFDdkQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQzthQUN2QjtpQkFBTTtnQkFDTixvREFBb0Q7Z0JBQ3BELElBQUksQ0FBQyxTQUFTLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ2hEO1NBQ0Q7SUFDRixDQUFDOzs4RkFqQ1csdUJBQXVCOzREQUF2Qix1QkFBdUI7a0RBQXZCLHVCQUF1QjtjQUhuQyxTQUFTO2VBQUM7Z0JBQ1YsUUFBUSxFQUFFLFdBQVc7YUFDckI7O2tCQUdDLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlckNvbnRlbnRDaGVja2VkLCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBSZW5kZXJlcjIsIFRlbXBsYXRlUmVmLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ1tkZWZhdWx0XScsXG59KVxuZXhwb3J0IGNsYXNzIERlZmF1bHRDb250ZW50RGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50Q2hlY2tlZCB7XG5cblx0QElucHV0KCkgZGVmYXVsdDogVGVtcGxhdGVSZWY8YW55Pjtcblx0cHJpdmF0ZSBlbGVtZW50OiBIVE1MRWxlbWVudDtcblx0cHJpdmF0ZSBoYXNDb250ZW50ID0gdHJ1ZTtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRlbGVtZW50OiBFbGVtZW50UmVmLFxuXHRcdHByaXZhdGUgY29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmLFxuXHRcdHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuXHRcdHRoaXMuZWxlbWVudCA9IGVsZW1lbnQubmF0aXZlRWxlbWVudDtcblx0fVxuXG5cdG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpOiB2b2lkIHtcblx0XHRsZXQgaGFzQ29udGVudCA9IGZhbHNlO1xuXHRcdGNvbnNvbGUubG9nKCdEZWZhdWx0Q29udGVudERpcmVjdGl2ZScsIHRoaXMuZWxlbWVudC5jaGlsZE5vZGVzKTtcblx0XHRmb3IgKGxldCBpID0gdGhpcy5lbGVtZW50LmNoaWxkTm9kZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcblx0XHRcdGNvbnN0IG5vZGUgPSB0aGlzLmVsZW1lbnQuY2hpbGROb2Rlc1tpXTtcblx0XHRcdGlmIChub2RlLm5vZGVUeXBlID09PSAxIHx8IG5vZGUubm9kZVR5cGUgPT09IDMpIHtcblx0XHRcdFx0aGFzQ29udGVudCA9IHRydWU7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAoaGFzQ29udGVudCAhPT0gdGhpcy5oYXNDb250ZW50KSB7XG5cdFx0XHR0aGlzLmhhc0NvbnRlbnQgPSBoYXNDb250ZW50O1xuXHRcdFx0aWYgKGhhc0NvbnRlbnQpIHtcblx0XHRcdFx0Ly8gdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnQsICdpcy1lbXB0eScpO1xuXHRcdFx0XHR0aGlzLmNvbnRhaW5lci5jbGVhcigpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnQsICdpcy1lbXB0eScpO1xuXHRcdFx0XHR0aGlzLmNvbnRhaW5lci5jcmVhdGVFbWJlZGRlZFZpZXcodGhpcy5kZWZhdWx0KTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxufVxuIl19