import React, { useState } from 'react'
import ContenedorChat from './Components/ContenedorChat/ContenedorChat'
import FormularioMensaje from './Components/FormularioMensaje/FormularioMensaje'
import { Contactos, Perfil } from './Pages/index'
import mensajes from './data'
import { Route, Routes } from 'react-router-dom'

const App = () =>{


  const [listaMensajes, setlistaMensajes] = useState(mensajes)
  const [formMensaje, setFormMensaje] = useState({contenido: ''})

  const handleSubmit = (e) => {
    e.preventDefault()
    const nuevoMensaje = {
      autor: 'yo', 
      contenido: formMensaje.contenido,
      fecha: ' 10:15', 
      estado: 'no entregado', 
      id: listaMensajes.length + 1
    }
    setlistaMensajes([...listaMensajes, nuevoMensaje])
    setFormMensaje({contenido: ''})
  }

  return (
    <Routes>

      <Route path='/' element={<Contactos/>}/>

      <Route path='/chat/:id' element={
    <>
      <ContenedorChat mensajes={listaMensajes}/>
      <FormularioMensaje formMensaje={formMensaje} setFormMensaje={setFormMensaje} handleSubmit={handleSubmit}/>
    </>
      }/>

      <Route path='/perfil/:id' element={<Perfil/>}/>

    </Routes>
  )
}

export default App