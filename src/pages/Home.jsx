import React from 'react'
import Saving from '../components/Saving'
import { LuLogOut } from 'react-icons/lu'

const Home = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <button className='absolute top-4 right-4 p-2 rounded-full bg-gray-200 hover:bg-gray-300'>
                <LuLogOut className='text-xl'/>
            </button>
            <Saving />
        </div>
    )
}

export default Home