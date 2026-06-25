import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from './context/Auth'

const RequireAuth = ({children}) => {

    const {token} = useContext(AuthContext)

    if(!token) {
        return <Navigate to="/account/login" replace/>
    }

  return children

}

export default RequireAuth
