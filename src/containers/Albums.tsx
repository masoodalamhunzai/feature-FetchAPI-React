import * as React from "react";
import { SingleAlbums } from "../components/SingleAlbum";

class Albums extends React.Component {
  state = {
    albums: [],
    loading: false
  };

  componentWillMount() {
    console.log("component is loading");
  }
  componentDidMount() {
    this.loadAlbums();
  }

  loadAlbums = async () => {
    this.setState({
      loading: true
    });
    const response = await fetch(`https://jsonplaceholder.typicode.com/albums`);
    const albums = await response.json();
    // console.log(albums);
    this.setState({
      albums,
      loading: false
    });
  };

  renderAlbums() {
    const { albums } = this.state;
    if (albums.length === 0) {
      return <p>No Post Yet.</p>;
    }
    return albums.map(album => (     
      <SingleAlbums
        key={album.id}
        albums={album}     
      />
    ));
  }

  render() {
    return (
      <div>
        <h2>Albums</h2>
        {this.state.loading && <p>Loading... </p>}
        {this.renderAlbums()}
      </div>
    );
  }
}

export { Albums };
