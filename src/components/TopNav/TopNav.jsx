import logo from '../../assets/logo.png'
import search from '../../assets/search.png'
import MainBtn from '../MainBtn/MainBtn'
import maldives from '../../assets/maldives.jpg'

const TopNav = () => {
    return (
        <div className=' items-center topNav flex flex-col' >
            <header className="w-full  flex mb-2 justify-between items-center" >
                <div className='w-[7rem] h-fit flex justify-center items-center cursor-pointer rounded-[2rem] bg-[#7c7c7c33]' >
                    <img src={logo} alt='logo' />
                </div>
                <div className="bg-[#7c7c7c33] h-[3rem] w-[70%] p-3 rounded-[2rem] border topSearchContainer border-[#cacaca29] flex items-center" >
                    <img className='h-5 mr-4' src={search} alt='search' />
                    <input className='bg-transparent text-[#d4d4d4] text-[13px] outline-none w-full' placeholder='Search ' />
                </div>
                <MainBtn text='Connect Wallet' />
                <div className='h-[3rem] w-[3rem] firstImage rounded-[100%]  border-2 border-gradient-to-r from-red-500 via-green-500' >
                    <img className='h-full w-full rounded-[100%] cursor-pointer object-cover' src={maldives} alt='maldives' />
                </div>

            </header>
            <div className='w-full mt-2 downBox justify-between flex' >
                <div className="bg-[#7c7c7c33] h-[3rem] w-[80%] p-3 rounded-[2rem] border  border-[#cacaca29] flex items-center" >
                    <img className='h-5 mr-4' src={search} alt='search' />
                    <input className='bg-transparent text-[#d4d4d4] text-[13px] outline-none w-full' placeholder='Search ' />
                </div>
                <div className='h-[3rem] w-[3rem] rounded-[100%]  border-2 border-gradient-to-r from-red-500 via-green-500' >
                    <img className='h-full w-full rounded-[100%] cursor-pointer object-cover' src={maldives} alt='maldives' />
                </div>
            </div>
        </div>

    )
}

export default TopNav