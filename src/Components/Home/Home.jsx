import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

import NavBar from "./NavBar";
import NumLayout from "../Layouts/NumLayout";
import IconLay from "../Layouts/iconLay";

import Products from "../../products/product.json";

import car from "../../assets/cht.png";
import img1 from "../../assets/Image.png";
import img2 from "../../assets/ChatGPT Image Aug 31, 2026, 01_00_08 PM.png";
import img3 from "../../assets/ChatGPT.png";
import img4 from "../../assets/Image 567.png";

import {
  MdOutlineShield,
  MdSpeed,
  MdSupportAgent,
  MdVerified,
  MdArrowOutward,
} from "react-icons/md";

// ==============================
// MARQUES
// ==============================

const marques = [
  {
    code: "M",
    name: "MERCEDES",
    path: "mercedes",
    hover:
      "hover:border-green-500 hover:shadow-[0_0_30px_rgba(34,197,94,0.15)]",
  },
  {
    code: "F",
    name: "FERRARI",
    path: "ferrari",
    hover:
      "hover:border-red-500 hover:shadow-[0_0_30px_rgba(239,68,68,0.15)]",
  },
  {
    code: "L",
    name: "LAMBORGHINI",
    path: "lamborghini",
    hover:
      "hover:border-yellow-500 hover:shadow-[0_0_30px_rgba(234,179,8,0.15)]",
  },
  {
    code: "B",
    name: "BUGATTI",
    path: "bugatti",
    hover:
      "hover:border-blue-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]",
  },
];

// ==============================
// APEX PROMISES
// ==============================

const promises = [
  {
    icon: MdSpeed,
    title: "Fast Delivery",
    description:
      "We ensure quick and reliable delivery of your dream car.",
  },
  {
    icon: MdOutlineShield,
    title: "Trusted & Secure",
    description:
      "Every vehicle is carefully inspected and securely handled.",
  },
  {
    icon: MdVerified,
    title: "Verified Vehicles",
    description:
      "We offer carefully selected vehicles from trusted manufacturers.",
  },
  {
    icon: MdSupportAgent,
    title: "Premium Support",
    description:
      "Our team is available to guide you throughout your purchase.",
  },
];

// ==============================
// FLEET
// ==============================

const fleet = [
  {
    image: img1,
    category: "Mercedes",
    path: "mercedes",
    position: "rounded-tl-2xl",
  },
  {
    image: img2,
    category: "Ferrari",
    path: "ferrari",
    position: "rounded-tr-2xl",
  },
  {
    image: img3,
    category: "Lamborghini",
    path: "lamborghini",
    position: "rounded-bl-2xl",
  },
  {
    image: img4,
    category: "Bugatti",
    path: "bugatti",
    position: "rounded-br-2xl",
  },
];

