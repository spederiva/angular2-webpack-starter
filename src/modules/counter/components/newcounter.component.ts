import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core'
import {CounterService} from "../service/counter.service";

@Component({
    selector: 'counter',

    template: `
        <button (click)="decrement()">-</button>
        <span>{{counter}}</span>
        <button (click)="increment()">+</button>
    `,

    providers:[
        CounterService
    ]
})
export class NewCounterComponent implements OnInit {
    @Input() counter: number;
    @Output() counterChange: EventEmitter<number> = new EventEmitter<number>();

    constructor(private counterSrv: CounterService) {
    }

    ngOnInit(): void {
        console.log(this.counter);
        this.counterSrv.counter = this.counter;
    }

    increment() {
        this.counter = this.counterSrv.increment();

        this.counterChange.emit(this.counter);
    }

    decrement() {
        this.counter = this.counterSrv.decrement();

        this.counterChange.emit(this.counter);
    }
}
