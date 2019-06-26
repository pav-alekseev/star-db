import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';

import './person-details.css';

export default class PersonDetails extends Component {
  constructor() {
    super();

    this.swapiService = new SwapiService();
    this.state = {
      person: null,
      loading: true,
    };

    this.onPersonLoaded = person => this.setState({
      person,
      loading: false,
    });

    this.updatePerson = async () => {
      const { personId } = this.props;

      if (!personId) {
        return;
      }

      this.setState(() => ({
        loading: true,
      }));

      const person = await this.swapiService.getPerson(personId);
      this.onPersonLoaded(person);
    };
  }

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps) {
    const { personId } = this.props;

    if (personId !== prevProps.personId) {
      this.updatePerson();
    }
  }

  render() {
    const { personId } = this.props;
    const { person, loading } = this.state;

    if (!personId) {
      return <span>Select a person from a list</span>;
    }

    const spinner = loading ? <Spinner /> : null;
    const content = !loading ? <PersonView person={person} /> : null;

    return (
      <div className="card">
        <div className="card-body">
          {spinner}
          {content}
        </div>
      </div>
    );
  }
}

PersonDetails.propTypes = {
  personId: PropTypes.string.isRequired,
};

const PersonView = ({ person }) => {
  const {
    id, name, gender, birthYear, eyeColor,
  } = person;

  return (
    <div className="row">
      <div className="col-lg-2 d-flex my-2">
        <img
          className="rounded w-100"
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
          alt="Person"
        />
      </div>

      <div className="col d-flex flex-column justify-content-center">
        <h2>{name}</h2>
        <table className="table table-bordered mb-0">
          <thead className="table-active">
            <tr>
              <th scope="col">Gender</th>
              <th scope="col">Birth Year</th>
              <th scope="col">Eye</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{gender}</td>
              <td>{birthYear}</td>
              <td>{eyeColor}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

PersonView.propTypes = {
  person: PropTypes.objectOf(PropTypes.shape).isRequired,
};
