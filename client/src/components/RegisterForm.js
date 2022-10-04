import React from 'react'
import { Link } from 'react-router-dom'

const RegisterForm = (props) => {
    const {handleSubmit, handleChange, errors} = props
    return (
        <form onSubmit={handleSubmit} className='flex flex-col w-fit bg-neutral-100 border-2 border-sky-200 my-10 px-3 py-4 shadow-[0_0_400px_-30px_rgba(0,0,0,0.3)] shadow-sky-300 z-10'>
            <h4 className='text-lg font-semibold underline text-sky-800'>Register</h4>
            <div className='my-8 flex justify-between'>
                <label htmlFor="firstName">First Name</label>
                <input onChange={handleChange} type="text" name="firstName" className='border border-black'/>
            </div>
            <div className='my-8 flex justify-between'>
                <label htmlFor="lastName">Last Name</label>
                <input onChange={handleChange} type="text" name="lastName" className='border border-black'/>
            </div>
            <div className='my-8 flex justify-between'>
                <label htmlFor="email">Email</label>
                <input onChange={handleChange} type="text" name="email" className='border border-black'/>
            </div>
            <div className='my-8 flex justify-between'>
                <label htmlFor="password">Password</label>
                <input onChange={handleChange} type="password" name="password" className='border border-black'/>
            </div>
            <div className='my-8 flex justify-between'>
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input onChange={handleChange} type="password" name="confirmPassword" className='border border-black'/>
            </div>
            <div>
            <button className='border border-black bg-green-400 px-3 py-1 rounded-lg mt-3
                                shadow-lg shadow-slate-300
                                hover:bg-green-500 active:bg-green-700 active:text-white
                                active:translate-x-[1px] active:translate-y-[2px]'>
                Login!
            </button>
            </div>
            <div className='flex justify-between mt-5'>
                <p>Already have an account? </p>
                <Link className='text-blue-500 underline' to={'/login'}>Login</Link>
            </div>
            {errors.map((item, idx) => <p className='text-red-500 underline text-start' key={idx}>{item}</p>)}
        </form>
    )
}

export default RegisterForm