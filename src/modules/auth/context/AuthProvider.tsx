import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import type { AuthContextType } from './AuthContextType'
import type { User  } from '../components/userType'
import { AuthContext } from './AuthContext'


export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const navigate = useNavigate()

  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if(storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  const login = (userData: User) => {
    setUser(userData)
    localStorage.setItem('user', JSON.stringify(userData)) // Store user data in localStorage
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('user') // Remove user data from localStorage
    navigate('/login') // Redirect to the login page
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