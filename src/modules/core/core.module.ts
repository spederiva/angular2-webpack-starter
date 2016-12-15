import {NgModule, Optional, SkipSelf} from "@angular/core";
import {PageTitleComponent} from "./components/PageTitle.component";
import {CalculateModule} from "../calculate/calculate.module";

@NgModule({
    imports: [],

    declarations: [
        PageTitleComponent
    ],

    exports: [
        PageTitleComponent
    ]
})
export class CoreModule {
    constructor(@Optional() @SkipSelf()  parentModule: CoreModule){
        console.log('parentModule', parentModule);
    }

}