import {Component} from "@angular/core";

@Component({
    selector: 'calculate',

    template: `
        <h2>Result: {{result}}</h2>
        <sum [(result)]="result"></sum>
    `,

    styles: [`
        h2{
            color: red;
        }
    `]
})
export class CalculateComponent {
    result: number;
    result2: number;

    constructor() {
    }

    ngOnInit(){
        //this.result = 1;
    }
}