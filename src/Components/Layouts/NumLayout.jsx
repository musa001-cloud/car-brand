import React from 'react'

function numLayout(props) {
  return (
    <div className='text-center'>
        <h2 className='font-[Cormorant_Garamond] font-semibold text-[40px] text-green-500'>{props.number}</h2>
        <p className='text-[12px] text-gray-300 font-semibold'>{props.id}</p>
    </div>
  )
}

export default numLayout