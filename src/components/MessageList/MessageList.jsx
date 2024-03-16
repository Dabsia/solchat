import React from 'react'
import ReceiverChat from '../ReceiverChat/ReceiverChat'
import SenderChat from '../SenderChat/SenderChat'
import user1 from '../../assets/18.png'
import user2 from '../../assets/58.png'
import user3 from '../../assets/50.png'

const MessageList = () => {
    return (
        <div className='my-2 flex msgList overflow-y-auto  flex-col' >
            <div className='flex mb-3' >
                <img className='h-[2.5rem] w-[2.5rem] rounded-xl' src={user1} alt='user' />
                <div className='ml-4 mt-2' >
                    <div className='flex items-center mb-2' >
                        <p className='mr-4 text-[#d4d4d4] text-[12px]' >Richard Wu</p>
                        <p className='text-[#ffffff52] text-[9px]' >10:12 PM</p>
                    </div>
                    <ReceiverChat message='Dang sorry for my late reply, anyways' />
                    <ReceiverChat message='Hopefully my thought will help you, btw Nice Work Man! ✨' />
                </div>

            </div>


            <div className='flex mb-3 self-end' >
                <div className=' mt-2  flex flex-col items-end' >
                    <div className='flex items-center mb-2' >
                        <p className='text-[#ffffff52] mr-4 text-[9px]' >10:12 PM</p>
                        <p className=' text-[#d4d4d4] text-[12px]' >You</p>
                    </div>
                    <SenderChat message='My man its 8 AM in the morning' />
                    <SenderChat message='Nope I don’t have anything wrong with your work. All good for me' />
                </div>
                <img className='h-[2.5rem] w-[2.5rem] ml-4 rounded-xl' src={user3} alt='user' />


            </div>

            <div className='flex mb-3' >
                <img className='h-[2.5rem] w-[2.5rem] rounded-xl' src={user2} alt='user' />
                <div className='ml-4 mt-2' >
                    <div className='flex items-center mb-2' >
                        <p className='mr-4 text-[#d4d4d4] text-[12px]' >Kira Yoshikage</p>
                        <p className='text-[#ffffff52] text-[9px]' >10:12 PM</p>
                    </div>
                    <ReceiverChat message='Thanks for the feedbacks Richard!' />
                    <ReceiverChat message='And I hate u Jimmy' />
                </div>

            </div>

            <div className='flex mb-3 self-end' >
                <div className=' mt-2  flex flex-col items-end' >
                    <div className='flex items-center mb-2' >
                        <p className='text-[#ffffff52] mr-4 text-[9px]' >10:12 PM</p>
                        <p className=' text-[#d4d4d4] text-[12px]' >You</p>
                    </div>
                    <SenderChat message='My man its 8 AM in the morning' />
                    <SenderChat message='Nope I don’t have anything wrong with your work. All good for me' />
                </div>
                <img className='h-[2.5rem] w-[2.5rem] ml-4 rounded-xl' src={user3} alt='user' />


            </div>




        </div>
    )
}

export default MessageList