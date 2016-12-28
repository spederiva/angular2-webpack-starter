import {Injectable} from '@angular/core';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import {Observable} from "rxjs/Observable";
import '../../../core/rxjs-operators';

//export const data = [
//    {id: 1, name: 'Hercules'},
//    {id: 2, name: 'Toe'},
//    {id: 3, name: 'Michael'},
//    {id: 4, name: 'Paul'},
//    {id: 5, name: 'Moe'},
//    {id: 6, name: 'Meanie'}
//];

@Injectable()
export class ListService {
    //private usersApiUrl = '/_data/users.json';
    private usersApiUrl = 'https://jsonplaceholder.typicode.com/users';

    constructor(private http:Http) {

    }

    //getListPromise():Promise<any[]> {
    //    return Promise.resolve(data);
    //}

    getList():Observable<Response> {
        let o = this.http.get(this.usersApiUrl)
            .map(this.extractData)
            .catch(this.error)
        //.catch((err:any, caught:Observable<any>)=> {
        //    return Observable.throw('haval');
        //})

        //.map((x:Response) => {
        //    debugger;
        //    console.log(x);
        //
        //    return x;
        //});

        return o;
    }

    private extractData(res:Response) {
        let body = res.json();

        console.log(body);

        return body || {};
    }

    private error(error:any, caught:Observable<any>) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg:string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

    addPerson(name:string):Observable<Response> {
        let person = {name};
        let headers = new Headers({'Content-Type': 'application/json'});
        let opt = new RequestOptions({headers});

        return this.http.post(this.usersApiUrl, person, opt)
            .map(this.extractData)
            .catch(this.error);
    }
}