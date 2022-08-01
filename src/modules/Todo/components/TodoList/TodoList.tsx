import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import './TodoList.scss';
import store from '../../store';
import TodoItem from '../TodoItem/TodoItem';
const TodoList = observer(() => {
  useEffect(() => {
    store.getTasksList().then();
  }, []);
  return (
    <ul className="todo-list">
      {store.tasks && store.tasks.length && !store.loader ? (
        <>
          {store.filteredList.map((task) => (
            <TodoItem task={task} key={task.id} />
          ))}
        </>
      ) : (
        ''
      )}
      {store.loader ? <div className="todo-list__is-empty">Загрузка данных...</div> : ''}
      {!store.loader ? <div className="todo-list__is-empty">Задачи отсутствуют</div> : ''}
    </ul>
  );
});

export default TodoList;
