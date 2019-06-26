import React from 'react';
import PropTypes from 'prop-types';

import './row.css';

const Row = ({ left, right }) => (
  <div className="row">
    <div className="col-lg-3 my-3">
      {left}
    </div>
    <div className="col my-3">
      {right}
    </div>
  </div>
);

Row.propTypes = {
  left: PropTypes.objectOf(PropTypes.shape).isRequired,
  right: PropTypes.objectOf(PropTypes.shape).isRequired,
};

export default Row;
