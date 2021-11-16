import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Task2',
  templateUrl: './Task2.component.html',
  styleUrls: ['./Task2.component.css'],
})
export class Task2Component implements OnInit {
  file = [1, 2, 3, 4, 5, 6, 2, 7, 8, 9, 11, 12, 12, 13];
  constructor() {}

  ngOnInit() {}
}
