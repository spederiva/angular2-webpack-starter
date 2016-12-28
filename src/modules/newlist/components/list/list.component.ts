import {Component, OnInit} from '@angular/core';
import {ListService} from "./list-service.service";

@Component({
    selector: 'list',

    template: `
        <h1>New List</h1>

        <add-person (add)="addPerson($event)"></add-person>

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
            .subscribe(
                d => this.initData(d),
                e => this.error(e)
            )
        //.error((err:any)=> {
        //    alert('haval! => ' + err);
        //})

        console.log(obs);
        //debugger;

    }

    initData(d:any) {
        console.log("data", d);
        this.people = d;
    }

    error(err:any) {

    }

    addPerson(name:string){
        console.log('Adding new Person', name);

        this.listSrv.addPerson(name)
            .subscribe((newPerson:any)=>{
               console.log('New Person Added', newPerson);

                this.people.push(newPerson);
            });
    }

}
