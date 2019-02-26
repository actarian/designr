/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export var STATUS_CODE = {
    CONTINUE: 100,
    SWITCHING_PROTOCOLS: 101,
    OK: 200,
    CREATED: 201,
    ACCEPTED: 202,
    NON_AUTHORITATIVE_INFORMATION: 203,
    NO_CONTENT: 204,
    RESET_CONTENT: 205,
    PARTIAL_CONTENT: 206,
    MULTIPLE_CHOICES: 300,
    MOVED_PERMANTENTLY: 301,
    FOUND: 302,
    SEE_OTHER: 303,
    NOT_MODIFIED: 304,
    USE_PROXY: 305,
    TEMPORARY_REDIRECT: 307,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    PAYMENT_REQUIRED: 402,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    METHOD_NOT_ALLOWED: 405,
    NOT_ACCEPTABLE: 406,
    PROXY_AUTHENTICATION_REQUIRED: 407,
    REQUEST_TIMEOUT: 408,
    CONFLICT: 409,
    GONE: 410,
    LENGTH_REQUIRED: 411,
    PRECONDITION_FAILED: 412,
    PAYLOAD_TO_LARGE: 413,
    URI_TOO_LONG: 414,
    UNSUPPORTED_MEDIA_TYPE: 415,
    RANGE_NOT_SATISFIABLE: 416,
    EXPECTATION_FAILED: 417,
    IM_A_TEAPOT: 418,
    UPGRADE_REQUIRED: 426,
    INTERNAL_SERVER_ERROR: 500,
    NOT_IMPLEMENTED: 501,
    BAD_GATEWAY: 502,
    SERVICE_UNAVAILABLE: 503,
    GATEWAY_TIMEOUT: 504,
    HTTP_VERSION_NOT_SUPPORTED: 505,
    PROCESSING: 102,
    MULTI_STATUS: 207,
    IM_USED: 226,
    PERMANENT_REDIRECT: 308,
    UNPROCESSABLE_ENTRY: 422,
    LOCKED: 423,
    FAILED_DEPENDENCY: 424,
    PRECONDITION_REQUIRED: 428,
    TOO_MANY_REQUESTS: 429,
    REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
    UNAVAILABLE_FOR_LEGAL_REASONS: 451,
    VARIANT_ALSO_NEGOTIATES: 506,
    INSUFFICIENT_STORAGE: 507,
    NETWORK_AUTHENTICATION_REQUIRED: 511
};
/*tslint:disable:quotemark max-line-length one-line */
/** @type {?} */
export var STATUS_CODE_INFO = {
    '100': {
        'code': 100,
        'text': 'Continue',
        'description': '\"The initial part of a request has been received and has not yet been rejected by the server.\"',
        'spec_title': 'RFC7231#6.2.1',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.2.1'
    },
    '101': {
        'code': 101,
        'text': 'Switching Protocols',
        'description': '\"The server understands and is willing to comply with the client\'s request, via the Upgrade header field, for a change in the application protocol being used on this connection.\"',
        'spec_title': 'RFC7231#6.2.2',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.2.2'
    },
    '200': {
        'code': 200,
        'text': 'OK',
        'description': '\"The request has succeeded.\"',
        'spec_title': 'RFC7231#6.3.1',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.3.1'
    },
    '201': {
        'code': 201,
        'text': 'Created',
        'description': '\"The request has been fulfilled and has resulted in one or more new resources being created.\"',
        'spec_title': 'RFC7231#6.3.2',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.3.2'
    },
    '202': {
        'code': 202,
        'text': 'Accepted',
        'description': '\"The request has been accepted for processing, but the processing has not been completed.\"',
        'spec_title': 'RFC7231#6.3.3',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.3.3'
    },
    '203': {
        'code': 203,
        'text': 'Non-Authoritative Information',
        'description': '\"The request was successful but the enclosed payload has been modified from that of the origin server\'s 200 (OK) response by a transforming proxy.\"',
        'spec_title': 'RFC7231#6.3.4',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.3.4'
    },
    '204': {
        'code': 204,
        'text': 'No Content',
        'description': '\"The server has successfully fulfilled the request and that there is no additional content to send in the response payload body.\"',
        'spec_title': 'RFC7231#6.3.5',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.3.5'
    },
    '205': {
        'code': 205,
        'text': 'Reset Content',
        'description': '\"The server has fulfilled the request and desires that the user agent reset the \"document view\", which caused the request to be sent, to its original state as received from the origin server.\"',
        'spec_title': 'RFC7231#6.3.6',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.3.6'
    },
    '206': {
        'code': 206,
        'text': 'Partial Content',
        'description': '\"The server is successfully fulfilling a range request for the target resource by transferring one or more parts of the selected representation that correspond to the satisfiable ranges found in the requests\'s Range header field.\"',
        'spec_title': 'RFC7233#4.1',
        'spec_href': 'http://tools.ietf.org/html/rfc7233#section-4.1'
    },
    '300': {
        'code': 300,
        'text': 'Multiple Choices',
        'description': '\"The target resource has more than one representation, each with its own more specific identifier, and information about the alternatives is being provided so that the user (or user agent) can select a preferred representation by redirecting its request to one or more of those identifiers.\"',
        'spec_title': 'RFC7231#6.4.1',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.4.1'
    },
    '301': {
        'code': 301,
        'text': 'Moved Permanently',
        'description': '\"The target resource has been assigned a new permanent URI and any future references to this resource ought to use one of the enclosed URIs.\"',
        'spec_title': 'RFC7231#6.4.2',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.4.2'
    },
    '302': {
        'code': 302,
        'text': 'Found',
        'description': '\"The target resource resides temporarily under a different URI.\"',
        'spec_title': 'RFC7231#6.4.3',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.4.3'
    },
    '303': {
        'code': 303,
        'text': 'See Other',
        'description': '\"The server is redirecting the user agent to a different resource, as indicated by a URI in the Location header field, that is intended to provide an indirect response to the original request.\"',
        'spec_title': 'RFC7231#6.4.4',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.4.4'
    },
    '304': {
        'code': 304,
        'text': 'Not Modified',
        'description': '\"A conditional GET request has been received and would have resulted in a 200 (OK) response if it were not for the fact that the condition has evaluated to false.\"',
        'spec_title': 'RFC7232#4.1',
        'spec_href': 'http://tools.ietf.org/html/rfc7232#section-4.1'
    },
    '305': {
        'code': 305,
        'text': 'Use Proxy',
        'description': '*deprecated*',
        'spec_title': 'RFC7231#6.4.5',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.4.5'
    },
    '307': {
        'code': 307,
        'text': 'Temporary Redirect',
        'description': '\"The target resource resides temporarily under a different URI and the user agent MUST NOT change the request method if it performs an automatic redirection to that URI.\"',
        'spec_title': 'RFC7231#6.4.7',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.4.7'
    },
    '400': {
        'code': 400,
        'text': 'Bad Request',
        'description': '\"The server cannot or will not process the request because the received syntax is invalid, nonsensical, or exceeds some limitation on what the server is willing to process.\"',
        'spec_title': 'RFC7231#6.5.1',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.1'
    },
    '401': {
        'code': 401,
        'text': 'Unauthorized',
        'description': '\"The request has not been applied because it lacks valid authentication credentials for the target resource.\"',
        'spec_title': 'RFC7235#6.3.1',
        'spec_href': 'http://tools.ietf.org/html/rfc7235#section-3.1'
    },
    '402': {
        'code': 402,
        'text': 'Payment Required',
        'description': '*reserved*',
        'spec_title': 'RFC7231#6.5.2',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.2'
    },
    '403': {
        'code': 403,
        'text': 'Forbidden',
        'description': '\"The server understood the request but refuses to authorize it.\"',
        'spec_title': 'RFC7231#6.5.3',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.3'
    },
    '404': {
        'code': 404,
        'text': 'Not Found',
        'description': '\"The origin server did not find a current representation for the target resource or is not willing to disclose that one exists.\"',
        'spec_title': 'RFC7231#6.5.4',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.4'
    },
    '405': {
        'code': 405,
        'text': 'Method Not Allowed',
        'description': '\"The method specified in the request-line is known by the origin server but not supported by the target resource.\"',
        'spec_title': 'RFC7231#6.5.5',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.5'
    },
    '406': {
        'code': 406,
        'text': 'Not Acceptable',
        'description': '\"The target resource does not have a current representation that would be acceptable to the user agent, according to the proactive negotiation header fields received in the request, and the server is unwilling to supply a default representation.\"',
        'spec_title': 'RFC7231#6.5.6',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.6'
    },
    '407': {
        'code': 407,
        'text': 'Proxy Authentication Required',
        'description': '\"The client needs to authenticate itself in order to use a proxy.\"',
        'spec_title': 'RFC7231#6.3.2',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.3.2'
    },
    '408': {
        'code': 408,
        'text': 'Request Timeout',
        'description': '\"The server did not receive a complete request message within the time that it was prepared to wait.\"',
        'spec_title': 'RFC7231#6.5.7',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.7'
    },
    '409': {
        'code': 409,
        'text': 'Conflict',
        'description': '\"The request could not be completed due to a conflict with the current state of the resource.\"',
        'spec_title': 'RFC7231#6.5.8',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.8'
    },
    '410': {
        'code': 410,
        'text': 'Gone',
        'description': '\"Access to the target resource is no longer available at the origin server and that this condition is likely to be permanent.\"',
        'spec_title': 'RFC7231#6.5.9',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.9'
    },
    '411': {
        'code': 411,
        'text': 'Length Required',
        'description': '\"The server refuses to accept the request without a defined Content-Length.\"',
        'spec_title': 'RFC7231#6.5.10',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.10'
    },
    '412': {
        'code': 412,
        'text': 'Precondition Failed',
        'description': '\"One or more preconditions given in the request header fields evaluated to false when tested on the server.\"',
        'spec_title': 'RFC7232#4.2',
        'spec_href': 'http://tools.ietf.org/html/rfc7232#section-4.2'
    },
    '413': {
        'code': 413,
        'text': 'Payload Too Large',
        'description': '\"The server is refusing to process a request because the request payload is larger than the server is willing or able to process.\"',
        'spec_title': 'RFC7231#6.5.11',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.11'
    },
    '414': {
        'code': 414,
        'text': 'URI Too Long',
        'description': '\"The server is refusing to service the request because the request-target is longer than the server is willing to interpret.\"',
        'spec_title': 'RFC7231#6.5.12',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.12'
    },
    '415': {
        'code': 415,
        'text': 'Unsupported Media Type',
        'description': '\"The origin server is refusing to service the request because the payload is in a format not supported by the target resource for this method.\"',
        'spec_title': 'RFC7231#6.5.13',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.13'
    },
    '416': {
        'code': 416,
        'text': 'Range Not Satisfiable',
        'description': '\"None of the ranges in the request\'s Range header field overlap the current extent of the selected resource or that the set of ranges requested has been rejected due to invalid ranges or an excessive request of small or overlapping ranges.\"',
        'spec_title': 'RFC7233#4.4',
        'spec_href': 'http://tools.ietf.org/html/rfc7233#section-4.4'
    },
    '417': {
        'code': 417,
        'text': 'Expectation Failed',
        'description': '\"The expectation given in the request\'s Expect header field could not be met by at least one of the inbound servers.\"',
        'spec_title': 'RFC7231#6.5.14',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.14'
    },
    '418': {
        'code': 418,
        'text': 'I\'m a teapot',
        'description': '\"1988 April Fools Joke. Returned by tea pots requested to brew coffee.\"',
        'spec_title': 'RFC 2324',
        'spec_href': 'https://tools.ietf.org/html/rfc2324'
    },
    '426': {
        'code': 426,
        'text': 'Upgrade Required',
        'description': '\"The server refuses to perform the request using the current protocol but might be willing to do so after the client upgrades to a different protocol.\"',
        'spec_title': 'RFC7231#6.5.15',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.5.15'
    },
    '500': {
        'code': 500,
        'text': 'Internal Server Error',
        'description': '\"The server encountered an unexpected condition that prevented it from fulfilling the request.\"',
        'spec_title': 'RFC7231#6.6.1',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.6.1'
    },
    '501': {
        'code': 501,
        'text': 'Not Implemented',
        'description': '\"The server does not support the functionality required to fulfill the request.\"',
        'spec_title': 'RFC7231#6.6.2',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.6.2'
    },
    '502': {
        'code': 502,
        'text': 'Bad Gateway',
        'description': '\"The server, while acting as a gateway or proxy, received an invalid response from an inbound server it accessed while attempting to fulfill the request.\"',
        'spec_title': 'RFC7231#6.6.3',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.6.3'
    },
    '503': {
        'code': 503,
        'text': 'Service Unavailable',
        'description': '\"The server is currently unable to handle the request due to a temporary overload or scheduled maintenance, which will likely be alleviated after some delay.\"',
        'spec_title': 'RFC7231#6.6.4',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.6.4'
    },
    '504': {
        'code': 504,
        'text': 'Gateway Time-out',
        'description': '\"The server, while acting as a gateway or proxy, did not receive a timely response from an upstream server it needed to access in order to complete the request.\"',
        'spec_title': 'RFC7231#6.6.5',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.6.5'
    },
    '505': {
        'code': 505,
        'text': 'HTTP Version Not Supported',
        'description': '\"The server does not support, or refuses to support, the protocol version that was used in the request message.\"',
        'spec_title': 'RFC7231#6.6.6',
        'spec_href': 'http://tools.ietf.org/html/rfc7231#section-6.6.6'
    },
    '102': {
        'code': 102,
        'text': 'Processing',
        'description': '\"An interim response to inform the client that the server has accepted the complete request, but has not yet completed it.\"',
        'spec_title': 'RFC5218#10.1',
        'spec_href': 'http://tools.ietf.org/html/rfc2518#section-10.1'
    },
    '207': {
        'code': 207,
        'text': 'Multi-Status',
        'description': '\"Status for multiple independent operations.\"',
        'spec_title': 'RFC5218#10.2',
        'spec_href': 'http://tools.ietf.org/html/rfc2518#section-10.2'
    },
    '226': {
        'code': 226,
        'text': 'IM Used',
        'description': '\"The server has fulfilled a GET request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.\"',
        'spec_title': 'RFC3229#10.4.1',
        'spec_href': 'http://tools.ietf.org/html/rfc3229#section-10.4.1'
    },
    '308': {
        'code': 308,
        'text': 'Permanent Redirect',
        'description': '\"The target resource has been assigned a new permanent URI and any future references to this resource SHOULD use one of the returned URIs. [...] This status code is similar to 301 Moved Permanently (Section 7.3.2 of rfc7231), except that it does not allow rewriting the request method from POST to GET.\"',
        'spec_title': 'RFC7238',
        'spec_href': 'http://tools.ietf.org/html/rfc7238'
    },
    '422': {
        'code': 422,
        'text': 'Unprocessable Entity',
        'description': '\"The server understands the content type of the request entity (hence a 415(Unsupported Media Type) status code is inappropriate), and the syntax of the request entity is correct (thus a 400 (Bad Request) status code is inappropriate) but was unable to process the contained instructions.\"',
        'spec_title': 'RFC5218#10.3',
        'spec_href': 'http://tools.ietf.org/html/rfc2518#section-10.3'
    },
    '423': {
        'code': 423,
        'text': 'Locked',
        'description': '\"The source or destination resource of a method is locked.\"',
        'spec_title': 'RFC5218#10.4',
        'spec_href': 'http://tools.ietf.org/html/rfc2518#section-10.4'
    },
    '424': {
        'code': 424,
        'text': 'Failed Dependency',
        'description': '\"The method could not be performed on the resource because the requested action depended on another action and that action failed.\"',
        'spec_title': 'RFC5218#10.5',
        'spec_href': 'http://tools.ietf.org/html/rfc2518#section-10.5'
    },
    '428': {
        'code': 428,
        'text': 'Precondition Required',
        'description': '\"The origin server requires the request to be conditional.\"',
        'spec_title': 'RFC6585#3',
        'spec_href': 'http://tools.ietf.org/html/rfc6585#section-3'
    },
    '429': {
        'code': 429,
        'text': 'Too Many Requests',
        'description': '\"The user has sent too many requests in a given amount of time (\"rate limiting\").\"',
        'spec_title': 'RFC6585#4',
        'spec_href': 'http://tools.ietf.org/html/rfc6585#section-4'
    },
    '431': {
        'code': 431,
        'text': 'Request Header Fields Too Large',
        'description': '\"The server is unwilling to process the request because its header fields are too large.\"',
        'spec_title': 'RFC6585#5',
        'spec_href': 'http://tools.ietf.org/html/rfc6585#section-5'
    },
    '451': {
        'code': 451,
        'text': 'Unavailable For Legal Reasons',
        'description': '\"The server is denying access to the resource in response to a legal demand.\"',
        'spec_title': 'draft-ietf-httpbis-legally-restricted-status',
        'spec_href': 'http://tools.ietf.org/html/draft-ietf-httpbis-legally-restricted-status'
    },
    '506': {
        'code': 506,
        'text': 'Variant Also Negotiates',
        'description': '\"The server has an internal configuration error: the chosen variant resource is configured to engage in transparent content negotiation itself, and is therefore not a proper end point in the negotiation process.\"',
        'spec_title': 'RFC2295#8.1',
        'spec_href': 'http://tools.ietf.org/html/rfc2295#section-8.1'
    },
    '507': {
        'code': 507,
        'text': 'Insufficient Storage',
        'description': '\The method could not be performed on the resource because the server is unable to store the representation needed to successfully complete the request.\"',
        'spec_title': 'RFC5218#10.6',
        'spec_href': 'http://tools.ietf.org/html/rfc2518#section-10.6'
    },
    '511': {
        'code': 511,
        'text': 'Network Authentication Required',
        'description': '\"The client needs to authenticate to gain network access.\"',
        'spec_title': 'RFC6585#6',
        'spec_href': 'http://tools.ietf.org/html/rfc6585#section-6'
    }
};
/**
 * get the status text from StatusCode
 * @param {?} status
 * @return {?}
 */
