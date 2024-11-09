import React from 'react';
import "../styles/Card.css"; 
import Card from './FeatureBox';


function Features() {
  return (
    <div id='Features'>
   
   <h1>Our Services</h1>
    <div className="card-container">
      <Card
        image="image1.jpg"
        title="SafeMax-Security"
        description="This is a longer description that will be truncated initially. Click show more to read the full text."
      />
      <Card
        image="image7.png"
        title="Money Saving Services"
        description="This is another card with a lengthy description that will be truncated. Click show more to reveal more text."
      />
      <Card
        image="image3.avif"
        title="Usability Interface"
        description="This is another card with a lengthy description that will be truncated. Click show more to reveal more text."
      />
    </div>
    </div>
  );
}

export default Features;
