import PropTypes from 'prop-types';

import Currency from './Currency';

import './main.scss';

// composant:
function Currencies({ currencies }) {
  return (
    <main className="currencies">
      <h2 className="currencies-title">Currencies</h2>
      <ul className="currencies-currencies">
        {currencies.map((item) => (
          <li
            className="currencies-currencies-item"
            key={item.name}
            onClick={() => {
              console.log(item.rate, item.name);
            }}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </main>
  );
}

Currencies.propTypes = {
  currencies: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      rate: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Currencies;
