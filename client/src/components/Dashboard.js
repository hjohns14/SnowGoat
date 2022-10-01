import React from 'react'
import LogoutButton from './LogoutButton'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
    const navigate = useNavigate()
    const name = window.sessionStorage.getItem("firstName")

    useEffect(() =>{
        const loggedIn = window.sessionStorage.getItem("loggedIn")
        if (!loggedIn){
            navigate("/")
        }
    },[navigate])

    return (
        <div className=' h-[100vh] bg-gradient-to-br from-green-900 via-sky-500 to-orange-300'>
            <div className='flex justify-between px-[150px] py-4'>
                <h2 className='text-start text-4xl text-sky-400 font-semibold'>SnowGoat</h2>
                <LogoutButton/>
            </div>
            <h2 className='text-2xl text-sky-100 font-semibold'>Welcome {name}</h2>
            <main className='flex justify-between px-24 py-10'>
                <section className='flex-1 flex flex-col mx-12 p-3 border border-black bg-neutral-200'>
                    <h6 className='text-lg underline text-orange-500'>Previous Trips</h6>
                    <div className='flex justify-around'>
                        <p>Trip 1</p>
                        <p>date</p>
                        <p>details</p>
                        <a className='text-blue-500 underline' href="/trips/edit">Edit Trip</a>
                        <button className='text-red-500 underline'>Delete</button>
                    </div>
                    <div className='flex justify-around'>
                        <p>Trip 1</p>
                        <p>date</p>
                        <p>details</p>
                        <a className='text-blue-400 underline' href="/trips/edit">Edit Trip</a>
                        <button className='text-red-500 underline'>Delete</button>
                    </div>
                    <div className='flex justify-around'>
                        <p>Trip 1</p>
                        <p>date</p>
                        <p>details</p>
                        <a className='text-blue-400 underline' href="/trips/edit">Edit Trip</a>
                        <button className='text-red-500 underline'>Delete</button>
                    </div>
                    <div className='flex justify-around'>
                        <p>Trip 1</p>
                        <p>date</p>
                        <p>details</p>
                        <a className='text-blue-400 underline' href="/trips/edit">Edit Trip</a>
                        <button className='text-red-500 underline'>Delete</button>
                    </div>
                    <button className='self-end mx-12 my-5 border border-black px-2 py-1 bg-orange-400'>
                        <a href='/trips/add'>
                            Add Trip
                        </a>
                    </button>
                </section>
                <section className='flex-1 mx-12 p-3 border border-black bg-neutral-200'>
                <h6 className='text-lg underline text-orange-500'>Weather (maybe)</h6>
                </section>
            </main>
        </div>
    )
}

export default Dashboard