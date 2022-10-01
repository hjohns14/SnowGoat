import React from 'react'
import RegisterForm from './RegisterForm'

const Register = () => {
    const handleSubmit = (e) =>{
        e.preventDefault()
    }

    return (
        <main className='bg-slate-100 h-[100vh] z-0'>
            <img src={require('../assets/images/samuel-ferrara-FGEHnEMaZnE-unsplash.jpg')} alt="placeholder-img" className='backdrop-img rotate-[-15deg] top-[15%] left-[15%]'/>
            <img src={require('../assets/images/sergey-mikheev-k2HhqajONac-unsplash.jpg')} alt="placeholder-img" className='backdrop-img rotate-[10deg] top-[25%] left-[60%]'/>
            <h1 className='py-10 text-5xl font-bold text-blue-400'>SnowGoat</h1>
            <div className='flex justify-around items-center'>
                <RegisterForm handleSubmit={handleSubmit} />
            </div>
        </main>
    )
}

export default Register