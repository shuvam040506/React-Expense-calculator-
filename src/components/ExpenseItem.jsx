import React from 'react';
import PropTypes from 'prop-types';

function ExpenseItem({ expense, deleteExpense }) {
  const { id, amount, category, description, date } = expense;

  const handleDelete = () => {
    if (window.confirm('Delete this expense?')) {
      deleteExpense(id);
    }
  };

  return (
    <li className="expense-item">
      <div>
        <strong>{category}</strong> - {description || 'No description'}
      </div>
      <div>
        <span>${amount.toFixed(2)}</span> | <time dateTime={date}>{new Date(date).toLocaleDateString()}</time>
        <button onClick={handleDelete} aria-label={`Delete expense ${description || ''}`}>Delete</button>
      </div>
    </li>
  );
}

ExpenseItem.propTypes = {
  expense: PropTypes.shape({
    id: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    description: PropTypes.string,
    date: PropTypes.string.isRequired,
  }).isRequired,
  deleteExpense: PropTypes.func.isRequired,
};

export default ExpenseItem;
