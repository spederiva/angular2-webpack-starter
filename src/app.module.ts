import {NgModule, Optional, SkipSelf} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule, JsonpModule} from '@angular/http';
import {FormsModule} from "@angular/forms";
import {RouterModule, Routes} from '@angular/router'

import '../public/css/styles.css';

import {appRoutes} from "./app.routing";

import {CoreModule} from "./modules/core/core.module";
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
import {SharedModule} from "./modules/shared/shared.module";
import {CounterModule} from "./modules/counter/counter.module";
import {NewListModule} from "./modules/newlist/newlist.module";
import {WikipediaModule} from "./modules/wikipedia/wikipedia.module";


@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        JsonpModule,
        RouterModule.forRoot(appRoutes),

        CoreModule.forRoot({username: 'xxx', password: 'password'}),
        SharedModule,

        CalculateModule,
        CounterModule,
        NewListModule,
        WikipediaModule
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