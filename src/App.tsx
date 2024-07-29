import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import { Countries } from './Countries';
import { ErrorBoundary } from './ErrorBoundary';
import { Card } from './components/Card';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Countries />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: ':name',
        element: <Card />,
      },
    ],
  },
]);

function App() {
  return (
    <RouterProvider
      router={router}
      fallbackElement={<p>Initial Load...</p>}
    />
  );
}

export default App;
