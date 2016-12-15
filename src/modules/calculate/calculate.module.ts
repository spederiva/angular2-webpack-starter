import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";

import {SharedModule} from "../shared/shared.module";

import {CalculateComponent} from "./components/calculate/calculate.component";
import {SumComponent}       from "./components/sum/sum.component";


@NgModule({
    imports: [
        SharedModule,

        RouterModule.forChild([
            {path:'sum', component: SumComponent}
        ])
    ],

    declarations: [
        CalculateComponent,
        SumComponent
    ],

    exports: [
        RouterModule
    ]
})
export class CalculateModule {
    constructor() {
        console.log('CalculateModule initialized');
    }
}