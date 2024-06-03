import React from 'react';
import '../styles/NotFound.scss';

const NotFound: React.FC = () => {
  return (
    <section className="not-found-body">
      <div className="container">
        <h1>404 - Page Not Found</h1>
        <div className="line"></div>
        <p>The page you are looking for does not exist. It might have been moved or deleted.</p>
        <a href="/" className="back-home">Go Back Home</a>
      </div>
    </section>
  );
};

export default NotFound;
