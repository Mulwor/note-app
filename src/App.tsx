import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import Layout from './projects/Layout';
import { Countries } from './projects/rest-countries-api/Countries';
import { ErrorBoundary } from './projects/ErrorBoundary';
import { Card } from './projects/rest-countries-api/components/Card';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: 'country',
        element: <Countries />,
        children: [
          {
            path: ':name',
            element: <Card />,
          },
        ],
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
