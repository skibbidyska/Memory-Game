import React, { Component } from 'react';
import './App.css';
import Wrapper from "./components/Wrapper";
import ImageCard from "./components/ImageCard";
import images from "./images";

class App extends Component {

  state = {
    images,
    score: 0,
    highScore: 0,
  };


  gamePlay = id => {
    this.state.images.find((image, i) => {
      if (image.id === id) {
        if(images[i].clicks === 0) {
          images[i].clicks = images[i].clicks + 1;
          this.setState({score: this.state.score + 1}) ;
          console.log(this.state.score);
          this.state.images.sort(() => Math.random() - 0.5);
          console.log(this.state.images);
          if (this.state.score >= this.state.highScore) {
            this.setState({ highScore: this.state.highScore + 1 });
            console.log(this.state.highScore);


          }
          // this.setHighScore();
        }
        else {
          this.gameOver();
        }


      }
    });
  };

  // setHighScore = () => {
  //   if (this.state.score >= this.state.highScore) {
  //     this.setState({ highScore: ++this.state.highScore });
  //     console.log(this.state.highScore);
  //   }
  // };
  gameOver = () => {
    this.setState({ score: 0 });
    console.log(this.state.score);
    this.state.images.forEach(image => {
      image.clicks = 0;
    });
  };

  render() {
    return (
      <Wrapper>

        {this.state.images.map( image => (
          <ImageCard
            id={image.id}
            image={image.image}
            alt={image.alt}
            gamePlay={this.gamePlay}
          />
        ))}

      </Wrapper>
    );
  }
}

export default App;
