import {BaseRequestOptions, RequestOptions} from "@angular/http";
import {Injectable} from "@angular/core";

@Injectable()
export class AppRequestOptions extends BaseRequestOptions {
    constructor() {
        super();

        // this.headers.append('Owner', 'Sebastian Pederiva');
        // this.headers.set('Content-Type', 'application/json');

        //this.search.append('xxx', 'xxx');
    }
}

export const requestOptionsProvider = {
    provide: RequestOptions,

    useClass: AppRequestOptions
};