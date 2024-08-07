import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './ContenedorChat.css'
import mensajes from '../../data';
import Mensajes from '../Mensaje/Mensaje';

const ContenedorChat = () => {
    const { id } = useParams();
    const [contacto, setContacto] = useState(null);

    useEffect(() => {
        const contactoEncontrado = mensajes.find(contacto => contacto.id === parseInt(id));
        setContacto(contactoEncontrado);
    }, [id]);


    if (!contacto) return <div>Cargando...</div>;
    
    return (
        <div className='contenedor-chat'>
            <Link to={`/perfil/${contacto.id}`}>
                <div className='informacion-contacto'>
                    <Link to='/'> <i className="bi bi-arrow-left"></i></Link>
                    <img src={contacto.thumbnail} alt="foto-usuario" className='foto-perfil' />
                    <span className='nombre-contacto'>{contacto.nombre}</span>
                    <div className='iconos'>
                        <i className="bi bi-telephone"></i>
                        <i className="bi bi-camera-video"></i>
                        <i className="bi bi-three-dots-vertical"></i>
                    </div>
                </div>
            </Link>
            <div className="mensajes">
                {contacto.conversacion.map(({ autor, contenido, fecha, estado, id }) => (
                    <Mensajes
                        key={id}
                        autor={autor}
                        contenido={contenido}
                        fecha={fecha}
                        estado={estado}
                    />
                ))}
            </div>
        </div>
    );
};

export default ContenedorChat;