import React from 'react';
import './assets/CSS/Header.css';

class Header extends React.PureComponent {
  render() {
    return (
      <header>
        <div className="title">Memory Card Game</div>
        <div>
          <button type="button" className="reset" onClick={this.props.resetGame}>
            Start again!
          </button>
        </div>
        <div className="title">
          Attempts:
          {this.props.attempts}
        </div>
      </header>
    );
  }
}

export default Header;
