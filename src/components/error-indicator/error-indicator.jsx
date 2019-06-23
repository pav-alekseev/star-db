import React from 'react';

import './error-indicator.css';
import icon from './death-star.png';

const ErrorIndicator = () => (
  <div className="d-flex flex-column align-items-center">
    <img className="mb-2" src={icon} alt="error icon" />
    <span className="h2">BOOM!</span>
    <span>
      something has gone terribly wrong
    </span>
    <span>
      (but we already sent droids to fix it)
    </span>
  </div>
);

export default ErrorIndicator;
