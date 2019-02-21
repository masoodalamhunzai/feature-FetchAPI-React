import * as React from "react";
import { SinglePost } from "../components/SinglePost";

class Posts extends React.Component {
  state = {
    posts: [],
    loading: false
  };

  componentWillMount() {
    console.log("component is loading");
  }
  componentDidMount() {
    this.loadPosts();
  }

  loadPosts = async () => {
    this.setState({
      loading: true
    });
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const posts = await response.json();
    this.setState({
      posts,
      loading: false
    });
  };

  renderPost() {
    const { posts } = this.state;
    if (posts.length === 0) {
      return <p>No Post Yet.</p>;
    }
    return posts.map(post => (
      <SinglePost
        key={post.id}
        id={post.id}
        body={post.body}
        title={post.title}
      />
    ));
  }

  render() {
    return (
      <div>
        <h2>Posts</h2>
        {this.state.loading && <p>Loading... </p>}
        {this.renderPost()}
      </div>
    );
  }
}

export { Posts };
