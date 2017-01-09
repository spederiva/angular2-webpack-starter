import {InMemoryDbService} from "angular-in-memory-web-api";
const users = require('json-loader!../../../../_data/users.json');

export class UserMockData implements InMemoryDbService {
    createDb(): {} {
        // let users = [
        //     {id: 1, name: 'Windstorm'},
        //     {id: 2, name: 'Bombasto'},
        //     {id: 3, name: 'Magneta'},
        //     {id: 4, name: 'Tornado'}
        // ];

        return {users};
    }

}