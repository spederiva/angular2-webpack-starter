import {Component, Input, Output, EventEmitter} from "@angular/core";

@Component({
    selector: 'my-button',

    template: `
        <button (click)="doSomethingOnClick()" [style.backgroundColor]="bgColor">{{text}}</button>
    `
})
export class MyButtonComponent {
    @Input() text: string;
    @Output() onClick = new EventEmitter<number>();

    bgColor:string;

    doSomethingOnClick(): void {
        console.log('clicked');

        this.bgColor = 'red';

        this.onClick.emit(Date.now());
    }
}