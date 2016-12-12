import {Routes} from '@angular/router';
import {CounterComponent} from "./components/counter/counter.component";
import {NumFieldComponent} from "./components/numFieldComponent/numfield.component";
import {CounterComponent2} from "./components/counter2/counter.component";
import {ListComponent} from "./components/list/list";
import {MyButtonComponent} from "./components/myButton/my-button.component";
import {ShoppingListComponent} from "./components/shopping-list/shopping-list.component";
import {SizerComponent} from "./components/sizer/sizer.component";
import {TheFormComponent} from "./components/the-form/TheFormComponent";
import {SumComponent} from "./modules/calculate/component/sum/sum.component";

export const appRoutes:Routes = [
    {path: 'counter', component: CounterComponent},
    {path: 'counter2', component: CounterComponent2},
    {path: 'list', component: ListComponent},
    {path: 'myButton', component: MyButtonComponent},
    {path: 'numFieldComponent', component: NumFieldComponent},
    {path: 'shopping-list', component: ShoppingListComponent},
    {path: 'sizer', component: SizerComponent},
    {path: 'the-form', component: TheFormComponent},
    //{path: 'sum', component: SumComponent}
    //{path: 'sum', loadChildren: 'modules/calculate/calculate.module#CalculateModule'}

];