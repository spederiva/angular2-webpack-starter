import {Injectable} from '@angular/core';
import {} from '@angular/http';
import {Http, Response} from '@angular/http';
import {Observable} from "rxjs/Observable";

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
        return this.http.get(this.usersApiUrl)
            .map(x => {
                console.log(x)

                return x;
            });
    }
}