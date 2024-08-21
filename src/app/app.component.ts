import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';
import { DUMMY_USERS } from '../dummy-users';
import { type UserDataType } from '../Types/types';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Interface';
  users = DUMMY_USERS;
  selectedUserid?: string;

  onSelectedUser(id: string) {
    this.selectedUserid = id;
  }

  get selectedUser() {
    return this.users.find(
      (user: UserDataType) => user.id == this.selectedUserid
    );
  }
}
