import React, { Component } from 'react';

import SwapiService from '../../services/swapi-service';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import ErrorBoundry from '../error-boundry';
import Row from '../row';

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
    };
  }

  render() {
    const { selectedPerson } = this.state;

    const itemList = (
      <ItemList
        onItemSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople}
        renderItem={({ name, gender }) => `${name} (${gender})`}
      />
    );

    const personDetails = <PersonDetails personId={selectedPerson} />;

    return (
      <ErrorBoundry>
        <Row left={itemList} right={personDetails} />
      </ErrorBoundry>
    );
  }
}
