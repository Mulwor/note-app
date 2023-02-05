import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Collection_2 } from './RRD/Lesson_2/Collection_2';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter >
      <Collection_2 />
    </BrowserRouter >
  </React.StrictMode>
);
