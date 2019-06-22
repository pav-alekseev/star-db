import React from 'react';

import './person-details.css';

const PersonDetails = () => (
  <div className="card">
    <div className="card-body">
      <div className="row">
        <div className="col-lg-2 d-flex my-2">
          <img
            className="rounded w-100"
            src="https://starwars-visualguide.com/assets/img/characters/3.jpg"
            alt="Person"
          />
        </div>

        <div className="col d-flex flex-column justify-content-center">
          <h2>R2-D2</h2>
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
                <td>Male</td>
                <td>43</td>
                <td>Colorred</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
);

export default PersonDetails;
