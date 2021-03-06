import {Directive, Renderer, ElementRef} from 'angular2/core';


/**
 * The blur attribute applies the CSS blur attribute to an element. If the CSS attribute is not supported,
 * it will fall back to applying a semi-transparent background color to the element.
 *
 * @demo /docs/v2/demos/blur/
 */
@Directive({
  selector: '[blur]'
})
export class Blur {
  constructor(private elementRef: ElementRef, private renderer: Renderer) {
    renderer.setElementStyle(elementRef, '-webkit-backdrop-filter', 'blur(10px)');
  }
}
