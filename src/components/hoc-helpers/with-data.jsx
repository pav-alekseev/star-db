import React, { Component } from 'react';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

const withData = View => class extends Component {
  constructor() {
    super();

    this.state = {
      data: null,
      loading: true,
      error: false,
    };
  }

  async componentDidMount() {
    const { getData } = this.props;

    this.setState({
      loading: true,
      error: false,
    });

    try {
      const data = await getData();
      this.setState({
        data,
        loading: false,
      });
    } catch (error) {
      this.setState({
        loading: false,
        error: true,
      });
    }
  }

  render() {
    const { data, loading, error } = this.state;

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator />;
    }

    return (
      <View {...this.props} data={data} />
    );
  }
};

export default withData;
