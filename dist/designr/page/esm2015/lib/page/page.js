/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                const related = options.related.map((x) => {
                    // const item = new PageIndex(x.page);
                    /** @type {?} */
                    const item = new PageIndex(x);
                    item.relationType = x.type;
                    return item;
                });
                this.related = related;
            }
        }
    }
    /**
     * @param {?} id
     * @return {?}
     */
    getFeature(id) {
        return this.features.find(x => x.id === id) || null;
    }
    /**
     * @param {?} type
     * @param {?} n
     * @return {?}
     */
    getFeatures(type, n) {
        return this.features ? this.features.filter((x, i) => (n.indexOf(Number(x.id)) !== -1 && x.type === type)).sort((a, b) => a.type - b.type) : [];
    }
    /**
     * @param {?} type
     * @return {?}
     */
    getFeaturesByTypes(type) {
        return this.features ? this.features.filter((x) => (type.indexOf(Number(x.type)) !== -1)) : [];
    }
    /**
     * @param {?} type
     * @return {?}
     */
    getGroupedFeaturesByTypes(type) {
        /** @type {?} */
        const groups = {};
        type.forEach(type => {
            /** @type {?} */
            const group = groups[type] || { features: [] };
            if (this.features) {
                this.features.forEach((x) => {
                    if (Number(x.type) === type) {
                        group.features.push(x);
                    }
                });
            }
            groups[type] = group;
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL3BhZ2UvIiwic291cmNlcyI6WyJsaWIvcGFnZS9wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSwyQkFBOEQ7QUFFOUQsTUFBTSxPQUFPLFFBQVE7Q0FVcEI7OztJQVRBLHlCQUFlOztJQUNmLDBCQUFnQjs7SUFDaEIsNkJBQW1COztJQUNuQiwrQkFBcUI7O0lBQ3JCLDRCQUFrQjs7SUFDbEIsMEJBQWdCOztJQUNoQiwwQkFBZ0I7O0lBQ2hCLHlCQUFlOztJQUNmLHdCQUFjOztBQUdmLE1BQU0sT0FBTyxTQUFTOzs7O0lBWXJCLFlBQVksT0FBbUI7UUFDOUIsSUFBSSxPQUFPLEVBQUU7WUFDWixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztTQUM3QjtJQUNGLENBQUM7Q0FDRDs7O0lBaEJBLHVCQUFvQjs7SUFDcEIseUJBQWM7O0lBQ2Qsd0JBQWE7O0lBQ2IseUJBQWM7O0lBQ2QsMEJBQWU7O0lBQ2YsNkJBQWtCOztJQUNsQiwyQkFBaUI7O0lBQ2pCLDhCQUE0Qjs7SUFDNUIseUJBQXVCOztJQUN2QixpQ0FBK0I7O0FBU2hDLE1BQU0sT0FBTyxZQUFZO0NBSXhCOzs7SUFIQSwwQkFBb0I7O0lBQ3BCLDRCQUFXOztJQUNYLDRCQUF1Qjs7QUFHeEIsTUFBTSxPQUFPLElBQUk7Ozs7SUFpQmhCLFlBQVksT0FBYztRQVIxQixTQUFJLEdBQWMsRUFBRSxDQUFDO1FBU3BCLElBQUksT0FBTyxFQUFFO1lBQ1osTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDN0IsSUFBSSxPQUFPLENBQUMsT0FBTyxFQUFFOztzQkFDZCxPQUFPLEdBQWdCLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBZSxFQUFFLEVBQUU7OzswQkFFOUQsSUFBSSxHQUFHLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQztvQkFDN0IsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO29CQUMzQixPQUFPLElBQUksQ0FBQztnQkFDYixDQUFDLENBQUM7Z0JBQ0YsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7YUFDdkI7U0FDRDtJQUNGLENBQUM7Ozs7O0lBRUQsVUFBVSxDQUFFLEVBQVU7UUFDckIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDO0lBQ3JELENBQUM7Ozs7OztJQUVELFdBQVcsQ0FBRSxJQUFZLEVBQUUsQ0FBVztRQUNyQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBVSxFQUFFLENBQVMsRUFBRSxFQUFFLENBQUMsQ0FDdEUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksS0FBSyxJQUFJLENBQ2pELENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFVLEVBQUUsQ0FBVSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQzNELENBQUM7Ozs7O0lBRUQsa0JBQWtCLENBQUUsSUFBYztRQUNqQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBVSxFQUFFLEVBQUUsQ0FBQyxDQUMzRCxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FDbkMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDVCxDQUFDOzs7OztJQUVELHlCQUF5QixDQUFFLElBQWM7O2NBQ2xDLE1BQU0sR0FBRyxFQUFFO1FBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7O2tCQUNiLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFO1lBQzlDLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDbEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFVLEVBQUUsRUFBRTtvQkFDcEMsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRTt3QkFDNUIsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7cUJBQ3ZCO2dCQUNGLENBQUMsQ0FBQyxDQUFDO2FBQ0g7WUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxDQUFDO1FBQ0g7Ozs7Ozs7Ozs7VUFVRTtRQUNGLE9BQU8sTUFBTSxDQUFDO0lBQ2YsQ0FBQztDQUdEOzs7SUEzRUEsa0JBQW9COztJQUNwQixvQkFBYzs7SUFDZCxtQkFBYTs7SUFDYixvQkFBYzs7SUFDZCxxQkFBZTs7SUFDZix3QkFBa0I7O0lBQ2xCLDJCQUFxQjs7SUFDckIsd0JBQXFCOztJQUNyQixvQkFBcUI7O0lBQ3JCLHNCQUFpQjs7SUFDakIsdUJBQXNCOztJQUN0QiwwQkFBd0I7O0lBQ3hCLG9CQUF1Qjs7SUFDdkIseUJBQTRCOztJQUM1QixzQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb2N1bWVudCwgRmVhdHVyZSwgSW1hZ2UsIFRheG9ub215IH0gZnJvbSAnQGRlc2lnbnIvY29yZSc7XG5pbXBvcnQgeyBQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGFnZXMgeyBba2V5OiBzdHJpbmddOiBUeXBlPFBhZ2VDb21wb25lbnQ+OyB9XG5cbmV4cG9ydCBjbGFzcyBQYWdlTWV0YSB7XG5cdGFwcElkPzogc3RyaW5nO1xuXHRhdXRob3I/OiBzdHJpbmc7XG5cdGNhbm9uaWNhbD86IHN0cmluZztcblx0ZGVzY3JpcHRpb24/OiBzdHJpbmc7XG5cdGtleXdvcmRzPzogc3RyaW5nO1xuXHRsb2NhbGU/OiBzdHJpbmc7XG5cdHJvYm90cz86IHN0cmluZztcblx0dGl0bGU/OiBzdHJpbmc7XG5cdHR5cGU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBQYWdlSW5kZXggaW1wbGVtZW50cyBEb2N1bWVudCB7XG5cdGlkOiBudW1iZXIgfCBzdHJpbmc7XG5cdHNsdWc/OiBzdHJpbmc7XG5cdHVybD86IHN0cmluZztcblx0bmFtZT86IHN0cmluZztcblx0dGl0bGU/OiBzdHJpbmc7XG5cdGFic3RyYWN0Pzogc3RyaW5nO1xuXHRpbWFnZXM/OiBJbWFnZVtdO1xuXHRjb21wb25lbnQ/OiBudW1iZXIgfCBzdHJpbmc7XG5cdHR5cGU/OiBudW1iZXIgfCBzdHJpbmc7XG5cdHJlbGF0aW9uVHlwZT86IG51bWJlciB8IHN0cmluZztcblxuXHRjb25zdHJ1Y3RvcihvcHRpb25zPzogUGFnZUluZGV4KSB7XG5cdFx0aWYgKG9wdGlvbnMpIHtcblx0XHRcdE9iamVjdC5hc3NpZ24odGhpcywgb3B0aW9ucyk7XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBQYWdlUmVsYXRpb24gaW1wbGVtZW50cyBEb2N1bWVudCB7XG5cdGlkOiBudW1iZXIgfCBzdHJpbmc7XG5cdHBhZ2U6IFBhZ2U7XG5cdHR5cGU/OiBudW1iZXIgfCBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBQYWdlIGltcGxlbWVudHMgRG9jdW1lbnQge1xuXHRpZDogbnVtYmVyIHwgc3RyaW5nO1xuXHRzbHVnPzogc3RyaW5nO1xuXHR1cmw/OiBzdHJpbmc7XG5cdG5hbWU/OiBzdHJpbmc7XG5cdHRpdGxlPzogc3RyaW5nO1xuXHRhYnN0cmFjdD86IHN0cmluZztcblx0ZGVzY3JpcHRpb24/OiBzdHJpbmc7XG5cdGZlYXR1cmVzPzogRmVhdHVyZVtdO1xuXHRtZXRhPzogUGFnZU1ldGEgPSB7fTtcblx0aW1hZ2VzPzogSW1hZ2VbXTtcblx0cmVsYXRlZD86IFBhZ2VJbmRleFtdO1xuXHR0YXhvbm9taWVzPzogVGF4b25vbXlbXTtcblx0dHlwZT86IG51bWJlciB8IHN0cmluZztcblx0Y29tcG9uZW50PzogbnVtYmVyIHwgc3RyaW5nO1xuXHRhY3RpdmU/OiBib29sZWFuO1xuXG5cdGNvbnN0cnVjdG9yKG9wdGlvbnM/OiBQYWdlKSB7XG5cdFx0aWYgKG9wdGlvbnMpIHtcblx0XHRcdE9iamVjdC5hc3NpZ24odGhpcywgb3B0aW9ucyk7XG5cdFx0XHRpZiAob3B0aW9ucy5yZWxhdGVkKSB7XG5cdFx0XHRcdGNvbnN0IHJlbGF0ZWQ6IFBhZ2VJbmRleFtdID0gb3B0aW9ucy5yZWxhdGVkLm1hcCgoeDogUGFnZVJlbGF0aW9uKSA9PiB7XG5cdFx0XHRcdFx0Ly8gY29uc3QgaXRlbSA9IG5ldyBQYWdlSW5kZXgoeC5wYWdlKTtcblx0XHRcdFx0XHRjb25zdCBpdGVtID0gbmV3IFBhZ2VJbmRleCh4KTtcblx0XHRcdFx0XHRpdGVtLnJlbGF0aW9uVHlwZSA9IHgudHlwZTtcblx0XHRcdFx0XHRyZXR1cm4gaXRlbTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHRoaXMucmVsYXRlZCA9IHJlbGF0ZWQ7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Z2V0RmVhdHVyZT8oaWQ6IG51bWJlcik6IEZlYXR1cmUge1xuXHRcdHJldHVybiB0aGlzLmZlYXR1cmVzLmZpbmQoeCA9PiB4LmlkID09PSBpZCkgfHwgbnVsbDtcblx0fVxuXG5cdGdldEZlYXR1cmVzPyh0eXBlOiBudW1iZXIsIG46IG51bWJlcltdKTogRmVhdHVyZVtdIHtcblx0XHRyZXR1cm4gdGhpcy5mZWF0dXJlcyA/IHRoaXMuZmVhdHVyZXMuZmlsdGVyKCh4OiBGZWF0dXJlLCBpOiBudW1iZXIpID0+IChcblx0XHRcdG4uaW5kZXhPZihOdW1iZXIoeC5pZCkpICE9PSAtMSAmJiB4LnR5cGUgPT09IHR5cGVcblx0XHQpKS5zb3J0KChhOiBGZWF0dXJlLCBiOiBGZWF0dXJlKSA9PiBhLnR5cGUgLSBiLnR5cGUpIDogW107XG5cdH1cblxuXHRnZXRGZWF0dXJlc0J5VHlwZXM/KHR5cGU6IG51bWJlcltdKTogRmVhdHVyZVtdIHtcblx0XHRyZXR1cm4gdGhpcy5mZWF0dXJlcyA/IHRoaXMuZmVhdHVyZXMuZmlsdGVyKCh4OiBGZWF0dXJlKSA9PiAoXG5cdFx0XHR0eXBlLmluZGV4T2YoTnVtYmVyKHgudHlwZSkpICE9PSAtMVxuXHRcdCkpIDogW107XG5cdH1cblxuXHRnZXRHcm91cGVkRmVhdHVyZXNCeVR5cGVzPyh0eXBlOiBudW1iZXJbXSk6IGFueSB7XG5cdFx0Y29uc3QgZ3JvdXBzID0ge307XG5cdFx0dHlwZS5mb3JFYWNoKHR5cGUgPT4ge1xuXHRcdFx0Y29uc3QgZ3JvdXAgPSBncm91cHNbdHlwZV0gfHwgeyBmZWF0dXJlczogW10gfTtcblx0XHRcdGlmICh0aGlzLmZlYXR1cmVzKSB7XG5cdFx0XHRcdHRoaXMuZmVhdHVyZXMuZm9yRWFjaCgoeDogRmVhdHVyZSkgPT4ge1xuXHRcdFx0XHRcdGlmIChOdW1iZXIoeC50eXBlKSA9PT0gdHlwZSkge1xuXHRcdFx0XHRcdFx0Z3JvdXAuZmVhdHVyZXMucHVzaCh4KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdFx0Z3JvdXBzW3R5cGVdID0gZ3JvdXA7XG5cdFx0fSk7XG5cdFx0Lypcblx0XHRpZiAodGhpcy5mZWF0dXJlcykge1xuXHRcdFx0dGhpcy5mZWF0dXJlcy5mb3JFYWNoKCh4OiBGZWF0dXJlKSA9PiB7XG5cdFx0XHRcdGlmICh0eXBlLmluZGV4T2YoTnVtYmVyKHgudHlwZSkpICE9PSAtMSkge1xuXHRcdFx0XHRcdGNvbnN0IGdyb3VwID0gZ3JvdXBzW3gudHlwZV0gfHwgeyBmZWF0dXJlczogW10gfTtcblx0XHRcdFx0XHRncm91cC5mZWF0dXJlcy5wdXNoKHgpO1xuXHRcdFx0XHRcdGdyb3Vwc1t4LnR5cGVdID0gZ3JvdXA7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1cblx0XHQqL1xuXHRcdHJldHVybiBncm91cHM7XG5cdH1cblxuXG59XG4iXX0=