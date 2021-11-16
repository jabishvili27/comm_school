import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent {
  today = new Date();
  birthDate: any;
  IsLoadUser: boolean = false;
  oriwami = true;
  age: any;
  public users: any;

  public loadUsers() {
    setTimeout(() => {
      this.IsLoadUser = true;
      this.oriwami = !this.oriwami;
      this.users = [
        {
          firstname: 'toma',
          lastname: 'jabishvili',
          about: 'about toma',
          birthday: new Date('2000-10-27'),
          status: status.deleted,
        },
        {
          firstname: 'toma1',
          lastname: 'jabishvili',
          about: 'about toma',
          birthday: new Date('2000-10-27'),
          status: status.active,
        },
        {
          firstname: 'toma2',
          lastname: 'jabishvili',
          about: 'about toma',
          birthday: new Date('2000-10-27'),
          status: status.inactive,
        },
      ];
    }, 2000);
  }
}

export interface user {
  firstname: string;
  lastname: string;
  about: string;
  birthday: Date;
  status: status;
}
export enum status {
  active = 'active',
  inactive = 'inactive',
  deleted = 'deleted',
}
