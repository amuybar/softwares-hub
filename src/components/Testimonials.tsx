import React from 'react';
import '../styles/Testimonials.scss';

const Testimonials: React.FC = () => {
  return (
    <section className="testimonials">
      <h2>Testimonials</h2>
      <div className="testimonial-item">
        <p>
          Daniel was a real pleasure to work with and we look forward to working with him again. He’s definitely the kind of designer you can trust with a project from start to finish.
        </p>
        <h4>Benjamin Bryant</h4>
        <span>CEO, Company</span>
      </div>
      {/* Add more testimonials as needed */}
    </section>
  );
};

export default Testimonials;
