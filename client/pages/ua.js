import React from 'react';
import PropTypes from 'prop-types';

class HelloUA extends React.Component {
  static defaultProps = {
    userAgent: ''
  };

  static propTypes = {
    userAgent: PropTypes.string
  };

  static async getInitialProps({ req }) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
    return { userAgent };
  }

  render() {
    return (
      <div>
        <h1>User Agent</h1>
        <p>{this.props.userAgent}</p>;
      </div>
    );
  }
}

export default HelloUA;

