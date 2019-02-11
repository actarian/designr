import { Injectable } from '@angular/core';

@Injectable()
export class HttpStatusCodeService {

	private statusCode: number;
	private redirectUrl: string;

	constructor() {
		this.statusCode = 200;
		this.redirectUrl = null;
	}

	public setStatusCode(statusCode: number, redirectUrl: string = null) {
		this.statusCode = statusCode;
		this.redirectUrl = redirectUrl;
	}

	public getStatusCode(): number {
		return (this.statusCode === 309 ? 301 : this.statusCode);
	}

	public getRedirectUrl(): string {
		return this.redirectUrl;
	}

}
