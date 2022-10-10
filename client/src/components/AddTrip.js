import React from 'react'
import TripForm from './TripForm'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const AddTrip = () => {
    const navigate = useNavigate()
    const [location, setLocation] = useState('')
    const [trails, setTrails] = useState([])
    const [weather, setWeather] = useState({
        high: undefined,
        low: undefined,
        snowfall: undefined
    })
    const [conditions, setConditions] = useState('')
    const [notes, setNotes] = useState('')
    const [date, setDate] = useState('')
    const [errors, setErrors] = useState([])

    const handleSubmit = (e) =>{
        e.preventDefault()
        const userId = window.sessionStorage.getItem("userId")
        const tripData = {
            location,
            trails,
            weather,
            conditions,
            notes,
            date,
            userId
        }
        axios.post("http://localhost:9000/api/trip", tripData)
        .then(res => {
            console.log(res)
            axios.put("http://localhost:9000/api/users/trips/" + userId, {
                trips: res.data._id
            })
            .then(res => {
                console.log(res)
                navigate("/dashboard")
            })
            .catch(err => {
                console.log(err)
            })
            
        })
        .catch(err => {
            console.log(err)
            let errorResponse = err.response.data.errors
            let errorArray = []


            for (const key of Object.keys(errorResponse)){
                errorArray.push(errorResponse[key].message)
            }
            setErrors(errorArray)
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
            case 'date':
                setDate(e.target.value)
                break
            default: break
        }
    }
    return (
        <main className='h-[100vh] bg-gradient-to-br from-green-900 via-sky-500 to-orange-300'>
            <h4 className='pt-10 text-2xl font-semibold text-sky-100'>Add a trip</h4>
            <div className="flex justify-center pt-24">
                <TripForm handleSubmit={handleSubmit} handleChange={handleChange} trails={trails} setTrails={setTrails} location={location} weather={weather} conditions={conditions} notes={notes} date={date} errors={errors}/>
            </div>
        </main>
    )
}

export default AddTrip