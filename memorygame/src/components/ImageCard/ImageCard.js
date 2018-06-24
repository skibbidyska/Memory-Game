import React from "react";
import "./ImageCard.css";

const ImageCard = props => (

  <div className="card" onClick={() => props.gamePlay(props.id)}>
    <div className="img-container">
      <img src={props.image} alt={props.alt}/>
    </div>
  </div>

);



export default ImageCard;