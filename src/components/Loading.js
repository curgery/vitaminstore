import React from 'react';
import './Loading.css';

const Loading = () => (
  <div>
    <h1>Scroll after loading for inventory....</h1>
    <div className="spinner">
      <div className="double-bounce1"></div>
      <div className="double-bounce2"></div>
    </div>
  </div>  
);

export default Loading;
