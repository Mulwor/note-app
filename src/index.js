import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Collection_4 } from './RRD/Lesson_4/Collection_4';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter >
      <Collection_4 />
    </BrowserRouter >
  </React.StrictMode>
);
