import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import { ErrorBoundary } from './ErrorBoundary'

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorBoundary />
  }
])

function App() {
  return (
    <RouterProvider router={router} fallbackElement={<p>Initial Load...</p>} />
  )
}

export default App
