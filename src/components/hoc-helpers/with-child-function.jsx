import React from 'react';

const withChildFunction = childFunction => Wrapped => props => (
  <Wrapped {...props}>
    {childFunction}
  </Wrapped>
);

export default withChildFunction;
