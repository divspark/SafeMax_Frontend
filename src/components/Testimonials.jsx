import React, { useEffect, useState } from 'react';
import testimonials from '../data/testimonialData'; // Adjust the path as needed
import '../styles/testimonials.css';

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
    testimonials[(currentIndex + 2) % testimonials.length],
  ];

  return (
    <div className="testimonial-carousel">
      <h1>Testimonials</h1>
      <div className="testimonial-wrapper">
        {visibleTestimonials.map((testimonial, index) => (
          <div
            className="testimonial-item"
            key={index}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            <img src={testimonial.image} alt={`Testimonial from ${testimonial.name}`} className="testimonial-image" />
            <p className="testimonial-message">{testimonial.message}</p>
            <p className="testimonial-name">- {testimonial.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
