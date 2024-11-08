import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Root from './Components/Root/Root';
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Home from './Components/Home/Home';
import Dashboard from './Components/Dashboard/Dashboard';
import Statistics from './Components/Statistics/Statistics';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import About from './Components/About/About';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const router = createBrowserRouter([
  {
    
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:
    [
  
      {
        path: '/',
        element:<Home></Home>,
        loader: () => fetch('./category.json'),
        children:[

        ],
      },
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        loader: () => fetch('/fakeData.json')
        
      },
      {
        path: 'products/:product_id',
        element: <ProductDetails></ProductDetails>,
        loader: () => fetch('/fakeData.json')
        
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/about',
        element: <About></About>
      }
      
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider  router={router} />
    <ToastContainer />
  </StrictMode>,
)
