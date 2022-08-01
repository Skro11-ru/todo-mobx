import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import TodoView from './modules/Todo/views/TodoView/TodoView';
import './App.scss';
import store from './modules/Notifications/store';
import NotificationsView from './modules/Notifications/views/NotificationsView/NotificationsView';
const App = observer(() => {
  const [vh, setVh] = useState(window.innerHeight * 0.01);
  useEffect(() => {
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    window.addEventListener('resize', () => {
      setVh(window.innerHeight * 0.01);
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
  }, [vh]);
  return (
    <>
      <div className="background"></div>
      <TodoView />
      {store.isShowNotification ? <NotificationsView /> : ''}
    </>
  );
});
export default App;
