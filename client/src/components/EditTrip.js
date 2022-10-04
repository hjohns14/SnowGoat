import React from 'react'
import TripForm from './TripForm'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const EditTrip = () => {
    const navigate = useNavigate()
    const [location, setLocation] = useState('')
    const [trails, setTrails] = useState([])
    const [weather, setWeather] = useState({
        high: null,
        low: null,
        snowfall:null
    })
    const [conditions, setConditions] = useState('')
    const [notes, setNotes] = useState('')

    const handleSubmit = (e) =>{
        e.preventDefault()
        const userId = window.sessionStorage.getItem("userId")
        const tripData = {
            location,
            trails,
            weather,
            conditions,
            notes,
            userId
        }
        axios.put("http://localhost:9000/api/trip", tripData)
        .then(res => {
            console.log(res)
            .then(res => console.log(res))
            .catch(err => console.log(err))
            navigate("/dashboard")
        })
        .catch(err => {
            console.log(err)
        })


    }

    const handleChange = e =>{
        switch (e.target.name){
            case "location":
                setLocation(e.target.value)
                break
            case "high":
                setWeather({
                    high: e.target.value,
                    low: weather.low,
                    snowfall: weather.snowfall
                })
                break
            case "low":
                setWeather({
                    low: e.target.value,
                    high: weather.high,
                    snowfall: weather.snowfall
                })
                break
            case "snowfall":
                setWeather({
                    snowfall: e.target.value,
                    low: weather.low,
                    high: weather.high
                })
                break
            case "conditions":
                setConditions(e.target.value)
                break
            case "notes":
                setNotes(e.target.value)
                break
            default: break
        }
    }
    return (
        <main className='h-[100vh] bg-gradient-to-br from-green-900 via-sky-500 to-orange-300'>
            <h4 className='pt-10 text-2xl font-semibold text-sky-100'>Edit Trip</h4>
            <div className="flex justify-center pt-24">
                <TripForm handleSubmit={handleSubmit} handleChange={handleChange} trails={trails} setTrails={setTrails}/>
            </div>
        </main>
    )
}

export default EditTrip