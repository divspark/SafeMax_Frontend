import React, { useState } from 'react';
import axios from 'axios';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredDateTime: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://safe-max-backend.vercel.app/api/appointment/create', {
        clientName: formData.name,
        clientEmail: formData.email,
        appointmentDate: formData.preferredDateTime,
        comments: formData.message
      });
      
      if (response.status === 201) {
        alert('Appointment created successfully');
        setFormData({ name: '', email: '', phone: '', preferredDateTime: '', message: '' });
      } else {
        alert(`Error: ${response.data.message}`);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div id="Contact" className="contact-section">
      <div className="contact-container">
        <div className="form-section">
          <h3>Book Appointment</h3>
          <p>Fill out the form below to schedule a consultation or get in touch with us:</p>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-field">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="preferredDateTime">Preferred Date & Time:</label>
              <input
                type="datetime-local"
                id="preferredDateTime"
                name="preferredDateTime"
                value={formData.preferredDateTime}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="4"
                required
              />
            </div>

            <div className="form-field">
              <button type="submit" className="submit-button">Submit</button>
            </div>
          </form>
        </div>

        <div className="image-section">
          <img src="image9.png" alt="Cybersecurity" />
        </div>
      </div>
    </div>
  );
}

export default Contact;
