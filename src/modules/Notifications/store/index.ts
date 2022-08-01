import { makeAutoObservable } from 'mobx';
import { INotificationOptions } from '../interfaces';
class NotificationsStore {
  isShowNotification = false;

  notificationOptions: INotificationOptions = { message: '', type: '' };

  typeNotification: { [key: string]: string } = {
    error: 'Ошибка',
    success: 'Успех',
  };

  constructor() {
    makeAutoObservable(this);
  }

  toggleShowNotification(isShowNotification: boolean) {
    this.isShowNotification = isShowNotification;
  }

  setNotificationOptions(options: INotificationOptions) {
    this.notificationOptions = options;
  }

  get titleNotification() {
    return this.typeNotification[this.notificationOptions.type];
  }

  get messageNotification() {
    return this.notificationOptions.message;
  }
}

export default new NotificationsStore();
