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

    constructor(private http:Http) {

    }

    getListPromise():Promise<any[]> {
        return Promise.resolve(data);
    }

    getList():Observable<Response> {
        let o = this.http.get(this.usersApiUrl)
            .map(this.extractData);

            //.map((x:Response) => {
            //    debugger;
            //    console.log(x);
            //
            //    return x;
            //});

        return o;
    }

    extractData(res:Response){
        //debugger;
        //console.log(res);
        //alert(2222)

        let body = res.json();

        console.log(body);

        return body || {};
    }
}