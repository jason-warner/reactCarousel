import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Carousel from './components/Carousel';

ReactDOM.render(
  <React.StrictMode>
    <div className="Carousel">
      <header className="Carousel-header">
        <h1>React Carousel</h1>
      </header>
      <main>
        <Carousel />
      </main>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
