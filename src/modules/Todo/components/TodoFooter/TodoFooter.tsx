import React, { useMemo } from 'react';
import './TodoFooter.scss';
import { observer } from 'mobx-react-lite';
import store from '../../store';
import SelectComponent from '../../../../components/UI/Select/SelectComponent';

const TodoFooter = observer(() => {
  const filterTasks = (filter: string) => {
    store.setFilterValue(filter);
  };
  const options = useMemo(
    () => [
      { name: 'Все', value: 'allTasks' },
      { name: 'Выполненные', value: 'completedTasks' },
      { name: 'Невыполненные', value: 'uncompletedTasks' },
    ],
    [],
  );

  return (
    <footer className="footer">
      <span className="footer__count-remaining-tasks">
        {store.lengthFilteredList} / {store.allTasksLength}
      </span>
      <div className="footer__filters">
        <SelectComponent
          value={store.filterValue}
          onChange={filterTasks}
          defaultValue="Фильтр"
          options={options}
        />
      </div>
    </footer>
  );
});

export default TodoFooter;
