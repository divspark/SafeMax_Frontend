import React, { useState } from "react";
import "../styles/Card.css"; // Import the CSS file for styling

const Card = ({ image, title, description }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="card">
      
      <div className="card-image">
        <img src={image} alt={title} />
      </div>
      <div className="card-content">
        <h3>{title}</h3>
        <p className={`card-description ${expanded ? "expanded" : ""}`}>
          {description}
        </p>
        <button onClick={toggleExpanded} className="toggle-button">
          {expanded ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
};

export default Card;
