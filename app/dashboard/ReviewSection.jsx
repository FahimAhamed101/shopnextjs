'use client'
import React from 'react'
import ReactStars from "react-rating-star-with-type"



const ReviewSection = ({rating,commentry,productId,userId}) => {
  return (
    <div>
        <ReactStars 
        value={rating}
        isEdit={true}
        activeColors={['red','orange',"#FFCE00","#9177FF","#8568FC",]}
        />
        <p className='mt-2'>{commentry}</p>
    </div>
  )
}

export default ReviewSection