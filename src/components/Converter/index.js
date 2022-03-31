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
  // permet de  faire affichage conditionnel
  // ici isOpen pour le composant Currencies
  const isOpen = true;

  return (
    <div className="converter">
      <Header
        amountToConvert={amountToConvert}
        currency="euro"
      />
      {isOpen && <Currencies currencies={currenciesList} />}
      <Amount
        amountToConvert={amountToConvert}
        rate={1.69}
        currency={currencyToConvert}
      />
    </div>
  );
}

// == Export
export default Converter;
