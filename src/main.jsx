import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ErrorPage from './components/Error-Page/ErrorPage.jsx'
import './index.css'
import Home from './components/Home/Home.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Dashboard from './components/Dashboard/Dashboard.jsx'
import ProductDetails from './components/ProductDetails/ProductDetails.jsx'
import Statistics from './components/Statistics/Statistics.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement : <ErrorPage></ErrorPage>,
    children :[
      {
        path :"/",
        element: <Home></Home>,
        loader :() => fetch("./../public/products.json"),
      },
      {
        path:"dashboard",
        element: <Dashboard></Dashboard>,
        loader :() => fetch("./../public/products.json"),
      },
      {
        path:"statistics",
        element: <Statistics></Statistics>,
      },
      {
        path:"/products/:id",
        loader:() => fetch("./../public/products.json"),
        element: <ProductDetails></ProductDetails>
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
