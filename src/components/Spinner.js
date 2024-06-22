// src/components/Spinner.js
import React from 'react';
import './Spinner.css';

const Spinner = () => (
  <div className="spinner-container">
    <div className="spinner">
      <div className="double-bounce1"></div>
      <div className="double-bounce2"></div>
    </div>
    <div className="loading-text">
      Fetching data<span className="dot-1">.</span><span className="dot-2">.</span><span className="dot-3">.</span>
    </div>
  </div>
);

export default Spinner;
