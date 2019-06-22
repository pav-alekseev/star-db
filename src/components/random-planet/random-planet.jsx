import React, { Component } from 'react';

import SwapiService from '../../services/swapi-service';

import './random-planet.css';

export default class RandomPlanet extends Component {
  constructor() {
    super();

    this.swapiService = new SwapiService();
    this.state = { planet: {} };

    this.onPlanetLoaded = planet => this.setState({ planet });
    this.updatePlanet();
  }

  async updatePlanet() {
    const id = Math.floor(Math.random() * 5) + 2;
    const planet = await this.swapiService.getPlanet(id);
    this.onPlanetLoaded(planet);
  }

  render() {
    const {
      planet: {
        id, name, population, rotationPeriod, diameter,
      },
    } = this.state;

    return (
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-lg-2 d-flex my-2">
              <img
                className="rounded my-auto w-100 "
                src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                alt="Planet"
              />
            </div>
            <div className="col d-flex flex-column justify-content-center">
              <h2>{name}</h2>
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
                    <td>{population}</td>
                    <td>{rotationPeriod}</td>
                    <td>{diameter}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
