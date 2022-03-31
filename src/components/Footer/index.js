import PropTypes from 'prop-types';

import './footer.scss';

// composant:
function Amount({ rate, currency, amountToConvert }) {
  // console.log(amountToConvert, rate, currency);
  const result = Math.round((amountToConvert * rate) * 100) / 100;
  return (
    <footer className="amount">
      <p className="amount-value">{result}</p>
      <p className="amount-currency">{currency}</p>
    </footer>
  );
}

Amount.propTypes = {
  rate: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  amountToConvert: PropTypes.number.isRequired,
};

export default Amount;
