import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from "./app/app.component";
import {ShoppingListComponent} from "./components/shopping-list/shopping-list.component";

import '../public/css/styles.css';

@NgModule({
    imports: [
        BrowserModule
    ],

    declarations: [
        AppComponent, ShoppingListComponent
    ],

    bootstrap: [AppComponent]
})
export class AppModule {

}