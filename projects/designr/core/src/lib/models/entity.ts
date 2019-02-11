import { Identity } from './identity';

export class Entity implements Identity {
	id: number | string;
	name?: string;
}
