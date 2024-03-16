import React from 'react'
import Call from '../../assets/Call.png'
import Video from '../../assets/Video.png'
import More from '../../assets/More.png'
import back from '../../assets/backArrow.png'

const ChatHeader = () => {
    return (
        <div className='flex justify-between items-center w-full'>
            <div>
                <img className='h-5 cursor-pointer back' src={back} alt='call' /></div>
            <h1 className='text-white text-[18px] md:text-[22px]  font-bold'>Welcome Group</h1>
            <div className='flex w-[7rem] headerIconsHolder items-center justify-between'>
                <img className='h-5 cursor-pointer' src={Call} alt='call' />
                <img className='h-5 cursor-pointer' src={Video} alt='call' />
                <img className='h-5 cursor-pointer' src={More} alt='call' />
            </div>
        </div>
    )
}

export default ChatHeader