import React from 'react'

const TripForm = () => {
    return (
        <form className='bg-neutral-100 p-5 border border-black w-1/3 min-w-fit'>
            <div className='flex justify-evenly my-3'>
                <label className='underline' htmlFor="resort">Resort</label>
                <input className='border border-black ml-5 w-1/2' type="text" name='resort' />
            </div>
            <div className='flex justify-evenly my-3'>
                <label className='underline' htmlFor="trails">Trails</label>
                <input className='border border-black ml-5 w-1/2' type="text" name='trails' />
            </div>
            <div className='flex justify-evenly my-3'>
                <label className='underline' htmlFor="resort">Weather</label>
                <div className='flex flex-col justify-start items-center'>
                    <div className='flex-1 flex justify-between p-1 w-full'>
                        <label htmlFor="high">High</label>
                        <input className='border border-black ml-5 w-3/12' type="number" name="high"/>
                    </div>
                    <div className='flex-1 flex justify-between p-1 w-full'>
                        <label htmlFor="low">low</label>
                        <input className='border border-black w-3/12' type="number" name='low' />
                    </div>
                    <div className='flex-1 flex justify-between p-1 w-full'>
                        <label htmlFor="snowfall">Snowfall</label>
                        <input className='border border-black w-3/12' type="number" name="snowfall"/>
                    </div>
                </div>
            </div>
            <div className='flex justify-evenly my-3'>
                <label className='underline' htmlFor="conditions">Conditions</label>
                <select name="conditions" className='border border-black ml-5 w-1/2'>
                    <option value="sunny">Sunny</option>
                    <option value="overcast">Overcast</option>
                    <option value="snowing">Snowing</option>
                </select>
            </div>
            <div className='flex justify-evenly my-3'>
                <label className='underline' htmlFor="notes">Notes</label>
                <textarea name="notes" cols="50" rows="10"></textarea>
            </div>
            <button className='my-3 px-2 py-1 border border-black bg-green-500 rounded-md'>Submit</button>
        </form>
    )
}

export default TripForm