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
// SHARED RESPONSIVE TOKENS
// (fluid values via clamp() so there are no hard jumps between breakpoints)
// ==============================

// Fluid side padding that also respects notches / rounded corners (iOS, foldables).
// Needs <meta name="viewport" content="..., viewport-fit=cover"> in index.html.
const gutter =
  "pl-[max(clamp(1.25rem,5vw,7rem),env(safe-area-inset-left))] pr-[max(clamp(1.25rem,5vw,7rem),env(safe-area-inset-right))]";

// Fluid vertical rhythm
const sectionY = "py-[clamp(4rem,9vw,7rem)]";

// Eyebrow label: tracking shrinks on small screens so it never wraps awkwardly
const eyebrow =
  "text-[0.7rem] font-medium tracking-[clamp(0.2em,1.2vw,0.35em)] text-green-500 sm:text-xs";

// Fluid H2
const h2 =
  "mt-3 font-[sans_serif] text-[clamp(2.25rem,5.5vw,4rem)] font-light leading-[1.1] text-balance";

// Visible keyboard focus everywhere
const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-500";

// Respect reduced-motion
const calm = "motion-reduce:transition-none motion-reduce:transform-none";

// ==============================
// MARQUES
// (hover effects are gated to devices that can actually hover)
// ==============================

const marques = [
  {
    code: "M",
    name: "MERCEDES",
    path: "mercedes",
    hover:
      "[@media(hover:hover)]:hover:border-green-500 [@media(hover:hover)]:hover:shadow-[0_0_30px_rgba(34,197,94,0.15)]",
  },
  {
    code: "F",
    name: "FERRARI",
    path: "ferrari",
    hover:
      "[@media(hover:hover)]:hover:border-red-500 [@media(hover:hover)]:hover:shadow-[0_0_30px_rgba(239,68,68,0.15)]",
  },
  {
    code: "L",
    name: "LAMBORGHINI",
    path: "lamborghini",
    hover:
      "[@media(hover:hover)]:hover:border-yellow-500 [@media(hover:hover)]:hover:shadow-[0_0_30px_rgba(234,179,8,0.15)]",
  },
  {
    code: "B",
    name: "BUGATTI",
    path: "bugatti",
    hover:
      "[@media(hover:hover)]:hover:border-blue-500 [@media(hover:hover)]:hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]",
  },
];

// ==============================
// APEX PROMISES
// ==============================

const promises = [
  {
    icon: MdSpeed,
    title: "Fast Delivery",
    description: "We ensure quick and reliable delivery of your dream car.",
  },
  {
    icon: MdOutlineShield,
    title: "Trusted & Secure",
    description: "Every vehicle is carefully inspected and securely handled.",
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
    description: "Our team is available to guide you throughout your purchase.",
  },
];

// ==============================
// FLEET
// (corner rounding only applies once the grid is 2 columns)
// ==============================

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
];

