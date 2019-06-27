import React from 'react';
import ItemList from '../item-list';
import { withData, withSwapiService } from '../hoc-helpers';

const withChildFunction = (Wrapped, fn) => props => (
  <Wrapped {...props}>
    {fn}
  </Wrapped>
);

const renderNameAndBirthDay = item => `${item.name} (${item.birthYear})`;
const renderNameAndPopulation = item => `${item.name} (${item.population})`;
const renderNameAndModel = item => `${item.name} (${item.model})`;

const mapPersonMethodsToProps = swapiService => ({
  getData: swapiService.getAllPeople,
});

const mapPlanetMethodsToProps = swapiService => ({
  getData: swapiService.getAllPlanets,
});

const mapStarshipMethodsToProps = swapiService => ({
  getData: swapiService.getAllStarships,
});

export const PersonList = withSwapiService(
  withData(
    withChildFunction(
      ItemList,
      renderNameAndBirthDay,
    ),
  ),
  mapPersonMethodsToProps,
);

export const PlanetList = withSwapiService(
  withData(
    withChildFunction(
      ItemList,
      renderNameAndPopulation,
    ),
  ),
  mapPlanetMethodsToProps,
);

export const StarshipList = withSwapiService(
  withData(
    withChildFunction(
      ItemList,
      renderNameAndModel,
    ),
  ),
  mapStarshipMethodsToProps,
);
