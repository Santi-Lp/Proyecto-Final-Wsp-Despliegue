import React from 'react'
import "./Login.css"
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='container'>
      <div className='form-content'>
        <h1 className='titulo-login'> Inicia sesion  </h1>
        <form>
          <div className='input-group'> 
            <div className='input-field'>
                <i class="bi bi-envelope-fill"></i>
                <input name="email" id= "email" placeholder= "CristianSuarez@gmail.com" type="email" />
            </div>
            <div className='input-field'>
                <i class="bi bi-lock-fill"></i>
                <input name="password" id= "password" placeholder= "123456" type="password" />
            </div>
              <span className='span-login'> ¿Aun no tienes una cuenta? <Link to="/register"> Registrate </Link> </span>
            </div>
            <div className='btn-field'>
              <button className='boton-login' type='submit'> Iniciar sesion </button>
            </div>
        </form>
        
        </div>
    </div>
  )
}

export default Login
