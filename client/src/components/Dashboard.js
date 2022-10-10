import React from 'react'
import LogoutButton from './LogoutButton'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const Dashboard = () => {
    const navigate = useNavigate()
    const [trips, setTrips] = useState([])
    const [cityWeather, setCityWeather] = useState('keystone')
    const [weatherData, setWeatherData] = useState([])
    const name = window.sessionStorage.getItem("firstName")
    const apiBase = "https://api.openweathermap.org/data/2.5/forecast?q="



    const convertTime = function (time) {
        const weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
        const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        const t = new Date(time * 1000)
        const dateData = {
            day: weekdays[t.getUTCDay()].slice(0,3),
            date: t.getUTCDate(),
            month: t.getUTCMonth(),
            monthName: month[t.getUTCMonth()],
            year: t.getUTCFullYear(),
            fullString: t.toUTCString(),
            t
        }
        return dateData
    }

    function capitalize(str){
        return str[0].toUpperCase() + str.slice(1)
    }







    const handleDeleteTrip = e => {
        console.log(e.target.name)
        axios.delete("http://localhost:9000/api/trip/" + e.target.name)
            .then(res => {
                console.log(res.data)
                const userId = window.sessionStorage.getItem('userId')
                axios.get("http://localhost:9000/api/users/trips/" + userId)
                    .then(res => {
                        setTrips(res.data.trips)
                    })
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        const userId = window.sessionStorage.getItem("userId")
        const loggedIn = window.sessionStorage.getItem("loggedIn")

        if (!loggedIn) {
            navigate("/")
        }
        axios.get("http://localhost:9000/api/users/trips/" + userId)
            .then(res => {
                console.log(res.data)
                setTrips(res.data.trips)

            })
            .catch(err => {
                console.log(err)
            })
        axios.get(apiBase + cityWeather + ",CO,US&appid=e6fc68ff9a7fb75f996bdd32d6aa7bef&units=imperial")
        .then(res => {
            console.log(res)
            setWeatherData(res.data.list)
        })
        .catch(err => {console.log(err)})

    }, [navigate, cityWeather])

    return (
        <div className=' h-fit min-h-[100vh] bg-gradient-to-br from-green-900 via-sky-500 to-orange-300'>
            <div className='flex justify-between px-[150px] py-4'>
                <h2 className='text-start text-4xl text-sky-400 font-semibold'>SnowGoat</h2>
                <LogoutButton />
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
                <section className='flex-1 mx-12 p-3 border border-black bg-neutral-200 flex flex-col items-center'>
                    <h6 className='text-lg underline text-orange-500'>Weather (maybe)</h6>
                    <div className='my-5'>
                        <label className='mx-5' htmlFor="location">Location</label>
                        <select onChange={(e) => { setCityWeather(e.target.value) }} className='mx-5' name="location" id="location">
                            <option value="keystone">Keystone</option>
                            <option value="breckenridge">Breckenridge</option>
                        </select>
                    </div>

                    {weatherData.map((item, idx) =>
                    idx % 7 === 0?
                        
                        <div key={idx} className='flex flex-col items-center bg-orange-500 my-1 h-fit border border-black w-full'>
                            <div className='grid grid-cols-3 place-content-evenly w-full place-items-center'>
                                <p className='text-white text-lg'>{capitalize(cityWeather)}</p>
                                <h5 className='text-xl text-white'>Weather</h5>
                                <p className='text-white text-lg'>{convertTime(item.dt).day} {convertTime(item.dt).monthName} {convertTime(item.dt).date}</p>
                            </div>
                            <div className='w-full h-fit bg-orange-400 grid grid-cols-4 gap-2 place-items-center place-content-evenly border-t-2 border-black px-2 pt-1'>
                                <div className='flex flex-col items-center bg-neutral-100 py-2 h-full justify-center w-full'>
                                    <div>
                                        <p>Weather: </p>
                                        <p className='font-semibold mx-4'>{capitalize(item.weather[0].main)}</p>
                                    </div>
                                    <div>
                                        <p>Description: </p>
                                        <p className='font-semibold mx-4'>{capitalize(item.weather[0].description)}</p>
                                    </div>
                                </div>
                                <div className='flex flex-col items-center bg-neutral-100 py-2 h-full justify-center w-full'>
                                    <p className='bg-neutral-100'>Temp: <span className='font-semibold mx-4'>{item.main.temp}&deg;</span></p>
                                    <p>Low: <span className='font-semibold mx-4'>{item.main.temp_min}&deg;</span></p>
                                    <p>High: <span className='font-semibold mx-4'>{item.main.temp_max}&deg;</span></p>
                                </div>
                                <div className='flex flex-col items-center bg-neutral-100 py-2 h-full justify-center w-full'>
                                    {item.snow ?
                                        <p>Snow: <span className='font-semibold mx-4'>{item.snow["3h"]} in</span></p>:
                                        <p>Snow: <span className='font-semibold mx-4'>0 in</span></p>                                    
                                    }
                                    <p className='bg-neutral-100'>Chance of snow: <span className='font-semibold mx-4'>{(Math.round(item.pop *1000)/10)}%</span></p>
                                </div>
                                <div className='flex flex-col items-center bg-neutral-100 py-2 h-full justify-center w-full'>
                                    <p>Wind: <span className='font-semibold mx-4'>{item.wind.speed} mph;</span></p>
                                    <p>Gust: <span className='font-semibold mx-4'>{item.wind.gust} mph;</span></p>
                                </div>
                                
                            </div>
                            <p>{JSON.stringify(item.rain)}</p>
                        </div>
                        :
                        <span key={idx}>
                        </span>
                    )}
                    <div className='flex justify-center gap-4 mb-5'>
                    </div>



                </section>
            </main>
        </div>
    )
}

export default Dashboard