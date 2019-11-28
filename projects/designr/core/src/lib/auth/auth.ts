
export enum AuthStrategy {
	Bearer = 0,
	Cookie = 1,
}

export class AuthToken {
	constructor(
		public accessToken: string,
		public expiresIn: number = 0
	) { }
}
