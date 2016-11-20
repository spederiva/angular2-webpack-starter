import {Injectable} from '@angular/core';
import {Product} from "../../models/Product";

import {shoppingList} from '../../../_data/shopping-list';


@Injectable()
export class ShoppingListService {
    private products:Product[] = [];

    constructor() {
        this.products = shoppingList;
    }

    getList():Promise<Product[]> {
        return new Promise(resolve=>{
            setTimeout(()=>{
                resolve(this.products);
            }, 2000);
        })
    }
}