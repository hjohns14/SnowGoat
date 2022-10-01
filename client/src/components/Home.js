import React from 'react'
import '../assets/css/style.css'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const Home = () => {
    const navigate = useNavigate()

    useEffect(() =>{
        const loggedIn = window.sessionStorage.getItem("loggedIn")
        if (loggedIn){
            navigate("/dashboard")
        }
    },[navigate])

    const handleLogin = (e) =>{
        navigate("/login")
    }
    const handleRegister = () =>{
        navigate('/register')
    }
    return (
        <div className='bg-slate-100 h-[100vh] text-center'>
            <h1 className='text-6xl font-semibold text-sky-400 py-2 text-start mb-1 ml-6'>SnowGoat</h1>
            <main className='flex justify-center'>
                <section className='hero-bg flex justify-around items-center py-10'>
                    <div className='flex flex-col h-full text-white'>
                        <div className='flex-auto mt-10'>
                            <h2 className='text-4xl font-semibold'>Welcome to SnowGoat!</h2>
                            <p className='text-sm opacity-70'>Your friend for the ski season</p>
                            <div className='mt-3'>
                                <button onClick={handleRegister} className='w-[150px] mt-2 text-xl bg-orange-600 px-3 py-2 rounded-md border border-black 
                                                hover:bg-orange-700 active:bg-orange-800 active:translate-x-[2px] active:translate-y-[2px]'>
                                    Get Started
                                </button>
                            </div>
                            <div>
                                <p className='mt-5 text-lg'>Already a user?</p>
                                <button onClick={handleLogin} className='w-[150px] mt-2 text-xl bg-orange-600 px-3 py-2 rounded-md border border-black 
                                                hover:bg-orange-700 active:bg-orange-800 active:translate-x-[2px] active:translate-y-[2px]'>
                                    Login
                                </button>
                            </div>
                        </div>
                        <div className='mb-10'>
                            <h4 className='text-2xl'>This ski season is going to be the GOAT</h4>
                        </div>
                    </div>
                    <div className='text-white w-1/4 h-1/4 flex flex-col items-center'>
                        <p className='text-xl'>Register now and enjoy these features</p>
                        <ul className='list-disc w-fit text-start'>
                            <li>Weather Tracking</li>
                            <li>Trip logging</li>
                            <li>Snowfall tracking</li>
                            <li>Trail runs completed</li>
                            <li>Resorts Visited</li>
                            <li>And much more to come!</li>
                        </ul>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Home