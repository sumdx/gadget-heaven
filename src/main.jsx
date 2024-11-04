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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement : <ErrorPage></ErrorPage>,
    children :[
      {
        path :"/",
        element: <Home></Home>
      },
      {
        path:"dashboard",
        element: <Dashboard></Dashboard>
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
