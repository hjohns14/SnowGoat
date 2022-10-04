import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const TripForm = (props) => {
    const {trails, setTrails, handleChange, handleSubmit} = props
    const navigate = useNavigate()
    

    return (
        <form onSubmit={handleSubmit} className='bg-neutral-100 p-5 border border-black w-1/3 min-w-fit'>
            <div className='flex justify-around'>
                <h4 className='text-xl text-sky-400 mb-6'>Trip Details</h4>
                <a className='underline text-blue-300' href="/dashboard">Go Home</a>
            </div>
            <div className=''>
                <div className='flex justify-between my-3'>
                    <label className='underline' htmlFor="location">Resort or Location</label>
                    <input onChange={handleChange} className='border border-black ml-5 w-1/2' type="text" name='location' />
                </div>
                <div className='flex justify-between my-3'>
                    <label className='underline' htmlFor="resort">Weather</label>
                    <div className='flex flex-col justify-start items-center'>
                        <div className='flex-1 flex justify-between p-1 w-full'>
                            <label htmlFor="high">High</label>
                            <input onChange={handleChange} className='border border-black ml-5 w-3/12' type="number" name="high"/>
                        </div>
                        <div className='flex-1 flex justify-between p-1 w-full'>
                            <label htmlFor="low">low</label>
                            <input onChange={handleChange} className='border border-black w-3/12' type="number" name='low' />
                        </div>
                        <div className='flex-1 flex justify-between p-1 w-full'>
                            <label htmlFor="snowfall">Snowfall</label>
                            <input onChange={handleChange} className='border border-black w-3/12' type="number" name="snowfall"/>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between my-3'>
                    <label className='underline' htmlFor="conditions">Conditions</label>
                    <select onChange={handleChange} name="conditions" className='border border-black ml-5 w-1/2'>
                        <option value=''>Select Conditions</option>
                        <option value="sunny">Sunny</option>
                        <option value="overcast">Overcast</option>
                        <option value="snowing">Snowing</option>
                    </select>
                </div>
                <div className='flex justify-between my-3'>
                    <p className='underline'>Trails</p>
                    <div className='grid grid-cols-4 gap-2'>
                        {trails.map((item, idx) => 
                                <p key={idx} className='flex justify-between px-2 bg-neutral-400 text-sm'>{item}</p>
                        )}
                    </div>
                </div>
                <div className='flex justify-between my-3'>
                    <label className='underline' htmlFor="trails">Add Trail</label>
                    <div>
                        <input className='mx-2' type="text" htmlFor='trails' id='trails'/>
                        <button className='mx-2 px-2 py-1 bg-green-500 border border-black rounded-md' onClick={(e) =>{
                            e.preventDefault()
                            const trailInput = document.getElementById("trails").value
                            setTrails([...trails, trailInput])
                        }}>Add Trail</button>
                        <button className='mx-2 px-2 py-1 bg-red-500 border border-black rounded-md' onClick={(e) =>{
                            e.preventDefault()
                            setTrails([])
                        }}>Clear All</button>
                    </div>
                </div>
                <div className='flex justify-between my-3'>
                    <label className='underline' htmlFor="notes">Notes</label>
                    <textarea onChange={handleChange} className='border border-neutral-500' name="notes" cols="50" rows="10"></textarea>
                </div>
                <div className='flex justify-between my-3'>
                    <label htmlFor="date">Date</label>
                    <input onChange={handleChange} type="date" name="date"/>
                </div>
            </div>
            <button className='my-3 px-2 py-1 border border-black bg-green-500 rounded-md w-1/3'>Submit</button>
        </form>
    )
}

export default TripForm
