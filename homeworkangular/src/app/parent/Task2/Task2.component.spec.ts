/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Task2Component } from './Task2.component';

describe('Task2Component', () => {
  let component: Task2Component;
  let fixture: ComponentFixture<Task2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Task2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Task2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
