import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Contactos.css"
import mensajes from '../../Data/data'


const Contactos = () => {

const [busqueda, setBusqueda] = useState("")

const contactosFiltrados = mensajes.filter(contacto =>
  contacto.nombre.toLocaleLowerCase().includes(busqueda.toLowerCase())
);

const handleSearchChange = (e) => {
  setBusqueda(e.target.value);
};


  
  return (
    <div className='contenedor-contactos'>
      <div className='header-contactos'>
      <h1 className='titulo'> WhatsApp </h1>
        <div className='header-iconos'>
          <i class="bi bi-camera"></i>
          <i className="bi bi-three-dots-vertical"></i>
        </div>
      </div>

      <div className='contenedor-busqueda'>
        <input type='text' placeholder='Buscar contactos...' value={busqueda} onChange={handleSearchChange} />
      </div>

      <ul className='contactos'>
        {contactosFiltrados.length === 0 ? (
          <li className='contacto-undefined'> No se encontraron contactos </li>
        ) : (
          contactosFiltrados.map(contacto => (
          <li key={contacto.id}>
            <Link to={`/chat/${contacto.id}`}>
              <div className='contacto-1'>
                <img src={contacto.thumbnail} alt={contacto.nombre} className='foto-perfil' />
                <span className='nombre-contacto'>{contacto.nombre}</span>
              </div>
            </Link>
          </li>
        ))
      )}
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
