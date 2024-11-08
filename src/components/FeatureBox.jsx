import React, { useState } from 'react';

function FeatureeBox(props) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className='a-box'>
      <div className='a-b-img'>
        <img src={props.image} alt={props.title} />
        <div className='s-b-text'>
          <h2>{props.title}</h2>
          <p className={`description ${isExpanded ? 'expanded' : 'collapsed'}`}>
            "At SafeMax Security, we don’t just secure systems; we create strategies to elevate your digital resilience.
            Trust us to be your first and last line of defense against cyber adversaries."
          </p>
          <button onClick={toggleText} className="toggle-button">
            {isExpanded ? 'Show Less' : 'Show More'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default FeatureeBox;
