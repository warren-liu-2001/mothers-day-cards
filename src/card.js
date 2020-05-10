import React, { Component } from 'react';
import './card.css';
import ActualCard from './ActualCard'

function OpenButton(props) {
return (
    <button className="Button ButtonA" onClick={props.onClick}>
      Open it!
    </button>
  );
}

function CloseButton(props) {
  return (
    <button className="Button ButtonB" onClick={props.onClick}>
      Close it!
    </button>
  );
}

function CardState(props) {
    const isOpen = props.isOpen
    if (isOpen) {
        return <ActualCard />;
    }
    else{
        return <h2 className="App-Description">Please click Open</h2>;
    }
}

class Card extends Component {
    constructor(props) {
        super(props);
        this.Openit = this.Openit.bind(this);
        this.Closeit = this.Closeit.bind(this);
        this.state = {isOpen: false};
      }
    
      Openit() {
        this.setState({isOpen: true});
      }
    
      Closeit() {
        this.setState({isOpen: false});
      }

  render() {
    const isOpen = this.state.isOpen
        let button;
        if (isOpen) {
          button = <CloseButton onClick={this.Closeit} />;
        } else {
          button = <OpenButton onClick={this.Openit} />;
        }
    return (
      <div className="App">
        <CardState isOpen={isOpen} />
        {button}
      </div>
      );
    }
  }

export default Card;