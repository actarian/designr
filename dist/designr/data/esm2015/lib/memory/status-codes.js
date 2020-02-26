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
 */
export function getStatusText(status) {
    return STATUS_CODE_INFO[status].text || 'Unknown Status';
}
/**
 * Returns true if the the Http Status Code is 200-299 (success)
 */
export function isSuccess(status) {
    return status >= 200 && status < 300;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdHVzLWNvZGVzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlc2lnbnIvZGF0YS8iLCJzb3VyY2VzIjpbImxpYi9tZW1vcnkvc3RhdHVzLWNvZGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sQ0FBQyxNQUFNLFdBQVcsR0FBRztJQUMxQixRQUFRLEVBQUUsR0FBRztJQUNiLG1CQUFtQixFQUFFLEdBQUc7SUFDeEIsRUFBRSxFQUFFLEdBQUc7SUFDUCxPQUFPLEVBQUUsR0FBRztJQUNaLFFBQVEsRUFBRSxHQUFHO0lBQ2IsNkJBQTZCLEVBQUUsR0FBRztJQUNsQyxVQUFVLEVBQUUsR0FBRztJQUNmLGFBQWEsRUFBRSxHQUFHO0lBQ2xCLGVBQWUsRUFBRSxHQUFHO0lBQ3BCLGdCQUFnQixFQUFFLEdBQUc7SUFDckIsa0JBQWtCLEVBQUUsR0FBRztJQUN2QixLQUFLLEVBQUUsR0FBRztJQUNWLFNBQVMsRUFBRSxHQUFHO0lBQ2QsWUFBWSxFQUFFLEdBQUc7SUFDakIsU0FBUyxFQUFFLEdBQUc7SUFDZCxrQkFBa0IsRUFBRSxHQUFHO0lBQ3ZCLFdBQVcsRUFBRSxHQUFHO0lBQ2hCLFlBQVksRUFBRSxHQUFHO0lBQ2pCLGdCQUFnQixFQUFFLEdBQUc7SUFDckIsU0FBUyxFQUFFLEdBQUc7SUFDZCxTQUFTLEVBQUUsR0FBRztJQUNkLGtCQUFrQixFQUFFLEdBQUc7SUFDdkIsY0FBYyxFQUFFLEdBQUc7SUFDbkIsNkJBQTZCLEVBQUUsR0FBRztJQUNsQyxlQUFlLEVBQUUsR0FBRztJQUNwQixRQUFRLEVBQUUsR0FBRztJQUNiLElBQUksRUFBRSxHQUFHO0lBQ1QsZUFBZSxFQUFFLEdBQUc7SUFDcEIsbUJBQW1CLEVBQUUsR0FBRztJQUN4QixnQkFBZ0IsRUFBRSxHQUFHO0lBQ3JCLFlBQVksRUFBRSxHQUFHO0lBQ2pCLHNCQUFzQixFQUFFLEdBQUc7SUFDM0IscUJBQXFCLEVBQUUsR0FBRztJQUMxQixrQkFBa0IsRUFBRSxHQUFHO0lBQ3ZC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QUUsNkZBQTZGO1FBQzVHLFlBQVksRUFBRSxXQUFXO1FBQ3pCLFdBQVcsRUFBRSw4Q0FBOEM7S0FDM0Q7SUFDRCxLQUFLLEVBQUU7UUFDTixNQUFNLEVBQUUsR0FBRztRQUNYLE1BQU0sRUFBRSwrQkFBK0I7UUFDdkMsYUFBYSxFQUFFLGlGQUFpRjtRQUNoRyxZQUFZLEVBQUUsOENBQThDO1FBQzVELFdBQVcsRUFBRSx5RUFBeUU7S0FDdEY7SUFDRCxLQUFLLEVBQUU7UUFDTixNQUFNLEVBQUUsR0FBRztRQUNYLE1BQU0sRUFBRSx5QkFBeUI7UUFDakMsYUFBYSxFQUFFLHdOQUF3TjtRQUN2TyxZQUFZLEVBQUUsYUFBYTtRQUMzQixXQUFXLEVBQUUsZ0RBQWdEO0tBQzdEO0lBQ0QsS0FBSyxFQUFFO1FBQ04sTUFBTSxFQUFFLEdBQUc7UUFDWCxNQUFNLEVBQUUsc0JBQXNCO1FBQzlCLGFBQWEsRUFBRSw0SkFBNEo7UUFDM0ssWUFBWSxFQUFFLGNBQWM7UUFDNUIsV0FBVyxFQUFFLGlEQUFpRDtLQUM5RDtJQUNELEtBQUssRUFBRTtRQUNOLE1BQU0sRUFBRSxHQUFHO1FBQ1gsTUFBTSxFQUFFLGlDQUFpQztRQUN6QyxhQUFhLEVBQUUsOERBQThEO1FBQzdFLFlBQVksRUFBRSxXQUFXO1FBQ3pCLFdBQVcsRUFBRSw4Q0FBOEM7S0FDM0Q7Q0FDRCxDQUFDO0FBRUY7O0dBRUc7QUFDSCxNQUFNLFVBQVUsYUFBYSxDQUFDLE1BQWM7SUFDM0MsT0FBTyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLElBQUksZ0JBQWdCLENBQUM7QUFDMUQsQ0FBQztBQUVEOztHQUVHO0FBQ0gsTUFBTSxVQUFVLFNBQVMsQ0FBQyxNQUFjO0lBQ3ZDLE9BQU8sTUFBTSxJQUFJLEdBQUcsSUFBSSxNQUFNLEdBQUcsR0FBRyxDQUFDO0FBQ3RDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgU1RBVFVTX0NPREUgPSB7XG5cdENPTlRJTlVFOiAxMDAsXG5cdFNXSVRDSElOR19QUk9UT0NPTFM6IDEwMSxcblx0T0s6IDIwMCxcblx0Q1JFQVRFRDogMjAxLFxuXHRBQ0NFUFRFRDogMjAyLFxuXHROT05fQVVUSE9SSVRBVElWRV9JTkZPUk1BVElPTjogMjAzLFxuXHROT19DT05URU5UOiAyMDQsXG5cdFJFU0VUX0NPTlRFTlQ6IDIwNSxcblx0UEFSVElBTF9DT05URU5UOiAyMDYsXG5cdE1VTFRJUExFX0NIT0lDRVM6IDMwMCxcblx0TU9WRURfUEVSTUFOVEVOVExZOiAzMDEsXG5cdEZPVU5EOiAzMDIsXG5cdFNFRV9PVEhFUjogMzAzLFxuXHROT1RfTU9ESUZJRUQ6IDMwNCxcblx0VVNFX1BST1hZOiAzMDUsXG5cdFRFTVBPUkFSWV9SRURJUkVDVDogMzA3LFxuXHRCQURfUkVRVUVTVDogNDAwLFxuXHRVTkFVVEhPUklaRUQ6IDQwMSxcblx0UEFZTUVOVF9SRVFVSVJFRDogNDAyLFxuXHRGT1JCSURERU46IDQwMyxcblx0Tk9UX0ZPVU5EOiA0MDQsXG5cdE1FVEhPRF9OT1RfQUxMT1dFRDogNDA1LFxuXHROT1RfQUNDRVBUQUJMRTogNDA2LFxuXHRQUk9YWV9BVVRIRU5USUNBVElPTl9SRVFVSVJFRDogNDA3LFxuXHRSRVFVRVNUX1RJTUVPVVQ6IDQwOCxcblx0Q09ORkxJQ1Q6IDQwOSxcblx0R09ORTogNDEwLFxuXHRMRU5HVEhfUkVRVUlSRUQ6IDQxMSxcblx0UFJFQ09ORElUSU9OX0ZBSUxFRDogNDEyLFxuXHRQQVlMT0FEX1RPX0xBUkdFOiA0MTMsXG5cdFVSSV9UT09fTE9ORzogNDE0LFxuXHRVTlNVUFBPUlRFRF9NRURJQV9UWVBFOiA0MTUsXG5cdFJBTkdFX05PVF9TQVRJU0ZJQUJMRTogNDE2LFxuXHRFWFBFQ1RBVElPTl9GQUlMRUQ6IDQxNyxcblx0SU1fQV9URUFQT1Q6IDQxOCxcblx0VVBHUkFERV9SRVFVSVJFRDogNDI2LFxuXHRJTlRFUk5BTF9TRVJWRVJfRVJST1I6IDUwMCxcblx0Tk9UX0lNUExFTUVOVEVEOiA1MDEsXG5cdEJBRF9HQVRFV0FZOiA1MDIsXG5cdFNFUlZJQ0VfVU5BVkFJTEFCTEU6IDUwMyxcblx0R0FURVdBWV9USU1FT1VUOiA1MDQsXG5cdEhUVFBfVkVSU0lPTl9OT1RfU1VQUE9SVEVEOiA1MDUsXG5cdFBST0NFU1NJTkc6IDEwMixcblx0TVVMVElfU1RBVFVTOiAyMDcsXG5cdElNX1VTRUQ6IDIyNixcblx0UEVSTUFORU5UX1JFRElSRUNUOiAzMDgsXG5cdFVOUFJPQ0VTU0FCTEVfRU5UUlk6IDQyMixcblx0TE9DS0VEOiA0MjMsXG5cdEZBSUxFRF9ERVBFTkRFTkNZOiA0MjQsXG5cdFBSRUNPTkRJVElPTl9SRVFVSVJFRDogNDI4LFxuXHRUT09fTUFOWV9SRVFVRVNUUzogNDI5LFxuXHRSRVFVRVNUX0hFQURFUl9GSUVMRFNfVE9PX0xBUkdFOiA0MzEsXG5cdFVOQVZBSUxBQkxFX0ZPUl9MRUdBTF9SRUFTT05TOiA0NTEsXG5cdFZBUklBTlRfQUxTT19ORUdPVElBVEVTOiA1MDYsXG5cdElOU1VGRklDSUVOVF9TVE9SQUdFOiA1MDcsXG5cdE5FVFdPUktfQVVUSEVOVElDQVRJT05fUkVRVUlSRUQ6IDUxMVxufTtcblxuLyp0c2xpbnQ6ZGlzYWJsZTpxdW90ZW1hcmsgbWF4LWxpbmUtbGVuZ3RoIG9uZS1saW5lICovXG5leHBvcnQgY29uc3QgU1RBVFVTX0NPREVfSU5GTyA9IHtcblx0JzEwMCc6IHtcblx0XHQnY29kZSc6IDEwMCxcblx0XHQndGV4dCc6ICdDb250aW51ZScsXG5cdFx0J2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgaW5pdGlhbCBwYXJ0IG9mIGEgcmVxdWVzdCBoYXMgYmVlbiByZWNlaXZlZCBhbmQgaGFzIG5vdCB5ZXQgYmVlbiByZWplY3RlZCBieSB0aGUgc2VydmVyLlxcXCInLFxuXHRcdCdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi4yLjEnLFxuXHRcdCdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuMi4xJ1xuXHR9LFxuXHQnMTAxJzoge1xuXHRcdCdjb2RlJzogMTAxLFxuXHRcdCd0ZXh0JzogJ1N3aXRjaGluZyBQcm90b2NvbHMnLFxuXHRcdCdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHNlcnZlciB1bmRlcnN0YW5kcyBhbmQgaXMgd2lsbGluZyB0byBjb21wbHkgd2l0aCB0aGUgY2xpZW50XFwncyByZXF1ZXN0LCB2aWEgdGhlIFVwZ3JhZGUgaGVhZGVyIGZpZWxkLCBmb3IgYSBjaGFuZ2UgaW4gdGhlIGFwcGxpY2F0aW9uIHByb3RvY29sIGJlaW5nIHVzZWQgb24gdGhpcyBjb25uZWN0aW9uLlxcXCInLFxuXHRcdCdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi4yLjInLFxuXHRcdCdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuMi4yJ1xuXHR9LFxuXHQnMjAwJzoge1xuXHRcdCdjb2RlJzogMjAwLFxuXHRcdCd0ZXh0JzogJ09LJyxcblx0XHQnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSByZXF1ZXN0IGhhcyBzdWNjZWVkZWQuXFxcIicsXG5cdFx0J3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjMuMScsXG5cdFx0J3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi4zLjEnXG5cdH0sXG5cdCcyMDEnOiB7XG5cdFx0J2NvZGUnOiAyMDEsXG5cdFx0J3RleHQnOiAnQ3JlYXRlZCcsXG5cdFx0J2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgcmVxdWVzdCBoYXMgYmVlbiBmdWxmaWxsZWQgYW5kIGhhcyByZXN1bHRlZCBpbiBvbmUgb3IgbW9yZSBuZXcgcmVzb3VyY2VzIGJlaW5nIGNyZWF0ZWQuXFxcIicsXG5cdFx0J3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjMuMicsXG5cdFx0J3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi4zLjInXG5cdH0sXG5cdCcyMDInOiB7XG5cdFx0J2NvZGUnOiAyMDIsXG5cdFx0J3RleHQnOiAnQWNjZXB0ZWQnLFxuXHRcdCdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHJlcXVlc3QgaGFzIGJlZW4gYWNjZXB0ZWQgZm9yIHByb2Nlc3NpbmcsIGJ1dCB0aGUgcHJvY2Vzc2luZyBoYXMgbm90IGJlZW4gY29tcGxldGVkLlxcXCInLFxuXHRcdCdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi4zLjMnLFxuXHRcdCdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuMy4zJ1xuXHR9LFxuXHQnMjAzJzoge1xuXHRcdCdjb2RlJzogMjAzLFxuXHRcdCd0ZXh0JzogJ05vbi1BdXRob3JpdGF0aXZlIEluZm9ybWF0aW9uJyxcblx0XHQnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSByZXF1ZXN0IHdhcyBzdWNjZXNzZnVsIGJ1dCB0aGUgZW5jbG9zZWQgcGF5bG9hZCBoYXMgYmVlbiBtb2RpZmllZCBmcm9tIHRoYXQgb2YgdGhlIG9yaWdpbiBzZXJ2ZXJcXCdzIDIwMCAoT0spIHJlc3BvbnNlIGJ5IGEgdHJhbnNmb3JtaW5nIHByb3h5LlxcXCInLFxuXHRcdCdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi4zLjQnLFxuXHRcdCdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuMy40J1xuXHR9LFxuXHQnMjA0Jzoge1xuXHRcdCdjb2RlJzogMjA0LFxuXHRcdCd0ZXh0JzogJ05vIENvbnRlbnQnLFxuXHRcdCdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHNlcnZlciBoYXMgc3VjY2Vzc2Z1bGx5IGZ1bGZpbGxlZCB0aGUgcmVxdWVzdCBhbmQgdGhhdCB0aGVyZSBpcyBubyBhZGRpdGlvbmFsIGNvbnRlbnQgdG8gc2VuZCBpbiB0aGUgcmVzcG9uc2UgcGF5bG9hZCBib2R5LlxcXCInLFxuXHRcdCdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi4zLjUnLFxuXHRcdCdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuMy41J1xuXHR9LFxuXHQnMjA1Jzoge1xuXHRcdCdjb2RlJzogMjA1LFxuXHRcdCd0ZXh0JzogJ1Jlc2V0IENvbnRlbnQnLFxuXHRcdCdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHNlcnZlciBoYXMgZnVsZmlsbGVkIHRoZSByZXF1ZXN0IGFuZCBkZXNpcmVzIHRoYXQgdGhlIHVzZXIgYWdlbnQgcmVzZXQgdGhlIFxcXCJkb2N1bWVudCB2aWV3XFxcIiwgd2hpY2ggY2F1c2VkIHRoZSByZXF1ZXN0IHRvIGJlIHNlbnQsIHRvIGl0cyBvcmlnaW5hbCBzdGF0ZSBhcyByZWNlaXZlZCBmcm9tIHRoZSBvcmlnaW4gc2VydmVyLlxcXCInLFxuXHRcdCdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi4zLjYnLFxuXHRcdCdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuMy42J1xuXHR9LFxuXHQnMjA2Jzoge1xuXHRcdCdjb2RlJzogMjA2LFxuXHRcdCd0ZXh0JzogJ1BhcnRpYWwgQ29udGVudCcsXG5cdFx0J2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgc2VydmVyIGlzIHN1Y2Nlc3NmdWxseSBmdWxmaWxsaW5nIGEgcmFuZ2UgcmVxdWVzdCBmb3IgdGhlIHRhcmdldCByZXNvdXJjZSBieSB0cmFuc2ZlcnJpbmcgb25lIG9yIG1vcmUgcGFydHMgb2YgdGhlIHNlbGVjdGVkIHJlcHJlc2VudGF0aW9uIHRoYXQgY29ycmVzcG9uZCB0byB0aGUgc2F0aXNmaWFibGUgcmFuZ2VzIGZvdW5kIGluIHRoZSByZXF1ZXN0c1xcJ3MgUmFuZ2UgaGVhZGVyIGZpZWxkLlxcXCInLFxuXHRcdCdzcGVjX3RpdGxlJzogJ1JGQzcyMzMjNC4xJyxcblx0XHQnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzMjc2VjdGlvbi00LjEnXG5cdH0sXG5cdCczMDAnOiB7XG5cdFx0J2NvZGUnOiAzMDAsXG5cdFx0J3RleHQnOiAnTXVsdGlwbGUgQ2hvaWNlcycsXG5cdFx0J2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgdGFyZ2V0IHJlc291cmNlIGhhcyBtb3JlIHRoYW4gb25lIHJlcHJlc2VudGF0aW9uLCBlYWNoIHdpdGggaXRzIG93biBtb3JlIHNwZWNpZmljIGlkZW50aWZpZXIsIGFuZCBpbmZvcm1hdGlvbiBhYm91dCB0aGUgYWx0ZXJuYXRpdmVzIGlzIGJlaW5nIHByb3ZpZGVkIHNvIHRoYXQgdGhlIHVzZXIgKG9yIHVzZXIgYWdlbnQpIGNhbiBzZWxlY3QgYSBwcmVmZXJyZWQgcmVwcmVzZW50YXRpb24gYnkgcmVkaXJlY3RpbmcgaXRzIHJlcXVlc3QgdG8gb25lIG9yIG1vcmUgb2YgdGhvc2UgaWRlbnRpZmllcnMuXFxcIicsXG5cdFx0J3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjQuMScsXG5cdFx0J3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi40LjEnXG5cdH0sXG5cdCczMDEnOiB7XG5cdFx0J2NvZGUnOiAzMDEsXG5cdFx0J3RleHQnOiAnTW92ZWQgUGVybWFuZW50bHknLFxuXHRcdCdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHRhcmdldCByZXNvdXJjZSBoYXMgYmVlbiBhc3NpZ25lZCBhIG5ldyBwZXJtYW5lbnQgVVJJIGFuZCBhbnkgZnV0dXJlIHJlZmVyZW5jZXMgdG8gdGhpcyByZXNvdXJjZSBvdWdodCB0byB1c2Ugb25lIG9mIHRoZSBlbmNsb3NlZCBVUklzLlxcXCInLFxuXHRcdCdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi40LjInLFxuXHRcdCdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNC4yJ1xuXHR9LFxuXHQnMzAyJzoge1xuXHRcdCdjb2RlJzogMzAyLFxuXHRcdCd0ZXh0JzogJ0ZvdW5kJyxcblx0XHQnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSB0YXJnZXQgcmVzb3VyY2UgcmVzaWRlcyB0ZW1wb3JhcmlseSB1bmRlciBhIGRpZmZlcmVudCBVUkkuXFxcIicsXG5cdFx0J3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjQuMycsXG5cdFx0J3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi40LjMnXG5cdH0sXG5cdCczMDMnOiB7XG5cdFx0J2NvZGUnOiAzMDMsXG5cdFx0J3RleHQnOiAnU2VlIE90aGVyJyxcblx0XHQnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSBzZXJ2ZXIgaXMgcmVkaXJlY3RpbmcgdGhlIHVzZXIgYWdlbnQgdG8gYSBkaWZmZXJlbnQgcmVzb3VyY2UsIGFzIGluZGljYXRlZCBieSBhIFVSSSBpbiB0aGUgTG9jYXRpb24gaGVhZGVyIGZpZWxkLCB0aGF0IGlzIGludGVuZGVkIHRvIHByb3ZpZGUgYW4gaW5kaXJlY3QgcmVzcG9uc2UgdG8gdGhlIG9yaWdpbmFsIHJlcXVlc3QuXFxcIicsXG5cdFx0J3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjQuNCcsXG5cdFx0J3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi40LjQnXG5cdH0sXG5cdCczMDQnOiB7XG5cdFx0J2NvZGUnOiAzMDQsXG5cdFx0J3RleHQnOiAnTm90IE1vZGlmaWVkJyxcblx0XHQnZGVzY3JpcHRpb24nOiAnXFxcIkEgY29uZGl0aW9uYWwgR0VUIHJlcXVlc3QgaGFzIGJlZW4gcmVjZWl2ZWQgYW5kIHdvdWxkIGhhdmUgcmVzdWx0ZWQgaW4gYSAyMDAgKE9LKSByZXNwb25zZSBpZiBpdCB3ZXJlIG5vdCBmb3IgdGhlIGZhY3QgdGhhdCB0aGUgY29uZGl0aW9uIGhhcyBldmFsdWF0ZWQgdG8gZmFsc2UuXFxcIicsXG5cdFx0J3NwZWNfdGl0bGUnOiAnUkZDNzIzMiM0LjEnLFxuXHRcdCdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMiNzZWN0aW9uLTQuMSdcblx0fSxcblx0JzMwNSc6IHtcblx0XHQnY29kZSc6IDMwNSxcblx0XHQndGV4dCc6ICdVc2UgUHJveHknLFxuXHRcdCdkZXNjcmlwdGlvbic6ICcqZGVwcmVjYXRlZConLFxuXHRcdCdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi40LjUnLFxuXHRcdCdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNC41J1xuXHR9LFxuXHQnMzA3Jzoge1xuXHRcdCdjb2RlJzogMzA3LFxuXHRcdCd0ZXh0JzogJ1RlbXBvcmFyeSBSZWRpcmVjdCcsXG5cdFx0J2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgdGFyZ2V0IHJlc291cmNlIHJlc2lkZXMgdGVtcG9yYXJpbHkgdW5kZXIgYSBkaWZmZXJlbnQgVVJJIGFuZCB0aGUgdXNlciBhZ2VudCBNVVNUIE5PVCBjaGFuZ2UgdGhlIHJlcXVlc3QgbWV0aG9kIGlmIGl0IHBlcmZvcm1zIGFuIGF1dG9tYXRpYyByZWRpcmVjdGlvbiB0byB0aGF0IFVSSS5cXFwiJyxcblx0XHQnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuNC43Jyxcblx0XHQnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjQuNydcblx0fSxcblx0JzQwMCc6IHtcblx0XHQnY29kZSc6IDQwMCxcblx0XHQndGV4dCc6ICdCYWQgUmVxdWVzdCcsXG5cdFx0J2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgc2VydmVyIGNhbm5vdCBvciB3aWxsIG5vdCBwcm9jZXNzIHRoZSByZXF1ZXN0IGJlY2F1c2UgdGhlIHJlY2VpdmVkIHN5bnRheCBpcyBpbnZhbGlkLCBub25zZW5zaWNhbCwgb3IgZXhjZWVkcyBzb21lIGxpbWl0YXRpb24gb24gd2hhdCB0aGUgc2VydmVyIGlzIHdpbGxpbmcgdG8gcHJvY2Vzcy5cXFwiJyxcblx0XHQnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuNS4xJyxcblx0XHQnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjUuMSdcblx0fSxcblx0JzQwMSc6IHtcblx0XHQnY29kZSc6IDQwMSxcblx0XHQndGV4dCc6ICdVbmF1dGhvcml6ZWQnLFxuXHRcdCdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHJlcXVlc3QgaGFzIG5vdCBiZWVuIGFwcGxpZWQgYmVjYXVzZSBpdCBsYWNrcyB2YWxpZCBhdXRoZW50aWNhdGlvbiBjcmVkZW50aWFscyBmb3IgdGhlIHRhcmdldCByZXNvdXJjZS5cXFwiJyxcblx0XHQnc3BlY190aXRsZSc6ICdSRkM3MjM1IzYuMy4xJyxcblx0XHQnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzUjc2VjdGlvbi0zLjEnXG5cdH0sXG5cdCc0MDInOiB7XG5cdFx0J2NvZGUnOiA0MDIsXG5cdFx0J3RleHQnOiAnUGF5bWVudCBSZXF1aXJlZCcsXG5cdFx0J2Rlc2NyaXB0aW9uJzogJypyZXNlcnZlZConLFxuXHRcdCdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi41LjInLFxuXHRcdCdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNS4yJ1xuXHR9LFxuXHQnNDAzJzoge1xuXHRcdCdjb2RlJzogNDAzLFxuXHRcdCd0ZXh0JzogJ0ZvcmJpZGRlbicsXG5cdFx0J2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgc2VydmVyIHVuZGVyc3Rvb2QgdGhlIHJlcXVlc3QgYnV0IHJlZnVzZXMgdG8gYXV0aG9yaXplIGl0LlxcXCInLFxuXHRcdCdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi41LjMnLFxuXHRcdCdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNS4zJ1xuXHR9LFxuXHQnNDA0Jzoge1xuXHRcdCdjb2RlJzogNDA0LFxuXHRcdCd0ZXh0JzogJ05vdCBGb3VuZCcsXG5cdFx0J2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgb3JpZ2luIHNlcnZlciBkaWQgbm90IGZpbmQgYSBjdXJyZW50IHJlcHJlc2VudGF0aW9uIGZvciB0aGUgdGFyZ2V0IHJlc291cmNlIG9yIGlzIG5vdCB3aWxsaW5nIHRvIGRpc2Nsb3NlIHRoYXQgb25lIGV4aXN0cy5cXFwiJyxcblx0XHQnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuNS40Jyxcblx0XHQnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjUuNCdcblx0fSxcblx0JzQwNSc6IHtcblx0XHQnY29kZSc6IDQwNSxcblx0XHQndGV4dCc6ICdNZXRob2QgTm90IEFsbG93ZWQnLFxuXHRcdCdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIG1ldGhvZCBzcGVjaWZpZWQgaW4gdGhlIHJlcXVlc3QtbGluZSBpcyBrbm93biBieSB0aGUgb3JpZ2luIHNlcnZlciBidXQgbm90IHN1cHBvcnRlZCBieSB0aGUgdGFyZ2V0IHJlc291cmNlLlxcXCInLFxuXHRcdCdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi41LjUnLFxuXHRcdCdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNS41J1xuXHR9LFxuXHQnNDA2Jzoge1xuXHRcdCdjb2RlJzogNDA2LFxuXHRcdCd0ZXh0JzogJ05vdCBBY2NlcHRhYmxlJyxcblx0XHQnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSB0YXJnZXQgcmVzb3VyY2UgZG9lcyBub3QgaGF2ZSBhIGN1cnJlbnQgcmVwcmVzZW50YXRpb24gdGhhdCB3b3VsZCBiZSBhY2NlcHRhYmxlIHRvIHRoZSB1c2VyIGFnZW50LCBhY2NvcmRpbmcgdG8gdGhlIHByb2FjdGl2ZSBuZWdvdGlhdGlvbiBoZWFkZXIgZmllbGRzIHJlY2VpdmVkIGluIHRoZSByZXF1ZXN0LCBhbmQgdGhlIHNlcnZlciBpcyB1bndpbGxpbmcgdG8gc3VwcGx5IGEgZGVmYXVsdCByZXByZXNlbnRhdGlvbi5cXFwiJyxcblx0XHQnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuNS42Jyxcblx0XHQnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjUuNidcblx0fSxcblx0JzQwNyc6IHtcblx0XHQnY29kZSc6IDQwNyxcblx0XHQndGV4dCc6ICdQcm94eSBBdXRoZW50aWNhdGlvbiBSZXF1aXJlZCcsXG5cdFx0J2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgY2xpZW50IG5lZWRzIHRvIGF1dGhlbnRpY2F0ZSBpdHNlbGYgaW4gb3JkZXIgdG8gdXNlIGEgcHJveHkuXFxcIicsXG5cdFx0J3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjMuMicsXG5cdFx0J3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi4zLjInXG5cdH0sXG5cdCc0MDgnOiB7XG5cdFx0J2NvZGUnOiA0MDgsXG5cdFx0J3RleHQnOiAnUmVxdWVzdCBUaW1lb3V0Jyxcblx0XHQnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSBzZXJ2ZXIgZGlkIG5vdCByZWNlaXZlIGEgY29tcGxldGUgcmVxdWVzdCBtZXNzYWdlIHdpdGhpbiB0aGUgdGltZSB0aGF0IGl0IHdhcyBwcmVwYXJlZCB0byB3YWl0LlxcXCInLFxuXHRcdCdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi41LjcnLFxuXHRcdCdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNS43J1xuXHR9LFxuXHQnNDA5Jzoge1xuXHRcdCdjb2RlJzogNDA5LFxuXHRcdCd0ZXh0JzogJ0NvbmZsaWN0Jyxcblx0XHQnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSByZXF1ZXN0IGNvdWxkIG5vdCBiZSBjb21wbGV0ZWQgZHVlIHRvIGEgY29uZmxpY3Qgd2l0aCB0aGUgY3VycmVudCBzdGF0ZSBvZiB0aGUgcmVzb3VyY2UuXFxcIicsXG5cdFx0J3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjUuOCcsXG5cdFx0J3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi41LjgnXG5cdH0sXG5cdCc0MTAnOiB7XG5cdFx0J2NvZGUnOiA0MTAsXG5cdFx0J3RleHQnOiAnR29uZScsXG5cdFx0J2Rlc2NyaXB0aW9uJzogJ1xcXCJBY2Nlc3MgdG8gdGhlIHRhcmdldCByZXNvdXJjZSBpcyBubyBsb25nZXIgYXZhaWxhYmxlIGF0IHRoZSBvcmlnaW4gc2VydmVyIGFuZCB0aGF0IHRoaXMgY29uZGl0aW9uIGlzIGxpa2VseSB0byBiZSBwZXJtYW5lbnQuXFxcIicsXG5cdFx0J3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjUuOScsXG5cdFx0J3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi41LjknXG5cdH0sXG5cdCc0MTEnOiB7XG5cdFx0J2NvZGUnOiA0MTEsXG5cdFx0J3RleHQnOiAnTGVuZ3RoIFJlcXVpcmVkJyxcblx0XHQnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSBzZXJ2ZXIgcmVmdXNlcyB0byBhY2NlcHQgdGhlIHJlcXVlc3Qgd2l0aG91dCBhIGRlZmluZWQgQ29udGVudC1MZW5ndGguXFxcIicsXG5cdFx0J3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjUuMTAnLFxuXHRcdCdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNS4xMCdcblx0fSxcblx0JzQxMic6IHtcblx0XHQnY29kZSc6IDQxMixcblx0XHQndGV4dCc6ICdQcmVjb25kaXRpb24gRmFpbGVkJyxcblx0XHQnZGVzY3JpcHRpb24nOiAnXFxcIk9uZSBvciBtb3JlIHByZWNvbmRpdGlvbnMgZ2l2ZW4gaW4gdGhlIHJlcXVlc3QgaGVhZGVyIGZpZWxkcyBldmFsdWF0ZWQgdG8gZmFsc2Ugd2hlbiB0ZXN0ZWQgb24gdGhlIHNlcnZlci5cXFwiJyxcblx0XHQnc3BlY190aXRsZSc6ICdSRkM3MjMyIzQuMicsXG5cdFx0J3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMyI3NlY3Rpb24tNC4yJ1xuXHR9LFxuXHQnNDEzJzoge1xuXHRcdCdjb2RlJzogNDEzLFxuXHRcdCd0ZXh0JzogJ1BheWxvYWQgVG9vIExhcmdlJyxcblx0XHQnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSBzZXJ2ZXIgaXMgcmVmdXNpbmcgdG8gcHJvY2VzcyBhIHJlcXVlc3QgYmVjYXVzZSB0aGUgcmVxdWVzdCBwYXlsb2FkIGlzIGxhcmdlciB0aGFuIHRoZSBzZXJ2ZXIgaXMgd2lsbGluZyBvciBhYmxlIHRvIHByb2Nlc3MuXFxcIicsXG5cdFx0J3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjUuMTEnLFxuXHRcdCdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNS4xMSdcblx0fSxcblx0JzQxNCc6IHtcblx0XHQnY29kZSc6IDQxNCxcblx0XHQndGV4dCc6ICdVUkkgVG9vIExvbmcnLFxuXHRcdCdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHNlcnZlciBpcyByZWZ1c2luZyB0byBzZXJ2aWNlIHRoZSByZXF1ZXN0IGJlY2F1c2UgdGhlIHJlcXVlc3QtdGFyZ2V0IGlzIGxvbmdlciB0aGFuIHRoZSBzZXJ2ZXIgaXMgd2lsbGluZyB0byBpbnRlcnByZXQuXFxcIicsXG5cdFx0J3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjUuMTInLFxuXHRcdCdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNS4xMidcblx0fSxcblx0JzQxNSc6IHtcblx0XHQnY29kZSc6IDQxNSxcblx0XHQndGV4dCc6ICdVbnN1cHBvcnRlZCBNZWRpYSBUeXBlJyxcblx0XHQnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSBvcmlnaW4gc2VydmVyIGlzIHJlZnVzaW5nIHRvIHNlcnZpY2UgdGhlIHJlcXVlc3QgYmVjYXVzZSB0aGUgcGF5bG9hZCBpcyBpbiBhIGZvcm1hdCBub3Qgc3VwcG9ydGVkIGJ5IHRoZSB0YXJnZXQgcmVzb3VyY2UgZm9yIHRoaXMgbWV0aG9kLlxcXCInLFxuXHRcdCdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi41LjEzJyxcblx0XHQnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjUuMTMnXG5cdH0sXG5cdCc0MTYnOiB7XG5cdFx0J2NvZGUnOiA0MTYsXG5cdFx0J3RleHQnOiAnUmFuZ2UgTm90IFNhdGlzZmlhYmxlJyxcblx0XHQnZGVzY3JpcHRpb24nOiAnXFxcIk5vbmUgb2YgdGhlIHJhbmdlcyBpbiB0aGUgcmVxdWVzdFxcJ3MgUmFuZ2UgaGVhZGVyIGZpZWxkIG92ZXJsYXAgdGhlIGN1cnJlbnQgZXh0ZW50IG9mIHRoZSBzZWxlY3RlZCByZXNvdXJjZSBvciB0aGF0IHRoZSBzZXQgb2YgcmFuZ2VzIHJlcXVlc3RlZCBoYXMgYmVlbiByZWplY3RlZCBkdWUgdG8gaW52YWxpZCByYW5nZXMgb3IgYW4gZXhjZXNzaXZlIHJlcXVlc3Qgb2Ygc21hbGwgb3Igb3ZlcmxhcHBpbmcgcmFuZ2VzLlxcXCInLFxuXHRcdCdzcGVjX3RpdGxlJzogJ1JGQzcyMzMjNC40Jyxcblx0XHQnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzMjc2VjdGlvbi00LjQnXG5cdH0sXG5cdCc0MTcnOiB7XG5cdFx0J2NvZGUnOiA0MTcsXG5cdFx0J3RleHQnOiAnRXhwZWN0YXRpb24gRmFpbGVkJyxcblx0XHQnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSBleHBlY3RhdGlvbiBnaXZlbiBpbiB0aGUgcmVxdWVzdFxcJ3MgRXhwZWN0IGhlYWRlciBmaWVsZCBjb3VsZCBub3QgYmUgbWV0IGJ5IGF0IGxlYXN0IG9uZSBvZiB0aGUgaW5ib3VuZCBzZXJ2ZXJzLlxcXCInLFxuXHRcdCdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi41LjE0Jyxcblx0XHQnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjUuMTQnXG5cdH0sXG5cdCc0MTgnOiB7XG5cdFx0J2NvZGUnOiA0MTgsXG5cdFx0J3RleHQnOiAnSVxcJ20gYSB0ZWFwb3QnLFxuXHRcdCdkZXNjcmlwdGlvbic6ICdcXFwiMTk4OCBBcHJpbCBGb29scyBKb2tlLiBSZXR1cm5lZCBieSB0ZWEgcG90cyByZXF1ZXN0ZWQgdG8gYnJldyBjb2ZmZWUuXFxcIicsXG5cdFx0J3NwZWNfdGl0bGUnOiAnUkZDIDIzMjQnLFxuXHRcdCdzcGVjX2hyZWYnOiAnaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzIzMjQnXG5cdH0sXG5cdCc0MjYnOiB7XG5cdFx0J2NvZGUnOiA0MjYsXG5cdFx0J3RleHQnOiAnVXBncmFkZSBSZXF1aXJlZCcsXG5cdFx0J2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgc2VydmVyIHJlZnVzZXMgdG8gcGVyZm9ybSB0aGUgcmVxdWVzdCB1c2luZyB0aGUgY3VycmVudCBwcm90b2NvbCBidXQgbWlnaHQgYmUgd2lsbGluZyB0byBkbyBzbyBhZnRlciB0aGUgY2xpZW50IHVwZ3JhZGVzIHRvIGEgZGlmZmVyZW50IHByb3RvY29sLlxcXCInLFxuXHRcdCdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi41LjE1Jyxcblx0XHQnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjUuMTUnXG5cdH0sXG5cdCc1MDAnOiB7XG5cdFx0J2NvZGUnOiA1MDAsXG5cdFx0J3RleHQnOiAnSW50ZXJuYWwgU2VydmVyIEVycm9yJyxcblx0XHQnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSBzZXJ2ZXIgZW5jb3VudGVyZWQgYW4gdW5leHBlY3RlZCBjb25kaXRpb24gdGhhdCBwcmV2ZW50ZWQgaXQgZnJvbSBmdWxmaWxsaW5nIHRoZSByZXF1ZXN0LlxcXCInLFxuXHRcdCdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi42LjEnLFxuXHRcdCdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNi4xJ1xuXHR9LFxuXHQnNTAxJzoge1xuXHRcdCdjb2RlJzogNTAxLFxuXHRcdCd0ZXh0JzogJ05vdCBJbXBsZW1lbnRlZCcsXG5cdFx0J2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgc2VydmVyIGRvZXMgbm90IHN1cHBvcnQgdGhlIGZ1bmN0aW9uYWxpdHkgcmVxdWlyZWQgdG8gZnVsZmlsbCB0aGUgcmVxdWVzdC5cXFwiJyxcblx0XHQnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuNi4yJyxcblx0XHQnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjYuMidcblx0fSxcblx0JzUwMic6IHtcblx0XHQnY29kZSc6IDUwMixcblx0XHQndGV4dCc6ICdCYWQgR2F0ZXdheScsXG5cdFx0J2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgc2VydmVyLCB3aGlsZSBhY3RpbmcgYXMgYSBnYXRld2F5IG9yIHByb3h5LCByZWNlaXZlZCBhbiBpbnZhbGlkIHJlc3BvbnNlIGZyb20gYW4gaW5ib3VuZCBzZXJ2ZXIgaXQgYWNjZXNzZWQgd2hpbGUgYXR0ZW1wdGluZyB0byBmdWxmaWxsIHRoZSByZXF1ZXN0LlxcXCInLFxuXHRcdCdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi42LjMnLFxuXHRcdCdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNi4zJ1xuXHR9LFxuXHQnNTAzJzoge1xuXHRcdCdjb2RlJzogNTAzLFxuXHRcdCd0ZXh0JzogJ1NlcnZpY2UgVW5hdmFpbGFibGUnLFxuXHRcdCdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHNlcnZlciBpcyBjdXJyZW50bHkgdW5hYmxlIHRvIGhhbmRsZSB0aGUgcmVxdWVzdCBkdWUgdG8gYSB0ZW1wb3Jhcnkgb3ZlcmxvYWQgb3Igc2NoZWR1bGVkIG1haW50ZW5hbmNlLCB3aGljaCB3aWxsIGxpa2VseSBiZSBhbGxldmlhdGVkIGFmdGVyIHNvbWUgZGVsYXkuXFxcIicsXG5cdFx0J3NwZWNfdGl0bGUnOiAnUkZDNzIzMSM2LjYuNCcsXG5cdFx0J3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMxI3NlY3Rpb24tNi42LjQnXG5cdH0sXG5cdCc1MDQnOiB7XG5cdFx0J2NvZGUnOiA1MDQsXG5cdFx0J3RleHQnOiAnR2F0ZXdheSBUaW1lLW91dCcsXG5cdFx0J2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgc2VydmVyLCB3aGlsZSBhY3RpbmcgYXMgYSBnYXRld2F5IG9yIHByb3h5LCBkaWQgbm90IHJlY2VpdmUgYSB0aW1lbHkgcmVzcG9uc2UgZnJvbSBhbiB1cHN0cmVhbSBzZXJ2ZXIgaXQgbmVlZGVkIHRvIGFjY2VzcyBpbiBvcmRlciB0byBjb21wbGV0ZSB0aGUgcmVxdWVzdC5cXFwiJyxcblx0XHQnc3BlY190aXRsZSc6ICdSRkM3MjMxIzYuNi41Jyxcblx0XHQnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzEjc2VjdGlvbi02LjYuNSdcblx0fSxcblx0JzUwNSc6IHtcblx0XHQnY29kZSc6IDUwNSxcblx0XHQndGV4dCc6ICdIVFRQIFZlcnNpb24gTm90IFN1cHBvcnRlZCcsXG5cdFx0J2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgc2VydmVyIGRvZXMgbm90IHN1cHBvcnQsIG9yIHJlZnVzZXMgdG8gc3VwcG9ydCwgdGhlIHByb3RvY29sIHZlcnNpb24gdGhhdCB3YXMgdXNlZCBpbiB0aGUgcmVxdWVzdCBtZXNzYWdlLlxcXCInLFxuXHRcdCdzcGVjX3RpdGxlJzogJ1JGQzcyMzEjNi42LjYnLFxuXHRcdCdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMSNzZWN0aW9uLTYuNi42J1xuXHR9LFxuXHQnMTAyJzoge1xuXHRcdCdjb2RlJzogMTAyLFxuXHRcdCd0ZXh0JzogJ1Byb2Nlc3NpbmcnLFxuXHRcdCdkZXNjcmlwdGlvbic6ICdcXFwiQW4gaW50ZXJpbSByZXNwb25zZSB0byBpbmZvcm0gdGhlIGNsaWVudCB0aGF0IHRoZSBzZXJ2ZXIgaGFzIGFjY2VwdGVkIHRoZSBjb21wbGV0ZSByZXF1ZXN0LCBidXQgaGFzIG5vdCB5ZXQgY29tcGxldGVkIGl0LlxcXCInLFxuXHRcdCdzcGVjX3RpdGxlJzogJ1JGQzUyMTgjMTAuMScsXG5cdFx0J3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMyNTE4I3NlY3Rpb24tMTAuMSdcblx0fSxcblx0JzIwNyc6IHtcblx0XHQnY29kZSc6IDIwNyxcblx0XHQndGV4dCc6ICdNdWx0aS1TdGF0dXMnLFxuXHRcdCdkZXNjcmlwdGlvbic6ICdcXFwiU3RhdHVzIGZvciBtdWx0aXBsZSBpbmRlcGVuZGVudCBvcGVyYXRpb25zLlxcXCInLFxuXHRcdCdzcGVjX3RpdGxlJzogJ1JGQzUyMTgjMTAuMicsXG5cdFx0J3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMyNTE4I3NlY3Rpb24tMTAuMidcblx0fSxcblx0JzIyNic6IHtcblx0XHQnY29kZSc6IDIyNixcblx0XHQndGV4dCc6ICdJTSBVc2VkJyxcblx0XHQnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSBzZXJ2ZXIgaGFzIGZ1bGZpbGxlZCBhIEdFVCByZXF1ZXN0IGZvciB0aGUgcmVzb3VyY2UsIGFuZCB0aGUgcmVzcG9uc2UgaXMgYSByZXByZXNlbnRhdGlvbiBvZiB0aGUgcmVzdWx0IG9mIG9uZSBvciBtb3JlIGluc3RhbmNlLW1hbmlwdWxhdGlvbnMgYXBwbGllZCB0byB0aGUgY3VycmVudCBpbnN0YW5jZS5cXFwiJyxcblx0XHQnc3BlY190aXRsZSc6ICdSRkMzMjI5IzEwLjQuMScsXG5cdFx0J3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMzMjI5I3NlY3Rpb24tMTAuNC4xJ1xuXHR9LFxuXHQnMzA4Jzoge1xuXHRcdCdjb2RlJzogMzA4LFxuXHRcdCd0ZXh0JzogJ1Blcm1hbmVudCBSZWRpcmVjdCcsXG5cdFx0J2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgdGFyZ2V0IHJlc291cmNlIGhhcyBiZWVuIGFzc2lnbmVkIGEgbmV3IHBlcm1hbmVudCBVUkkgYW5kIGFueSBmdXR1cmUgcmVmZXJlbmNlcyB0byB0aGlzIHJlc291cmNlIFNIT1VMRCB1c2Ugb25lIG9mIHRoZSByZXR1cm5lZCBVUklzLiBbLi4uXSBUaGlzIHN0YXR1cyBjb2RlIGlzIHNpbWlsYXIgdG8gMzAxIE1vdmVkIFBlcm1hbmVudGx5IChTZWN0aW9uIDcuMy4yIG9mIHJmYzcyMzEpLCBleGNlcHQgdGhhdCBpdCBkb2VzIG5vdCBhbGxvdyByZXdyaXRpbmcgdGhlIHJlcXVlc3QgbWV0aG9kIGZyb20gUE9TVCB0byBHRVQuXFxcIicsXG5cdFx0J3NwZWNfdGl0bGUnOiAnUkZDNzIzOCcsXG5cdFx0J3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjM4J1xuXHR9LFxuXHQnNDIyJzoge1xuXHRcdCdjb2RlJzogNDIyLFxuXHRcdCd0ZXh0JzogJ1VucHJvY2Vzc2FibGUgRW50aXR5Jyxcblx0XHQnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSBzZXJ2ZXIgdW5kZXJzdGFuZHMgdGhlIGNvbnRlbnQgdHlwZSBvZiB0aGUgcmVxdWVzdCBlbnRpdHkgKGhlbmNlIGEgNDE1KFVuc3VwcG9ydGVkIE1lZGlhIFR5cGUpIHN0YXR1cyBjb2RlIGlzIGluYXBwcm9wcmlhdGUpLCBhbmQgdGhlIHN5bnRheCBvZiB0aGUgcmVxdWVzdCBlbnRpdHkgaXMgY29ycmVjdCAodGh1cyBhIDQwMCAoQmFkIFJlcXVlc3QpIHN0YXR1cyBjb2RlIGlzIGluYXBwcm9wcmlhdGUpIGJ1dCB3YXMgdW5hYmxlIHRvIHByb2Nlc3MgdGhlIGNvbnRhaW5lZCBpbnN0cnVjdGlvbnMuXFxcIicsXG5cdFx0J3NwZWNfdGl0bGUnOiAnUkZDNTIxOCMxMC4zJyxcblx0XHQnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzI1MTgjc2VjdGlvbi0xMC4zJ1xuXHR9LFxuXHQnNDIzJzoge1xuXHRcdCdjb2RlJzogNDIzLFxuXHRcdCd0ZXh0JzogJ0xvY2tlZCcsXG5cdFx0J2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgc291cmNlIG9yIGRlc3RpbmF0aW9uIHJlc291cmNlIG9mIGEgbWV0aG9kIGlzIGxvY2tlZC5cXFwiJyxcblx0XHQnc3BlY190aXRsZSc6ICdSRkM1MjE4IzEwLjQnLFxuXHRcdCdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjMjUxOCNzZWN0aW9uLTEwLjQnXG5cdH0sXG5cdCc0MjQnOiB7XG5cdFx0J2NvZGUnOiA0MjQsXG5cdFx0J3RleHQnOiAnRmFpbGVkIERlcGVuZGVuY3knLFxuXHRcdCdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIG1ldGhvZCBjb3VsZCBub3QgYmUgcGVyZm9ybWVkIG9uIHRoZSByZXNvdXJjZSBiZWNhdXNlIHRoZSByZXF1ZXN0ZWQgYWN0aW9uIGRlcGVuZGVkIG9uIGFub3RoZXIgYWN0aW9uIGFuZCB0aGF0IGFjdGlvbiBmYWlsZWQuXFxcIicsXG5cdFx0J3NwZWNfdGl0bGUnOiAnUkZDNTIxOCMxMC41Jyxcblx0XHQnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzI1MTgjc2VjdGlvbi0xMC41J1xuXHR9LFxuXHQnNDI4Jzoge1xuXHRcdCdjb2RlJzogNDI4LFxuXHRcdCd0ZXh0JzogJ1ByZWNvbmRpdGlvbiBSZXF1aXJlZCcsXG5cdFx0J2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgb3JpZ2luIHNlcnZlciByZXF1aXJlcyB0aGUgcmVxdWVzdCB0byBiZSBjb25kaXRpb25hbC5cXFwiJyxcblx0XHQnc3BlY190aXRsZSc6ICdSRkM2NTg1IzMnLFxuXHRcdCdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNjU4NSNzZWN0aW9uLTMnXG5cdH0sXG5cdCc0MjknOiB7XG5cdFx0J2NvZGUnOiA0MjksXG5cdFx0J3RleHQnOiAnVG9vIE1hbnkgUmVxdWVzdHMnLFxuXHRcdCdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHVzZXIgaGFzIHNlbnQgdG9vIG1hbnkgcmVxdWVzdHMgaW4gYSBnaXZlbiBhbW91bnQgb2YgdGltZSAoXFxcInJhdGUgbGltaXRpbmdcXFwiKS5cXFwiJyxcblx0XHQnc3BlY190aXRsZSc6ICdSRkM2NTg1IzQnLFxuXHRcdCdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNjU4NSNzZWN0aW9uLTQnXG5cdH0sXG5cdCc0MzEnOiB7XG5cdFx0J2NvZGUnOiA0MzEsXG5cdFx0J3RleHQnOiAnUmVxdWVzdCBIZWFkZXIgRmllbGRzIFRvbyBMYXJnZScsXG5cdFx0J2Rlc2NyaXB0aW9uJzogJ1xcXCJUaGUgc2VydmVyIGlzIHVud2lsbGluZyB0byBwcm9jZXNzIHRoZSByZXF1ZXN0IGJlY2F1c2UgaXRzIGhlYWRlciBmaWVsZHMgYXJlIHRvbyBsYXJnZS5cXFwiJyxcblx0XHQnc3BlY190aXRsZSc6ICdSRkM2NTg1IzUnLFxuXHRcdCdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNjU4NSNzZWN0aW9uLTUnXG5cdH0sXG5cdCc0NTEnOiB7XG5cdFx0J2NvZGUnOiA0NTEsXG5cdFx0J3RleHQnOiAnVW5hdmFpbGFibGUgRm9yIExlZ2FsIFJlYXNvbnMnLFxuXHRcdCdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHNlcnZlciBpcyBkZW55aW5nIGFjY2VzcyB0byB0aGUgcmVzb3VyY2UgaW4gcmVzcG9uc2UgdG8gYSBsZWdhbCBkZW1hbmQuXFxcIicsXG5cdFx0J3NwZWNfdGl0bGUnOiAnZHJhZnQtaWV0Zi1odHRwYmlzLWxlZ2FsbHktcmVzdHJpY3RlZC1zdGF0dXMnLFxuXHRcdCdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvZHJhZnQtaWV0Zi1odHRwYmlzLWxlZ2FsbHktcmVzdHJpY3RlZC1zdGF0dXMnXG5cdH0sXG5cdCc1MDYnOiB7XG5cdFx0J2NvZGUnOiA1MDYsXG5cdFx0J3RleHQnOiAnVmFyaWFudCBBbHNvIE5lZ290aWF0ZXMnLFxuXHRcdCdkZXNjcmlwdGlvbic6ICdcXFwiVGhlIHNlcnZlciBoYXMgYW4gaW50ZXJuYWwgY29uZmlndXJhdGlvbiBlcnJvcjogdGhlIGNob3NlbiB2YXJpYW50IHJlc291cmNlIGlzIGNvbmZpZ3VyZWQgdG8gZW5nYWdlIGluIHRyYW5zcGFyZW50IGNvbnRlbnQgbmVnb3RpYXRpb24gaXRzZWxmLCBhbmQgaXMgdGhlcmVmb3JlIG5vdCBhIHByb3BlciBlbmQgcG9pbnQgaW4gdGhlIG5lZ290aWF0aW9uIHByb2Nlc3MuXFxcIicsXG5cdFx0J3NwZWNfdGl0bGUnOiAnUkZDMjI5NSM4LjEnLFxuXHRcdCdzcGVjX2hyZWYnOiAnaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjMjI5NSNzZWN0aW9uLTguMSdcblx0fSxcblx0JzUwNyc6IHtcblx0XHQnY29kZSc6IDUwNyxcblx0XHQndGV4dCc6ICdJbnN1ZmZpY2llbnQgU3RvcmFnZScsXG5cdFx0J2Rlc2NyaXB0aW9uJzogJ1xcVGhlIG1ldGhvZCBjb3VsZCBub3QgYmUgcGVyZm9ybWVkIG9uIHRoZSByZXNvdXJjZSBiZWNhdXNlIHRoZSBzZXJ2ZXIgaXMgdW5hYmxlIHRvIHN0b3JlIHRoZSByZXByZXNlbnRhdGlvbiBuZWVkZWQgdG8gc3VjY2Vzc2Z1bGx5IGNvbXBsZXRlIHRoZSByZXF1ZXN0LlxcXCInLFxuXHRcdCdzcGVjX3RpdGxlJzogJ1JGQzUyMTgjMTAuNicsXG5cdFx0J3NwZWNfaHJlZic6ICdodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMyNTE4I3NlY3Rpb24tMTAuNidcblx0fSxcblx0JzUxMSc6IHtcblx0XHQnY29kZSc6IDUxMSxcblx0XHQndGV4dCc6ICdOZXR3b3JrIEF1dGhlbnRpY2F0aW9uIFJlcXVpcmVkJyxcblx0XHQnZGVzY3JpcHRpb24nOiAnXFxcIlRoZSBjbGllbnQgbmVlZHMgdG8gYXV0aGVudGljYXRlIHRvIGdhaW4gbmV0d29yayBhY2Nlc3MuXFxcIicsXG5cdFx0J3NwZWNfdGl0bGUnOiAnUkZDNjU4NSM2Jyxcblx0XHQnc3BlY19ocmVmJzogJ2h0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzY1ODUjc2VjdGlvbi02J1xuXHR9XG59O1xuXG4vKipcbiAqIGdldCB0aGUgc3RhdHVzIHRleHQgZnJvbSBTdGF0dXNDb2RlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRTdGF0dXNUZXh0KHN0YXR1czogbnVtYmVyKSB7XG5cdHJldHVybiBTVEFUVVNfQ09ERV9JTkZPW3N0YXR1c10udGV4dCB8fCAnVW5rbm93biBTdGF0dXMnO1xufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgdGhlIEh0dHAgU3RhdHVzIENvZGUgaXMgMjAwLTI5OSAoc3VjY2VzcylcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzU3VjY2VzcyhzdGF0dXM6IG51bWJlcik6IGJvb2xlYW4ge1xuXHRyZXR1cm4gc3RhdHVzID49IDIwMCAmJiBzdGF0dXMgPCAzMDA7XG59XG4iXX0=