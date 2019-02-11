import { Entity } from '../models/entity';

export class Label implements Entity {
	id: number | string;
	name: string;
	lang: string;
	labels?: any;
}
