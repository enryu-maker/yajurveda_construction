import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './i18n.js';
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router';

const root = document.getElementById('root');
const app = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

// Production pages are prerendered (scripts/prerender.js); dev serves an empty shell.
if (root.hasChildNodes()) hydrateRoot(root, app);
else createRoot(root).render(app);
