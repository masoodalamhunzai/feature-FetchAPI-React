import * as React from "react";
import { SingleUsers } from "../components/SingleUsers";

class Users extends React.Component {
  state = {
    users: [],
    loading: false
  };

  componentWillMount() {
    console.log("component is loading");
  }
  componentDidMount() {
    this.loadusers();
  }

  loadusers = async () => {
    this.setState({
      loading: true
    });
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const users = await response.json();
    // console.log(users);
    this.setState({
      users,
      loading: false
    });
  };

  renderUsers() {
    const { users } = this.state;
    if (users.length === 0) {
      return <p>No Post Yet.</p>;
    }
    return users.map(user => (     
      <SingleUsers
        key={user.id}
        users={user}     
      />
    ));
  }

  render() {
    return (
      <div>
        <h2>Users</h2>
        {this.state.loading && <p>Loading... </p>}
        {this.renderUsers()}
      </div>
    );
  }
}

export { Users };
