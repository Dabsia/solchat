import React from 'react'

const ReceiverChat = ({ message }) => {
    return (
        <div className='bg-[#27292e78] mb-2 w-fit p-3 rounded-bl-lg rounded-tr-[2rem] rounded-br-[2rem]' >
            <p className='text-[#d4d4d4] text-[13px] md:text-[14px]' >{message}</p>
        </div>
    )
}

export default ReceiverChat