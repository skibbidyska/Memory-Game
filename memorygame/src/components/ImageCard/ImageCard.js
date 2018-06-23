import React from "react";

const ImageCard = props => (
  <div className="container">
    <button>
      <img src={props.image} alt={props.alt} />
    </button>
  </div>
);



export default ImageCard;