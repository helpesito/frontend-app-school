import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import type { AuthContextType } from './AuthContextType'
import type { User  } from '../components/userType'
import { AuthContext } from './AuthContext'
import type { LoginFormState } from '../components/loginType'
import { loginPost, logoutPost, verifySession } from '../services/authServices'


export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {

    const checkSession = async () => {
      try {
        const res = await verifySession()
        console.log('Session verified:', res)
        setUser(res.user)
        localStorage.setItem('user', JSON.stringify(res)) // Store user data in localStorage
      } catch (error) {
        console.error('Error verifying session:', error)
        setUser(null)
        localStorage.removeItem('user') // Clear user data if session verification fails
        navigate('/login') // Redirect to login if session verification fails
      } finally {
        setLoading(false)
      }
    }

    checkSession()
  }, [navigate, location.pathname])

  const login = async (LoginData: LoginFormState) => {
    try {
      const userData = await loginPost(LoginData.email, LoginData.password)
      setUser(userData.user)
      localStorage.setItem('user', JSON.stringify(userData)) // Store user data in localStorage
      navigate('/dashboard') // Redirect to the dashboard after successful login
    } catch (error) {
      console.error('Login failed:', error)
      throw new Error('Login failed')
    }
  }

  const logout = async () => {

    try {
      await logoutPost() // Call the logout service
      setUser(null)
      localStorage.removeItem('user') // Remove user data from localStorage
      navigate('/login') // Redirect to the login page
    } catch (error) {
      console.error('Logout failed:', error)
    }
  }


  const contextValue: AuthContextType = {
    user,
    login,
    logout,
  }

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  )
}