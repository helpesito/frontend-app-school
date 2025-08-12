import { NavLink } from 'react-router-dom'
import Style from './loginForm.module.css'
import { FaArrowCircleLeft } from 'react-icons/fa'
import { useForm } from '../../../hooks/useForm'


export const RecuperateForm = () => {

  const { formState, email, onInputChange, resetForm } = useForm({
    email: ''
  })
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Form submitted:', formState)
    // Aquí puedes agregar la lógica para enviar el correo de recuperación
    resetForm() // Reset the form after submission
  }
  return (
    <>  
    <form className={Style.formLogin} onSubmit={handleSubmit}>
      <div>
        <input 
          onChange={onInputChange}
          value={email}
          placeholder="Correo electrónico"
          className={Style.emailForm}
          type="email" 
          name="email"
          required 
          autoComplete="email"
        />
      </div>
      <button type="submit" className={Style.buttonForm}>Recuperar contraseña</button>
      <p className={Style.textForm}>Instrucciones para recuperar tu contraseña serán enviadas a tu correo electrónico.</p>
      <NavLink to='/login' className={Style.BackButton}>
        <FaArrowCircleLeft />
        <span>Volver</span>
      </NavLink>
    </form>

    </>
  )
}
