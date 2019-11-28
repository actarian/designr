export declare enum AuthStrategy {
    Bearer = 0,
    Cookie = 1
}
export declare class AuthToken {
    accessToken: string;
    expiresIn: number;
    constructor(accessToken: string, expiresIn?: number);
}
