'use client'
import React from 'react'
import axios from 'axios'
import { GoTrash } from 'react-icons/go'
import { useRouter } from 'next/navigation'

const DeleteProduct = ({productId,userId}) => {
    const router = useRouter()

    const handleDelete = async () => {
        try{
            await axios.delete('/api/addproduct',{
                data:{
                    productId:productId,
                    userId:userId
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
        <GoTrash className='text-red-600' size={20}/>
    </div>
  )
}

export default DeleteProduct