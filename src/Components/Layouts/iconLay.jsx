import React from 'react'

function iconLay(props) {
  return (
    <div className='bg-gray-900 p-6 rounded-md'>
        <p className='bg-green-300 w-[40px] text-[20px]
        rounded-md text-green-600 p-2'>{props.icon}</p>
        <br />
        <p className='font-[Cormorant_Garamond] text-[20px]'>{props.title}</p>
        <br />
        <p className='font-[Nunito_Sans] text-[14px]'>{props.description}</p>
    </div>
  )
}

export default iconLay