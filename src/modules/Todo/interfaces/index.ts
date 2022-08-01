export interface ITaskItem {
  id: string;
  text: string;
  createdAt: string;
  completed: boolean;
}
export interface ITask {
  task: ITaskItem;
}
