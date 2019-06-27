import React from 'react';

import ItemDetails, { Record } from '../item-details';

const StarshipDetails = ({ itemId, getStarship, getStarshipImage }) => (
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

export default StarshipDetails;
