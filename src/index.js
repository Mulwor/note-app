import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Collection_5 } from './RRD/Lesson_5/Collection_5';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter >
      <Collection_5 />
    </BrowserRouter >
  </React.StrictMode>
);
