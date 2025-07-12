import { NavLink } from 'react-router-dom'
import Style from './loginForm.module.css'
import { useState } from 'react'
import { useForm } from '../../../hooks/useForm'
import { useNavigate } from 'react-router-dom'
import { login } from '../services/authServices' // Assuming you have an API function for login

export const LoginForm = () => {

  const navigate = useNavigate()

  const [showPassword, setShowPassword] = useState(false)
  const { formState, email, password, onInputChange, resetForm} = useForm({
    email: '',
    password: ''
  })

  const togglePassword = () => {
    setShowPassword(!showPassword)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Form submitted:', formState)
    try {
      const data = await login(formState.email, formState.password)
      console.log('Login successful:', data)
      resetForm() // Reset the form after successful login
      navigate('/dashboard') // Redirect to the dashboard or another page
    } catch (error) {
      console.error('Error during login:', error)
      resetForm() // Reset the form in case of an error
      alert('Login failed. Please try again.')
      return
    }
    // Aquí podrías agregar la lógica para manejar el inicio de sesión
  }
  
  return (
    <form className={Style.formLogin} onSubmit={handleSubmit}>
      <div>
        <input 
          type="text" 
          name="email"
          value={email}
          onChange={onInputChange}
          placeholder="Correo" 
          className={Style.emailForm}
          autoComplete="email"
          required 
        />
      </div>
      <div className={Style.passwordContainer}>
        <input 
          type={showPassword ? 'text' : 'password'} 
          name="password" 
          value={password}
          onChange={onInputChange}
          placeholder="Contraseña" 
          className={Style.passwordForm} 
          autoComplete="current-password"
          required 
        />
        <button 
          type='button'
          onClick={togglePassword}
          className={Style.togglePassword}
        >
          {showPassword ? '🙈' : '👁️'}
        </button>
      </div>
      <button type="submit" className={Style.buttonForm}>Ingresar</button>
      <hr />
      <NavLink to='/recuperate' className={Style.textForm}>¿Olvidaste tu contraseña?</NavLink>

      <p className={Style.textLema}>“EDUCACIÓN ORGANIZADA, FUTURO ASEGURADO”</p>
    </form>
    
  )
}