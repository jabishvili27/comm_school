import { Directive, ElementRef, Input, ViewChild } from '@angular/core';
import { status } from '../parent.component';
import { Task1Component } from './task1.component';
@Directive({
  selector: '[appStatus]',
})
export class StatusDirective {
  constructor(private el: ElementRef) {}
  @Input() status: any;
  ngOnInit() {
    if (this.status === status.deleted) {
      this.el.nativeElement.style.backgroundColor = 'red';
    } else if (this.status === status.active) {
      this.el.nativeElement.style.backgroundColor = 'green';
    } else this.el.nativeElement.style.backgroundColor = 'blue';
  }
}
