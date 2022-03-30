import PropTypes from 'prop-types';

import './footer.scss';

// composant:
function Footer({ rate, currency, toConvert }) {
  // console.log(toConvert, rate, currency);
  return (
    <footer className="footer">
      <p className="footer-result">{toConvert * rate}</p>
      <p className="footer-currency">{currency}</p>
    </footer>
  );
}

export default Footer;
