import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Routes.jsx'
import AuthProvider from './providers/AuthProvider.jsx'
import { Toaster } from 'react-hot-toast'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { HelmetProvider } from 'react-helmet-async'

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvider>
     <QueryClientProvider client={queryClient}>
     <HelmetProvider>
          <div className='max-w-screen-xl mx-auto'>
                <RouterProvider router={router} />
                <Toaster />
          </div>
          </HelmetProvider>
      </QueryClientProvider>
     </AuthProvider>
   
    
  </React.StrictMode>,
)
