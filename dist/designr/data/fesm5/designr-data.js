import { InjectionToken, ɵɵinject, ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, Inject, ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵɵadvance, ɵɵtextInterpolate1, Component, ɵɵdefineNgModule, ɵɵdefineInjector, NgModule, ɵɵsetNgModuleScope, Optional, SkipSelf } from '@angular/core';
import { __spread } from 'tslib';
import { CommonModule } from '@angular/common';
import { HttpHeaders, HttpParams, HttpResponse, HttpXhrBackend, XhrFactory, HttpBackend, HttpClientModule } from '@angular/common/http';
import { CoreModule } from '@designr/core';
import { Observable, BehaviorSubject, from, of } from 'rxjs';
import { first, concatMap, map } from 'rxjs/operators';

var DATA_CONFIG = new InjectionToken('data.config');
var DataConfig = /** @class */ (function () {
    function DataConfig(options) {
        this.datas = {};
        // console.log('DataConfig', options);
        if (options) {
            this.datas = options.datas || {};
        }
    }
    return DataConfig;
}());

var STATUS_CODE = {
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
var STATUS_CODE_INFO = {
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
function getStatusText(status) {
    return STATUS_CODE_INFO[status].text || 'Unknown Status';
}
/**
 * Returns true if the the Http Status Code is 200-299 (success)
 */
function isSuccess(status) {
    return status >= 200 && status < 300;
}

var DataService = /** @class */ (function () {
    function DataService(config
    // @Inject(forwardRef(() => DataService)) public dataService: DataService
    // private dataService: DataService,
    ) {
        // console.log('DataService', config);
        config = config || {};
        this.config = new DataConfig(config);
    }
    DataService.prototype.createDb = function () {
        // console.log('DataService.createDb', this.config.datas);
        return this.config.datas || {};
    };
    DataService.prototype.parseRequestUrl = function (url, service) {
        // !!! REMAPPING
        /*
        if (this.dataService.config.memory && this.dataService.config.memory.remap) {
            Object.keys(this.dataService.config.memory.remap).forEach((k: string) => {
                url = url.replace(k, this.dataService.config.memory.remap[k]);
            });
        }
        */
        var parsed = service.parseRequestUrl(url);
        return parsed;
    };
    DataService.prototype.requestInterceptor = function (request, service) {
        // console.log('requestInterceptor', request);
        var body;
        if (request.method === 'post') {
            switch (request.collectionName) {
                case 'slug':
                    var mnemonics = request.body;
                    body = request.body.map(function (x) { return request.collection.find(function (c) { return c.mnemonic === x; }) || null; }).filter(function (x) { return x; });
                    // console.log(item);
                    return { headers: request.headers, body: service.bodify(body), status: STATUS_CODE.OK };
                    break;
                case 'label':
                    var ids = request.body.map(function (x) { return x.id; });
                    body = request.body.map(function (x) { return request.collection.find(function (c) { return c.id === x.id; }) || x; });
                    // console.log(item);
                    return { headers: request.headers, body: service.bodify(body), status: STATUS_CODE.OK };
                    break;
            }
        }
        return null;
    };
    DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(ɵɵinject(DATA_CONFIG)); };
    DataService.ɵprov = ɵɵdefineInjectable({ token: DataService, factory: DataService.ɵfac, providedIn: 'root' });
    return DataService;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(DataService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: DataConfig, decorators: [{
                type: Inject,
                args: [DATA_CONFIG]
            }] }]; }, null); })();

var DataModuleComponent = /** @class */ (function () {
    function DataModuleComponent() {
        this.version = '0.0.12';
    }
    DataModuleComponent.prototype.ngOnInit = function () {
    };
    DataModuleComponent.ɵfac = function DataModuleComponent_Factory(t) { return new (t || DataModuleComponent)(); };
    DataModuleComponent.ɵcmp = ɵɵdefineComponent({ type: DataModuleComponent, selectors: [["data-module"]], decls: 2, vars: 1, consts: [[1, "data-module"]], template: function DataModuleComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "span", 0);
            ɵɵtext(1);
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵadvance(1);
            ɵɵtextInterpolate1("data ", ctx.version, "");
        } }, encapsulation: 2 });
    return DataModuleComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(DataModuleComponent, [{
        type: Component,
        args: [{
                selector: 'data-module',
                template: "<span class=\"data-module\">data {{version}}</span>",
                styles: []
            }]
    }], function () { return []; }, null); })();

