import {Component, ViewEncapsulation} from "@angular/core";

@Component({
    // moduleId: module.id,

    selector: 'calculate',

    template: `
        <h2>Result: {{result}}</h2>
        <sum [(result)]="result"></sum>
    `,

    // styles: [`
    //     h2{
    //         color: red;
    //     }
    //
    //     *{
    //         color: blue;
    //     }
    // `],
    styleUrls: ['calculate.component.css'],

    encapsulation: ViewEncapsulation.Native
})
export class CalculateComponent {
    result: number;
    result2: number;

    constructor() {
    }

    ngOnInit() {
        //this.result = 1;
    }
}