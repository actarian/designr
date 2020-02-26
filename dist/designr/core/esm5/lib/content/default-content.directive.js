import { Directive, ElementRef, Input, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';
import * as i0 from "@angular/core";
var DefaultContentDirective = /** @class */ (function () {
    function DefaultContentDirective(element, container, renderer) {
        this.container = container;
        this.renderer = renderer;
        this.hasContent = true;
        this.element = element.nativeElement;
    }
    DefaultContentDirective.prototype.ngAfterContentChecked = function () {
        var hasContent = false;
        console.log('DefaultContentDirective', this.element.childNodes);
        for (var i = this.element.childNodes.length - 1; i >= 0; --i) {
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
    DefaultContentDirective.ɵfac = function DefaultContentDirective_Factory(t) { return new (t || DefaultContentDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ViewContainerRef), i0.ɵɵdirectiveInject(i0.Renderer2)); };
    DefaultContentDirective.ɵdir = i0.ɵɵdefineDirective({ type: DefaultContentDirective, selectors: [["", "default", ""]], inputs: { default: "default" } });
    return DefaultContentDirective;
}());
export { DefaultContentDirective };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DefaultContentDirective, [{
        type: Directive,
        args: [{
                selector: '[default]',
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.ViewContainerRef }, { type: i0.Renderer2 }]; }, { default: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1jb250ZW50LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJsaWIvY29udGVudC9kZWZhdWx0LWNvbnRlbnQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBdUIsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFNUg7SUFTQyxpQ0FDQyxPQUFtQixFQUNYLFNBQTJCLEVBQzNCLFFBQW1CO1FBRG5CLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBQzNCLGFBQVEsR0FBUixRQUFRLENBQVc7UUFMcEIsZUFBVSxHQUFHLElBQUksQ0FBQztRQU16QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUM7SUFDdEMsQ0FBQztJQUVELHVEQUFxQixHQUFyQjtRQUNDLElBQUksVUFBVSxHQUFHLEtBQUssQ0FBQztRQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDaEUsS0FBSyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUU7WUFDN0QsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEMsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLENBQUMsRUFBRTtnQkFDL0MsVUFBVSxHQUFHLElBQUksQ0FBQztnQkFDbEIsTUFBTTthQUNOO1NBQ0Q7UUFDRCxJQUFJLFVBQVUsS0FBSyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25DLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1lBQzdCLElBQUksVUFBVSxFQUFFO2dCQUNmLHVEQUF1RDtnQkFDdkQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQzthQUN2QjtpQkFBTTtnQkFDTixvREFBb0Q7Z0JBQ3BELElBQUksQ0FBQyxTQUFTLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ2hEO1NBQ0Q7SUFDRixDQUFDO2tHQWpDVyx1QkFBdUI7Z0VBQXZCLHVCQUF1QjtrQ0FMcEM7Q0F3Q0MsQUF0Q0QsSUFzQ0M7U0FuQ1ksdUJBQXVCO2tEQUF2Qix1QkFBdUI7Y0FIbkMsU0FBUztlQUFDO2dCQUNWLFFBQVEsRUFBRSxXQUFXO2FBQ3JCOztrQkFHQyxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJDb250ZW50Q2hlY2tlZCwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgUmVuZGVyZXIyLCBUZW1wbGF0ZVJlZiwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdbZGVmYXVsdF0nLFxufSlcbmV4cG9ydCBjbGFzcyBEZWZhdWx0Q29udGVudERpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyQ29udGVudENoZWNrZWQge1xuXG5cdEBJbnB1dCgpIGRlZmF1bHQ6IFRlbXBsYXRlUmVmPGFueT47XG5cdHByaXZhdGUgZWxlbWVudDogSFRNTEVsZW1lbnQ7XG5cdHByaXZhdGUgaGFzQ29udGVudCA9IHRydWU7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0ZWxlbWVudDogRWxlbWVudFJlZixcblx0XHRwcml2YXRlIGNvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZixcblx0XHRwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcblx0XHR0aGlzLmVsZW1lbnQgPSBlbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG5cdH1cblxuXHRuZ0FmdGVyQ29udGVudENoZWNrZWQoKTogdm9pZCB7XG5cdFx0bGV0IGhhc0NvbnRlbnQgPSBmYWxzZTtcblx0XHRjb25zb2xlLmxvZygnRGVmYXVsdENvbnRlbnREaXJlY3RpdmUnLCB0aGlzLmVsZW1lbnQuY2hpbGROb2Rlcyk7XG5cdFx0Zm9yIChsZXQgaSA9IHRoaXMuZWxlbWVudC5jaGlsZE5vZGVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG5cdFx0XHRjb25zdCBub2RlID0gdGhpcy5lbGVtZW50LmNoaWxkTm9kZXNbaV07XG5cdFx0XHRpZiAobm9kZS5ub2RlVHlwZSA9PT0gMSB8fCBub2RlLm5vZGVUeXBlID09PSAzKSB7XG5cdFx0XHRcdGhhc0NvbnRlbnQgPSB0cnVlO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKGhhc0NvbnRlbnQgIT09IHRoaXMuaGFzQ29udGVudCkge1xuXHRcdFx0dGhpcy5oYXNDb250ZW50ID0gaGFzQ29udGVudDtcblx0XHRcdGlmIChoYXNDb250ZW50KSB7XG5cdFx0XHRcdC8vIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50LCAnaXMtZW1wdHknKTtcblx0XHRcdFx0dGhpcy5jb250YWluZXIuY2xlYXIoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50LCAnaXMtZW1wdHknKTtcblx0XHRcdFx0dGhpcy5jb250YWluZXIuY3JlYXRlRW1iZWRkZWRWaWV3KHRoaXMuZGVmYXVsdCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==