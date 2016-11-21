import {Component, OnInit} from '@angular/core';
import {Product} from "../../models/Product";
import {ShoppingListService} from "./shopping-list.service";

@Component({
    selector: 'shopping-list',

    template: `
                <ul>
                    <li *ngFor="let p of products">{{p.Id}}: {{p.Name}}</li>
                </ul>`,

    styleUrls: ['./shopping-list.component.css'],

    providers: [ShoppingListService]
})
export class ShoppingListComponent implements OnInit {

    products:Product[] = [];

    constructor(private shoppingListService:ShoppingListService) {
    }

    ngOnInit():void {
        this.shoppingListService.getList()
            .then(p=>this.products = p);
    }


}