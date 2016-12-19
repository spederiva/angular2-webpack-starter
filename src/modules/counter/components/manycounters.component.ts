import {Component} from "@angular/core";

@Component({
    selector: 'many-counters',

    template: `
        <h1>Many Counters: {{commonCounter}}</h1>
        
        
        <div>
            <counter [(counter)]="commonCounter"></counter>
        </div>
        
        <div>
            <counter [(counter)]="commonCounter"></counter>
        </div>
    `
})
export class ManyCounters {
    commonCounter: number = 100;
}