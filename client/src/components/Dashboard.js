import React from 'react'

const Dashboard = () => {
    return (
        <div className=' h-[100vh] bg-gradient-to-br from-green-900 via-sky-500 to-orange-300'>
            <h2 className='text-start px-[150px] py-4 text-4xl text-sky-400 font-semibold'>SnowGoat</h2>
            <h2 className='text-2xl text-sky-100 font-semibold'>Welcome User**</h2>
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