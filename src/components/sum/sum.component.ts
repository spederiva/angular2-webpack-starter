import {Component, Input, OnInit, Output, EventEmitter} from "@angular/core";

@Component({
    selector: 'sum',

    template: `
        <div><input [ngModel]="num1" (ngModelChange)="num1Change($event)" /></div>
        <div><input [ngModel]="num2" (ngModelChange)="num2Change($event)" /></div>

        <div><input [ngModel]="result" type="text"/></div>
    `
})
export class SumComponent extends OnInit {
    @Input() result:number;
    // @Output() resultChange = new EventEmitter<number>();

    @Input() sumResult:number;
    @Output() sumResultChange = new EventEmitter<number>();

    private num1:number = 5;
    private num2:number = 7;

    constructor() {
        super();

        this.sumAndEmit();
    }

    ngOnInit():void {
    }

    num1Change(num:number) {
        this.num1 = num;
        this.sumAndEmit();
    }

    num2Change(num:number) {
        this.num2 = num;
        this.sumAndEmit();
    }

    sumAndEmit(){
        this.result = +this.num1 + +this.num2;
        // this.resultChange.emit(this.result);

        this.sumResultChange.emit(this.result);
    }
}