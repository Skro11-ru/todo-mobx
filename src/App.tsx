import React from 'react';
import { observer } from 'mobx-react-lite';
import TodoView from './modules/Todo/views/TodoView/TodoView';
import './App.scss';
import store from './modules/Notifications/store';
import NotificationsView from './modules/Notifications/views/NotificationsView/NotificationsView';
const App = observer(() => {
  return (
    <>
      <div className="background"></div>
      <TodoView />
      {store.isShowNotification ? <NotificationsView /> : ''}
    </>
  );
});
export default App;
