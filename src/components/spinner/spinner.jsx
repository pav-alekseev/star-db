import React from 'react';

import './spinner.css';

const Spinner = () => (
  <div className="lds-css">
    <div className="lds-double-ring mx-auto">
      <div />
      <div />
    </div>
  </div>
);

export default Spinner;
