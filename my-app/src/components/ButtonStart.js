import React from 'react';
import { Button } from 'react-bootstrap';
import './assets/CSS/Button.css';

const wellStyles = { maxWidth: 400, margin: '0 auto 10px' };


class ButtonStart extends React.PureComponent {
  render() {
    return (
      <main>
        <div className="well" style={wellStyles}>
          <Button bsSize="large" type="button"  bsStyle="primary" className="reset" onClick={this.props.resetGame} block>
            REINICIAR PARTIDA
          </Button>
        </div>
      </main>
    );
  }
}

export default ButtonStart;
