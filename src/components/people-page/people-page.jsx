import React, { Component } from 'react';

import SwapiService from '../../services/swapi-service';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import ErrorIndicator from '../error-indicator';

import './people-page.css';

export default class PeoplePage extends Component {
  constructor() {
    super();

    this.onPersonSelected = (id) => {
      this.setState({
        selectedPerson: id,
      });
    };

    this.swapiService = new SwapiService();
    this.state = {
      selectedPerson: '2',
      hasError: false,
    };
  }

  componentDidCatch() {
    this.setState({
      hasError: true,
    });
  }

  render() {
    const { selectedPerson, hasError } = this.state;

    if (hasError) {
      return <ErrorIndicator />;
    }

    return (
      <div className="row">
        <div className="col-lg-3 my-3">
          <ItemList
            onItemSelected={this.onPersonSelected}
            getData={this.swapiService.getAllPeople}
            renderItem={({ name, gender }) => `${name} (${gender})`}
          />
        </div>
        <div className="col my-3">
          <PersonDetails personId={selectedPerson} />
        </div>
      </div>
    );
  }
}
