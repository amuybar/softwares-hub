// src/components/Contact.tsx
import React from 'react';
import '../styles/Contact.scss';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>
      <div className="contact-info">
        <p>Let's make something amazing together.</p>
        <p>Start by <a href="mailto:hello@daniel.io">saying hi</a></p>
        <address>
          116 Fairground Rd, FL 32903, USA<br />
          <a href="mailto:hello@daniel.io">hello@daniel.io</a>
        </address>
      </div>
    </section>
  );
};

export default Contact;
