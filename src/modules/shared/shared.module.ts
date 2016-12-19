import {NgModule} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

import {HighlightDirective} from "./directives/highlight.directive";
import {NumberToString} from "./pipes/numberToString";
import {ReverseDirective} from "./directives/reverse.directive";

@NgModule({
    imports: [
        FormsModule,
        CommonModule
    ],

    declarations:[
        HighlightDirective,
        NumberToString,
        ReverseDirective
    ],

    exports: [
        CommonModule,
        FormsModule,

        HighlightDirective,
        NumberToString,
        ReverseDirective
    ],

})
export class SharedModule {

}