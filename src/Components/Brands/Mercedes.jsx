import React from 'react'
import image from '../../assets/Image.png'
import Layout from '../Layouts/Layout'
import mercedes from '../../assets/benze/download.png'
import mercedes2 from '../../assets/benze/Mercedes Benz AMG g63.png'
import mercedes3 from '../../assets/benze/Mercedes-Benz SL63 .png'

const models = [
  {
    img: mercedes,
    name: 'AMG GT Blue Series',
    power: 'Power', powerNum: '469 hp',
    speed: 'TOP SPEED', speedNum: '202 mph',
    price: '135,000',
    configures: 'Configure',
  },
  {
    img: mercedes3,
    name: 'SL63 AMG',
    power: 'Power', powerNum: '577 hp',
    speed: 'TOP SPEED', speedNum: '196 mph',
    price: '178,000',
    configures: 'Configure',
  },
  {
    img: mercedes2,
    name: 'AMG G63',
    power: 'Power', powerNum: '585 hp',
    speed: 'TOP SPEED', speedNum: '137mph',
    price: '192,000',
    configures: 'Configure',
  },
]

function Mercedes() {
  return (
    <div className="bg-black md:px-[100px]">
      <div className="relative">
        <img
          className="md:w-full w-screen border-2 border-green-500  h-[350px] rounded-lg object-cover"
          src={image}
          alt="Mercedes-AMG"
        />

        {/* Gradient so text stays legible over the image */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 px-6 sm:px-10 pb-6
         grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-4 items-end text-white">
          <div>
            <p className="text-sm text-green-500">Affalterbach, Germany · Est. 1967</p>
            <h1 className="text-3xl sm:text-4xl font-semibold mt-1">Mercedes-AMG</h1>
            <p className="text-sm text-gray-300 mt-2 max-w-md">
              AMG — the performance soul of Mercedes-Benz — engineers machines where
              hand-built precision meets track-forged ferocity in sublime German harmony.
            </p>
          </div>

          <div className="flex sm:justify-end">
            <button className="border border-white rounded-md px-4 py-2 text-sm hover:bg-green-500 
            hover:text-white transition-colors">
              3 Models
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 sm:px-10  py-10">
        {models.map((model) => (
          <Layout key={model.name} {...model} />
        ))}
      </div>
    </div>
  )
}

export default Mercedes