import { useEffect } from "react" 

const LocalStorageMensajes = ({listaMensajes, setListaMensajes}) => {

    useEffect(() => {
        const mensajesGuardados = localStorage.getItem("mensajes");
        if(mensajesGuardados) {
            setListaMensajes(JSON.parse(mensajesGuardados));
        }
    }, [setListaMensajes])

    useEffect(() => {
        localStorage.setItem("mensajes", JSON.stringify(listaMensajes));
    }, [listaMensajes]);

    return null
}

export default LocalStorageMensajes
