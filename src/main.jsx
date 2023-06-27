import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main';
import Home from './components/Home/Home/Home';
import About from './components/About/About';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children:[
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/about',
        element: <About/>
      },
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='font-serif'>
    <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
