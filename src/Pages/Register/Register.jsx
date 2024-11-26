import React from 'react'
import "./Register.css"
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='container'>
        <div className='form-content'>
        <h1> Registrate</h1>
        <form>
            <div className='input-group'>
            <div className='input-field'>
            <i class="bi bi-person-fill"></i>
                <input name="name" id= "name" placeholder= "Cristian Suarez" type="text" />
            </div>
            <div className='input-field'>
            <i class="bi bi-envelope-fill"></i>
                <input name="email" id= "email" placeholder= "CristianSuarez@gmail.com" type="email" />
            </div>
            <div className='input-field'>
            <i class="bi bi-lock-fill"></i>
                <input name="password" id= "password" placeholder= "123456" type="password" />
            </div>
            <span> ¿Ya tienes una cuenta? <Link to="/login">Inicia sesion</Link> </span>
            </div>
            <div className='btn-field'>
            <button type='submit'> Registrarme </button>
            </div>
            
        </form>
        
        </div>
    </div>
  )
}

export default Register
