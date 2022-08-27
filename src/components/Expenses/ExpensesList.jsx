import React from 'react';
import ExpenseItem from './ExpenseItem';

import Styles from '../../Styles/ExpensesList.module.scss';

const ExpensesList = ({ filteredExpenses }) => {
  if (filteredExpenses.length === 0) {
    return (
      <h2 className={Styles.expensesList__fallback}>Found no expenses.</h2>
    );
  }

  return (
    <ul className={Styles.expensesList}>
      {filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
