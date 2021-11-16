import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { AgePipe } from './parent/task1/age.pipe';
import { StatusDirective } from './parent/task1/status.directive';
import { Task1Component } from './parent/task1/task1.component';
import { UsernamePipe } from './parent/task1/username.pipe';

import { Task2Component } from './parent/Task2/Task2.component';
import { Task2Directive } from './parent/Task2/task2.directive';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    Task2Component,
    Task2Directive,
    Task1Component,
    AgePipe,
    StatusDirective,
    UsernamePipe,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
