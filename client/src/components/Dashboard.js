import React from 'react'
import LogoutButton from './LogoutButton'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const Dashboard = () => {
    const navigate = useNavigate()
    const [trips, setTrips] = useState([])
    const name = window.sessionStorage.getItem("firstName")

    const handleDeleteTrip = e =>{
        console.log(e.target.name)
        axios.delete("http://localhost:9000/api/trip/" + e.target.name)
        .then(res => {
            console.log(res.data)
            const userId = window.sessionStorage.getItem('userId')
            axios.get("http://localhost:9000/api/users/trips/" + userId)
            .then(res =>{
                setTrips(res.data.trips)
            })
            .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
    }
    
    useEffect(() =>{
        const userId = window.sessionStorage.getItem("userId")
        const loggedIn = window.sessionStorage.getItem("loggedIn")
        if (!loggedIn){
            navigate("/")
        }
        axios.get("http://localhost:9000/api/users/trips/" + userId)
        .then(res =>{
            console.log(res.data)
            setTrips(res.data.trips)

        })
        .catch(err =>{
            console.log(err)
        })

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
                    
                        {trips.map((item, idx) => 
                        <div className='flex justify-start border border-black my-2' key={idx}>
                            <p className='mx-5'>{item.location}</p>
                            <p className='mx-5'>{new Date(item.createdAt).toDateString()}</p>
                            <a className='mx-5 text-blue-500 underline' href={`/trips/details/${item._id}`}>details</a>
                            <a className='text-blue-500 underline mx-5' href={`/trips/edit/${item._id}`}>Edit Trip</a>
                            <button onClick={handleDeleteTrip} className='text-red-500 underline mx-5 h-fit' name={item._id}>Delete</button>
                        </div>
                        )}
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