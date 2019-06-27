import React from 'react';
import { SwapiServiceConsumer } from '../swapi-service-context';

const withSwapiService = (Wrapped, mapMethodsToProps) => props => (
  <SwapiServiceConsumer>
    {
      (swapiService) => {
        const serviceProps = mapMethodsToProps(swapiService);

        return <Wrapped {...props} {...serviceProps} />;
      }
    }
  </SwapiServiceConsumer>
);

export default withSwapiService;
