import React from "react";
import "./Header.css";

const Header = props => (
  <div className="header">

    <div className="title">Family Guy Inspired Clicky Game</div>
    <div className="score">
      Score: {props.score} HighScore: {props.highScore}
    </div>
  </div>
);

export default Header;