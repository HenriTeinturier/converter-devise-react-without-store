import PropTypes from 'prop-types';

import './footer.scss';

// composant:
function Amount({ result, currency }) {
  return (
    <footer className="amount">
      <p className="amount-value">{result}</p>
      <p className="amount-currency">{currency}</p>
    </footer>
  );
}

Amount.propTypes = {
  result: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  // amountToConvert: PropTypes.number.isRequired,
};

export default Amount;
