import React from 'react'
import { truncateText } from '../../Utilities/Truncate';

const GroupUser = ({ user }) => {


    return (
        <div className='flex mt-4 w-full cursor-pointer items-center' >
            <img className='h-[2.5rem] w-[2.5rem] mr-2 rounded-xl' src={user?.img} alt='groupuserPic' />
            <div>
                <p className='text-[#d4d4d4] font-bold text-[16px]' >{user?.name}</p>
                <p className='text-[#ffffffa3] text-[12px] font-light truncate ...' >{truncateText(user?.wallet_id, 37)}</p>
            </div>
        </div>
    )
}

export default GroupUser