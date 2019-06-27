import React from 'react';
import { withRouter } from 'react-router-dom';

import { PlanetList } from '../sw-components/lists';
import ErrorBoundry from '../error-boundry';

const PlanetPage = ({ history }) => (
  <ErrorBoundry>
    <PlanetList
      onItemSelected={
        itemId => history.push(itemId)
      }
    />
  </ErrorBoundry>
);

export default withRouter(PlanetPage);
