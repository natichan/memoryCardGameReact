import React from 'react';
import './assets/CSS/Card.css';
import FlipCard from 'react-flipcard';

class Card extends React.PureComponent {
  render() {
    return (
      <div className="card" onClick={this.props.selectCard}>
        <FlipCard
          flipped={this.props.isBeingCompared || this.props.guessed}
          // si está siendo comparada o si ya adivino quede volteada
          disabled
          // para que no se de vuelta cada vez que pasamos por la carta
        >
          {this.props.guessed
            ? <div className="cover" style={{ visibility: 'hidden' }} />
            : <div className="cover" />
            }
          {this.props.guessed
            ? (
              <div className="frontCard" style={{ visibility: 'hidden' }}>
                <img src={this.props.image} alt="" className="frontCard" />
              </div>
            )
            : (
              <div className="frontCard">
                <img src={this.props.image} alt="" className="frontCard" />
              </div>
            )
                }
        </FlipCard>
      </div>
    );
  }
}

export default Card;
