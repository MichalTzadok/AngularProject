import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[MouseEffect]'
})
// The `MouseEffectDirective` is an Angular directive that changes the color and style of an element when the mouse pointer enters and leaves the element.
export class MouseEffectDirective {
  // Takes two parameters: 
  // - `ElementRef`: A reference to the element on which this directive is applied.
  // - `Renderer2`: A service that provides methods to manipulate the DOM in a safe way.
  constructor(private el: ElementRef, private renderer: Renderer2) { }
  // This method is called when the mouse pointer enters the element. It changes the text color to red.
  @HostListener('mouseenter') onMouseEnter() {
    this.changeColor('red');
  }
  // This method is called when the mouse pointer leaves the element. It changes the text color to brown, sets the font weight to bold, and changes the border color to brown.
  @HostListener('mouseleave') onMouseLeave() {
    this.changeColor('brown');
    this.renderer.setStyle(this.el.nativeElement, 'font-weight', 'bold');
    this.renderer.setStyle(this.el.nativeElement, 'border-color', 'brown');

  }
  //- This private method changes the text color of the element to the specified color using the `Renderer2` service.
  private changeColor(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'color', color);
  }
}
