import {NgModule} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

import {HightlightDirective} from "./directives/highlight.directive";
import {NumberToString} from "./pipes/numberToString";

@NgModule({
    imports: [
        FormsModule,
        CommonModule
    ],

    declarations:[
        HightlightDirective,
        NumberToString,
    ],

    exports: [
        CommonModule,
        FormsModule,

        HightlightDirective,
        NumberToString
    ],

})
export class SharedModule {

}