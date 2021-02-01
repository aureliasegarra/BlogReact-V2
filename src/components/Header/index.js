// Import npm
import React from 'react';
import PropTypes from 'prop-types';

// Import data
import './style.scss';

const Header = ({ categories }) => (
  <header className="header">
    <nav className="header__nav">
      <ul>
        {categories.map(({ label, route }) => (
          <li key={label}>
            <a href={route} className="header__navlink">{label}</a>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);

Header.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      route: PropTypes.string,
      label: PropTypes.string,
    }),
  ).isRequired,
};

export default Header;
