/* tslint:disable:member-ordering */
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({ selector: '[appHightlightColor]' })
export class HighlightDirective {
  @Input('appHightlightColor') appHightlightColor: string;
  @Input('defaultColor') defaultColor = 'red';

  constructor(private el: ElementRef) {
    // this.el.nativeElement.style.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appHightlightColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
