import React from 'react'
import prisma from "@/app/prismadb"
import ImageGallery from './ImageGallery'
import Link from "next/link";
import { getServerSession } from "next-auth";
import {options} from "@/app/api/auth/[...nextauth]/options"
import {Github,ExternalLink , Menu } from "lucide-react";


type Props = {}

export default async function Page({params}:{params:{slug:string}}){
    const productId = params.slug
    const session = await getServerSession(options);
  
    const product = await prisma.product.findFirst({
        where:{
            id:productId
        }
    })
  
    const urlString = product?.images
    return(
        <div className='max-w-[1280px] mx-auto px-5 py-5'>
            <div className='font-semibold text-2xl mb-2'>
                <a href="/"><ExternalLink />Home</a>
                
            </div>
            <hr />
         
            {product && (
                <div className='grid grid-cols-1  mt-10 gap-10'>
                    {urlString && (
                        <ImageGallery imageUrls = {urlString} />
                    )}
          
                </div>
            )}
            <div className='mb-20 mt-10'>
               
                {product && (
                    <div className='grid grid-cols-1 text-center '>  
                           
                         <div>      <h3 className='font-medium'>Category</h3>
                      <p className='text-sm text-purple-500'>{product.category}</p></div>
               
                         <div className='grid grid-cols-1 items-center  m-10'>   
             
                  
              
                        <div className='flex flex-col items-center'>
                 <span className='text-sm pt-2 text-black font-medium'>Title:- {product.title}</span>
                   
                  
                 
                   <span className=' pt-5 font-medium text-xl'>{product.description}</span>
            </div>
            <div className='flex text-center gap-5 items-center'> 
                        <Link href={product.github}><Github />Github</Link>  
              <Link href="/"><ExternalLink />Live</Link>  </div>
                </div>
                    
               
                    </div>
                     
                )}
            </div>
          
        </div>
    )
}