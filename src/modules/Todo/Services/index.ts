import api from '../../../server/api';
import { ITaskItem } from '../interfaces';
import NotificationsStore from '../../Notifications/store';
class Services {
  localMode = false;

  loader = false;

  toggleLocalMode(isLocal: boolean) {
    this.localMode = isLocal;
  }

  toggleLoader(isLoading: boolean) {
    this.loader = isLoading;
  }

  getTasksListAction() {
    this.toggleLoader(true);
    return api
      .get('/tasks')
      .then((resp) => {
        NotificationsStore.setNotificationOptions({
          message: 'Успешное соединение с сервером!',
          type: 'success',
        });
        NotificationsStore.toggleShowNotification(true);
        setTimeout(() => {
          NotificationsStore.toggleShowNotification(false);
        }, 5000);
        this.toggleLoader(false);
        return resp.data;
      })
      .catch(() => {
        this.toggleLocalMode(true);
        NotificationsStore.setNotificationOptions({
          message: 'Ошибка соединения с сервером. Приложение работает в локальном режиме',
          type: 'error',
        });
        NotificationsStore.toggleShowNotification(true);
        setTimeout(() => {
          NotificationsStore.toggleShowNotification(false);
        }, 5000);

        this.toggleLoader(false);
      });
  }

  addTaskAction(task: ITaskItem) {
    this.toggleLoader(true);
    return (
      api
        .post('/tasks', task)
        .then((resp) => {
          this.toggleLoader(false);
          return resp;
        })
        // eslint-disable-next-line no-console
        .catch(() => {
          this.toggleLoader(false);
        })
    );
  }

  deleteTaskAction(id: string) {
    this.toggleLoader(true);
    return (
      api
        .delete(`/tasks/${id}`)
        .then((resp) => {
          return resp;
        })
        // eslint-disable-next-line no-console
        .catch(() => {
          this.toggleLoader(true);
        })
    );
  }

  completeTasks(task: ITaskItem) {
    this.toggleLoader(true);
    return (
      api
        .patch(`/tasks/${task.id}`, { completed: !task.completed })
        .then((resp) => {
          return resp;
        })
        // eslint-disable-next-line no-console
        .catch(() => {
          this.toggleLoader(true);
        })
    );
  }
}

export default new Services();
