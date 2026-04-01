import React, { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

function ProtectRouter({children}) {
    const navigate = useNavigate()
    const token = localStorage.getItem("token_id")
    useEffect(()=>{
    if(token) return navigate("/login");

    },[token])

  return children;
}

export default ProtectRouter
