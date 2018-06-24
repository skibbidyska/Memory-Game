import React from "react";
import "./ContentWrapper.css";

const ContentWrapper = props => <div className="imageWrapper"> {props.children} </div>;

export default ContentWrapper;