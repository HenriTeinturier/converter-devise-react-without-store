// Data
import currencies from 'src/data/currencies';

// import Local:
import './converter.scss';

// les composants à venir
import Header from '../Header';
import Currencies from '../Main';
import Amount from '../Footer';

// montant à convertir
const toConvert = 1;
// temporaire: currencyToConvert
const currencyToConvert = 'Unidted States Dollar';

// == Composant
function Converter() {
  return (
    <div className="converter">
      <Header
        toConvert={toConvert}
        currency="euro"
      />
      <Currencies
        currencies={currencies}
      />
      <Amount
        toConvert={toConvert}
        rate={1.5}
        currency={currencyToConvert}
      />
    </div>
  );
}

// == Export
export default Converter;
