import PropTypes from 'prop-types';

// composant:
function Currency({ name, handleCurrencyClick }) {
  return (
    <li
      className="currencies-currencies-item"
      onClick={handleCurrencyClick}
    >
      {name}
    </li>
  );
}

Currency.propTypes = {
  name: PropTypes.string.isRequired,
  // rate: PropTypes.number.isRequired,
  // handleClickDevise: PropTypes.func.isRequired,
  handleCurrencyClick: PropTypes.func.isRequired,
};

// export
export default Currency;
