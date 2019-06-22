import React from 'react';

import './random-planet.css';

const RandomPlanet = () => (
  <div className="card">
    <div className="card-body">
      <div className="row">
        <div className="col-lg-2 d-flex my-2">
          <img
            className="rounded my-auto w-100 "
            src="https://starwars-visualguide.com/assets/img/planets/5.jpg"
            alt="Planet"
          />
        </div>
        <div className="col d-flex flex-column justify-content-center">
          <h2>Mustafar</h2>
          <table className="table table-bordered mb-0">
            <thead className="table-active">
              <tr>
                <th scope="col">Population</th>
                <th scope="col">Rotation Period</th>
                <th scope="col">Diameter</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>20000</td>
                <td>36</td>
                <td>4200</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
);

export default RandomPlanet;
