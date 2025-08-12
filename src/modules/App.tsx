import { Routes, Route } from 'react-router-dom'
import { LoginPage } from './auth/components/LoginPage'
import { RecuperatePage } from './auth/components/RecuperatePage'
import { Dashboard } from './dashboard/components/Dashboard'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

export const App = () => {

  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const user = localStorage.getItem('user')
    const publicRoutes = ['/login', '/recuperate']

    if (!user && !publicRoutes.includes(location.pathname)) {
      navigate('/login') // Solo redirige si NO es una ruta pública
    }
  }, [navigate, location.pathname])

  return (
    <div>
      <Routes>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/recuperate' element={<RecuperatePage/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/*' element={<LoginPage/>}/>
      </Routes>
    </div>
  )
}
