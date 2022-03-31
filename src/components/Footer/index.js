import PropTypes from 'prop-types';

import './footer.scss';

// composant:
function Amount({ rate, currency, toConvert }) {
  // console.log(toConvert, rate, currency);
  return (
    <footer className="amount">
      <p className="amount-value">{toConvert * rate}</p>
      <p className="amount-currency">{currency}</p>
    </footer>
  );
}

Amount.propTypes = {
  rate: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  toConvert: PropTypes.number.isRequired,
};

export default Amount;
