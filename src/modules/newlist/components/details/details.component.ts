import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
    selector: '',

    template: `
        <h1>
            Hello World!
        </h1>

        <div *ngFor="let x of xxx">
        [{{x}}]
        </div>
    `
})
export class DetailsComponent implements OnInit{
    constructor(
        private router: Router,
        private route: ActivatedRoute
    ) {

    }

    xxx:Number[];

    ngOnInit():void {
        let route = this.route;
        debugger;
        console.log(route);

        route.params.switchMap((params:Params)=>this.xxx.push(+params['id']));

        debugger;
        console.log(this.xxx)
    }

}