/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class LinkDefinition {
}
if (false) {
    /** @type {?} */
    LinkDefinition.prototype.href;
    /** @type {?} */
    LinkDefinition.prototype.id;
    /** @type {?} */
    LinkDefinition.prototype.rel;
}
export class LinkService {
    /**
     * @param {?} doc
     */
    constructor(doc) {
        this.doc = doc;
    }
    /**
     * @param {?} definition
     * @return {?}
     */
    addTag(definition) {
        /** @type {?} */
        const element = this.doc.createElement(`link`);
        this.updateElementDefinition(element, definition);
        this.doc.head.appendChild(element);
    }
    /**
     * @param {?} selector
     * @return {?}
     */
    getTag(selector) {
        /** @type {?} */
        const element = this.doc.querySelector(`link${selector}`);
        return element;
    }
    /**
     * @param {?} selector
     * @param {?} definition
     * @return {?}
     */
    updateTag(selector, definition) {
        /** @type {?} */
        const element = this.doc.querySelector(`link${selector}`);
        this.updateElementDefinition(element, definition);
    }
    /**
     * @param {?} selector
     * @return {?}
     */
    removeTag(selector) {
        /** @type {?} */
        const element = this.doc.querySelector(`link${selector}`);
        element.remove();
    }
    /**
     * @param {?} element
     * @param {?} definition
     * @return {?}
     */
    updateElementDefinition(element, definition) {
        this.updateElementAttribute(element, 'href', definition.href);
        this.updateElementAttribute(element, 'id', definition.id);
        this.updateElementAttribute(element, 'rel', definition.rel);
    }
    /**
     * @param {?} element
     * @param {?} attribute
     * @param {?} value
     * @return {?}
     */
    updateElementAttribute(element, attribute, value) {
        if (value) {
            element.setAttribute(attribute, value);
        }
        else {
            element.removeAttribute(attribute);
        }
    }
}
LinkService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
LinkService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
/** @nocollapse */ LinkService.ngInjectableDef = i0.defineInjectable({ factory: function LinkService_Factory() { return new LinkService(i0.inject(i1.DOCUMENT)); }, token: LinkService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    LinkService.prototype.doc;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluay5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvY29yZS8iLCJzb3VyY2VzIjpbImxpYi9wYWdlcy9saW5rLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBRW5ELE1BQU0sT0FBTyxjQUFjO0NBSTFCOzs7SUFIQSw4QkFBYzs7SUFDZCw0QkFBWTs7SUFDWiw2QkFBYTs7QUFNZCxNQUFNLE9BQU8sV0FBVzs7OztJQUV2QixZQUMyQixHQUFRO1FBQVIsUUFBRyxHQUFILEdBQUcsQ0FBSztJQUMvQixDQUFDOzs7OztJQUVMLE1BQU0sQ0FBQyxVQUEwQjs7Y0FDMUIsT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQztRQUM5QyxJQUFJLENBQUMsdUJBQXVCLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNwQyxDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxRQUFnQjs7Y0FDaEIsT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLE9BQU8sUUFBUSxFQUFFLENBQUM7UUFDekQsT0FBTyxPQUFPLENBQUM7SUFDaEIsQ0FBQzs7Ozs7O0lBRUQsU0FBUyxDQUFDLFFBQWdCLEVBQUUsVUFBMEI7O2NBQy9DLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxPQUFPLFFBQVEsRUFBRSxDQUFDO1FBQ3pELElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDbkQsQ0FBQzs7Ozs7SUFFRCxTQUFTLENBQUMsUUFBZ0I7O2NBQ25CLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxPQUFPLFFBQVEsRUFBRSxDQUFDO1FBQ3pELE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNsQixDQUFDOzs7Ozs7SUFFRCx1QkFBdUIsQ0FBQyxPQUF3QixFQUFFLFVBQTBCO1FBQzNFLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsc0JBQXNCLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLHNCQUFzQixDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzdELENBQUM7Ozs7Ozs7SUFFRCxzQkFBc0IsQ0FBQyxPQUF3QixFQUFFLFNBQWlCLEVBQUUsS0FBVTtRQUM3RSxJQUFJLEtBQUssRUFBRTtZQUNWLE9BQU8sQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ3ZDO2FBQU07WUFDTixPQUFPLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ25DO0lBQ0YsQ0FBQzs7O1lBMUNELFVBQVUsU0FBQztnQkFDWCxVQUFVLEVBQUUsTUFBTTthQUNsQjs7Ozs0Q0FJRSxNQUFNLFNBQUMsUUFBUTs7Ozs7Ozs7SUFBaEIsMEJBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBMaW5rRGVmaW5pdGlvbiB7XG5cdGhyZWY/OiBzdHJpbmc7XG5cdGlkPzogc3RyaW5nO1xuXHRyZWw/OiBzdHJpbmc7XG59XG5cbkBJbmplY3RhYmxlKHtcblx0cHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBMaW5rU2VydmljZSB7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0QEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2M6IGFueSxcblx0KSB7IH1cblxuXHRhZGRUYWcoZGVmaW5pdGlvbjogTGlua0RlZmluaXRpb24pIHtcblx0XHRjb25zdCBlbGVtZW50ID0gdGhpcy5kb2MuY3JlYXRlRWxlbWVudChgbGlua2ApO1xuXHRcdHRoaXMudXBkYXRlRWxlbWVudERlZmluaXRpb24oZWxlbWVudCwgZGVmaW5pdGlvbik7XG5cdFx0dGhpcy5kb2MuaGVhZC5hcHBlbmRDaGlsZChlbGVtZW50KTtcblx0fVxuXG5cdGdldFRhZyhzZWxlY3Rvcjogc3RyaW5nKSB7XG5cdFx0Y29uc3QgZWxlbWVudCA9IHRoaXMuZG9jLnF1ZXJ5U2VsZWN0b3IoYGxpbmske3NlbGVjdG9yfWApO1xuXHRcdHJldHVybiBlbGVtZW50O1xuXHR9XG5cblx0dXBkYXRlVGFnKHNlbGVjdG9yOiBzdHJpbmcsIGRlZmluaXRpb246IExpbmtEZWZpbml0aW9uKSB7XG5cdFx0Y29uc3QgZWxlbWVudCA9IHRoaXMuZG9jLnF1ZXJ5U2VsZWN0b3IoYGxpbmske3NlbGVjdG9yfWApO1xuXHRcdHRoaXMudXBkYXRlRWxlbWVudERlZmluaXRpb24oZWxlbWVudCwgZGVmaW5pdGlvbik7XG5cdH1cblxuXHRyZW1vdmVUYWcoc2VsZWN0b3I6IHN0cmluZykge1xuXHRcdGNvbnN0IGVsZW1lbnQgPSB0aGlzLmRvYy5xdWVyeVNlbGVjdG9yKGBsaW5rJHtzZWxlY3Rvcn1gKTtcblx0XHRlbGVtZW50LnJlbW92ZSgpO1xuXHR9XG5cblx0dXBkYXRlRWxlbWVudERlZmluaXRpb24oZWxlbWVudDogSFRNTExpbmtFbGVtZW50LCBkZWZpbml0aW9uOiBMaW5rRGVmaW5pdGlvbikge1xuXHRcdHRoaXMudXBkYXRlRWxlbWVudEF0dHJpYnV0ZShlbGVtZW50LCAnaHJlZicsIGRlZmluaXRpb24uaHJlZik7XG5cdFx0dGhpcy51cGRhdGVFbGVtZW50QXR0cmlidXRlKGVsZW1lbnQsICdpZCcsIGRlZmluaXRpb24uaWQpO1xuXHRcdHRoaXMudXBkYXRlRWxlbWVudEF0dHJpYnV0ZShlbGVtZW50LCAncmVsJywgZGVmaW5pdGlvbi5yZWwpO1xuXHR9XG5cblx0dXBkYXRlRWxlbWVudEF0dHJpYnV0ZShlbGVtZW50OiBIVE1MTGlua0VsZW1lbnQsIGF0dHJpYnV0ZTogc3RyaW5nLCB2YWx1ZTogYW55KSB7XG5cdFx0aWYgKHZhbHVlKSB7XG5cdFx0XHRlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyaWJ1dGUsIHZhbHVlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlKTtcblx0XHR9XG5cdH1cblxufVxuIl19