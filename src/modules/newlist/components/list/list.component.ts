import {Component, OnInit} from '@angular/core';
import {ListService} from "./list-service.service";

@Component({
    selector: 'list',

    template: `
        <h1>New List</h1>

        <table border="1">
            <tr>
                <th>Id</th>
                <th>Name</th>
            </tr>

            <tr *ngFor="let person of people">
                <td>{{person.id}}</td>
                <td>{{person.name}}</td>
            </tr>
        </table>
    `
})
export class ListComponent implements OnInit {
    people:any[];

    constructor(private listSrv:ListService) {

    }

    ngOnInit():void {
        //this.listSrv.getList()
        //    .then(data => this.people = data);

        let obs = this.listSrv.getList()
            .subscribe((d:any)=> {
                console.log("dddd", d);
                this.people = d;
            });

        console.log(obs);
        //debugger;

    }


}
