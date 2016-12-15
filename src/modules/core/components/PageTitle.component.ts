import {Component} from "@angular/core";
import {UserService} from "../services/user.service";
import {User} from "../models/User";

@Component({
    selector: 'page-title',

    template: `
        <h1>My Angular2 WebPack App</h1>
        <div>User: {{this._user.username}}</div>
    `
})
export class PageTitleComponent {
    _user:User;

    constructor(userService:UserService) {
        this._user = userService.get();
    }
}