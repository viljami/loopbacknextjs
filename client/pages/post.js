class Post extends React.Component {
  static async getInitialProps({ query }) {
    console.log('SLUG', query.slug);
    // this.setState({slug: query.slug});
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
