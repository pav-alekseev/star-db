import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SwapiService from '../../services/swapi-service';

import './item-list.css';
import Spinner from '../spinner';

export default class ItemList extends Component {
  constructor() {
    super();

    this.swapiService = new SwapiService();
    this.state = {
      peopleList: null,
    };

    this.renderItems = (items) => {
      const { onItemSelected } = this.props;

      return items.map(({ id, name }) => (
        <button
          className="btn btn-primary"
          key={id}
          type="button"
          onClick={() => onItemSelected(id)}
        >
          {name}
        </button>
      ));
    };
  }

  async componentDidMount() {
    const peopleList = await this.swapiService.getAllPeople();
    this.setState({ peopleList });
  }

  render() {
    const { peopleList } = this.state;

    if (!peopleList) {
      return <Spinner />;
    }

    return (
      <div className="btn-group-vertical btn-block" data-toggle="buttons">
        {this.renderItems(peopleList)}
      </div>
    );
  }
}

ItemList.propTypes = {
  onItemSelected: PropTypes.func.isRequired,
};
