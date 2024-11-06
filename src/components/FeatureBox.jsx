import React from 'react'

function FeatureeBox(props) {
  return (
    <div className='a-box'>
        <div className='a-b-img'>
            <img src={props.image}/>
            <div className='s-b-text'>
                <h2> {props.title} </h2>
                <p>"At SafeMax Security, we don’t just secure systems; we create strategies to elevate your digital resilience.
                   Trust us to be your first and last line of defense against cyber adversaries."</p>
                
            </div>
        </div>
    </div>
  )
}

export default FeatureeBox