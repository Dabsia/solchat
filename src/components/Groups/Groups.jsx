import GroupUser from '../GroupUser/GroupUser'
import girl from '../../assets/56.png'
import guy from '../../assets/58.png'
import AddBtn from '../AddBtn/AddBtn'
import SearchGroups from '../SearchGroups/SearchGroups'

const Groups = () => {

    const groupUsersData = [
        {
            id: 0,
            name: 'Jessica Grand',
            wallet_id: '2KxuLZsRKeARorNTnVgJrzs8ZcbAMXzpFAmDE9A7ELEh',
            img: girl
        },
        {
            id: 1,
            name: 'Jessica Grand',
            wallet_id: '2KxuLZsRKeARorNTnVgJrzs8ZcbAMXzpFAmDE9A7ELEh',
            img: girl
        },
        {
            id: 2,
            name: 'Eric Luong',
            wallet_id: '2KxuLZsRKeARorNTnVgJrzs8ZcbAMXzpFAmDE9A7ELEh',
            img: guy
        },
    ]

    return (
        <div className="bg-[#57575766] opacity-80 h-fit w-full p-4 rounded-xl text-white" >
            <SearchGroups />
            <div className='' >
                {
                    groupUsersData?.map(groupUser => {
                        return (<GroupUser key={groupUser?.id} user={groupUser} />)
                    })
                }
                <AddBtn text='Add more groups' />
            </div>



        </div>
    )
}

export default Groups