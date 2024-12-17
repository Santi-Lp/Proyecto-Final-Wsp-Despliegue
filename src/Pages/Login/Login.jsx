import React from 'react'
import "./Login.css"
import { Link, useNavigate } from 'react-router-dom'
import extraerFormulario from '../../utils/extractFormData.js'
import { POST, unauthenticatedHeaders } from '../../fetching/htp.fetching.js'



const Login = () => {

  const navigate = useNavigate();

  const handleSubmitLogin  = async (e) => {
    try{
      e.preventDefault();
      const formulario = e.target;
          const formulario_valores = new FormData(formulario);
          const formulario_campos = {
              "email" : "",
              "password" : "",
              }
  
          const Objeto_valores = extraerFormulario(formulario_campos, formulario_valores);
          const response = await POST("http://localhost:5000/api/auth/login", {
            headers: unauthenticatedHeaders,
            body: JSON.stringify(Objeto_valores)
          })
          const access_token = response.payload.token
          sessionStorage.setItem("access_token", access_token);
          navigate("/contactos");
        }
      catch (error) {
      console.error(error);
    }
  }
    
  
  return (
    <div className='container'>
      <div className='form-content'>
        <h1 className='titulo-login'> Inicia sesion  </h1>
        <form onSubmit={handleSubmitLogin}>
          <div className='input-group'> 
            <div className='input-field'>
                <i className="bi bi-envelope-fill"></i>
                <input name="email" id= "email" placeholder= "Mail" type="email" />
            </div>
            <div className='input-field'>
                <i className="bi bi-lock-fill"></i>
                <input name="password" id= "password" placeholder= "Contraseña" type="password" />
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
