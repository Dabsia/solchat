import React from 'react'
import message from '../../assets/message.png'
import notification from '../../assets/notification.png'
import logout from '../../assets/Logout.png'
import settings from '../../assets/settings.png'
import newWallet from '../../assets/empty-wallet.png'

const SideNav = () => {
    return (
        <header className='flex p-2 justify-between flex-col sideNav  h-[100%]  rounded-[3rem] bg-[#57575766] opacity-80 ' >
            <div>
                <div className='flex justify-center items-center h-11 mx-auto cursor-pointer mb-3 rounded-[100%] bg-gradient-to-r from-[#6764c9] to-[#2cc29d]  w-[90%] ' >
                    <img className='h-5 object-contain w-6' src={message} alt='message' />
                </div>
                <div className='flex justify-center items-center h-11 mx-auto cursor-pointer mb-3 rounded-[100%] bg-[#505050] w-[90%] ' >
                    <img className='h-5 w-6 object-contain' src={notification} alt='message' />
                </div>
                <div className='flex justify-center items-center h-11 mx-auto cursor-pointer mb-3 rounded-[100%] bg-[#505050] w-[90%] ' >
                    <img className='h-5 w-6 object-contain' src={newWallet} alt='message' />
                </div>
                <div className='flex justify-center items-center h-11 mx-auto cursor-pointer mb-3 rounded-[100%] bg-[#505050] w-[90%] ' >
                    <img className='h-5 w-6 object-contain' src={settings} alt='message' />
                </div>

            </div>
            <div className='flex justify-center items-center h-11 mx-auto cursor-pointer  rounded-[100%] bg-[#505050] w-[90%] ' >
                <img className='h-5 w-6 object-contain' src={logout} alt='logout' />
            </div>

        </header>
    )
}

export default SideNav