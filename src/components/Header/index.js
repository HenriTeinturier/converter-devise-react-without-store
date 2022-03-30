// import
import PropTypes from 'prop-types';

import './header.scss';

// composant:
function Header({ toConvert, currency}) {
  return (
    <div className="header">
      <h1 className="header-title">Converter</h1>
      <p className="header-montant">{toConvert} {currency}</p>
    </div>
  );
}

Header.proptype = {
  toConvert: PropTypes.string.isRequired,
  currency: PropTypes.number.isRequired,
};

export default Header;
