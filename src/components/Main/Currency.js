import PropTypes from 'prop-types';

// composant:
function Currency({ rate, name, handleClickDevise }) {
  return (
    <li
      className="currencies-currencies-item"
      onClick={() => {
        handleClickDevise(rate, name);
      }}
    >
      {name}
    </li>
  );
}

Currency.propTypes = {
  name: PropTypes.string.isRequired,
  rate: PropTypes.number.isRequired,
  handleClickDevise: PropTypes.func.isRequired,
};

// export
export default Currency;
