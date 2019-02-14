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
    PageIndex.prototype.abstract;
    /** @type {?} */
    PageIndex.prototype.id;
    /** @type {?} */
    PageIndex.prototype.images;
    /** @type {?} */
    PageIndex.prototype.name;
    /** @type {?} */
    PageIndex.prototype.relationType;
    /** @type {?} */
    PageIndex.prototype.slug;
    /** @type {?} */
    PageIndex.prototype.title;
    /** @type {?} */
    PageIndex.prototype.type;
    /** @type {?} */
    PageIndex.prototype.url;
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
                    /** @type {?} */
                    const item = new PageIndex(x.page);
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
    Page.prototype.abstract;
    /** @type {?} */
    Page.prototype.active;
    /** @type {?} */
    Page.prototype.component;
    /** @type {?} */
    Page.prototype.description;
    /** @type {?} */
    Page.prototype.features;
    /** @type {?} */
    Page.prototype.id;
    /** @type {?} */
    Page.prototype.images;
    /** @type {?} */
    Page.prototype.meta;
    /** @type {?} */
    Page.prototype.name;
    /** @type {?} */
    Page.prototype.related;
    /** @type {?} */
    Page.prototype.slug;
    /** @type {?} */
    Page.prototype.taxonomies;
    /** @type {?} */
    Page.prototype.title;
    /** @type {?} */
    Page.prototype.type;
    /** @type {?} */
    Page.prototype.url;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL3BhZ2UvIiwic291cmNlcyI6WyJsaWIvcGFnZXMvcGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsTUFBTSxPQUFPLFFBQVE7Q0FVcEI7OztJQVRBLHlCQUFlOztJQUNmLDBCQUFnQjs7SUFDaEIsNkJBQW1COztJQUNuQiwrQkFBcUI7O0lBQ3JCLDRCQUFrQjs7SUFDbEIsMEJBQWdCOztJQUNoQiwwQkFBZ0I7O0lBQ2hCLHlCQUFlOztJQUNmLHdCQUFjOztBQUdmLE1BQU0sT0FBTyxTQUFTOzs7O0lBV3JCLFlBQVksT0FBbUI7UUFDOUIsSUFBSSxPQUFPLEVBQUU7WUFDWixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztTQUM3QjtJQUNGLENBQUM7Q0FDRDs7O0lBZkEsNkJBQWtCOztJQUNsQix1QkFBb0I7O0lBQ3BCLDJCQUFpQjs7SUFDakIseUJBQWM7O0lBQ2QsaUNBQStCOztJQUMvQix5QkFBYzs7SUFDZCwwQkFBZTs7SUFDZix5QkFBdUI7O0lBQ3ZCLHdCQUFhOztBQVNkLE1BQU0sT0FBTyxZQUFZO0NBSXhCOzs7SUFIQSwwQkFBb0I7O0lBQ3BCLDRCQUFXOztJQUNYLDRCQUF1Qjs7QUFHeEIsTUFBTSxPQUFPLElBQUk7Ozs7SUFpQmhCLFlBQVksT0FBYztRQVQxQixTQUFJLEdBQWMsRUFBRSxDQUFDO1FBVXBCLElBQUksT0FBTyxFQUFFO1lBQ1osTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDN0IsSUFBSSxPQUFPLENBQUMsT0FBTyxFQUFFOztzQkFDZCxPQUFPLEdBQWdCLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBZSxFQUFFLEVBQUU7OzBCQUM5RCxJQUFJLEdBQUcsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztvQkFDbEMsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO29CQUMzQixPQUFPLElBQUksQ0FBQztnQkFDYixDQUFDLENBQUM7Z0JBQ0YsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7YUFDdkI7U0FDRDtJQUNGLENBQUM7Ozs7O0lBRUQsVUFBVSxDQUFFLEVBQVU7UUFDckIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDO0lBQ3JELENBQUM7Ozs7OztJQUVELFdBQVcsQ0FBRSxJQUFZLEVBQUUsQ0FBVztRQUNyQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBVSxFQUFFLENBQVMsRUFBRSxFQUFFLENBQUMsQ0FDdEUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksS0FBSyxJQUFJLENBQ2pELENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFVLEVBQUUsQ0FBVSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQzNELENBQUM7Ozs7O0lBRUQsa0JBQWtCLENBQUUsSUFBYztRQUNqQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBVSxFQUFFLEVBQUUsQ0FBQyxDQUMzRCxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FDbkMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDVCxDQUFDOzs7OztJQUVELHlCQUF5QixDQUFFLElBQWM7O2NBQ2xDLE1BQU0sR0FBRyxFQUFFO1FBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7O2tCQUNiLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFO1lBQzlDLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDbEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFVLEVBQUUsRUFBRTtvQkFDcEMsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRTt3QkFDNUIsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7cUJBQ3ZCO2dCQUNGLENBQUMsQ0FBQyxDQUFDO2FBQ0g7WUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxDQUFDO1FBQ0g7Ozs7Ozs7Ozs7VUFVRTtRQUNGLE9BQU8sTUFBTSxDQUFDO0lBQ2YsQ0FBQztDQUdEOzs7SUExRUEsd0JBQWtCOztJQUNsQixzQkFBaUI7O0lBQ2pCLHlCQUE0Qjs7SUFDNUIsMkJBQXFCOztJQUNyQix3QkFBcUI7O0lBQ3JCLGtCQUFvQjs7SUFDcEIsc0JBQWlCOztJQUNqQixvQkFBcUI7O0lBQ3JCLG9CQUFjOztJQUNkLHVCQUFnQjs7SUFDaEIsb0JBQWM7O0lBQ2QsMEJBQXdCOztJQUN4QixxQkFBZTs7SUFDZixvQkFBdUI7O0lBQ3ZCLG1CQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRG9jdW1lbnQsIEZlYXR1cmUsIEltYWdlLCBUYXhvbm9teSB9IGZyb20gJ0BkZXNpZ25yL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgUGFnZU1ldGEge1xuXHRhcHBJZD86IHN0cmluZztcblx0YXV0aG9yPzogc3RyaW5nO1xuXHRjYW5vbmljYWw/OiBzdHJpbmc7XG5cdGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuXHRrZXl3b3Jkcz86IHN0cmluZztcblx0bG9jYWxlPzogc3RyaW5nO1xuXHRyb2JvdHM/OiBzdHJpbmc7XG5cdHRpdGxlPzogc3RyaW5nO1xuXHR0eXBlPzogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgUGFnZUluZGV4IGltcGxlbWVudHMgRG9jdW1lbnQge1xuXHRhYnN0cmFjdD86IHN0cmluZztcblx0aWQ6IG51bWJlciB8IHN0cmluZztcblx0aW1hZ2VzPzogSW1hZ2VbXTtcblx0bmFtZT86IHN0cmluZztcblx0cmVsYXRpb25UeXBlPzogbnVtYmVyIHwgc3RyaW5nO1xuXHRzbHVnPzogc3RyaW5nO1xuXHR0aXRsZT86IHN0cmluZztcblx0dHlwZT86IG51bWJlciB8IHN0cmluZztcblx0dXJsPzogc3RyaW5nO1xuXG5cdGNvbnN0cnVjdG9yKG9wdGlvbnM/OiBQYWdlSW5kZXgpIHtcblx0XHRpZiAob3B0aW9ucykge1xuXHRcdFx0T2JqZWN0LmFzc2lnbih0aGlzLCBvcHRpb25zKTtcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIFBhZ2VSZWxhdGlvbiBpbXBsZW1lbnRzIERvY3VtZW50IHtcblx0aWQ6IG51bWJlciB8IHN0cmluZztcblx0cGFnZTogUGFnZTtcblx0dHlwZT86IG51bWJlciB8IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIFBhZ2UgaW1wbGVtZW50cyBEb2N1bWVudCB7XG5cdGFic3RyYWN0Pzogc3RyaW5nO1xuXHRhY3RpdmU/OiBib29sZWFuO1xuXHRjb21wb25lbnQ/OiBudW1iZXIgfCBzdHJpbmc7XG5cdGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuXHRmZWF0dXJlcz86IEZlYXR1cmVbXTtcblx0aWQ6IG51bWJlciB8IHN0cmluZztcblx0aW1hZ2VzPzogSW1hZ2VbXTtcblx0bWV0YT86IFBhZ2VNZXRhID0ge307XG5cdG5hbWU/OiBzdHJpbmc7XG5cdHJlbGF0ZWQ/OiBhbnlbXTtcblx0c2x1Zz86IHN0cmluZztcblx0dGF4b25vbWllcz86IFRheG9ub215W107XG5cdHRpdGxlPzogc3RyaW5nO1xuXHR0eXBlPzogbnVtYmVyIHwgc3RyaW5nO1xuXHR1cmw/OiBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3Iob3B0aW9ucz86IFBhZ2UpIHtcblx0XHRpZiAob3B0aW9ucykge1xuXHRcdFx0T2JqZWN0LmFzc2lnbih0aGlzLCBvcHRpb25zKTtcblx0XHRcdGlmIChvcHRpb25zLnJlbGF0ZWQpIHtcblx0XHRcdFx0Y29uc3QgcmVsYXRlZDogUGFnZUluZGV4W10gPSBvcHRpb25zLnJlbGF0ZWQubWFwKCh4OiBQYWdlUmVsYXRpb24pID0+IHtcblx0XHRcdFx0XHRjb25zdCBpdGVtID0gbmV3IFBhZ2VJbmRleCh4LnBhZ2UpO1xuXHRcdFx0XHRcdGl0ZW0ucmVsYXRpb25UeXBlID0geC50eXBlO1xuXHRcdFx0XHRcdHJldHVybiBpdGVtO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0dGhpcy5yZWxhdGVkID0gcmVsYXRlZDtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRnZXRGZWF0dXJlPyhpZDogbnVtYmVyKTogRmVhdHVyZSB7XG5cdFx0cmV0dXJuIHRoaXMuZmVhdHVyZXMuZmluZCh4ID0+IHguaWQgPT09IGlkKSB8fCBudWxsO1xuXHR9XG5cblx0Z2V0RmVhdHVyZXM/KHR5cGU6IG51bWJlciwgbjogbnVtYmVyW10pOiBGZWF0dXJlW10ge1xuXHRcdHJldHVybiB0aGlzLmZlYXR1cmVzID8gdGhpcy5mZWF0dXJlcy5maWx0ZXIoKHg6IEZlYXR1cmUsIGk6IG51bWJlcikgPT4gKFxuXHRcdFx0bi5pbmRleE9mKE51bWJlcih4LmlkKSkgIT09IC0xICYmIHgudHlwZSA9PT0gdHlwZVxuXHRcdCkpLnNvcnQoKGE6IEZlYXR1cmUsIGI6IEZlYXR1cmUpID0+IGEudHlwZSAtIGIudHlwZSkgOiBbXTtcblx0fVxuXG5cdGdldEZlYXR1cmVzQnlUeXBlcz8odHlwZTogbnVtYmVyW10pOiBGZWF0dXJlW10ge1xuXHRcdHJldHVybiB0aGlzLmZlYXR1cmVzID8gdGhpcy5mZWF0dXJlcy5maWx0ZXIoKHg6IEZlYXR1cmUpID0+IChcblx0XHRcdHR5cGUuaW5kZXhPZihOdW1iZXIoeC50eXBlKSkgIT09IC0xXG5cdFx0KSkgOiBbXTtcblx0fVxuXG5cdGdldEdyb3VwZWRGZWF0dXJlc0J5VHlwZXM/KHR5cGU6IG51bWJlcltdKTogYW55IHtcblx0XHRjb25zdCBncm91cHMgPSB7fTtcblx0XHR0eXBlLmZvckVhY2godHlwZSA9PiB7XG5cdFx0XHRjb25zdCBncm91cCA9IGdyb3Vwc1t0eXBlXSB8fCB7IGZlYXR1cmVzOiBbXSB9O1xuXHRcdFx0aWYgKHRoaXMuZmVhdHVyZXMpIHtcblx0XHRcdFx0dGhpcy5mZWF0dXJlcy5mb3JFYWNoKCh4OiBGZWF0dXJlKSA9PiB7XG5cdFx0XHRcdFx0aWYgKE51bWJlcih4LnR5cGUpID09PSB0eXBlKSB7XG5cdFx0XHRcdFx0XHRncm91cC5mZWF0dXJlcy5wdXNoKHgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0XHRncm91cHNbdHlwZV0gPSBncm91cDtcblx0XHR9KTtcblx0XHQvKlxuXHRcdGlmICh0aGlzLmZlYXR1cmVzKSB7XG5cdFx0XHR0aGlzLmZlYXR1cmVzLmZvckVhY2goKHg6IEZlYXR1cmUpID0+IHtcblx0XHRcdFx0aWYgKHR5cGUuaW5kZXhPZihOdW1iZXIoeC50eXBlKSkgIT09IC0xKSB7XG5cdFx0XHRcdFx0Y29uc3QgZ3JvdXAgPSBncm91cHNbeC50eXBlXSB8fCB7IGZlYXR1cmVzOiBbXSB9O1xuXHRcdFx0XHRcdGdyb3VwLmZlYXR1cmVzLnB1c2goeCk7XG5cdFx0XHRcdFx0Z3JvdXBzW3gudHlwZV0gPSBncm91cDtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdCovXG5cdFx0cmV0dXJuIGdyb3Vwcztcblx0fVxuXG5cbn1cbiJdfQ==