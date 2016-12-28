import {Injectable} from '@angular/core';
import {} from '@angular/http';
import {Http, Response} from '@angular/http';
import {Observable} from "rxjs/Observable";
import '../../../core/rxjs-operators';

export const data = [
    {id: 1, name: 'Hercules'},
    {id: 2, name: 'Toe'},
    {id: 3, name: 'Michael'},
    {id: 4, name: 'Paul'},
    {id: 5, name: 'Moe'},
    {id: 6, name: 'Meanie'}
]

@Injectable()
export class ListService {
    private usersApiUrl = '/_data/users.json';

    constructor(private http: Http) {

    }

    getListPromise(): Promise<any[]> {
        return Promise.resolve(data);
    }

    getList(): Observable<Response> {
        let o = this.http.get(this.usersApiUrl)
            .map(this.extractData)
            .catch((error: any, caught: Observable<any>) => {
                // In a real world app, we might use a remote logging infrastructure
                let errMsg: string;
                if (error instanceof Response) {
                    const body = error.json() || '';
                    const err = body.error || JSON.stringify(body);
                    errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
                } else {
                    errMsg = error.message ? error.message : error.toString();
                }
                console.error(errMsg);
                return Observable.throw(errMsg);
            })
            .catch((err:any, caught: Observable<any>)=>{
                return Observable.throw('haval');
            })

        //.map((x:Response) => {
        //    debugger;
        //    console.log(x);
        //
        //    return x;
        //});

        return o;
    }

    extractData(res: Response) {
        let body = res.json();

        console.log(body);

        return body || {};
    }
}