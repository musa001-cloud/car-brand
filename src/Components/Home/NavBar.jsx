import React from 'react'
import Logo from '../../assets/dffd.png'
function NavBar() {
  return (
    <div className="sticky top-0 z-50 p-4 border-b border-gray-600 flex items-center justify-between bg-black text-white shadow-md">
        <div className='flex items-center justify-between gap-4'>
            <img className='w-[50px] rounded-md border-2 border-gray-300' src={Logo} alt="" />
           <h1 className="font-['Instrument_Serif'] text-2xl font-semibold">APEX MOTORS</h1>
        </div>
        <div className='flex justify-between gap-4'>
            <a href="">Models</a>
            <a href="">Performance</a>
            <a href="">Heritage</a>
            <a href="">Experience</a>
            <a href="">Contact</a>
        </div>
        <div>
            <button className='border p-2 px-3 rounded-md cursor-pointer
             hover:bg-gray-700 hover:text-white'>
                BOOK CONSULTATION</button>
        </div>
    </div>
  )
}

export default NavBar