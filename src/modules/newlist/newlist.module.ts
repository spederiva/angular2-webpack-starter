import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms'
import {RouterModule} from '@angular/router'
import {ListComponent} from "./components/list/list.component";
import {ListService} from "./components/list/list-service.service";
import {AddPerson} from "./components/list/add-person.component";
import {InMemoryWebApiModule} from "angular-in-memory-web-api";
import {UserMockData} from "./components/list/users-mock-data";

@NgModule({
    imports:[
        BrowserModule,
        FormsModule,

        RouterModule.forChild([{
            path: 'newlist',
            component: ListComponent
        }]),

        InMemoryWebApiModule.forRoot(UserMockData)

    ],

    declarations: [
        ListComponent,
        AddPerson
    ],

    providers:[
        ListService
    ]
})
export class NewListModule{

}