import Head from 'next/head';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import PropTypes from 'prop-types';

class Home extends React.Component {
  static defaultProps = {
    greeting: ''
  };

  static propTypes = {
    greeting: PropTypes.string
  };

  static async getInitialProps() {
    const res = await fetch('http://localhost:3000/api/ping');
    const {greeting} = await res.json();
    return {greeting};
  }

  render() {
    return (
      <div>
        <Head>
          <title>Home</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <h1>Welcome to Next.js!</h1>
        <p>Server says: {this.props.greeting}</p>
        <p>
          Click{' '}
          <Link href="/ua">
            <a>here</a>
          </Link>{' '}
          to read more
        </p>
        <Link href="/post?slug=something" as="/post/something">
          <a>Post</a>
        </Link>{' '}
      </div>
    );
  }
}

export default Home;
