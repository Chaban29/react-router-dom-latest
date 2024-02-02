import * as React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { App } from './App';
import './styles/index.css';
import { AuthProvider } from './hoc/AuthProvider';

const root = ReactDOMClient.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
