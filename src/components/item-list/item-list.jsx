import React from 'react';
import PropTypes from 'prop-types';

import './item-list.css';

import SwapiService from '../../services/swapi-service';
import withData from '../hoc-helpers';

const ItemList = ({ data, onItemSelected, children: renderLabel }) => {
  const items = data.map((item) => {
    const label = renderLabel(item);
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

  return (
    <div className="btn-group-vertical btn-block" data-toggle="buttons">
      {items}
    </div>
  );
};

ItemList.propTypes = {
  data: PropTypes.objectOf(PropTypes.shape).isRequired,
  onItemSelected: PropTypes.func.isRequired,
  children: PropTypes.func.isRequired,
};

const { getAllPeople } = new SwapiService();

export default withData(ItemList, getAllPeople);
