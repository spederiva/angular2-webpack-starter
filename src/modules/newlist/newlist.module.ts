import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms'
import {RouterModule} from '@angular/router'
import {ListComponent} from "./components/list/list.component";
import {ListService} from "./services/list-service.service";
import {AddPerson} from "./components/list/add-person.component";
import {InMemoryWebApiModule} from "angular-in-memory-web-api";
import {UserMockData} from "./services/users-mock-data";
import {FilterLetterPurePipe} from "./pipes/filter-letter-pure.pipe";
import {FilterLetterImpurePipe} from "./pipes/filter-letter-impure.pipe";
import {DetailsComponent} from "./components/details/details.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,

        RouterModule.forChild([
            {
                path: 'newlist',
                component: ListComponent
            },
            {
                path: 'newlist/details/:id',
                component: DetailsComponent
            }
        ]),

        InMemoryWebApiModule.forRoot(UserMockData)

    ],

    declarations: [
        FilterLetterPurePipe,
        FilterLetterImpurePipe,

        ListComponent,
        AddPerson,
        DetailsComponent
    ],

    providers: [
        ListService
    ]
})
export class NewListModule {

}