import React from 'react';
import '../styles/LatestWorks.scss';

const LatestWorks: React.FC = () => {
  return (
    <section className="latest-works" id="works">
      <h2>Latest Works</h2>
      <div className="works-grid">
        <div className="work-item">
          <img src="path-to-image.jpg" alt="Work 1" />
          <h3>Lewis</h3>
          <p>Creativity Studio</p>
        </div>
        <div className="work-item">
          <img src="path-to-image.jpg" alt="Work 2" />
          <h3>Finaco</h3>
          <p>Finance Dashboard</p>
        </div>
        {/* Add more work items as needed */}
      </div>
    </section>
  );
};

export default LatestWorks;
