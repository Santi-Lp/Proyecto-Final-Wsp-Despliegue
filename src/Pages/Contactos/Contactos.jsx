import React from 'react'
import { Link } from 'react-router-dom'
import "./Contactos.css"
import mensajes from '../../data'


const Contactos = () => {

  
  return (
    <div className='contenedor-contactos'>
      <div className='header-contactos'>
      <h1 className='titulo'> Whatsapp </h1>
        <div className='header-iconos'>
          <i class="bi bi-camera"></i>
          <i className="bi bi-three-dots-vertical"></i>
        </div>
      </div>
      <ul className='contactos'>
        {mensajes.map(contacto => (
          <li key={contacto.id}>
            <Link to={`/chat/${contacto.id}`}>
            <div className='contacto-1'>
            <img src={contacto.thumbnail} alt={contacto.nombre} className='foto-perfil'/>
            <span className='nombre-contacto'>{contacto.nombre}</span>
            </div>
            </Link>
          </li>
        ))}
      </ul>
        
        <div className='footer-contactos'>
          <div className='iconos-2'>
            <span> <i class="bi bi-chat-right-text"></i></span>
            <i class="bi bi-people-fill"></i>
            <i class="bi bi-telephone-fill"></i>
            </div>
        </div>
    </div>
    
  )
}

export default Contactos
