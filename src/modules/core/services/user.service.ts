import {Optional, Injectable} from '@angular/core';
import {User} from "../models/User";

Injectable()
export class UserService {
    _defaultUser:User;

    constructor(@Optional() user:User) {
        console.log('user', user);

        if(user){
            this._defaultUser = user;
        }
    }

    get():User{
        return this._defaultUser;
    }
}