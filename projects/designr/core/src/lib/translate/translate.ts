import { Entity } from '../models/entity';

export class Translate implements Entity {
	id: number | string;
	name: string;
	lang: string;
	labels?: any;
}
