/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export const STATUS_CODE = {
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
export const STATUS_CODE_INFO = {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdHVzLWNvZGVzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvZGF0YS8iLCJzb3VyY2VzIjpbImxpYi9tZW1vcnkvc3RhdHVzLWNvZGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsTUFBTSxPQUFPLFdBQVcsR0FBRztJQUMxQixRQUFRLEVBQUUsR0FBRztJQUNiLG1CQUFtQixFQUFFLEdBQUc7SUFDeEIsRUFBRSxFQUFFLEdBQUc7SUFDUCxPQUFPLEVBQUUsR0FBRztJQUNaLFFBQVEsRUFBRSxHQUFHO0lBQ2IsNkJBQTZCLEVBQUUsR0FBRztJQUNsQyxVQUFVLEVBQUUsR0FBRztJQUNmLGFBQWEsRUFBRSxHQUFHO0lBQ2xCLGVBQWUsRUFBRSxHQUFHO0lBQ3BCLGdCQUFnQixFQUFFLEdBQUc7SUFDckIsa0JBQWtCLEVBQUUsR0FBRztJQUN2QixLQUFLLEVBQUUsR0FBRztJQUNWLFNBQVMsRUFBRSxHQUFHO0lBQ2QsWUFBWSxFQUFFLEdBQUc7SUFDakIsU0FBUyxFQUFFLEdBQUc7SUFDZCxrQkFBa0IsRUFBRSxHQUFHO0lBQ3ZCLFdBQVcsRUFBRSxHQUFHO0lBQ2hCLFlBQVksRUFBRSxHQUFHO0lBQ2pCLGdCQUFnQixFQUFFLEdBQUc7SUFDckIsU0FBUyxFQUFFLEdBQUc7SUFDZCxTQUFTLEVBQUUsR0FBRztJQUNkLGtCQUFrQixFQUFFLEdBQUc7SUFDdkIsY0FBYyxFQUFFLEdBQUc7SUFDbkIsNkJBQTZCLEVBQUUsR0FBRztJQUNsQyxlQUFlLEVBQUUsR0FBRztJQUNwQixRQUFRLEVBQUUsR0FBRztJQUNiLElBQUksRUFBRSxHQUFHO0lBQ1QsZUFBZSxFQUFFLEdBQUc7SUFDcEIsbUJBQW1CLEVBQUUsR0FBRztJQUN4QixnQkFBZ0IsRUFBRSxHQUFHO0lBQ3JCLFlBQVksRUFBRSxHQUFHO0lBQ2pCLHNCQUFzQixFQUFFLEdBQUc7SUFDM0IscUJBQXFCLEVBQUUsR0FBRztJQUMxQixrQkFBa0IsRUFBRSxHQUFHO0lBQ3ZC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RUFBRSxXQUFXO1FBQ3pCLFdBQVcsRUFBRSw4Q0FBOEM7S0FDM0Q7SUFDRCxLQUFLLEVBQUU7UUFDTixNQUFNLEVBQUUsR0FBRztRQUNYLE1BQU0sRUFBRSwrQkFBK0I7UUFDdkMsYUFBYSxFQUFFLGlGQUFpRjtRQUNoRyxZQUFZLEVBQUUsOENBQThDO1FBQzVELFdBQVcsRUFBRSx5RUFBeUU7S0FDdEY7SUFDRCxLQUFLLEVBQUU7UUFDTixNQUFNLEVBQUUsR0FBRztRQUNYLE1BQU0sRUFBRSx5QkFBeUI7UUFDakMsYUFBYSxFQUFFLHdOQUF3TjtRQUN2TyxZQUFZLEVBQUUsYUFBYTtRQUMzQixXQUFXLEVBQUUsZ0RBQWdEO0tBQzdEO0lBQ0QsS0FBSyxFQUFFO1FBQ04sTUFBTSxFQUFFLEdBQUc7UUFDWCxNQUFNLEVBQUUsc0JBQXNCO1FBQzlCLGFBQWEsRUFBRSw0SkFBNEo7UUFDM0ssWUFBWSxFQUFFLGNBQWM7UUFDNUIsV0FBVyxFQUFFLGlEQUFpRDtLQUM5RDtJQUNELEtBQUssRUFBRTtRQUNOLE1BQU0sRUFBRSxHQUFHO1FBQ1gsTUFBTSxFQUFFLGlDQUFpQztRQUN6QyxhQUFhLEVBQUUsOERBQThEO1FBQzdFLFlBQVksRUFBRSxXQUFXO1FBQ3pCLFdBQVcsRUFBRSw4Q0FBOEM7S0FDM0Q7Q0FDRDs7Ozs7O0FBS0QsTUFBTSxVQUFVLGFBQWEsQ0FBQyxNQUFjO0lBQzNDLE9BQU8sZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxJQUFJLGdCQUFnQixDQUFDO0FBQzFELENBQUM7Ozs7OztBQUtELE1BQU0sVUFBVSxTQUFTLENBQUMsTUFBYztJQUN2QyxPQUFPLE1BQU0sSUFBSSxHQUFHLElBQUksTUFBTSxHQUFHLEdBQUcsQ0FBQztBQUN0QyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IFNUQVRVU19DT0RFID0ge1xyXG5cdENPTlRJTlVFOiAxMDAsXHJcblx0U1dJVENISU5HX1BST1RPQ09MUzogMTAxLFxyXG5cdE9LOiAyMDAsXHJcblx0Q1JFQVRFRDogMjAxLFxyXG5cdEFDQ0VQVEVEOiAyMDIsXHJcblx0Tk9OX0FVVEhPUklUQVRJVkVfSU5GT1JNQVRJT046IDIwMyxcclxuXHROT19DT05URU5UOiAyMDQsXHJcblx0UkVTRVRfQ09OVEVOVDogMjA1LFxyXG5cdFBBUlRJQUxfQ09OVEVOVDogMjA2LFxyXG5cdE1VTFRJUExFX0NIT0lDRVM6IDMwMCxcclxuXHRNT1ZFRF9QRVJNQU5URU5UTFk6IDMwMSxcclxuXHRGT1VORDogMzAyLFxyXG5cdFNFRV9PVEhFUjogMzAzLFxyXG5cdE5PVF9NT0RJRklFRDogMzA0LFxyXG5cdFVTRV9QUk9YWTogMzA1LFxyXG5cdFRFTVBPUkFSWV9SRURJUkVDVDogMzA3LFxyXG5cdEJBRF9SRVFVRVNUOiA0MDAsXHJcblx0VU5BVVRIT1JJWkVEOiA0MDEsXHJcblx0UEFZTUVOVF9SRVFVSVJFRDogNDAyLFxyXG5cdEZPUkJJRERFTjogNDAzLFxyXG5cdE5PVF9GT1VORDogNDA0LFxyXG5cdE1FVEhPRF9OT1RfQUxMT1dFRDogNDA1LFxyXG5cdE5PVF9BQ0NFUFRBQkxFOiA0MDYsXHJcblx0UFJPWFlfQVVUSEVOVElDQVRJT05fUkVRVUlSRUQ6IDQwNyxcclxuXHRSRVFVRVNUX1RJTUVPVVQ6IDQwOCxcclxuXHRDT05GTElDVDogNDA5LFxyXG5cdEdPTkU6IDQxMCxcclxuXHRMRU5HVEhfUkVRVUlSRUQ6IDQxMSxcclxuXHRQUkVDT05ESVRJT05fRkFJTEVEOiA0MTIsXHJcblx0UEFZTE9BRF9UT19MQVJHRTogNDEzLFxyXG5cdFVSSV9UT09fTE9ORzogNDE0LFxyXG5cdFVOU1VQUE9SVEVEX01FRElBX1RZUEU6IDQxNSxcclxuXHRSQU5HRV9OT1RfU0FUSVNGSUFCTEU6IDQxNixcclxuXHRFWFBFQ1RBVElPTl9GQUlMRUQ6IDQxNyxcclxuXHRJTV9BX1RFQVBPVDogNDE4LFxyXG5cdFVQR1JBREVfUkVRVUlSRUQ6IDQyNixcclxuXHRJTlRFUk5BTF9TRVJWRVJfRVJST1I6IDUwMCxcclxuXHROT1RfSU1QTEVNRU5URUQ6IDUwMSxcclxuXHRCQURfR0FURVdBWTogNTAyLFxyXG5cdFNFUlZJQ0VfVU5BVkFJTEFCTEU6IDUwMyxcclxuXHRHQVRFV0FZX1RJTUVPVVQ6IDUwNCxcclxuXHRIVFRQX1ZFUlNJT05fTk9UX1NVUFBPUlRFRDogNTA1LFxyXG5cdFBST0NFU1NJTkc6IDEwMixcclxuXHRNVUxUSV9TVEFUVVM6IDIwNyxcclxuXHRJTV9VU0VEOiAyMjYsXHJcblx0UEVSTUFORU5UX1JFRElSRUNUOiAzMDgsXHJcblx0VU5QUk9DRVNTQUJMRV9FTlRSWTogNDIyLFxyXG5cdExPQ0tFRDogNDIzLFxyXG5cdEZBSUxFRF9ERVBFTkRFTkNZOiA0MjQsXHJcblx0UFJFQ09ORElUSU9OX1JFUVVJUkVEOiA0MjgsXHJcblx0VE9PX01BTllfUkVRVUVTVFM6IDQyOSxcclxuXHRSRVFVRVNUX0hFQURFUl9GSUVMRFNfVE9PX0xBUkdFOiA0MzEsXHJcblx0VU5BVkFJTEFCTEVfRk9SX0xFR0FMX1JFQVNPTlM6IDQ1MSxcclxuXHRWQVJJQU5UX0FMU09fTkVHT1RJQVRFUzogNTA2LFxyXG5cdElOU1VGRklDSUVOVF9TVE9SQUdFOiA1MDcsXHJcblx0TkVUV09SS19BVVRIRU5USUNBVElPTl9SRVFVSVJFRDogNTExXHJcbn07XHJcblxyXG4vKnRzbGludDpkaXNhYmxlOnF1b3RlbWFyayBtYXgtbGluZS1sZW5ndGggb25lLWxpbmUgKi9cclxuZXhwb3J0IGNvbnN0IFNUQVRVU19DT0RFX0lORk8gPSB7XHJcblx0JzEwMCc6IHtcclxuXHRcdCdjb2RlJzogMTAwLFxyXG5cdFx0J3RleHQnOiAnQ29udGludWUnLFxyXG5cdFx0J2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgaW5pdGlhbCBwYXJ0IG9mIGEgcmVxdWVzdCBoYXMgYmVlbiByZWNlaXZlZCBhbmQgaGFzIG5vdCB5ZXQgYmVlbiByZWplY3RlZCBieSB0aGUgc2VydmVyLlxcXCInLFxyXG5cdFx0J3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjIuMScsXHJcblx0XHQnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjIuMSdcclxuXHR9LFxyXG5cdCcxMDEnOiB7XHJcblx0XHQnY29kZSc6IDEwMSxcclxuXHRcdCd0ZXh0JzogJ1N3aXRjaGluZyBQcm90b2NvbHMnLFxyXG5cdFx0J2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgc2VydmVyIHVuZGVyc3RhbmRzIGFuZCBpcyB3aWxsaW5nIHRvIGNvbXBseSB3aXRoIHRoZSBjbGllbnRcXCdzIHJlcXVlc3QsIHZpYSB0aGUgVXBncmFkZSBoZWFkZXIgZmllbGQsIGZvciBhIGNoYW5nZSBpbiB0aGUgYXBwbGljYXRpb24gcHJvdG9jb2wgYmVpbmcgdXNlZCBvbiB0aGlzIGNvbm5lY3Rpb24uXFxcIicsXHJcblx0XHQnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuMi4yJyxcclxuXHRcdCdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuMi4yJ1xyXG5cdH0sXHJcblx0JzIwMCc6IHtcclxuXHRcdCdjb2RlJzogMjAwLFxyXG5cdFx0J3RleHQnOiAnT0snLFxyXG5cdFx0J2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgcmVxdWVzdCBoYXMgc3VjY2VlZGVkLlxcXCInLFxyXG5cdFx0J3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjMuMScsXHJcblx0XHQnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjMuMSdcclxuXHR9LFxyXG5cdCcyMDEnOiB7XHJcblx0XHQnY29kZSc6IDIwMSxcclxuXHRcdCd0ZXh0JzogJ0NyZWF0ZWQnLFxyXG5cdFx0J2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgcmVxdWVzdCBoYXMgYmVlbiBmdWxmaWxsZWQgYW5kIGhhcyByZXN1bHRlZCBpbiBvbmUgb3IgbW9yZSBuZXcgcmVzb3VyY2VzIGJlaW5nIGNyZWF0ZWQuXFxcIicsXHJcblx0XHQnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuMy4yJyxcclxuXHRcdCdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuMy4yJ1xyXG5cdH0sXHJcblx0JzIwMic6IHtcclxuXHRcdCdjb2RlJzogMjAyLFxyXG5cdFx0J3RleHQnOiAnQWNjZXB0ZWQnLFxyXG5cdFx0J2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgcmVxdWVzdCBoYXMgYmVlbiBhY2NlcHRlZCBmb3IgcHJvY2Vzc2luZywgYnV0IHRoZSBwcm9jZXNzaW5nIGhhcyBub3QgYmVlbiBjb21wbGV0ZWQuXFxcIicsXHJcblx0XHQnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuMy4zJyxcclxuXHRcdCdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuMy4zJ1xyXG5cdH0sXHJcblx0JzIwMyc6IHtcclxuXHRcdCdjb2RlJzogMjAzLFxyXG5cdFx0J3RleHQnOiAnTm9uLUF1dGhvcml0YXRpdmUgSW5mb3JtYXRpb24nLFxyXG5cdFx0J2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgcmVxdWVzdCB3YXMgc3VjY2Vzc2Z1bCBidXQgdGhlIGVuY2xvc2VkIHBheWxvYWQgaGFzIGJlZW4gbW9kaWZpZWQgZnJvbSB0aGF0IG9mIHRoZSBvcmlnaW4gc2VydmVyXFwncyAyMDAgKE9LKSByZXNwb25zZSBieSBhIHRyYW5zZm9ybWluZyBwcm94eS5cXFwiJyxcclxuXHRcdCdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi4zLjQnLFxyXG5cdFx0J3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi4zLjQnXHJcblx0fSxcclxuXHQnMjA0Jzoge1xyXG5cdFx0J2NvZGUnOiAyMDQsXHJcblx0XHQndGV4dCc6ICdObyBDb250ZW50JyxcclxuXHRcdCdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHNlcnZlciBoYXMgc3VjY2Vzc2Z1bGx5IGZ1bGZpbGxlZCB0aGUgcmVxdWVzdCBhbmQgdGhhdCB0aGVyZSBpcyBubyBhZGRpdGlvbmFsIGNvbnRlbnQgdG8gc2VuZCBpbiB0aGUgcmVzcG9uc2UgcGF5bG9hZCBib2R5LlxcXCInLFxyXG5cdFx0J3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjMuNScsXHJcblx0XHQnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjMuNSdcclxuXHR9LFxyXG5cdCcyMDUnOiB7XHJcblx0XHQnY29kZSc6IDIwNSxcclxuXHRcdCd0ZXh0JzogJ1Jlc2V0IENvbnRlbnQnLFxyXG5cdFx0J2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgc2VydmVyIGhhcyBmdWxmaWxsZWQgdGhlIHJlcXVlc3QgYW5kIGRlc2lyZXMgdGhhdCB0aGUgdXNlciBhZ2VudCByZXNldCB0aGUgXFxcImRvY3VtZW50IHZpZXdcXFwiLCB3aGljaCBjYXVzZWQgdGhlIHJlcXVlc3QgdG8gYmUgc2VudCwgdG8gaXRzIG9yaWdpbmFsIHN0YXRlIGFzIHJlY2VpdmVkIGZyb20gdGhlIG9yaWdpbiBzZXJ2ZXIuXFxcIicsXHJcblx0XHQnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuMy42JyxcclxuXHRcdCdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuMy42J1xyXG5cdH0sXHJcblx0JzIwNic6IHtcclxuXHRcdCdjb2RlJzogMjA2LFxyXG5cdFx0J3RleHQnOiAnUGFydGlhbCBDb250ZW50JyxcclxuXHRcdCdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHNlcnZlciBpcyBzdWNjZXNzZnVsbHkgZnVsZmlsbGluZyBhIHJhbmdlIHJlcXVlc3QgZm9yIHRoZSB0YXJnZXQgcmVzb3VyY2UgYnkgdHJhbnNmZXJyaW5nIG9uZSBvciBtb3JlIHBhcnRzIG9mIHRoZSBzZWxlY3RlZCByZXByZXNlbnRhdGlvbiB0aGF0IGNvcnJlc3BvbmQgdG8gdGhlIHNhdGlzZmlhYmxlIHJhbmdlcyBmb3VuZCBpbiB0aGUgcmVxdWVzdHNcXCdzIFJhbmdlIGhlYWRlciBmaWVsZC5cXFwiJyxcclxuXHRcdCdzcGVjX3RpdGxlJzogJ1JGQzcyMzMjNC4xJyxcclxuXHRcdCdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMyNzZWN0aW9uLTQuMSdcclxuXHR9LFxyXG5cdCczMDAnOiB7XHJcblx0XHQnY29kZSc6IDMwMCxcclxuXHRcdCd0ZXh0JzogJ011bHRpcGxlIENob2ljZXMnLFxyXG5cdFx0J2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgdGFyZ2V0IHJlc291cmNlIGhhcyBtb3JlIHRoYW4gb25lIHJlcHJlc2VudGF0aW9uLCBlYWNoIHdpdGggaXRzIG93biBtb3JlIHNwZWNpZmljIGlkZW50aWZpZXIsIGFuZCBpbmZvcm1hdGlvbiBhYm91dCB0aGUgYWx0ZXJuYXRpdmVzIGlzIGJlaW5nIHByb3ZpZGVkIHNvIHRoYXQgdGhlIHVzZXIgKG9yIHVzZXIgYWdlbnQpIGNhbiBzZWxlY3QgYSBwcmVmZXJyZWQgcmVwcmVzZW50YXRpb24gYnkgcmVkaXJlY3RpbmcgaXRzIHJlcXVlc3QgdG8gb25lIG9yIG1vcmUgb2YgdGhvc2UgaWRlbnRpZmllcnMuXFxcIicsXHJcblx0XHQnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuNC4xJyxcclxuXHRcdCdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNC4xJ1xyXG5cdH0sXHJcblx0JzMwMSc6IHtcclxuXHRcdCdjb2RlJzogMzAxLFxyXG5cdFx0J3RleHQnOiAnTW92ZWQgUGVybWFuZW50bHknLFxyXG5cdFx0J2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgdGFyZ2V0IHJlc291cmNlIGhhcyBiZWVuIGFzc2lnbmVkIGEgbmV3IHBlcm1hbmVudCBVUkkgYW5kIGFueSBmdXR1cmUgcmVmZXJlbmNlcyB0byB0aGlzIHJlc291cmNlIG91Z2h0IHRvIHVzZSBvbmUgb2YgdGhlIGVuY2xvc2VkIFVSSXMuXFxcIicsXHJcblx0XHQnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuNC4yJyxcclxuXHRcdCdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNC4yJ1xyXG5cdH0sXHJcblx0JzMwMic6IHtcclxuXHRcdCdjb2RlJzogMzAyLFxyXG5cdFx0J3RleHQnOiAnRm91bmQnLFxyXG5cdFx0J2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgdGFyZ2V0IHJlc291cmNlIHJlc2lkZXMgdGVtcG9yYXJpbHkgdW5kZXIgYSBkaWZmZXJlbnQgVVJJLlxcXCInLFxyXG5cdFx0J3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjQuMycsXHJcblx0XHQnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjQuMydcclxuXHR9LFxyXG5cdCczMDMnOiB7XHJcblx0XHQnY29kZSc6IDMwMyxcclxuXHRcdCd0ZXh0JzogJ1NlZSBPdGhlcicsXHJcblx0XHQnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSBzZXJ2ZXIgaXMgcmVkaXJlY3RpbmcgdGhlIHVzZXIgYWdlbnQgdG8gYSBkaWZmZXJlbnQgcmVzb3VyY2UsIGFzIGluZGljYXRlZCBieSBhIFVSSSBpbiB0aGUgTG9jYXRpb24gaGVhZGVyIGZpZWxkLCB0aGF0IGlzIGludGVuZGVkIHRvIHByb3ZpZGUgYW4gaW5kaXJlY3QgcmVzcG9uc2UgdG8gdGhlIG9yaWdpbmFsIHJlcXVlc3QuXFxcIicsXHJcblx0XHQnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuNC40JyxcclxuXHRcdCdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNC40J1xyXG5cdH0sXHJcblx0JzMwNCc6IHtcclxuXHRcdCdjb2RlJzogMzA0LFxyXG5cdFx0J3RleHQnOiAnTm90IE1vZGlmaWVkJyxcclxuXHRcdCdkZXNjcmlwdGlvbic6ICdcXFwiQSBjb25kaXRpb25hbCBHRVQgcmVxdWVzdCBoYXMgYmVlbiByZWNlaXZlZCBhbmQgd291bGQgaGF2ZSByZXN1bHRlZCBpbiBhIDIwMCAoT0spIHJlc3BvbnNlIGlmIGl0IHdlcmUgbm90IGZvciB0aGUgZmFjdCB0aGF0IHRoZSBjb25kaXRpb24gaGFzIGV2YWx1YXRlZCB0byBmYWxzZS5cXFwiJyxcclxuXHRcdCdzcGVjX3RpdGxlJzogJ1JGQzcyMzIjNC4xJyxcclxuXHRcdCdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMiNzZWN0aW9uLTQuMSdcclxuXHR9LFxyXG5cdCczMDUnOiB7XHJcblx0XHQnY29kZSc6IDMwNSxcclxuXHRcdCd0ZXh0JzogJ1VzZSBQcm94eScsXHJcblx0XHQnZGVzY3JpcHRpb24nOiAnKmRlcHJlY2F0ZWQqJyxcclxuXHRcdCdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi40LjUnLFxyXG5cdFx0J3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi40LjUnXHJcblx0fSxcclxuXHQnMzA3Jzoge1xyXG5cdFx0J2NvZGUnOiAzMDcsXHJcblx0XHQndGV4dCc6ICdUZW1wb3JhcnkgUmVkaXJlY3QnLFxyXG5cdFx0J2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgdGFyZ2V0IHJlc291cmNlIHJlc2lkZXMgdGVtcG9yYXJpbHkgdW5kZXIgYSBkaWZmZXJlbnQgVVJJIGFuZCB0aGUgdXNlciBhZ2VudCBNVVNUIE5PVCBjaGFuZ2UgdGhlIHJlcXVlc3QgbWV0aG9kIGlmIGl0IHBlcmZvcm1zIGFuIGF1dG9tYXRpYyByZWRpcmVjdGlvbiB0byB0aGF0IFVSSS5cXFwiJyxcclxuXHRcdCdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi40LjcnLFxyXG5cdFx0J3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi40LjcnXHJcblx0fSxcclxuXHQnNDAwJzoge1xyXG5cdFx0J2NvZGUnOiA0MDAsXHJcblx0XHQndGV4dCc6ICdCYWQgUmVxdWVzdCcsXHJcblx0XHQnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSBzZXJ2ZXIgY2Fubm90IG9yIHdpbGwgbm90IHByb2Nlc3MgdGhlIHJlcXVlc3QgYmVjYXVzZSB0aGUgcmVjZWl2ZWQgc3ludGF4IGlzIGludmFsaWQsIG5vbnNlbnNpY2FsLCBvciBleGNlZWRzIHNvbWUgbGltaXRhdGlvbiBvbiB3aGF0IHRoZSBzZXJ2ZXIgaXMgd2lsbGluZyB0byBwcm9jZXNzLlxcXCInLFxyXG5cdFx0J3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjUuMScsXHJcblx0XHQnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjUuMSdcclxuXHR9LFxyXG5cdCc0MDEnOiB7XHJcblx0XHQnY29kZSc6IDQwMSxcclxuXHRcdCd0ZXh0JzogJ1VuYXV0aG9yaXplZCcsXHJcblx0XHQnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSByZXF1ZXN0IGhhcyBub3QgYmVlbiBhcHBsaWVkIGJlY2F1c2UgaXQgbGFja3MgdmFsaWQgYXV0aGVudGljYXRpb24gY3JlZGVudGlhbHMgZm9yIHRoZSB0YXJnZXQgcmVzb3VyY2UuXFxcIicsXHJcblx0XHQnc3BlY190aXRsZSc6ICdSRkM3MjM1IzYuMy4xJyxcclxuXHRcdCdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzNSNzZWN0aW9uLTMuMSdcclxuXHR9LFxyXG5cdCc0MDInOiB7XHJcblx0XHQnY29kZSc6IDQwMixcclxuXHRcdCd0ZXh0JzogJ1BheW1lbnQgUmVxdWlyZWQnLFxyXG5cdFx0J2Rlc2NyaXB0aW9uJzogJypyZXNlcnZlZConLFxyXG5cdFx0J3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjUuMicsXHJcblx0XHQnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjUuMidcclxuXHR9LFxyXG5cdCc0MDMnOiB7XHJcblx0XHQnY29kZSc6IDQwMyxcclxuXHRcdCd0ZXh0JzogJ0ZvcmJpZGRlbicsXHJcblx0XHQnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSBzZXJ2ZXIgdW5kZXJzdG9vZCB0aGUgcmVxdWVzdCBidXQgcmVmdXNlcyB0byBhdXRob3JpemUgaXQuXFxcIicsXHJcblx0XHQnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuNS4zJyxcclxuXHRcdCdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNS4zJ1xyXG5cdH0sXHJcblx0JzQwNCc6IHtcclxuXHRcdCdjb2RlJzogNDA0LFxyXG5cdFx0J3RleHQnOiAnTm90IEZvdW5kJyxcclxuXHRcdCdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIG9yaWdpbiBzZXJ2ZXIgZGlkIG5vdCBmaW5kIGEgY3VycmVudCByZXByZXNlbnRhdGlvbiBmb3IgdGhlIHRhcmdldCByZXNvdXJjZSBvciBpcyBub3Qgd2lsbGluZyB0byBkaXNjbG9zZSB0aGF0IG9uZSBleGlzdHMuXFxcIicsXHJcblx0XHQnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuNS40JyxcclxuXHRcdCdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNS40J1xyXG5cdH0sXHJcblx0JzQwNSc6IHtcclxuXHRcdCdjb2RlJzogNDA1LFxyXG5cdFx0J3RleHQnOiAnTWV0aG9kIE5vdCBBbGxvd2VkJyxcclxuXHRcdCdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIG1ldGhvZCBzcGVjaWZpZWQgaW4gdGhlIHJlcXVlc3QtbGluZSBpcyBrbm93biBieSB0aGUgb3JpZ2luIHNlcnZlciBidXQgbm90IHN1cHBvcnRlZCBieSB0aGUgdGFyZ2V0IHJlc291cmNlLlxcXCInLFxyXG5cdFx0J3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjUuNScsXHJcblx0XHQnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjUuNSdcclxuXHR9LFxyXG5cdCc0MDYnOiB7XHJcblx0XHQnY29kZSc6IDQwNixcclxuXHRcdCd0ZXh0JzogJ05vdCBBY2NlcHRhYmxlJyxcclxuXHRcdCdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHRhcmdldCByZXNvdXJjZSBkb2VzIG5vdCBoYXZlIGEgY3VycmVudCByZXByZXNlbnRhdGlvbiB0aGF0IHdvdWxkIGJlIGFjY2VwdGFibGUgdG8gdGhlIHVzZXIgYWdlbnQsIGFjY29yZGluZyB0byB0aGUgcHJvYWN0aXZlIG5lZ290aWF0aW9uIGhlYWRlciBmaWVsZHMgcmVjZWl2ZWQgaW4gdGhlIHJlcXVlc3QsIGFuZCB0aGUgc2VydmVyIGlzIHVud2lsbGluZyB0byBzdXBwbHkgYSBkZWZhdWx0IHJlcHJlc2VudGF0aW9uLlxcXCInLFxyXG5cdFx0J3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjUuNicsXHJcblx0XHQnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjUuNidcclxuXHR9LFxyXG5cdCc0MDcnOiB7XHJcblx0XHQnY29kZSc6IDQwNyxcclxuXHRcdCd0ZXh0JzogJ1Byb3h5IEF1dGhlbnRpY2F0aW9uIFJlcXVpcmVkJyxcclxuXHRcdCdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIGNsaWVudCBuZWVkcyB0byBhdXRoZW50aWNhdGUgaXRzZWxmIGluIG9yZGVyIHRvIHVzZSBhIHByb3h5LlxcXCInLFxyXG5cdFx0J3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjMuMicsXHJcblx0XHQnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjMuMidcclxuXHR9LFxyXG5cdCc0MDgnOiB7XHJcblx0XHQnY29kZSc6IDQwOCxcclxuXHRcdCd0ZXh0JzogJ1JlcXVlc3QgVGltZW91dCcsXHJcblx0XHQnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSBzZXJ2ZXIgZGlkIG5vdCByZWNlaXZlIGEgY29tcGxldGUgcmVxdWVzdCBtZXNzYWdlIHdpdGhpbiB0aGUgdGltZSB0aGF0IGl0IHdhcyBwcmVwYXJlZCB0byB3YWl0LlxcXCInLFxyXG5cdFx0J3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjUuNycsXHJcblx0XHQnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjUuNydcclxuXHR9LFxyXG5cdCc0MDknOiB7XHJcblx0XHQnY29kZSc6IDQwOSxcclxuXHRcdCd0ZXh0JzogJ0NvbmZsaWN0JyxcclxuXHRcdCdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHJlcXVlc3QgY291bGQgbm90IGJlIGNvbXBsZXRlZCBkdWUgdG8gYSBjb25mbGljdCB3aXRoIHRoZSBjdXJyZW50IHN0YXRlIG9mIHRoZSByZXNvdXJjZS5cXFwiJyxcclxuXHRcdCdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi41LjgnLFxyXG5cdFx0J3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi41LjgnXHJcblx0fSxcclxuXHQnNDEwJzoge1xyXG5cdFx0J2NvZGUnOiA0MTAsXHJcblx0XHQndGV4dCc6ICdHb25lJyxcclxuXHRcdCdkZXNjcmlwdGlvbic6ICdcXFwiQWNjZXNzIHRvIHRoZSB0YXJnZXQgcmVzb3VyY2UgaXMgbm8gbG9uZ2VyIGF2YWlsYWJsZSBhdCB0aGUgb3JpZ2luIHNlcnZlciBhbmQgdGhhdCB0aGlzIGNvbmRpdGlvbiBpcyBsaWtlbHkgdG8gYmUgcGVybWFuZW50LlxcXCInLFxyXG5cdFx0J3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjUuOScsXHJcblx0XHQnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjUuOSdcclxuXHR9LFxyXG5cdCc0MTEnOiB7XHJcblx0XHQnY29kZSc6IDQxMSxcclxuXHRcdCd0ZXh0JzogJ0xlbmd0aCBSZXF1aXJlZCcsXHJcblx0XHQnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSBzZXJ2ZXIgcmVmdXNlcyB0byBhY2NlcHQgdGhlIHJlcXVlc3Qgd2l0aG91dCBhIGRlZmluZWQgQ29udGVudC1MZW5ndGguXFxcIicsXHJcblx0XHQnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuNS4xMCcsXHJcblx0XHQnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjUuMTAnXHJcblx0fSxcclxuXHQnNDEyJzoge1xyXG5cdFx0J2NvZGUnOiA0MTIsXHJcblx0XHQndGV4dCc6ICdQcmVjb25kaXRpb24gRmFpbGVkJyxcclxuXHRcdCdkZXNjcmlwdGlvbic6ICdcXFwiT25lIG9yIG1vcmUgcHJlY29uZGl0aW9ucyBnaXZlbiBpbiB0aGUgcmVxdWVzdCBoZWFkZXIgZmllbGRzIGV2YWx1YXRlZCB0byBmYWxzZSB3aGVuIHRlc3RlZCBvbiB0aGUgc2VydmVyLlxcXCInLFxyXG5cdFx0J3NwZWNfdGl0bGUnOiAnUkZDNzIzMiM0LjInLFxyXG5cdFx0J3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMyI3NlY3Rpb24tNC4yJ1xyXG5cdH0sXHJcblx0JzQxMyc6IHtcclxuXHRcdCdjb2RlJzogNDEzLFxyXG5cdFx0J3RleHQnOiAnUGF5bG9hZCBUb28gTGFyZ2UnLFxyXG5cdFx0J2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgc2VydmVyIGlzIHJlZnVzaW5nIHRvIHByb2Nlc3MgYSByZXF1ZXN0IGJlY2F1c2UgdGhlIHJlcXVlc3QgcGF5bG9hZCBpcyBsYXJnZXIgdGhhbiB0aGUgc2VydmVyIGlzIHdpbGxpbmcgb3IgYWJsZSB0byBwcm9jZXNzLlxcXCInLFxyXG5cdFx0J3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjUuMTEnLFxyXG5cdFx0J3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi41LjExJ1xyXG5cdH0sXHJcblx0JzQxNCc6IHtcclxuXHRcdCdjb2RlJzogNDE0LFxyXG5cdFx0J3RleHQnOiAnVVJJIFRvbyBMb25nJyxcclxuXHRcdCdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHNlcnZlciBpcyByZWZ1c2luZyB0byBzZXJ2aWNlIHRoZSByZXF1ZXN0IGJlY2F1c2UgdGhlIHJlcXVlc3QtdGFyZ2V0IGlzIGxvbmdlciB0aGFuIHRoZSBzZXJ2ZXIgaXMgd2lsbGluZyB0byBpbnRlcnByZXQuXFxcIicsXHJcblx0XHQnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuNS4xMicsXHJcblx0XHQnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjUuMTInXHJcblx0fSxcclxuXHQnNDE1Jzoge1xyXG5cdFx0J2NvZGUnOiA0MTUsXHJcblx0XHQndGV4dCc6ICdVbnN1cHBvcnRlZCBNZWRpYSBUeXBlJyxcclxuXHRcdCdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIG9yaWdpbiBzZXJ2ZXIgaXMgcmVmdXNpbmcgdG8gc2VydmljZSB0aGUgcmVxdWVzdCBiZWNhdXNlIHRoZSBwYXlsb2FkIGlzIGluIGEgZm9ybWF0IG5vdCBzdXBwb3J0ZWQgYnkgdGhlIHRhcmdldCByZXNvdXJjZSBmb3IgdGhpcyBtZXRob2QuXFxcIicsXHJcblx0XHQnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuNS4xMycsXHJcblx0XHQnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjUuMTMnXHJcblx0fSxcclxuXHQnNDE2Jzoge1xyXG5cdFx0J2NvZGUnOiA0MTYsXHJcblx0XHQndGV4dCc6ICdSYW5nZSBOb3QgU2F0aXNmaWFibGUnLFxyXG5cdFx0J2Rlc2NyaXB0aW9uJzogJ1xcXCJOb25lIG9mIHRoZSByYW5nZXMgaW4gdGhlIHJlcXVlc3RcXCdzIFJhbmdlIGhlYWRlciBmaWVsZCBvdmVybGFwIHRoZSBjdXJyZW50IGV4dGVudCBvZiB0aGUgc2VsZWN0ZWQgcmVzb3VyY2Ugb3IgdGhhdCB0aGUgc2V0IG9mIHJhbmdlcyByZXF1ZXN0ZWQgaGFzIGJlZW4gcmVqZWN0ZWQgZHVlIHRvIGludmFsaWQgcmFuZ2VzIG9yIGFuIGV4Y2Vzc2l2ZSByZXF1ZXN0IG9mIHNtYWxsIG9yIG92ZXJsYXBwaW5nIHJhbmdlcy5cXFwiJyxcclxuXHRcdCdzcGVjX3RpdGxlJzogJ1JGQzcyMzMjNC40JyxcclxuXHRcdCdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMyNzZWN0aW9uLTQuNCdcclxuXHR9LFxyXG5cdCc0MTcnOiB7XHJcblx0XHQnY29kZSc6IDQxNyxcclxuXHRcdCd0ZXh0JzogJ0V4cGVjdGF0aW9uIEZhaWxlZCcsXHJcblx0XHQnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSBleHBlY3RhdGlvbiBnaXZlbiBpbiB0aGUgcmVxdWVzdFxcJ3MgRXhwZWN0IGhlYWRlciBmaWVsZCBjb3VsZCBub3QgYmUgbWV0IGJ5IGF0IGxlYXN0IG9uZSBvZiB0aGUgaW5ib3VuZCBzZXJ2ZXJzLlxcXCInLFxyXG5cdFx0J3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjUuMTQnLFxyXG5cdFx0J3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi41LjE0J1xyXG5cdH0sXHJcblx0JzQxOCc6IHtcclxuXHRcdCdjb2RlJzogNDE4LFxyXG5cdFx0J3RleHQnOiAnSVxcJ20gYSB0ZWFwb3QnLFxyXG5cdFx0J2Rlc2NyaXB0aW9uJzogJ1xcXCIxOTg4IEFwcmlsIEZvb2xzIEpva2UuIFJldHVybmVkIGJ5IHRlYSBwb3RzIHJlcXVlc3RlZCB0byBicmV3IGNvZmZlZS5cXFwiJyxcclxuXHRcdCdzcGVjX3RpdGxlJzogJ1JGQyAyMzI0JyxcclxuXHRcdCdzcGVjX2hyZWYnOiAnaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzIzMjQnXHJcblx0fSxcclxuXHQnNDI2Jzoge1xyXG5cdFx0J2NvZGUnOiA0MjYsXHJcblx0XHQndGV4dCc6ICdVcGdyYWRlIFJlcXVpcmVkJyxcclxuXHRcdCdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHNlcnZlciByZWZ1c2VzIHRvIHBlcmZvcm0gdGhlIHJlcXVlc3QgdXNpbmcgdGhlIGN1cnJlbnQgcHJvdG9jb2wgYnV0IG1pZ2h0IGJlIHdpbGxpbmcgdG8gZG8gc28gYWZ0ZXIgdGhlIGNsaWVudCB1cGdyYWRlcyB0byBhIGRpZmZlcmVudCBwcm90b2NvbC5cXFwiJyxcclxuXHRcdCdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi41LjE1JyxcclxuXHRcdCdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNS4xNSdcclxuXHR9LFxyXG5cdCc1MDAnOiB7XHJcblx0XHQnY29kZSc6IDUwMCxcclxuXHRcdCd0ZXh0JzogJ0ludGVybmFsIFNlcnZlciBFcnJvcicsXHJcblx0XHQnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSBzZXJ2ZXIgZW5jb3VudGVyZWQgYW4gdW5leHBlY3RlZCBjb25kaXRpb24gdGhhdCBwcmV2ZW50ZWQgaXQgZnJvbSBmdWxmaWxsaW5nIHRoZSByZXF1ZXN0LlxcXCInLFxyXG5cdFx0J3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjYuMScsXHJcblx0XHQnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjYuMSdcclxuXHR9LFxyXG5cdCc1MDEnOiB7XHJcblx0XHQnY29kZSc6IDUwMSxcclxuXHRcdCd0ZXh0JzogJ05vdCBJbXBsZW1lbnRlZCcsXHJcblx0XHQnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSBzZXJ2ZXIgZG9lcyBub3Qgc3VwcG9ydCB0aGUgZnVuY3Rpb25hbGl0eSByZXF1aXJlZCB0byBmdWxmaWxsIHRoZSByZXF1ZXN0LlxcXCInLFxyXG5cdFx0J3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjYuMicsXHJcblx0XHQnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjYuMidcclxuXHR9LFxyXG5cdCc1MDInOiB7XHJcblx0XHQnY29kZSc6IDUwMixcclxuXHRcdCd0ZXh0JzogJ0JhZCBHYXRld2F5JyxcclxuXHRcdCdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHNlcnZlciwgd2hpbGUgYWN0aW5nIGFzIGEgZ2F0ZXdheSBvciBwcm94eSwgcmVjZWl2ZWQgYW4gaW52YWxpZCByZXNwb25zZSBmcm9tIGFuIGluYm91bmQgc2VydmVyIGl0IGFjY2Vzc2VkIHdoaWxlIGF0dGVtcHRpbmcgdG8gZnVsZmlsbCB0aGUgcmVxdWVzdC5cXFwiJyxcclxuXHRcdCdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi42LjMnLFxyXG5cdFx0J3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi42LjMnXHJcblx0fSxcclxuXHQnNTAzJzoge1xyXG5cdFx0J2NvZGUnOiA1MDMsXHJcblx0XHQndGV4dCc6ICdTZXJ2aWNlIFVuYXZhaWxhYmxlJyxcclxuXHRcdCdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHNlcnZlciBpcyBjdXJyZW50bHkgdW5hYmxlIHRvIGhhbmRsZSB0aGUgcmVxdWVzdCBkdWUgdG8gYSB0ZW1wb3Jhcnkgb3ZlcmxvYWQgb3Igc2NoZWR1bGVkIG1haW50ZW5hbmNlLCB3aGljaCB3aWxsIGxpa2VseSBiZSBhbGxldmlhdGVkIGFmdGVyIHNvbWUgZGVsYXkuXFxcIicsXHJcblx0XHQnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuNi40JyxcclxuXHRcdCdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNi40J1xyXG5cdH0sXHJcblx0JzUwNCc6IHtcclxuXHRcdCdjb2RlJzogNTA0LFxyXG5cdFx0J3RleHQnOiAnR2F0ZXdheSBUaW1lLW91dCcsXHJcblx0XHQnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSBzZXJ2ZXIsIHdoaWxlIGFjdGluZyBhcyBhIGdhdGV3YXkgb3IgcHJveHksIGRpZCBub3QgcmVjZWl2ZSBhIHRpbWVseSByZXNwb25zZSBmcm9tIGFuIHVwc3RyZWFtIHNlcnZlciBpdCBuZWVkZWQgdG8gYWNjZXNzIGluIG9yZGVyIHRvIGNvbXBsZXRlIHRoZSByZXF1ZXN0LlxcXCInLFxyXG5cdFx0J3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjYuNScsXHJcblx0XHQnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjYuNSdcclxuXHR9LFxyXG5cdCc1MDUnOiB7XHJcblx0XHQnY29kZSc6IDUwNSxcclxuXHRcdCd0ZXh0JzogJ0hUVFAgVmVyc2lvbiBOb3QgU3VwcG9ydGVkJyxcclxuXHRcdCdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHNlcnZlciBkb2VzIG5vdCBzdXBwb3J0LCBvciByZWZ1c2VzIHRvIHN1cHBvcnQsIHRoZSBwcm90b2NvbCB2ZXJzaW9uIHRoYXQgd2FzIHVzZWQgaW4gdGhlIHJlcXVlc3QgbWVzc2FnZS5cXFwiJyxcclxuXHRcdCdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi42LjYnLFxyXG5cdFx0J3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi42LjYnXHJcblx0fSxcclxuXHQnMTAyJzoge1xyXG5cdFx0J2NvZGUnOiAxMDIsXHJcblx0XHQndGV4dCc6ICdQcm9jZXNzaW5nJyxcclxuXHRcdCdkZXNjcmlwdGlvbic6ICdcXFwiQW4gaW50ZXJpbSByZXNwb25zZSB0byBpbmZvcm0gdGhlIGNsaWVudCB0aGF0IHRoZSBzZXJ2ZXIgaGFzIGFjY2VwdGVkIHRoZSBjb21wbGV0ZSByZXF1ZXN0LCBidXQgaGFzIG5vdCB5ZXQgY29tcGxldGVkIGl0LlxcXCInLFxyXG5cdFx0J3NwZWNfdGl0bGUnOiAnUkZDNTIxOCMxMC4xJyxcclxuXHRcdCdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjMjUxOCNzZWN0aW9uLTEwLjEnXHJcblx0fSxcclxuXHQnMjA3Jzoge1xyXG5cdFx0J2NvZGUnOiAyMDcsXHJcblx0XHQndGV4dCc6ICdNdWx0aS1TdGF0dXMnLFxyXG5cdFx0J2Rlc2NyaXB0aW9uJzogJ1xcXCJTdGF0dXMgZm9yIG11bHRpcGxlIGluZGVwZW5kZW50IG9wZXJhdGlvbnMuXFxcIicsXHJcblx0XHQnc3BlY190aXRsZSc6ICdSRkM1MjE4IzEwLjInLFxyXG5cdFx0J3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMyNTE4I3NlY3Rpb24tMTAuMidcclxuXHR9LFxyXG5cdCcyMjYnOiB7XHJcblx0XHQnY29kZSc6IDIyNixcclxuXHRcdCd0ZXh0JzogJ0lNIFVzZWQnLFxyXG5cdFx0J2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgc2VydmVyIGhhcyBmdWxmaWxsZWQgYSBHRVQgcmVxdWVzdCBmb3IgdGhlIHJlc291cmNlLCBhbmQgdGhlIHJlc3BvbnNlIGlzIGEgcmVwcmVzZW50YXRpb24gb2YgdGhlIHJlc3VsdCBvZiBvbmUgb3IgbW9yZSBpbnN0YW5jZS1tYW5pcHVsYXRpb25zIGFwcGxpZWQgdG8gdGhlIGN1cnJlbnQgaW5zdGFuY2UuXFxcIicsXHJcblx0XHQnc3BlY190aXRsZSc6ICdSRkMzMjI5IzEwLjQuMScsXHJcblx0XHQnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzMyMjkjc2VjdGlvbi0xMC40LjEnXHJcblx0fSxcclxuXHQnMzA4Jzoge1xyXG5cdFx0J2NvZGUnOiAzMDgsXHJcblx0XHQndGV4dCc6ICdQZXJtYW5lbnQgUmVkaXJlY3QnLFxyXG5cdFx0J2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgdGFyZ2V0IHJlc291cmNlIGhhcyBiZWVuIGFzc2lnbmVkIGEgbmV3IHBlcm1hbmVudCBVUkkgYW5kIGFueSBmdXR1cmUgcmVmZXJlbmNlcyB0byB0aGlzIHJlc291cmNlIFNIT1VMRCB1c2Ugb25lIG9mIHRoZSByZXR1cm5lZCBVUklzLiBbLi4uXSBUaGlzIHN0YXR1cyBjb2RlIGlzIHNpbWlsYXIgdG8gMzAxIE1vdmVkIFBlcm1hbmVudGx5IChTZWN0aW9uIDcuMy4yIG9mIHJmYzcyMzEpLCBleGNlcHQgdGhhdCBpdCBkb2VzIG5vdCBhbGxvdyByZXdyaXRpbmcgdGhlIHJlcXVlc3QgbWV0aG9kIGZyb20gUE9TVCB0byBHRVQuXFxcIicsXHJcblx0XHQnc3BlY190aXRsZSc6ICdSRkM3MjM4JyxcclxuXHRcdCdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzOCdcclxuXHR9LFxyXG5cdCc0MjInOiB7XHJcblx0XHQnY29kZSc6IDQyMixcclxuXHRcdCd0ZXh0JzogJ1VucHJvY2Vzc2FibGUgRW50aXR5JyxcclxuXHRcdCdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHNlcnZlciB1bmRlcnN0YW5kcyB0aGUgY29udGVudCB0eXBlIG9mIHRoZSByZXF1ZXN0IGVudGl0eSAoaGVuY2UgYSA0MTUoVW5zdXBwb3J0ZWQgTWVkaWEgVHlwZSkgc3RhdHVzIGNvZGUgaXMgaW5hcHByb3ByaWF0ZSksIGFuZCB0aGUgc3ludGF4IG9mIHRoZSByZXF1ZXN0IGVudGl0eSBpcyBjb3JyZWN0ICh0aHVzIGEgNDAwIChCYWQgUmVxdWVzdCkgc3RhdHVzIGNvZGUgaXMgaW5hcHByb3ByaWF0ZSkgYnV0IHdhcyB1bmFibGUgdG8gcHJvY2VzcyB0aGUgY29udGFpbmVkIGluc3RydWN0aW9ucy5cXFwiJyxcclxuXHRcdCdzcGVjX3RpdGxlJzogJ1JGQzUyMTgjMTAuMycsXHJcblx0XHQnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzI1MTgjc2VjdGlvbi0xMC4zJ1xyXG5cdH0sXHJcblx0JzQyMyc6IHtcclxuXHRcdCdjb2RlJzogNDIzLFxyXG5cdFx0J3RleHQnOiAnTG9ja2VkJyxcclxuXHRcdCdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHNvdXJjZSBvciBkZXN0aW5hdGlvbiByZXNvdXJjZSBvZiBhIG1ldGhvZCBpcyBsb2NrZWQuXFxcIicsXHJcblx0XHQnc3BlY190aXRsZSc6ICdSRkM1MjE4IzEwLjQnLFxyXG5cdFx0J3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMyNTE4I3NlY3Rpb24tMTAuNCdcclxuXHR9LFxyXG5cdCc0MjQnOiB7XHJcblx0XHQnY29kZSc6IDQyNCxcclxuXHRcdCd0ZXh0JzogJ0ZhaWxlZCBEZXBlbmRlbmN5JyxcclxuXHRcdCdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIG1ldGhvZCBjb3VsZCBub3QgYmUgcGVyZm9ybWVkIG9uIHRoZSByZXNvdXJjZSBiZWNhdXNlIHRoZSByZXF1ZXN0ZWQgYWN0aW9uIGRlcGVuZGVkIG9uIGFub3RoZXIgYWN0aW9uIGFuZCB0aGF0IGFjdGlvbiBmYWlsZWQuXFxcIicsXHJcblx0XHQnc3BlY190aXRsZSc6ICdSRkM1MjE4IzEwLjUnLFxyXG5cdFx0J3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMyNTE4I3NlY3Rpb24tMTAuNSdcclxuXHR9LFxyXG5cdCc0MjgnOiB7XHJcblx0XHQnY29kZSc6IDQyOCxcclxuXHRcdCd0ZXh0JzogJ1ByZWNvbmRpdGlvbiBSZXF1aXJlZCcsXHJcblx0XHQnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSBvcmlnaW4gc2VydmVyIHJlcXVpcmVzIHRoZSByZXF1ZXN0IHRvIGJlIGNvbmRpdGlvbmFsLlxcXCInLFxyXG5cdFx0J3NwZWNfdGl0bGUnOiAnUkZDNjU4NSMzJyxcclxuXHRcdCdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNjU4NSNzZWN0aW9uLTMnXHJcblx0fSxcclxuXHQnNDI5Jzoge1xyXG5cdFx0J2NvZGUnOiA0MjksXHJcblx0XHQndGV4dCc6ICdUb28gTWFueSBSZXF1ZXN0cycsXHJcblx0XHQnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSB1c2VyIGhhcyBzZW50IHRvbyBtYW55IHJlcXVlc3RzIGluIGEgZ2l2ZW4gYW1vdW50IG9mIHRpbWUgKFxcXCJyYXRlIGxpbWl0aW5nXFxcIikuXFxcIicsXHJcblx0XHQnc3BlY190aXRsZSc6ICdSRkM2NTg1IzQnLFxyXG5cdFx0J3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM2NTg1I3NlY3Rpb24tNCdcclxuXHR9LFxyXG5cdCc0MzEnOiB7XHJcblx0XHQnY29kZSc6IDQzMSxcclxuXHRcdCd0ZXh0JzogJ1JlcXVlc3QgSGVhZGVyIEZpZWxkcyBUb28gTGFyZ2UnLFxyXG5cdFx0J2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgc2VydmVyIGlzIHVud2lsbGluZyB0byBwcm9jZXNzIHRoZSByZXF1ZXN0IGJlY2F1c2UgaXRzIGhlYWRlciBmaWVsZHMgYXJlIHRvbyBsYXJnZS5cXFwiJyxcclxuXHRcdCdzcGVjX3RpdGxlJzogJ1JGQzY1ODUjNScsXHJcblx0XHQnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzY1ODUjc2VjdGlvbi01J1xyXG5cdH0sXHJcblx0JzQ1MSc6IHtcclxuXHRcdCdjb2RlJzogNDUxLFxyXG5cdFx0J3RleHQnOiAnVW5hdmFpbGFibGUgRm9yIExlZ2FsIFJlYXNvbnMnLFxyXG5cdFx0J2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgc2VydmVyIGlzIGRlbnlpbmcgYWNjZXNzIHRvIHRoZSByZXNvdXJjZSBpbiByZXNwb25zZSB0byBhIGxlZ2FsIGRlbWFuZC5cXFwiJyxcclxuXHRcdCdzcGVjX3RpdGxlJzogJ2RyYWZ0LWlldGYtaHR0cGJpcy1sZWdhbGx5LXJlc3RyaWN0ZWQtc3RhdHVzJyxcclxuXHRcdCdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvZHJhZnQtaWV0Zi1odHRwYmlzLWxlZ2FsbHktcmVzdHJpY3RlZC1zdGF0dXMnXHJcblx0fSxcclxuXHQnNTA2Jzoge1xyXG5cdFx0J2NvZGUnOiA1MDYsXHJcblx0XHQndGV4dCc6ICdWYXJpYW50IEFsc28gTmVnb3RpYXRlcycsXHJcblx0XHQnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSBzZXJ2ZXIgaGFzIGFuIGludGVybmFsIGNvbmZpZ3VyYXRpb24gZXJyb3I6IHRoZSBjaG9zZW4gdmFyaWFudCByZXNvdXJjZSBpcyBjb25maWd1cmVkIHRvIGVuZ2FnZSBpbiB0cmFuc3BhcmVudCBjb250ZW50IG5lZ290aWF0aW9uIGl0c2VsZiwgYW5kIGlzIHRoZXJlZm9yZSBub3QgYSBwcm9wZXIgZW5kIHBvaW50IGluIHRoZSBuZWdvdGlhdGlvbiBwcm9jZXNzLlxcXCInLFxyXG5cdFx0J3NwZWNfdGl0bGUnOiAnUkZDMjI5NSM4LjEnLFxyXG5cdFx0J3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMyMjk1I3NlY3Rpb24tOC4xJ1xyXG5cdH0sXHJcblx0JzUwNyc6IHtcclxuXHRcdCdjb2RlJzogNTA3LFxyXG5cdFx0J3RleHQnOiAnSW5zdWZmaWNpZW50IFN0b3JhZ2UnLFxyXG5cdFx0J2Rlc2NyaXB0aW9uJzogJ1xcVGhlIG1ldGhvZCBjb3VsZCBub3QgYmUgcGVyZm9ybWVkIG9uIHRoZSByZXNvdXJjZSBiZWNhdXNlIHRoZSBzZXJ2ZXIgaXMgdW5hYmxlIHRvIHN0b3JlIHRoZSByZXByZXNlbnRhdGlvbiBuZWVkZWQgdG8gc3VjY2Vzc2Z1bGx5IGNvbXBsZXRlIHRoZSByZXF1ZXN0LlxcXCInLFxyXG5cdFx0J3NwZWNfdGl0bGUnOiAnUkZDNTIxOCMxMC42JyxcclxuXHRcdCdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjMjUxOCNzZWN0aW9uLTEwLjYnXHJcblx0fSxcclxuXHQnNTExJzoge1xyXG5cdFx0J2NvZGUnOiA1MTEsXHJcblx0XHQndGV4dCc6ICdOZXR3b3JrIEF1dGhlbnRpY2F0aW9uIFJlcXVpcmVkJyxcclxuXHRcdCdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIGNsaWVudCBuZWVkcyB0byBhdXRoZW50aWNhdGUgdG8gZ2FpbiBuZXR3b3JrIGFjY2Vzcy5cXFwiJyxcclxuXHRcdCdzcGVjX3RpdGxlJzogJ1JGQzY1ODUjNicsXHJcblx0XHQnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzY1ODUjc2VjdGlvbi02J1xyXG5cdH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiBnZXQgdGhlIHN0YXR1cyB0ZXh0IGZyb20gU3RhdHVzQ29kZVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0YXR1c1RleHQoc3RhdHVzOiBudW1iZXIpIHtcclxuXHRyZXR1cm4gU1RBVFVTX0NPREVfSU5GT1tzdGF0dXNdLnRleHQgfHwgJ1Vua25vd24gU3RhdHVzJztcclxufVxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgdGhlIEh0dHAgU3RhdHVzIENvZGUgaXMgMjAwLTI5OSAoc3VjY2VzcylcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1N1Y2Nlc3Moc3RhdHVzOiBudW1iZXIpOiBib29sZWFuIHtcclxuXHRyZXR1cm4gc3RhdHVzID49IDIwMCAmJiBzdGF0dXMgPCAzMDA7XHJcbn1cclxuIl19