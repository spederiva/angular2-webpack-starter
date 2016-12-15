import {Directive, ElementRef} from "@angular/core";

@Directive({
    selector: '[highlight]'
})
export class HightlightDirective {
    constructor(el:ElementRef) {

        el.nativeElement.style.backgroundColor = 'yellow';

        //console.log('ElementRef', el);

    }
}

