import React from 'react'
import "./Login.css"
import { Link, useNavigate } from 'react-router-dom'
import extraerFormulario from '../../utils/extractFormData.js'



const Login = () => {

  const navigate = useNavigate();

  const handleSubmitLogin  = (e) => {
    e.preventDefault();
    const formulario = e.target;
        const formulario_valores = new FormData(formulario);
        const formulario_campos = {
            "email" : "",
            "password" : "",
            }

        const Objeto_valores = extraerFormulario(formulario_campos, formulario_valores);
        fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(Objeto_valores) 
        })
        .then(response => {
          if(response.ok) {
            alert("Usuario logueado correctamente");
            navigate("/contactos");
          } else {
            alert("Error al loguear el usuario");
          }
        })
        .catch(error => 
          {console.error("Error al loguear el usuario",error); 
            alert("Error al loguear el usuario");}
        )
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
