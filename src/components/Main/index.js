import PropTypes from 'prop-types';

import Currency from './Currency';

import './main.scss';

// composant:
function Currencies({
  currencies,
  handleCurrencyClick,
  searchValue,
  setSearch,
  isOpen,
}) {
  let cssClass;
  let cssClassSearch;
  if (isOpen === true) {
    cssClass = 'currencies currency--open';
    cssClassSearch = 'currencies-search--open';
  }
  else {
    cssClass = 'currencies';
    cssClassSearch = 'currencies-search';
  }

  return (
    <main className={cssClass}>
      <input
        type="text"
        className={cssClassSearch}
        placeholder="Rechercher"
        value={searchValue}
        onChange={(event) => {
          setSearch(event.currentTarget.value);
        }}
      />
      <ul className="currencies-currencies">
        {currencies.map((currency) => (
          <Currency {...currency} key={currency.name} handleCurrencyClick={handleCurrencyClick} />
        ))}
      </ul>
    </main>
  );
}

Currencies.propTypes = {
  handleCurrencyClick: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  currencies: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Currencies;
