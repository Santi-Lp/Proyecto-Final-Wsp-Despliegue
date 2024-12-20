import React from 'react'
import "./Login.css"
import { Link, useNavigate } from 'react-router-dom'
import extraerFormulario from '../../utils/extractFormData.js'
import { getUnAuthenticatedHeaders, POST} from '../../fetching/htp.fetching.js'
import ENVIROMENT from '../../enviroment.js'



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
          const response = await fetch(`https://backend-final-wsp-despliegue-2.vercel.app/api/auth/login`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              "x-api-key": "cacda5fe-c409-441a-bbbf-1788e204ddc9"
            },
            body: JSON.stringify(Objeto_valores)
            }
        )
          const access_token = response.payload.token
          if (access_token) {
            sessionStorage.setItem("access_token", access_token)
          alert("Inicio de sesion exitoso");
          navigate("/contactos");
        } else {
          alert("Inicio de sesion fallido");
        }
      } catch (error) {
        console.log(error)
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
                <input required= "required" name="email" id= "email" placeholder= "Mail" type="email" />
            </div>
            <div className='input-field'>
                <i className="bi bi-lock-fill"></i>
                <input  required= "required" name="password" id= "password" placeholder= "Contraseña" type="password" />
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
