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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZXNpZ25yL3VpLyIsInNvdXJjZXMiOlsibGliL3VpL3JlY3QvcmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsTUFBTSxPQUFPLEtBQUs7SUFBbEI7UUFDQyxRQUFHLEdBQVcsQ0FBQyxDQUFDO1FBQ2hCLFNBQUksR0FBVyxDQUFDLENBQUM7UUFDakIsTUFBQyxHQUFXLENBQUMsQ0FBQztRQUNkLE1BQUMsR0FBVyxDQUFDLENBQUM7SUFDZixDQUFDO0NBQUE7OztJQUpBLG9CQUFnQjs7SUFDaEIscUJBQWlCOztJQUNqQixrQkFBYzs7SUFDZCxrQkFBYzs7Ozs7QUFHZiwyQkFLQzs7O0lBSkEsb0JBQVk7O0lBQ1oscUJBQWE7O0lBQ2Isc0JBQWM7O0lBQ2QsdUJBQWU7O0FBR2hCLE1BQU0sQ0FBQyxPQUFPLE9BQU8sSUFBSTs7OztJQVV4QixZQUFZLElBQVk7UUFSeEIsUUFBRyxHQUFXLENBQUMsQ0FBQztRQUNoQixTQUFJLEdBQVcsQ0FBQyxDQUFDO1FBQ2pCLFVBQUssR0FBVyxDQUFDLENBQUM7UUFDbEIsV0FBTSxHQUFXLENBQUMsQ0FBQztRQUNuQixVQUFLLEdBQVksQ0FBQyxDQUFDO1FBQ25CLFdBQU0sR0FBWSxDQUFDLENBQUM7UUFDcEIsV0FBTSxHQUFXLElBQUksS0FBSyxFQUFFLENBQUM7UUFHNUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoQixDQUFDOzs7Ozs7O0lBRUQsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFVLEVBQUUsSUFBWSxFQUFFLEdBQVc7UUFDcEQsT0FBTyxJQUFJLENBQUMsR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN6RixDQUFDOzs7Ozs7SUFFRCxNQUFNLENBQUMsYUFB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IFBvaW50IHtcblx0dG9wOiBudW1iZXIgPSAwO1xuXHRsZWZ0OiBudW1iZXIgPSAwO1xuXHR4OiBudW1iZXIgPSAwO1xuXHR5OiBudW1iZXIgPSAwO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElSZWN0IHtcblx0dG9wOiBudW1iZXI7XG5cdGxlZnQ6IG51bWJlcjtcblx0d2lkdGg6IG51bWJlcjtcblx0aGVpZ2h0OiBudW1iZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlY3Qge1xuXG5cdHRvcDogbnVtYmVyID0gMDtcblx0bGVmdDogbnVtYmVyID0gMDtcblx0d2lkdGg6IG51bWJlciA9IDA7XG5cdGhlaWdodDogbnVtYmVyID0gMDtcblx0cmlnaHQ/OiBudW1iZXIgPSAwO1xuXHRib3R0b20/OiBudW1iZXIgPSAwO1xuXHRjZW50ZXI/OiBQb2ludCA9IG5ldyBQb2ludCgpO1xuXG5cdGNvbnN0cnVjdG9yKHJlY3Q/OiBJUmVjdCkge1xuXHRcdHRoaXMuc2V0KHJlY3QpO1xuXHR9XG5cblx0c3RhdGljIGNvbnRhaW5zKHJlY3Q6IFJlY3QsIGxlZnQ6IG51bWJlciwgdG9wOiBudW1iZXIpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gcmVjdC50b3AgPD0gdG9wICYmIHRvcCA8PSByZWN0LmJvdHRvbSAmJiByZWN0LmxlZnQgPD0gbGVmdCAmJiBsZWZ0IDw9IHJlY3QucmlnaHQ7XG5cdH1cblxuXHRzdGF0aWMgaW50ZXJzZWN0UmVjdChyMTogUmVjdCwgcjI6IFJlY3QpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gIShyMi5sZWZ0ID4gcjEucmlnaHQgfHxcblx0XHRcdHIyLnJpZ2h0IDwgcjEubGVmdCB8fFxuXHRcdFx0cjIudG9wID4gcjEuYm90dG9tIHx8XG5cdFx0XHRyMi5ib3R0b20gPCByMS50b3ApO1xuXHR9XG5cblx0c3RhdGljIGZyb21Ob2RlKG5vZGU6IEhUTUxFbGVtZW50KTogUmVjdCB7XG5cdFx0aWYgKCFub2RlLmdldENsaWVudFJlY3RzKCkubGVuZ3RoKSB7XG5cdFx0XHRyZXR1cm4gbmV3IFJlY3QoKTtcblx0XHR9XG5cdFx0Y29uc3QgcmVjdCA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0Ly8gY29uc3QgZGVmYXVsdFZpZXcgPSBub2RlLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXc7XG5cdFx0cmV0dXJuIG5ldyBSZWN0KHtcblx0XHRcdC8vIHRvcDogcmVjdC50b3AgKyBkZWZhdWx0Vmlldy5wYWdlWU9mZnNldCxcblx0XHRcdC8vIGxlZnQ6IHJlY3QubGVmdCArIGRlZmF1bHRWaWV3LnBhZ2VYT2Zmc2V0LFxuXHRcdFx0dG9wOiByZWN0LnRvcCxcblx0XHRcdGxlZnQ6IHJlY3QubGVmdCxcblx0XHRcdHdpZHRoOiByZWN0LndpZHRoLFxuXHRcdFx0aGVpZ2h0OiByZWN0LmhlaWdodCxcblx0XHR9KTtcblx0fVxuXG5cdHNldChyZWN0OiBJUmVjdCkge1xuXHRcdGlmIChyZWN0KSB7XG5cdFx0XHRPYmplY3QuYXNzaWduKHRoaXMsIHJlY3QpO1xuXHRcdFx0dGhpcy5yaWdodCA9IHRoaXMubGVmdCArIHRoaXMud2lkdGg7XG5cdFx0XHR0aGlzLmJvdHRvbSA9IHRoaXMudG9wICsgdGhpcy5oZWlnaHQ7XG5cdFx0fVxuXHRcdGNvbnN0IHkgPSB0aGlzLnRvcCArIHRoaXMuaGVpZ2h0IC8gMjtcblx0XHRjb25zdCB4ID0gdGhpcy5sZWZ0ICsgdGhpcy53aWR0aCAvIDI7XG5cdFx0dGhpcy5jZW50ZXIgPSB7XG5cdFx0XHRsZWZ0OiB4LFxuXHRcdFx0dG9wOiB5LFxuXHRcdFx0eCxcblx0XHRcdHksXG5cdFx0fTtcblx0fVxuXG5cdGNvbnRhaW5zKGxlZnQ6IG51bWJlciwgdG9wOiBudW1iZXIpIHtcblx0XHRyZXR1cm4gUmVjdC5jb250YWlucyh0aGlzLCBsZWZ0LCB0b3ApO1xuXHR9XG5cblx0aW50ZXJzZWN0KHJlY3Q6IFJlY3QpIHtcblx0XHRyZXR1cm4gUmVjdC5pbnRlcnNlY3RSZWN0KHRoaXMsIHJlY3QpO1xuXHR9XG5cblx0aW50ZXJzZWN0aW9uKHJlY3Q6IFJlY3QpIHtcblx0XHRjb25zdCBjZW50ZXIgPSB7XG5cdFx0XHR4OiAodGhpcy5jZW50ZXIueCAtIHJlY3QuY2VudGVyLngpIC8gKHJlY3Qud2lkdGggLyAyKSxcblx0XHRcdHk6ICh0aGlzLmNlbnRlci55IC0gcmVjdC5jZW50ZXIueSkgLyAocmVjdC5oZWlnaHQgLyAyKSxcblx0XHR9O1xuXHRcdGlmICh0aGlzLmludGVyc2VjdChyZWN0KSkge1xuXHRcdFx0Y29uc3QgZHggPSB0aGlzLmxlZnQgPiByZWN0LmxlZnQgPyAwIDogTWF0aC5hYnMocmVjdC5sZWZ0IC0gdGhpcy5sZWZ0KTtcblx0XHRcdGNvbnN0IGR5ID0gdGhpcy50b3AgPiByZWN0LnRvcCA/IDAgOiBNYXRoLmFicyhyZWN0LnRvcCAtIHRoaXMudG9wKTtcblx0XHRcdGxldCB4ID0gZHggPyAoMSAtIGR4IC8gdGhpcy53aWR0aCkgOiAoKHJlY3QubGVmdCArIHJlY3Qud2lkdGgpIC0gdGhpcy5sZWZ0KSAvIHRoaXMud2lkdGg7XG5cdFx0XHRsZXQgeSA9IGR5ID8gKDEgLSBkeSAvIHRoaXMuaGVpZ2h0KSA6ICgocmVjdC50b3AgKyByZWN0LmhlaWdodCkgLSB0aGlzLnRvcCkgLyB0aGlzLmhlaWdodDtcblx0XHRcdHggPSBNYXRoLm1pbigxLCB4KTtcblx0XHRcdHkgPSBNYXRoLm1pbigxLCB5KTtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdHg6IHgsXG5cdFx0XHRcdHk6IHksXG5cdFx0XHRcdGNlbnRlcjogY2VudGVyXG5cdFx0XHR9O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4geyB4OiAwLCB5OiAwLCBjZW50ZXI6IGNlbnRlciB9O1xuXHRcdH1cblx0fVxuXG59XG4iXX0=