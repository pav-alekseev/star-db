import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from '../people-page';

import './app.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="my-3">
            <RandomPlanet />
          </div>

          <PeoplePage />
        </div>
      </div>
    );
  }
}
