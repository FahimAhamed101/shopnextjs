'use client'
import React, {useState} from 'react'


type Props = {
    imageUrls:string
}

const ImageGallery = ({imageUrls}: Props) => {
    const [selectedImage, setSelectedImage] = useState<number>(0)
    const urlArray = imageUrls.split(',')
  return (
    <div className='images flex gap-5 align-items-center justify-center'>
        <div className='all-images flex flex-col col-span-2 justify-center'>
            {urlArray.map((url,index) => (
                <div key={index} className='image relative rounded-lg'>
                    <img onClick={() => setSelectedImage(index)} className={`w-[100px] h-[100px] rounded-lg mb-3 p-1 object-cover object-top ${selectedImage === index ? "border-[1px] border-purple-500":"border-[1px] border-purple-200"}`} src={url} alt={`Image ${index + 1}`} />
                </div>
            ))}
        </div>
        <div className='selected-image'>
            <img src={urlArray[selectedImage]} className='h-[300px] w-auto object-cover object-top' alt="" />
        </div>
    </div>
  )
}

export default ImageGallery