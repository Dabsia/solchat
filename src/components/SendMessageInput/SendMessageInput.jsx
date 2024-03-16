import React from 'react'
import Attaachment from '../../assets/Attachment.png'
import emoji from '../../assets/emoji-happy.png'
import Wallet from '../../assets/Wallet.png'
import RecordBtn from '../RecordBtn/RecordBtn'

const SendMessageInput = () => {
    return (
        <div className='absolute bottom-5 left-5 z-20 right-5 flex justify-between items-center'>
            <form className='flex justify-between w-full bg-[#7c7c7c33] p-3 rounded-[2rem] items-center border border-[#cacaca29]'>
                <img className='h-5 cursor-pointer' src={Attaachment} alt='attachment' />
                <input className='bg-transparent outline-none w-[90%] px-2 text-white' placeholder='Type your message' />
                <img className='h-5 cursor-pointer' src={emoji} alt='attachment' />
                <img className='h-5 cursor-pointer' src={Wallet} alt='attachment' />
            </form>
            <RecordBtn />
        </div>

    )
}

export default SendMessageInput