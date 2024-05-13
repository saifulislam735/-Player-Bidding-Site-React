import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Component/Root/Root.jsx';
import Players from './Component/Players/Players.jsx';
import Error from './Component/404/Error.jsx';

const router = createBrowserRouter([
  {
    path: "/Player-Bidding-Site-React/",
    element: <Root></Root>,
    children: [
      {
        path: "/Player-Bidding-Site-React/home",
        element: <Players></Players>
      },
      {
        path: "*",
        element: <Error></Error>,
      },


    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
