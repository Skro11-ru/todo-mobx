import React, { useState } from 'react';
import './TodoForm.scss';
import store from '../../store';
import { ITaskItem } from '../../interfaces';
import { generateId } from '../../../../helpers/generateId';
import ButtonSvg from '../../../../components/UI/ButtonSvg/ButtonSvg';

const TodoForm = () => {
  const [text, setText] = useState('');
  const keyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      const task: ITaskItem = {
        id: generateId(),
        text,
        createdAt: new Date().toISOString(),
        completed: false,
      };
      store.addTask(task);
      setText('');
    }
  };
  const clickHandler = () => {
    const task: ITaskItem = {
      id: generateId(),
      text,
      createdAt: new Date().toISOString(),
      completed: false,
    };
    store.addTask(task);
    setText('');
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  return (
    <div className="todo-form">
      <h1 className="todo-form__title">To-Do list</h1>
      <div className="todo-form__input-container">
        <input
          className="todo-form__input"
          value={text}
          onChange={onChange}
          onKeyDown={keyDown}
          type="text"
          placeholder="Создайте новую задачу..."
        />
        {text.length ? <ButtonSvg onClick={clickHandler} nameImg="icon-send" /> : ''}
      </div>
    </div>
  );
};

export default TodoForm;
