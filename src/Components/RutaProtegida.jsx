import React from 'react'
import { useAuthContext } from '../Context/AuthContext'
import { Navigate, Outlet } from 'react-router-dom'

const RutaProtegida = () => {
    const {isAuthenticatedUser} = useAuthContext()

    return (
        isAuthenticatedUser ? <Outlet/> : <Navigate to = {"/login"} />
    )
}

export default RutaProtegida
