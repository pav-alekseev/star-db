import React from 'react';
import { withRouter } from 'react-router-dom';

import { StarshipList } from '../sw-components/lists';
import ErrorBoundry from '../error-boundry';

const StarshipsPage = ({ history }) => (
  <ErrorBoundry>
    <StarshipList
      onItemSelected={
        itemId => history.push(`/starships/${itemId}`)
      }
    />
  </ErrorBoundry>
);

export default withRouter(StarshipsPage);
