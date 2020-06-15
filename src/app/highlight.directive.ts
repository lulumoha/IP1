
import * as core from '@angular/core';
@core.Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  constructor(elem:core.ElementRef) {
    elem.nativeElement.style.backgroundColor="#834c69"
   }
}

