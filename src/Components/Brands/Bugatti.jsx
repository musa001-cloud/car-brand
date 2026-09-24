import React from 'react'
import image from '../../assets/Image 567.png'
import Layout from '../Layouts/Layout'
import bugatti1 from '../../assets/benze/Bugatti Chiron Pur Sport.png'
import bugatti2 from '../../assets/benze/bugatti divo_.png'
import bugatti3 from '../../assets/benze/The Bugatti W16 Mistral.png'

const models = [
  {
    img: bugatti1,
    name: 'Chiron Super Sport',
    power: 'Power', powerNum: '818 hp',
    speed: 'TOP SPEED', speedNum: '205 mph',
    price: '3,800,000',
    configures: 'Configure',
  },
  {
    img: bugatti2,
    name: 'Bolide',
    power: 'Power', powerNum: '986 hp',
    speed: 'TOP SPEED', speedNum: '211 mph',
    price: '4,200,000',
    configures: 'Configure',
  },
  {
    img: bugatti3,
    name: 'Mistral Roadster',
    power: 'Power', powerNum: '715 hp',
    speed: 'TOP SPEED', speedNum: '193 mph',
    price: '5,000,000',
    configures: 'Configure',
  },
]

function Bugatti() {
  return (
    <div className="bg-black px-[100px]">
      <div className="relative">
        <img
          className="w-full h-[350px] border-2 border-blue-600 rounded-lg object-cover"
          src={image}
          alt="Ferrari"
        />

        {/* Gradient so text stays legible over the image */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 px-6 sm:px-10 pb-6
         grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-4 items-end text-white">
          <div>
            <p className="text-sm text-blue-600">Maranello, Italy · Est. 1947</p>
            <h1 className="text-3xl sm:text-4xl font-semibold mt-1">Ferrari</h1>
            <p className="text-sm text-gray-300 mt-2 max-w-md">
              Ferrari builds cars around one obsession: the pursuit of speed as an
              art form, refined on the track and carried onto the road.
            </p>
          </div>

          <div className="flex sm:justify-end">
            <button className="border border-white rounded-md px-4 py-2 text-sm hover:bg-blue-600 hover:border-blue-600 transition-colors">
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

export default Bugatti