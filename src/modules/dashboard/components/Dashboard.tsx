import { useAuth } from '../../auth/context/useAuth'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const Dashboard = () => {

  const { user, logout } = useAuth() // Get user from context

  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
  }

  useEffect(() => {
    if(!user) {
      alert('You must be logged in to access the dashboard')
      navigate('/login') // Redirect to login if no user is found
    }
  }, [user, navigate])

  return (
    <>
    <div>dashboard</div>
    <button onClick={handleLogout}>
      logout
    </button>
    </>
  )
}
