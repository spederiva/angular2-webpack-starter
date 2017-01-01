import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {BrowserModule} from "@angular/platform-browser";

import {WikipediaAutocompleteComponent} from "./components/wikipedia-autocomplete/wikipedia-autocomplete.component";
import {WikipediaService} from "./components/wikipedia-autocomplete/wikipedia.service";

@NgModule({
    imports: [
        BrowserModule,

        RouterModule.forChild([{
            path: 'wikipedia',
            component: WikipediaAutocompleteComponent
        }])
    ],

    providers: [
        WikipediaService
    ],

    declarations: [
        WikipediaAutocompleteComponent
    ],
})
export class WikipediaModule{

}