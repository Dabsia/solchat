import React from 'react'
import { truncateText } from '../../Utilities/Truncate'


const UserMsg = ({ user }) => {
    return (
        <div className='flex mt-4 userMsgBox w-[90%] justify-between cursor-pointer items-center' >
            <div className='flex'>
                <img className='h-[2.5rem] w-[2.5rem] mr-2 rounded-xl' src={user?.img} alt='groupuserPic' />
                <div className=' userMsgText'  >
                    <p className='text-[#d4d4d4] font-bold text-[16px]' >{user?.name}</p>
                    <p className='text-[#ffffffa3] text-[12px] font-light truncate ...' >{truncateText(user?.msg, 37)}</p>
                </div>
            </div>

            {user?.hasNewMsg ? <div className='flex justify-center items-center ml-2 h-4 w-4 rounded-[100%]  bg-gradient-to-r from-[#6764c9] to-[#2cc29d] ' >
                <p className='text-[10px]' >2</p>
            </div> : <div className='ml-6'></div>}
        </div>
    )
}

export default UserMsg