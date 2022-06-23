import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
  <Auth0Provider
    domain="dev-e7x36sxc.us.auth0.com"
    clientId="ocS1vNj6ONiWTmYEPKYiUQ2UFHZBWn1L"
    redirectUri={window.location.origin}
    >
    <App /> 
    </Auth0Provider>
    <BrowserRouter> 
    
    </BrowserRouter>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
