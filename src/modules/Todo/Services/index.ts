import api from '../../../server/api';
import { ITaskItem } from '../interfaces';

class Services {
  getTasksListAction() {
    return (
      api
        .get('/tasks')
        .then((resp) => {
          return resp.data;
        })
        // eslint-disable-next-line no-console
        .catch((error) => console.log(error))
    );
  }

  addTaskAction(task: ITaskItem) {
    return (
      api
        .post('/tasks', task)
        .then((resp) => {
          return resp;
        })
        // eslint-disable-next-line no-console
        .catch((error) => console.log(error))
    );
  }

  deleteTaskAction(id: string) {
    return (
      api
        .delete(`/tasks/${id}`)
        .then((resp) => {
          return resp;
        })
        // eslint-disable-next-line no-console
        .catch((error) => console.log(error))
    );
  }

  completeTasks(task: ITaskItem) {
    return (
      api
        .patch(`/tasks/${task.id}`, { completed: !task.completed })
        .then((resp) => {
          return resp;
        })
        // eslint-disable-next-line no-console
        .catch((error) => console.log(error))
    );
  }
}

export default new Services();
