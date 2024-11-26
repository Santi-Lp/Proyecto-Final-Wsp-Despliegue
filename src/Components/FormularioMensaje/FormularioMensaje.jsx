import React from 'react'



const FormularioMensaje = ({ formMensaje, setFormMensaje, handleSubmit }) => {

    const handleChangeFormValue = (e) => {
        const { name, value } = e.target
        setFormMensaje({ ...formMensaje, [name]: value })
    }

    

    
    return (
        <form className="escribir-mensaje" onSubmit={handleSubmit}>
            <div className='contenedor-input'>
                <i className="bi bi-emoji-smile icono-emoji"></i>
                <input type='text' name="contenido" id="input-mensaje" onChange={handleChangeFormValue} value={formMensaje.contenido} placeholder='Escribe un mensaje'></input>
                <button className='btn-adjuntar' type='button'>
                    <i className="bi bi-plus"></i>
                </button>
            </div>
            {formMensaje.contenido.length > 0 && (
                <button className='boton-enviar' type='submit'>
                    <i className="bi bi-send-fill icono-enviar"></i>
                </button>
            )}
        </form>
    )
}

export default FormularioMensaje