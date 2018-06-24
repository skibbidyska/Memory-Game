import React, { Component } from 'react';
import './App.css';
import Wrapper from "./components/Wrapper";
import ImageCard from "./components/ImageCard";
import Header from "./components/Header";
import ContentWrapper from "./components/ContentWrapper";
import images from "./images";
import Instructions from "./components/Instructions/Instructions";

class App extends Component {

  state = {
    images,
    score: 0,
    highScore: 0,
  };


  gamePlay = id => {
    this.state.images.find((image, i) => {
        if (id === image.id) {
          if(image.clicks === 0) {
            image.clicks++;
            this.setState({score: this.state.score + 1}, function() {
              if (this.state.score > this.state.highScore) {
                this.setState({ highScore: this.state.highScore + 1 }, function() {
                  console.log(this.state.highScore);
                });
              }
            });
            this.setState({ images: this.state.images.sort(() => Math.random() - 0.5) });
            return true;
          }
          else {
            this.gameOver();
          }
        }
    });
  };


  gameOver = () => {
    this.setState({ score: 0 });
    console.log(this.state.score);
    this.state.images.forEach(image => {
      image.clicks = 0;
    });
    return true;
  };

  render() {
    return (

      <Wrapper>
        <Header score={this.state.score} highScore={this.state.highScore}></Header>
        <Instructions/>
        <ContentWrapper>
        {this.state.images.map( image => (
          <ImageCard
            id={image.id}
            image={image.image}
            alt={image.alt}
            gamePlay={this.gamePlay}
          />
        ))}
        </ContentWrapper>
      </Wrapper>
    );
  }
}

export default App;
