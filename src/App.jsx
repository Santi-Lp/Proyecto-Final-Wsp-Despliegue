import React, { useState } from 'react';
import { Contactos, Perfil, ContenedorChat } from './Pages/index';
import { LocalStorageMensajes, LogicaChat } from './Components/index-componentes';
import { Route, Routes, useParams } from 'react-router-dom';

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
      <Route path='/' element={<Contactos />} />
      <Route path='/chat/:id' element={<ContenedorChat listaMensajes={listaMensajes} handleSubmit={handleSubmit} formMensaje={formMensaje} setFormMensaje={setFormMensaje} />} />
      <Route path='/perfil/:id' element={<Perfil />} />
    </Routes>
    </>
  );
};

export default App;
