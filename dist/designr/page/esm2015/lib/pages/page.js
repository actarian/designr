/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL3BhZ2UvIiwic291cmNlcyI6WyJsaWIvcGFnZXMvcGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsTUFBTSxPQUFPLFFBQVE7Q0FVcEI7OztJQVRBLHlCQUFlOztJQUNmLDBCQUFnQjs7SUFDaEIsNkJBQW1COztJQUNuQiwrQkFBcUI7O0lBQ3JCLDRCQUFrQjs7SUFDbEIsMEJBQWdCOztJQUNoQiwwQkFBZ0I7O0lBQ2hCLHlCQUFlOztJQUNmLHdCQUFjOztBQUdmLE1BQU0sT0FBTyxTQUFTOzs7O0lBV3JCLFlBQVksT0FBbUI7UUFDOUIsSUFBSSxPQUFPLEVBQUU7WUFDWixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztTQUM3QjtJQUNGLENBQUM7Q0FDRDs7O0lBZkEsdUJBQW9COztJQUNwQix5QkFBYzs7SUFDZCx3QkFBYTs7SUFDYix5QkFBYzs7SUFDZCwwQkFBZTs7SUFDZiw2QkFBa0I7O0lBQ2xCLDJCQUFpQjs7SUFDakIseUJBQXVCOztJQUN2QixpQ0FBK0I7O0FBU2hDLE1BQU0sT0FBTyxZQUFZO0NBSXhCOzs7SUFIQSwwQkFBb0I7O0lBQ3BCLDRCQUFXOztJQUNYLDRCQUF1Qjs7QUFHeEIsTUFBTSxPQUFPLElBQUk7Ozs7SUFpQmhCLFlBQVksT0FBYztRQVIxQixTQUFJLEdBQWMsRUFBRSxDQUFDO1FBU3BCLElBQUksT0FBTyxFQUFFO1lBQ1osTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDN0IsSUFBSSxPQUFPLENBQUMsT0FBTyxFQUFFOztzQkFDZCxPQUFPLEdBQWdCLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBZSxFQUFFLEVBQUU7OzswQkFFOUQsSUFBSSxHQUFHLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQztvQkFDN0IsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO29CQUMzQixPQUFPLElBQUksQ0FBQztnQkFDYixDQUFDLENBQUM7Z0JBQ0YsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7YUFDdkI7U0FDRDtJQUNGLENBQUM7Ozs7O0lBRUQsVUFBVSxDQUFFLEVBQVU7UUFDckIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDO0lBQ3JELENBQUM7Ozs7OztJQUVELFdBQVcsQ0FBRSxJQUFZLEVBQUUsQ0FBVztRQUNyQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBVSxFQUFFLENBQVMsRUFBRSxFQUFFLENBQUMsQ0FDdEUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksS0FBSyxJQUFJLENBQ2pELENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFVLEVBQUUsQ0FBVSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQzNELENBQUM7Ozs7O0lBRUQsa0JBQWtCLENBQUUsSUFBYztRQUNqQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBVSxFQUFFLEVBQUUsQ0FBQyxDQUMzRCxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FDbkMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDVCxDQUFDOzs7OztJQUVELHlCQUF5QixDQUFFLElBQWM7O2NBQ2xDLE1BQU0sR0FBRyxFQUFFO1FBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7O2tCQUNiLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFO1lBQzlDLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDbEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFVLEVBQUUsRUFBRTtvQkFDcEMsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRTt3QkFDNUIsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7cUJBQ3ZCO2dCQUNGLENBQUMsQ0FBQyxDQUFDO2FBQ0g7WUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxDQUFDO1FBQ0g7Ozs7Ozs7Ozs7VUFVRTtRQUNGLE9BQU8sTUFBTSxDQUFDO0lBQ2YsQ0FBQztDQUdEOzs7SUEzRUEsa0JBQW9COztJQUNwQixvQkFBYzs7SUFDZCxtQkFBYTs7SUFDYixvQkFBYzs7SUFDZCxxQkFBZTs7SUFDZix3QkFBa0I7O0lBQ2xCLDJCQUFxQjs7SUFDckIsd0JBQXFCOztJQUNyQixvQkFBcUI7O0lBQ3JCLHNCQUFpQjs7SUFDakIsdUJBQXNCOztJQUN0QiwwQkFBd0I7O0lBQ3hCLG9CQUF1Qjs7SUFDdkIseUJBQTRCOztJQUM1QixzQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEb2N1bWVudCwgRmVhdHVyZSwgSW1hZ2UsIFRheG9ub215IH0gZnJvbSAnQGRlc2lnbnIvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBQYWdlTWV0YSB7XG5cdGFwcElkPzogc3RyaW5nO1xuXHRhdXRob3I/OiBzdHJpbmc7XG5cdGNhbm9uaWNhbD86IHN0cmluZztcblx0ZGVzY3JpcHRpb24/OiBzdHJpbmc7XG5cdGtleXdvcmRzPzogc3RyaW5nO1xuXHRsb2NhbGU/OiBzdHJpbmc7XG5cdHJvYm90cz86IHN0cmluZztcblx0dGl0bGU/OiBzdHJpbmc7XG5cdHR5cGU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBQYWdlSW5kZXggaW1wbGVtZW50cyBEb2N1bWVudCB7XG5cdGlkOiBudW1iZXIgfCBzdHJpbmc7XG5cdHNsdWc/OiBzdHJpbmc7XG5cdHVybD86IHN0cmluZztcblx0bmFtZT86IHN0cmluZztcblx0dGl0bGU/OiBzdHJpbmc7XG5cdGFic3RyYWN0Pzogc3RyaW5nO1xuXHRpbWFnZXM/OiBJbWFnZVtdO1xuXHR0eXBlPzogbnVtYmVyIHwgc3RyaW5nO1xuXHRyZWxhdGlvblR5cGU/OiBudW1iZXIgfCBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3Iob3B0aW9ucz86IFBhZ2VJbmRleCkge1xuXHRcdGlmIChvcHRpb25zKSB7XG5cdFx0XHRPYmplY3QuYXNzaWduKHRoaXMsIG9wdGlvbnMpO1xuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgY2xhc3MgUGFnZVJlbGF0aW9uIGltcGxlbWVudHMgRG9jdW1lbnQge1xuXHRpZDogbnVtYmVyIHwgc3RyaW5nO1xuXHRwYWdlOiBQYWdlO1xuXHR0eXBlPzogbnVtYmVyIHwgc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgUGFnZSBpbXBsZW1lbnRzIERvY3VtZW50IHtcblx0aWQ6IG51bWJlciB8IHN0cmluZztcblx0c2x1Zz86IHN0cmluZztcblx0dXJsPzogc3RyaW5nO1xuXHRuYW1lPzogc3RyaW5nO1xuXHR0aXRsZT86IHN0cmluZztcblx0YWJzdHJhY3Q/OiBzdHJpbmc7XG5cdGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuXHRmZWF0dXJlcz86IEZlYXR1cmVbXTtcblx0bWV0YT86IFBhZ2VNZXRhID0ge307XG5cdGltYWdlcz86IEltYWdlW107XG5cdHJlbGF0ZWQ/OiBQYWdlSW5kZXhbXTtcblx0dGF4b25vbWllcz86IFRheG9ub215W107XG5cdHR5cGU/OiBudW1iZXIgfCBzdHJpbmc7XG5cdGNvbXBvbmVudD86IG51bWJlciB8IHN0cmluZztcblx0YWN0aXZlPzogYm9vbGVhbjtcblxuXHRjb25zdHJ1Y3RvcihvcHRpb25zPzogUGFnZSkge1xuXHRcdGlmIChvcHRpb25zKSB7XG5cdFx0XHRPYmplY3QuYXNzaWduKHRoaXMsIG9wdGlvbnMpO1xuXHRcdFx0aWYgKG9wdGlvbnMucmVsYXRlZCkge1xuXHRcdFx0XHRjb25zdCByZWxhdGVkOiBQYWdlSW5kZXhbXSA9IG9wdGlvbnMucmVsYXRlZC5tYXAoKHg6IFBhZ2VSZWxhdGlvbikgPT4ge1xuXHRcdFx0XHRcdC8vIGNvbnN0IGl0ZW0gPSBuZXcgUGFnZUluZGV4KHgucGFnZSk7XG5cdFx0XHRcdFx0Y29uc3QgaXRlbSA9IG5ldyBQYWdlSW5kZXgoeCk7XG5cdFx0XHRcdFx0aXRlbS5yZWxhdGlvblR5cGUgPSB4LnR5cGU7XG5cdFx0XHRcdFx0cmV0dXJuIGl0ZW07XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHR0aGlzLnJlbGF0ZWQgPSByZWxhdGVkO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGdldEZlYXR1cmU/KGlkOiBudW1iZXIpOiBGZWF0dXJlIHtcblx0XHRyZXR1cm4gdGhpcy5mZWF0dXJlcy5maW5kKHggPT4geC5pZCA9PT0gaWQpIHx8IG51bGw7XG5cdH1cblxuXHRnZXRGZWF0dXJlcz8odHlwZTogbnVtYmVyLCBuOiBudW1iZXJbXSk6IEZlYXR1cmVbXSB7XG5cdFx0cmV0dXJuIHRoaXMuZmVhdHVyZXMgPyB0aGlzLmZlYXR1cmVzLmZpbHRlcigoeDogRmVhdHVyZSwgaTogbnVtYmVyKSA9PiAoXG5cdFx0XHRuLmluZGV4T2YoTnVtYmVyKHguaWQpKSAhPT0gLTEgJiYgeC50eXBlID09PSB0eXBlXG5cdFx0KSkuc29ydCgoYTogRmVhdHVyZSwgYjogRmVhdHVyZSkgPT4gYS50eXBlIC0gYi50eXBlKSA6IFtdO1xuXHR9XG5cblx0Z2V0RmVhdHVyZXNCeVR5cGVzPyh0eXBlOiBudW1iZXJbXSk6IEZlYXR1cmVbXSB7XG5cdFx0cmV0dXJuIHRoaXMuZmVhdHVyZXMgPyB0aGlzLmZlYXR1cmVzLmZpbHRlcigoeDogRmVhdHVyZSkgPT4gKFxuXHRcdFx0dHlwZS5pbmRleE9mKE51bWJlcih4LnR5cGUpKSAhPT0gLTFcblx0XHQpKSA6IFtdO1xuXHR9XG5cblx0Z2V0R3JvdXBlZEZlYXR1cmVzQnlUeXBlcz8odHlwZTogbnVtYmVyW10pOiBhbnkge1xuXHRcdGNvbnN0IGdyb3VwcyA9IHt9O1xuXHRcdHR5cGUuZm9yRWFjaCh0eXBlID0+IHtcblx0XHRcdGNvbnN0IGdyb3VwID0gZ3JvdXBzW3R5cGVdIHx8IHsgZmVhdHVyZXM6IFtdIH07XG5cdFx0XHRpZiAodGhpcy5mZWF0dXJlcykge1xuXHRcdFx0XHR0aGlzLmZlYXR1cmVzLmZvckVhY2goKHg6IEZlYXR1cmUpID0+IHtcblx0XHRcdFx0XHRpZiAoTnVtYmVyKHgudHlwZSkgPT09IHR5cGUpIHtcblx0XHRcdFx0XHRcdGdyb3VwLmZlYXR1cmVzLnB1c2goeCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHRcdGdyb3Vwc1t0eXBlXSA9IGdyb3VwO1xuXHRcdH0pO1xuXHRcdC8qXG5cdFx0aWYgKHRoaXMuZmVhdHVyZXMpIHtcblx0XHRcdHRoaXMuZmVhdHVyZXMuZm9yRWFjaCgoeDogRmVhdHVyZSkgPT4ge1xuXHRcdFx0XHRpZiAodHlwZS5pbmRleE9mKE51bWJlcih4LnR5cGUpKSAhPT0gLTEpIHtcblx0XHRcdFx0XHRjb25zdCBncm91cCA9IGdyb3Vwc1t4LnR5cGVdIHx8IHsgZmVhdHVyZXM6IFtdIH07XG5cdFx0XHRcdFx0Z3JvdXAuZmVhdHVyZXMucHVzaCh4KTtcblx0XHRcdFx0XHRncm91cHNbeC50eXBlXSA9IGdyb3VwO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0Ki9cblx0XHRyZXR1cm4gZ3JvdXBzO1xuXHR9XG5cblxufVxuIl19