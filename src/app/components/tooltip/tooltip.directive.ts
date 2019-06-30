import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective {

  constructor() { }

  @Input('awesomeTooltip') text = '';

  @HostListener('mouseenter')
  show() { }

  @HostListener('mouseout')
  hide() { }

}