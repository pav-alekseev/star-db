import React from 'react';

import ItemDetails, { Record } from '../item-details';
import { SwapiServiceConsumer } from '../swapi-service-context';

export const PersonDetails = ({ itemId }) => (
  <SwapiServiceConsumer>
    {
      ({ getPerson, getPersonImage }) => (
        <ItemDetails
          itemId={itemId}
          getData={getPerson}
          getImageUrl={getPersonImage}
        >
          <Record label="Gender" field="gender" />
          <Record label="Birth Year" field="birthYear" />
          <Record label="Eye Color" field="eyeColor" />
        </ItemDetails>
      )
    }
  </SwapiServiceConsumer>
);

export const PlanetDetails = ({ itemId }) => (
  <SwapiServiceConsumer>
    {
      ({ getPlanet, getPlanetImage }) => (
        <ItemDetails
          itemId={itemId}
          getData={getPlanet}
          getImageUrl={getPlanetImage}
        >
          <Record field="population" label="Population" />
          <Record field="rotationPeriod" label="Rotation Period" />
          <Record field="diameter" label="Diameter" />
        </ItemDetails>
      )
    }
  </SwapiServiceConsumer>
);

export const StarshipDetails = ({ itemId }) => (
  <SwapiServiceConsumer>
    {
      ({ getStarship, getStarshipImage }) => (
        <ItemDetails
          itemId={itemId}
          getData={getStarship}
          getImageUrl={getStarshipImage}
        >
          <Record field="model" label="Model" />
          <Record field="length" label="Length" />
          <Record field="costInCredits" label="Cost" />
        </ItemDetails>
      )
    }
  </SwapiServiceConsumer>
);
