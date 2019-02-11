import { Entity } from './entity';

export class Option extends Entity {
	selected?: boolean = false;
	visible?: boolean = true;
	count?: number = 0;
}
