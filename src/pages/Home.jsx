import React from 'react'
import DayCard from '../components/DayCard'
import SavingData from '../components/SavingData'

const Home = () => {
    const cards = []
    for (let i = 1; i <= 200; i++) {
        cards.push({number: i, price: i * 50})
    }
    return (
        <div>
            <div className="container mx-auto py-4 px-32">
                <SavingData />
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    {cards.map(card => (
                        <DayCard key={card.number} number={card.number} price={card.price}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home