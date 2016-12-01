import {Component, Input, Output, EventEmitter} from '@angular/core'

@Component({
    selector: 'counter2',

    template: `
        <button (click)="decrement()">-</button>
        <span>{{counter}}</span>
        <button (click)="increment()">+</button>
    `
})
export class CounterComponent2 {
    _counter:number = 0;

    @Output() counterChange:EventEmitter<number> = new EventEmitter<number>();

    @Input()
    set counter(val) {
        this._counter = val;

        this.counterChange.emit(this._counter);
    }

    get counter() {
        return this._counter;
    }

    ngOnInit(){
        //this.counterChange.emit(2222);
    }

    increment() {
        this.counter++;

        //this.counterChange.emit(this.counter);
    }

    decrement() {
        this.counter--;

        // this.counterChange.emit(this.counter);
    }
}
