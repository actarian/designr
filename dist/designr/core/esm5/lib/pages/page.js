/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PageMeta = /** @class */ (function () {
    function PageMeta() {
    }
    return PageMeta;
}());
export { PageMeta };
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
var PageIndex = /** @class */ (function () {
    function PageIndex(options) {
        if (options) {
            Object.assign(this, options);
        }
    }
    return PageIndex;
}());
export { PageIndex };
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
var PageRelation = /** @class */ (function () {
    function PageRelation() {
    }
    return PageRelation;
}());
export { PageRelation };
if (false) {
    /** @type {?} */
    PageRelation.prototype.id;
    /** @type {?} */
    PageRelation.prototype.page;
    /** @type {?} */
    PageRelation.prototype.type;
}
var Page = /** @class */ (function () {
    function Page(options) {
        this.meta = {};
        if (options) {
            Object.assign(this, options);
            if (options.related) {
                /** @type {?} */
                var related = options.related.map(function (x) {
                    /** @type {?} */
                    var item = new PageIndex(x.page);
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
    Page.prototype.getFeature = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return this.features.find(function (x) { return x.id === id; }) || null;
    };
    /**
     * @param {?} type
     * @param {?} n
     * @return {?}
     */
    Page.prototype.getFeatures = /**
     * @param {?} type
     * @param {?} n
     * @return {?}
     */
    function (type, n) {
        return this.features ? this.features.filter(function (x, i) { return (n.indexOf(Number(x.id)) !== -1 && x.type === type); }).sort(function (a, b) { return a.type - b.type; }) : [];
    };
    /**
     * @param {?} type
     * @return {?}
     */
    Page.prototype.getFeaturesByTypes = /**
     * @param {?} type
     * @return {?}
     */
    function (type) {
        return this.features ? this.features.filter(function (x) { return (type.indexOf(Number(x.type)) !== -1); }) : [];
    };
    /**
     * @param {?} type
     * @return {?}
     */
    Page.prototype.getGroupedFeaturesByTypes = /**
     * @param {?} type
     * @return {?}
     */
    function (type) {
        var _this = this;
        /** @type {?} */
        var groups = {};
        type.forEach(function (type) {
            /** @type {?} */
            var group = groups[type] || { features: [] };
            if (_this.features) {
                _this.features.forEach(function (x) {
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
    };
    return Page;
}());
export { Page };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL2NvcmUvIiwic291cmNlcyI6WyJsaWIvcGFnZXMvcGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBS0E7SUFBQTtJQVVBLENBQUM7SUFBRCxlQUFDO0FBQUQsQ0FBQyxBQVZELElBVUM7Ozs7SUFUQSx5QkFBZTs7SUFDZiwwQkFBZ0I7O0lBQ2hCLDZCQUFtQjs7SUFDbkIsK0JBQXFCOztJQUNyQiw0QkFBa0I7O0lBQ2xCLDBCQUFnQjs7SUFDaEIsMEJBQWdCOztJQUNoQix5QkFBZTs7SUFDZix3QkFBYzs7QUFHZjtJQVdDLG1CQUFZLE9BQW1CO1FBQzlCLElBQUksT0FBTyxFQUFFO1lBQ1osTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDN0I7SUFDRixDQUFDO0lBQ0YsZ0JBQUM7QUFBRCxDQUFDLEFBaEJELElBZ0JDOzs7O0lBZkEsNkJBQWtCOztJQUNsQix1QkFBb0I7O0lBQ3BCLDJCQUFpQjs7SUFDakIseUJBQWM7O0lBQ2QsaUNBQStCOztJQUMvQix5QkFBYzs7SUFDZCwwQkFBZTs7SUFDZix5QkFBdUI7O0lBQ3ZCLHdCQUFhOztBQVNkO0lBQUE7SUFJQSxDQUFDO0lBQUQsbUJBQUM7QUFBRCxDQUFDLEFBSkQsSUFJQzs7OztJQUhBLDBCQUFvQjs7SUFDcEIsNEJBQVc7O0lBQ1gsNEJBQXVCOztBQUd4QjtJQWlCQyxjQUFZLE9BQWM7UUFUMUIsU0FBSSxHQUFjLEVBQUUsQ0FBQztRQVVwQixJQUFJLE9BQU8sRUFBRTtZQUNaLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQzdCLElBQUksT0FBTyxDQUFDLE9BQU8sRUFBRTs7b0JBQ2QsT0FBTyxHQUFnQixPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFDLENBQWU7O3dCQUMxRCxJQUFJLEdBQUcsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztvQkFDbEMsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO29CQUMzQixPQUFPLElBQUksQ0FBQztnQkFDYixDQUFDLENBQUM7Z0JBQ0YsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7YUFDdkI7U0FDRDtJQUNGLENBQUM7Ozs7O0lBRUQseUJBQVU7Ozs7SUFBVixVQUFZLEVBQVU7UUFDckIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFYLENBQVcsQ0FBQyxJQUFJLElBQUksQ0FBQztJQUNyRCxDQUFDOzs7Ozs7SUFFRCwwQkFBVzs7Ozs7SUFBWCxVQUFhLElBQVksRUFBRSxDQUFXO1FBQ3JDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBQyxDQUFVLEVBQUUsQ0FBUyxJQUFLLE9BQUEsQ0FDdEUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksS0FBSyxJQUFJLENBQ2pELEVBRnNFLENBRXRFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFVLEVBQUUsQ0FBVSxJQUFLLE9BQUEsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFmLENBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDM0QsQ0FBQzs7Ozs7SUFFRCxpQ0FBa0I7Ozs7SUFBbEIsVUFBb0IsSUFBYztRQUNqQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFVBQUMsQ0FBVSxJQUFLLE9BQUEsQ0FDM0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQ25DLEVBRjJELENBRTNELENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ1QsQ0FBQzs7Ozs7SUFFRCx3Q0FBeUI7Ozs7SUFBekIsVUFBMkIsSUFBYztRQUF6QyxpQkF5QkM7O1lBeEJNLE1BQU0sR0FBRyxFQUFFO1FBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJOztnQkFDVixLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRTtZQUM5QyxJQUFJLEtBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2xCLEtBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUMsQ0FBVTtvQkFDaEMsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRTt3QkFDNUIsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7cUJBQ3ZCO2dCQUNGLENBQUMsQ0FBQyxDQUFDO2FBQ0g7WUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxDQUFDO1FBQ0g7Ozs7Ozs7Ozs7VUFVRTtRQUNGLE9BQU8sTUFBTSxDQUFDO0lBQ2YsQ0FBQztJQUdGLFdBQUM7QUFBRCxDQUFDLEFBM0VELElBMkVDOzs7O0lBMUVBLHdCQUFrQjs7SUFDbEIsc0JBQWlCOztJQUNqQix5QkFBNEI7O0lBQzVCLDJCQUFxQjs7SUFDckIsd0JBQXFCOztJQUNyQixrQkFBb0I7O0lBQ3BCLHNCQUFpQjs7SUFDakIsb0JBQXFCOztJQUNyQixvQkFBYzs7SUFDZCx1QkFBZ0I7O0lBQ2hCLG9CQUFjOztJQUNkLDBCQUF3Qjs7SUFDeEIscUJBQWU7O0lBQ2Ysb0JBQXVCOztJQUN2QixtQkFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERvY3VtZW50IH0gZnJvbSAnLi4vbW9kZWxzL2RvY3VtZW50JztcbmltcG9ydCB7IEZlYXR1cmUgfSBmcm9tICcuLi9tb2RlbHMvZmVhdHVyZSc7XG5pbXBvcnQgeyBJbWFnZSB9IGZyb20gJy4uL21vZGVscy9pbWFnZSc7XG5pbXBvcnQgeyBUYXhvbm9teSB9IGZyb20gJy4uL21vZGVscy90YXhvbm9teSc7XG5cbmV4cG9ydCBjbGFzcyBQYWdlTWV0YSB7XG5cdGFwcElkPzogc3RyaW5nO1xuXHRhdXRob3I/OiBzdHJpbmc7XG5cdGNhbm9uaWNhbD86IHN0cmluZztcblx0ZGVzY3JpcHRpb24/OiBzdHJpbmc7XG5cdGtleXdvcmRzPzogc3RyaW5nO1xuXHRsb2NhbGU/OiBzdHJpbmc7XG5cdHJvYm90cz86IHN0cmluZztcblx0dGl0bGU/OiBzdHJpbmc7XG5cdHR5cGU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBQYWdlSW5kZXggaW1wbGVtZW50cyBEb2N1bWVudCB7XG5cdGFic3RyYWN0Pzogc3RyaW5nO1xuXHRpZDogbnVtYmVyIHwgc3RyaW5nO1xuXHRpbWFnZXM/OiBJbWFnZVtdO1xuXHRuYW1lPzogc3RyaW5nO1xuXHRyZWxhdGlvblR5cGU/OiBudW1iZXIgfCBzdHJpbmc7XG5cdHNsdWc/OiBzdHJpbmc7XG5cdHRpdGxlPzogc3RyaW5nO1xuXHR0eXBlPzogbnVtYmVyIHwgc3RyaW5nO1xuXHR1cmw/OiBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3Iob3B0aW9ucz86IFBhZ2VJbmRleCkge1xuXHRcdGlmIChvcHRpb25zKSB7XG5cdFx0XHRPYmplY3QuYXNzaWduKHRoaXMsIG9wdGlvbnMpO1xuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgY2xhc3MgUGFnZVJlbGF0aW9uIGltcGxlbWVudHMgRG9jdW1lbnQge1xuXHRpZDogbnVtYmVyIHwgc3RyaW5nO1xuXHRwYWdlOiBQYWdlO1xuXHR0eXBlPzogbnVtYmVyIHwgc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgUGFnZSBpbXBsZW1lbnRzIERvY3VtZW50IHtcblx0YWJzdHJhY3Q/OiBzdHJpbmc7XG5cdGFjdGl2ZT86IGJvb2xlYW47XG5cdGNvbXBvbmVudD86IG51bWJlciB8IHN0cmluZztcblx0ZGVzY3JpcHRpb24/OiBzdHJpbmc7XG5cdGZlYXR1cmVzPzogRmVhdHVyZVtdO1xuXHRpZDogbnVtYmVyIHwgc3RyaW5nO1xuXHRpbWFnZXM/OiBJbWFnZVtdO1xuXHRtZXRhPzogUGFnZU1ldGEgPSB7fTtcblx0bmFtZT86IHN0cmluZztcblx0cmVsYXRlZD86IGFueVtdO1xuXHRzbHVnPzogc3RyaW5nO1xuXHR0YXhvbm9taWVzPzogVGF4b25vbXlbXTtcblx0dGl0bGU/OiBzdHJpbmc7XG5cdHR5cGU/OiBudW1iZXIgfCBzdHJpbmc7XG5cdHVybD86IHN0cmluZztcblxuXHRjb25zdHJ1Y3RvcihvcHRpb25zPzogUGFnZSkge1xuXHRcdGlmIChvcHRpb25zKSB7XG5cdFx0XHRPYmplY3QuYXNzaWduKHRoaXMsIG9wdGlvbnMpO1xuXHRcdFx0aWYgKG9wdGlvbnMucmVsYXRlZCkge1xuXHRcdFx0XHRjb25zdCByZWxhdGVkOiBQYWdlSW5kZXhbXSA9IG9wdGlvbnMucmVsYXRlZC5tYXAoKHg6IFBhZ2VSZWxhdGlvbikgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IGl0ZW0gPSBuZXcgUGFnZUluZGV4KHgucGFnZSk7XG5cdFx0XHRcdFx0aXRlbS5yZWxhdGlvblR5cGUgPSB4LnR5cGU7XG5cdFx0XHRcdFx0cmV0dXJuIGl0ZW07XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHR0aGlzLnJlbGF0ZWQgPSByZWxhdGVkO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGdldEZlYXR1cmU/KGlkOiBudW1iZXIpOiBGZWF0dXJlIHtcblx0XHRyZXR1cm4gdGhpcy5mZWF0dXJlcy5maW5kKHggPT4geC5pZCA9PT0gaWQpIHx8IG51bGw7XG5cdH1cblxuXHRnZXRGZWF0dXJlcz8odHlwZTogbnVtYmVyLCBuOiBudW1iZXJbXSk6IEZlYXR1cmVbXSB7XG5cdFx0cmV0dXJuIHRoaXMuZmVhdHVyZXMgPyB0aGlzLmZlYXR1cmVzLmZpbHRlcigoeDogRmVhdHVyZSwgaTogbnVtYmVyKSA9PiAoXG5cdFx0XHRuLmluZGV4T2YoTnVtYmVyKHguaWQpKSAhPT0gLTEgJiYgeC50eXBlID09PSB0eXBlXG5cdFx0KSkuc29ydCgoYTogRmVhdHVyZSwgYjogRmVhdHVyZSkgPT4gYS50eXBlIC0gYi50eXBlKSA6IFtdO1xuXHR9XG5cblx0Z2V0RmVhdHVyZXNCeVR5cGVzPyh0eXBlOiBudW1iZXJbXSk6IEZlYXR1cmVbXSB7XG5cdFx0cmV0dXJuIHRoaXMuZmVhdHVyZXMgPyB0aGlzLmZlYXR1cmVzLmZpbHRlcigoeDogRmVhdHVyZSkgPT4gKFxuXHRcdFx0dHlwZS5pbmRleE9mKE51bWJlcih4LnR5cGUpKSAhPT0gLTFcblx0XHQpKSA6IFtdO1xuXHR9XG5cblx0Z2V0R3JvdXBlZEZlYXR1cmVzQnlUeXBlcz8odHlwZTogbnVtYmVyW10pOiBhbnkge1xuXHRcdGNvbnN0IGdyb3VwcyA9IHt9O1xuXHRcdHR5cGUuZm9yRWFjaCh0eXBlID0+IHtcblx0XHRcdGNvbnN0IGdyb3VwID0gZ3JvdXBzW3R5cGVdIHx8IHsgZmVhdHVyZXM6IFtdIH07XG5cdFx0XHRpZiAodGhpcy5mZWF0dXJlcykge1xuXHRcdFx0XHR0aGlzLmZlYXR1cmVzLmZvckVhY2goKHg6IEZlYXR1cmUpID0+IHtcblx0XHRcdFx0XHRpZiAoTnVtYmVyKHgudHlwZSkgPT09IHR5cGUpIHtcblx0XHRcdFx0XHRcdGdyb3VwLmZlYXR1cmVzLnB1c2goeCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHRcdGdyb3Vwc1t0eXBlXSA9IGdyb3VwO1xuXHRcdH0pO1xuXHRcdC8qXG5cdFx0aWYgKHRoaXMuZmVhdHVyZXMpIHtcblx0XHRcdHRoaXMuZmVhdHVyZXMuZm9yRWFjaCgoeDogRmVhdHVyZSkgPT4ge1xuXHRcdFx0XHRpZiAodHlwZS5pbmRleE9mKE51bWJlcih4LnR5cGUpKSAhPT0gLTEpIHtcblx0XHRcdFx0XHRjb25zdCBncm91cCA9IGdyb3Vwc1t4LnR5cGVdIHx8IHsgZmVhdHVyZXM6IFtdIH07XG5cdFx0XHRcdFx0Z3JvdXAuZmVhdHVyZXMucHVzaCh4KTtcblx0XHRcdFx0XHRncm91cHNbeC50eXBlXSA9IGdyb3VwO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0Ki9cblx0XHRyZXR1cm4gZ3JvdXBzO1xuXHR9XG5cblxufVxuIl19