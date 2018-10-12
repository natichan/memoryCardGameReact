import React from 'react';
import './assets/CSS/Header.css';

class Header extends React.PureComponent {
  render() {
    return (
      <header>
        <div className="title">
        <h1>Juego de Memoria</h1>
        </div>
        <h3 className="attempts">
          Intentos: {this.props.attempts}
        </h3>
      </header>
    );
  }
}

export default Header;
