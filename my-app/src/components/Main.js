import React, { Component } from 'react';
import Header from './Header';
import Board from './Board';
import deckOfCards from './utils/DeckCards';
import './assets/CSS/Main.css';


const getInitialState = () => {
  const deck = deckOfCards();
  // retorna el objeto
  return {
    deck,
    selectedMatch: [], // solo puede contener dos elementos
    isComparing: false, // cuando escoja dos cartas será verdadero
    attempts: 0,
  };
}

class Main extends Component {
  constructor(props) {
    super(props); // para llamar al padre y pasarle las propiedades
    this.state = getInitialState();
  }

  selectCard(card) {
    if (
      this.state.isComparing || 
      this.state.selectedMatch.indexOf(card) > -1 ||
       // indice de la carta que está pasando si la carta ya está en el array de pareja seleccionada
       card.guessed
    ) {
      return; // si cualquiera es verdadera retorna
    }
    // uso la carta  que está llegando para actualizar el array
    // de las cartas que están siendo seleccionadas
    // un nuevo array con las cartas que están en el estado y le agregamos la nueva carta
    const selectedMatch = [...this.state.selectedMatch, card];
    this.setState({
      selectedMatch, // actualiza él estado con la nueva carta
    });
    if (selectedMatch.length === 2) { // si el tamaño es dos
      this.compairMatch(selectedMatch);
    }
  }

  compairMatch(selectedMatch) {
    this.setState({ isComparing: true });
    // le decimos al estado que estamos comparando
    // se hace un delay en la ejecución, para que se pueda ver la segunda carta que escogió,
    // después de un segundo la revisamos, si no es la volteamos y si es la dejamos volteadas
    setTimeout(() => {
      const [firstCard, secondCard] = selectedMatch;
      let deck = this.state.deck;

      if (firstCard.image === secondCard.image) {
        deck = deck.map((card) => {
          if (card.image !== firstCard.image) {
            // si la carta comparada es distinta retorna la carta
            return card;
          }
          return { ...card, guessed: true };
          // expande todas sus propiedades
          // reemplaza la propiedad de carta adivinada como verdadera
        });
      }
      this.verifyWinner(deck);
      this.setState({
        selectedMatch: [],
        deck,
        isComparing: false,
        attempts: this.state.attempts + 1,
      });
    }, 1500);
  }

  verifyWinner(deck) {
    if (deck.filter(card => !card.guessed).length === 0) {
    // filtramos los elementos que quedan
    // si la carta fue adivinada la longitud del valor va a quedar en 0
    // porque ya fueron todas adivinadas
    return alert('Congratulations! You won!!!');  
    }
  }

  resetGame() {
    this.setState(
      getInitialState(),
    );
  }

  render() {
    return (
      <div>
        <Header
          attempts={this.state.attempts}
          resetGame={() => this.resetGame()}
        />
        <Board 
          // creamos una propiedad
          deck={this.state.deck} 
          // hacemos referencia al estado inicial
          // que contiene la propiedad deck
          selectedMatch={this.state.selectedMatch} 
          // para decirle que está seleccionada
          // una referencia al método seleccionar carta
          // va a ser ejecutado cuando se haga click en la carta
          selectCard={card => this.selectCard(card)}
        />
      </div>
    );
  }
}

export default Main;
