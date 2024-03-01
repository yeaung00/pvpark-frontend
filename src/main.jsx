import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Parks from './parks/Parks.jsx'
import Park from './park/Park.jsx'
import { Auth0Provider } from '@auth0/auth0-react';
import Home from './home/Home.jsx'
import Auth from './auth/Auth.jsx'

const router = createBrowserRouter([
  {
    // path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/parks',
        element: <Parks />
      },
      {
        path: '/parks/:parkId',
        element: <Park />
      }
    ]
  },
  {
    path: 'login',
    element: <Auth />
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
      domain={import.meta.env.VITE_AUTH0_DOMAIN}
      clientId={import.meta.env.VITE_AUTH0_CLIENT}
      authorizationParams={{ redirect_uri: window.location.origin }}
    >
      <RouterProvider router={router} />
    </Auth0Provider>
  </React.StrictMode>,
)
