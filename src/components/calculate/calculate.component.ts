import {Component} from "@angular/core";

@Component({
    selector: 'calculate',

    template: `
        <h2>Result: {{result}}</h2>
        <sum [(result)]="result"></sum>

        <hr/>

        <!--<h2>Result: {{result2}}</h2>-->
        <!--<sum [(result)]="result2"></sum>-->

        <!--<hr/>-->

        <my-sizer [(size)]="fontSizePx"></my-sizer>
        <div [style.font-size.px]="fontSizePx">Resizable Text {{fontSizePx}}</div>
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

    fontSizePx: number;

    constructor() {
    }

    ngOnInit(){
        //this.result = 1;

        this.fontSizePx = 10;
    }
}