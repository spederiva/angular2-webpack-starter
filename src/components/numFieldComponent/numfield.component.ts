import {Component, Input} from '@angular/core';

@Component({
    selector: 'numfield',

    template: `
        <input
           type="number"
           [(ngModel)]="element"
           (change)="onChange($event)"
        />
    `
})
export class NumFieldComponent {
    @Input() element:any;

    onChange(num:number) {
        var confirm = window.confirm("Are you sure about this?");

        if(confirm){
            //True, accept the value
        } else {
            this.element = 0;
            //Failed, set the input back to 0
        }
    }
}