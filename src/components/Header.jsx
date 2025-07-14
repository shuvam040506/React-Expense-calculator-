import React from 'react';
import PropTypes from 'prop-types';

function Header({ theme, toggleTheme }) {
  return (
    <header className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h1>Expense Tracker 😀</h1>
      <button onClick={toggleTheme} aria-label="Toggle theme">
        {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
      </button>
    </header>
  );
}

Header.propTypes = {
  theme: PropTypes.string.isRequired,
  toggleTheme: PropTypes.func.isRequired,
};

export default Header;
