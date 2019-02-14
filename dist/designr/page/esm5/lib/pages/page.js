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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL3BhZ2UvIiwic291cmNlcyI6WyJsaWIvcGFnZXMvcGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUE7SUFBQTtJQVVBLENBQUM7SUFBRCxlQUFDO0FBQUQsQ0FBQyxBQVZELElBVUM7Ozs7SUFUQSx5QkFBZTs7SUFDZiwwQkFBZ0I7O0lBQ2hCLDZCQUFtQjs7SUFDbkIsK0JBQXFCOztJQUNyQiw0QkFBa0I7O0lBQ2xCLDBCQUFnQjs7SUFDaEIsMEJBQWdCOztJQUNoQix5QkFBZTs7SUFDZix3QkFBYzs7QUFHZjtJQVdDLG1CQUFZLE9BQW1CO1FBQzlCLElBQUksT0FBTyxFQUFFO1lBQ1osTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDN0I7SUFDRixDQUFDO0lBQ0YsZ0JBQUM7QUFBRCxDQUFDLEFBaEJELElBZ0JDOzs7O0lBZkEsNkJBQWtCOztJQUNsQix1QkFBb0I7O0lBQ3BCLDJCQUFpQjs7SUFDakIseUJBQWM7O0lBQ2QsaUNBQStCOztJQUMvQix5QkFBYzs7SUFDZCwwQkFBZTs7SUFDZix5QkFBdUI7O0lBQ3ZCLHdCQUFhOztBQVNkO0lBQUE7SUFJQSxDQUFDO0lBQUQsbUJBQUM7QUFBRCxDQUFDLEFBSkQsSUFJQzs7OztJQUhBLDBCQUFvQjs7SUFDcEIsNEJBQVc7O0lBQ1gsNEJBQXVCOztBQUd4QjtJQWlCQyxjQUFZLE9BQWM7UUFUMUIsU0FBSSxHQUFjLEVBQUUsQ0FBQztRQVVwQixJQUFJLE9BQU8sRUFBRTtZQUNaLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQzdCLElBQUksT0FBTyxDQUFDLE9BQU8sRUFBRTs7b0JBQ2QsT0FBTyxHQUFnQixPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFDLENBQWU7O3dCQUMxRCxJQUFJLEdBQUcsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztvQkFDbEMsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO29CQUMzQixPQUFPLElBQUksQ0FBQztnQkFDYixDQUFDLENBQUM7Z0JBQ0YsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7YUFDdkI7U0FDRDtJQUNGLENBQUM7Ozs7O0lBRUQseUJBQVU7Ozs7SUFBVixVQUFZLEVBQVU7UUFDckIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFYLENBQVcsQ0FBQyxJQUFJLElBQUksQ0FBQztJQUNyRCxDQUFDOzs7Ozs7SUFFRCwwQkFBVzs7Ozs7SUFBWCxVQUFhLElBQVksRUFBRSxDQUFXO1FBQ3JDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBQyxDQUFVLEVBQUUsQ0FBUyxJQUFLLE9BQUEsQ0FDdEUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksS0FBSyxJQUFJLENBQ2pELEVBRnNFLENBRXRFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFVLEVBQUUsQ0FBVSxJQUFLLE9BQUEsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFmLENBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDM0QsQ0FBQzs7Ozs7SUFFRCxpQ0FBa0I7Ozs7SUFBbEIsVUFBb0IsSUFBYztRQUNqQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFVBQUMsQ0FBVSxJQUFLLE9BQUEsQ0FDM0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQ25DLEVBRjJELENBRTNELENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ1QsQ0FBQzs7Ozs7SUFFRCx3Q0FBeUI7Ozs7SUFBekIsVUFBMkIsSUFBYztRQUF6QyxpQkF5QkM7O1lBeEJNLE1BQU0sR0FBRyxFQUFFO1FBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJOztnQkFDVixLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRTtZQUM5QyxJQUFJLEtBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2xCLEtBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUMsQ0FBVTtvQkFDaEMsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRTt3QkFDNUIsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7cUJBQ3ZCO2dCQUNGLENBQUMsQ0FBQyxDQUFDO2FBQ0g7WUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxDQUFDO1FBQ0g7Ozs7Ozs7Ozs7VUFVRTtRQUNGLE9BQU8sTUFBTSxDQUFDO0lBQ2YsQ0FBQztJQUdGLFdBQUM7QUFBRCxDQUFDLEFBM0VELElBMkVDOzs7O0lBMUVBLHdCQUFrQjs7SUFDbEIsc0JBQWlCOztJQUNqQix5QkFBNEI7O0lBQzVCLDJCQUFxQjs7SUFDckIsd0JBQXFCOztJQUNyQixrQkFBb0I7O0lBQ3BCLHNCQUFpQjs7SUFDakIsb0JBQXFCOztJQUNyQixvQkFBYzs7SUFDZCx1QkFBZ0I7O0lBQ2hCLG9CQUFjOztJQUNkLDBCQUF3Qjs7SUFDeEIscUJBQWU7O0lBQ2Ysb0JBQXVCOztJQUN2QixtQkFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERvY3VtZW50LCBGZWF0dXJlLCBJbWFnZSwgVGF4b25vbXkgfSBmcm9tICdAZGVzaWduci9jb3JlJztcblxuZXhwb3J0IGNsYXNzIFBhZ2VNZXRhIHtcblx0YXBwSWQ/OiBzdHJpbmc7XG5cdGF1dGhvcj86IHN0cmluZztcblx0Y2Fub25pY2FsPzogc3RyaW5nO1xuXHRkZXNjcmlwdGlvbj86IHN0cmluZztcblx0a2V5d29yZHM/OiBzdHJpbmc7XG5cdGxvY2FsZT86IHN0cmluZztcblx0cm9ib3RzPzogc3RyaW5nO1xuXHR0aXRsZT86IHN0cmluZztcblx0dHlwZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIFBhZ2VJbmRleCBpbXBsZW1lbnRzIERvY3VtZW50IHtcblx0YWJzdHJhY3Q/OiBzdHJpbmc7XG5cdGlkOiBudW1iZXIgfCBzdHJpbmc7XG5cdGltYWdlcz86IEltYWdlW107XG5cdG5hbWU/OiBzdHJpbmc7XG5cdHJlbGF0aW9uVHlwZT86IG51bWJlciB8IHN0cmluZztcblx0c2x1Zz86IHN0cmluZztcblx0dGl0bGU/OiBzdHJpbmc7XG5cdHR5cGU/OiBudW1iZXIgfCBzdHJpbmc7XG5cdHVybD86IHN0cmluZztcblxuXHRjb25zdHJ1Y3RvcihvcHRpb25zPzogUGFnZUluZGV4KSB7XG5cdFx0aWYgKG9wdGlvbnMpIHtcblx0XHRcdE9iamVjdC5hc3NpZ24odGhpcywgb3B0aW9ucyk7XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBQYWdlUmVsYXRpb24gaW1wbGVtZW50cyBEb2N1bWVudCB7XG5cdGlkOiBudW1iZXIgfCBzdHJpbmc7XG5cdHBhZ2U6IFBhZ2U7XG5cdHR5cGU/OiBudW1iZXIgfCBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBQYWdlIGltcGxlbWVudHMgRG9jdW1lbnQge1xuXHRhYnN0cmFjdD86IHN0cmluZztcblx0YWN0aXZlPzogYm9vbGVhbjtcblx0Y29tcG9uZW50PzogbnVtYmVyIHwgc3RyaW5nO1xuXHRkZXNjcmlwdGlvbj86IHN0cmluZztcblx0ZmVhdHVyZXM/OiBGZWF0dXJlW107XG5cdGlkOiBudW1iZXIgfCBzdHJpbmc7XG5cdGltYWdlcz86IEltYWdlW107XG5cdG1ldGE/OiBQYWdlTWV0YSA9IHt9O1xuXHRuYW1lPzogc3RyaW5nO1xuXHRyZWxhdGVkPzogYW55W107XG5cdHNsdWc/OiBzdHJpbmc7XG5cdHRheG9ub21pZXM/OiBUYXhvbm9teVtdO1xuXHR0aXRsZT86IHN0cmluZztcblx0dHlwZT86IG51bWJlciB8IHN0cmluZztcblx0dXJsPzogc3RyaW5nO1xuXG5cdGNvbnN0cnVjdG9yKG9wdGlvbnM/OiBQYWdlKSB7XG5cdFx0aWYgKG9wdGlvbnMpIHtcblx0XHRcdE9iamVjdC5hc3NpZ24odGhpcywgb3B0aW9ucyk7XG5cdFx0XHRpZiAob3B0aW9ucy5yZWxhdGVkKSB7XG5cdFx0XHRcdGNvbnN0IHJlbGF0ZWQ6IFBhZ2VJbmRleFtdID0gb3B0aW9ucy5yZWxhdGVkLm1hcCgoeDogUGFnZVJlbGF0aW9uKSA9PiB7XG5cdFx0XHRcdFx0Y29uc3QgaXRlbSA9IG5ldyBQYWdlSW5kZXgoeC5wYWdlKTtcblx0XHRcdFx0XHRpdGVtLnJlbGF0aW9uVHlwZSA9IHgudHlwZTtcblx0XHRcdFx0XHRyZXR1cm4gaXRlbTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHRoaXMucmVsYXRlZCA9IHJlbGF0ZWQ7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Z2V0RmVhdHVyZT8oaWQ6IG51bWJlcik6IEZlYXR1cmUge1xuXHRcdHJldHVybiB0aGlzLmZlYXR1cmVzLmZpbmQoeCA9PiB4LmlkID09PSBpZCkgfHwgbnVsbDtcblx0fVxuXG5cdGdldEZlYXR1cmVzPyh0eXBlOiBudW1iZXIsIG46IG51bWJlcltdKTogRmVhdHVyZVtdIHtcblx0XHRyZXR1cm4gdGhpcy5mZWF0dXJlcyA/IHRoaXMuZmVhdHVyZXMuZmlsdGVyKCh4OiBGZWF0dXJlLCBpOiBudW1iZXIpID0+IChcblx0XHRcdG4uaW5kZXhPZihOdW1iZXIoeC5pZCkpICE9PSAtMSAmJiB4LnR5cGUgPT09IHR5cGVcblx0XHQpKS5zb3J0KChhOiBGZWF0dXJlLCBiOiBGZWF0dXJlKSA9PiBhLnR5cGUgLSBiLnR5cGUpIDogW107XG5cdH1cblxuXHRnZXRGZWF0dXJlc0J5VHlwZXM/KHR5cGU6IG51bWJlcltdKTogRmVhdHVyZVtdIHtcblx0XHRyZXR1cm4gdGhpcy5mZWF0dXJlcyA/IHRoaXMuZmVhdHVyZXMuZmlsdGVyKCh4OiBGZWF0dXJlKSA9PiAoXG5cdFx0XHR0eXBlLmluZGV4T2YoTnVtYmVyKHgudHlwZSkpICE9PSAtMVxuXHRcdCkpIDogW107XG5cdH1cblxuXHRnZXRHcm91cGVkRmVhdHVyZXNCeVR5cGVzPyh0eXBlOiBudW1iZXJbXSk6IGFueSB7XG5cdFx0Y29uc3QgZ3JvdXBzID0ge307XG5cdFx0dHlwZS5mb3JFYWNoKHR5cGUgPT4ge1xuXHRcdFx0Y29uc3QgZ3JvdXAgPSBncm91cHNbdHlwZV0gfHwgeyBmZWF0dXJlczogW10gfTtcblx0XHRcdGlmICh0aGlzLmZlYXR1cmVzKSB7XG5cdFx0XHRcdHRoaXMuZmVhdHVyZXMuZm9yRWFjaCgoeDogRmVhdHVyZSkgPT4ge1xuXHRcdFx0XHRcdGlmIChOdW1iZXIoeC50eXBlKSA9PT0gdHlwZSkge1xuXHRcdFx0XHRcdFx0Z3JvdXAuZmVhdHVyZXMucHVzaCh4KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdFx0Z3JvdXBzW3R5cGVdID0gZ3JvdXA7XG5cdFx0fSk7XG5cdFx0Lypcblx0XHRpZiAodGhpcy5mZWF0dXJlcykge1xuXHRcdFx0dGhpcy5mZWF0dXJlcy5mb3JFYWNoKCh4OiBGZWF0dXJlKSA9PiB7XG5cdFx0XHRcdGlmICh0eXBlLmluZGV4T2YoTnVtYmVyKHgudHlwZSkpICE9PSAtMSkge1xuXHRcdFx0XHRcdGNvbnN0IGdyb3VwID0gZ3JvdXBzW3gudHlwZV0gfHwgeyBmZWF0dXJlczogW10gfTtcblx0XHRcdFx0XHRncm91cC5mZWF0dXJlcy5wdXNoKHgpO1xuXHRcdFx0XHRcdGdyb3Vwc1t4LnR5cGVdID0gZ3JvdXA7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1cblx0XHQqL1xuXHRcdHJldHVybiBncm91cHM7XG5cdH1cblxuXG59XG4iXX0=