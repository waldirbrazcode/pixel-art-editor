import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { SelectedColorProvider } from './ColorPallete/SelectedColor.jsx'

createRoot(document.getElementById('root')).render(
  <SelectedColorProvider>
    <StrictMode>
      <App />
  </StrictMode>,
  </SelectedColorProvider>
)