function Home() {
  const navigate = useNavigate();

  const handleCategory = (category) => {
    navigate(`/shop?category=${encodeURIComponent(category)}`);
  };

  return (
    // overflow-x-clip (not overflow-hidden) stops sideways scroll
    // without breaking position: sticky in the navbar.
    <main className="min-h-dvh overflow-x-clip bg-black text-white">
      <NavBar />

      {/* ==============================
          HERO
      ============================== */}

      <section
        className={`relative flex min-h-[max(28rem,min(100svh,58rem))] items-center justify-center overflow-hidden border-green-500 sm:border-l-4 ${gutter} py-16`}
      >
        <img
          src={car}
          alt="Apex Motors luxury car"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-[60%_center] sm:object-center"
        />

        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/90" />

        <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center text-center">
          <span className="mb-4 text-[0.65rem] font-medium tracking-[clamp(0.15em,1.8vw,0.45em)] text-green-500 sm:text-sm">
            MOLSHEIM, FRANCE · EST. 1909
          </span>

          <h1 className="font-[Nunito_Sans] text-[clamp(2.5rem,10vw,6.5rem)] font-semibold leading-[1.05] tracking-[clamp(0.03em,0.8vw,0.08em)] text-balance">
            APEX MOTORS
          </h1>

          <div className="mt-[clamp(1.5rem,3vw,2.5rem)] h-px w-[clamp(4rem,10vw,7rem)] bg-green-500" />

          <p className="mt-[clamp(1.5rem,3vw,2rem)] text-[clamp(0.75rem,1.6vw,1rem)] font-medium tracking-[clamp(0.15em,1.5vw,0.35em)] text-gray-200">
            ART · FORME · TECHNIQUE
          </p>

          <p className="mt-5 max-w-[60ch] text-sm leading-7 text-gray-300 text-pretty sm:text-base sm:leading-8">
            APEX MOTORS occupies an entirely singular category — the
            intersection of haute couture craftsmanship and the absolute
            frontier of automotive physics.
          </p>

          <button
            type="button"
            onClick={() => navigate("/shop")}
            className={`group mt-8 inline-flex min-h-12 w-full max-w-xs items-center justify-center gap-3 rounded-md border border-white/70 bg-white px-6 py-3 text-sm font-medium text-black transition-all duration-300 hover:border-green-500 hover:bg-green-500 sm:mt-9 sm:w-auto sm:max-w-none ${focusRing} ${calm}`}
          >
            Explore Collection
            <MdArrowOutward
              size={18}
              className={`transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 ${calm}`}
            />
          </button>
        </div>

        {/* Hidden on phones and on short landscape screens where it would collide with content */}
        <div className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-[10px] tracking-[0.3em] text-gray-400 sm:flex [@media(max-height:640px)]:hidden">
          <span className="h-px w-10 bg-gray-600" />
          SCROLL TO DISCOVER
          <span className="h-px w-10 bg-gray-600" />
        </div>
      </section>

      {/* ==============================
          STATS
          (gap-px on a coloured grid = dividers that stay correct at 2 or 4 columns)
      ============================== */}

      <section className="border-y border-gray-800 bg-gray-900">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-gray-800 sm:grid-cols-4">
          {[
            ["200+", "MODELS AVAILABLE"],
            ["47", "YEARS OF HERITAGE"],
            ["98%", "CLIENT SATISFACTION"],
            ["12", "GLOBAL SHOWROOMS"],
          ].map(([number, label]) => (
            <div
              key={label}
              className="bg-gray-900 px-4 py-[clamp(1.5rem,3vw,2rem)] sm:px-8"
            >
              <NumLayout number={number} id={label} />
            </div>
          ))}
        </div>
      </section>

      {/* ==============================
          COLLECTION
      ============================== */}

      <section className={`bg-black ${gutter} ${sectionY}`}>
        <div className="mx-auto grid max-w-7xl gap-[clamp(2.5rem,6vw,3.5rem)] lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className={eyebrow}>OUR COLLECTION</p>

            <h2 className={h2}>
              Legendary
              <br />
              <span className="text-gray-500">Marques</span>
            </h2>

            <div className="mt-[clamp(1.75rem,4vw,2.5rem)] grid grid-cols-4 gap-3 min-[480px]:grid-cols-2 sm:gap-4">
              {marques.map(({ code, name, path, hover }, index) => (
                <NavLink
                  key={path}
                  to={`/home/${path}`}
                  className={({ isActive }) => `
                    group relative min-h-[clamp(9.5rem,22vw,12rem)] overflow-hidden rounded-xl
                    border bg-gradient-to-br from-gray-900 via-gray-900 to-black
                    p-[clamp(1.1rem,2.5vw,1.5rem)] transition-all duration-500
                    [@media(hover:hover)]:hover:-translate-y-2
                    ${focusRing} ${calm}
                    ${hover}
                    ${
                      isActive
                        ? "border-white shadow-[0_0_30px_rgba(255,255,255,0.08)]"
                        : "border-gray-800"
                    }
                  `}
                >
                  <span className="pointer-events-none absolute -right-3 -top-8 select-none text-[clamp(6rem,14vw,8.125rem)] font-bold leading-none text-white/[0.025] transition-all duration-500 group-hover:scale-110 group-hover:text-white/[0.06] motion-reduce:transition-none motion-reduce:group-hover:scale-100">
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

                  <div className="relative mt-[clamp(1.25rem,3vw,1.75rem)]">
                    <h3
                      className={`font-[Cormorant_Garamond] text-[clamp(3.5rem,8vw,3.75rem)] font-light leading-none text-white transition-transform duration-500 group-hover:translate-x-2 ${calm}`}
                    >
                      {code}
                    </h3>
                  </div>

                  <div className="relative mt-5 flex items-end justify-between gap-2 sm:mt-6">
                    <div className="min-w-0">
                      <p className="truncate text-xs tracking-[0.2em] text-gray-400 transition-colors duration-300 group-hover:text-white">
                        {name}
                      </p>
                      <div className="mt-3 h-px w-8 bg-gray-600 transition-all duration-500 group-hover:w-16 group-hover:bg-white" />
                    </div>

                    {/* Always visible on touch devices (no hover there), revealed on hover elsewhere */}
                    <MdArrowOutward
                      size={20}
                      className={`shrink-0 text-gray-500 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover:opacity-100 ${calm}`}
                    />
                  </div>
                </NavLink>
              ))}
            </div>
          </div>

          {/* Quote: top rule when stacked, side rule when beside the grid */}
          <div className="relative md:block hidden border-t border-gray-800 pt-10 lg:border-t-0 lg:pl-10 lg:pt-0">
            <div className="absolute left-0 top-0 hidden h-full w-px bg-gray-800 lg:block" />

            <div className="max-w-md lg:pl-10">
              <span className="text-5xl font-light text-gray-700">“</span>

              <p className="mt-2 text-[clamp(1.05rem,1.8vw,1.25rem)] leading-8 text-gray-300 text-pretty">
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

      <section className={`bg-gray-900 ${gutter} ${sectionY}`}>
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-[clamp(2.5rem,6vw,3.5rem)] max-w-2xl text-center">
            <p className={eyebrow}>WHY CHOOSE US</p>
            <h2 className={h2}>The Apex Promise</h2>
            <p className="mt-5 text-sm leading-7 text-gray-400 sm:text-base">
              Excellence isn't just what we sell. It's how we serve.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 min-[520px]:grid-cols-2 sm:gap-5 lg:grid-cols-4">
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

      <section className={`bg-black ${gutter} ${sectionY}`}>
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className={eyebrow}>THE FLEET</p>
            <h2 className={`${h2} text-white`}>View Popular Models</h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-500 text-pretty">
              Discover a selection of extraordinary vehicles built for those
              who expect more from every journey.
            </p>
          </div>

          {/* aspect-ratio keeps tiles proportional at every width instead of fixed pixel heights */}
          <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-3 sm:grid-cols-2">
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

          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => navigate("/shop")}
              className={`group flex min-h-12 w-full max-w-xs items-center justify-center gap-3 rounded-md border border-gray-700 px-7 py-3 text-sm text-gray-300 transition-all duration-300 hover:border-green-500 hover:bg-green-500 hover:text-black sm:w-auto sm:max-w-none ${focusRing} ${calm}`}
            >
              View Full Collection
              <MdArrowOutward
                size={18}
                className={`transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 ${calm}`}
              />
            </button>
          </div>
        </div>
      </section>

      <div className="h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent pb-[env(safe-area-inset-bottom)]" />
    </main>
  );
}

export default Home;
