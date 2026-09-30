import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import NavBar from './NavBar'

import {
  MdOutlineShield,
  MdSpeed,
  MdSupportAgent,
  MdVerified,
  MdArrowOutward,
} from "react-icons/md";


import img1 from "../../assets/Image.png";
import img2 from "../../assets/ChatGPT Image Aug 31, 2026, 01_00_08 PM.png";
import img3 from "../../assets/ChatGPT.png";
import img4 from "../../assets/Image 567.png";
import img5 from "../../assets/Aston Martin.jfif"
import img6 from "../../assets/BMW.jfif"
import img7 from "../../assets/Chevrolet Camaro Of Our Dreams.jfif"
import img8 from "../../assets/Instagram.jfif"
import img9 from "../../assets/Koenigsegg One_1.jfif"
import img10 from "../../assets/Maserati.jfif"
import img11 from "../../assets/mclarene.jfif"
import img12 from "../../assets/Porsche.jfif"





function Models() {
 const navigate = useNavigate();
 
 const handleCategory = (category) => {
    navigate(`/shop?category=${encodeURIComponent(category)}`);
  };
  const fleet = [
    {
      image: img1,
      category: "Mercedes",
      path: "mercedes",
      position: "sm:rounded-tl-3xl",
    },
    {
      image: img2,
      category: "Ferrari",
      path: "ferrari",
      position: "sm:rounded-tr-3xl",
    },
    {
      image: img3,
      category: "Lamborghini",
      path: "lamborghini",
      position: "sm:rounded-bl-3xl",
    },
    {
      image: img4,
      category: "Bugatti",
      path: "bugatti",
      position: "sm:rounded-br-3xl",
    },
    {
      image: img5,
      category: "Aston Martin",
      path: "aston-martin",
      position: "sm:rounded-bl-3xl",
    },
    {
      image: img6,
      category: "BMW",
      path: "bmw",
      position: "sm:rounded-br-3xl",
    },
    {
      image: img7,
      category: "Chevrolet",
      path: "Chevrolet",
      position: "sm:rounded-br-3xl",
    },
    {
      image: img8,
      category: "Rolls-Royce",
      path: "Rolls-Royce",
      position: "sm:rounded-br-3xl",
    },
    {
      image: img9,
      category: "Koenigsegg",
      path: "Koenigsegg",
      position: "sm:rounded-br-3xl",
    },
    {
      image: img10,
      category: "Maserati",
      path: "Maserati",
      position: "sm:rounded-br-3xl",
    },
    {
      image: img11,
      category: "McLaren",
      path: "McLaren",
      position: "sm:rounded-br-3xl",
    },
    {
      image: img12,
      category: "Porsche",
      path: "Porsche",
      position: "sm:rounded-br-3xl",
    },
  ];

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-500";

  const calm = "motion-reduce:transition-none motion-reduce:transform-none";


  return (
    <div className='bg-black'>
        <NavBar />
        <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-3 sm:grid-cols-3 gap-y-6 lg:gap-6">
                    {fleet.map(({ image, category, path, position }) => (
                      <div
                        key={path}
                        onClick={() => handleCategory(category)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            handleCategory(category);
                          }
                        }}
                        className={`group relative cursor-pointer overflow-hidden rounded-xl ${position} ${focusRing}`}
                      >
                        <img
                          src={image}
                          alt={`${category} luxury car`}
                          loading="lazy"
                          decoding="async"
                          className={`aspect-[16/10] w-full object-cover transition-transform duration-700 [@media(hover:hover)]:group-hover:scale-110 sm:aspect-[4/3] lg:aspect-[16/10] ${calm}`}
                        />
        
                        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/90 via-black/20 to-transparent p-[clamp(1rem,2.5vw,1.5rem)]">
                          <div
                            className={`transition-transform duration-500 [@media(hover:hover)]:translate-y-2 [@media(hover:hover)]:group-hover:translate-y-0 ${calm}`}
                          >
                            <p className="text-[10px] tracking-[0.3em] text-green-500">
                              DISCOVER
                            </p>
        
                            <div className="mt-1 flex items-center gap-2">
                              <h3 className="text-lg font-medium text-white">
                                {category}
                              </h3>
                              <MdArrowOutward
                                size={18}
                                className={`text-white transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 ${calm}`}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
    </div>
  )
}

export default Models