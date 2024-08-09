import React, { useState } from 'react'
import './Mensaje.css'


const Mensajes = ({ autor, contenido, fecha, estado }) => {
    const lugarMensaje = autor === 'yo' ? 'mensaje-derecha' : 'mensaje-izquierda'
    const EstadoMensaje = estado === 'visto' 
    ? 'estado estado-visto' 
    : estado === 'entregado' 
    ? 'estado estado-entregado'
    : 'estado estado-no-entregado'
    return (
        <div className={`mensaje ${lugarMensaje}`}>
            {/* <span className="autor">{autor}</span> */}
            <p className="contenido">{contenido}</p>
            <span className="fecha">{fecha}</span>
            <span className={EstadoMensaje}>
                <i className={estado === 'no entregado' ? "bi bi-check" : "bi bi-check-all"}></i>
            </span>
        </div>
    )
}

export default Mensajes