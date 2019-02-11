import { Entity } from './entity';

export class Document implements Entity {
	id: number | string;
	name?: string;
	title?: string;
	description?: string;
	slug?: string;
}

export class DocumentIndex {
	id: number | string;
	mnemonic?: string;
	slug?: string;
}

