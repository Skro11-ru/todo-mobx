import { makeAutoObservable } from 'mobx';
import moment from 'moment';
import { ITaskItem } from '../interfaces';
import Services from '../Services';

class TodoStore {
  tasks: ITaskItem[] = [
    {
      id: '111',
      text: 'delectus aut autem',
      completed: true,
      createdAt: '2022-07-29T10:53:48.613Z',
    },
    {
      id: '222',
      text: 'quis ut nam facilis et officia qui',
      completed: true,
      createdAt: '2022-07-29T10:53:48.613Z',
    },
    {
      id: '333',
      text: 'fugiat veniam minus',
      completed: false,
      createdAt: '2022-07-29T10:53:48.613Z',
    },
  ];

  filter = 'all';

  constructor() {
    makeAutoObservable(this);
  }

  async getTasksList() {
    const tasks = await Services.getTasksListAction();
    if (tasks) {
      this.sortTasks(tasks);
      this.setTasks(tasks);
    }
  }

  sortTasks(tasks: ITaskItem[]) {
    return tasks.length ? tasks.sort((a, b) => moment(b.createdAt).diff(a.createdAt)) : [];
  }

  setTasks(tasks: ITaskItem[]) {
    this.tasks = tasks;
  }

  addTask(task: ITaskItem) {
    this.tasks.unshift(task);
    if (!Services.localMode) {
      Services.addTaskAction(task).then();
    }
  }

  deleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    if (!Services.localMode) {
      Services.deleteTaskAction(id).then();
    }
  }

  completeTask(task: ITaskItem) {
    this.tasks = this.tasks.map((taskItem) =>
      taskItem.id === task.id ? { ...taskItem, completed: !taskItem.completed } : taskItem,
    );
    if (!Services.localMode) {
      Services.completeTasks(task);
    }
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
