import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const NavBar = () => {

  const [nav, setNav] = useState(true)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className='text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4'>
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>React.</h1>
      <ul className='hidden md:flex'>
        <li className='p-4  cursor-pointer'>Home</li>
        <li className='p-4  cursor-pointer'>Company</li>
        <li className='p-4  cursor-pointer'>Resources</li>
        <li className='p-4  cursor-pointer'>About</li>
        <li className='p-4 cursor-pointer'>Contact</li>
      </ul>
      <div className=' block md:hidden' onClick={handleNav}>
        {nav ? <AiOutlineMenu size={20} /> :
          <AiOutlineClose size={20} />}
      </div>
      <div className={!nav ? 'fixed h-full left-0 top-0 w-[80%] border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 ' : 'fixed left-[-100%] '}  >
        <h1 className='w-full text-3xl mt-7 ml-4 font-bold text-[#00df9a]'>React.</h1>
        <ul className=''>
          <li className='p-4 border-b border-gray-600'>Home</li>
          <li className='p-4 border-b border-gray-600'>Company</li>
          <li className='p-4 border-b border-gray-600'>Resources</li>
          <li className='p-4 border-b border-gray-600'>About</li>
          <li className='p-4'>Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar