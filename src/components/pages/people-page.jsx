import React from 'react';
import { withRouter } from 'react-router-dom';

import { PersonList } from '../sw-components/lists';
import ErrorBoundry from '../error-boundry';

const PeoplePage = ({ history }) => (
  <ErrorBoundry>
    <PersonList
      onItemSelected={
        itemId => history.push(`/people/${itemId}`)
      }
    />
  </ErrorBoundry>
);

export default withRouter(PeoplePage);
