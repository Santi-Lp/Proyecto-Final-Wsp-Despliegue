import { useState, useEffect } from "react";
import mensajes from "../../Data/data";

const LogicaChat = () => {

    const [listaMensajes, setListaMensajes] = useState(mensajes);
    const [formMensaje, setFormMensaje] = useState({ contenido: '' });

    const handleSubmit = (e, id) => {
        e.preventDefault();
        const nuevoMensaje = {
            autor: 'yo',
            contenido: formMensaje.contenido,
            fecha: ' 10:15',
            estado: 'no entregado',
            id: `msj-${listaMensajes.find(contacto => contacto.id === id).conversacion.length + 1}`
        };

        const listaActualizada = listaMensajes.map(contacto => {
            if (contacto.id === id) {
                return {
                    ...contacto,
                    conversacion: [...contacto.conversacion, nuevoMensaje]
                };
            }
            return contacto;
        });

        setListaMensajes(listaActualizada);
        setFormMensaje({ contenido: '' });
    };

    return {
        listaMensajes,
        setListaMensajes,
        formMensaje,
        setFormMensaje,
        handleSubmit
    };
};
export default LogicaChat
