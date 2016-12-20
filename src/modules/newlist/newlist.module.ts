import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router'
import {ListComponent} from "./components/list/list.component";
import {ListService} from "./components/list/list-service.service";

@NgModule({
    imports:[
        BrowserModule,

        RouterModule.forChild([{
            path: 'newlist',
            component: ListComponent
        }])

    ],

    declarations: [
        ListComponent
    ],

    providers:[
        ListService
    ]
})
export class NewListModule{

}