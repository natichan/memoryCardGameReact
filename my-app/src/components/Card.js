import React, {Component} from 'react';
import './assets/CSS/Card.css';
import FlipCard from 'react-flipcard';

class Card extends Component{
    render() {
        return (
            <div className="card" onClick={this.props.selectCard}>
            <FlipCard
                flipped = {this.props.isBeingCompared || this.props.guessed}
                // si está siendo comparada o si ya adivino quede volteada
                disabled = {true} //para que no se de vuelta cada vez que pasamos por la carta
            >              
                <div className="cover" {...this.props.guessed.hidden} ></div>
                <div className="frontCard">
                    <img src={this.props.image} alt="" className="frontCard"/>
               </div>
            </FlipCard>
            </div>
        )
    }
}

export default Card;