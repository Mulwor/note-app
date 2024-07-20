import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import './index.css';
import Layout from "./projects/Layout";
import { Countries } from "./projects/rest-countries-api/Countries";

const router = createBrowserRouter([
  {
    id: "root",
    path: "/",
    Component: Layout,
    children: [
      {
        path: "country",
        Component: Countries,
        children: [
          {
            path: ":name",
            // Component: Card,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} fallbackElement={<p>Initial Load...</p>} />
}

export default App;
