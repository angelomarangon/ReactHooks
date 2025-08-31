import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ProfessionalApp } from './09-useContext/ProfessionalApp'

import { Toaster } from 'sonner';
// import { InstagromApp } from './07-useOptimistic/InstagromApp'

// import { ClientInformation } from './08-use-suspense/ClientInformation';
// import { getUserAction } from './08-use-suspense/api/get-user.action';



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Toaster richColors position='top-right'/>
    {/* <InstagromApp /> */}
    {/* <Suspense fallback={
      <div className='bg-gradient flex flex-col'>
        <h1 className='text-2xl'>cargando...</h1>
      </div>
      }>
      <ClientInformation getUser={getUserAction('123')}/>
      </Suspense> */}
    <ProfessionalApp />
  </StrictMode>,
)
