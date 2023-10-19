import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { Auth0Provider } from '@auth0/auth0-react'; // Updated import

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-h53phf88nd3mm013.us.auth0.com" // Use 'domain' instead of 'auth0Domain'
      clientId="l1mxgpeRM21xrQoVBFocRbxaXu8wiVvh"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
);



