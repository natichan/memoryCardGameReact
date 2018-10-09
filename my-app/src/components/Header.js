import React from 'react';
import './assets/CSS/Header.css';

class Header extends React.PureComponent {
  render() {
    return (
      <header>
        <h1 className="title">Juego de Memoria</h1>
        <h3 className="title">
          Intentos:
          {this.props.attempts}
        </h3>
      </header>
    );
  }
}

export default Header;
