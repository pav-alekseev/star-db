import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from '../people-page';
import ErrorIndicator from '../error-indicator';

import './app.css';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      hasError: false,
    };
  }

  componentDidCatch() {
    this.setState({
      hasError: true,
    });
  }

  render() {
    const { hasError } = this.state;

    if (hasError) {
      return <ErrorIndicator />;
    }

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
