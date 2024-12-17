import React from 'react'
import { useAuthContext } from '../Context/AuthContext'
import { Navigate, Outlet } from 'react-router-dom'

const RutaProtegida = () => {
    const token = sessionStorage.getItem("access_token");

    return (
        token ? <Outlet/> : <Navigate to = {"/login"} />
    )
}

export default RutaProtegida
