import React from 'react'
import LoginForm from './LoginForm'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState([])
    const handleSubmit = (e) =>{
        e.preventDefault()
        const userData = {
            email,
            password
        }
        axios.post("http://localhost:9000/api/users/login", userData)
        .then(res => {
            console.log(res)
            let id = res.data.id
            window.sessionStorage.setItem("userId", id)
            window.sessionStorage.setItem("firstName", res.data.firstName)
            window.sessionStorage.setItem("loggedIn", true)
            navigate("/dashboard")
        }, {withCredentials:true})
        .catch(err => {
            console.log(err)
            const errors = err.response.data
            console.log(errors)
            let errorArray = []

            for (const key of Object.keys(errors)){
                errorArray.push(errors[key])
            }
            console.log(errorArray)
            setErrors(errorArray)
        })

    }

    const handleChange = e =>{
        switch (e.target.name){
            case "email":
                setEmail(e.target.value.toLowerCase())
                break
            case "password":
                setPassword(e.target.value)
                break
            default: break
        }
    }
    return (
        <main className='bg-slate-100 h-[100vh] z-0'>
            <h1 className='py-10 text-5xl font-bold text-blue-400'>SnowGoat</h1>
            <img src={require('../assets/images/samuel-ferrara-FGEHnEMaZnE-unsplash.jpg')} alt="placeholder-img" className='backdrop-img rotate-[-15deg] top-[15%] left-[15%]'/>
            <img src={require('../assets/images/sergey-mikheev-k2HhqajONac-unsplash.jpg')} alt="placeholder-img" className='backdrop-img rotate-[10deg] top-[25%] left-[60%]'/>
            <div className='flex justify-center items-center h-3/5'>
                <LoginForm handleSubmit={handleSubmit} handleChange={handleChange} errors={errors}/>
            </div>
        </main>
    )
}

export default Login