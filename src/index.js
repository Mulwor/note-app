import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Collection_1 } from './RRD/Lesson_1/Collection_1';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter >
      <Collection_1 />
    </BrowserRouter >
  </React.StrictMode>
);
