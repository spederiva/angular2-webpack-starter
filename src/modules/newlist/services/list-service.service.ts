import {Injectable} from '@angular/core';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import {Observable} from "../../../../node_modules/rxjs/Observable";
import '../../core/rxjs-operators';

@Injectable()
export class ListService {
    //private usersApiUrl = '/_data/users.json';
    // private usersApiUrl = 'https://jsonplaceholder.typicode.com/users';
    private usersApiUrl = 'app/users';

    constructor(private http: Http) {
    }

    getList(): Observable<Response> {
        let o = this.http.get(this.usersApiUrl)
            .map(this.extractData)
            .catch(this.error);

        return o;
    }

    private extractData(res: Response) {
        let body = res.json();

        return body.data || body || {};
    }

    private error(error: any, caught: Observable<any>) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            let body = {};

            try {
                body = error.json() || '';
            } catch (err) {
            }
            const err = body['error'] || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

    addPerson(name: string): Observable<Response> {
        let person = {name};
        // let headers = new Headers({'Content-Type': 'application/json'});
        // let opt = new RequestOptions({headers});

        return this.http.post(this.usersApiUrl, person)
            .map(this.extractData)
            .catch(this.error);
    }
}