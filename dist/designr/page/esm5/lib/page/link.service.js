/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
var LinkDefinition = /** @class */ (function () {
    function LinkDefinition() {
    }
    return LinkDefinition;
}());
export { LinkDefinition };
if (false) {
    /** @type {?} */
    LinkDefinition.prototype.href;
    /** @type {?} */
    LinkDefinition.prototype.id;
    /** @type {?} */
    LinkDefinition.prototype.rel;
}
var LinkService = /** @class */ (function () {
    function LinkService(doc) {
        this.doc = doc;
    }
    /**
     * @param {?} definition
     * @return {?}
     */
    LinkService.prototype.addTag = /**
     * @param {?} definition
     * @return {?}
     */
    function (definition) {
        /** @type {?} */
        var element = this.doc.createElement("link");
        this.updateElementDefinition(element, definition);
        this.doc.head.appendChild(element);
    };
    /**
     * @param {?} selector
     * @return {?}
     */
    LinkService.prototype.getTag = /**
     * @param {?} selector
     * @return {?}
     */
    function (selector) {
        /** @type {?} */
        var element = this.doc.querySelector("link" + selector);
        return element;
    };
    /**
     * @param {?} selector
     * @param {?} definition
     * @return {?}
     */
    LinkService.prototype.updateTag = /**
     * @param {?} selector
     * @param {?} definition
     * @return {?}
     */
    function (selector, definition) {
        /** @type {?} */
        var element = this.doc.querySelector("link" + selector);
        this.updateElementDefinition(element, definition);
    };
    /**
     * @param {?} selector
     * @return {?}
     */
    LinkService.prototype.removeTag = /**
     * @param {?} selector
     * @return {?}
     */
    function (selector) {
        /** @type {?} */
        var element = this.doc.querySelector("link" + selector);
        element.remove();
    };
    /**
     * @param {?} element
     * @param {?} definition
     * @return {?}
     */
    LinkService.prototype.updateElementDefinition = /**
     * @param {?} element
     * @param {?} definition
     * @return {?}
     */
    function (element, definition) {
        this.updateElementAttribute(element, 'href', definition.href);
        this.updateElementAttribute(element, 'id', definition.id);
        this.updateElementAttribute(element, 'rel', definition.rel);
    };
    /**
     * @param {?} element
     * @param {?} attribute
     * @param {?} value
     * @return {?}
     */
    LinkService.prototype.updateElementAttribute = /**
     * @param {?} element
     * @param {?} attribute
     * @param {?} value
     * @return {?}
     */
    function (element, attribute, value) {
        if (value) {
            element.setAttribute(attribute, value);
        }
        else {
            element.removeAttribute(attribute);
        }
    };
    LinkService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    LinkService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    /** @nocollapse */ LinkService.ngInjectableDef = i0.defineInjectable({ factory: function LinkService_Factory() { return new LinkService(i0.inject(i1.DOCUMENT)); }, token: LinkService, providedIn: "root" });
    return LinkService;
}());
export { LinkService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    LinkService.prototype.doc;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluay5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvcGFnZS8iLCJzb3VyY2VzIjpbImxpYi9wYWdlL2xpbmsuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFFbkQ7SUFBQTtJQUlBLENBQUM7SUFBRCxxQkFBQztBQUFELENBQUMsQUFKRCxJQUlDOzs7O0lBSEEsOEJBQWM7O0lBQ2QsNEJBQVk7O0lBQ1osNkJBQWE7O0FBR2Q7SUFLQyxxQkFDMkIsR0FBUTtRQUFSLFFBQUcsR0FBSCxHQUFHLENBQUs7SUFDL0IsQ0FBQzs7Ozs7SUFFTCw0QkFBTTs7OztJQUFOLFVBQU8sVUFBMEI7O1lBQzFCLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUM7UUFDOUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7Ozs7SUFFRCw0QkFBTTs7OztJQUFOLFVBQU8sUUFBZ0I7O1lBQ2hCLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxTQUFPLFFBQVUsQ0FBQztRQUN6RCxPQUFPLE9BQU8sQ0FBQztJQUNoQixDQUFDOzs7Ozs7SUFFRCwrQkFBUzs7Ozs7SUFBVCxVQUFVLFFBQWdCLEVBQUUsVUFBMEI7O1lBQy9DLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxTQUFPLFFBQVUsQ0FBQztRQUN6RCxJQUFJLENBQUMsdUJBQXVCLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQ25ELENBQUM7Ozs7O0lBRUQsK0JBQVM7Ozs7SUFBVCxVQUFVLFFBQWdCOztZQUNuQixPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsU0FBTyxRQUFVLENBQUM7UUFDekQsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2xCLENBQUM7Ozs7OztJQUVELDZDQUF1Qjs7Ozs7SUFBdkIsVUFBd0IsT0FBd0IsRUFBRSxVQUEwQjtRQUMzRSxJQUFJLENBQUMsc0JBQXNCLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLHNCQUFzQixDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM3RCxDQUFDOzs7Ozs7O0lBRUQsNENBQXNCOzs7Ozs7SUFBdEIsVUFBdUIsT0FBd0IsRUFBRSxTQUFpQixFQUFFLEtBQVU7UUFDN0UsSUFBSSxLQUFLLEVBQUU7WUFDVixPQUFPLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUN2QzthQUFNO1lBQ04sT0FBTyxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUNuQztJQUNGLENBQUM7O2dCQTFDRCxVQUFVLFNBQUM7b0JBQ1gsVUFBVSxFQUFFLE1BQU07aUJBQ2xCOzs7O2dEQUlFLE1BQU0sU0FBQyxRQUFROzs7c0JBZmxCO0NBcURDLEFBNUNELElBNENDO1NBekNZLFdBQVc7Ozs7OztJQUd0QiwwQkFBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGNsYXNzIExpbmtEZWZpbml0aW9uIHtcblx0aHJlZj86IHN0cmluZztcblx0aWQ/OiBzdHJpbmc7XG5cdHJlbD86IHN0cmluZztcbn1cblxuQEluamVjdGFibGUoe1xuXHRwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIExpbmtTZXJ2aWNlIHtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvYzogYW55LFxuXHQpIHsgfVxuXG5cdGFkZFRhZyhkZWZpbml0aW9uOiBMaW5rRGVmaW5pdGlvbikge1xuXHRcdGNvbnN0IGVsZW1lbnQgPSB0aGlzLmRvYy5jcmVhdGVFbGVtZW50KGBsaW5rYCk7XG5cdFx0dGhpcy51cGRhdGVFbGVtZW50RGVmaW5pdGlvbihlbGVtZW50LCBkZWZpbml0aW9uKTtcblx0XHR0aGlzLmRvYy5oZWFkLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuXHR9XG5cblx0Z2V0VGFnKHNlbGVjdG9yOiBzdHJpbmcpIHtcblx0XHRjb25zdCBlbGVtZW50ID0gdGhpcy5kb2MucXVlcnlTZWxlY3RvcihgbGluayR7c2VsZWN0b3J9YCk7XG5cdFx0cmV0dXJuIGVsZW1lbnQ7XG5cdH1cblxuXHR1cGRhdGVUYWcoc2VsZWN0b3I6IHN0cmluZywgZGVmaW5pdGlvbjogTGlua0RlZmluaXRpb24pIHtcblx0XHRjb25zdCBlbGVtZW50ID0gdGhpcy5kb2MucXVlcnlTZWxlY3RvcihgbGluayR7c2VsZWN0b3J9YCk7XG5cdFx0dGhpcy51cGRhdGVFbGVtZW50RGVmaW5pdGlvbihlbGVtZW50LCBkZWZpbml0aW9uKTtcblx0fVxuXG5cdHJlbW92ZVRhZyhzZWxlY3Rvcjogc3RyaW5nKSB7XG5cdFx0Y29uc3QgZWxlbWVudCA9IHRoaXMuZG9jLnF1ZXJ5U2VsZWN0b3IoYGxpbmske3NlbGVjdG9yfWApO1xuXHRcdGVsZW1lbnQucmVtb3ZlKCk7XG5cdH1cblxuXHR1cGRhdGVFbGVtZW50RGVmaW5pdGlvbihlbGVtZW50OiBIVE1MTGlua0VsZW1lbnQsIGRlZmluaXRpb246IExpbmtEZWZpbml0aW9uKSB7XG5cdFx0dGhpcy51cGRhdGVFbGVtZW50QXR0cmlidXRlKGVsZW1lbnQsICdocmVmJywgZGVmaW5pdGlvbi5ocmVmKTtcblx0XHR0aGlzLnVwZGF0ZUVsZW1lbnRBdHRyaWJ1dGUoZWxlbWVudCwgJ2lkJywgZGVmaW5pdGlvbi5pZCk7XG5cdFx0dGhpcy51cGRhdGVFbGVtZW50QXR0cmlidXRlKGVsZW1lbnQsICdyZWwnLCBkZWZpbml0aW9uLnJlbCk7XG5cdH1cblxuXHR1cGRhdGVFbGVtZW50QXR0cmlidXRlKGVsZW1lbnQ6IEhUTUxMaW5rRWxlbWVudCwgYXR0cmlidXRlOiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcblx0XHRpZiAodmFsdWUpIHtcblx0XHRcdGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZSwgdmFsdWUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGUpO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=