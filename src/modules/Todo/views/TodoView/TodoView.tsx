import React from 'react';
import './TodoView.scss';
import TodoForm from '../../components/TodoForm/TodoForm';
import TodoList from '../../components/TodoList/TodoList';
import TodoFooter from '../../components/TodoFooter/TodoFooter';

const TodoView = () => {
  return (
    <div className="todo-view">
      <TodoForm />
      <div className="todo-view__container">
        <TodoList />
        <TodoFooter />
      </div>
    </div>
  );
};

export default TodoView;
