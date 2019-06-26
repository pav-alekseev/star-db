import React, { Component } from 'react';

import SwapiService from '../../services/swapi-service';
import { PersonList } from '../sw-components/lists';
import { PersonDetails } from '../sw-components/details';
import ErrorBoundry from '../error-boundry';
import Row from '../row';

import './people-page.css';

export default class PeoplePage extends Component {
  constructor() {
    super();

    this.onItemSelected = (id) => {
      this.setState({
        selectedItem: id,
      });
    };

    this.swapiService = new SwapiService();
    this.state = {
      selectedItem: '2',
    };
  }

  render() {
    const { selectedItem } = this.state;

    const personList = (
      <PersonList
        onItemSelected={this.onItemSelected}
      >
        {item => `${item.name} (${item.birthYear})`}
      </PersonList>
    );

    const personDetails = (
      <PersonDetails itemId={selectedItem} />
    );

    return (
      <ErrorBoundry>
        <Row left={personList} right={personDetails} />
      </ErrorBoundry>
    );
  }
}
