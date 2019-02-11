export class ServerLocation {
	protocol?: string = '';
	slashes?: string = '';
	auth?: string = '';
	host?: string = '';
	port?: number;
	hostname?: string = '';
	hash?: string = '';
	search?: string = '';
	query?: Object;
	pathname?: string = '';
	path?: string = '';
	href?: string = '';

	constructor() {
		this.query = {};
	}
}

export class ServerData {
	originalHtml?: string = '';
	items?: Object;

	constructor() {
		this.items = {};
	}
}

import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class ServerParams {
	location?: ServerLocation;
	data?: ServerData;
	origin?: string = '';
	url?: string = '';
	baseUrl?: string = '';
	absoluteUrl?: string = '';

	constructor() {
		this.location = new ServerLocation();
		this.data = new ServerData();
	}
}
