import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDom from "react-dom/client"
import './index.css'
import App from './App.jsx'
import { AsgardeoProvider } from '@asgardeo/react'
import { BrowserRouter } from 'react-router-dom'

ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AsgardeoProvider
      clientId="KmSxeNv5M71m1EBSaMJDESGB45Ua"
      baseUrl="https://api.asgardeo.io/t/kalanajay"
      scopes="openid profile"
      >
        <App />
      </AsgardeoProvider>
    </BrowserRouter>
  </React.StrictMode>
)