import * as React from "react";
import { SingleComments } from "../components/singleComments";

class Comments extends React.Component {
  state = {
    comments: [],
    loading: false
  };

  componentDidMount() {
    this.loadComments();
  }

  componentWillMount() {
    console.log("component will mount");
  }

  loadComments = async () => {
    this.setState({
      loading: true
    });
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/comments`
    );
    const comments = await response.json();
    this.setState({
      comments,
      loading: false
    });
  };

  renderComments() {
    const { comments } = this.state;
    if (comments.length === 0) {
      return <p>No Comments Yet.</p>;
    }
    return comments.map(comment => (
      <SingleComments key={comment.id} comments={comment} />
    ));
  }

  render() {
    return (
      <div>
        <h2>Comments</h2>
        {this.state.loading && <p>Loading...</p>}
        {this.renderComments()}
      </div>
    );
  }
}

export { Comments };
