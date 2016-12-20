import {Injectable} from "@angular/core";

@Injectable()
export class CounterService {
    _counter: number = 0;

    set counter(val: number) {
        this._counter = val;
    }

    get counter(){
        return this._counter;
    }

    increment() {
        this.counter++;

        return this.counter;
    }

    decrement() {
        this.counter--;

        return this.counter;
    }
}