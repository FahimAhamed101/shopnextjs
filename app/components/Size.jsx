import React,{useState} from 'react'



const Size = ({setFormData}) => {
    const [selectedSizes, setSelectedSizes] = useState([])
    const sizes = ["sm","md","xl","2xl","3xl","4xl"] 

    const handleSizeButtonClick = (size) => {
        setSelectedSizes((prevSelectedSize) => {
            if(prevSelectedSize.includes(size)){
                return prevSelectedSize.filter((s) => s !== size)
            }
            else{
                return [...prevSelectedSize, size]
            }
        })
    }

    const handleSubmit = () => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            size:selectedSizes.join(',')
        }))
    }
   return (
    <div>
        {sizes.map((size) => (
            <button
                key={size}
                className={`border-[0.5px] rounded-lg text-center text-[14px] py-[2px] cursor-pointer px-3 mt-4 mb-5 mr-5 
                ${selectedSizes.includes(size) ? "bg-gray-500 text-white":""}`}
                onClick={() => handleSizeButtonClick(size)}>
                    {size}
                </button>
        ))}
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Size