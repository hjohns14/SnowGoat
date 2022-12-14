import React from 'react'
import { Link } from 'react-router-dom'


const LoginForm = (props) => {
    const {handleSubmit, handleChange, errors} = props
    return (
        <form onSubmit={handleSubmit} className='flex flex-col w-fit bg-neutral-100 border-2 border-sky-200 my-10 px-3 py-4 shadow-[0_0_400px_-30px_rgba(0,0,0,0.3)] shadow-sky-300 z-10'>
            <h4 className='text-lg font-semibold underline text-sky-800 mb-5'>Login</h4>
            <div className='my-8 flex justify-between'>
                <label htmlFor="email">Email</label>
                <input onChange={handleChange} type="text" name="email" className='border border-black'/>
            </div>
            <div className='my-5 flex justify-between'>
                <label htmlFor="password">Password</label>
                <input onChange={handleChange} type="password" name="password" className='border border-black'/>
            </div>
            {errors.map((item, idx) => <p className='text-red-500 underline text-start' key={idx}>{item}</p>)}
            <div>
                <button className='border border-black bg-green-400 px-3 py-1 rounded-lg mt-3
                                    shadow-lg shadow-slate-300
                                    hover:bg-green-500 active:bg-green-700 active:text-white
                                    active:translate-x-[1px] active:translate-y-[2px]'>
                    Login!
                </button>
            </div>
            <div className='flex justify-between mt-5'>
                <p>Need to create an account? (its free) -&gt; </p>
                <Link className='text-blue-500 underline' to={'/register'}>Register</Link>
            </div>
        </form>
    )
}

export default LoginForm