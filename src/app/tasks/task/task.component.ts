import { Component, Input, Output, EventEmitter } from '@angular/core';
import { type TasksDataType } from '../../../Types/types';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: TasksDataType;

  @Output() completed = new EventEmitter<string>();

  onCompleted() {
    this.completed.emit(this.task.id);
  }
}
