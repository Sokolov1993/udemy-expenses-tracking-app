import React from 'react';
import Styles from '../../Styles/ExpenseDate.module.scss';

const ExpenseDate = (props) => {
  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const year = props.date.toLocaleString('en-US', { year: '2-digit' });
  const day = props.date.getFullYear();

  return (
    <div className={Styles.expenseDate}>
      <div className={Styles.expenseDate__month}>{month}</div>
      <div className={Styles.expenseDate__year}>{year}</div>
      <div className={Styles.expenseDate__day}>{day}</div>
    </div>
  );
};

export default ExpenseDate;
