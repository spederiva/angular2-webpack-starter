import {Component, Input, Output, EventEmitter} from '@angular/core'

@Component({
    selector: 'counter',

    template: `
        <button (click)="decrement()">-</button>
        <span>{{counter}}</span>
        <button (click)="increment()">+</button>
    `
})
export class CounterComponent {
    @Input() counter:number = 0;
    @Output() counterChange:EventEmitter<number> = new EventEmitter<number>();

    increment() {
        this.counter++;

        this.counterChange.emit(this.counter);
    }

    decrement() {
        this.counter--;

        this.counterChange.emit(this.counter);
    }
}
