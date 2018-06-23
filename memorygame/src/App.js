import React, { Component } from 'react';
import './App.css';
import ImageCard from "./components/ImageCard";
import images from "./images";

class App extends Component {

  state = {
    images
  }





  render() {
    return (
      <div>

        {this.state.images.map( image => (
          <ImageCard
            image={image.image}
            alt={image.alt}
          />
        ))}

      </div>
    );
  }
}

export default App;
