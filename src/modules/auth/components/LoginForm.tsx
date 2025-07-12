import Style from './loginForm.module.css'
import { useState } from 'react'

export const LoginForm = () => {

  const [showPassword, setShowPassword] = useState(false)

  const togglePassword = () => {
    setShowPassword(!showPassword)
  }
  
  return (
    <form className={Style.formLogin}>
      <div>
        <input 
          type="text" 
          name="email" 
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
      <p className={Style.textForm}>¿Olvidaste tu contraseña?</p>
    </form>
    
  )
}