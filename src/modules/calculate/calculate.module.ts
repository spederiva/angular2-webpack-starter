import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

import {SumComponent} from "./component/sum/sum.component";
import {CalculateComponent} from "./component/calculate/calculate.component";
import {HightlightDirective} from "./directives/highlight.directive";
import {NumberToString} from "./pipes/NumberToString";


@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],

    declarations: [
        HightlightDirective,
        NumberToString,

        CalculateComponent,
        SumComponent
    ],

    exports: [
        CalculateComponent
    ]
})
export class CalculateModule {
    constructor() {
        console.log('CalculateModule initialized');
    }
}