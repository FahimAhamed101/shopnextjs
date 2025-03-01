'use client'
import React from 'react'
import axios from 'axios'




const Button = ({allIds,userId}) => {
    const onCheckout = async () => {
        const response = await axios.post('/api/checkout',{
            productIds:allIds,
            userId:userId
        })
        window.location = response.data.url;
    }   
  return (
    <div className='flex items-center justify-center mt-20 cursor-pointer'>
        <span onClick={onCheckout} className='px-10 p-2 text-white bg-purple-600 rounded-full'>
            Checkout
        </span>
    </div>
  )
}

export default Button