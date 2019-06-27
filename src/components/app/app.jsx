import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorBoundry from '../error-boundry';
import ErrorIndicator from '../error-indicator';
import SwapiService from '../../services/swapi-service';
import { SwapiServiceProvider } from '../swapi-service-context';
import {
  PeoplePage,
  PlanetsPage,
  StarshipsPage,
} from '../pages';
import {
  PersonDetails,
  PlanetDetails,
  StarshipDetails,
} from '../sw-components';

import './app.css';

export default class App extends Component {
  constructor() {
    super();

    this.swapiService = new SwapiService();
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch() {
    this.setState({
      hasError: true,
    });
  }

  render() {
    const { hasError } = this.state;

    if (hasError) {
      return <ErrorIndicator />;
    }

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.swapiService}>
          <Router>
            <div>
              <Header />
              <div className="container">
                <div className="my-3">
                  <RandomPlanet />
                </div>

                <Switch>
                  <Route path="/" render={() => <h2>Welcome to StarDB</h2>} exact />
                  <Route
                    path="/people/:id"
                    render={({ match: { params: { id } } }) => <PersonDetails itemId={id} />}
                  />
                  <Route path="/people" component={PeoplePage} />
                  <Route
                    path="/planets/:id"
                    render={({ match: { params: { id } } }) => <PlanetDetails itemId={id} />}
                  />
                  <Route path="/planets" component={PlanetsPage} />
                  <Route
                    path="/starships/:id"
                    render={({ match: { params: { id } } }) => <StarshipDetails itemId={id} />}
                  />
                  <Route path="/starships" component={StarshipsPage} />

                  <Route render={() => <h2>Page not found</h2>} />
                </Switch>
              </div>
            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
