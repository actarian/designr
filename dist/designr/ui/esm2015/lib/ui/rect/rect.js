/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class Point {
    constructor() {
        this.top = 0;
        this.left = 0;
        this.x = 0;
        this.y = 0;
    }
}
if (false) {
    /** @type {?} */
    Point.prototype.top;
    /** @type {?} */
    Point.prototype.left;
    /** @type {?} */
    Point.prototype.x;
    /** @type {?} */
    Point.prototype.y;
}
/**
 * @record
 */
export function IRect() { }
if (false) {
    /** @type {?} */
    IRect.prototype.top;
    /** @type {?} */
    IRect.prototype.left;
    /** @type {?} */
    IRect.prototype.width;
    /** @type {?} */
    IRect.prototype.height;
}
export default class Rect {
    /**
     * @param {?=} rect
     */
    constructor(rect) {
        this.top = 0;
        this.left = 0;
        this.width = 0;
        this.height = 0;
        this.right = 0;
        this.bottom = 0;
        this.center = new Point();
        this.set(rect);
    }
    /**
     * @param {?} rect
     * @param {?} left
     * @param {?} top
     * @return {?}
     */
    static contains(rect, left, top) {
        return rect.top <= top && top <= rect.bottom && rect.left <= left && left <= rect.right;
    }
    /**
     * @param {?} r1
     * @param {?} r2
     * @return {?}
     */
    static intersectRect(r1, r2) {
        return !(r2.left > r1.right ||
            r2.right < r1.left ||
            r2.top > r1.bottom ||
            r2.bottom < r1.top);
    }
    /**
     * @param {?} node
     * @return {?}
     */
    static fromNode(node) {
        if (!node.getClientRects().length) {
            return new Rect();
        }
        /** @type {?} */
        const rect = node.getBoundingClientRect();
        // const defaultView = node.ownerDocument.defaultView;
        return new Rect({
            // top: rect.top + defaultView.pageYOffset,
            // left: rect.left + defaultView.pageXOffset,
            top: rect.top,
            left: rect.left,
            width: rect.width,
            height: rect.height,
        });
    }
    /**
     * @param {?} rect
     * @return {?}
     */
    set(rect) {
        if (rect) {
            Object.assign(this, rect);
            this.right = this.left + this.width;
            this.bottom = this.top + this.height;
        }
        /** @type {?} */
        const y = this.top + this.height / 2;
        /** @type {?} */
        const x = this.left + this.width / 2;
        this.center = {
            left: x,
            top: y,
            x,
            y,
        };
    }
    /**
     * @param {?} left
     * @param {?} top
     * @return {?}
     */
    contains(left, top) {
        return Rect.contains(this, left, top);
    }
    /**
     * @param {?} rect
     * @return {?}
     */
    intersect(rect) {
        return Rect.intersectRect(this, rect);
    }
    /**
     * @param {?} rect
     * @return {?}
     */
    intersection(rect) {
        /** @type {?} */
        const center = {
            x: (this.center.x - rect.center.x) / (rect.width / 2),
            y: (this.center.y - rect.center.y) / (rect.height / 2),
        };
        if (this.intersect(rect)) {
            /** @type {?} */
            const dx = this.left > rect.left ? 0 : Math.abs(rect.left - this.left);
            /** @type {?} */
            const dy = this.top > rect.top ? 0 : Math.abs(rect.top - this.top);
            /** @type {?} */
            let x = dx ? (1 - dx / this.width) : ((rect.left + rect.width) - this.left) / this.width;
            /** @type {?} */
            let y = dy ? (1 - dy / this.height) : ((rect.top + rect.height) - this.top) / this.height;
            x = Math.min(1, x);
            y = Math.min(1, y);
            return {
                x: x,
                y: y,
                center: center
            };
        }
        else {
            return { x: 0, y: 0, center: center };
        }
    }
}
if (false) {
    /** @type {?} */
    Rect.prototype.top;
    /** @type {?} */
    Rect.prototype.left;
    /** @type {?} */
    Rect.prototype.width;
    /** @type {?} */
    Rect.prototype.height;
    /** @type {?} */
    Rect.prototype.right;
    /** @type {?} */
    Rect.prototype.bottom;
    /** @type {?} */
    Rect.prototype.center;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL3VpLyIsInNvdXJjZXMiOlsibGliL3VpL3JlY3QvcmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsTUFBTSxPQUFPLEtBQUs7SUFBbEI7UUFDQyxRQUFHLEdBQVcsQ0FBQyxDQUFDO1FBQ2hCLFNBQUksR0FBVyxDQUFDLENBQUM7UUFDakIsTUFBQyxHQUFXLENBQUMsQ0FBQztRQUNkLE1BQUMsR0FBVyxDQUFDLENBQUM7SUFDZixDQUFDO0NBQUE7OztJQUpBLG9CQUFnQjs7SUFDaEIscUJBQWlCOztJQUNqQixrQkFBYzs7SUFDZCxrQkFBYzs7Ozs7QUFHZiwyQkFLQzs7O0lBSkEsb0JBQVk7O0lBQ1oscUJBQWE7O0lBQ2Isc0JBQWM7O0lBQ2QsdUJBQWU7O0FBR2hCLE1BQU0sQ0FBQyxPQUFPLE9BQU8sSUFBSTs7OztJQVV4QixZQUFZLElBQVk7UUFSeEIsUUFBRyxHQUFXLENBQUMsQ0FBQztRQUNoQixTQUFJLEdBQVcsQ0FBQyxDQUFDO1FBQ2pCLFVBQUssR0FBVyxDQUFDLENBQUM7UUFDbEIsV0FBTSxHQUFXLENBQUMsQ0FBQztRQUNuQixVQUFLLEdBQVksQ0FBQyxDQUFDO1FBQ25CLFdBQU0sR0FBWSxDQUFDLENBQUM7UUFDcEIsV0FBTSxHQUFXLElBQUksS0FBSyxFQUFFLENBQUM7UUFHNUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoQixDQUFDOzs7Ozs7O0lBRUQsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFVLEVBQUUsSUFBWSxFQUFFLEdBQVc7UUFDcEQsT0FBTyxJQUFJLENBQUMsR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN6RixDQUFDOzs7Ozs7SUFFRCxNQUFNLENBQUMsYUFB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c3MgUG9pbnQge1xyXG5cdHRvcDogbnVtYmVyID0gMDtcclxuXHRsZWZ0OiBudW1iZXIgPSAwO1xyXG5cdHg6IG51bWJlciA9IDA7XHJcblx0eTogbnVtYmVyID0gMDtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJUmVjdCB7XHJcblx0dG9wOiBudW1iZXI7XHJcblx0bGVmdDogbnVtYmVyO1xyXG5cdHdpZHRoOiBudW1iZXI7XHJcblx0aGVpZ2h0OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlY3Qge1xyXG5cclxuXHR0b3A6IG51bWJlciA9IDA7XHJcblx0bGVmdDogbnVtYmVyID0gMDtcclxuXHR3aWR0aDogbnVtYmVyID0gMDtcclxuXHRoZWlnaHQ6IG51bWJlciA9IDA7XHJcblx0cmlnaHQ/OiBudW1iZXIgPSAwO1xyXG5cdGJvdHRvbT86IG51bWJlciA9IDA7XHJcblx0Y2VudGVyPzogUG9pbnQgPSBuZXcgUG9pbnQoKTtcclxuXHJcblx0Y29uc3RydWN0b3IocmVjdD86IElSZWN0KSB7XHJcblx0XHR0aGlzLnNldChyZWN0KTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBjb250YWlucyhyZWN0OiBSZWN0LCBsZWZ0OiBudW1iZXIsIHRvcDogbnVtYmVyKTogYm9vbGVhbiB7XHJcblx0XHRyZXR1cm4gcmVjdC50b3AgPD0gdG9wICYmIHRvcCA8PSByZWN0LmJvdHRvbSAmJiByZWN0LmxlZnQgPD0gbGVmdCAmJiBsZWZ0IDw9IHJlY3QucmlnaHQ7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgaW50ZXJzZWN0UmVjdChyMTogUmVjdCwgcjI6IFJlY3QpOiBib29sZWFuIHtcclxuXHRcdHJldHVybiAhKHIyLmxlZnQgPiByMS5yaWdodCB8fFxyXG5cdFx0XHRyMi5yaWdodCA8IHIxLmxlZnQgfHxcclxuXHRcdFx0cjIudG9wID4gcjEuYm90dG9tIHx8XHJcblx0XHRcdHIyLmJvdHRvbSA8IHIxLnRvcCk7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgZnJvbU5vZGUobm9kZTogSFRNTEVsZW1lbnQpOiBSZWN0IHtcclxuXHRcdGlmICghbm9kZS5nZXRDbGllbnRSZWN0cygpLmxlbmd0aCkge1xyXG5cdFx0XHRyZXR1cm4gbmV3IFJlY3QoKTtcclxuXHRcdH1cclxuXHRcdGNvbnN0IHJlY3QgPSBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cdFx0Ly8gY29uc3QgZGVmYXVsdFZpZXcgPSBub2RlLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXc7XHJcblx0XHRyZXR1cm4gbmV3IFJlY3Qoe1xyXG5cdFx0XHQvLyB0b3A6IHJlY3QudG9wICsgZGVmYXVsdFZpZXcucGFnZVlPZmZzZXQsXHJcblx0XHRcdC8vIGxlZnQ6IHJlY3QubGVmdCArIGRlZmF1bHRWaWV3LnBhZ2VYT2Zmc2V0LFxyXG5cdFx0XHR0b3A6IHJlY3QudG9wLFxyXG5cdFx0XHRsZWZ0OiByZWN0LmxlZnQsXHJcblx0XHRcdHdpZHRoOiByZWN0LndpZHRoLFxyXG5cdFx0XHRoZWlnaHQ6IHJlY3QuaGVpZ2h0LFxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRzZXQocmVjdDogSVJlY3QpIHtcclxuXHRcdGlmIChyZWN0KSB7XHJcblx0XHRcdE9iamVjdC5hc3NpZ24odGhpcywgcmVjdCk7XHJcblx0XHRcdHRoaXMucmlnaHQgPSB0aGlzLmxlZnQgKyB0aGlzLndpZHRoO1xyXG5cdFx0XHR0aGlzLmJvdHRvbSA9IHRoaXMudG9wICsgdGhpcy5oZWlnaHQ7XHJcblx0XHR9XHJcblx0XHRjb25zdCB5ID0gdGhpcy50b3AgKyB0aGlzLmhlaWdodCAvIDI7XHJcblx0XHRjb25zdCB4ID0gdGhpcy5sZWZ0ICsgdGhpcy53aWR0aCAvIDI7XHJcblx0XHR0aGlzLmNlbnRlciA9IHtcclxuXHRcdFx0bGVmdDogeCxcclxuXHRcdFx0dG9wOiB5LFxyXG5cdFx0XHR4LFxyXG5cdFx0XHR5LFxyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdGNvbnRhaW5zKGxlZnQ6IG51bWJlciwgdG9wOiBudW1iZXIpIHtcclxuXHRcdHJldHVybiBSZWN0LmNvbnRhaW5zKHRoaXMsIGxlZnQsIHRvcCk7XHJcblx0fVxyXG5cclxuXHRpbnRlcnNlY3QocmVjdDogUmVjdCkge1xyXG5cdFx0cmV0dXJuIFJlY3QuaW50ZXJzZWN0UmVjdCh0aGlzLCByZWN0KTtcclxuXHR9XHJcblxyXG5cdGludGVyc2VjdGlvbihyZWN0OiBSZWN0KSB7XHJcblx0XHRjb25zdCBjZW50ZXIgPSB7XHJcblx0XHRcdHg6ICh0aGlzLmNlbnRlci54IC0gcmVjdC5jZW50ZXIueCkgLyAocmVjdC53aWR0aCAvIDIpLFxyXG5cdFx0XHR5OiAodGhpcy5jZW50ZXIueSAtIHJlY3QuY2VudGVyLnkpIC8gKHJlY3QuaGVpZ2h0IC8gMiksXHJcblx0XHR9O1xyXG5cdFx0aWYgKHRoaXMuaW50ZXJzZWN0KHJlY3QpKSB7XHJcblx0XHRcdGNvbnN0IGR4ID0gdGhpcy5sZWZ0ID4gcmVjdC5sZWZ0ID8gMCA6IE1hdGguYWJzKHJlY3QubGVmdCAtIHRoaXMubGVmdCk7XHJcblx0XHRcdGNvbnN0IGR5ID0gdGhpcy50b3AgPiByZWN0LnRvcCA/IDAgOiBNYXRoLmFicyhyZWN0LnRvcCAtIHRoaXMudG9wKTtcclxuXHRcdFx0bGV0IHggPSBkeCA/ICgxIC0gZHggLyB0aGlzLndpZHRoKSA6ICgocmVjdC5sZWZ0ICsgcmVjdC53aWR0aCkgLSB0aGlzLmxlZnQpIC8gdGhpcy53aWR0aDtcclxuXHRcdFx0bGV0IHkgPSBkeSA/ICgxIC0gZHkgLyB0aGlzLmhlaWdodCkgOiAoKHJlY3QudG9wICsgcmVjdC5oZWlnaHQpIC0gdGhpcy50b3ApIC8gdGhpcy5oZWlnaHQ7XHJcblx0XHRcdHggPSBNYXRoLm1pbigxLCB4KTtcclxuXHRcdFx0eSA9IE1hdGgubWluKDEsIHkpO1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdHg6IHgsXHJcblx0XHRcdFx0eTogeSxcclxuXHRcdFx0XHRjZW50ZXI6IGNlbnRlclxyXG5cdFx0XHR9O1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuIHsgeDogMCwgeTogMCwgY2VudGVyOiBjZW50ZXIgfTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG59XHJcbiJdfQ==