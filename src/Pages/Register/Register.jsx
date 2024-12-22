import React from 'react'
import "./Register.css"
import { Link, useNavigate } from 'react-router-dom'
import extraerFormulario from '../../utils/extractFormData.js'
import { getUnAuthenticatedHeaders, POST} from '../../fetching/htp.fetching.js'
import ENVIROMENT from '../../enviroment.js'




const Register = () => {
    const navigate = useNavigate();

    const handleSubmitRegister =  async (e) => {
        try {
            e.preventDefault();
        const formulario = e.target;
        const formulario_valores = new FormData(formulario);
        const formulario_campos = {
            "name" : "",
            "email" : "",
            "password" : "",
            "number" : ""
        }
        const Objeto_valores = extraerFormulario(formulario_campos, formulario_valores);
        const response = await fetch(`${ENVIROMENT.API_URL}/api/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "x-api-key": "cacda5fe-c409-441a-bbbf-1788e204ddc9"
            },
            body: JSON.stringify(Objeto_valores)
        })
        
        if (!response.ok) {
            const errorData = await response.json();
            alert(errorData.message || "Error al registrar el usuario");
            return;
        }
        alert("Usuario registrado exitosamente");
        navigate("/login");
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <div className='container'>
        <div className='form-content'>
        <h1> Registrate</h1>
        <form onSubmit={handleSubmitRegister}>
            <div className='input-group'>
            <div className='input-field'>
            <i className="bi bi-person-fill"></i>
                <input name="name" id= "name" placeholder= "Nombre" type="text" />
            </div>
            <div className='input-field'>
            <i className="bi bi-telephone-fill"></i>
                <input name="number" id= "number" placeholder= "Numero de telefono" type="string" />
            </div>
            <div className='input-field'>
            <i className="bi bi-envelope-fill"></i>
                <input name="email" id= "email" placeholder= "Mail" type="email" />
            </div>
            <div className='input-field'>
            <i className="bi bi-lock-fill"></i>
                <input name="password" id= "password" placeholder= "Contraseña" type="password" />
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
