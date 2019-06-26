/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Spinner from '../spinner';

import './item-details.css';

export default class ItemDetails extends Component {
  constructor() {
    super();

    this.state = {
      item: null,
      image: null,
      loading: true,
    };

    this.onItemLoaded = (item) => {
      const { itemId, getImageUrl } = this.props;

      return this.setState({
        item,
        image: getImageUrl(itemId),
        loading: false,
      });
    };

    this.updateItem = async () => {
      const { itemId, getData } = this.props;

      if (!itemId) {
        return;
      }

      this.setState(() => ({
        loading: true,
      }));

      const item = await getData(itemId);
      this.onItemLoaded(item);
    };
  }

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    const { itemId } = this.props;

    if (itemId !== prevProps.itemId) {
      this.updateItem();
    }
  }

  render() {
    const { children, itemId } = this.props;
    const { item, image, loading } = this.state;

    if (!itemId) {
      return <span>Select a item from a list</span>;
    }

    const spinner = loading ? <Spinner /> : null;
    const content = !loading
      ? <ItemView item={item} image={image}>{children}</ItemView>
      : null;

    return (
      <div className="card">
        <div className="card-body">
          {spinner}
          {content}
        </div>
      </div>
    );
  }
}

ItemDetails.propTypes = {
  children: PropTypes.node.isRequired,
  itemId: PropTypes.string.isRequired,
  getData: PropTypes.func.isRequired,
  getImageUrl: PropTypes.func.isRequired,
};

const ItemView = ({ item, image, children }) => {
  const { name } = item;

  return (
    <div className="row">
      <div className="col-lg-2 d-flex my-2">
        <img
          className="rounded w-100"
          src={image}
          alt="Item"
        />
      </div>

      <div className="col d-flex flex-column justify-content-center">
        <h2>{name}</h2>
        <ul className="list-group list-group-flush">
          {
            React.Children.map(children, child => React.cloneElement(child, { item }))
          }
        </ul>
      </div>
    </div>
  );
};

ItemView.propTypes = {
  item: PropTypes.objectOf(PropTypes.shape).isRequired,
  image: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const Record = ({ label, field, item }) => (
  <li className="list-group-item">
    <span className="term">{label}</span>
    <span>{item[field]}</span>
  </li>
);

Record.propTypes = {
  label: PropTypes.string.isRequired,
  field: PropTypes.string.isRequired,
};

export { Record };
