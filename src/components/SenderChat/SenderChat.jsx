import React from 'react'

const SenderChat = ({ message }) => {
    return (
        <div className=' mb-2 w-fit p-3 bg-gradient-to-r  from-[#6764c9] to-[#2cc29d] rounded-tl-[2rem] rounded-bl-[2rem] rounded-br-lg' >
            <p className='text-white text-[13px] md:text-[14px]' >{message}</p>
        </div>
    )
}

export default SenderChat