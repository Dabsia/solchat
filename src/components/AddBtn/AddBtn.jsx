import React from 'react'
import cross from '../../assets/cross.png'

const AddBtn = ({ text }) => {
    return (
        <div className='flex items-center mt-4 cursor-pointer w-fit'>
            <div className='flex justify-center items-center h-10 w-10 rounded-lg mr-2 bg-gradient-to-r from-[#6764c9] to-[#2cc29d] ' >
                <img className='h-5' src={cross} alt='cross' />
            </div>
            <p>{text}</p>
        </div>
    )
}

export default AddBtn



