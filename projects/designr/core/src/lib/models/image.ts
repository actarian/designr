
export enum ImageType {
	Default = 1,
	Gallery = 2,
	Share = 3,
}

export class Image {
	id: number | string;
	url: string;
	title?: string;
	description?: string;
	fileName?: string;
	type?: ImageType;
}
