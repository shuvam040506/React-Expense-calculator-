import React from 'react';
import PropTypes from 'prop-types';
import ExpenseItem from './ExpenseItem';

function ExpenseList({ expenses, deleteExpense }) {
  if (expenses.length === 0) {
    return <p>No expenses added yet.</p>;
  }

  return (
    <section className="card expense-list-container" aria-label="List of expenses">
      <h2>Expenses</h2>
      <ul className="expense-list">
        {expenses.map(expense => (
          <ExpenseItem key={expense.id} expense={expense} deleteExpense={deleteExpense} />
        ))}
      </ul>
    </section>
  );
}

ExpenseList.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteExpense: PropTypes.func.isRequired,
};

export default ExpenseList;
