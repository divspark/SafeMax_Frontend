import React from 'react';
import "../styles/Card.css"; // Import the CSS file for styling
import Card from './FeatureBox';
// import FeatureBox from './FeatureBox'; 
// import FeatureImage1 from '../images/image1.jpg'; 
// import FeatureImage2 from '../images/image7.png';
// import FeatureImage3 from '../images/image3.avif';

function Features() {
  return (
    // <div id='Features'>
    //   <h1>Our Services</h1>
    //   <div className='a-container'>
    //     <FeatureBox image={FeatureImage1} title='SafeMax-Security' />
    //     <FeatureBox image={FeatureImage2} title='Money Saving Services' /> 
    //     <FeatureBox image={FeatureImage3} title='Usability Interface' /> 
    //   </div>
    // </div>
    <div className="card-container">
      <Card
        image="image1.jpg"
        title="Card Title 1"
        description="This is a longer description that will be truncated initially. Click show more to read the full text."
      />
      <Card
        image="image7.png"
        title="Card Title 2"
        description="This is another card with a lengthy description that will be truncated. Click show more to reveal more text."
      />
      <Card
        image="image3.avif"
        title="Card Title 2"
        description="This is another card with a lengthy description that will be truncated. Click show more to reveal more text."
      />
    </div>
  );
}

export default Features;
