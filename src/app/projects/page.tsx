import React from 'react'

import Link from 'next/link'
import prisma from "@/app/prismadb"
import DeleteProduct from '@/app/DeleteProduct';




type Props = {}

const page = async (props: Props) => {


    const allmyproduct = await prisma.product.findMany()
    if(allmyproduct.length === 0) {
        return(
            <div className='relative flex items-center justify-center'>
                <img src="empty.png" alt="" />
                <h1 className='absolute top-[80%] text-2xl text-purple-600'>Empty Projects</h1>
            </div>
        )
    }
  return (
    <div className='max-w-[1280px] mx-auto'>
     
        <div>
            {allmyproduct.map((product) => (
                <div key={product.id} className='relative flex items-center justify-between w-8/12 px-6 mx-auto shadow-lg shadow-purple-100 p-5 rounded-lg mt-10'>
                    <div>
                        <h1 className='mb-3'>{product.title}</h1>
                        <a className='mb-3' href={product.link}> Link: </a>
                        <h1 className='mb-3'> Category: {product.category}</h1>
                    
                     
                    </div>
                    <Link href={`/projects/${product.id}`}>
                        <div>
                            <img className='w-[200px] h-[200px] object-cover object-top' src={product.images.split(',')[0]} alt="" />
                        </div>
                    </Link>
                    <Link className='absolute top-0 right-0' href={`/edit/${product.id}`}>
                                <span className='absolute top-0 right-0 p-2 bg-green-600 rounded-full text-white cursor-pointer'>
                                    edit
                                </span>
                            </Link> <DeleteProduct productId={product.id} />
                </div>
            ))}
              
        </div>
    </div>
  )
}

export default page