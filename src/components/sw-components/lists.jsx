import ItemList from '../item-list';
import SwapiService from '../../services/swapi-service';
import withData from '../hoc-helpers';

const {
  getAllPeople,
  getAllPlanets,
  getAllStarships,
} = new SwapiService();

export const PersonList = withData(ItemList, getAllPeople);

export const PlanetList = withData(ItemList, getAllPlanets);

export const StarshipList = withData(ItemList, getAllStarships);
