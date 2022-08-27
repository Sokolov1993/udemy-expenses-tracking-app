import React, { useState } from 'react';

import Styles from '../../Styles/ExpenseForm.module.scss';

const ExpenseForm = ({ onSaveExpenseData, closeForm }) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    onSaveExpenseData(expenseData);

    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className={Styles.NewExpense__form__controls}>
        <div className={Styles.NewExpense__form__controls__control}>
          <label htmlFor="input__text">Title</label>
          <input
            type="text"
            id="input__text"
            onChange={titleChangeHandler}
            value={enteredTitle}
          />
        </div>
        <div className={Styles.NewExpense__form__controls__control}>
          <label htmlFor="input__number">Amount</label>
          <input
            type="number"
            id="input__number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={enteredAmount}
          />
        </div>
        <div className={Styles.NewExpense__form__controls__control}>
          <label htmlFor="input__date">Date</label>
          <input
            type="date"
            id="input__date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
            value={enteredDate}
          />
        </div>
      </div>
      <div className={Styles.NewExpense__form__actions}>
        <button
          type="reset"
          className={Styles.NewExpense__form__button}
          onClick={closeForm}
        >
          Cancel
        </button>
        <button type="submit" className={Styles.NewExpense__form__button}>
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
