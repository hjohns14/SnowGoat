import React from 'react'
import { useNavigate } from 'react-router-dom'

const LogoutButton = () => {
    const navigate = useNavigate()
    const handleLogout = () =>{
        window.sessionStorage.clear()
        navigate('/')
    }
    return (
        <button onClick={handleLogout} className='border border-black bg-red-400 px-2 py-1 rounded-md shadow-md shadow-neutral-500
                                                hover:bg-red-500 active:bg-red-600 active:translate-x-[1px] active:translate-y-[2px]'>
            Logout</button>
    )
}

export default LogoutButton