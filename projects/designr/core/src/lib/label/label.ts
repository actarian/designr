import { Entity } from '../models/entity';

export class Label implements Entity {
	id: string;
	value?: string;
	defaultValue?: string;
}
