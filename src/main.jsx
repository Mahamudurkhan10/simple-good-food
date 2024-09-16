import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()
import { router } from './Routes/router.jsx';
import AuthProvider from './Components/Provider/AuthProvider.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
      
          <RouterProvider router={router} />
       
      </QueryClientProvider>
    </AuthProvider>
  </StrictMode>,
)
