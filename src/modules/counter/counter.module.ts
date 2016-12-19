import {NgModule} from "@angular/core";
import {RouterModule} from '@angular/router';
import {NewCounterComponent} from "./components/newcounter.component";
import {CounterService} from "./service/counter.service";
import {ManyCounters} from "./components/manycounters.component";

@NgModule({
    imports: [
        RouterModule.forChild([{
            path: 'newcounter', component: ManyCounters
        }])

    ],

    declarations: [
        NewCounterComponent,
        ManyCounters
    ],

    providers: [
        // CounterService
    ],


})
export class CounterModule {

}