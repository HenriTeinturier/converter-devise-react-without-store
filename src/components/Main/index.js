import PropTypes from 'prop-types';

import './main.scss';

// composant:
function Main() {
  return (
    <main className="main">
      <h2 className="main-title">Currencies</h2>
      <ol className="main-currencies">
        <li className="main-currencies-item">Canadian Dollar</li>
        <li className="main-currencies-item">Australian Dollar</li>
        <li className="main-currencies-item">US Dollar</li>
        <li className="main-currencies-item">Swiss Franc</li>
        <li className="main-currencies-item">France Euro</li>
        <li className="main-currencies-item">Brazilian Real</li>
        <li className="main-currencies-item">Brazilian Real</li>
        <li className="main-currencies-item">Brazilian Real</li>
        <li className="main-currencies-item">Brazilian Real</li>
      </ol>
    </main>
  );
}

export default Main;