function delayResponse(response$, ms) {
    return new Observable(function (observer) {
        var complete = false;
        var next = false;
        var subscription = response$.subscribe(function (value) {
            next = true;
            setTimeout(function () {
                observer.next(value);
                if (complete) {
                    observer.complete();
                }
            }, ms);
        }, function (error) {
            setTimeout(function () {
                observer.error(error);
            }, ms);
        }, function () {
            complete = true;
            if (!next) {
                observer.complete();
            }
        });
        return function () {
            return subscription.unsubscribe();
        };
    });
}

/** Return information (UriInfo) about a URI  */
function parseUri(str) {
    // Adapted from parseuri package - http://blog.stevenlevithan.com/archives/parseuri
    // tslint:disable-next-line:max-line-length
    var URL_REGEX = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
    var m = URL_REGEX.exec(str);
    var uri = {
        source: '',
        protocol: '',
        authority: '',
        userInfo: '',
        user: '',
        password: '',
        host: '',
        port: '',
        relative: '',
        path: '',
        directory: '',
        file: '',
        query: '',
        anchor: ''
    };
    var keys = Object.keys(uri);
    var i = keys.length;
    while (i--) {
        uri[keys[i]] = m[i] || '';
    }
    return uri;
}
function removeTrailingSlash(path) {
    return path.replace(/\/$/, '');
}
/**
* Interface for a class that creates an in-memory database
*
* Its `createDb` method creates a hash of named collections that represents the database
*
* For maximum flexibility, the service may define HTTP method overrides.
* Such methods must match the spelling of an HTTP method in lower case (e.g, "get").
* If a request has a matching method, it will be called as in
* `get(info: requestInfo, db: {})` where `db` is the database object described above.
*/
var MemoryDataService = /** @class */ (function () {
    function MemoryDataService() {
    }
    return MemoryDataService;
}());
/////////////////////////////////
/**
*  MemoryBackendConfig configuration options
*  Usage:
*    MemoryModule.forRoot(InMemHeroService, {delay: 600})
*
*  or if providing separately:
*    provide(MemoryBackendConfig, {useValue: {delay: 600}}),
*/
var MemoryBackendConfig = /** @class */ (function () {
    function MemoryBackendConfig(config) {
        if (config === void 0) { config = {}; }
        Object.assign(this, {
            // default config:
            caseSensitiveSearch: false,
            dataEncapsulation: false,
            delay: 500,
            delete404: false,
            passThruUnknownUrl: false,
            post204: true,
            post409: false,
            put204: true,
            put404: false,
            apiBase: undefined,
            host: undefined,
            rootPath: undefined // default value is actually set in MemoryBackendConfig ctor
        }, config);
    }
    MemoryBackendConfig.ɵfac = function MemoryBackendConfig_Factory(t) { return new (t || MemoryBackendConfig)(ɵɵinject(MemoryBackendConfig)); };
    MemoryBackendConfig.ɵprov = ɵɵdefineInjectable({ token: MemoryBackendConfig, factory: MemoryBackendConfig.ɵfac });
    return MemoryBackendConfig;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(MemoryBackendConfig, [{
        type: Injectable
    }], function () { return [{ type: MemoryBackendConfig }]; }, null); })();

