import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App';

createRoot(document.getElementById('approot')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
