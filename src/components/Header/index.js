// import
import PropTypes from 'prop-types';

import './header.scss';

// composant:
function Header() {
  return (
    <div className="header">
      <h1 className="header-title">Converter</h1>
      <p className="header-montant">1 euro</p>
    </div>
  );
}

export default Header;
