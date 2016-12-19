import {Directive, ElementRef, HostListener, Input} from '@angular/core'

@Directive({
    selector: '[reverse]'
})
export class ReverseDirective {
    constructor(private el: ElementRef) {
        // el.nativeElement.addEventListener('dblclick', (evt:any) => {
        //     evt.target.textContent = evt.target.textContent
        //         .split(' ')
        //         .map((w:string)=>w.split('').reverse().join(''))
        //         .join(' ');
        // });
    }

    @HostListener('dblclick', ['$event.target']) onClick(target: any) {
        console.log('xxx', this.el)

        target.textContent = target.textContent
            .split(' ')
            .map((w: string) => w.split('').reverse().join(''))
            .join(' ');
    }
}