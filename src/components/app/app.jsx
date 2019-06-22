import React from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';

import './app.css';

const App = () => (
  <div>
    <Header />
    <div className="container">
      <div className="my-3">
        <RandomPlanet />
      </div>

      <div className="row">
        <div className="col-lg-3 my-3">
          <ItemList />
        </div>
        <div className="col my-3">
          <PersonDetails />
        </div>
      </div>
    </div>
  </div>
);

export default App;
