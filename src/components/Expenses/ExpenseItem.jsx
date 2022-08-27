import React from 'react';
import Styles from '../../Styles/ExpenseItem.module.scss';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';

const ExpenseItem = ({ date, title, amount }) => {
  return (
    <li>
      <Card className={Styles.expenseItem}>
        <ExpenseDate date={date} />
        <div className={Styles.expenseItem__description}>
          <h2>{title}</h2>
          <p className={Styles.expenseItem__price}>${amount}</p>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
