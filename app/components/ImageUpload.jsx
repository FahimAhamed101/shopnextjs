import React from 'react';
import { CldUploadWidget } from "next-cloudinary";


const ImageUpload = ({ info, updateInfo, imageUrls, setImageUrls, handleImageChange }) => {
  const onUpload = (result) => {
    if (result.event === 'success') {
      updateInfo(result.info.secure_url);
      const newImageUrl = result.info.secure_url;
      console.log(newImageUrl)
      setImageUrls((prevImageUrls) => [...prevImageUrls, newImageUrl]);
      handleImageChange(result);
    } else {
      console.error('Upload failed:', result);
    }
  };

  const handleDeleteImage = (index) => {
    setImageUrls((prevImageUrls) => {
      const updatedImageUrls = [...prevImageUrls];
      updatedImageUrls.splice(index, 1);
      return updatedImageUrls;
    });
  };

  return (
    <div>
      <div className='mb-10'>
        <CldUploadWidget uploadPreset='krhjnggm' onSuccess={onUpload}>
          {({ open }) => {
            function handleOnClick(e) {
              e.preventDefault();
              open();
            }
            return (
              <button className='border-[1px] rounded-lg p-1 px-2' onClick={handleOnClick}>
                Upload Product Images
              </button>
            );
          }}
        </CldUploadWidget>
      </div>
      <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10'>
        {imageUrls.map((imageUrl, index) => (
          <div key={imageUrl} className='flex flex-col justify-center'>
            <img
              src={imageUrl}
              className='w-[250px] h-[300px] object-cover object-top'
              alt={`Uploaded Image ${index + 1}`}
            />
            <button
              className='border-[1px] rounded-lg p-1 px-2 mt-5'
              onClick={() => handleDeleteImage(index)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageUpload;