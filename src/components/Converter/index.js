// Data
import currenciesList from 'src/data/currencies';

// import Local:
import './converter.scss';

// les composants à venir
import Header from '../Header';
import Currencies from '../Main';
import Amount from '../Footer';

// montant à convertir
const amountToConvert = 1;
// temporaire: currencyToConvert
const currencyToConvert = 'Unidted States Dollar';

// == Composant
function Converter() {
  return (
    <div className="converter">
      <Header
        amountToConvert={amountToConvert}
        currency="euro"
      />
      <Currencies
        currencies={currenciesList}
      />
      <Amount
        amountToConvert={amountToConvert}
        rate={1.5}
        currency={currencyToConvert}
      />
    </div>
  );
}

// == Export
export default Converter;
