import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router.tsx';
import { GitHubDataContextProvider } from './contexts/GitHubDataContext.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GitHubDataContextProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </GitHubDataContextProvider>
  </React.StrictMode>,
);
