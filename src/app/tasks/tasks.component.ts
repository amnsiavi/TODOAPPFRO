import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { type TasksDataType } from '../../Types/types';
import { dummyTasks } from '../../dummy-tasks';
import { type NewTaskDataType } from '../../Types/types';
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) userId!: string;
  tasks = dummyTasks;

  isAddingTask = false;

  get selecteduserTask(): TasksDataType[] {
    return this.tasks.filter(
      (task: TasksDataType) => task.userId === this.userId
    );
  }

  onCompletedTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
  onStartAddingTask() {
    this.isAddingTask = true;
  }
  onCancelTask() {
    this.isAddingTask = false;
  }
  onAddTask(task: NewTaskDataType) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      title: task.title,
      summary: task.summary,
      dueDate: task.date,
      userId: this.userId,
    });
    this.isAddingTask = false;
  }
}
