import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import mensajes from '../../Data/data';
import "./Perfil.css";

const Perfil = () => {
  const { id } = useParams();
  const [contacto, setContacto] = useState(null);

  useEffect(() => {
    const contactoEncontrado = mensajes.find(contacto => contacto.id === parseInt(id));
    setContacto(contactoEncontrado);
  }, [id]);

  if (!contacto) return <div>Cargando...</div>;

  return (
    <div className='contenedor-perfil'>
      <div className='informacion-perfil'>
        <div className='iconos-perfil'>
          <Link to={`/chat/${contacto.id}`}> <i className="bi bi-arrow-left"></i></Link>
          <i className="bi bi-three-dots-vertical"></i>
        </div>
        <div className='fotodelperfil'>
          <img src={contacto.thumbnail} alt="foto-usuario" className='foto-perfil-2' />
        </div>
        <span className='nombre-perfil'>{contacto.nombre}</span>
        <span className='numero-perfil'> {contacto.numero}</span> 
        <div className='contenedor-iconos-perfil'>
          <div className='contenedor-telefono'>
            <i className="bi bi-telephone"></i>
          </div>
          <div className='contenedor-camara'>
            <i className="bi bi-camera-video"></i>
          </div>
          <div className='contenedor-lupa'>
            <i className="bi bi-search"></i>
          </div>
        </div>
        <div className='opciones-perfil'>
          <div className='contenedor-notificaciones'>
            <i className="bi bi-bell"></i>
            <span className='noti'> Notificaciones</span>
          </div>
          <div className='contenedor-archivo'>
            <i className="bi bi-image"></i>
            <span className='archivo'> Archivos Multimedia</span>
          </div>
          <div className='contenedor-cifrado'>
            <i className="bi bi-file-lock"></i>
            <span className='cifrado'> Cifrado </span>
          </div>
        </div>
        <div className='opciones-perfil-2'>
          <div className='contenedor-favoritos'>
            <i className="bi bi-heart"></i>
            <span className='fav'> Añadir a Favoritos </span>
          </div>
          <div className='contenedor-bloquear'>
            <i className="bi bi-ban"></i>
            <span className='block'> Bloquear a {contacto.nombre}</span>
          </div>
          <div className='contenedor-reportar'>
            <i className="bi bi-hand-thumbs-down"></i>
            <span className='report'>Reportar a {contacto.nombre}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Perfil;
