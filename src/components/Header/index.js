// import
import PropTypes from 'prop-types';

import './header.scss';

// composant:
function Header({ toConvert, currency}) {
  return (
    <header className="header">
      <h1 className="header-title">Converter</h1>
      <p className="header-amount">{toConvert} {currency}</p>
    </header>
  );
}

Header.proptype = {
  toConvert: PropTypes.string.isRequired,
  currency: PropTypes.number.isRequired,
};

export default Header;
