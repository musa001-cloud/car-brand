import React from 'react'
import image from '../../assets/ChatGPT.png'
import Layout from '../Layouts/Layout'
import Lamborghini1 from '../../assets/ferrari/download (2).jfif'
import Lamborghini2 from '../../assets/ferrari/urus.jfif'
import Lamborghini3 from '../../assets/ferrari/Reventón.png'

const models = [
  {
    img: Lamborghini1,
    name: 'Huracan Tecnica',
    power: 'Power', powerNum: '640 hp',
    speed: 'TOP SPEED', speedNum: '202 mph',
    price: '261,000',
    configures: 'Configure',
  },
  {
    img: Lamborghini2,
    name: 'Urus Performante',
    power: 'Power', powerNum: '666 hp',
    speed: 'TOP SPEED', speedNum: '193 mph',
    price: '247,000',
    configures: 'Configure',
  },
  {
    img: Lamborghini3,
    name: 'Reventón',
    power: 'Power', powerNum: '715 hp',
    speed: 'TOP SPEED', speedNum: '221 mph',
    price: '1,600,000',
    configures: 'Configure',
  },
]

function Lamborghini() {
  return (
    <div className="bg-black px-[100px]">
      <div className="relative">
        <img
          className="w-full h-[350px] border-2 border-yellow-600 rounded-lg object-cover"
          src={image}
          alt="Lamborghini"
        />

        {/* Gradient so text stays legible over the image */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 px-6 sm:px-10 pb-6
         grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-4 items-end text-white">
          <div>
            <p className="text-sm text-yellow-600">Maranello, Italy · Est. 1947</p>
            <h1 className="text-3xl sm:text-4xl font-semibold mt-1">Lamborghini</h1>
            <p className="text-sm text-gray-300 mt-2 max-w-md">
             Lamborghini defies convention at every turn — sculpted by aerospace engineering 
             and Italian audacity into rolling works of kinetic art.
            </p>
          </div>

          <div className="flex sm:justify-end">
            <button className="border border-white rounded-md px-4 py-2 text-sm hover:bg-yellow-600 hover:border-yellow-600 transition-colors">
              3 Models
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 sm:px-10 lg:px-16 py-10">
        {models.map((model) => (
          <Layout key={model.name} {...model} />
        ))}
      </div>
    </div>
  )
}

export default Lamborghini