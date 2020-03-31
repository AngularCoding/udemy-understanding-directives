import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor = 'transparent'
  @Input('appBetterHighlight') highLightColor = 'blue'
  @HostBinding('style.backgroundColor') bkColor = this.defaultColor;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
    // this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'white');
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.bkColor = this.highLightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.bkColor = this.defaultColor;
  }
}
