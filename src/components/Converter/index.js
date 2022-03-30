// Data
import currencies from 'src/data/currencies';

// import Local:
// les composants à venir
import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';

console.log(currencies);

// == Composant
function Converter() {
  return (
    <div className="converter">
      <Header />
      <Main
        currencies={currencies}
      />
      <Footer />
    </div>
  );
}

// == Export
export default Converter;
