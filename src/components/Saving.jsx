import React from 'react'
import DayCard from '../components/DayCard'
import InfoData from '../components/InfoData'
import { LuLogOut } from 'react-icons/lu'

const Saving = () => {
    const cards = []
    for (let i = 1; i <= 200; i++) {
        cards.push({number: i, price: i * 50})
    }
    return (
        <div className="container mx-auto py-4 px-32">
            <InfoData />
            <div className='h-[70vh] flex-1 overflow-y-auto'>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    {cards.map(card => (
                        <DayCard key={card.number} number={card.number} price={card.price}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Saving
