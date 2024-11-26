import React, { useState } from 'react';
import { Contactos, Perfil, ContenedorChat } from './Pages/index';
import { LocalStorageMensajes, LogicaChat } from './Components/index-componentes';
import { Route, Routes,} from 'react-router-dom';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';

const App = () => {

  const {
    listaMensajes,
    setListaMensajes,
    formMensaje,
    setFormMensaje,
    handleSubmit
  } = LogicaChat ();
  

  return (
    <>
    <LocalStorageMensajes listaMensajes={listaMensajes} setListaMensajes={setListaMensajes} />

    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/contactos' element={<Contactos listaMensajes={listaMensajes} />} />
      <Route path='/chat/:id' element={<ContenedorChat listaMensajes={listaMensajes} handleSubmit={handleSubmit} formMensaje={formMensaje} setFormMensaje={setFormMensaje} />} />
      <Route path='/perfil/:id' element={<Perfil />} />
    </Routes>
    </>
  );
};

export default App;
