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
import PurchaseHistory from './components/PuchaseHistory/PurchaseHistory.jsx'
import { HelmetProvider } from "react-helmet-async";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
   // errorElement : <ErrorPage></ErrorPage>,
    children :[
      {
        path :"/",
        element: <Home></Home>,
        loader :() => fetch("/products.json"),
      },
      {
        path:"dashboard",
        element: <Dashboard></Dashboard>,
        loader :() => fetch("/products.json"),
      },
      {
        path:"statistics",
        element: <Statistics></Statistics>,
        loader:() => fetch("/products.json"),
      },
      {
        path:"/products/:id",
        loader:() => fetch("/products.json"),
        element: <ProductDetails></ProductDetails>
      },
      {
        path:"purchaseHistory",
        element:<PurchaseHistory></PurchaseHistory>
      }
    ],
  },  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
    <RouterProvider router={router} />
    </HelmetProvider>
  </StrictMode>,
)
