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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL3BhZ2UvIiwic291cmNlcyI6WyJsaWIvcGFnZS9wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSwyQkFBOEQ7QUFFOUQsTUFBTSxPQUFPLFFBQVE7Q0FVcEI7OztJQVRBLHlCQUFlOztJQUNmLDBCQUFnQjs7SUFDaEIsNkJBQW1COztJQUNuQiwrQkFBcUI7O0lBQ3JCLDRCQUFrQjs7SUFDbEIsMEJBQWdCOztJQUNoQiwwQkFBZ0I7O0lBQ2hCLHlCQUFlOztJQUNmLHdCQUFjOztBQUdmLE1BQU0sT0FBTyxTQUFTOzs7O0lBWXJCLFlBQVksT0FBbUI7UUFDOUIsSUFBSSxPQUFPLEVBQUU7WUFDWixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztTQUM3QjtJQUNGLENBQUM7Q0FDRDs7O0lBaEJBLHVCQUFvQjs7SUFDcEIseUJBQWM7O0lBQ2Qsd0JBQWE7O0lBQ2IseUJBQWM7O0lBQ2QsMEJBQWU7O0lBQ2YsNkJBQWtCOztJQUNsQiwyQkFBaUI7O0lBQ2pCLDhCQUE0Qjs7SUFDNUIseUJBQXVCOztJQUN2QixpQ0FBK0I7O0FBU2hDLE1BQU0sT0FBTyxZQUFZO0NBSXhCOzs7SUFIQSwwQkFBb0I7O0lBQ3BCLDRCQUFXOztJQUNYLDRCQUF1Qjs7QUFHeEIsTUFBTSxPQUFPLElBQUk7Ozs7SUFpQmhCLFlBQVksT0FBYztRQVIxQixTQUFJLEdBQWMsRUFBRSxDQUFDO1FBU3BCLElBQUksT0FBTyxFQUFFO1lBQ1osTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDN0IsSUFBSSxPQUFPLENBQUMsT0FBTyxFQUFFOztzQkFDZCxPQUFPLEdBQWdCLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRzs7OztnQkFBQyxDQUFDLENBQWUsRUFBRSxFQUFFOzs7MEJBRTlELElBQUksR0FBRyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUM7b0JBQzdCLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztvQkFDM0IsT0FBTyxJQUFJLENBQUM7Z0JBQ2IsQ0FBQyxFQUFDO2dCQUNGLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO2FBQ3ZCO1NBQ0Q7SUFDRixDQUFDOzs7OztJQUVELFVBQVUsQ0FBRSxFQUFVO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBQyxJQUFJLElBQUksQ0FBQztJQUNyRCxDQUFDOzs7Ozs7SUFFRCxXQUFXLENBQUUsSUFBWSxFQUFFLENBQVc7UUFDckMsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU07Ozs7O1FBQUMsQ0FBQyxDQUFVLEVBQUUsQ0FBUyxFQUFFLEVBQUUsQ0FBQyxDQUN0RSxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLElBQUksQ0FDakQsRUFBQyxDQUFDLElBQUk7Ozs7O1FBQUMsQ0FBQyxDQUFVLEVBQUUsQ0FBVSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQzNELENBQUM7Ozs7O0lBRUQsa0JBQWtCLENBQUUsSUFBYztRQUNqQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTTs7OztRQUFDLENBQUMsQ0FBVSxFQUFFLEVBQUUsQ0FBQyxDQUMzRCxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FDbkMsRUFBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDVCxDQUFDOzs7OztJQUVELHlCQUF5QixDQUFFLElBQWM7O2NBQ2xDLE1BQU0sR0FBRyxFQUFFO1FBQ2pCLElBQUksQ0FBQyxPQUFPOzs7O1FBQUMsSUFBSSxDQUFDLEVBQUU7O2tCQUNiLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFO1lBQzlDLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDbEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPOzs7O2dCQUFDLENBQUMsQ0FBVSxFQUFFLEVBQUU7b0JBQ3BDLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLEVBQUU7d0JBQzVCLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO3FCQUN2QjtnQkFDRixDQUFDLEVBQUMsQ0FBQzthQUNIO1lBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUN0QixDQUFDLEVBQUMsQ0FBQztRQUNIOzs7Ozs7Ozs7O1VBVUU7UUFDRixPQUFPLE1BQU0sQ0FBQztJQUNmLENBQUM7Q0FHRDs7O0lBM0VBLGtCQUFvQjs7SUFDcEIsb0JBQWM7O0lBQ2QsbUJBQWE7O0lBQ2Isb0JBQWM7O0lBQ2QscUJBQWU7O0lBQ2Ysd0JBQWtCOztJQUNsQiwyQkFBcUI7O0lBQ3JCLHdCQUFxQjs7SUFDckIsb0JBQXFCOztJQUNyQixzQkFBaUI7O0lBQ2pCLHVCQUFzQjs7SUFDdEIsMEJBQXdCOztJQUN4QixvQkFBdUI7O0lBQ3ZCLHlCQUE0Qjs7SUFDNUIsc0JBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEb2N1bWVudCwgRmVhdHVyZSwgSW1hZ2UsIFRheG9ub215IH0gZnJvbSAnQGRlc2lnbnIvY29yZSc7XHJcbmltcG9ydCB7IFBhZ2VDb21wb25lbnQgfSBmcm9tICcuL3BhZ2UuY29tcG9uZW50JztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUGFnZXMgeyBba2V5OiBzdHJpbmddOiBUeXBlPFBhZ2VDb21wb25lbnQ+OyB9XHJcblxyXG5leHBvcnQgY2xhc3MgUGFnZU1ldGEge1xyXG5cdGFwcElkPzogc3RyaW5nO1xyXG5cdGF1dGhvcj86IHN0cmluZztcclxuXHRjYW5vbmljYWw/OiBzdHJpbmc7XHJcblx0ZGVzY3JpcHRpb24/OiBzdHJpbmc7XHJcblx0a2V5d29yZHM/OiBzdHJpbmc7XHJcblx0bG9jYWxlPzogc3RyaW5nO1xyXG5cdHJvYm90cz86IHN0cmluZztcclxuXHR0aXRsZT86IHN0cmluZztcclxuXHR0eXBlPzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUGFnZUluZGV4IGltcGxlbWVudHMgRG9jdW1lbnQge1xyXG5cdGlkOiBudW1iZXIgfCBzdHJpbmc7XHJcblx0c2x1Zz86IHN0cmluZztcclxuXHR1cmw/OiBzdHJpbmc7XHJcblx0bmFtZT86IHN0cmluZztcclxuXHR0aXRsZT86IHN0cmluZztcclxuXHRhYnN0cmFjdD86IHN0cmluZztcclxuXHRpbWFnZXM/OiBJbWFnZVtdO1xyXG5cdGNvbXBvbmVudD86IG51bWJlciB8IHN0cmluZztcclxuXHR0eXBlPzogbnVtYmVyIHwgc3RyaW5nO1xyXG5cdHJlbGF0aW9uVHlwZT86IG51bWJlciB8IHN0cmluZztcclxuXHJcblx0Y29uc3RydWN0b3Iob3B0aW9ucz86IFBhZ2VJbmRleCkge1xyXG5cdFx0aWYgKG9wdGlvbnMpIHtcclxuXHRcdFx0T2JqZWN0LmFzc2lnbih0aGlzLCBvcHRpb25zKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQYWdlUmVsYXRpb24gaW1wbGVtZW50cyBEb2N1bWVudCB7XHJcblx0aWQ6IG51bWJlciB8IHN0cmluZztcclxuXHRwYWdlOiBQYWdlO1xyXG5cdHR5cGU/OiBudW1iZXIgfCBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQYWdlIGltcGxlbWVudHMgRG9jdW1lbnQge1xyXG5cdGlkOiBudW1iZXIgfCBzdHJpbmc7XHJcblx0c2x1Zz86IHN0cmluZztcclxuXHR1cmw/OiBzdHJpbmc7XHJcblx0bmFtZT86IHN0cmluZztcclxuXHR0aXRsZT86IHN0cmluZztcclxuXHRhYnN0cmFjdD86IHN0cmluZztcclxuXHRkZXNjcmlwdGlvbj86IHN0cmluZztcclxuXHRmZWF0dXJlcz86IEZlYXR1cmVbXTtcclxuXHRtZXRhPzogUGFnZU1ldGEgPSB7fTtcclxuXHRpbWFnZXM/OiBJbWFnZVtdO1xyXG5cdHJlbGF0ZWQ/OiBQYWdlSW5kZXhbXTtcclxuXHR0YXhvbm9taWVzPzogVGF4b25vbXlbXTtcclxuXHR0eXBlPzogbnVtYmVyIHwgc3RyaW5nO1xyXG5cdGNvbXBvbmVudD86IG51bWJlciB8IHN0cmluZztcclxuXHRhY3RpdmU/OiBib29sZWFuO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihvcHRpb25zPzogUGFnZSkge1xyXG5cdFx0aWYgKG9wdGlvbnMpIHtcclxuXHRcdFx0T2JqZWN0LmFzc2lnbih0aGlzLCBvcHRpb25zKTtcclxuXHRcdFx0aWYgKG9wdGlvbnMucmVsYXRlZCkge1xyXG5cdFx0XHRcdGNvbnN0IHJlbGF0ZWQ6IFBhZ2VJbmRleFtdID0gb3B0aW9ucy5yZWxhdGVkLm1hcCgoeDogUGFnZVJlbGF0aW9uKSA9PiB7XHJcblx0XHRcdFx0XHQvLyBjb25zdCBpdGVtID0gbmV3IFBhZ2VJbmRleCh4LnBhZ2UpO1xyXG5cdFx0XHRcdFx0Y29uc3QgaXRlbSA9IG5ldyBQYWdlSW5kZXgoeCk7XHJcblx0XHRcdFx0XHRpdGVtLnJlbGF0aW9uVHlwZSA9IHgudHlwZTtcclxuXHRcdFx0XHRcdHJldHVybiBpdGVtO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdHRoaXMucmVsYXRlZCA9IHJlbGF0ZWQ7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGdldEZlYXR1cmU/KGlkOiBudW1iZXIpOiBGZWF0dXJlIHtcclxuXHRcdHJldHVybiB0aGlzLmZlYXR1cmVzLmZpbmQoeCA9PiB4LmlkID09PSBpZCkgfHwgbnVsbDtcclxuXHR9XHJcblxyXG5cdGdldEZlYXR1cmVzPyh0eXBlOiBudW1iZXIsIG46IG51bWJlcltdKTogRmVhdHVyZVtdIHtcclxuXHRcdHJldHVybiB0aGlzLmZlYXR1cmVzID8gdGhpcy5mZWF0dXJlcy5maWx0ZXIoKHg6IEZlYXR1cmUsIGk6IG51bWJlcikgPT4gKFxyXG5cdFx0XHRuLmluZGV4T2YoTnVtYmVyKHguaWQpKSAhPT0gLTEgJiYgeC50eXBlID09PSB0eXBlXHJcblx0XHQpKS5zb3J0KChhOiBGZWF0dXJlLCBiOiBGZWF0dXJlKSA9PiBhLnR5cGUgLSBiLnR5cGUpIDogW107XHJcblx0fVxyXG5cclxuXHRnZXRGZWF0dXJlc0J5VHlwZXM/KHR5cGU6IG51bWJlcltdKTogRmVhdHVyZVtdIHtcclxuXHRcdHJldHVybiB0aGlzLmZlYXR1cmVzID8gdGhpcy5mZWF0dXJlcy5maWx0ZXIoKHg6IEZlYXR1cmUpID0+IChcclxuXHRcdFx0dHlwZS5pbmRleE9mKE51bWJlcih4LnR5cGUpKSAhPT0gLTFcclxuXHRcdCkpIDogW107XHJcblx0fVxyXG5cclxuXHRnZXRHcm91cGVkRmVhdHVyZXNCeVR5cGVzPyh0eXBlOiBudW1iZXJbXSk6IGFueSB7XHJcblx0XHRjb25zdCBncm91cHMgPSB7fTtcclxuXHRcdHR5cGUuZm9yRWFjaCh0eXBlID0+IHtcclxuXHRcdFx0Y29uc3QgZ3JvdXAgPSBncm91cHNbdHlwZV0gfHwgeyBmZWF0dXJlczogW10gfTtcclxuXHRcdFx0aWYgKHRoaXMuZmVhdHVyZXMpIHtcclxuXHRcdFx0XHR0aGlzLmZlYXR1cmVzLmZvckVhY2goKHg6IEZlYXR1cmUpID0+IHtcclxuXHRcdFx0XHRcdGlmIChOdW1iZXIoeC50eXBlKSA9PT0gdHlwZSkge1xyXG5cdFx0XHRcdFx0XHRncm91cC5mZWF0dXJlcy5wdXNoKHgpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHRcdGdyb3Vwc1t0eXBlXSA9IGdyb3VwO1xyXG5cdFx0fSk7XHJcblx0XHQvKlxyXG5cdFx0aWYgKHRoaXMuZmVhdHVyZXMpIHtcclxuXHRcdFx0dGhpcy5mZWF0dXJlcy5mb3JFYWNoKCh4OiBGZWF0dXJlKSA9PiB7XHJcblx0XHRcdFx0aWYgKHR5cGUuaW5kZXhPZihOdW1iZXIoeC50eXBlKSkgIT09IC0xKSB7XHJcblx0XHRcdFx0XHRjb25zdCBncm91cCA9IGdyb3Vwc1t4LnR5cGVdIHx8IHsgZmVhdHVyZXM6IFtdIH07XHJcblx0XHRcdFx0XHRncm91cC5mZWF0dXJlcy5wdXNoKHgpO1xyXG5cdFx0XHRcdFx0Z3JvdXBzW3gudHlwZV0gPSBncm91cDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdFx0Ki9cclxuXHRcdHJldHVybiBncm91cHM7XHJcblx0fVxyXG5cclxuXHJcbn1cclxuIl19