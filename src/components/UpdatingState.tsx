"use client"

import React,{useState} from 'react'


function UpdatingState() {
    let value = 0;
    const Increment = () => {value = value + 1}
    const Decrement = () => {value = value - 1}

  return (
  <div className='flex gap-5 justify-center items-center'>
    <button className='bg-green-500 rounded-xl p-2 text-xl' onClick={Increment}>Increment</button>
    {value}
    <button className='bg-red-500 rounded-xl p-2 text-xl' onClick={Decrement}>Decrement</button>
    
    
    </div>
  )
}

export default UpdatingState