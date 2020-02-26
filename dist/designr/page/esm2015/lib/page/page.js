export class PageMeta {
}
export class PageIndex {
    constructor(options) {
        if (options) {
            Object.assign(this, options);
        }
    }
}
export class PageRelation {
}
export class Page {
    constructor(options) {
        this.meta = {};
        if (options) {
            Object.assign(this, options);
            if (options.related) {
                const related = options.related.map((x) => {
                    // const item = new PageIndex(x.page);
                    const item = new PageIndex(x);
                    item.relationType = x.type;
                    return item;
                });
                this.related = related;
            }
        }
    }
    getFeature(id) {
        return this.features.find(x => x.id === id) || null;
    }
    getFeatures(type, n) {
        return this.features ? this.features.filter((x, i) => (n.indexOf(Number(x.id)) !== -1 && x.type === type)).sort((a, b) => a.type - b.type) : [];
    }
    getFeaturesByTypes(type) {
        return this.features ? this.features.filter((x) => (type.indexOf(Number(x.type)) !== -1)) : [];
    }
    getGroupedFeaturesByTypes(type) {
        const groups = {};
        type.forEach(type => {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL3BhZ2UvIiwic291cmNlcyI6WyJsaWIvcGFnZS9wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BLE1BQU0sT0FBTyxRQUFRO0NBVXBCO0FBRUQsTUFBTSxPQUFPLFNBQVM7SUFZckIsWUFBWSxPQUFtQjtRQUM5QixJQUFJLE9BQU8sRUFBRTtZQUNaLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQzdCO0lBQ0YsQ0FBQztDQUNEO0FBRUQsTUFBTSxPQUFPLFlBQVk7Q0FJeEI7QUFFRCxNQUFNLE9BQU8sSUFBSTtJQWlCaEIsWUFBWSxPQUFjO1FBUjFCLFNBQUksR0FBYyxFQUFFLENBQUM7UUFTcEIsSUFBSSxPQUFPLEVBQUU7WUFDWixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztZQUM3QixJQUFJLE9BQU8sQ0FBQyxPQUFPLEVBQUU7Z0JBQ3BCLE1BQU0sT0FBTyxHQUFnQixPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQWUsRUFBRSxFQUFFO29CQUNwRSxzQ0FBc0M7b0JBQ3RDLE1BQU0sSUFBSSxHQUFHLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUM5QixJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7b0JBQzNCLE9BQU8sSUFBSSxDQUFDO2dCQUNiLENBQUMsQ0FBQyxDQUFDO2dCQUNILElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO2FBQ3ZCO1NBQ0Q7SUFDRixDQUFDO0lBRUQsVUFBVSxDQUFFLEVBQVU7UUFDckIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDO0lBQ3JELENBQUM7SUFFRCxXQUFXLENBQUUsSUFBWSxFQUFFLENBQVc7UUFDckMsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQVUsRUFBRSxDQUFTLEVBQUUsRUFBRSxDQUFDLENBQ3RFLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUNqRCxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBVSxFQUFFLENBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUMzRCxDQUFDO0lBRUQsa0JBQWtCLENBQUUsSUFBYztRQUNqQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBVSxFQUFFLEVBQUUsQ0FBQyxDQUMzRCxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FDbkMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDVCxDQUFDO0lBRUQseUJBQXlCLENBQUUsSUFBYztRQUN4QyxNQUFNLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNuQixNQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLENBQUM7WUFDL0MsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNsQixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQVUsRUFBRSxFQUFFO29CQUNwQyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxFQUFFO3dCQUM1QixLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztxQkFDdkI7Z0JBQ0YsQ0FBQyxDQUFDLENBQUM7YUFDSDtZQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUM7UUFDdEIsQ0FBQyxDQUFDLENBQUM7UUFDSDs7Ozs7Ozs7OztVQVVFO1FBQ0YsT0FBTyxNQUFNLENBQUM7SUFDZixDQUFDO0NBR0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb2N1bWVudCwgRmVhdHVyZSwgSW1hZ2UsIFRheG9ub215IH0gZnJvbSAnQGRlc2lnbnIvY29yZSc7XG5pbXBvcnQgeyBQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGFnZXMgeyBba2V5OiBzdHJpbmddOiBUeXBlPFBhZ2VDb21wb25lbnQ+OyB9XG5cbmV4cG9ydCBjbGFzcyBQYWdlTWV0YSB7XG5cdGFwcElkPzogc3RyaW5nO1xuXHRhdXRob3I/OiBzdHJpbmc7XG5cdGNhbm9uaWNhbD86IHN0cmluZztcblx0ZGVzY3JpcHRpb24/OiBzdHJpbmc7XG5cdGtleXdvcmRzPzogc3RyaW5nO1xuXHRsb2NhbGU/OiBzdHJpbmc7XG5cdHJvYm90cz86IHN0cmluZztcblx0dGl0bGU/OiBzdHJpbmc7XG5cdHR5cGU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBQYWdlSW5kZXggaW1wbGVtZW50cyBEb2N1bWVudCB7XG5cdGlkOiBudW1iZXIgfCBzdHJpbmc7XG5cdHNsdWc/OiBzdHJpbmc7XG5cdHVybD86IHN0cmluZztcblx0bmFtZT86IHN0cmluZztcblx0dGl0bGU/OiBzdHJpbmc7XG5cdGFic3RyYWN0Pzogc3RyaW5nO1xuXHRpbWFnZXM/OiBJbWFnZVtdO1xuXHRjb21wb25lbnQ/OiBudW1iZXIgfCBzdHJpbmc7XG5cdHR5cGU/OiBudW1iZXIgfCBzdHJpbmc7XG5cdHJlbGF0aW9uVHlwZT86IG51bWJlciB8IHN0cmluZztcblxuXHRjb25zdHJ1Y3RvcihvcHRpb25zPzogUGFnZUluZGV4KSB7XG5cdFx0aWYgKG9wdGlvbnMpIHtcblx0XHRcdE9iamVjdC5hc3NpZ24odGhpcywgb3B0aW9ucyk7XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBQYWdlUmVsYXRpb24gaW1wbGVtZW50cyBEb2N1bWVudCB7XG5cdGlkOiBudW1iZXIgfCBzdHJpbmc7XG5cdHBhZ2U6IFBhZ2U7XG5cdHR5cGU/OiBudW1iZXIgfCBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBQYWdlIGltcGxlbWVudHMgRG9jdW1lbnQge1xuXHRpZDogbnVtYmVyIHwgc3RyaW5nO1xuXHRzbHVnPzogc3RyaW5nO1xuXHR1cmw/OiBzdHJpbmc7XG5cdG5hbWU/OiBzdHJpbmc7XG5cdHRpdGxlPzogc3RyaW5nO1xuXHRhYnN0cmFjdD86IHN0cmluZztcblx0ZGVzY3JpcHRpb24/OiBzdHJpbmc7XG5cdGZlYXR1cmVzPzogRmVhdHVyZVtdO1xuXHRtZXRhPzogUGFnZU1ldGEgPSB7fTtcblx0aW1hZ2VzPzogSW1hZ2VbXTtcblx0cmVsYXRlZD86IFBhZ2VJbmRleFtdO1xuXHR0YXhvbm9taWVzPzogVGF4b25vbXlbXTtcblx0dHlwZT86IG51bWJlciB8IHN0cmluZztcblx0Y29tcG9uZW50PzogbnVtYmVyIHwgc3RyaW5nO1xuXHRhY3RpdmU/OiBib29sZWFuO1xuXG5cdGNvbnN0cnVjdG9yKG9wdGlvbnM/OiBQYWdlKSB7XG5cdFx0aWYgKG9wdGlvbnMpIHtcblx0XHRcdE9iamVjdC5hc3NpZ24odGhpcywgb3B0aW9ucyk7XG5cdFx0XHRpZiAob3B0aW9ucy5yZWxhdGVkKSB7XG5cdFx0XHRcdGNvbnN0IHJlbGF0ZWQ6IFBhZ2VJbmRleFtdID0gb3B0aW9ucy5yZWxhdGVkLm1hcCgoeDogUGFnZVJlbGF0aW9uKSA9PiB7XG5cdFx0XHRcdFx0Ly8gY29uc3QgaXRlbSA9IG5ldyBQYWdlSW5kZXgoeC5wYWdlKTtcblx0XHRcdFx0XHRjb25zdCBpdGVtID0gbmV3IFBhZ2VJbmRleCh4KTtcblx0XHRcdFx0XHRpdGVtLnJlbGF0aW9uVHlwZSA9IHgudHlwZTtcblx0XHRcdFx0XHRyZXR1cm4gaXRlbTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHRoaXMucmVsYXRlZCA9IHJlbGF0ZWQ7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Z2V0RmVhdHVyZT8oaWQ6IG51bWJlcik6IEZlYXR1cmUge1xuXHRcdHJldHVybiB0aGlzLmZlYXR1cmVzLmZpbmQoeCA9PiB4LmlkID09PSBpZCkgfHwgbnVsbDtcblx0fVxuXG5cdGdldEZlYXR1cmVzPyh0eXBlOiBudW1iZXIsIG46IG51bWJlcltdKTogRmVhdHVyZVtdIHtcblx0XHRyZXR1cm4gdGhpcy5mZWF0dXJlcyA/IHRoaXMuZmVhdHVyZXMuZmlsdGVyKCh4OiBGZWF0dXJlLCBpOiBudW1iZXIpID0+IChcblx0XHRcdG4uaW5kZXhPZihOdW1iZXIoeC5pZCkpICE9PSAtMSAmJiB4LnR5cGUgPT09IHR5cGVcblx0XHQpKS5zb3J0KChhOiBGZWF0dXJlLCBiOiBGZWF0dXJlKSA9PiBhLnR5cGUgLSBiLnR5cGUpIDogW107XG5cdH1cblxuXHRnZXRGZWF0dXJlc0J5VHlwZXM/KHR5cGU6IG51bWJlcltdKTogRmVhdHVyZVtdIHtcblx0XHRyZXR1cm4gdGhpcy5mZWF0dXJlcyA/IHRoaXMuZmVhdHVyZXMuZmlsdGVyKCh4OiBGZWF0dXJlKSA9PiAoXG5cdFx0XHR0eXBlLmluZGV4T2YoTnVtYmVyKHgudHlwZSkpICE9PSAtMVxuXHRcdCkpIDogW107XG5cdH1cblxuXHRnZXRHcm91cGVkRmVhdHVyZXNCeVR5cGVzPyh0eXBlOiBudW1iZXJbXSk6IGFueSB7XG5cdFx0Y29uc3QgZ3JvdXBzID0ge307XG5cdFx0dHlwZS5mb3JFYWNoKHR5cGUgPT4ge1xuXHRcdFx0Y29uc3QgZ3JvdXAgPSBncm91cHNbdHlwZV0gfHwgeyBmZWF0dXJlczogW10gfTtcblx0XHRcdGlmICh0aGlzLmZlYXR1cmVzKSB7XG5cdFx0XHRcdHRoaXMuZmVhdHVyZXMuZm9yRWFjaCgoeDogRmVhdHVyZSkgPT4ge1xuXHRcdFx0XHRcdGlmIChOdW1iZXIoeC50eXBlKSA9PT0gdHlwZSkge1xuXHRcdFx0XHRcdFx0Z3JvdXAuZmVhdHVyZXMucHVzaCh4KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdFx0Z3JvdXBzW3R5cGVdID0gZ3JvdXA7XG5cdFx0fSk7XG5cdFx0Lypcblx0XHRpZiAodGhpcy5mZWF0dXJlcykge1xuXHRcdFx0dGhpcy5mZWF0dXJlcy5mb3JFYWNoKCh4OiBGZWF0dXJlKSA9PiB7XG5cdFx0XHRcdGlmICh0eXBlLmluZGV4T2YoTnVtYmVyKHgudHlwZSkpICE9PSAtMSkge1xuXHRcdFx0XHRcdGNvbnN0IGdyb3VwID0gZ3JvdXBzW3gudHlwZV0gfHwgeyBmZWF0dXJlczogW10gfTtcblx0XHRcdFx0XHRncm91cC5mZWF0dXJlcy5wdXNoKHgpO1xuXHRcdFx0XHRcdGdyb3Vwc1t4LnR5cGVdID0gZ3JvdXA7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1cblx0XHQqL1xuXHRcdHJldHVybiBncm91cHM7XG5cdH1cblxuXG59XG4iXX0=