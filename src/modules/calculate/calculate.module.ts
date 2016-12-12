import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

import {SumComponent} from "./component/sum/sum.component";
import {CalculateComponent} from "./component/calculate/calculate.component";
import {HightlightDirective} from "./directives/highlight.directive";
import {NumberToString} from "./pipes/numberToString";


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            {path:'sum', component: SumComponent}
        ])
    ],

    declarations: [
        HightlightDirective,
        NumberToString,

        CalculateComponent,
        SumComponent
    ],

    exports: [
        //RouterModule
        //CalculateComponent
    ]
})
export class CalculateModule {
    constructor() {
        console.log('CalculateModule initialized');
    }
}