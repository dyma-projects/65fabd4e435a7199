import { Directive, ElementRef, HostListener } from '@angular/core';
import { KEY_CODE } from './key_code.enum';

@Directive({
  selector: '[appColor]',
})
export class ColorDirective {
  @HostListener('window:keyup', ['$event']) windowClick(event: KeyboardEvent) {
    switch (event.keyCode) {
      case KEY_CODE.UP_ARROW:
        this.element.nativeElement.style.color = 'red';
        break;

      case KEY_CODE.DOWN_ARROW:
        this.element.nativeElement.style.color = 'blue';
        break;

      case KEY_CODE.LEFT_ARROW:
        this.element.nativeElement.style.color = 'aqua';
        break;

      case KEY_CODE.RIGHT_ARROW:
        this.element.nativeElement.style.color = 'indigo';
        break;
    }
  }

  constructor(private element: ElementRef) {}
}
