const mensajes = [
  {
    nombre: "Messi",
    thumbnail: "https://i.pinimg.com/736x/9b/a6/83/9ba683fbf49a0f956c630027f958eb25.jpg",
    ultima_conexion: "ayer",
    id: 1,
    conversacion: [

      {
        autor: 'Messi',
        contenido: 'Buenas Buenas',
        fecha: ' 15:34',
        estado: 'visto',
        id: "msj-1"
      },
      {
        autor: 'yo',
        contenido: 'Sos vos Messi?',
        fecha: ' 15:35',
        estado: 'visto',
        id: "msj-2"
      },
      {
        autor: 'Messi',
        contenido: 'Obviamente, acaso lo dudas?',
        fecha: ' 15:36',
        estado: 'visto',
        id: "msj-3"
      },
      {
        autor: 'yo',
        contenido: 'Jamas. Traeme la copa ',
        fecha: ' 15:37',
        estado: 'entregado',
        id: "msj-4"
      }
    ]
  },
  {
    nombre: 'Abuela',
    id: 2,
    thumbnail: 'https://www.pngfind.com/pngs/m/317-3177131_636682202684372240-user-profile-photo-round-hd-png-download.png',
    ultima_conexion: 'ayer',
    conversacion: [
      {
        autor: 'yo',
        contenido: 'Hola abuelita, ¿cómo estás?',
        estado: 'entregado',
        fecha: '13:00',
        id: 'msj-1'
      },
      {
        autor: 'Abuelita',
        contenido: 'Hola mi niño, estoy bien. ¿Y tú?',
        estado: 'visto',
        fecha: '13:37',
        id: 'msj-2'
      }
    ]
  },
  {
    nombre: 'Cristiano',
    id: 3,
    thumbnail: 'https://i.pinimg.com/736x/b7/76/1c/b7761c30f98e12c203879f551f1a615a.jpg',
    ultima_conexion: 'hoy',
    conversacion: [
      {
        autor: 'yo',
        contenido: '¿Vamos al cine?',
        estado: 'entregado',
        fecha: 'ayer',
        id: 'msj-1'
      },
      {
        autor: 'Pedro',
        contenido: 'Sí, claro. ¿A qué hora?',
        estado: 'visto',
        fecha: 'ayer',
        id: 'msj-2'
      },
      {
        autor: 'yo',
        contenido: 'A las 7pm está bien.',
        estado: 'visto',
        fecha: 'ayer',
        id: 'msj-3'
      }
    ]
  },
  {
    nombre: 'Lebron',
    id: 4,
    thumbnail: 'https://p.kindpng.com/picc/s/110-1109780_lakers-media-day-2018-lebron-james-png-lakers.png',
    ultima_conexion: 'hoy',
    conversacion: [
      {
        autor: 'yo',
        contenido: 'Hola Laura, ¿qué tal?',
        estado: 'entregado',
        fecha: '18:08',
        id: 'msj-1'
      },
      {
        autor: 'Laura',
        contenido: 'Hola, todo bien. ¿Y tú?',
        estado: 'visto',
        fecha: '18:43',
        id: 'msj-2'
      },
      {
        autor: 'yo',
        contenido: 'Todo bien, gracias.',
        estado: 'visto',
        fecha: '19:01',
        id: 'msj-3'
      }
    ]
  },
];

export default mensajes 