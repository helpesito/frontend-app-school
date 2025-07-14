import { AuthLayout } from './AuthLayout'
import { LoginForm } from './LoginForm'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const LoginPage = () => {

  const navigate = useNavigate()
  useEffect(() => {
    const user = localStorage.getItem('user')
    if (user) {
      navigate('/dashboard') // Redirect to dashboard if user is already logged in
    }
  }, [navigate])

  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  )
}
