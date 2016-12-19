import {Component} from "@angular/core";
import {UserService} from "../services/user.service";
import {User} from "../models/User";

@Component({
    selector: 'page-title',

    template: `
        <h1 reverse="" [myhighlight]="highlightColor" [hoverColor]="hoverColor">My Angular2 WebPack App: {{highlightColor}}-{{hoverColor}}</h1>
        <div>User: {{this._user.username}}</div>
    `,

    styles: [`
        h1{
            color: red
        }
    `]
})
export class PageTitleComponent {
    _user:User;

    highlightColor:string = 'green';

    hoverColor:string = 'yellow';

    constructor(userService:UserService) {
        this._user = userService.get();
    }
}