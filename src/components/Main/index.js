import PropTypes from 'prop-types';

import Currency from './Currency';

import './main.scss';

// composant:
function Currencies({ currencies, handleClickDevise }) {
  return (
    <main className="currencies">
      <h2 className="currencies-title">Currencies</h2>
      <ul className="currencies-currencies">
        {currencies.map((currency) => (
          <Currency {...currency} key={currency.name} handleClickDevise={handleClickDevise} />
          /* {<li
            className="currencies-currencies-item"
            key={currency.name}
            onClick={() => {
              console.log(currency.rate, currency.name);
            }}
          >
            {currency.name}
          </li>} */
        ))}
      </ul>
    </main>
  );
}

Currencies.propTypes = {
  handleClickDevise: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      // rate: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Currencies;
