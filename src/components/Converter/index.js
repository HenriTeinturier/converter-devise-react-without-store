import React from 'react';

// Data
import currenciesList from 'src/data/currencies';

// import Local:
import './converter.scss';


// les composants à venir
import Header from '../Header';
import Currencies from '../Main';
import Amount from '../Footer';
import Toggle from '../Toggle';

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
      isOpen: false, // isOpen
      amountToConvert: 1, // base Amount
      // rate: 1.69, // rate // plus besoin car retrouvée dans fonction makeConversion.
      // c'est mieux d'avoir le moins de chose possible dans le state
      // pour un app maintenable plus facilement.
      currencyToConvert: 'United States Dollar', // currency
      search: '',
    };

    // // montant à convertir
    // const amountToConvert = 1;
    // // temporaire: currencyToConvert
    // const currencyToConvert = 'Unidted States Dollar';

    // On vient améliorer notre handler en forcant le context du this
    // Ainsi, on s'assure que même en dehors de son context de base (la classe),
    // le mot clé this y fera quand même reference
    // necessaire si pas de fonction fleché dans le onclick
    // donc necessaire si onClick{this.handleClick}
    // et pas necessaire si: onClick={() => this.handleClick()}
    this.handleClick = this.handleClick.bind(this);
    // this.handleClickDevise = this.handleClickDevise.bind(this);
    this.handleCurrencyClick = this.handleCurrencyClick.bind(this);
    // ceci n'est pas lié à React mais de façon general à la gestion des this de js
    this.handleChangeSearch = this.handleChangeSearch.bind(this);
  }

  componentDidMount() {
    // ne fonctionne qu'avec lescomposants de type class
    // se charge à la creation du premier DOM
    console.log('mount');
    document.addEventListener('keyup', (evt) => {
      if (evt.key === 'Escape') {
        this.setState({
          isOpen: true,
        });
      }
    });
  }

  componentDidUpdate() {
    // ne fonctionne qu'avec lescomposants de type class
    // donc si on veut le mettre sur un composant specifique 
    // il faudrait qu'il soit sous forme de class
    // se charge à chaque upadate du dom
    // ne jamais changer le state dans cette fonction
    // sinon boucle infinie
    console.log('update');
    const { isOpen, currencyToConvert } = this.state;
    console.log(`converter: ${currencyToConvert}`);
    document.title = `converter: ${currencyToConvert}`;

    document.addEventListener('keyup', (evt) => {
      if (evt.key === 'Escape') {
        this.setState({
          isOpen: !isOpen,
          search: '',
        });
      }
    });
  }

  handleClick() {
    // this.setState({ isOpen: true });
    // if (this.state.isOpen) {
    //   this.setState({ isOpen: false });
    // }
    // else {
    //   this.setState({ isOpen: true });
    // }
    const { isOpen } = this.state;
    this.setState({
      isOpen: !isOpen, // inverse la valeur de isOpen
      search: '',
    });
  }

  handleChangeSearch(value) {
    // Le but de ce handler est de modifier la donnée dans le state
    this.setState({
      search: value,
    });
  }

  // handleClickDevise(rate, name) {
  //   this.setState({
  //     rate: rate,
  //     currencyToConvert: name,
  //   });
  // }

  handleCurrencyClick(name) {
    // l'objectif dest de changer le sdtate currencyToConvert
    // on doit donc utiliser setState.
    // la fonction makeConversion se chargera avec la mise à jour du DOM avec ce nouveau state.
    // console.log(name);
    this.setState({
      currencyToConvert: name,
      search: '',
    });
  }

  getFilteredCurrencies() {
    // fonction qui retourne la liste des devises par rapport aux critères de recherche
    // critères de recherche: le state
    // pour filtrer les devies on a besoin du critere de l'utilisateur
    // c 'est a dire la valeur de la propriete search du state
    const { search } = this.state;
    let filteredCurrencies = currenciesList;

    if (search.length > 0) {
      // alors on filtre en fonction du critere de recherche
      filteredCurrencies = filteredCurrencies.filter((item) => {
        const nameLowerCase = item.name.toLowerCase();
        const inputSearchLowerCase = search.toLowerCase();
        // item.name.includes(search);
        return nameLowerCase.includes(inputSearchLowerCase);
      });
    }
    // si pas d input on renvoi le tableau complet des occurences
    return filteredCurrencies;
  }

  makeConversion() {
    // amount to convert = 1€ ou entrée par l'utilisateur
    // currencyToConvert = devise choisie que l'on souhaite trouver le montant
    const { amountToConvert, currencyToConvert } = this.state;
    // on recup les infos de la devis chooisie dans le tableau des devises.
    const currencyData = currenciesList.find((item) => item.name === currencyToConvert);
    // on extrait le taux de conversion
    const { rate } = currencyData;
    // on fait la conversion
    const result = Math.round(amountToConvert * rate * 100) / 100;
    // ou  .toFixed(2) mais renvoi un string
    return result;
  }

  recupRate() {
    // amount to convert = 1€ ou entrée par l'utilisateur
    // currencyToConvert = devise choisie que l'on souhaite trouver le montant
    const { currencyToConvert } = this.state;
    // on recup les infos de la devis chooisie dans le tableau des devises.
    const currencyData = currenciesList.find((item) => item.name === currencyToConvert);
    // on extrait le taux de conversion
    let { rate } = currencyData;
    // on fait la conversion
    rate = Math.round(rate * 100) / 100;
    return rate;
  }

  // Maintenant, pour lire une propriété du state, on fere :
  // this.state.isOpen
  // => On adapte donc l'affichage conditionnel en se basant sur notre state
  render() {
    // le linter nous previent qu'il faut faire du desctructuring avec this.state.isOpen
    const {
      isOpen, amountToConvert, currencyToConvert, search,
    } = this.state;

    const result = this.makeConversion();
    const rate = this.recupRate();
    // on recup la liste des devises filtrées par rapport à l'entrée de l'utilisateur
    // contenu dans le state

    const filteredCurrencies = this.getFilteredCurrencies();
    return (
      <div className="converter">
        <Header
          amountToConvert={amountToConvert}
          currency="euro"
        />
        {/* <Toggle open={isOpen} handleClick={this.handleClick} />
        {isOpen && <Currencies currencies={filteredCurrencies} handleCurrencyClick={this.handleCurrencyClick} searchValue={search} setSearch={this.handleChangeSearch} />} */}
        <Toggle open={isOpen} handleClick={this.handleClick} />
        {<Currencies currencies={filteredCurrencies} rate={rate} isOpen={isOpen} handleCurrencyClick={this.handleCurrencyClick} searchValue={search} setSearch={this.handleChangeSearch} />}
        <Amount
          // amountToConvert={amountToConvert}
          result={result}
          currency={currencyToConvert}
        />
      </div>
    );
  }
}

// == Export
export default Converter;
