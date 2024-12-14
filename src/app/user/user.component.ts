import { Component } from '@angular/core';
import { DUMMY_USERS } from '../data/dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  selectedUser = DUMMY_USERS[0];
}
