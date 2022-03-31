// import
import PropTypes from 'prop-types';

import './header.scss';

// composant:
function Header({ amountToConvert, currency }) {
  return (
    <header className="header">
      <h1 className="header-title">Converter</h1>
      <p className="header-amount">{amountToConvert} {currency}</p>
    </header>
  );
}

Header.propTypes = {
  amountToConvert: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};

export default Header;
