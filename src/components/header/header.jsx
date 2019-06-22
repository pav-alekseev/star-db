import React from 'react';

import './header.css';

const Header = () => (
  <nav className="navbar navbar-expand navbar-dark bg-dark">
    <div className="container">
      <a href="./" className="navbar-brand">Star DB</a>
      <div className="navbar-collapse collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a href="person.html" className="nav-link">Home</a>
          </li>
          <li className="nav-item">
            <a href="planets.html" className="nav-link">Planets</a>
          </li>
          <li className="nav-item">
            <a href="starships.html" className="nav-link">Starships</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Header;
