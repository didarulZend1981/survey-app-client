import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Routes.jsx'
import AuthProvider from './providers/AuthProvider.jsx'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvider>
          <div className='max-w-screen-xl mx-auto'>
                <RouterProvider router={router} />
                <Toaster />
          </div>
     </AuthProvider>
   
    
  </React.StrictMode>,
)
