import {Component, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'add-person',

    template: `
        <div>
            <input #personName/>
            <button (click)="addPerson(personName.value);personName.value=''">Submit</button>
        </div>
        <hr/>
    `
})
export class AddPerson{
    Person:any = {};

    @Output() add:any = new EventEmitter<string>();

    addPerson(name:string){
        this.add.emit(name);
    }
}