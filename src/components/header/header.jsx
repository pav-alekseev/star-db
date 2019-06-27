import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

const Header = () => (
  <nav className="navbar navbar-expand navbar-dark bg-dark">
    <div className="container">
      <Link to="/" className="navbar-brand">Star DB</Link>
      <div className="navbar-collapse collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link to="/people" className="nav-link">People</Link>
          </li>
          <li className="nav-item">
            <Link to="/planets" className="nav-link">Planets</Link>
          </li>
          <li className="nav-item">
            <Link to="/starships" className="nav-link">Starships</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Header;
