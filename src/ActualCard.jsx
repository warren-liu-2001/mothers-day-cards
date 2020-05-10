import React, { Component } from 'react';
import './ActualCard.css';
import pic from './mothers-day-photo.jpg'

class ActualCard extends Component {

  render() {
    return (
      <div className="App-title">
        <div id="Card">
            <p>Hey mom!</p>
            <p> Happy Mothers Day!
            </p>
            <p> I cannot say that I am the optimal son. I've probably dissappointed you a lot.
              However, I will say that all you have done to raise me will not be in vain. 
              All of my successes are thanks to your's and dad's guidance and upbringing,
              and I will definitely reciprocate this care of yours towards my own children.
            </p>
            <p>May you be blessed with wonderful Health, and god bless your soul. You are the best mom ever!</p>
            <p>Sincerely,</p>
            <p class="signature">Warren Liu</p>
            <img className="pic" src={pic} alt="Logo" />
            <p>P.S. I promise not to name my kid X AE A-12. Psyche!</p>
        </div>
      </div>
      );
    }
  }

export default ActualCard;