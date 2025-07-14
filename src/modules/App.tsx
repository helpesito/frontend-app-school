import { Routes, Route } from 'react-router-dom'
import { LoginPage } from './auth/components/LoginPage'
import { RecuperatePage } from './auth/components/RecuperatePage'
import { Dashboard } from './dashboard/components/Dashboard'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

export const App = () => {

  const navigate = useNavigate()

  useEffect(() =>{
    const user = localStorage.getItem('user')
    if (!user) {
      navigate('/login') // Redirect to login if no user is found
    }
  }, [navigate])

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
