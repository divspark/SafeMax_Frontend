import React from 'react';
import FeatureBox from './FeatureBox'; 
import FeatureImage1 from '../images/feature_1.png'; 
import FeatureImage2 from '../images/feature_2.png';
import FeatureImage3 from '../images/feature_3.png';

function Features() {
  return (
    <div id='Features'>
      <div className='a-container'>
        <FeatureBox image={FeatureImage1} title='SafeMax-Security' />
        <FeatureBox image={FeatureImage2} title='Money Saving Services' /> 
        <FeatureBox image={FeatureImage3} title='Usability Interface' /> 
      </div>
    </div>
  );
}

export default Features;
