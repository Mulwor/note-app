import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Collection_6 } from './RRD/Lesson_6/Collection_6';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Collection_6 />
    </BrowserRouter >
  </React.StrictMode>
);
