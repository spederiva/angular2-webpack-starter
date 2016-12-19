import {Directive, ElementRef, Input, OnInit, HostListener, Host} from "@angular/core";

@Directive({
    selector: '[myhighlight]'
})
export class HighlightDirective implements OnInit{
    @Input('myhighlight') color:string;

    @Input('hoverColor') hoverColor:string;

    constructor(private el:ElementRef) {
    }

    ngOnInit(): void {
        console.log(this.color, this.hoverColor)
        // this.hoverColor = 'violet';
        // this.color = 'red';

        this.el.nativeElement.style.backgroundColor = this.color;
    }

    @HostListener('mouseenter') mouseenter(){
        this.el.nativeElement.style.backgroundColor = this.hoverColor;
    }

    @HostListener('mouseleave') mouseleave(){
        this.el.nativeElement.style.backgroundColor = this.color;
    }
}