import React from "react";
import "./card.css";

const Card = props => (
  
    <div className="img-container">
      <img alt={props.id} src={props.image} />
    </div>

);

export default Card;