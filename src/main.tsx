import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { FocusScreen } from './04-useReff/FocusScreen'




createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FocusScreen />
  </StrictMode>,
)
