import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {WikipediaAutocompleteComponent} from "./components/wikipedia-autocomplete/wikipedia-autocomplete.component";

@NgModule({
    imports: [
        RouterModule.forChild([{
            path: 'wikipedia',
            component: WikipediaAutocompleteComponent
        }])
    ],

    providers: [],

    declarations: [
        WikipediaAutocompleteComponent
    ],
})
export class WikipediaModule{

}