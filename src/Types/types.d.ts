export interface UserDataType {
  id: string;
  name: string;
  avatar: string;
}

export interface TasksDataType {
  id: string;
  userId: string;
  title: string;
  summary: string;
  dueDate: string;
}

export interface NewTaskDataType {
  title: string;
  summary: string;
  date: string;
}
