import React, { Component } from 'react';
import Spinner from '../spinner';

const withData = (View, getData) => class extends Component {
  constructor() {
    super();

    this.state = {
      data: null,
    };
  }

  async componentDidMount() {
    const data = await getData();
    this.setState({ data });
  }

  render() {
    const { data } = this.state;

    if (!data) {
      return <Spinner />;
    }

    return (
      <View {...this.props} data={data} />
    );
  }
};

export default withData;
