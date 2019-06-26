import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';

import './app.css';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      selectedPerson: '1',
    };

    this.onPersonSelected = (id) => {
      this.setState({
        selectedPerson: id,
      });
    };
  }

  render() {
    const { selectedPerson } = this.state;

    return (
      <div>
        <Header />
        <div className="container">
          <div className="my-3">
            <RandomPlanet />
          </div>

          <div className="row">
            <div className="col-lg-3 my-3">
              <ItemList onItemSelected={this.onPersonSelected} />
            </div>
            <div className="col my-3">
              <PersonDetails personId={selectedPerson} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
