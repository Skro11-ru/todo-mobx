import React from 'react';
import './TodoItem.scss';
import CheckboxInput from '../../../../components/UI/CheckboxInput/CheckboxInput';
import { ITask } from '../../interfaces';
import store from '../../store';
import ButtonSvg from '../../../../components/UI/ButtonSvg/ButtonSvg';

const TodoItem = ({ task }: ITask) => {
  const parentHandleChange = () => {
    store.completeTask(task);
  };
  const deleteTask = () => {
    store.deleteTask(task.id);
  };
  return (
    <li className="todo-list__item">
      <CheckboxInput
        checked={task.completed}
        id={task.id}
        label={task.text}
        onChange={parentHandleChange}
      />
      <div className="todo-list__button-delete">
        <ButtonSvg nameImg="icon-remove" onClick={deleteTask} />
      </div>
    </li>
  );
};
export default TodoItem;
