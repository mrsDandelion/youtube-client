import { Directive, ElementRef, Renderer2, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[BorderColorDirective]'
})
export class BorderColorDirective implements OnInit {
  @Input('BorderColorDirective') private date: string;

  constructor(private elementRef: ElementRef, private renderer2: Renderer2) {}

  public ngOnInit(): void {
    const delta: number = Date.now() - Date.parse(this.date);
    let currentClass: string;
    if (delta < 7 * 24 * 3600 * 1000) {
      currentClass = 'blue-border';
    } else if (delta < 30 * 24 * 3600 * 1000) {
      currentClass = 'green-border';
    } else if (delta < 6 * 30 * 24 * 3600 * 1000) {
      currentClass = 'yellow-border';
    } else {
      currentClass = 'red-border';
    }
    this.renderer2.addClass(this.elementRef.nativeElement, currentClass);
  }
}
