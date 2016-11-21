import {Injectable} from '@angular/core';
import {Http, Response } from '@angular/http';
import {Product} from "../../models/Product";

import 'rxjs/add/operator/toPromise';

import {shoppingList} from '../../../_data/shopping-list';


@Injectable()
export class ShoppingListService {
    private products:Product[] = [];

    constructor(private http:Http) {
        this.products = shoppingList;
    }

    getList():Promise<Product[]> {
        return this.http.get('/_data/shopping-list.json')
            .toPromise()
            .then(response => {
                return response.json();
            });

        //return new Promise(resolve=> {
        //    setTimeout(()=> {
        //        resolve(this.products);
        //    }, 2000);
        //});
    }
}