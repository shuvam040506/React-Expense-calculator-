import React, { useState, useEffect, useMemo } from 'react';
import Header from './components/Header';
import Summary from './components/Summary';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';

const LOCAL_STORAGE_KEY = 'expenseTracker.expenses';
const LOCAL_STORAGE_THEME_KEY = 'expenseTracker.theme';

const categories = ['Food', 'Transport', 'Utilities', 'Entertainment', 'Health', 'Other'];

function App() {
  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY);
    return savedTheme ? savedTheme : 'light';
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(expenses));
  }, [expenses]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const addExpense = (expense) => {
    setExpenses(prev => [expense, ...prev]);
  };

  const deleteExpense = (id) => {
    setExpenses(prev => prev.filter(exp => exp.id !== id));
  };

  const totalAmount = useMemo(() => {
    return expenses.reduce((acc, exp) => acc + exp.amount, 0);
  }, [expenses]);

  const categoryTotals = useMemo(() => {
    const totals = {};
    categories.forEach(cat => {
      totals[cat] = 0;
    });
    expenses.forEach(exp => {
      if (totals[exp.category] !== undefined) {
        totals[exp.category] += exp.amount;
      }
    });
    return totals;
  }, [expenses]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="app-container">
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main>
        <ExpenseForm categories={categories} addExpense={addExpense} />
        <Summary total={totalAmount} categoryTotals={categoryTotals} />
        <ExpenseList expenses={expenses} deleteExpense={deleteExpense} />
      </main>
    </div>
  );
}

export default App;
