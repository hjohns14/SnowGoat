import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

const TripDetails = (props) => {
    const {id} = useParams()
    const [trip, setTrip] = useState({})
    const [trails, setTrails] = useState([])
    const [weather, setWeather] = useState({
        high: 0,
        low: 0,
        snowfall: 0
    })

    useEffect(() =>{
        axios.get("http://localhost:9000/api/trip/" + id)
        .then(res =>{
            console.log(res.data)
            setTrip(res.data)
            setTrails(res.data.trails)
            setWeather(res.data.weather)
        })
        .catch(err => console.log(err))
    }, [id])

    return (
        <main className='h-[100vh] bg-gradient-to-br from-green-900 via-sky-500 to-orange-300'>
        <h4 className='pt-10 text-2xl font-semibold text-sky-100'>Trip Details</h4>
        <div className="flex justify-center pt-24">
            <section className='bg-neutral-100 w-3/4 h-3/4 py-10 px-10 grid grid-cols-2 gap-2 gap-y-4 border border-neutral-500 shadow-lg shadow-neutral-800'>
                <div>
                    <p>Location</p>
                </div>
                <div className='text-start px-5'>
                    <p>{trip.location}</p>
                </div>
                <div>
                    <p>Date</p>
                </div>
                <div className='text-start px-5'>
                    <p>{new Date(trip.createdAt).toDateString()}</p>
                </div>
                <div>
                    <p>Trails Ran</p>
                </div>
                <div className='grid grid-cols-3 auto-cols-auto place-content-center'>
                    {trails.map((item,idx) =><p key={idx}>{item}</p>)}
                </div>
                <div>
                    <p>Weather</p>
                </div>
                <div className='text-start grid grid-cols-4 auto-cols-auto place-content-center px-5'>
                    <p>High - {weather.high}&deg;</p>
                    <p>Low - {weather.low}&deg;</p>
                    <p className='text-md col-span-2'>Snowfall - {weather.snowfall} inches</p>
                </div>
                <div>
                    <p>Notes</p>
                </div>
                <div className='text-start px-5'>
                    <p>{trip.notes}</p>
                </div>
                <a className='text-blue-500 underline' href="/dashboard">Go Back</a>
            </section>
            
        </div>
    </main>
    )
}

export default TripDetails