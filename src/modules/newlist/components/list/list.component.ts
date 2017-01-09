import {Component, OnInit, OnChanges, SimpleChanges, DoCheck} from '@angular/core';
import {ListService} from "./../../services/list-service.service.ts";

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

            <tr *ngFor="let person of (people|filterLetterPure)">
                <td><a routerLink="/newlist/details/{{person.id}}">{{person.id}}</a></td>
                <td>{{person.name}}</td>
            </tr>
        </table>

        <ul>
            <li *ngFor="let person of (people|filterLetterImpure)">
                {{person.id}} - {{person.name}}
            </li>
        </ul>
    `
})
export class ListComponent implements OnInit, DoCheck {
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

    ngDoCheck(): void {
        console.log('ngDoCheck');
    }

    // ngOnChanges(changes: SimpleChanges): void {
    //     console.log('OnChanges', changes);
    // }

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
