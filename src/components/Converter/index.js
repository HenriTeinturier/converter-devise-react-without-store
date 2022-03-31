import React from 'react';

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
// function Converter() {
//   // permet de  faire affichage conditionnel
//   // ici isOpen pour le composant Currencies
//   let isOpen = false;

//   const handleClick = () => {
//     if (isOpen) { isOpen = false; console.log('false') } else { isOpen = true; console.log('true') }
//   };

//   return (
//     <div className="converter">
//       <Header
//         amountToConvert={amountToConvert}
//         currency="euro"
//       />
//       <button type="button" onClick={handleClick}>Afficher / Cacher les devises</button>
//       {isOpen && <Currencies currencies={currenciesList} />}
//       <Amount
//         amountToConvert={amountToConvert}
//         rate={1.69}
//         currency={currencyToConvert}
//       />
//     </div>
//   );
// }


//* Transformation en class
//* extends React.component + ajouter un render pour la partie JSX
// == Composant
class Converter extends React.Component {
  // Pour mettre en place un state :
  // - On converti le composant en classe qui étend de React.Component
  // (ne pas oublier l'import de React)
  // - Il faut mettre en place un constructeur dans lequel on initialise les props
  // du composant ET SURTOUT le state !!
  // => Le state est un objet qui va contenir des propriétés représentant l'état de notre UI
  constructor(props) {
    // On execute le constructeur de la classe parente pour profiter de ses fonctionnalités
    // Si on a des props, on les initialise à ce moment
    super(props);
    // On crée notre state ici
    this.state = {
      isOpen: false,
    };
  }

  handleClick() {
    if (this.isOpen) { this.isOpen = false; console.log('false') } else { isOpen = true; console.log('true') }
  }

  render() {
    return (
      <div className="converter">
        <Header
          amountToConvert={amountToConvert}
          currency="euro"
        />
        <button type="button" onClick={this.handleClick}>Afficher / Cacher les devises</button>
        {this.isOpen && <Currencies currencies={currenciesList} />}
        <Amount
          amountToConvert={amountToConvert}
          rate={1.69}
          currency={currencyToConvert}
        />
      </div>
    );
  }
}

// == Export
export default Converter;
