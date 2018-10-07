import shuffle from 'lodash.shuffle';
import ImageOfCards from './imgCards';

const numberOfCards = 8;

export default () => {
    // console.log(imageOfCards);
    const deckOfCards = ImageOfCards();
    let cards = [];
    // repartir aleatoriamente 
    while (cards.length < numberOfCards) { // cuando tenga el número de cartas deja de mandar
        // crear un indice aleatorio
        const index = Math.floor(Math.random() * deckOfCards.length) // multiplicamos por el numero de cartas de que tenemos
        // Math.floor redondea hacia abajo 
    
        // extraer los elementos que están en el deckOfCards
        const card = {
            image: deckOfCards.splice(index, 1)[0],
            // splice para extraer la carta que queremos del indice aleatoriamente
            // nos devuelve solo un elemento, por eso escogemos el elemento que está en la posición 0 
            guessed: false
        };
        cards.push(card); // guardamos el objeto en un array
        cards.push({...card}); // la clonamos con las mismas propiedades pero no la misma referencia
    }

    return shuffle(cards);
    // como ambas están en posiciones consecutivas, usaremos el modulo lodash suffle para mezclar las cartas
}