import React from 'react';

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
      <div className="why-choose-us-content">
        <div className="text-content">
          <h2 className="section-title2">Why Choose SafeMax Security?</h2>
          <p className="section-description">
            At SafeMax Security, we offer comprehensive, client-focused cybersecurity solutions. Here are the key advantages of partnering with us:
          </p>
          <ul className="advantages-list">
            <li className="advantage-item"><strong>Proactive Threat Hunting:</strong> We stay ahead of emerging threats to ensure your systems are always secure.</li>
            <li className="advantage-item"><strong>Tailored Solutions:</strong> Our VAPT services are customized to meet the specific needs of your business.</li>
            <li className="advantage-item"><strong>Global Client Trust:</strong> With over 50 clients worldwide, including 22 international organizations, we are trusted by businesses globally.</li>
            <li className="advantage-item"><strong>Adaptive Security Measures:</strong> We implement dynamic strategies that evolve with your business and industry threats.</li>
          </ul>
        </div>
        <div className="image-content">
          <img
            src="image2.avif" // Example URL for a cybersecurity vector image
            alt="Cybersecurity Illustration"
            className="cybersecurity-image"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
