import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule, JsonpModule} from '@angular/http';
import {FormsModule} from "@angular/forms";
import {RouterModule, Routes} from '@angular/router'

import {appRoutes} from "./app.routing";

import {CalculateModule} from "./modules/calculate/calculate.module";

import {AppComponent} from "./components/app/app.component";
import {ShoppingListComponent} from "./components/shopping-list/shopping-list.component";
import {SizerComponent} from "./components/sizer/sizer.component";
import {MyButtonComponent} from "./components/myButton/my-button.component";
import {CounterComponent} from "./components/counter/counter.component";
import {CounterComponent2} from "./components/counter2/counter.component";
import {NumFieldComponent} from "./components/numFieldComponent/numfield.component";
import {ListComponent} from "./components/list/list";
import {TheFormComponent} from "./components/the-form/TheFormComponent";


import '../public/css/styles.css';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        JsonpModule,
        FormsModule,
        RouterModule.forRoot(appRoutes),

        CalculateModule
    ],

    declarations: [
        AppComponent,
        ShoppingListComponent,
        SizerComponent,
        CounterComponent,
        CounterComponent2,
        NumFieldComponent,
        ListComponent,
        TheFormComponent,
        MyButtonComponent
    ],

    bootstrap: [AppComponent]
})
export class AppModule {

}