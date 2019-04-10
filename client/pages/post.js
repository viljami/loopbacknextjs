import PropTypes from 'prop-types';

class Post extends React.Component {
  static defaultProps = {
    slug: ''
  };

  static propTypes = {
    slug: PropTypes.string
  };

  static async getInitialProps({ query }) {
    return {slug: query.slug};
  }

  render() {
    return (
      <div>
        <h1>My blog post</h1>
        <p>{this.props.slug}</p>
      </div>
    );
  }
}

export default Post;
