import {Component, Input, OnInit, Output, EventEmitter} from "@angular/core";
import {settings} from "cluster";

@Component({
    selector: 'sum',

    template: `
        <div>Now: {{now}}</div>
        <div><input [(ngModel)]="myNum" type="text" /></div>

        <div><input [ngModel]="num1" (ngModelChange)="num1Change($event)" type="number" /></div>
        <div><input [ngModel]="num2" (ngModelChange)="num2Change($event)" type="number"/></div>

        <!--<div><input [ngModel]="result" type="text"/></div>-->
    `
})
export class SumComponent implements OnInit {
    @Input() result:number;
    @Output() resultChange = new EventEmitter<number>();

    private now:number = Date.now();
    private myNum:number = 0;

    //private num1:number = 5;
    private num2:number = 7;

    _num1:number = 0
    set num1(val) {
        this._num1 = val;
    }

    get num1() {
        return this._num1;
    }

    constructor() {
    }

    ngOnInit():void {
        //this.sumAndEmit();

        //setInterval(()=> {
        //    this.sumAndEmit();
        //}, 2000)
    }

    num1Change(num:number) {
        console.log('num1Change', num);
        this.num1 = num;
        this.sumAndEmit();
    }

    num2Change(num:number) {
        console.log('num1Change', num);
        this.num2 = num;
        this.sumAndEmit();
    }

    sumAndEmit() {
        this.result = +this.num1 + +this.num2;

        console.log('result: ', this.result, Date.now());

        this.resultChange.emit(this.result);
    }
}