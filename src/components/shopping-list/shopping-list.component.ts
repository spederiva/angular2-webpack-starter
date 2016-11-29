import {Component, OnInit} from '@angular/core';
import {Product} from "../../models/Product";
import {ShoppingListService} from "./shopping-list.service";

@Component({
    selector: 'shopping-list',

    template: `
                <h2>
                    Products: {{getListLengh()}}
                    <span bind-innerHTML="getListLengh()"></span>
                    <span [innerHTML]="getListLengh()"></span>
                </h2>
                <ul>
                    <li *ngFor="let p of products;let i=index;let is_odd=odd;" [class.odd]="is_odd">
                        {{p.Id}}: {{p.Name}}
                        <button (click)="remove(p, $event);">Delete</button>
                    </li>
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

    remove(product:Product){
        console.log(product);

        this.products.splice(this.products.indexOf(product),1);
    }

    getListLengh(){
        return this.products.length;
    }

}