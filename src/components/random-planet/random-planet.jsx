import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import './random-planet.css';

export default class RandomPlanet extends Component {
  constructor() {
    super();

    this.swapiService = new SwapiService();
    this.state = {
      planet: {},
      loading: true,
      error: false,
    };

    this.onPlanetLoaded = planet => this.setState({
      planet,
      loading: false,
    });

    this.updatePlanet();
  }

  async updatePlanet() {
    try {
      const id = Math.floor(Math.random() * 5) + 2;
      const planet = await this.swapiService.getPlanet(id);
      this.onPlanetLoaded(planet);
    } catch (error) {
      this.setState({
        loading: false,
        error: true,
      });
    }
  }

  render() {
    const {
      planet,
      loading,
      error,
    } = this.state;

    const hasData = !(loading || error);

    const spinner = loading ? <Spinner /> : null;
    const errorIndicator = error ? <ErrorIndicator /> : null;
    const content = hasData ? <PlanetView planet={planet} /> : null;

    return (
      <div className="card">
        <div className="card-body">
          {spinner}
          {errorIndicator}
          {content}
        </div>
      </div>
    );
  }
}

const PlanetView = ({ planet }) => {
  const {
    id, name, population, rotationPeriod, diameter,
  } = planet;

  return (
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
  );
};

PlanetView.propTypes = {
  planet: PropTypes.objectOf(PropTypes.shape).isRequired,
};