var BackendService = /** @class */ (function () {
    function BackendService(dataService, config, factory) {
        if (config === void 0) { config = {}; }
        this.dataService = dataService;
        this.factory = factory;
        this.config = new MemoryBackendConfig();
        var location = this.getLocation('/');
        this.config.host = location.host; // default to app web server host
        this.config.rootPath = location.path; // default to path when app is served (e.g.'/')
        Object.assign(this.config, config);
    }
    Object.defineProperty(BackendService.prototype, "databaseReady", {
        get: function () {
            if (!this.databaseReadySubject) {
                // first time the service is called.
                this.databaseReadySubject = new BehaviorSubject(false);
                this.resetDb();
            }
            return this.databaseReadySubject.asObservable().pipe(first(function (ready) { return ready; }));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Process Request and return an Observable of Http Response object
     * in the manner of a RESTy web api.
     *
     * Expect URI pattern in the form :base/:collectionName/:id?
     * Examples:
     *   // for store with a 'customers' collection
     *   GET api/customers          // all customers
     *   GET api/customers/42       // the character with id=42
     *   GET api/customers?name=^j  // 'j' is a regex; returns customers whose name starts with 'j' or 'J'
     *   GET api/customers.json/42  // ignores the ".json"
     *
     * Also accepts direct commands to the service in which the last segment of the apiBase is the word "commands"
     * Examples:
     *     POST commands/resetDb,
     *     GET/POST commands/config - get or (re)set the config
     *
     *   HTTP overrides:
     *     If the injected dataService defines an HTTP method (lowercase)
     *     The request is forwarded to that method as in
     *     `dataService.get(memoryRequest)`
     *     which must return either an Observable of the response type
     *     for this http library or null|undefined (which means "keep processing").
     */
    BackendService.prototype.handleRequest = function (request) {
        var _this = this;
        //  handle the request when there is an in-memory database
        return this.databaseReady.pipe(concatMap(function () { return _this.handleRequest_(request); }));
    };
    BackendService.prototype.handleRequest_ = function (request) {
        var _this = this;
        var url = request.urlWithParams ? request.urlWithParams : request.url;
        // Try override parser
        // If no override parser or it returns nothing, use default parser
        // const parser = this.bind('parseRequestUrl');
        // const parsed: ParsedRequestUrl = (parser && parser(url, this)) || this.parseRequestUrl(url);
        var parsed = this.parseRequestUrl(url);
        var collectionName = parsed.collectionName;
        var collection = this.database[collectionName];
        var memoryRequest = {
            request: request,
            body: request.body,
            apiBase: parsed.apiBase,
            collection: collection,
            collectionName: collectionName,
            headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
            id: this.parseId(collection, collectionName, parsed.id),
            method: (request.method || 'get').toLowerCase(),
            query: parsed.query,
            resourceUrl: parsed.resourceUrl,
            url: url,
        };
        // If `dataService.requestInterceptor` exists, let it morph the response options
        var interceptor = this.bind('requestInterceptor');
        if (/commands\/?$/i.test(memoryRequest.apiBase)) {
            return this.commands(memoryRequest);
        }
        var methodInterceptor = this.bind(memoryRequest.method);
        if (methodInterceptor) {
            // MemoryDataService intercepts this HTTP method.
            // if interceptor produced a response, return it.
            // else MemoryDataService chose not to intercept; continue processing.
            var interceptorResponse = methodInterceptor(memoryRequest);
            if (interceptorResponse) {
                return interceptorResponse;
            }
        }
        // !!!
        var response = interceptor ? interceptor(memoryRequest, this) : null;
        if (response) {
            return this.createResponse$(function () { return response; });
        }
        if (this.database[collectionName]) {
            // request is for a known collection of the MemoryDataService
            return this.createResponse$(function () { return _this.collectionHandler(memoryRequest); });
        }
        if (this.config.passThruUnknownUrl) {
            // unknown collection; pass request thru to a "real" backend.
            return this.getPassThruBackend().handle(request);
        }
        // 404 - can't handle this request
        response = this.createErrorResponse(url, STATUS_CODE.NOT_FOUND, "Collection '" + collectionName + "' not found");
        return this.createResponse$(function () { return response; });
    };
    /**
     * Parses the request URL into a `ParsedRequestUrl` object.
     * Parsing depends upon certain values of `config`: `apiBase`, `host`, and `urlRoot`.
     *
     * Configuring the `apiBase` yields the most interesting changes to `parseRequestUrl` behavior:
     *   When apiBase=undefined and url='http://localhost/api/collection/42'
     *     {base: 'api/', collectionName: 'collection', id: '42', ...}
     *   When apiBase='some/api/root/' and url='http://localhost/some/api/root/collection'
     *     {base: 'some/api/root/', collectionName: 'collection', id: undefined, ...}
     *   When apiBase='/' and url='http://localhost/collection'
     *     {base: '/', collectionName: 'collection', id: undefined, ...}
     *
     * The actual api base segment values are ignored. Only the number of segments matters.
     * The following api base strings are considered identical: 'a/b' ~ 'some/api/' ~ `two/segments'
     *
     * To replace this default method, assign your alternative to your MemoryDataService['parseRequestUrl']
     */
    BackendService.prototype.parseRequestUrl = function (url) {
        try {
            var location_1 = this.getLocation(url);
            var drop = this.config.rootPath.length;
            var urlRoot = '';
            if (location_1.host !== this.config.host) {
                // url for a server on a different host!
                // assume it's collection is actually here too.
                drop = 1; // the leading slash
                urlRoot = location_1.protocol + '//' + location_1.host + '/';
            }
            var path = location_1.path.substring(drop);
            var pathSegments = path.split('/');
            var segmentIx = 0;
            // apiBase: the front part of the path devoted to getting to the api route
            // Assumes first path segment if no config.apiBase
            // else ignores as many path segments as are in config.apiBase
            // Does NOT care what the api base chars actually are.
            var apiBase = void 0;
            // tslint:disable-next-line:triple-equals
            if (this.config.apiBase == undefined) {
                apiBase = pathSegments[segmentIx++];
            }
            else {
                apiBase = removeTrailingSlash(this.config.apiBase.trim());
                if (apiBase) {
                    segmentIx = apiBase.split('/').length;
                }
                else {
                    segmentIx = 0; // no api base at all; unwise but allowed.
                }
            }
            apiBase += '/';
            var collectionName = pathSegments[segmentIx++];
            // ignore anything after a '.' (e.g.,the "json" in "customers.json")
            collectionName = collectionName && collectionName.split('.')[0];
            var id = pathSegments[segmentIx++];
            var query = this.createQueryMap(location_1.query);
            var resourceUrl = urlRoot + apiBase + collectionName + '/';
            return { apiBase: apiBase, collectionName: collectionName, id: id, query: query, resourceUrl: resourceUrl };
        }
        catch (error) {
            var message = "unable to parse url '" + url + "'; original error: " + error.message;
            throw new Error(message);
        }
    };
    /** Parse the id as a number. Return original value if not a number. */
    BackendService.prototype.parseId = function (collection, collectionName, id) {
        if (!this.isCollectionIdNumeric(collection, collectionName)) {
            // Can't confirm that `id` is a numeric type; don't parse as a number
            // or else `'42'` -> `42` and _get by id_ fails.
            return id;
        }
        var idNum = parseFloat(id);
        return isNaN(idNum) ? id : idNum;
    };
    /**
     * Add configured delay to response observable unless delay === 0
     */
    BackendService.prototype.addDelay = function (response) {
        var delay = this.config.delay;
        return delay === 0 ? response : delayResponse(response, delay || 500);
    };
    /**
     * Apply query/search parameters as a filter over the collection
     * This impl only supports RegExp queries on string properties of the collection
     * ANDs the conditions together
     */
    BackendService.prototype.applyQuery = function (collection, query) {
        // extract filtering conditions - {propertyName, RegExps) - from query/search parameters
        var conditions = [];
        var caseSensitive = this.config.caseSensitiveSearch ? undefined : 'i';
        query.forEach(function (value, name) {
            value.forEach(function (x) { return conditions.push({
                name: name,
                regexp: new RegExp(decodeURI(x), caseSensitive)
            }); });
        });
        var length = conditions.length;
        if (!length) {
            return collection;
        }
        // AND the RegExp conditions
        return collection.filter(function (row) {
            var has = true;
            var i = length;
            while (has && i) {
                i -= 1;
                var cond = conditions[i];
                has = cond.regexp.test(row[cond.name]);
            }
            return has;
        });
    };
    /**
     * Get a method from the `MemoryDataService` (if it exists), bound to that service
     */
    BackendService.prototype.bind = function (methodName) {
        var method = this.dataService[methodName];
        return method ? method.bind(this.dataService) : undefined;
    };
    BackendService.prototype.bodify = function (data) {
        return this.config.dataEncapsulation ? { data: data } : data;
    };
    BackendService.prototype.clone = function (data) {
        return JSON.parse(JSON.stringify(data));
    };
    BackendService.prototype.collectionHandler = function (request) {
        // const request = request.request;
        var response;
        switch (request.method) {
            case 'get':
                response = this.get(request);
                break;
            case 'post':
                response = this.post(request);
                break;
            case 'put':
                response = this.put(request);
                break;
            case 'delete':
                response = this.delete(request);
                break;
            default:
                response = this.createErrorResponse(request.url, STATUS_CODE.METHOD_NOT_ALLOWED, 'Method not allowed');
                break;
        }
        // If `dataService.responseInterceptor` exists, let it morph the response options
        var interceptor = this.bind('responseInterceptor');
        // !!!
        return interceptor ? interceptor(response, request) : response;
    };
    BackendService.prototype.createErrorResponse = function (url, status, message) {
        return {
            body: {
                error: "" + message,
            },
            url: url,
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            }),
            status: status
        };
    };
    /**
     * Create a cold response Observable from a factory for MemoryResponse
     * @param memoryResponseFactory - creates MemoryResponse when observable is subscribed
     * @param withDelay - if true (default), add simulated latency delay from configuration
     */
    BackendService.prototype.createResponse$ = function (memoryResponseFactory, withDelay) {
        if (withDelay === void 0) { withDelay = true; }
        var memoryResponse$ = this.createMemoryResponse$(memoryResponseFactory);
        var response$ = this.createResponse$fromMemoryResponse$(memoryResponse$);
        return withDelay ? this.addDelay(response$) : response$;
    };
    /**
     * Create a cold Observable of MemoryResponse.
     * @param memoryResponseFactory - creates MemoryResponse when observable is subscribed
     */
    BackendService.prototype.createMemoryResponse$ = function (memoryResponseFactory) {
        var _this = this;
        return new Observable(function (observer) {
            var response;
            try {
                response = memoryResponseFactory();
            }
            catch (error) {
                error = error.message || error;
                response = _this.createErrorResponse('', STATUS_CODE.INTERNAL_SERVER_ERROR, "" + error);
            }
            var status = response.status;
            try {
                response.statusText = getStatusText(status);
            }
            catch (error) { /* ignore failure */ }
            if (isSuccess(status)) {
                observer.next(response);
                observer.complete();
            }
            else {
                observer.error(response);
            }
            return function () { }; // unsubscribe function
        });
    };
    /**
     * Find first instance of item in collection by `item.id`
     * @param collection
     * @param id
     */
    BackendService.prototype.findById = function (collection, id) {
        return collection.find(function (item) { return item.id === id; });
    };
    /**
     * Generate the next available id for item in this collection
     * Use method from `dataService` if it exists and returns a value,
     * else delegates to `genIdDefault`.
     * @param collection - collection of items with `id` key property
     */
    BackendService.prototype.genId = function (collection, collectionName) {
        var genId = this.bind('genId');
        if (genId) {
            var id = genId(collection, collectionName);
            // tslint:disable-next-line:triple-equals
            if (id != undefined) {
                return id;
            }
        }
        return this.genIdDefault(collection, collectionName);
    };
    /**
     * Default generator of the next available id for item in this collection
     * This default implementation works only for numeric ids.
     * @param collection - collection of items with `id` key property
     * @param collectionName - name of the collection
     */
    BackendService.prototype.genIdDefault = function (collection, collectionName) {
        if (!this.isCollectionIdNumeric(collection, collectionName)) {
            throw new Error("Collection '" + collectionName + "' id type is non-numeric or unknown. Can only generate numeric ids.");
        }
        var maxId = 0;
        collection.reduce(function (prev, item) {
            maxId = Math.max(maxId, typeof item.id === 'number' ? item.id : maxId);
        }, undefined);
        return maxId + 1;
    };
    /**
     * Get location info from a url, even on server where `document` is not defined
     */
    BackendService.prototype.getLocation = function (url) {
        if (!url.startsWith('http')) {
            // get the document if running in browser
            var document_ = (typeof document === 'undefined') ? undefined : document;
            // add host info to url before parsing.  Use a fake host when not in browser.
            var base = document_ ? document_.location.protocol + '//' + document_.location.host : 'http://fake';
            url = url.startsWith('/') ? base + url : base + '/' + url;
        }
        return parseUri(url);
    };
    /**
     * get or create the function that passes unhandled requests
     * through to the "real" backend.
     */
    BackendService.prototype.getPassThruBackend = function () {
        return this.passThruBackend ? this.passThruBackend : this.passThruBackend = this.createPassThruBackend();
    };
    BackendService.prototype.indexOf = function (collection, id) {
        return collection.findIndex(function (item) { return item.id === id; });
    };
    /**
     * return true if can determine that the collection's `item.id` is a number
     * This implementation can't tell if the collection is empty so it assumes NO
     * */
    BackendService.prototype.isCollectionIdNumeric = function (collection, collectionName) {
        // collectionName not used now but override might maintain collection type information
        // so that it could know the type of the `id` even when the collection is empty.
        // return !!(collection && collection[0]) && typeof collection[0].id === 'number';
        return !!(collection && collection[0]);
    };
    BackendService.prototype.removeById = function (collection, id) {
        var index = this.indexOf(collection, id);
        if (index > -1) {
            collection.splice(index, 1);
            return true;
        }
        return false;
    };
    /**
     * Tell your in-mem "database" to reset.
     * returns Observable of the database because resetting it could be async
     */
    BackendService.prototype.resetDb = function (request) {
        var _this = this;
        this.databaseReadySubject.next(false);
        var database = this.dataService.createDb(request);
        var database$ = database instanceof Observable ? database :
            typeof database.then === 'function' ? from(database) :
                of(database);
        database$.pipe(first()).subscribe(function (database) {
            _this.database = database;
            _this.databaseReadySubject.next(true);
        });
        return this.databaseReady;
    };
    /**
     * Commands reconfigure the in-memory web api service or extract information from it.
     * Commands ignore the latency delay and respond ASAP.
     *
     * When the last segment of the `apiBase` path is "commands",
     * the `collectionName` is the command.
     *
     * Example URLs:
     *   commands/resetdb (POST) // Reset the "database" to its original state
     *   commands/config (GET)   // Return this service's config object
     *   commands/config (POST)  // Update the config (e.g. the delay)
     *
     * Usage:
     *   http.post('commands/resetdb', undefined);
     *   http.get('commands/config');
     *   http.post('commands/config', '{"delay":1000}');
     */
    BackendService.prototype.commands = function (request) {
        var _this = this;
        var command = request.collectionName.toLowerCase();
        var method = request.method;
        var response = {
            url: request.url
        };
        switch (command) {
            case 'resetdb':
                response.status = STATUS_CODE.NO_CONTENT;
                return this.resetDb(request).pipe(concatMap(function () { return _this.createResponse$(function () { return response; }, false /* no latency delay */); }));
            case 'config':
                if (method === 'get') {
                    response.status = STATUS_CODE.OK;
                    response.body = this.clone(this.config);
                    // any other HTTP method is assumed to be a config update
                }
                else {
                    var body = request.request.body;
                    Object.assign(this.config, body);
                    this.passThruBackend = undefined; // re-create when needed
                    response.status = STATUS_CODE.NO_CONTENT;
                }
                break;
            default:
                response = this.createErrorResponse(request.url, STATUS_CODE.INTERNAL_SERVER_ERROR, "Unknown command \"" + command + "\"");
        }
        return this.createResponse$(function () { return response; }, false /* no latency delay */);
    };
    BackendService.prototype.get = function (_a) {
        var collection = _a.collection, collectionName = _a.collectionName, headers = _a.headers, id = _a.id, query = _a.query, url = _a.url;
        var data = collection;
        // tslint:disable-next-line:triple-equals
        if (id != undefined && id !== '') {
            data = this.findById(collection, id);
            if (!data) {
                return this.createErrorResponse(url, STATUS_CODE.NOT_FOUND, "'" + collectionName + "' with id='" + id + "' not found");
            }
        }
        else if (query) {
            data = this.applyQuery(collection, query);
            if (!data.length) {
                return this.createErrorResponse(url, STATUS_CODE.NOT_FOUND, "'" + collectionName + "' with id='" + id + "' not found");
            }
        }
        return {
            body: this.bodify(this.clone(data)),
            headers: headers,
            status: STATUS_CODE.OK
        };
    };
    // Create entity
    // Can update an existing entity too if post409 is false.
    BackendService.prototype.post = function (_a) {
        var collection = _a.collection, collectionName = _a.collectionName, headers = _a.headers, id = _a.id, request = _a.request, resourceUrl = _a.resourceUrl, url = _a.url;
        var requestBody = request.body;
        var item = this.clone(requestBody);
        // tslint:disable-next-line:triple-equals
        if (item.id == undefined) {
            try {
                item.id = id || this.genId(collection, collectionName);
            }
            catch (error) {
                var message = error.message || '';
                if (/id type is non-numeric/.test(message)) {
                    return this.createErrorResponse(url, STATUS_CODE.UNPROCESSABLE_ENTRY, message);
                }
                else {
                    console.error(error);
                    return this.createErrorResponse(url, STATUS_CODE.INTERNAL_SERVER_ERROR, "Failed to generate new id for '" + collectionName + "'");
                }
            }
        }
        if (id && id !== item.id) {
            return this.createErrorResponse(url, STATUS_CODE.BAD_REQUEST, "Request id does not match item.id");
        }
        else {
            id = item.id;
        }
        var existingIx = this.indexOf(collection, id);
        var body = this.bodify(item);
        if (existingIx === -1) {
            collection.push(item);
            headers.set('Location', resourceUrl + '/' + id);
            return { headers: headers, body: body, status: STATUS_CODE.CREATED };
        }
        else if (this.config.post409) {
            return this.createErrorResponse(url, STATUS_CODE.CONFLICT, "'" + collectionName + "' item with id='" + id + " exists and may not be updated with POST; use PUT instead.");
        }
        else {
            collection[existingIx] = item;
            return this.config.post204 ?
                { headers: headers, status: STATUS_CODE.NO_CONTENT } : // successful; no content
                { headers: headers, body: body, status: STATUS_CODE.OK }; // successful; return entity
        }
    };
    // Update existing entity
    // Can create an entity too if put404 is false.
    BackendService.prototype.put = function (_a) {
        var collection = _a.collection, collectionName = _a.collectionName, headers = _a.headers, id = _a.id, request = _a.request, url = _a.url;
        var item = this.clone(request.body);
        // tslint:disable-next-line:triple-equals
        if (item.id == undefined) {
            return this.createErrorResponse(url, STATUS_CODE.NOT_FOUND, "Missing '" + collectionName + "' id");
        }
        if (id && id !== item.id) {
            return this.createErrorResponse(url, STATUS_CODE.BAD_REQUEST, "Request for '" + collectionName + "' id does not match item.id");
        }
        else {
            id = item.id;
        }
        var existingIx = this.indexOf(collection, id);
        var body = this.bodify(item);
        if (existingIx > -1) {
            collection[existingIx] = item;
            return this.config.put204 ?
                { headers: headers, status: STATUS_CODE.NO_CONTENT } : // successful; no content
                { headers: headers, body: body, status: STATUS_CODE.OK }; // successful; return entity
        }
        else if (this.config.put404) {
            // item to update not found; use POST to create new item for this id.
            return this.createErrorResponse(url, STATUS_CODE.NOT_FOUND, "'" + collectionName + "' item with id='" + id + " not found and may not be created with PUT; use POST instead.");
        }
        else {
            // create new item for id not found
            collection.push(item);
            return { headers: headers, body: body, status: STATUS_CODE.CREATED };
        }
    };
    BackendService.prototype.delete = function (_a) {
        var collection = _a.collection, collectionName = _a.collectionName, headers = _a.headers, id = _a.id, url = _a.url;
        // tslint:disable-next-line:triple-equals
        if (id == undefined) {
            return this.createErrorResponse(url, STATUS_CODE.NOT_FOUND, "Missing \"" + collectionName + "\" id");
        }
        var exists = this.removeById(collection, id);
        return {
            headers: headers,
            status: (exists || !this.config.delete404) ? STATUS_CODE.NO_CONTENT : STATUS_CODE.NOT_FOUND
        };
    };
    ///////
    BackendService.prototype.handle = function (request) {
        try {
            return this.handleRequest(request);
        }
        catch (error) {
            var response_1 = this.createErrorResponse(request.url, STATUS_CODE.INTERNAL_SERVER_ERROR, "" + (error.message || error));
            return this.createResponse$(function () { return response_1; });
        }
    };
    BackendService.prototype.createQueryMap = function (search) {
        var map = new Map();
        if (search) {
            var params_1 = new HttpParams({ fromString: search });
            params_1.keys().forEach(function (p) { return map.set(p, params_1.getAll(p)); });
        }
        return map;
    };
    BackendService.prototype.createResponse$fromMemoryResponse$ = function (response$) {
        return response$.pipe(map(function (options) { return new HttpResponse(options); }));
    };
    BackendService.prototype.createPassThruBackend = function () {
        try {
            return new HttpXhrBackend(this.factory);
        }
        catch (error) {
            error.message = 'Cannot create passThru404 backend; ' + (error.message || '');
            throw error;
        }
    };
    BackendService.ɵfac = function BackendService_Factory(t) { return new (t || BackendService)(ɵɵinject(MemoryDataService), ɵɵinject(MemoryBackendConfig), ɵɵinject(XhrFactory)); };
    BackendService.ɵprov = ɵɵdefineInjectable({ token: BackendService, factory: BackendService.ɵfac });
    return BackendService;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(BackendService, [{
        type: Injectable
    }], function () { return [{ type: MemoryDataService }, { type: MemoryBackendConfig }, { type: XhrFactory }]; }, null); })();

////// HttpClient-Only version ////
// Internal - Creates the in-mem backend for the HttpClient module
// AoT requires factory to be exported
function BackendServiceFactory(dataService, config, factory) {
    var backend = new BackendService(dataService, config, factory);
    return backend;
}
var MemoryModule = /** @class */ (function () {
    function MemoryModule() {
    }
    MemoryModule.forRoot = function (dataService, config) {
        return {
            ngModule: MemoryModule,
            providers: [
                { provide: MemoryDataService, useClass: dataService },
                { provide: MemoryBackendConfig, useValue: config },
                { provide: HttpBackend, useFactory: BackendServiceFactory, deps: [MemoryDataService, MemoryBackendConfig, XhrFactory] }
            ]
        };
    };
    MemoryModule.forFeature = function (dataService, config) {
        return MemoryModule.forRoot(dataService, config);
    };
    MemoryModule.ɵmod = ɵɵdefineNgModule({ type: MemoryModule });
    MemoryModule.ɵinj = ɵɵdefineInjector({ factory: function MemoryModule_Factory(t) { return new (t || MemoryModule)(); } });
    return MemoryModule;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(MemoryModule, [{
        type: NgModule,
        args: [{}]
    }], null, null); })();

var services = [
    DataService,
];
var components = [
    DataModuleComponent,
];
var directives = [];
var pipes = [];
var validators = [];
var guards = [];
var DataModule = /** @class */ (function () {
    function DataModule(parentModule) {
        if (parentModule) {
            throw new Error('DataModule is already loaded. Import it in the AppModule only');
        }
    }
    DataModule.forRoot = function (config) {
        return {
            ngModule: DataModule,
            providers: __spread([
                { provide: DATA_CONFIG, useValue: config }
            ], MemoryModule.forRoot(DataService, config.memory).providers)
        };
    };
    DataModule.ɵmod = ɵɵdefineNgModule({ type: DataModule });
    DataModule.ɵinj = ɵɵdefineInjector({ factory: function DataModule_Factory(t) { return new (t || DataModule)(ɵɵinject(DataModule, 12)); }, providers: __spread(services), imports: [[
                CommonModule,
                HttpClientModule,
                MemoryModule,
                CoreModule,
            ],
            MemoryModule,
            CoreModule] });
    return DataModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(DataModule, { declarations: [DataModuleComponent], imports: [CommonModule,
        HttpClientModule,
        MemoryModule,
        CoreModule], exports: [MemoryModule,
        CoreModule,
        DataModuleComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(DataModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    HttpClientModule,
                    MemoryModule,
                    CoreModule,
                ],
                providers: __spread(services),
                declarations: __spread(components),
                exports: __spread([
                    MemoryModule,
                    CoreModule
                ], components),
            }]
    }], function () { return [{ type: DataModule, decorators: [{
                type: Optional
            }, {
                type: SkipSelf
            }] }]; }, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { DATA_CONFIG, DataConfig, DataModule, DataModuleComponent, DataService, MemoryModule };
//# sourceMappingURL=designr-data.js.map
