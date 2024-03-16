import React from 'react'
import search from '../../assets/search.png'
import cross from '../../assets/cross.png'

const SearchGroups = () => {
    return (
        <form className='flex justify-between' >
            <div className="bg-[#7c7c7c33] h-[3rem] w-[80%] p-3 rounded-[2rem] flex items-center" >
                <img className='h-5 mr-2' src={search} alt='search' />
                <input className='bg-transparent text-[#d4d4d4] outline-none w-full' placeholder='Search Groups' />
            </div>
            <button className='flex justify-center bg-[#7c7c7c33] cursor-pointer h-[3rem] w-[3rem] rounded-[100%] items-center' >
                <img className='h-5' src={cross} alt='cross' />
            </button>
        </form>
    )
}

export default SearchGroups