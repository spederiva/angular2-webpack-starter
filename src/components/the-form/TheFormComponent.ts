import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import {Person} from "../../models/Person";

@Component({
    selector: 'the-form',

    inputs:['name'],

    outputs: ['nameChange'],

    template: `
        <div>Person: {{person|json}}</div>

        <form (ngSubmit)="doOnSubmit(theForm)" #theForm="ngForm" novalidate>
        <!--<form (submit)="doOnSubmit(theForm)" #theForm="ngForm" novalidate>-->
            <div>
                Form: {{theForm.valid}} || {{theForm.form.valid}}
            </div>
            <div>
                <input type="text" name="firstName" [(ngModel)]="person.firstName" placeholder="FirstName" required />
            </div>

            <div>
                <input type="text" name="lastName" [(ngModel)]="person.lastName" placeholder="LastName" maxlength="5" minlength="1"/>
            </div>

            <div>
                <button *ngIf="theForm.valid">Submit</button>
            </div>

        </form>
    `
})
export class TheFormComponent implements OnInit{
    person = new Person();

    //@Input() name:string;
    //@Output() nameChange = new EventEmitter<string>();

    name:string;
    nameChange = new EventEmitter<string>();

    ngOnInit(){
        let name = this.name.split(' ');

        this.person.firstName = name[0];
        this.person.lastName = name[1];
    }

    doOnSubmit(form:any) {
        console.log(form.valid);

        this.nameChange.emit([this.person.firstName, this.person.lastName].join(' '));
    }
}