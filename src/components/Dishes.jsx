import React, { useState } from 'react'
import { dishes } from '../data/data'
import { motion } from 'framer-motion';

const Dishes = () => {
    const [selected, setSelected] = useState('')
    function handleCategory(category){
        setSelected(category);
    }
    const filteredDishes = selected ? dishes.filter((dish) => dish.category.toLowerCase() === selected.toLowerCase()) : dishes;
    return (
    <section id='menu' className='py-12 bg-gray-100'> 
    <motion.div
    initial={{opacity:0 ,x: -100}}
    whileInView={{opacity:1, x: 0}}
    transition={{duration: 1}}
    className='container mx-auto px-4'>
        <h2 className='text-3xl font-bold text-center mb-8'>Featured Dishes</h2>
        <div className='flex justify-center gap-x-4 gap-y-2 mb-8 flex-wrap'>
            <button onClick={() => handleCategory('')} className='px-4 py-2 bg-gray-200 rounded hover:bg-gray-300'>All</button>
            <button onClick={() => handleCategory('Seafood')} className='px-4 py-2 bg-gray-200 rounded hover:bg-gray-300'>Seafood</button>
            <button onClick={() => handleCategory('Pizza')} className='px-4 py-2 bg-gray-200 rounded hover:bg-gray-300'>Pizza</button>
            <button onClick={() => handleCategory('Salad')} className='px-4 py-2 bg-gray-200 rounded hover:bg-gray-300'>Salad</button>
            <button onClick={() => handleCategory('Pasta')} className='px-4 py-2 bg-gray-200 rounded hover:bg-gray-300'>Pasta</button>
            <button onClick={() => handleCategory('Burger')} className='px-4 py-2 bg-gray-200 rounded hover:bg-gray-300'>Burger</button>
            <button onClick={() => handleCategory('Vegetarian')} className='px-4 py-2 bg-gray-200 rounded hover:bg-gray-300'>Vegetarian</button>
            <button onClick={() => handleCategory('NonVeg')} className='px-4 py-2 bg-gray-200 rounded hover:bg-gray-300'>NonVeg</button>
        </div>
    </motion.div>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {filteredDishes.map((dish) =>{
           return(<div key={dish.id} className='bg-white p-4 rounded shadow'>
                <img className='w-full h-60 object-cover rounded ' src={dish.image} alt={dish.name} />
                <h3 className='text-xl font-bold mt-4'>{dish.name}</h3>
                <p className='text-gray-600'>{dish.description}</p>
                <p className='text-black font-bold mt-4'>{dish.price}</p>
                <button className='mt-4 px-4 py-2 bg-blue-500 text-white hover:bg-blue-600'>View Details</button>
            </div>
           );
        })}

    </div>
    </section>
  )
}

export default Dishes