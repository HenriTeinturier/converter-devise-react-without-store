import PropTypes from 'prop-types';

// == Import
import './toggle.scss';

// == Composant
function Toggle({ open}) {
  let cssClass;
  if (open) {
    cssClass = 'toggle toggle--open';
  }
  else {
    cssClass = 'toggle';
  }

  return (
    <button
      className={cssClass}
      type="button"
      // onClick={this.handleClick}
    >
      =
    </button>
  );
}

// == Export
export default Toggle;

Toggle.propTypes = {
  open: PropTypes.bool.isRequired,
};
