// src/components/Contact.js
import React from 'react';
import './Contacts.css';

function Contact() {
  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <p>Email: sanikawagle@gmail.com</p>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/sanika-wagle-8b65a71b0" target="_blank">LinkedIn</a>
        <a href="https://github.com/Sanika2109" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </section>
  );
}

export default Contact;
