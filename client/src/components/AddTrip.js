import React from 'react'
import TripForm from './TripForm'

const AddTrip = () => {
    return (
        <main className='h-[100vh] bg-gradient-to-br from-green-900 via-sky-500 to-orange-300'>
            <h4 className='pt-10 text-2xl font-semibold text-sky-100'>Add a trip</h4>
            <div className="flex justify-center pt-24">
                <TripForm/>
            </div>
        </main>
    )
}

export default AddTrip