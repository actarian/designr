import { Entity } from '../models/entity';
export declare class Translate implements Entity {
    id: number | string;
    name: string;
    lang: string;
    labels?: any;
}
