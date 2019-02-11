import { Entity } from './entity';
export declare class Document implements Entity {
    id: number | string;
    name?: string;
    title?: string;
    description?: string;
    slug?: string;
}
export declare class DocumentIndex {
    id: number | string;
    mnemonic?: string;
    slug?: string;
}
