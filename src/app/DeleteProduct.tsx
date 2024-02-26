'use client'
import React from 'react'
import axios from 'axios'

import { useRouter } from 'next/navigation'

type Props = {
    productId?:string
  
}

const DeleteProduct = ({productId}: Props) => {
    const router = useRouter()

    const handleDelete = async () => {
        try{
            await axios.delete('/api/addproduct',{
                data:{
                    productId:productId,
                  
                }
            })
            router.refresh()
        }
        catch(error){
            console.log('Error in deleting product')
        }
    }
  return (
    <div onClick={handleDelete} className='cursor-pointer'>
        delete
    </div>
  )
}

export default DeleteProduct