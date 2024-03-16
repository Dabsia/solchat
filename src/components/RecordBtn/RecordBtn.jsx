import React from 'react'
import Voice from '../../assets/Voice.png'

const RecordBtn = () => {
    return (
        <div className='flex justify-center items-center ml-2 cursor-pointer md:h-11 md:w-11 w-9 h-9 p-2 rounded-[100%]  bg-gradient-to-r from-[#6764c9] to-[#2cc29d] ' >
            <img src={Voice} alt='voice' />
        </div>
    )
}

export default RecordBtn