import React from 'react';

import ItemDetails, { Record } from '../item-details';
import SwapiService from '../../services/swapi-service';

const {
  getPerson,
  getPersonImage,
  getPlanet,
  getPlanetImage,
  getStarship,
  getStarshipImage,
} = new SwapiService();

export const PersonDetails = ({ itemId }) => (
  <ItemDetails
    itemId={itemId}
    getData={getPerson}
    getImageUrl={getPersonImage}
  >
    <Record label="Gender" field="gender" />
    <Record label="Birth Year" field="birthYear" />
    <Record label="Eye Color" field="eyeColor" />
  </ItemDetails>
);

export const PlanetDetails = ({ itemId }) => (
  <ItemDetails
    itemId={itemId}
    getData={getPlanet}
    getImageUrl={getPlanetImage}
  >
    <Record field="population" label="Population" />
    <Record field="rotationPeriod" label="Rotation Period" />
    <Record field="diameter" label="Diameter" />
  </ItemDetails>
);

export const StarshipDetails = ({ itemId }) => (
  <ItemDetails
    itemId={itemId}
    getData={getStarship}
    getImageUrl={getStarshipImage}
  >
    <Record field="model" label="Model" />
    <Record field="length" label="Length" />
    <Record field="costInCredits" label="Cost" />
  </ItemDetails>
);
