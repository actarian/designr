
export class Point {
	top: number = 0;
	left: number = 0;
	x: number = 0;
	y: number = 0;
}

export interface IRect {
	top: number;
	left: number;
	width: number;
	height: number;
}

export default class Rect {

	top: number = 0;
	left: number = 0;
	width: number = 0;
	height: number = 0;
	right?: number = 0;
	bottom?: number = 0;
	center?: Point = new Point();

	constructor(rect?: IRect) {
		this.set(rect);
	}

	static contains(rect: Rect, left: number, top: number): boolean {
		return rect.top <= top && top <= rect.bottom && rect.left <= left && left <= rect.right;
	}

	static intersectRect(r1: Rect, r2: Rect): boolean {
		return !(r2.left > r1.right ||
			r2.right < r1.left ||
			r2.top > r1.bottom ||
			r2.bottom < r1.top);
	}

	static fromNode(node: HTMLElement): Rect {
		if (!node.getClientRects().length) {
			return new Rect();
		}
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

	set(rect: IRect) {
		if (rect) {
			Object.assign(this, rect);
			this.right = this.left + this.width;
			this.bottom = this.top + this.height;
		}
		const y = this.top + this.height / 2;
		const x = this.left + this.width / 2;
		this.center = {
			left: x,
			top: y,
			x,
			y,
		};
	}

	contains(left: number, top: number) {
		return Rect.contains(this, left, top);
	}

	intersect(rect: Rect) {
		return Rect.intersectRect(this, rect);
	}

	intersection(rect: Rect) {
		const center = {
			x: (this.center.x - rect.center.x) / (rect.width / 2),
			y: (this.center.y - rect.center.y) / (rect.height / 2),
		};
		if (this.intersect(rect)) {
			const dx = this.left > rect.left ? 0 : Math.abs(rect.left - this.left);
			const dy = this.top > rect.top ? 0 : Math.abs(rect.top - this.top);
			let x = dx ? (1 - dx / this.width) : ((rect.left + rect.width) - this.left) / this.width;
			let y = dy ? (1 - dy / this.height) : ((rect.top + rect.height) - this.top) / this.height;
			x = Math.min(1, x);
			y = Math.min(1, y);
			return {
				x: x,
				y: y,
				center: center
			};
		} else {
			return { x: 0, y: 0, center: center };
		}
	}

}
