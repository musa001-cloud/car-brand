import React from 'react'

function Layout(props) {
  return (
    <div className="group flex flex-col bg-gray-900 border border-gray-700 
    rounded-md overflow-hidden text-white hover:border-gray-500 transition-colors">
      <div className="overflow-hidden">
        <img
          src={props.img}
          alt={props.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-4 flex flex-col gap-3">
        <h1 className="text-xl font-[Cormorant_Garamond] font-semibold">{props.name}</h1>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-xs text-gray-400">{props.power}</p>
            <p className="text-base font-mono font-medium">{props.powerNum}</p>
          </div>
          <div>
            <p className="text-xs text-gray-400">{props.speed}</p>
            <p className="text-base font-mono font-medium">{props.speedNum}</p>
          </div>
        </div>

        <hr className="border-gray-700" />

        <div className="flex justify-between items-center">
          <p className="font-semibold font-[Cormorant_Garamond] text-lg">${props.price}</p>
          <p className="text-sm text-gray-300 underline cursor-pointer hover:text-white">
            {props.configures}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Layout