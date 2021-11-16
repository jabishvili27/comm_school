import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appTask2]',
})
export class Task2Directive {
  constructor(private el: ElementRef) {}
  @HostListener('mouseenter')
  hover() {
    this.el.nativeElement.style.backgroundColor = 'green';
  }
  ngOnInit() {
    this.el.nativeElement.style.backgroundColor = 'red';
  }
}
