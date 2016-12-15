import {NgModule} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

import {HightlightDirective} from "./directives/highlight.directive";
import {NumberToString} from "./pipes/numberToString";
import {ReverseDirective} from "./directives/reverse.directive";

@NgModule({
    imports: [
        FormsModule,
        CommonModule
    ],

    declarations:[
        HightlightDirective,
        NumberToString,
        ReverseDirective
    ],

    exports: [
        CommonModule,
        FormsModule,

        HightlightDirective,
        NumberToString,
        ReverseDirective
    ],

})
export class SharedModule {

}