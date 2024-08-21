import { Component, Input, EventEmitter, Output } from '@angular/core';
import { type UserDataType } from '../../Types/types';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) users!: UserDataType;
  @Input({ required: true }) selected!: boolean;

  @Output() selectedUserId = new EventEmitter<string>();

  get imagePath() {
    return '/assets/' + this.users.avatar;
  }

  onSelectedUser() {
    this.selectedUserId.emit(this.users.id);
  }
}
