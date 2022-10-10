import React from 'react'
import TripForm from './TripForm'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const EditTrip = () => {
    const navigate = useNavigate()
    const {id} = useParams()
    const [location, setLocation] = useState('')
    const [trails, setTrails] = useState([])
    const [weather, setWeather] = useState({
        high: null,
        low: null,
        snowfall:null
    })
    const [conditions, setConditions] = useState('')
    const [notes, setNotes] = useState('')
    const [date, setDate] = useState()
    const [errors, setErrors] = useState([])

    useEffect(() =>{
        axios.get("http://localhost:9000/api/trip/" + id)
        .then(res =>{
            console.log(res.data)
            setLocation(res.data.location)
            setTrails(res.data.trails)
            setWeather({
                high: res.data.weather.high,
                low: res.data.weather.low,
                snowfall: res.data.weather.snowfall
            })
            setConditions(res.data.conditions)
            setNotes(res.data.notes)
            setDate(res.data.date)
        })
        .catch(err => console.log(err))

    }, [id])

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
        axios.put("http://localhost:9000/api/trip/" + id, tripData)
        .then(res => {
            console.log("Put firing",res)
            navigate("/dashboard")
        })
        .catch(err => {
            console.log(err)
            let errorResponse = err.response.data.errors
            let errorArray = []


            for (const key of Object.keys(errorResponse)){
                errorArray.push(errorResponse[key].message)
            }
            console.log(errorArray)
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
            case "date":
                setDate(e.target.value)
                break
            default: break
        }
    }
    return (
        <main className='h-[100vh] bg-gradient-to-br from-green-900 via-sky-500 to-orange-300'>
            <h4 className='pt-10 text-2xl font-semibold text-sky-100'>Edit Trip</h4>
            <div className="flex justify-center pt-24">
                <TripForm handleSubmit={handleSubmit} handleChange={handleChange} trails={trails} setTrails={setTrails} location={location} weather={weather} conditions={conditions} notes={notes} date={date} editing={true} errors={errors}/>
            </div>
        </main>
    )
}

export default EditTrip