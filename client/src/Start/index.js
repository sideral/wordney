import React from 'react';
import { Link } from 'react-router-dom';

const Index = () => (
  <div>
    <header className="Start-header">
      <h1 className="Start-title">wordney</h1>
      <h2 className="Start-subtitle">
        find the shortest path between two words
      </h2>
    </header>
    <Link to={'/game'} className="Start-button pulsate-fwd">start</Link>
  </div>
);

export default Index;