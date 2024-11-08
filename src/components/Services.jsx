import React from 'react';
import FeatureBox from './FeatureBox'; 
import FeatureImage1 from '../images/image1.jpg'; 
import FeatureImage2 from '../images/image7.png';
import FeatureImage3 from '../images/image3.avif';

function Features() {
  return (
    <div id='Features'>
      <h1>Our Services</h1>
      <div className='a-container'>
        <FeatureBox image={FeatureImage1} title='SafeMax-Security' />
        <FeatureBox image={FeatureImage2} title='Money Saving Services' /> 
        <FeatureBox image={FeatureImage3} title='Usability Interface' /> 
      </div>
    </div>
  );
}

export default Features;
