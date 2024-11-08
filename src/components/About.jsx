import React from "react";

function About(props) {
  return (
    <div id="about">
      <div className="about-image">
        <img src="mobile2.png" alt="mobile" />
      </div>
      <div className="about-text">
        <h2>About Us</h2>
        <p>
          Founded in 2020, SafeMax Security specializes in cybersecurity
          innovation, offering tailored Vulnerability Assessment and Penetration
          Testing (VAPT) solutions that safeguard digital assets worldwide.
          Trusted by over 50 clients, including 22 international organizations,
          we combine precision, proactive threat hunting, and adaptive security
          to stay ahead of evolving cyber threats. With a client-centric
          approach and proven methods, we reached a $75 million valuation in
          2023 and are set to grow to $200 million in 2024
        </p>
      </div>
    </div>
  );
}

export default About;
