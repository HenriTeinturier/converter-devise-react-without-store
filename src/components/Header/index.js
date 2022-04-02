// import
import PropTypes from 'prop-types';

import './header.scss';

// composant:
function Header({ amountToConvert, currency, setAmountToConvert }) {
  return (
    <header className="header">
      <h1 className="header-title">Converter</h1>
      <div className="header-toconvert">
        <p className="header-toconvert-amount">Montant à convertir</p>
        <input
          type="text"
          className="header-toconvert-search"
          placeholder={amountToConvert}
          value={amountToConvert}
          onChange={(event) => {
            setAmountToConvert(event.currentTarget.value);
          }

          }
        />
        <p className="header-toconvert-amount">{currency}</p>
      </div>
    </header>
  );
}

Header.propTypes = {
  amountToConvert: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  setAmountToConvert: PropTypes.func.isRequired,
};

export default Header;
