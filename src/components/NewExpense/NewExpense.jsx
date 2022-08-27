import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';

import Styles from '../../Styles/NewExpense.module.scss';
import StylesForBtn from '../../Styles/ExpenseForm.module.scss';

const NewExpense = ({ onAddExpense }) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: (Math.random() * Math.random()).toString(),
    };
    onAddExpense(expenseData);
    setIsEditing(false);
  };

  const startEditingHandler = () => setIsEditing(true);

  const stopEditingHandler = () => setIsEditing(false);

  return (
    <div className={Styles.NewExpense}>
      {!isEditing && (
        <button
          className={StylesForBtn.NewExpense__form__button}
          onClick={startEditingHandler}
        >
          Add New Expense
        </button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          closeForm={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
