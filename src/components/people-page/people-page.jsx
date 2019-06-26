import React, { Component } from 'react';

import SwapiService from '../../services/swapi-service';
import ItemList from '../item-list';
import ItemDetails, { Record } from '../item-details';
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

    const itemList = (
      <ItemList
        onItemSelected={this.onItemSelected}
        getData={this.swapiService.getAllPeople}
      >
        {item => `${item.name} (${item.birthYear})`}
      </ItemList>
    );

    const itemDetails = (
      <ItemDetails
        itemId={selectedItem}
        getData={this.swapiService.getPerson}
        getImageUrl={this.swapiService.getPersonImage}
      >
        <Record label="Gender" field="gender" />
        <Record label="Birth Year" field="birthYear" />
        <Record label="Eye Color" field="eyeColor" />
      </ItemDetails>
    );

    return (
      <ErrorBoundry>
        <Row left={itemList} right={itemDetails} />
      </ErrorBoundry>
    );
  }
}
