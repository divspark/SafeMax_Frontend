import React from 'react'

function About(props) {
  return (
    <div id='about'>
        <div className='about-image'>
            <img src={props.image} alt=''/>
        </div>
        <div className='about-text'>
           <h2> {props.title} </h2> 
           <p>Founded: 2020</p>
              <p>Company: SafeMax Security</p>
              <p>Focus: Cybersecurity innovation</p>
              <p>Services: Tailored Vulnerability Assessment & Penetration Testing (VAPT)</p>
              <p>Goal: Securing digital assets for businesses globally</p>
              <p>Key Strengths: Precision, proactive threat hunting, adaptive security measures</p>
              <p>Client Trust: Over 50 clients, including 22 international organizations</p>
              <p>Industries Served: Diverse</p>
            
              <p>Growth & Valuation (2023): $75 million</p>
              <p>2024 Goal: $200 million valuation</p>
              <p>Approach: Proven, client-centric cybersecurity</p>
              <p> Future Focus: Expansion & new tech integrations</p>
              <p>Mission: Elevate digital resilience with strategic defenses</p>
              <p>Commitment: First and last line of defense against cyber threats</p>
           <button> {props.button} </button>
        </div>
    </div>
  )
}

export default About;