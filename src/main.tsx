import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './modules/App'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './modules/auth/context/AuthProvider'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)