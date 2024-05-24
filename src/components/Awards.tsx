import React from 'react';
import '../styles/Awards.scss';

const Awards: React.FC = () => {
  return (
    <section className="awards">
      <h2>Awards</h2>
      <ul>
        <li>Site of the Year for Lewis</li>
        <li>Honorable Mention for Bauhaus</li>
        <li>Gold in Digital Craft for Biforde</li>
        {/* Add more awards as needed */}
      </ul>
    </section>
  );
};

export default Awards;
