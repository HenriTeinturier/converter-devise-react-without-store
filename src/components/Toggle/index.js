import PropTypes from 'prop-types';

// == Import
import './toggle.scss';

// == Composant
function Toggle({ open, handleClick }) {
  let cssClass;
  if (open) {
    cssClass = 'toggle toggle--open';
  }
  else {
    cssClass = 'toggle';
  }

  return (
    <button
      onClick={handleClick}
      className={cssClass}
      type="button"
    >
      =
    </button>
  );
}

// == Export
export default Toggle;

Toggle.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};
