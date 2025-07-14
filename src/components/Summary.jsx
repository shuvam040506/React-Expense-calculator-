import React from 'react';
import PropTypes from 'prop-types';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

function Summary({ total, categoryTotals }) {
  const data = {
    labels: Object.keys(categoryTotals),
    datasets: [
      {
        data: Object.values(categoryTotals),
        backgroundColor: [
          '#3B82F6',
          '#10B981',
          '#F59E0B',
          '#EF4444',
          '#6B7280',
          '#8B5CF6'
        ],
        hoverOffset: 30
      }
    ]
  };

  return (
    <section className="card summary-container" aria-label="Expense summary">
      <h2>Total Spent: ${total.toFixed(2)}</h2>
      <Doughnut data={data} />
    </section>
  );
}

Summary.propTypes = {
  total: PropTypes.number.isRequired,
  categoryTotals: PropTypes.objectOf(PropTypes.number).isRequired,
};

export default Summary;
