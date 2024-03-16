import React from 'react'
import SearchGroups from '../SearchGroups/SearchGroups'
import girl from '../../assets/56.png'
import guy from '../../assets/58.png'
import AddBtn from '../AddBtn/AddBtn'
import UserMsg from '../UserMsg/UserMsg'

const MsgGroups = () => {

    const msgGroupData = [
        {
            id: 0,
            name: 'Jessica Grand',
            msg: 'How about we changes the concept that allows ',
            img: girl,
            hasNewMsg: true
        },
        {
            id: 1,
            name: 'Jessica Grand',
            msg: 'How about we changes the concept that allows ',
            img: girl,
            hasNewMsg: false
        },
        {
            id: 2,
            name: 'Eric Luong',
            msg: 'How about we changes the concept that allows ',
            img: guy,
            hasNewMsg: false
        },
        {
            id: 3,
            name: 'Eric Luong',
            msg: 'How about we changes the concept that allows ',
            img: guy,
            hasNewMsg: false
        },
    ]


    return (
        <div className="bg-[#57575766] opacity-80 msgGroup mt-4 h-fit w-full p-4 rounded-xl text-white"  >
            <SearchGroups />
            <div className='' >
                {
                    msgGroupData?.map(msgGroupUser => {
                        return (<UserMsg key={msgGroupUser?.id} user={msgGroupUser} />)
                    })
                }
                <AddBtn text='Add more friends' />
            </div>

        </div>
    )
}

export default MsgGroups