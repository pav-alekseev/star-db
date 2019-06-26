import React from 'react';
import ItemList from '../item-list';
import SwapiService from '../../services/swapi-service';
import withData from '../hoc-helpers';

const {
  getAllPeople,
  getAllPlanets,
  getAllStarships,
} = new SwapiService();

const withChildFunction = (Wrapped, fn) => props => (
  <Wrapped {...props}>
    {fn}
  </Wrapped>
);

const renderNameAndBirthDay = item => `${item.name} (${item.birthYear})`;
const renderNameAndPopulation = item => `${item.name} (${item.population})`;
const renderNameAndModel = item => `${item.name} (${item.model})`;

export const PersonList = withData(
  withChildFunction(ItemList, renderNameAndBirthDay),
  getAllPeople,
);

export const PlanetList = withData(
  withChildFunction(ItemList, renderNameAndPopulation),
  getAllPlanets,
);

export const StarshipList = withData(
  withChildFunction(ItemList, renderNameAndModel),
  getAllStarships,
);
