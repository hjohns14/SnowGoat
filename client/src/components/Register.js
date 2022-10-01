import React from 'react'
import RegisterForm from './RegisterForm'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const navigate = useNavigate()
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [errors, setErrors] = useState([])
    const handleSubmit = (e) =>{
        e.preventDefault()
        const userData = {
            firstName,
            lastName,
            email,
            password,
            confirmPassword
        }
        axios.post("http://localhost:9000/api/users", userData)
        .then(res => {
            console.log(res)
            let id = res.data._id
            window.sessionStorage.setItem("userId", id)
            window.sessionStorage.setItem("firstName", res.data.firstName)
            window.sessionStorage.setItem("loggedIn", true)
            navigate("/dashboard")
        }, {withCredentials:true})
        .catch(err => {
            const errors = err.response.data.errors
            console.log(errors)
            let errorArray = []

            for (const key of Object.keys(errors)){
                errorArray.push(errors[key].message)
            }
            console.log(errorArray)
            setErrors(errorArray)
        })

    }

    const handleChange = e =>{
        switch (e.target.name){
            case "firstName":
                setFirstName(e.target.value)
                break
            case "lastName":
                setLastName(e.target.value)
                break
            case "email":
                setEmail(e.target.value)
                break
            case "password":
                setPassword(e.target.value)
                break
            case "confirmPassword":
                setConfirmPassword(e.target.value)
                break
            default: break
        }
    }

    return (
        <main className='bg-slate-100 h-[100vh] z-0'>
            <img src={require('../assets/images/samuel-ferrara-FGEHnEMaZnE-unsplash.jpg')} alt="placeholder-img" className='backdrop-img rotate-[-15deg] top-[15%] left-[15%]'/>
            <img src={require('../assets/images/sergey-mikheev-k2HhqajONac-unsplash.jpg')} alt="placeholder-img" className='backdrop-img rotate-[10deg] top-[25%] left-[60%]'/>
            <h1 className='py-10 text-5xl font-bold text-blue-400'>SnowGoat</h1>
            <div className='flex justify-around items-center'>
                <RegisterForm handleSubmit={handleSubmit} handleChange={handleChange} errors={errors} />
            </div>
        </main>
    )
}

export default Register