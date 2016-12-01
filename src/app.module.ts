import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule, JsonpModule} from '@angular/http';
import {AppComponent} from "./components/app/app.component";
import {ShoppingListComponent} from "./components/shopping-list/shopping-list.component";

import '../public/css/styles.css';
import {CalculateComponent} from "./components/calculate/calculate.component";
import {SumComponent} from "./components/sum/sum.component";
import {FormsModule} from "@angular/forms";
import {SizerComponent} from "./components/sizer/sizer.component";
import {CounterComponent} from "./components/counter/counter.component";
import {CounterComponent2} from "./components/counter2/counter.component";
import {NumFieldComponent} from "./components/numFieldComponent/numfield.component";
import {ListComponent} from "./components/list/list";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        JsonpModule,
        FormsModule
    ],

    declarations: [
        AppComponent,
        ShoppingListComponent,
        CalculateComponent,
        SumComponent,
        SizerComponent,
        CounterComponent,
        CounterComponent2,
        NumFieldComponent,
        ListComponent
    ],

    bootstrap: [AppComponent]
})
export class AppModule {

}