import { useAuth } from '../../auth/context/useAuth'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const Dashboard = () => {

  const { user, logout } = useAuth() // Get user from context
  console.log('User from context:', user)
  const navigate = useNavigate()
  
  useEffect(() => {
    if(!user) {
      alert('You must be logged in to access the dashboard')
      navigate('/login') // Redirect to login if no user is found
    }
  }, [user, navigate])

  const handleLogout = () => {
    logout()
  }

  
  if (!user) return null

  return (
    <>
    <div>dashboard</div>
    <h1>Bienvenido:{user.first_name} {user.middle_name} {user.first_last_name} {user.second_last_name}</h1>
    <p>rol:{user.preferredRole?.toLowerCase() ?? 'sin rol'}</p>
    <button onClick={handleLogout}>
      logout
    </button>
    </>
  )
}
