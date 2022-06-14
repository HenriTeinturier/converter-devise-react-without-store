import React from 'react';

// Data (liste des devises)
import currenciesList from 'src/data/currencies';

// import Local:
import './converter.scss';

// les composants à venir
import Header from '../Header';
import Currencies from '../Main';
import Amount from '../Footer';
import Toggle from '../Toggle';

//* Transformation en class
//* extends React.component + ajouter un render pour la partie JSX
// == Composant
class Converter extends React.Component {
  // Pour mettre en place un state sans l'utilisation du hook useState:
  constructor(props) {
    // On execute le constructeur de la classe parente pour profiter de ses fonctionnalités
    // Si on a des props, on les initialise à ce moment
    super(props);
    this.state = {
      isOpen: false, // isOpen
      amountToConvert: 10, // base Amount
      currencyToConvert: 'United States Dollar', // currency
      search: '',
    };
    // On vient améliorer notre handler en forcant le context du this
    // Ainsi, on s'assure que même en dehors de son context de base (la classe),
    // le mot clé this y fera quand même reference
    this.handleClick = this.handleClick.bind(this);
    this.handleCurrencyClick = this.handleCurrencyClick.bind(this);
    this.handleChangeSearch = this.handleChangeSearch.bind(this);
    this.handleChangeAmountToConvert = this.handleChangeAmountToConvert.bind(this);
  }

  // ajoute un listener à la touche escape afin d'ouvrir ou fermer notre converter
  componentDidMount() {
    // ne fonctionne qu'avec lescomposants de type class
    // se charge à la creation du premier DOM
    document.addEventListener('keyup', (evt) => {
      if (evt.key === 'Escape') {
        this.setState({
          isOpen: true,
        });
      }
    });
  }

  // fonction qui permet de mettre à jour le titre du document à chaque update
  componentDidUpdate() {
    // ne fonctionne qu'avec lescomposants de type class
    // ne jamais changer le state dans cette fonction
    // sinon boucle infinie
    const { isOpen, currencyToConvert } = this.state;
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

  // open/close converter au click sur l'icone
  handleClick() {
    const { isOpen } = this.state;
    this.setState({
      isOpen: !isOpen, // inverse la valeur de isOpen
      search: '',
    });
  }

  // ce handler met à jour le state du champ de recherche
  handleChangeSearch(value) {
    this.setState({
      search: value,
    });
  }

  // ce handler met à jour le state du montant à convertir
  handleChangeAmountToConvert(value) {
    this.setState({
      amountToConvert: value,
    });
  }

  // au clic change la devise à convertir et remet le champ de recherche à 0
  handleCurrencyClick(name) {
    this.setState({
      currencyToConvert: name,
      search: '',
    });
  }

  // fonction qui retourne la liste des devises par rapport aux critères de recherche
  getFilteredCurrencies() {
    // pour filtrer les devises on a besoin du search dans le state
    const { search } = this.state;
    // on récupère la liste de devises
    let filteredCurrencies = currenciesList;

    if (search.length > 0) {
      // alors on filtre en fonction du critere de recherche
      filteredCurrencies = filteredCurrencies.filter((item) => {
        // pour faciliter la recherche on applique à chaque devise et à la recherche utilisateur
        // un toLowerCase()
        const nameLowerCase = item.name.toLowerCase();
        const inputSearchLowerCase = search.toLowerCase();
        // si la réponse est true alors la devise est ajoutée au tableau filteredCurrencies
        return nameLowerCase.includes(inputSearchLowerCase);
      });
    }
    // si search est vide on renvoi le tableau complet des devises
    return filteredCurrencies;
  }

  // cette fonction fait le conversion en prenant les informations necessaires dans le state.
  makeConversion() {
    // on récupère les informations nécessaires à la conversion dans le state.
    const { amountToConvert, currencyToConvert } = this.state;
    // on recup la devise dans le tableau des devises
    const currencyData = currenciesList.find((item) => item.name === currencyToConvert);
    // on extrait le taux de conversion de cette devise
    const { rate } = currencyData;
    // on fait la conversion.
    // Grace à math.round on arrondi le résultat multiplié par 100 pour avoir un int.
    // ensuite on divise cet entier par 100
    // ce qui permet de conserver que deux chiffres
    // après la virgule
    const result = Math.round(amountToConvert * rate * 100) / 100;
    // ou  .toFixed(2) mais renvoi un string
    return result;
  }

  render() {
    // On récupère les informations du state
    const {
      isOpen, amountToConvert, currencyToConvert, search,
    } = this.state;

    // on fait la conversion avec le state actuel
    const result = this.makeConversion();

    // on récupère les devises selectionnées (ou toute si pas de recherche)
    const filteredCurrencies = this.getFilteredCurrencies();
    return (
      <div className="converter">
        <Header
          amountToConvert={amountToConvert}
          currency="euro"
          setAmountToConvert={this.handleChangeAmountToConvert}
        />
        <Toggle
          open={isOpen}
          handleClick={this.handleClick}
        />
        {/* Amount = Main!! */}
        <Currencies
          currencies={filteredCurrencies}
          isOpen={isOpen}
          handleCurrencyClick={this.handleCurrencyClick}
          searchValue={search}
          setSearch={this.handleChangeSearch}
        />
        {/* Amount = Footer!! */}
        <Amount
          result={result}
          currency={currencyToConvert}
        />
      </div>
    );
  }
}

// == Export
export default Converter;
