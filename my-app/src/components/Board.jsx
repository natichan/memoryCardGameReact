import React from 'react';
import Card from './Card';
import './assets/CSS/Board.css';

class Board extends React.PureComponent {
  render() {
    return (
      <div className="board">
        {
        // accedemos haciendo referencia al elemento que esta distanciado con el método this
            // representa la propiedad que nos envia el padre header
            this.props.deck
              .map((card, index) => {
                const isBeingCompared = this.props.selectedMatch.indexOf(card) > -1;
                // calcula si la carta que viene del map
                // está en el array pareja seleccionada del juego
                return (
                  <Card
                    key={index} 
                    // para que cada una tenga una llave propia
                    // le damos el indice por donde va iterando
                    image={card.image}
                    isBeingCompared={isBeingCompared}
                    selectCard={() => this.props.selectCard(card)}
                    // para que la carta se quede almacenada y
                    // cuando se invoque desde la carta guardarla en el estado
                    guessed={card.guessed}
                  />
                );
              })
        }
      </div>
    );
  }
}

export default Board;
