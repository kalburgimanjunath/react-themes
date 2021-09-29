import React from 'react';
import Hero from './Hero';
import Education from './Education';
import Experience from './Experience';
import References from './References';
export default function Content() {
  return (
    <div className="content">
      <Hero />
      <div className="main-container">
        <Education />
        <Experience />
        <References />
      </div>
    </div>
  );
}
