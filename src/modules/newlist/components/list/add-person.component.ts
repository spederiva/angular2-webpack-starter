import {Component, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'add-person',

    template: `
        <div>
            <input #personName/>
            <button (click)="add(personName.value);personName.value=''">Submit</button>
        </div>
        <hr/>
    `
})
export class AddPerson{
    Person:any = {};

    @Output() add:any = new EventEmitter<string>();

    add(name:string){
        alert(name);

        this.add.emit(name);
    }
}