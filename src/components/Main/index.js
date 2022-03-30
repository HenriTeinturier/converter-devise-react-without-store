import PropTypes from 'prop-types';

import './main.scss';

// composant:
function Main({ currencies }) {
  return (
    <main className="main">
      <h2 className="main-title">Currencies</h2>
      <ol className="main-currencies">
        {currencies.map((item) => (
          <li className="main-currencies-item" key={item.name}>
            {item.name}
          </li>
        ))}
      </ol>
    </main>
  );
}

Main.propTypes = {
  currencies: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      rate: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Main;
