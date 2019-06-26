import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './item-list.css';
import Spinner from '../spinner';

export default class ItemList extends Component {
  constructor() {
    super();

    this.state = {
      itemList: null,
    };

    this.renderItems = (items) => {
      const { onItemSelected, renderItem } = this.props;

      return items.map((item) => {
        const label = renderItem(item);
        const { id } = item;

        return (
          <button
            className="btn btn-primary"
            key={id}
            type="button"
            onClick={() => onItemSelected(id)}
          >
            {label}
          </button>
        );
      });
    };
  }

  async componentDidMount() {
    const { getData } = this.props;

    const itemList = await getData();
    this.setState({ itemList });
  }

  render() {
    const { itemList } = this.state;

    if (!itemList) {
      return <Spinner />;
    }

    return (
      <div className="btn-group-vertical btn-block" data-toggle="buttons">
        {this.renderItems(itemList)}
      </div>
    );
  }
}

ItemList.propTypes = {
  onItemSelected: PropTypes.func.isRequired,
  getData: PropTypes.func.isRequired,
  renderItem: PropTypes.func.isRequired,
};
