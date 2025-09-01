import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { Toaster } from 'sonner';
import { HeroesApp } from './HeroesApp/HeroesApp';
// import { InstagromApp } from './07-useOptimistic/InstagromApp'

// import { ClientInformation } from './08-use-suspense/ClientInformation';
// import { getUserAction } from './08-use-suspense/api/get-user.action';



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Toaster richColors position='top-right'/>
    <HeroesApp />
  </StrictMode>,
)
