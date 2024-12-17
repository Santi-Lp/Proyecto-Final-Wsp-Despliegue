# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

 El desafio elegido fue hacer una mensajeria muy similar a la del Whatsapp, siguiendo sus estilos y sus funciones correspondientes. Se que no es identica porque le faltan muchas cosas que son avanzadas para mi nivel actual pero me gustaria al final de el curso y mientras voy avanzando en el mundo de la programacion poder seguirla mejorando y actualizandola para tenerla de recuerdo como el primer  gran "trabajo" que hice de programacion yo solo. En cuanto a las dificultades podria decir que lo que mas me costo fue el uso de estados y efectos ya que era lo mas reciente y no tenia muchos ejemplos de como hacerlo, pero con las clases de zoom y ayuda de compañeros de cursada pude resolverlo sin problema y entenderlo que es lo mas importante. En cuanto a los estilos fue la parte mas entretenida en mi caso, ademas ya era hora de refrescar un poco de CSS. Para terminar,  queria agregar que no entregue el trabajo recomendado de slack por temas de tiempos pero que aun asi lo estoy haciendo por mi cuenta, como metodo de practica por otro lado queria decir que estoy muy contento con lo aprendido hasta ahora en el curso y con vos Mati que sos un muy buen profesor. 


const LogicaChat =  () => {
    

    const [listaMensajes, setListaMensajes] = useState(mensajes);
    const [formMensaje, setFormMensaje] = useState({ contenido: '' });

    const handleSubmit = async (e, id) => {
        e.preventDefault();

        if (!formMensaje.contenido.trim()) {
            alert("El mensaje no puede estar vacío");
            return; 
        }

        const nuevoMensaje = {
            autor: 'yo',
            receptor: id,
            contenido: formMensaje.contenido,
            fecha: new Date().toLocaleTimeString(),
            estado: 'no entregado',
            id: `msj-${listaMensajes.find(contacto => contacto.id === id).conversacion.length + 1}`
        };

        try{
            const response = await fetch("http://localhost:5000/api/mensajes", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({id, ...nuevoMensaje}),
            });
            if (!response.ok) throw new Error("Error al enviar el mensaje");
            
                const mensajeGuardado = await response.json();
        

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

    } catch (error) {
    console.error("Error al enviar el mensaje", error);
}
    }


    return {
        listaMensajes,
        setListaMensajes,
        formMensaje,
        setFormMensaje,
        handleSubmit
    };
};