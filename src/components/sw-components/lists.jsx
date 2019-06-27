import ItemList from '../item-list';
import { withData, withSwapiService, withChildFunction } from '../hoc-helpers';

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

export const PersonList = withSwapiService(mapPersonMethodsToProps)(
  withData(
    withChildFunction(renderNameAndBirthDay)(
      ItemList,
    ),
  ),
);

export const PlanetList = withSwapiService(mapPlanetMethodsToProps)(
  withData(
    withChildFunction(renderNameAndPopulation)(
      ItemList,
    ),
  ),
);

export const StarshipList = withSwapiService(mapStarshipMethodsToProps)(
  withData(
    withChildFunction(renderNameAndModel)(
      ItemList,
    ),
  ),
);
