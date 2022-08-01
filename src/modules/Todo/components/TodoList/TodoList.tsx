import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import './TodoList.scss';
import TodoStore from '../../store';
import Services from '../../Services';
import TodoItem from '../TodoItem/TodoItem';
const TodoList = observer(() => {
  useEffect(() => {
    TodoStore.getTasksList().then();
  }, []);
  return (
    <ul className="todo-list">
      {TodoStore.tasks && TodoStore.tasks.length && !Services.loader ? (
        <>
          {TodoStore.filteredList.map((task) => (
            <TodoItem task={task} key={task.id} />
          ))}
        </>
      ) : (
        ''
      )}
      {Services.loader ? <div className="todo-list__is-empty">Загрузка данных...</div> : ''}
      {!Services.loader && !TodoStore.tasks ? (
        <div className="todo-list__is-empty">Задачи отсутствуют</div>
      ) : (
        ''
      )}
    </ul>
  );
});

export default TodoList;
