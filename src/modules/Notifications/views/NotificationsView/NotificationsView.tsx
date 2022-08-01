import React from 'react';
import './NotificationsView.scss';
import { observer } from 'mobx-react-lite';
import NotificationsStore from '../../store';

const NotificationsView = observer(() => {
  const setClass = () => {
    return NotificationsStore.notificationOptions
      ? `notifications-view notifications-view_${NotificationsStore.notificationOptions.type}`
      : 'notifications-view';
  };
  return (
    <div className={setClass()}>
      <div className="notifications-view__title">{NotificationsStore.titleNotification} </div>
      <p className="notifications-view__message">{NotificationsStore.messageNotification}</p>
    </div>
  );
});

export default NotificationsView;
