/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function Pages() { }
export class PageMeta {
}
if (false) {
    /** @type {?} */
    PageMeta.prototype.appId;
    /** @type {?} */
    PageMeta.prototype.author;
    /** @type {?} */
    PageMeta.prototype.canonical;
    /** @type {?} */
    PageMeta.prototype.description;
    /** @type {?} */
    PageMeta.prototype.keywords;
    /** @type {?} */
    PageMeta.prototype.locale;
    /** @type {?} */
    PageMeta.prototype.robots;
    /** @type {?} */
    PageMeta.prototype.title;
    /** @type {?} */
    PageMeta.prototype.type;
}
export class PageIndex {
    /**
     * @param {?=} options
     */
    constructor(options) {
        if (options) {
            Object.assign(this, options);
        }
    }
}
if (false) {
    /** @type {?} */
    PageIndex.prototype.id;
    /** @type {?} */
    PageIndex.prototype.slug;
    /** @type {?} */
    PageIndex.prototype.url;
    /** @type {?} */
    PageIndex.prototype.name;
    /** @type {?} */
    PageIndex.prototype.title;
    /** @type {?} */
    PageIndex.prototype.abstract;
    /** @type {?} */
    PageIndex.prototype.images;
    /** @type {?} */
    PageIndex.prototype.component;
    /** @type {?} */
    PageIndex.prototype.type;
    /** @type {?} */
    PageIndex.prototype.relationType;
}
export class PageRelation {
}
if (false) {
    /** @type {?} */
    PageRelation.prototype.id;
    /** @type {?} */
    PageRelation.prototype.page;
    /** @type {?} */
    PageRelation.prototype.type;
}
export class Page {
    /**
     * @param {?=} options
     */
    constructor(options) {
        this.meta = {};
        if (options) {
            Object.assign(this, options);
            if (options.related) {
                /** @type {?} */
                const related = options.related.map((/**
                 * @param {?} x
                 * @return {?}
                 */
                (x) => {
                    // const item = new PageIndex(x.page);
                    /** @type {?} */
                    const item = new PageIndex(x);
                    item.relationType = x.type;
                    return item;
                }));
                this.related = related;
            }
        }
    }
    /**
     * @param {?} id
     * @return {?}
     */
    getFeature(id) {
        return this.features.find((/**
         * @param {?} x
         * @return {?}
         */
        x => x.id === id)) || null;
    }
    /**
     * @param {?} type
     * @param {?} n
     * @return {?}
     */
    getFeatures(type, n) {
        return this.features ? this.features.filter((/**
         * @param {?} x
         * @param {?} i
         * @return {?}
         */
        (x, i) => (n.indexOf(Number(x.id)) !== -1 && x.type === type))).sort((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        (a, b) => a.type - b.type)) : [];
    }
    /**
     * @param {?} type
     * @return {?}
     */
    getFeaturesByTypes(type) {
        return this.features ? this.features.filter((/**
         * @param {?} x
         * @return {?}
         */
        (x) => (type.indexOf(Number(x.type)) !== -1))) : [];
    }
    /**
     * @param {?} type
     * @return {?}
     */
    getGroupedFeaturesByTypes(type) {
        /** @type {?} */
        const groups = {};
        type.forEach((/**
         * @param {?} type
         * @return {?}
         */
        type => {
            /** @type {?} */
            const group = groups[type] || { features: [] };
            if (this.features) {
                this.features.forEach((/**
                 * @param {?} x
                 * @return {?}
                 */
                (x) => {
                    if (Number(x.type) === type) {
                        group.features.push(x);
                    }
                }));
            }
            groups[type] = group;
        }));
        /*
        if (this.features) {
            this.features.forEach((x: Feature) => {
                if (type.indexOf(Number(x.type)) !== -1) {
                    const group = groups[x.type] || { features: [] };
                    group.features.push(x);
                    groups[x.type] = group;
                }
            });
        }
        */
        return groups;
    }
}
if (false) {
    /** @type {?} */
    Page.prototype.id;
    /** @type {?} */
    Page.prototype.slug;
    /** @type {?} */
    Page.prototype.url;
    /** @type {?} */
    Page.prototype.name;
    /** @type {?} */
    Page.prototype.title;
    /** @type {?} */
    Page.prototype.abstract;
    /** @type {?} */
    Page.prototype.description;
    /** @type {?} */
    Page.prototype.features;
    /** @type {?} */
    Page.prototype.meta;
    /** @type {?} */
    Page.prototype.images;
    /** @type {?} */
    Page.prototype.related;
    /** @type {?} */
    Page.prototype.taxonomies;
    /** @type {?} */
    Page.prototype.type;
    /** @type {?} */
    Page.prototype.component;
    /** @type {?} */
    Page.prototype.active;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL3BhZ2UvIiwic291cmNlcyI6WyJsaWIvcGFnZS9wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSwyQkFBOEQ7QUFFOUQsTUFBTSxPQUFPLFFBQVE7Q0FVcEI7OztJQVRBLHlCQUFlOztJQUNmLDBCQUFnQjs7SUFDaEIsNkJBQW1COztJQUNuQiwrQkFBcUI7O0lBQ3JCLDRCQUFrQjs7SUFDbEIsMEJBQWdCOztJQUNoQiwwQkFBZ0I7O0lBQ2hCLHlCQUFlOztJQUNmLHdCQUFjOztBQUdmLE1BQU0sT0FBTyxTQUFTOzs7O0lBWXJCLFlBQVksT0FBbUI7UUFDOUIsSUFBSSxPQUFPLEVBQUU7WUFDWixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztTQUM3QjtJQUNGLENBQUM7Q0FDRDs7O0lBaEJBLHVCQUFvQjs7SUFDcEIseUJBQWM7O0lBQ2Qsd0JBQWE7O0lBQ2IseUJBQWM7O0lBQ2QsMEJBQWU7O0lBQ2YsNkJBQWtCOztJQUNsQiwyQkFBaUI7O0lBQ2pCLDhCQUE0Qjs7SUFDNUIseUJBQXVCOztJQUN2QixpQ0FBK0I7O0FBU2hDLE1BQU0sT0FBTyxZQUFZO0NBSXhCOzs7SUFIQSwwQkFBb0I7O0lBQ3BCLDRCQUFXOztJQUNYLDRCQUF1Qjs7QUFHeEIsTUFBTSxPQUFPLElBQUk7Ozs7SUFpQmhCLFlBQVksT0FBYztRQVIxQixTQUFJLEdBQWMsRUFBRSxDQUFDO1FBU3BCLElBQUksT0FBTyxFQUFFO1lBQ1osTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDN0IsSUFBSSxPQUFPLENBQUMsT0FBTyxFQUFFOztzQkFDZCxPQUFPLEdBQWdCLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRzs7OztnQkFBQyxDQUFDLENBQWUsRUFBRSxFQUFFOzs7MEJBRTlELElBQUksR0FBRyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUM7b0JBQzdCLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztvQkFDM0IsT0FBTyxJQUFJLENBQUM7Z0JBQ2IsQ0FBQyxFQUFDO2dCQUNGLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO2FBQ3ZCO1NBQ0Q7SUFDRixDQUFDOzs7OztJQUVELFVBQVUsQ0FBRSxFQUFVO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBQyxJQUFJLElBQUksQ0FBQztJQUNyRCxDQUFDOzs7Ozs7SUFFRCxXQUFXLENBQUUsSUFBWSxFQUFFLENBQVc7UUFDckMsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU07Ozs7O1FBQUMsQ0FBQyxDQUFVLEVBQUUsQ0FBUyxFQUFFLEVBQUUsQ0FBQyxDQUN0RSxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLElBQUksQ0FDakQsRUFBQyxDQUFDLElBQUk7Ozs7O1FBQUMsQ0FBQyxDQUFVLEVBQUUsQ0FBVSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQzNELENBQUM7Ozs7O0lBRUQsa0JBQWtCLENBQUUsSUFBYztRQUNqQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTTs7OztRQUFDLENBQUMsQ0FBVSxFQUFFLEVBQUUsQ0FBQyxDQUMzRCxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FDbkMsRUFBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDVCxDQUFDOzs7OztJQUVELHlCQUF5QixDQUFFLElBQWM7O2NBQ2xDLE1BQU0sR0FBRyxFQUFFO1FBQ2pCLElBQUksQ0FBQyxPQUFPOzs7O1FBQUMsSUFBSSxDQUFDLEVBQUU7O2tCQUNiLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFO1lBQzlDLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDbEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPOzs7O2dCQUFDLENBQUMsQ0FBVSxFQUFFLEVBQUU7b0JBQ3BDLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLEVBQUU7d0JBQzVCLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO3FCQUN2QjtnQkFDRixDQUFDLEVBQUMsQ0FBQzthQUNIO1lBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUN0QixDQUFDLEVBQUMsQ0FBQztRQUNIOzs7Ozs7Ozs7O1VBVUU7UUFDRixPQUFPLE1BQU0sQ0FBQztJQUNmLENBQUM7Q0FHRDs7O0lBM0VBLGtCQUFvQjs7SUFDcEIsb0JBQWM7O0lBQ2QsbUJBQWE7O0lBQ2Isb0JBQWM7O0lBQ2QscUJBQWU7O0lBQ2Ysd0JBQWtCOztJQUNsQiwyQkFBcUI7O0lBQ3JCLHdCQUFxQjs7SUFDckIsb0JBQXFCOztJQUNyQixzQkFBaUI7O0lBQ2pCLHVCQUFzQjs7SUFDdEIsMEJBQXdCOztJQUN4QixvQkFBdUI7O0lBQ3ZCLHlCQUE0Qjs7SUFDNUIsc0JBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9jdW1lbnQsIEZlYXR1cmUsIEltYWdlLCBUYXhvbm9teSB9IGZyb20gJ0BkZXNpZ25yL2NvcmUnO1xuaW1wb3J0IHsgUGFnZUNvbXBvbmVudCB9IGZyb20gJy4vcGFnZS5jb21wb25lbnQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBhZ2VzIHsgW2tleTogc3RyaW5nXTogVHlwZTxQYWdlQ29tcG9uZW50PjsgfVxuXG5leHBvcnQgY2xhc3MgUGFnZU1ldGEge1xuXHRhcHBJZD86IHN0cmluZztcblx0YXV0aG9yPzogc3RyaW5nO1xuXHRjYW5vbmljYWw/OiBzdHJpbmc7XG5cdGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuXHRrZXl3b3Jkcz86IHN0cmluZztcblx0bG9jYWxlPzogc3RyaW5nO1xuXHRyb2JvdHM/OiBzdHJpbmc7XG5cdHRpdGxlPzogc3RyaW5nO1xuXHR0eXBlPzogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgUGFnZUluZGV4IGltcGxlbWVudHMgRG9jdW1lbnQge1xuXHRpZDogbnVtYmVyIHwgc3RyaW5nO1xuXHRzbHVnPzogc3RyaW5nO1xuXHR1cmw/OiBzdHJpbmc7XG5cdG5hbWU/OiBzdHJpbmc7XG5cdHRpdGxlPzogc3RyaW5nO1xuXHRhYnN0cmFjdD86IHN0cmluZztcblx0aW1hZ2VzPzogSW1hZ2VbXTtcblx0Y29tcG9uZW50PzogbnVtYmVyIHwgc3RyaW5nO1xuXHR0eXBlPzogbnVtYmVyIHwgc3RyaW5nO1xuXHRyZWxhdGlvblR5cGU/OiBudW1iZXIgfCBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3Iob3B0aW9ucz86IFBhZ2VJbmRleCkge1xuXHRcdGlmIChvcHRpb25zKSB7XG5cdFx0XHRPYmplY3QuYXNzaWduKHRoaXMsIG9wdGlvbnMpO1xuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgY2xhc3MgUGFnZVJlbGF0aW9uIGltcGxlbWVudHMgRG9jdW1lbnQge1xuXHRpZDogbnVtYmVyIHwgc3RyaW5nO1xuXHRwYWdlOiBQYWdlO1xuXHR0eXBlPzogbnVtYmVyIHwgc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgUGFnZSBpbXBsZW1lbnRzIERvY3VtZW50IHtcblx0aWQ6IG51bWJlciB8IHN0cmluZztcblx0c2x1Zz86IHN0cmluZztcblx0dXJsPzogc3RyaW5nO1xuXHRuYW1lPzogc3RyaW5nO1xuXHR0aXRsZT86IHN0cmluZztcblx0YWJzdHJhY3Q/OiBzdHJpbmc7XG5cdGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuXHRmZWF0dXJlcz86IEZlYXR1cmVbXTtcblx0bWV0YT86IFBhZ2VNZXRhID0ge307XG5cdGltYWdlcz86IEltYWdlW107XG5cdHJlbGF0ZWQ/OiBQYWdlSW5kZXhbXTtcblx0dGF4b25vbWllcz86IFRheG9ub215W107XG5cdHR5cGU/OiBudW1iZXIgfCBzdHJpbmc7XG5cdGNvbXBvbmVudD86IG51bWJlciB8IHN0cmluZztcblx0YWN0aXZlPzogYm9vbGVhbjtcblxuXHRjb25zdHJ1Y3RvcihvcHRpb25zPzogUGFnZSkge1xuXHRcdGlmIChvcHRpb25zKSB7XG5cdFx0XHRPYmplY3QuYXNzaWduKHRoaXMsIG9wdGlvbnMpO1xuXHRcdFx0aWYgKG9wdGlvbnMucmVsYXRlZCkge1xuXHRcdFx0XHRjb25zdCByZWxhdGVkOiBQYWdlSW5kZXhbXSA9IG9wdGlvbnMucmVsYXRlZC5tYXAoKHg6IFBhZ2VSZWxhdGlvbikgPT4ge1xuXHRcdFx0XHRcdC8vIGNvbnN0IGl0ZW0gPSBuZXcgUGFnZUluZGV4KHgucGFnZSk7XG5cdFx0XHRcdFx0Y29uc3QgaXRlbSA9IG5ldyBQYWdlSW5kZXgoeCk7XG5cdFx0XHRcdFx0aXRlbS5yZWxhdGlvblR5cGUgPSB4LnR5cGU7XG5cdFx0XHRcdFx0cmV0dXJuIGl0ZW07XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHR0aGlzLnJlbGF0ZWQgPSByZWxhdGVkO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGdldEZlYXR1cmU/KGlkOiBudW1iZXIpOiBGZWF0dXJlIHtcblx0XHRyZXR1cm4gdGhpcy5mZWF0dXJlcy5maW5kKHggPT4geC5pZCA9PT0gaWQpIHx8IG51bGw7XG5cdH1cblxuXHRnZXRGZWF0dXJlcz8odHlwZTogbnVtYmVyLCBuOiBudW1iZXJbXSk6IEZlYXR1cmVbXSB7XG5cdFx0cmV0dXJuIHRoaXMuZmVhdHVyZXMgPyB0aGlzLmZlYXR1cmVzLmZpbHRlcigoeDogRmVhdHVyZSwgaTogbnVtYmVyKSA9PiAoXG5cdFx0XHRuLmluZGV4T2YoTnVtYmVyKHguaWQpKSAhPT0gLTEgJiYgeC50eXBlID09PSB0eXBlXG5cdFx0KSkuc29ydCgoYTogRmVhdHVyZSwgYjogRmVhdHVyZSkgPT4gYS50eXBlIC0gYi50eXBlKSA6IFtdO1xuXHR9XG5cblx0Z2V0RmVhdHVyZXNCeVR5cGVzPyh0eXBlOiBudW1iZXJbXSk6IEZlYXR1cmVbXSB7XG5cdFx0cmV0dXJuIHRoaXMuZmVhdHVyZXMgPyB0aGlzLmZlYXR1cmVzLmZpbHRlcigoeDogRmVhdHVyZSkgPT4gKFxuXHRcdFx0dHlwZS5pbmRleE9mKE51bWJlcih4LnR5cGUpKSAhPT0gLTFcblx0XHQpKSA6IFtdO1xuXHR9XG5cblx0Z2V0R3JvdXBlZEZlYXR1cmVzQnlUeXBlcz8odHlwZTogbnVtYmVyW10pOiBhbnkge1xuXHRcdGNvbnN0IGdyb3VwcyA9IHt9O1xuXHRcdHR5cGUuZm9yRWFjaCh0eXBlID0+IHtcblx0XHRcdGNvbnN0IGdyb3VwID0gZ3JvdXBzW3R5cGVdIHx8IHsgZmVhdHVyZXM6IFtdIH07XG5cdFx0XHRpZiAodGhpcy5mZWF0dXJlcykge1xuXHRcdFx0XHR0aGlzLmZlYXR1cmVzLmZvckVhY2goKHg6IEZlYXR1cmUpID0+IHtcblx0XHRcdFx0XHRpZiAoTnVtYmVyKHgudHlwZSkgPT09IHR5cGUpIHtcblx0XHRcdFx0XHRcdGdyb3VwLmZlYXR1cmVzLnB1c2goeCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHRcdGdyb3Vwc1t0eXBlXSA9IGdyb3VwO1xuXHRcdH0pO1xuXHRcdC8qXG5cdFx0aWYgKHRoaXMuZmVhdHVyZXMpIHtcblx0XHRcdHRoaXMuZmVhdHVyZXMuZm9yRWFjaCgoeDogRmVhdHVyZSkgPT4ge1xuXHRcdFx0XHRpZiAodHlwZS5pbmRleE9mKE51bWJlcih4LnR5cGUpKSAhPT0gLTEpIHtcblx0XHRcdFx0XHRjb25zdCBncm91cCA9IGdyb3Vwc1t4LnR5cGVdIHx8IHsgZmVhdHVyZXM6IFtdIH07XG5cdFx0XHRcdFx0Z3JvdXAuZmVhdHVyZXMucHVzaCh4KTtcblx0XHRcdFx0XHRncm91cHNbeC50eXBlXSA9IGdyb3VwO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0Ki9cblx0XHRyZXR1cm4gZ3JvdXBzO1xuXHR9XG5cblxufVxuIl19