function Home() {
  const navigate = useNavigate();

  // ==============================
  // CATEGORY HANDLER
  // ==============================

  const handleCategory = (category) => {
    navigate(`/shop?category=${encodeURIComponent(category)}`);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <NavBar />

      {/* ==============================
          HERO
      ============================== */}

      <section className="relative flex min-h-[560px] items-center justify-center overflow-hidden border-l-4 border-green-500 sm:min-h-[650px]">
        <img
          src={car}
          alt="Apex Motors luxury car"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/55" />

        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/90" />

        <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-5 text-center">
          <span className="mb-4 text-xs font-medium tracking-[0.45em] text-green-500 sm:text-sm">
            MOLSHEIM, FRANCE · EST. 1909
          </span>

          <h1 className="font-[Nunito_Sans] text-5xl font-semibold tracking-[0.08em] sm:text-6xl md:text-7xl lg:text-8xl">
            APEX MOTORS
          </h1>

          <div className="mt-8 h-px w-20 bg-green-500 sm:mt-10 sm:w-28" />

          <p className="mt-8 text-sm font-medium tracking-[0.35em] text-gray-200 sm:text-base">
            ART · FORME · TECHNIQUE
          </p>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-gray-300 sm:text-base sm:leading-8">
            APEX MOTORS occupies an entirely singular category — the
            intersection of haute couture craftsmanship and the absolute
            frontier of automotive physics.
          </p>

          <button
            type="button"
            onClick={() => navigate("/shop")}
            className="group mt-9 inline-flex items-center gap-3 rounded-md border border-white/70 bg-white px-6 py-3 text-sm font-medium text-black transition-all duration-300 hover:border-green-500 hover:bg-green-500"
          >
            Explore Collection

            <MdArrowOutward
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </button>
        </div>

        <div className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-[10px] tracking-[0.3em] text-gray-400 sm:flex">
          <span className="h-px w-10 bg-gray-600" />
          SCROLL TO DISCOVER
          <span className="h-px w-10 bg-gray-600" />
        </div>
      </section>

      {/* ==============================
          STATS
      ============================== */}

      <section className="border-y border-gray-800 bg-gray-900/90">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-gray-800 sm:grid-cols-4">
          <div className="px-4 py-7 sm:px-8">
            <NumLayout number="200+" id="MODELS AVAILABLE" />
          </div>

          <div className="px-4 py-7 sm:px-8">
            <NumLayout number="47" id="YEARS OF HERITAGE" />
          </div>

          <div className="px-4 py-7 sm:px-8">
            <NumLayout number="98%" id="CLIENT SATISFACTION" />
          </div>

          <div className="px-4 py-7 sm:px-8">
            <NumLayout number="12" id="GLOBAL SHOWROOMS" />
          </div>
        </div>
      </section>

      {/* ==============================
          COLLECTION
      ============================== */}

      <section className="bg-black px-5 py-20 sm:px-10 lg:px-20 xl:px-28">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="text-xs font-medium tracking-[0.35em] text-green-500">
              OUR COLLECTION
            </p>

            <h2 className="mt-3 font-[sans_serif] text-4xl font-light leading-tight sm:text-5xl md:text-6xl">
              Legendary
              <br />
              <span className="text-gray-500">Marques</span>
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {marques.map(({ code, name, path, hover }, index) => (
                <NavLink
                  key={path}
                  to={`/home/${path}`}
                  className={({ isActive }) => `
                    group relative min-h-[190px] overflow-hidden rounded-xl
                    border bg-gradient-to-br from-gray-900 via-gray-900 to-black
                    p-6 transition-all duration-500
                    hover:-translate-y-2
                    ${hover}
                    ${
                      isActive
                        ? "border-white shadow-[0_0_30px_rgba(255,255,255,0.08)]"
                        : "border-gray-800"
                    }
                  `}
                >
                  <span className="absolute -right-3 -top-8 select-none text-[130px] font-bold leading-none text-white/[0.025] transition-all duration-500 group-hover:scale-110 group-hover:text-white/[0.06]">
                    0{index + 1}
                  </span>

                  <div className="relative flex items-center justify-between">
                    <span className="text-[10px] tracking-[0.3em] text-gray-500">
                      MARQUE
                    </span>

                    <span className="text-xs text-gray-600 transition-colors duration-300 group-hover:text-gray-300">
                      0{index + 1}
                    </span>
                  </div>

                  <div className="relative mt-7">
                    <h3 className="font-[Cormorant_Garamond] text-6xl font-light leading-none text-white transition-transform duration-500 group-hover:translate-x-2">
                      {code}
                    </h3>
                  </div>

                  <div className="relative mt-6 flex items-end justify-between">
                    <div>
                      <p className="text-xs tracking-[0.2em] text-gray-400 transition-colors duration-300 group-hover:text-white">
                        {name}
                      </p>

                      <div className="mt-3 h-px w-8 bg-gray-600 transition-all duration-500 group-hover:w-16 group-hover:bg-white" />
                    </div>

                    <MdArrowOutward
                      size={20}
                      className="text-gray-600 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white group-hover:opacity-100"
                    />
                  </div>
                </NavLink>
              ))}
            </div>
          </div>

          <div className="relative lg:pl-10">
            <div className="absolute left-0 top-0 hidden h-full w-px bg-gray-800 lg:block" />

            <div className="max-w-md lg:pl-10">
              <span className="text-5xl font-light text-gray-700">“</span>

              <p className="mt-2 text-lg leading-8 text-gray-300 sm:text-xl">
                Curated from the world's most revered manufacturers — each
                vehicle hand-selected for its engineering supremacy and
                cultural significance.
              </p>

              <div className="mt-8 h-px w-16 bg-green-500" />
            </div>
          </div>
        </div>
      </section>

      {/* ==============================
          NESTED ROUTES
      ============================== */}

      <Outlet />

      {/* ==============================
          WHY CHOOSE US
      ============================== */}

      <section className="bg-gray-900 px-5 py-20 sm:px-10 lg:px-20 xl:px-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="text-xs font-medium tracking-[0.35em] text-green-500">
              WHY CHOOSE US
            </p>

            <h2 className="mt-3 font-[sans_serif] text-4xl font-light sm:text-5xl">
              The Apex Promise
            </h2>

            <p className="mt-5 text-sm leading-7 text-gray-400 sm:text-base">
              Excellence isn't just what we sell. It's how we serve.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {promises.map(({ icon: Icon, title, description }) => (
              <IconLay
                key={title}
                icon={<Icon size={25} />}
                title={title}
                description={description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ==============================
          FLEET
      ============================== */}

      <section className="bg-black px-5 py-20 sm:px-10 lg:px-20 xl:px-28">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-xs font-medium tracking-[0.35em] text-green-500">
              THE FLEET
            </p>

            <h2 className="mt-3 font-[sans_serif] text-4xl font-light text-white sm:text-5xl">
              View Popular Models
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-500">
              Discover a selection of extraordinary vehicles built for those
              who expect more from every journey.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-3 sm:grid-cols-2">
            {fleet.map(({ image, category, path, position }) => (
              <div
                key={path}
                onClick={() => handleCategory(category)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    handleCategory(category);
                  }
                }}
                className={`group relative cursor-pointer overflow-hidden rounded-xl ${position}`}
              >
                <img
                  src={image}
                  alt={`${category} luxury car`}
                  className="h-[240px] w-full object-cover transition-transform duration-700 group-hover:scale-110 sm:h-[280px]"
                />

                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/90 via-black/20 to-transparent p-6 opacity-100 transition-all duration-500">
                  <div className="translate-y-2 transition-transform duration-500 group-hover:translate-y-0">
                    <p className="text-[10px] tracking-[0.3em] text-green-500">
                      DISCOVER
                    </p>

                    <div className="mt-1 flex items-center gap-2">
                      <h3 className="text-lg font-medium text-white">
                        {category}
                      </h3>

                      <MdArrowOutward
                        size={18}
                        className="text-white transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => navigate("/shop")}
              className="group flex items-center gap-3 rounded-md border border-gray-700 px-7 py-3 text-sm text-gray-300 transition-all duration-300 hover:border-green-500 hover:bg-green-500 hover:text-black"
            >
              View Full Collection

              <MdArrowOutward
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </button>
          </div>
        </div>
      </section>

      <div className="h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent" />
    </main>
  );
}

export default Home;