export function getStatusText(status) {
    return STATUS_CODE_INFO[status].text || 'Unknown Status';
}
/**
 * Returns true if the the Http Status Code is 200-299 (success)
 * @param {?} status
 * @return {?}
 */
export function isSuccess(status) {
    return status >= 200 && status < 300;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1zdGF0dXMtY29kZXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVzaWduci9kYXRhLyIsInNvdXJjZXMiOlsibGliL21lbW9yeS9odHRwLXN0YXR1cy1jb2Rlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE1BQU0sS0FBTyxXQUFXLEdBQUc7SUFDMUIsUUFBUSxFQUFFLEdBQUc7SUFDYixtQkFBbUIsRUFBRSxHQUFHO0lBQ3hCLEVBQUUsRUFBRSxHQUFHO0lBQ1AsT0FBTyxFQUFFLEdBQUc7SUFDWixRQUFRLEVBQUUsR0FBRztJQUNiLDZCQUE2QixFQUFFLEdBQUc7SUFDbEMsVUFBVSxFQUFFLEdBQUc7SUFDZixhQUFhLEVBQUUsR0FBRztJQUNsQixlQUFlLEVBQUUsR0FBRztJQUNwQixnQkFBZ0IsRUFBRSxHQUFHO0lBQ3JCLGtCQUFrQixFQUFFLEdBQUc7SUFDdkIsS0FBSyxFQUFFLEdBQUc7SUFDVixTQUFTLEVBQUUsR0FBRztJQUNkLFlBQVksRUFBRSxHQUFHO0lBQ2pCLFNBQVMsRUFBRSxHQUFHO0lBQ2Qsa0JBQWtCLEVBQUUsR0FBRztJQUN2QixXQUFXLEVBQUUsR0FBRztJQUNoQixZQUFZLEVBQUUsR0FBRztJQUNqQixnQkFBZ0IsRUFBRSxHQUFHO0lBQ3JCLFNBQVMsRUFBRSxHQUFHO0lBQ2QsU0FBUyxFQUFFLEdBQUc7SUFDZCxrQkFBa0IsRUFBRSxHQUFHO0lBQ3ZCLGNBQWMsRUFBRSxHQUFHO0lBQ25CLDZCQUE2QixFQUFFLEdBQUc7SUFDbEMsZUFBZSxFQUFFLEdBQUc7SUFDcEIsUUFBUSxFQUFFLEdBQUc7SUFDYixJQUFJLEVBQUUsR0FBRztJQUNULGVBQWUsRUFBRSxHQUFHO0lBQ3BCLG1CQUFtQixFQUFFLEdBQUc7SUFDeEIsZ0JBQWdCLEVBQUUsR0FBRztJQUNyQixZQUFZLEVBQUUsR0FBRztJQUNqQixzQkFBc0IsRUFBRSxHQUFHO0lBQzNCLHFCQUFxQixFQUFFLEdBQUc7SUFDMUIsa0JBQWtCLEVBQUUs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QUM1RyxZQUFZLEVBQUUsV0FBVztRQUN6QixXQUFXLEVBQUUsOENBQThDO0tBQzNEO0lBQ0QsS0FBSyxFQUFFO1FBQ04sTUFBTSxFQUFFLEdBQUc7UUFDWCxNQUFNLEVBQUUsK0JBQStCO1FBQ3ZDLGFBQWEsRUFBRSxpRkFBaUY7UUFDaEcsWUFBWSxFQUFFLDhDQUE4QztRQUM1RCxXQUFXLEVBQUUseUVBQXlFO0tBQ3RGO0lBQ0QsS0FBSyxFQUFFO1FBQ04sTUFBTSxFQUFFLEdBQUc7UUFDWCxNQUFNLEVBQUUseUJBQXlCO1FBQ2pDLGFBQWEsRUFBRSx3TkFBd047UUFDdk8sWUFBWSxFQUFFLGFBQWE7UUFDM0IsV0FBVyxFQUFFLGdEQUFnRDtLQUM3RDtJQUNELEtBQUssRUFBRTtRQUNOLE1BQU0sRUFBRSxHQUFHO1FBQ1gsTUFBTSxFQUFFLHNCQUFzQjtRQUM5QixhQUFhLEVBQUUsNEpBQTRKO1FBQzNLLFlBQVksRUFBRSxjQUFjO1FBQzVCLFdBQVcsRUFBRSxpREFBaUQ7S0FDOUQ7SUFDRCxLQUFLLEVBQUU7UUFDTixNQUFNLEVBQUUsR0FBRztRQUNYLE1BQU0sRUFBRSxpQ0FBaUM7UUFDekMsYUFBYSxFQUFFLDhEQUE4RDtRQUM3RSxZQUFZLEVBQUUsV0FBVztRQUN6QixXQUFXLEVBQUUsOENBQThDO0tBQzNEO0NBQ0Q7Ozs7OztBQUtELE1BQU0sVUFBVSxhQUFhLENBQUMsTUFBYztJQUMzQyxPQUFPLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksSUFBSSxnQkFBZ0IsQ0FBQztBQUMxRCxDQUFDOzs7Ozs7QUFLRCxNQUFNLFVBQVUsU0FBUyxDQUFDLE1BQWM7SUFDdkMsT0FBTyxNQUFNLElBQUksR0FBRyxJQUFJLE1BQU0sR0FBRyxHQUFHLENBQUM7QUFDdEMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBTVEFUVVNfQ09ERSA9IHtcblx0Q09OVElOVUU6IDEwMCxcblx0U1dJVENISU5HX1BST1RPQ09MUzogMTAxLFxuXHRPSzogMjAwLFxuXHRDUkVBVEVEOiAyMDEsXG5cdEFDQ0VQVEVEOiAyMDIsXG5cdE5PTl9BVVRIT1JJVEFUSVZFX0lORk9STUFUSU9OOiAyMDMsXG5cdE5PX0NPTlRFTlQ6IDIwNCxcblx0UkVTRVRfQ09OVEVOVDogMjA1LFxuXHRQQVJUSUFMX0NPTlRFTlQ6IDIwNixcblx0TVVMVElQTEVfQ0hPSUNFUzogMzAwLFxuXHRNT1ZFRF9QRVJNQU5URU5UTFk6IDMwMSxcblx0Rk9VTkQ6IDMwMixcblx0U0VFX09USEVSOiAzMDMsXG5cdE5PVF9NT0RJRklFRDogMzA0LFxuXHRVU0VfUFJPWFk6IDMwNSxcblx0VEVNUE9SQVJZX1JFRElSRUNUOiAzMDcsXG5cdEJBRF9SRVFVRVNUOiA0MDAsXG5cdFVOQVVUSE9SSVpFRDogNDAxLFxuXHRQQVlNRU5UX1JFUVVJUkVEOiA0MDIsXG5cdEZPUkJJRERFTjogNDAzLFxuXHROT1RfRk9VTkQ6IDQwNCxcblx0TUVUSE9EX05PVF9BTExPV0VEOiA0MDUsXG5cdE5PVF9BQ0NFUFRBQkxFOiA0MDYsXG5cdFBST1hZX0FVVEhFTlRJQ0FUSU9OX1JFUVVJUkVEOiA0MDcsXG5cdFJFUVVFU1RfVElNRU9VVDogNDA4LFxuXHRDT05GTElDVDogNDA5LFxuXHRHT05FOiA0MTAsXG5cdExFTkdUSF9SRVFVSVJFRDogNDExLFxuXHRQUkVDT05ESVRJT05fRkFJTEVEOiA0MTIsXG5cdFBBWUxPQURfVE9fTEFSR0U6IDQxMyxcblx0VVJJX1RPT19MT05HOiA0MTQsXG5cdFVOU1VQUE9SVEVEX01FRElBX1RZUEU6IDQxNSxcblx0UkFOR0VfTk9UX1NBVElTRklBQkxFOiA0MTYsXG5cdEVYUEVDVEFUSU9OX0ZBSUxFRDogNDE3LFxuXHRJTV9BX1RFQVBPVDogNDE4LFxuXHRVUEdSQURFX1JFUVVJUkVEOiA0MjYsXG5cdElOVEVSTkFMX1NFUlZFUl9FUlJPUjogNTAwLFxuXHROT1RfSU1QTEVNRU5URUQ6IDUwMSxcblx0QkFEX0dBVEVXQVk6IDUwMixcblx0U0VSVklDRV9VTkFWQUlMQUJMRTogNTAzLFxuXHRHQVRFV0FZX1RJTUVPVVQ6IDUwNCxcblx0SFRUUF9WRVJTSU9OX05PVF9TVVBQT1JURUQ6IDUwNSxcblx0UFJPQ0VTU0lORzogMTAyLFxuXHRNVUxUSV9TVEFUVVM6IDIwNyxcblx0SU1fVVNFRDogMjI2LFxuXHRQRVJNQU5FTlRfUkVESVJFQ1Q6IDMwOCxcblx0VU5QUk9DRVNTQUJMRV9FTlRSWTogNDIyLFxuXHRMT0NLRUQ6IDQyMyxcblx0RkFJTEVEX0RFUEVOREVOQ1k6IDQyNCxcblx0UFJFQ09ORElUSU9OX1JFUVVJUkVEOiA0MjgsXG5cdFRPT19NQU5ZX1JFUVVFU1RTOiA0MjksXG5cdFJFUVVFU1RfSEVBREVSX0ZJRUxEU19UT09fTEFSR0U6IDQzMSxcblx0VU5BVkFJTEFCTEVfRk9SX0xFR0FMX1JFQVNPTlM6IDQ1MSxcblx0VkFSSUFOVF9BTFNPX05FR09USUFURVM6IDUwNixcblx0SU5TVUZGSUNJRU5UX1NUT1JBR0U6IDUwNyxcblx0TkVUV09SS19BVVRIRU5USUNBVElPTl9SRVFVSVJFRDogNTExXG59O1xuXG4vKnRzbGludDpkaXNhYmxlOnF1b3RlbWFyayBtYXgtbGluZS1sZW5ndGggb25lLWxpbmUgKi9cbmV4cG9ydCBjb25zdCBTVEFUVVNfQ09ERV9JTkZPID0ge1xuXHQnMTAwJzoge1xuXHRcdCdjb2RlJzogMTAwLFxuXHRcdCd0ZXh0JzogJ0NvbnRpbnVlJyxcblx0XHQnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSBpbml0aWFsIHBhcnQgb2YgYSByZXF1ZXN0IGhhcyBiZWVuIHJlY2VpdmVkIGFuZCBoYXMgbm90IHlldCBiZWVuIHJlamVjdGVkIGJ5IHRoZSBzZXJ2ZXIuXFxcIicsXG5cdFx0J3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjIuMScsXG5cdFx0J3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi4yLjEnXG5cdH0sXG5cdCcxMDEnOiB7XG5cdFx0J2NvZGUnOiAxMDEsXG5cdFx0J3RleHQnOiAnU3dpdGNoaW5nIFByb3RvY29scycsXG5cdFx0J2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgc2VydmVyIHVuZGVyc3RhbmRzIGFuZCBpcyB3aWxsaW5nIHRvIGNvbXBseSB3aXRoIHRoZSBjbGllbnRcXCdzIHJlcXVlc3QsIHZpYSB0aGUgVXBncmFkZSBoZWFkZXIgZmllbGQsIGZvciBhIGNoYW5nZSBpbiB0aGUgYXBwbGljYXRpb24gcHJvdG9jb2wgYmVpbmcgdXNlZCBvbiB0aGlzIGNvbm5lY3Rpb24uXFxcIicsXG5cdFx0J3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjIuMicsXG5cdFx0J3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi4yLjInXG5cdH0sXG5cdCcyMDAnOiB7XG5cdFx0J2NvZGUnOiAyMDAsXG5cdFx0J3RleHQnOiAnT0snLFxuXHRcdCdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHJlcXVlc3QgaGFzIHN1Y2NlZWRlZC5cXFwiJyxcblx0XHQnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuMy4xJyxcblx0XHQnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjMuMSdcblx0fSxcblx0JzIwMSc6IHtcblx0XHQnY29kZSc6IDIwMSxcblx0XHQndGV4dCc6ICdDcmVhdGVkJyxcblx0XHQnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSByZXF1ZXN0IGhhcyBiZWVuIGZ1bGZpbGxlZCBhbmQgaGFzIHJlc3VsdGVkIGluIG9uZSBvciBtb3JlIG5ldyByZXNvdXJjZXMgYmVpbmcgY3JlYXRlZC5cXFwiJyxcblx0XHQnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuMy4yJyxcblx0XHQnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjMuMidcblx0fSxcblx0JzIwMic6IHtcblx0XHQnY29kZSc6IDIwMixcblx0XHQndGV4dCc6ICdBY2NlcHRlZCcsXG5cdFx0J2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgcmVxdWVzdCBoYXMgYmVlbiBhY2NlcHRlZCBmb3IgcHJvY2Vzc2luZywgYnV0IHRoZSBwcm9jZXNzaW5nIGhhcyBub3QgYmVlbiBjb21wbGV0ZWQuXFxcIicsXG5cdFx0J3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjMuMycsXG5cdFx0J3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi4zLjMnXG5cdH0sXG5cdCcyMDMnOiB7XG5cdFx0J2NvZGUnOiAyMDMsXG5cdFx0J3RleHQnOiAnTm9uLUF1dGhvcml0YXRpdmUgSW5mb3JtYXRpb24nLFxuXHRcdCdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHJlcXVlc3Qgd2FzIHN1Y2Nlc3NmdWwgYnV0IHRoZSBlbmNsb3NlZCBwYXlsb2FkIGhhcyBiZWVuIG1vZGlmaWVkIGZyb20gdGhhdCBvZiB0aGUgb3JpZ2luIHNlcnZlclxcJ3MgMjAwIChPSykgcmVzcG9uc2UgYnkgYSB0cmFuc2Zvcm1pbmcgcHJveHkuXFxcIicsXG5cdFx0J3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjMuNCcsXG5cdFx0J3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi4zLjQnXG5cdH0sXG5cdCcyMDQnOiB7XG5cdFx0J2NvZGUnOiAyMDQsXG5cdFx0J3RleHQnOiAnTm8gQ29udGVudCcsXG5cdFx0J2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgc2VydmVyIGhhcyBzdWNjZXNzZnVsbHkgZnVsZmlsbGVkIHRoZSByZXF1ZXN0IGFuZCB0aGF0IHRoZXJlIGlzIG5vIGFkZGl0aW9uYWwgY29udGVudCB0byBzZW5kIGluIHRoZSByZXNwb25zZSBwYXlsb2FkIGJvZHkuXFxcIicsXG5cdFx0J3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjMuNScsXG5cdFx0J3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi4zLjUnXG5cdH0sXG5cdCcyMDUnOiB7XG5cdFx0J2NvZGUnOiAyMDUsXG5cdFx0J3RleHQnOiAnUmVzZXQgQ29udGVudCcsXG5cdFx0J2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgc2VydmVyIGhhcyBmdWxmaWxsZWQgdGhlIHJlcXVlc3QgYW5kIGRlc2lyZXMgdGhhdCB0aGUgdXNlciBhZ2VudCByZXNldCB0aGUgXFxcImRvY3VtZW50IHZpZXdcXFwiLCB3aGljaCBjYXVzZWQgdGhlIHJlcXVlc3QgdG8gYmUgc2VudCwgdG8gaXRzIG9yaWdpbmFsIHN0YXRlIGFzIHJlY2VpdmVkIGZyb20gdGhlIG9yaWdpbiBzZXJ2ZXIuXFxcIicsXG5cdFx0J3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjMuNicsXG5cdFx0J3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi4zLjYnXG5cdH0sXG5cdCcyMDYnOiB7XG5cdFx0J2NvZGUnOiAyMDYsXG5cdFx0J3RleHQnOiAnUGFydGlhbCBDb250ZW50Jyxcblx0XHQnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSBzZXJ2ZXIgaXMgc3VjY2Vzc2Z1bGx5IGZ1bGZpbGxpbmcgYSByYW5nZSByZXF1ZXN0IGZvciB0aGUgdGFyZ2V0IHJlc291cmNlIGJ5IHRyYW5zZmVycmluZyBvbmUgb3IgbW9yZSBwYXJ0cyBvZiB0aGUgc2VsZWN0ZWQgcmVwcmVzZW50YXRpb24gdGhhdCBjb3JyZXNwb25kIHRvIHRoZSBzYXRpc2ZpYWJsZSByYW5nZXMgZm91bmQgaW4gdGhlIHJlcXVlc3RzXFwncyBSYW5nZSBoZWFkZXIgZmllbGQuXFxcIicsXG5cdFx0J3NwZWNfdGl0bGUnOiAnUkZDNzIzMyM0LjEnLFxuXHRcdCdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMyNzZWN0aW9uLTQuMSdcblx0fSxcblx0JzMwMCc6IHtcblx0XHQnY29kZSc6IDMwMCxcblx0XHQndGV4dCc6ICdNdWx0aXBsZSBDaG9pY2VzJyxcblx0XHQnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSB0YXJnZXQgcmVzb3VyY2UgaGFzIG1vcmUgdGhhbiBvbmUgcmVwcmVzZW50YXRpb24sIGVhY2ggd2l0aCBpdHMgb3duIG1vcmUgc3BlY2lmaWMgaWRlbnRpZmllciwgYW5kIGluZm9ybWF0aW9uIGFib3V0IHRoZSBhbHRlcm5hdGl2ZXMgaXMgYmVpbmcgcHJvdmlkZWQgc28gdGhhdCB0aGUgdXNlciAob3IgdXNlciBhZ2VudCkgY2FuIHNlbGVjdCBhIHByZWZlcnJlZCByZXByZXNlbnRhdGlvbiBieSByZWRpcmVjdGluZyBpdHMgcmVxdWVzdCB0byBvbmUgb3IgbW9yZSBvZiB0aG9zZSBpZGVudGlmaWVycy5cXFwiJyxcblx0XHQnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuNC4xJyxcblx0XHQnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjQuMSdcblx0fSxcblx0JzMwMSc6IHtcblx0XHQnY29kZSc6IDMwMSxcblx0XHQndGV4dCc6ICdNb3ZlZCBQZXJtYW5lbnRseScsXG5cdFx0J2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgdGFyZ2V0IHJlc291cmNlIGhhcyBiZWVuIGFzc2lnbmVkIGEgbmV3IHBlcm1hbmVudCBVUkkgYW5kIGFueSBmdXR1cmUgcmVmZXJlbmNlcyB0byB0aGlzIHJlc291cmNlIG91Z2h0IHRvIHVzZSBvbmUgb2YgdGhlIGVuY2xvc2VkIFVSSXMuXFxcIicsXG5cdFx0J3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjQuMicsXG5cdFx0J3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi40LjInXG5cdH0sXG5cdCczMDInOiB7XG5cdFx0J2NvZGUnOiAzMDIsXG5cdFx0J3RleHQnOiAnRm91bmQnLFxuXHRcdCdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHRhcmdldCByZXNvdXJjZSByZXNpZGVzIHRlbXBvcmFyaWx5IHVuZGVyIGEgZGlmZmVyZW50IFVSSS5cXFwiJyxcblx0XHQnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuNC4zJyxcblx0XHQnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjQuMydcblx0fSxcblx0JzMwMyc6IHtcblx0XHQnY29kZSc6IDMwMyxcblx0XHQndGV4dCc6ICdTZWUgT3RoZXInLFxuXHRcdCdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHNlcnZlciBpcyByZWRpcmVjdGluZyB0aGUgdXNlciBhZ2VudCB0byBhIGRpZmZlcmVudCByZXNvdXJjZSwgYXMgaW5kaWNhdGVkIGJ5IGEgVVJJIGluIHRoZSBMb2NhdGlvbiBoZWFkZXIgZmllbGQsIHRoYXQgaXMgaW50ZW5kZWQgdG8gcHJvdmlkZSBhbiBpbmRpcmVjdCByZXNwb25zZSB0byB0aGUgb3JpZ2luYWwgcmVxdWVzdC5cXFwiJyxcblx0XHQnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuNC40Jyxcblx0XHQnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjQuNCdcblx0fSxcblx0JzMwNCc6IHtcblx0XHQnY29kZSc6IDMwNCxcblx0XHQndGV4dCc6ICdOb3QgTW9kaWZpZWQnLFxuXHRcdCdkZXNjcmlwdGlvbic6ICdcXFwiQSBjb25kaXRpb25hbCBHRVQgcmVxdWVzdCBoYXMgYmVlbiByZWNlaXZlZCBhbmQgd291bGQgaGF2ZSByZXN1bHRlZCBpbiBhIDIwMCAoT0spIHJlc3BvbnNlIGlmIGl0IHdlcmUgbm90IGZvciB0aGUgZmFjdCB0aGF0IHRoZSBjb25kaXRpb24gaGFzIGV2YWx1YXRlZCB0byBmYWxzZS5cXFwiJyxcblx0XHQnc3BlY190aXRsZSc6ICdSRkM3MjMyIzQuMScsXG5cdFx0J3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMyI3NlY3Rpb24tNC4xJ1xuXHR9LFxuXHQnMzA1Jzoge1xuXHRcdCdjb2RlJzogMzA1LFxuXHRcdCd0ZXh0JzogJ1VzZSBQcm94eScsXG5cdFx0J2Rlc2NyaXB0aW9uJzogJypkZXByZWNhdGVkKicsXG5cdFx0J3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjQuNScsXG5cdFx0J3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi40LjUnXG5cdH0sXG5cdCczMDcnOiB7XG5cdFx0J2NvZGUnOiAzMDcsXG5cdFx0J3RleHQnOiAnVGVtcG9yYXJ5IFJlZGlyZWN0Jyxcblx0XHQnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSB0YXJnZXQgcmVzb3VyY2UgcmVzaWRlcyB0ZW1wb3JhcmlseSB1bmRlciBhIGRpZmZlcmVudCBVUkkgYW5kIHRoZSB1c2VyIGFnZW50IE1VU1QgTk9UIGNoYW5nZSB0aGUgcmVxdWVzdCBtZXRob2QgaWYgaXQgcGVyZm9ybXMgYW4gYXV0b21hdGljIHJlZGlyZWN0aW9uIHRvIHRoYXQgVVJJLlxcXCInLFxuXHRcdCdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi40LjcnLFxuXHRcdCdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNC43J1xuXHR9LFxuXHQnNDAwJzoge1xuXHRcdCdjb2RlJzogNDAwLFxuXHRcdCd0ZXh0JzogJ0JhZCBSZXF1ZXN0Jyxcblx0XHQnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSBzZXJ2ZXIgY2Fubm90IG9yIHdpbGwgbm90IHByb2Nlc3MgdGhlIHJlcXVlc3QgYmVjYXVzZSB0aGUgcmVjZWl2ZWQgc3ludGF4IGlzIGludmFsaWQsIG5vbnNlbnNpY2FsLCBvciBleGNlZWRzIHNvbWUgbGltaXRhdGlvbiBvbiB3aGF0IHRoZSBzZXJ2ZXIgaXMgd2lsbGluZyB0byBwcm9jZXNzLlxcXCInLFxuXHRcdCdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi41LjEnLFxuXHRcdCdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNS4xJ1xuXHR9LFxuXHQnNDAxJzoge1xuXHRcdCdjb2RlJzogNDAxLFxuXHRcdCd0ZXh0JzogJ1VuYXV0aG9yaXplZCcsXG5cdFx0J2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgcmVxdWVzdCBoYXMgbm90IGJlZW4gYXBwbGllZCBiZWNhdXNlIGl0IGxhY2tzIHZhbGlkIGF1dGhlbnRpY2F0aW9uIGNyZWRlbnRpYWxzIGZvciB0aGUgdGFyZ2V0IHJlc291cmNlLlxcXCInLFxuXHRcdCdzcGVjX3RpdGxlJzogJ1JGQzcyMzUjNi4zLjEnLFxuXHRcdCdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzNSNzZWN0aW9uLTMuMSdcblx0fSxcblx0JzQwMic6IHtcblx0XHQnY29kZSc6IDQwMixcblx0XHQndGV4dCc6ICdQYXltZW50IFJlcXVpcmVkJyxcblx0XHQnZGVzY3JpcHRpb24nOiAnKnJlc2VydmVkKicsXG5cdFx0J3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjUuMicsXG5cdFx0J3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi41LjInXG5cdH0sXG5cdCc0MDMnOiB7XG5cdFx0J2NvZGUnOiA0MDMsXG5cdFx0J3RleHQnOiAnRm9yYmlkZGVuJyxcblx0XHQnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSBzZXJ2ZXIgdW5kZXJzdG9vZCB0aGUgcmVxdWVzdCBidXQgcmVmdXNlcyB0byBhdXRob3JpemUgaXQuXFxcIicsXG5cdFx0J3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjUuMycsXG5cdFx0J3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi41LjMnXG5cdH0sXG5cdCc0MDQnOiB7XG5cdFx0J2NvZGUnOiA0MDQsXG5cdFx0J3RleHQnOiAnTm90IEZvdW5kJyxcblx0XHQnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSBvcmlnaW4gc2VydmVyIGRpZCBub3QgZmluZCBhIGN1cnJlbnQgcmVwcmVzZW50YXRpb24gZm9yIHRoZSB0YXJnZXQgcmVzb3VyY2Ugb3IgaXMgbm90IHdpbGxpbmcgdG8gZGlzY2xvc2UgdGhhdCBvbmUgZXhpc3RzLlxcXCInLFxuXHRcdCdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi41LjQnLFxuXHRcdCdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNS40J1xuXHR9LFxuXHQnNDA1Jzoge1xuXHRcdCdjb2RlJzogNDA1LFxuXHRcdCd0ZXh0JzogJ01ldGhvZCBOb3QgQWxsb3dlZCcsXG5cdFx0J2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgbWV0aG9kIHNwZWNpZmllZCBpbiB0aGUgcmVxdWVzdC1saW5lIGlzIGtub3duIGJ5IHRoZSBvcmlnaW4gc2VydmVyIGJ1dCBub3Qgc3VwcG9ydGVkIGJ5IHRoZSB0YXJnZXQgcmVzb3VyY2UuXFxcIicsXG5cdFx0J3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjUuNScsXG5cdFx0J3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi41LjUnXG5cdH0sXG5cdCc0MDYnOiB7XG5cdFx0J2NvZGUnOiA0MDYsXG5cdFx0J3RleHQnOiAnTm90IEFjY2VwdGFibGUnLFxuXHRcdCdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHRhcmdldCByZXNvdXJjZSBkb2VzIG5vdCBoYXZlIGEgY3VycmVudCByZXByZXNlbnRhdGlvbiB0aGF0IHdvdWxkIGJlIGFjY2VwdGFibGUgdG8gdGhlIHVzZXIgYWdlbnQsIGFjY29yZGluZyB0byB0aGUgcHJvYWN0aXZlIG5lZ290aWF0aW9uIGhlYWRlciBmaWVsZHMgcmVjZWl2ZWQgaW4gdGhlIHJlcXVlc3QsIGFuZCB0aGUgc2VydmVyIGlzIHVud2lsbGluZyB0byBzdXBwbHkgYSBkZWZhdWx0IHJlcHJlc2VudGF0aW9uLlxcXCInLFxuXHRcdCdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi41LjYnLFxuXHRcdCdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNS42J1xuXHR9LFxuXHQnNDA3Jzoge1xuXHRcdCdjb2RlJzogNDA3LFxuXHRcdCd0ZXh0JzogJ1Byb3h5IEF1dGhlbnRpY2F0aW9uIFJlcXVpcmVkJyxcblx0XHQnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSBjbGllbnQgbmVlZHMgdG8gYXV0aGVudGljYXRlIGl0c2VsZiBpbiBvcmRlciB0byB1c2UgYSBwcm94eS5cXFwiJyxcblx0XHQnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuMy4yJyxcblx0XHQnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjMuMidcblx0fSxcblx0JzQwOCc6IHtcblx0XHQnY29kZSc6IDQwOCxcblx0XHQndGV4dCc6ICdSZXF1ZXN0IFRpbWVvdXQnLFxuXHRcdCdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHNlcnZlciBkaWQgbm90IHJlY2VpdmUgYSBjb21wbGV0ZSByZXF1ZXN0IG1lc3NhZ2Ugd2l0aGluIHRoZSB0aW1lIHRoYXQgaXQgd2FzIHByZXBhcmVkIHRvIHdhaXQuXFxcIicsXG5cdFx0J3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjUuNycsXG5cdFx0J3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi41LjcnXG5cdH0sXG5cdCc0MDknOiB7XG5cdFx0J2NvZGUnOiA0MDksXG5cdFx0J3RleHQnOiAnQ29uZmxpY3QnLFxuXHRcdCdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHJlcXVlc3QgY291bGQgbm90IGJlIGNvbXBsZXRlZCBkdWUgdG8gYSBjb25mbGljdCB3aXRoIHRoZSBjdXJyZW50IHN0YXRlIG9mIHRoZSByZXNvdXJjZS5cXFwiJyxcblx0XHQnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuNS44Jyxcblx0XHQnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjUuOCdcblx0fSxcblx0JzQxMCc6IHtcblx0XHQnY29kZSc6IDQxMCxcblx0XHQndGV4dCc6ICdHb25lJyxcblx0XHQnZGVzY3JpcHRpb24nOiAnXFxcIkFjY2VzcyB0byB0aGUgdGFyZ2V0IHJlc291cmNlIGlzIG5vIGxvbmdlciBhdmFpbGFibGUgYXQgdGhlIG9yaWdpbiBzZXJ2ZXIgYW5kIHRoYXQgdGhpcyBjb25kaXRpb24gaXMgbGlrZWx5IHRvIGJlIHBlcm1hbmVudC5cXFwiJyxcblx0XHQnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuNS45Jyxcblx0XHQnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjUuOSdcblx0fSxcblx0JzQxMSc6IHtcblx0XHQnY29kZSc6IDQxMSxcblx0XHQndGV4dCc6ICdMZW5ndGggUmVxdWlyZWQnLFxuXHRcdCdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHNlcnZlciByZWZ1c2VzIHRvIGFjY2VwdCB0aGUgcmVxdWVzdCB3aXRob3V0IGEgZGVmaW5lZCBDb250ZW50LUxlbmd0aC5cXFwiJyxcblx0XHQnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuNS4xMCcsXG5cdFx0J3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi41LjEwJ1xuXHR9LFxuXHQnNDEyJzoge1xuXHRcdCdjb2RlJzogNDEyLFxuXHRcdCd0ZXh0JzogJ1ByZWNvbmRpdGlvbiBGYWlsZWQnLFxuXHRcdCdkZXNjcmlwdGlvbic6ICdcXFwiT25lIG9yIG1vcmUgcHJlY29uZGl0aW9ucyBnaXZlbiBpbiB0aGUgcmVxdWVzdCBoZWFkZXIgZmllbGRzIGV2YWx1YXRlZCB0byBmYWxzZSB3aGVuIHRlc3RlZCBvbiB0aGUgc2VydmVyLlxcXCInLFxuXHRcdCdzcGVjX3RpdGxlJzogJ1JGQzcyMzIjNC4yJyxcblx0XHQnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzIjc2VjdGlvbi00LjInXG5cdH0sXG5cdCc0MTMnOiB7XG5cdFx0J2NvZGUnOiA0MTMsXG5cdFx0J3RleHQnOiAnUGF5bG9hZCBUb28gTGFyZ2UnLFxuXHRcdCdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHNlcnZlciBpcyByZWZ1c2luZyB0byBwcm9jZXNzIGEgcmVxdWVzdCBiZWNhdXNlIHRoZSByZXF1ZXN0IHBheWxvYWQgaXMgbGFyZ2VyIHRoYW4gdGhlIHNlcnZlciBpcyB3aWxsaW5nIG9yIGFibGUgdG8gcHJvY2Vzcy5cXFwiJyxcblx0XHQnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuNS4xMScsXG5cdFx0J3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi41LjExJ1xuXHR9LFxuXHQnNDE0Jzoge1xuXHRcdCdjb2RlJzogNDE0LFxuXHRcdCd0ZXh0JzogJ1VSSSBUb28gTG9uZycsXG5cdFx0J2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgc2VydmVyIGlzIHJlZnVzaW5nIHRvIHNlcnZpY2UgdGhlIHJlcXVlc3QgYmVjYXVzZSB0aGUgcmVxdWVzdC10YXJnZXQgaXMgbG9uZ2VyIHRoYW4gdGhlIHNlcnZlciBpcyB3aWxsaW5nIHRvIGludGVycHJldC5cXFwiJyxcblx0XHQnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuNS4xMicsXG5cdFx0J3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi41LjEyJ1xuXHR9LFxuXHQnNDE1Jzoge1xuXHRcdCdjb2RlJzogNDE1LFxuXHRcdCd0ZXh0JzogJ1Vuc3VwcG9ydGVkIE1lZGlhIFR5cGUnLFxuXHRcdCdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIG9yaWdpbiBzZXJ2ZXIgaXMgcmVmdXNpbmcgdG8gc2VydmljZSB0aGUgcmVxdWVzdCBiZWNhdXNlIHRoZSBwYXlsb2FkIGlzIGluIGEgZm9ybWF0IG5vdCBzdXBwb3J0ZWQgYnkgdGhlIHRhcmdldCByZXNvdXJjZSBmb3IgdGhpcyBtZXRob2QuXFxcIicsXG5cdFx0J3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjUuMTMnLFxuXHRcdCdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNS4xMydcblx0fSxcblx0JzQxNic6IHtcblx0XHQnY29kZSc6IDQxNixcblx0XHQndGV4dCc6ICdSYW5nZSBOb3QgU2F0aXNmaWFibGUnLFxuXHRcdCdkZXNjcmlwdGlvbic6ICdcXFwiTm9uZSBvZiB0aGUgcmFuZ2VzIGluIHRoZSByZXF1ZXN0XFwncyBSYW5nZSBoZWFkZXIgZmllbGQgb3ZlcmxhcCB0aGUgY3VycmVudCBleHRlbnQgb2YgdGhlIHNlbGVjdGVkIHJlc291cmNlIG9yIHRoYXQgdGhlIHNldCBvZiByYW5nZXMgcmVxdWVzdGVkIGhhcyBiZWVuIHJlamVjdGVkIGR1ZSB0byBpbnZhbGlkIHJhbmdlcyBvciBhbiBleGNlc3NpdmUgcmVxdWVzdCBvZiBzbWFsbCBvciBvdmVybGFwcGluZyByYW5nZXMuXFxcIicsXG5cdFx0J3NwZWNfdGl0bGUnOiAnUkZDNzIzMyM0LjQnLFxuXHRcdCdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMyNzZWN0aW9uLTQuNCdcblx0fSxcblx0JzQxNyc6IHtcblx0XHQnY29kZSc6IDQxNyxcblx0XHQndGV4dCc6ICdFeHBlY3RhdGlvbiBGYWlsZWQnLFxuXHRcdCdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIGV4cGVjdGF0aW9uIGdpdmVuIGluIHRoZSByZXF1ZXN0XFwncyBFeHBlY3QgaGVhZGVyIGZpZWxkIGNvdWxkIG5vdCBiZSBtZXQgYnkgYXQgbGVhc3Qgb25lIG9mIHRoZSBpbmJvdW5kIHNlcnZlcnMuXFxcIicsXG5cdFx0J3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjUuMTQnLFxuXHRcdCdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNS4xNCdcblx0fSxcblx0JzQxOCc6IHtcblx0XHQnY29kZSc6IDQxOCxcblx0XHQndGV4dCc6ICdJXFwnbSBhIHRlYXBvdCcsXG5cdFx0J2Rlc2NyaXB0aW9uJzogJ1xcXCIxOTg4IEFwcmlsIEZvb2xzIEpva2UuIFJldHVybmVkIGJ5IHRlYSBwb3RzIHJlcXVlc3RlZCB0byBicmV3IGNvZmZlZS5cXFwiJyxcblx0XHQnc3BlY190aXRsZSc6ICdSRkMgMjMyNCcsXG5cdFx0J3NwZWNfaHJlZic6ICdodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjMjMyNCdcblx0fSxcblx0JzQyNic6IHtcblx0XHQnY29kZSc6IDQyNixcblx0XHQndGV4dCc6ICdVcGdyYWRlIFJlcXVpcmVkJyxcblx0XHQnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSBzZXJ2ZXIgcmVmdXNlcyB0byBwZXJmb3JtIHRoZSByZXF1ZXN0IHVzaW5nIHRoZSBjdXJyZW50IHByb3RvY29sIGJ1dCBtaWdodCBiZSB3aWxsaW5nIHRvIGRvIHNvIGFmdGVyIHRoZSBjbGllbnQgdXBncmFkZXMgdG8gYSBkaWZmZXJlbnQgcHJvdG9jb2wuXFxcIicsXG5cdFx0J3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjUuMTUnLFxuXHRcdCdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNS4xNSdcblx0fSxcblx0JzUwMCc6IHtcblx0XHQnY29kZSc6IDUwMCxcblx0XHQndGV4dCc6ICdJbnRlcm5hbCBTZXJ2ZXIgRXJyb3InLFxuXHRcdCdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHNlcnZlciBlbmNvdW50ZXJlZCBhbiB1bmV4cGVjdGVkIGNvbmRpdGlvbiB0aGF0IHByZXZlbnRlZCBpdCBmcm9tIGZ1bGZpbGxpbmcgdGhlIHJlcXVlc3QuXFxcIicsXG5cdFx0J3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjYuMScsXG5cdFx0J3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi42LjEnXG5cdH0sXG5cdCc1MDEnOiB7XG5cdFx0J2NvZGUnOiA1MDEsXG5cdFx0J3RleHQnOiAnTm90IEltcGxlbWVudGVkJyxcblx0XHQnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSBzZXJ2ZXIgZG9lcyBub3Qgc3VwcG9ydCB0aGUgZnVuY3Rpb25hbGl0eSByZXF1aXJlZCB0byBmdWxmaWxsIHRoZSByZXF1ZXN0LlxcXCInLFxuXHRcdCdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi42LjInLFxuXHRcdCdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNi4yJ1xuXHR9LFxuXHQnNTAyJzoge1xuXHRcdCdjb2RlJzogNTAyLFxuXHRcdCd0ZXh0JzogJ0JhZCBHYXRld2F5Jyxcblx0XHQnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSBzZXJ2ZXIsIHdoaWxlIGFjdGluZyBhcyBhIGdhdGV3YXkgb3IgcHJveHksIHJlY2VpdmVkIGFuIGludmFsaWQgcmVzcG9uc2UgZnJvbSBhbiBpbmJvdW5kIHNlcnZlciBpdCBhY2Nlc3NlZCB3aGlsZSBhdHRlbXB0aW5nIHRvIGZ1bGZpbGwgdGhlIHJlcXVlc3QuXFxcIicsXG5cdFx0J3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjYuMycsXG5cdFx0J3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi42LjMnXG5cdH0sXG5cdCc1MDMnOiB7XG5cdFx0J2NvZGUnOiA1MDMsXG5cdFx0J3RleHQnOiAnU2VydmljZSBVbmF2YWlsYWJsZScsXG5cdFx0J2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgc2VydmVyIGlzIGN1cnJlbnRseSB1bmFibGUgdG8gaGFuZGxlIHRoZSByZXF1ZXN0IGR1ZSB0byBhIHRlbXBvcmFyeSBvdmVybG9hZCBvciBzY2hlZHVsZWQgbWFpbnRlbmFuY2UsIHdoaWNoIHdpbGwgbGlrZWx5IGJlIGFsbGV2aWF0ZWQgYWZ0ZXIgc29tZSBkZWxheS5cXFwiJyxcblx0XHQnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuNi40Jyxcblx0XHQnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjYuNCdcblx0fSxcblx0JzUwNCc6IHtcblx0XHQnY29kZSc6IDUwNCxcblx0XHQndGV4dCc6ICdHYXRld2F5IFRpbWUtb3V0Jyxcblx0XHQnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSBzZXJ2ZXIsIHdoaWxlIGFjdGluZyBhcyBhIGdhdGV3YXkgb3IgcHJveHksIGRpZCBub3QgcmVjZWl2ZSBhIHRpbWVseSByZXNwb25zZSBmcm9tIGFuIHVwc3RyZWFtIHNlcnZlciBpdCBuZWVkZWQgdG8gYWNjZXNzIGluIG9yZGVyIHRvIGNvbXBsZXRlIHRoZSByZXF1ZXN0LlxcXCInLFxuXHRcdCdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi42LjUnLFxuXHRcdCdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNi41J1xuXHR9LFxuXHQnNTA1Jzoge1xuXHRcdCdjb2RlJzogNTA1LFxuXHRcdCd0ZXh0JzogJ0hUVFAgVmVyc2lvbiBOb3QgU3VwcG9ydGVkJyxcblx0XHQnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSBzZXJ2ZXIgZG9lcyBub3Qgc3VwcG9ydCwgb3IgcmVmdXNlcyB0byBzdXBwb3J0LCB0aGUgcHJvdG9jb2wgdmVyc2lvbiB0aGF0IHdhcyB1c2VkIGluIHRoZSByZXF1ZXN0IG1lc3NhZ2UuXFxcIicsXG5cdFx0J3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjYuNicsXG5cdFx0J3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi42LjYnXG5cdH0sXG5cdCcxMDInOiB7XG5cdFx0J2NvZGUnOiAxMDIsXG5cdFx0J3RleHQnOiAnUHJvY2Vzc2luZycsXG5cdFx0J2Rlc2NyaXB0aW9uJzogJ1xcXCJBbiBpbnRlcmltIHJlc3BvbnNlIHRvIGluZm9ybSB0aGUgY2xpZW50IHRoYXQgdGhlIHNlcnZlciBoYXMgYWNjZXB0ZWQgdGhlIGNvbXBsZXRlIHJlcXVlc3QsIGJ1dCBoYXMgbm90IHlldCBjb21wbGV0ZWQgaXQuXFxcIicsXG5cdFx0J3NwZWNfdGl0bGUnOiAnUkZDNTIxOCMxMC4xJyxcblx0XHQnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzI1MTgjc2VjdGlvbi0xMC4xJ1xuXHR9LFxuXHQnMjA3Jzoge1xuXHRcdCdjb2RlJzogMjA3LFxuXHRcdCd0ZXh0JzogJ011bHRpLVN0YXR1cycsXG5cdFx0J2Rlc2NyaXB0aW9uJzogJ1xcXCJTdGF0dXMgZm9yIG11bHRpcGxlIGluZGVwZW5kZW50IG9wZXJhdGlvbnMuXFxcIicsXG5cdFx0J3NwZWNfdGl0bGUnOiAnUkZDNTIxOCMxMC4yJyxcblx0XHQnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzI1MTgjc2VjdGlvbi0xMC4yJ1xuXHR9LFxuXHQnMjI2Jzoge1xuXHRcdCdjb2RlJzogMjI2LFxuXHRcdCd0ZXh0JzogJ0lNIFVzZWQnLFxuXHRcdCdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHNlcnZlciBoYXMgZnVsZmlsbGVkIGEgR0VUIHJlcXVlc3QgZm9yIHRoZSByZXNvdXJjZSwgYW5kIHRoZSByZXNwb25zZSBpcyBhIHJlcHJlc2VudGF0aW9uIG9mIHRoZSByZXN1bHQgb2Ygb25lIG9yIG1vcmUgaW5zdGFuY2UtbWFuaXB1bGF0aW9ucyBhcHBsaWVkIHRvIHRoZSBjdXJyZW50IGluc3RhbmNlLlxcXCInLFxuXHRcdCdzcGVjX3RpdGxlJzogJ1JGQzMyMjkjMTAuNC4xJyxcblx0XHQnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzMyMjkjc2VjdGlvbi0xMC40LjEnXG5cdH0sXG5cdCczMDgnOiB7XG5cdFx0J2NvZGUnOiAzMDgsXG5cdFx0J3RleHQnOiAnUGVybWFuZW50IFJlZGlyZWN0Jyxcblx0XHQnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSB0YXJnZXQgcmVzb3VyY2UgaGFzIGJlZW4gYXNzaWduZWQgYSBuZXcgcGVybWFuZW50IFVSSSBhbmQgYW55IGZ1dHVyZSByZWZlcmVuY2VzIHRvIHRoaXMgcmVzb3VyY2UgU0hPVUxEIHVzZSBvbmUgb2YgdGhlIHJldHVybmVkIFVSSXMuIFsuLi5dIFRoaXMgc3RhdHVzIGNvZGUgaXMgc2ltaWxhciB0byAzMDEgTW92ZWQgUGVybWFuZW50bHkgKFNlY3Rpb24gNy4zLjIgb2YgcmZjNzIzMSksIGV4Y2VwdCB0aGF0IGl0IGRvZXMgbm90IGFsbG93IHJld3JpdGluZyB0aGUgcmVxdWVzdCBtZXRob2QgZnJvbSBQT1NUIHRvIEdFVC5cXFwiJyxcblx0XHQnc3BlY190aXRsZSc6ICdSRkM3MjM4Jyxcblx0XHQnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzgnXG5cdH0sXG5cdCc0MjInOiB7XG5cdFx0J2NvZGUnOiA0MjIsXG5cdFx0J3RleHQnOiAnVW5wcm9jZXNzYWJsZSBFbnRpdHknLFxuXHRcdCdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHNlcnZlciB1bmRlcnN0YW5kcyB0aGUgY29udGVudCB0eXBlIG9mIHRoZSByZXF1ZXN0IGVudGl0eSAoaGVuY2UgYSA0MTUoVW5zdXBwb3J0ZWQgTWVkaWEgVHlwZSkgc3RhdHVzIGNvZGUgaXMgaW5hcHByb3ByaWF0ZSksIGFuZCB0aGUgc3ludGF4IG9mIHRoZSByZXF1ZXN0IGVudGl0eSBpcyBjb3JyZWN0ICh0aHVzIGEgNDAwIChCYWQgUmVxdWVzdCkgc3RhdHVzIGNvZGUgaXMgaW5hcHByb3ByaWF0ZSkgYnV0IHdhcyB1bmFibGUgdG8gcHJvY2VzcyB0aGUgY29udGFpbmVkIGluc3RydWN0aW9ucy5cXFwiJyxcblx0XHQnc3BlY190aXRsZSc6ICdSRkM1MjE4IzEwLjMnLFxuXHRcdCdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjMjUxOCNzZWN0aW9uLTEwLjMnXG5cdH0sXG5cdCc0MjMnOiB7XG5cdFx0J2NvZGUnOiA0MjMsXG5cdFx0J3RleHQnOiAnTG9ja2VkJyxcblx0XHQnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSBzb3VyY2Ugb3IgZGVzdGluYXRpb24gcmVzb3VyY2Ugb2YgYSBtZXRob2QgaXMgbG9ja2VkLlxcXCInLFxuXHRcdCdzcGVjX3RpdGxlJzogJ1JGQzUyMTgjMTAuNCcsXG5cdFx0J3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMyNTE4I3NlY3Rpb24tMTAuNCdcblx0fSxcblx0JzQyNCc6IHtcblx0XHQnY29kZSc6IDQyNCxcblx0XHQndGV4dCc6ICdGYWlsZWQgRGVwZW5kZW5jeScsXG5cdFx0J2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgbWV0aG9kIGNvdWxkIG5vdCBiZSBwZXJmb3JtZWQgb24gdGhlIHJlc291cmNlIGJlY2F1c2UgdGhlIHJlcXVlc3RlZCBhY3Rpb24gZGVwZW5kZWQgb24gYW5vdGhlciBhY3Rpb24gYW5kIHRoYXQgYWN0aW9uIGZhaWxlZC5cXFwiJyxcblx0XHQnc3BlY190aXRsZSc6ICdSRkM1MjE4IzEwLjUnLFxuXHRcdCdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjMjUxOCNzZWN0aW9uLTEwLjUnXG5cdH0sXG5cdCc0MjgnOiB7XG5cdFx0J2NvZGUnOiA0MjgsXG5cdFx0J3RleHQnOiAnUHJlY29uZGl0aW9uIFJlcXVpcmVkJyxcblx0XHQnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSBvcmlnaW4gc2VydmVyIHJlcXVpcmVzIHRoZSByZXF1ZXN0IHRvIGJlIGNvbmRpdGlvbmFsLlxcXCInLFxuXHRcdCdzcGVjX3RpdGxlJzogJ1JGQzY1ODUjMycsXG5cdFx0J3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM2NTg1I3NlY3Rpb24tMydcblx0fSxcblx0JzQyOSc6IHtcblx0XHQnY29kZSc6IDQyOSxcblx0XHQndGV4dCc6ICdUb28gTWFueSBSZXF1ZXN0cycsXG5cdFx0J2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgdXNlciBoYXMgc2VudCB0b28gbWFueSByZXF1ZXN0cyBpbiBhIGdpdmVuIGFtb3VudCBvZiB0aW1lIChcXFwicmF0ZSBsaW1pdGluZ1xcXCIpLlxcXCInLFxuXHRcdCdzcGVjX3RpdGxlJzogJ1JGQzY1ODUjNCcsXG5cdFx0J3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM2NTg1I3NlY3Rpb24tNCdcblx0fSxcblx0JzQzMSc6IHtcblx0XHQnY29kZSc6IDQzMSxcblx0XHQndGV4dCc6ICdSZXF1ZXN0IEhlYWRlciBGaWVsZHMgVG9vIExhcmdlJyxcblx0XHQnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSBzZXJ2ZXIgaXMgdW53aWxsaW5nIHRvIHByb2Nlc3MgdGhlIHJlcXVlc3QgYmVjYXVzZSBpdHMgaGVhZGVyIGZpZWxkcyBhcmUgdG9vIGxhcmdlLlxcXCInLFxuXHRcdCdzcGVjX3RpdGxlJzogJ1JGQzY1ODUjNScsXG5cdFx0J3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM2NTg1I3NlY3Rpb24tNSdcblx0fSxcblx0JzQ1MSc6IHtcblx0XHQnY29kZSc6IDQ1MSxcblx0XHQndGV4dCc6ICdVbmF2YWlsYWJsZSBGb3IgTGVnYWwgUmVhc29ucycsXG5cdFx0J2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgc2VydmVyIGlzIGRlbnlpbmcgYWNjZXNzIHRvIHRoZSByZXNvdXJjZSBpbiByZXNwb25zZSB0byBhIGxlZ2FsIGRlbWFuZC5cXFwiJyxcblx0XHQnc3BlY190aXRsZSc6ICdkcmFmdC1pZXRmLWh0dHBiaXMtbGVnYWxseS1yZXN0cmljdGVkLXN0YXR1cycsXG5cdFx0J3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9kcmFmdC1pZXRmLWh0dHBiaXMtbGVnYWxseS1yZXN0cmljdGVkLXN0YXR1cydcblx0fSxcblx0JzUwNic6IHtcblx0XHQnY29kZSc6IDUwNixcblx0XHQndGV4dCc6ICdWYXJpYW50IEFsc28gTmVnb3RpYXRlcycsXG5cdFx0J2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgc2VydmVyIGhhcyBhbiBpbnRlcm5hbCBjb25maWd1cmF0aW9uIGVycm9yOiB0aGUgY2hvc2VuIHZhcmlhbnQgcmVzb3VyY2UgaXMgY29uZmlndXJlZCB0byBlbmdhZ2UgaW4gdHJhbnNwYXJlbnQgY29udGVudCBuZWdvdGlhdGlvbiBpdHNlbGYsIGFuZCBpcyB0aGVyZWZvcmUgbm90IGEgcHJvcGVyIGVuZCBwb2ludCBpbiB0aGUgbmVnb3RpYXRpb24gcHJvY2Vzcy5cXFwiJyxcblx0XHQnc3BlY190aXRsZSc6ICdSRkMyMjk1IzguMScsXG5cdFx0J3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMyMjk1I3NlY3Rpb24tOC4xJ1xuXHR9LFxuXHQnNTA3Jzoge1xuXHRcdCdjb2RlJzogNTA3LFxuXHRcdCd0ZXh0JzogJ0luc3VmZmljaWVudCBTdG9yYWdlJyxcblx0XHQnZGVzY3JpcHRpb24nOiAnXFxUaGUgbWV0aG9kIGNvdWxkIG5vdCBiZSBwZXJmb3JtZWQgb24gdGhlIHJlc291cmNlIGJlY2F1c2UgdGhlIHNlcnZlciBpcyB1bmFibGUgdG8gc3RvcmUgdGhlIHJlcHJlc2VudGF0aW9uIG5lZWRlZCB0byBzdWNjZXNzZnVsbHkgY29tcGxldGUgdGhlIHJlcXVlc3QuXFxcIicsXG5cdFx0J3NwZWNfdGl0bGUnOiAnUkZDNTIxOCMxMC42Jyxcblx0XHQnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzI1MTgjc2VjdGlvbi0xMC42J1xuXHR9LFxuXHQnNTExJzoge1xuXHRcdCdjb2RlJzogNTExLFxuXHRcdCd0ZXh0JzogJ05ldHdvcmsgQXV0aGVudGljYXRpb24gUmVxdWlyZWQnLFxuXHRcdCdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIGNsaWVudCBuZWVkcyB0byBhdXRoZW50aWNhdGUgdG8gZ2FpbiBuZXR3b3JrIGFjY2Vzcy5cXFwiJyxcblx0XHQnc3BlY190aXRsZSc6ICdSRkM2NTg1IzYnLFxuXHRcdCdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNjU4NSNzZWN0aW9uLTYnXG5cdH1cbn07XG5cbi8qKlxuICogZ2V0IHRoZSBzdGF0dXMgdGV4dCBmcm9tIFN0YXR1c0NvZGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFN0YXR1c1RleHQoc3RhdHVzOiBudW1iZXIpIHtcblx0cmV0dXJuIFNUQVRVU19DT0RFX0lORk9bc3RhdHVzXS50ZXh0IHx8ICdVbmtub3duIFN0YXR1cyc7XG59XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSB0aGUgSHR0cCBTdGF0dXMgQ29kZSBpcyAyMDAtMjk5IChzdWNjZXNzKVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNTdWNjZXNzKHN0YXR1czogbnVtYmVyKTogYm9vbGVhbiB7XG5cdHJldHVybiBzdGF0dXMgPj0gMjAwICYmIHN0YXR1cyA8IDMwMDtcbn1cbiJdfQ==