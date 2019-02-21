import * as React from "react";
import { SinglePhotos } from "../components/SinglePhotos";

class Photos extends React.Component {
  state = {
    photos: [],
    loading: false
  };

  componentWillMount() {
    console.log("component is loading");
  }
  componentDidMount() {
    this.loadPhotos();
  }

  loadPhotos = async () => {
    this.setState({
      loading: true
    });
    const response = await fetch(`https://jsonplaceholder.typicode.com/photos`);
    const photos = await response.json();
    // console.log(photos);
    this.setState({
      photos,
      loading: false
    });
  };

  renderPhotos() {
    const { photos } = this.state;
    if (photos.length === 0) {
      return <p>No Post Yet.</p>;
    }

    return photos.map(photo => <SinglePhotos key={photo.id} photos={photo} />).splice(0,100);
  }

  render() {
    return (
      <div>
        <h2>Photos</h2>
        {this.state.loading && <p>Loading... </p>}
        {this.renderPhotos()}
      </div>
    );
  }
}

export { Photos };
