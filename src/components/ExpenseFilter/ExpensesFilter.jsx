import React from 'react';

import Styles from '../../Styles/ExpensesFilter.module.scss';

const ExpenseFilter = ({ onChangeFilter, selected }) => {
  const dropDownChangeHandler = (event) => {
    onChangeFilter(event.target.value);
  };

  return (
    <div className={Styles.ExpensesFilter}>
      <div className={Styles.ExpensesFilter__control}>
        <label>Filter by year</label>
        <select value={selected} onChange={dropDownChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
