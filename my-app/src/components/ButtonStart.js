import React from 'react';
import { Button } from 'react-bootstrap';
import './assets/CSS/Button.css';

class ButtonStart extends React.PureComponent {
  render() {
    return (
      <main>
        <div className="btnReset">
          <Button bsSize="large" type="button"  bsStyle="primary" className="reset" onClick={this.props.resetGame}>
            REINICIAR PARTIDA
          </Button>
        </div>
      </main>
    );
  }
}

export default ButtonStart;
