import { Component, Input, OnInit } from '@angular/core';
import { Data } from '@angular/router';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css'],
})
export class Task1Component implements OnInit {
  toma = '';
  @Input() saxeli: any;
  @Input() gvari: any;
  @Input() about: any;
  @Input() birthday: any;
  @Input() status: any;

  constructor() {}

  ngOnInit() {}
}
