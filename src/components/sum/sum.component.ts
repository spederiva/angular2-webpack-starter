import {Component, Input, OnInit, Output, EventEmitter} from "@angular/core";

@Component({
    selector: 'sum',

    template: `
        <div><input [ngModel]="num1" (ngModelChange)="num1Change($event)" type="number" /></div>
        <div><input [ngModel]="num2" (ngModelChange)="num2Change($event)" type="number"/></div>

        <div><input [ngModel]="result" type="text"/></div>
    `
})
export class SumComponent extends OnInit {
    @Input() result:number;
    @Output() resultChange = new EventEmitter<number>();

    private num1:number = 5;
    private num2:number = 7;

    constructor() {
        super();
    }

    ngOnInit():void {
        this.sumAndEmit();
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