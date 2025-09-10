import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AsgardeoProvider } from '@asgardeo/react'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AsgardeoProvider
      clientId="KmSxeNv5M71m1EBSaMJDESGB45Ua"
      baseUrl="https://api.asgardeo.io/t/kalanajay"
      scopes="openid profile"
    >
      <App />
    </AsgardeoProvider>
  </StrictMode>
)