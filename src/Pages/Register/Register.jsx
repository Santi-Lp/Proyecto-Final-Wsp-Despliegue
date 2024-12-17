import React from 'react'
import "./Register.css"
import { Link, useNavigate } from 'react-router-dom'
import extraerFormulario from '../../utils/extractFormData.js'
import { POST, unauthenticatedHeaders } from '../../fetching/htp.fetching.js'



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
        const response = await POST 
        ("http://localhost:5000/api/auth/register", {
            headers: unauthenticatedHeaders,
            body: JSON.stringify(Objeto_valores)
        })

        .then(response => {
            if(response.ok) {
                alert("Usuario creado correctamente");
                navigate("/login");
            } else {
                alert("Error al crear el usuario");
            }
        })
        }
        catch (error) {
            console.error(error);
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
            <i class="bi bi-telephone-fill"></i>
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
