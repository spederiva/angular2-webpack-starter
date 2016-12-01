import {Component} from '@angular/core';
import {data} from './_mock';
import {Person} from './Person';

@Component({
    selector: 'list',

    template: `
        <h1>List</h1>

        <button (click)="changeFirstPerson()">Change First Person</button>

        <button (click)="changeColor($event)">Change Color</button>

        <button (click)="reset()">Reset</button>

        <ul>
            <li *ngFor="let item of people;trackBy:trackByPeople">
                {{item.id}}) {{item.name}}
            </li>
        </ul>
    `
})
export class ListComponent {
    people:Person[];

    constructor(){
        this.copyData();
    }

    trackByPeople(idx:number, person:Person){
        return person.id;
    }

    changeColor(e:any) {
        e.target.parentElement.querySelector('ul li:nth-child(3)').style.backgroundColor = 'yellow';
    }

    changeFirstPerson(){
        this.people[0].name = "Sebastian";
    }

    reset(){
        this.copyData();
    }

    copyData(){
        this.people =  JSON.parse(JSON.stringify(data));
        //this.people = data.concat([]);

        console.log(data[0].name, this.people[0].name, this.people);
    }
}