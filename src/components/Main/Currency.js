import PropTypes from 'prop-types';

// composant:
function Currency({ name, handleCurrencyClick, rate }) {
  rate = Math.round(rate * 100) / 100;
  console.log(rate);
  return (
    <li
      className="currencies-currencies-item"
      onClick={() => handleCurrencyClick(name)}
    >
      <div className="currencies-currencies-item-name">{name}</div>
      <div className="currencies-currencies-item-rate">{rate}</div>
    </li>
  );
}

Currency.propTypes = {
  name: PropTypes.string.isRequired,
  rate: PropTypes.number.isRequired,
  // rate: PropTypes.number.isRequired,
  // handleClickDevise: PropTypes.func.isRequired,
  handleCurrencyClick: PropTypes.func.isRequired,
};

// export
export default Currency;
