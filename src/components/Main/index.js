import PropTypes from 'prop-types';

import Currency from './Currency';

import './main.scss';

// composant:
function Currencies({
  currencies,
  handleCurrencyClick,
  searchValue,
  setSearch,
}) {
  return (
    <main className="currencies">
      {/* <h2 className="currencies-title">Currencies</h2> */}
      <input
        type="text"
        className="currencies-search"
        placeholder="Rechercher"
        value={searchValue}
        onChange={(event) => {
          setSearch(event.currentTarget.value);
        }}
      />
      <ul className="currencies-currencies">
        {currencies.map((currency) => (
          <Currency {...currency} key={currency.name} handleCurrencyClick={handleCurrencyClick} />
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
  handleCurrencyClick: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      // rate: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Currencies;
