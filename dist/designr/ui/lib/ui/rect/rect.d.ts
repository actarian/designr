export declare class Point {
    top: number;
    left: number;
    x: number;
    y: number;
}
export interface IRect {
    top: number;
    left: number;
    width: number;
    height: number;
}
export default class Rect {
    top: number;
    left: number;
    width: number;
    height: number;
    right?: number;
    bottom?: number;
    center?: Point;
    constructor(rect?: IRect);
    static contains(rect: Rect, left: number, top: number): boolean;
    static intersectRect(r1: Rect, r2: Rect): boolean;
    static fromNode(node: HTMLElement): Rect;
    set(rect: IRect): void;
    contains(left: number, top: number): boolean;
    intersect(rect: Rect): boolean;
    intersection(rect: Rect): {
        x: number;
        y: number;
        center: {
            x: number;
            y: number;
        };
    };
}
