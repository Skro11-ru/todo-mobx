import { makeAutoObservable } from 'mobx';
import moment from 'moment';
import { ITaskItem } from '../interfaces';
import Services from '../Services';

class TodoStore {
  loader = false;

  tasks: ITaskItem[] = [];

  filter = 'all';

  constructor() {
    makeAutoObservable(this);
  }

  async getTasksList() {
    this.toggleLoader(true);
    const tasks = await Services.getTasksListAction();
    this.sortTasks(tasks);
    this.setTasks(tasks);
    this.toggleLoader(false);
  }

  sortTasks(tasks: ITaskItem[]) {
    return tasks.sort((a, b) => moment(b.createdAt).diff(a.createdAt));
  }

  setTasks(tasks: ITaskItem[]) {
    this.tasks = tasks;
  }

  toggleLoader(isLoading: boolean) {
    this.loader = isLoading;
  }

  addTask(task: ITaskItem) {
    this.tasks.unshift(task);
    Services.addTaskAction(task).then();
  }

  deleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    Services.deleteTaskAction(id).then();
  }

  completeTask(task: ITaskItem) {
    this.tasks = this.tasks.map((taskItem) =>
      taskItem.id === task.id ? { ...taskItem, completed: !taskItem.completed } : taskItem,
    );
    Services.completeTasks(task);
  }

  get allTasks() {
    return this.tasks ? this.tasks : [];
  }

  get allTasksLength() {
    return this.tasks ? this.tasks.length : null;
  }

  get completedTasks() {
    return this.tasks ? this.tasks.filter((task) => task.completed) : [];
  }

  get uncompletedTasks() {
    return this.tasks ? this.tasks.filter((task) => !task.completed) : [];
  }

  get filterValue() {
    return this.filter;
  }

  get filteredList() {
    switch (this.filter) {
      case 'completedTasks':
        return this.completedTasks;
      case 'uncompletedTasks':
        return this.uncompletedTasks;
      default:
        return this.allTasks;
    }
  }

  get lengthFilteredList() {
    return this.filteredList ? this.filteredList.length : null;
  }

  setFilterValue(value: string) {
    this.filter = value;
  }
}

export default new TodoStore();
