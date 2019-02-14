export declare class LinkDefinition {
    href?: string;
    id?: string;
    rel?: string;
}
export declare class LinkService {
    private doc;
    constructor(doc: any);
    addTag(definition: LinkDefinition): void;
    getTag(selector: string): any;
    updateTag(selector: string, definition: LinkDefinition): void;
    removeTag(selector: string): void;
    updateElementDefinition(element: HTMLLinkElement, definition: LinkDefinition): void;
    updateElementAttribute(element: HTMLLinkElement, attribute: string, value: any): void;
}
