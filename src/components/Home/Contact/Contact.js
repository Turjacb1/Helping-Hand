import React, { useState } from 'react';
import './Contact.css'; // Import the CSS file

import Navber from '../../Shared/Navber/Navber';
import Animation from '../../Animation/Animation/Animation';


const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!name || !email || !message) {
      setError('Please fill out all fields.');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    // Clear error message if validation passes
    setError('');

    // Send the form data to your server-side endpoint using fetch
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    })
      .then((response) => {
        if (response.ok) {
          setSubmitted(true);
          setName('');
          setEmail('');
          setMessage('');
        } else {
          setError('Something went wrong. Please try again later.');
        }
      })
      .catch((error) => {
        setError('Something went wrong. Please try again later.');
      });
  };

  return (
    <div className="contact-page">
      <Animation/>
      <Navber/> {/* Add Navber here */}
      <div className="contact-container">
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
        {submitted && <p className="success-message">Thank you for your message!</p>}
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
};

export default Contact;






