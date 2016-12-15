import {NgModule, Optional, SkipSelf, ModuleWithProviders} from "@angular/core";
import { CommonModule }      from '@angular/common';

import {PageTitleComponent} from "./components/PageTitle.component";
import {CalculateModule} from "../calculate/calculate.module";
import {User} from "./models/User";
import {UserService} from "./services/user.service";

@NgModule({
    imports: [],

    providers: [
        UserService
    ],

    declarations: [
        PageTitleComponent
    ],

    exports: [
        PageTitleComponent
    ]
})
export class CoreModule {
    constructor(@Optional() @SkipSelf()  parentModule:CoreModule) {
        console.log('CoreModule', parentModule);

        if (parentModule) {
            throw new Error(
                'Core cannot be loaded more than once'
            );
        }
    }

    static forRoot(user:User):ModuleWithProviders {

        console.log('CoreModule - forRoot', user);

        return {
            ngModule: CoreModule,

            providers: [
                {provide: User, useValue: user}
            ]
        };
    }
}