import PropTypes from 'prop-types';

// composant:
function Currency({ rate, name }) {
  return (
    <li
      className="currencies-currencies-item"
      onClick={() => {
        console.log(rate, name);
      }}
    >
      {name}
    </li>
  );
}

Currency.propTypes = {
  name: PropTypes.string.isRequired,
  rate: PropTypes.number.isRequired,
};

// export
export default Currency;
