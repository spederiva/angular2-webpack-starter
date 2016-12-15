import {Directive, ElementRef} from '@angular/core'

@Directive({
    selector: '[reverse]'
})
export class ReverseDirective {
    constructor(el:ElementRef) {
        el.nativeElement.addEventListener('dblclick', (evt:any) => {
            evt.target.textContent = evt.target.textContent
                .split(' ')
                .map((w:string)=>w.split('').reverse().join(''))
                .join(' ');
        });
    }
}