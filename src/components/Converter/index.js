// Data
import currencies from 'src/data/currencies';

// import Local:
// les composants à venir
import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';

// montant à convertir
const toConvert = 1;

// == Composant
function Converter() {
  return (
    <div className="converter">
      <Header
        toConvert={toConvert}
        currency="euro"
      />
      <Main
        currencies={currencies}
      />
      <Footer
        toConvert={toConvert}
        rate={1.5}
        currency="United States Dollar"
      />
    </div>
  );
}

// == Export
export default Converter;
