import React from "react";
import { useNavigate } from "react-router-dom";

import NavBar from "./NavBar";
import NumLayout from "../Layouts/NumLayout";
import IconLay from "../Layouts/iconLay";

import car from "../../assets/cht.png";

import {
  MdArrowOutward,
  MdHandshake,
  MdWorkspacePremium,
  MdPublic,
  MdHistoryEdu,
} from "react-icons/md";

// ==============================
// SHARED RESPONSIVE TOKENS (same as Home)
// ==============================

const gutter =
  "pl-[max(clamp(1.25rem,5vw,7rem),env(safe-area-inset-left))] pr-[max(clamp(1.25rem,5vw,7rem),env(safe-area-inset-right))]";
const sectionY = "py-[clamp(4rem,9vw,7rem)]";
const eyebrow =
  "text-[0.7rem] font-medium tracking-[clamp(0.2em,1.2vw,0.35em)] text-green-500 sm:text-xs";
const h2 =
  "mt-3 font-sans text-[clamp(2.25rem,5.5vw,4rem)] font-light leading-[1.1] text-balance";
const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-500";
const calm = "motion-reduce:transition-none motion-reduce:transform-none";

// ==============================
// DATA
// Placeholder copy: replace with your real company history.
// ==============================

const timeline = [
  {
    year: "1979",
    title: "The first showroom",
    text: "Apex Motors opens with a small collection of hand-picked European sports cars and a promise to inspect every vehicle personally.",
  },
  {
    year: "1991",
    title: "Partnerships with the great marques",
    text: "We begin working directly with leading manufacturers, giving clients access to limited and allocated models.",
  },
  {
    year: "2004",
    title: "Going international",
    text: "New showrooms open across three continents, and concierge delivery becomes part of every purchase.",
  },
  {
    year: "2014",
    title: "A dedicated performance division",
    text: "Our specialists start offering track days, driver coaching and detailed performance briefings for buyers.",
  },
  {
    year: "2026",
    title: "Twelve showrooms, one standard",
    text: "Today more than 200 models are available worldwide, each held to the same inspection and service standard.",
  },
];

const values = [
  {
    icon: MdWorkspacePremium,
    title: "Craftsmanship",
    description:
      "We favour vehicles built with exceptional materials and attention to detail.",
  },
  {
    icon: MdHandshake,
    title: "Trust",
    description:
      "Clear history, honest condition reports and no surprises after purchase.",
  },
  {
    icon: MdPublic,
    title: "Global Reach",
    description:
      "Showrooms and partners worldwide, so your car arrives wherever you are.",
  },
  {
    icon: MdHistoryEdu,
    title: "Provenance",
    description:
      "Every car comes with documented ownership, service and authenticity records.",
  },
];

function Heritage() {
  const navigate = useNavigate();

  return (
    <main className="min-h-dvh overflow-x-clip bg-black text-white">
      <NavBar />

      {/* HERO */}
      <section
        className={`relative flex min-h-[max(26rem,min(80svh,50rem))] items-center justify-center overflow-hidden border-green-500 sm:border-l-4 ${gutter} py-16`}
      >
        <img
          src={car}
          alt="Apex Motors heritage"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-[60%_center] sm:object-center"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/90" />

        <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center text-center">
          <span className="mb-4 text-[0.65rem] font-medium tracking-[clamp(0.15em,1.8vw,0.45em)] text-green-500 sm:text-sm">
            HERITAGE
          </span>
          <h1 className="text-[clamp(2.5rem,9vw,5.5rem)] font-semibold leading-[1.05] tracking-[clamp(0.03em,0.8vw,0.08em)] text-balance">
            47 Years Of Passion
          </h1>
          <div className="mt-[clamp(1.5rem,3vw,2.5rem)] h-px w-[clamp(4rem,10vw,7rem)] bg-green-500" />
          <p className="mt-6 max-w-[60ch] text-sm leading-7 text-gray-300 text-pretty sm:text-base sm:leading-8">
            Apex Motors began with one showroom and a simple rule: only sell
            cars we would be proud to own. That rule still guides everything
            we do.
          </p>
          <button
            type="button"
            onClick={() =>
              document
                .getElementById("story")
                ?.scrollIntoView({ behavior: "smooth", block: "start" })
            }
            className={`group mt-8 inline-flex min-h-12 w-full max-w-xs items-center justify-center gap-3 rounded-md border border-white/70 bg-white px-6 py-3 text-sm font-medium text-black transition-all duration-300 hover:border-green-500 hover:bg-green-500 sm:w-auto sm:max-w-none ${focusRing} ${calm}`}
          >
            Read Our Story
            <MdArrowOutward
              size={18}
              className={`transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 ${calm}`}
            />
          </button>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-gray-800 bg-gray-900">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-gray-800 sm:grid-cols-4">
          {[
            ["1979", "YEAR FOUNDED"],
            ["12", "GLOBAL SHOWROOMS"],
            ["200+", "MODELS AVAILABLE"],
            ["98%", "CLIENT SATISFACTION"],
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

      {/* TIMELINE */}
      <section id="story" className={`bg-black ${gutter} ${sectionY}`}>
        <div className="mx-auto max-w-4xl">
          <p className={eyebrow}>OUR STORY</p>
          <h2 className={h2}>
            Milestones <span className="text-gray-500">Along The Way</span>
          </h2>

          <ol className="relative mt-[clamp(2.5rem,6vw,3.5rem)] space-y-10 border-l border-gray-800 pl-6 sm:pl-10">
            {timeline.map(({ year, title, text }) => (
              <li key={year} className="relative">
                {/* dot on the rule */}
                <span
                  aria-hidden="true"
                  className="absolute -left-[1.9rem] top-2 h-3 w-3 rounded-full border-2 border-green-500 bg-black sm:-left-[2.9rem]"
                />
                <p className="text-sm font-medium text-green-500">{year}</p>
                <h3 className="mt-1 text-xl font-light text-white sm:text-2xl">
                  {title}
                </h3>
                <p className="mt-3 max-w-[60ch] text-sm leading-7 text-gray-400 text-pretty sm:text-base">
                  {text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* VALUES */}
      <section className={`bg-gray-900 ${gutter} ${sectionY}`}>
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-[clamp(2.5rem,6vw,3.5rem)] max-w-2xl text-center">
            <p className={eyebrow}>WHAT WE STAND FOR</p>
            <h2 className={h2}>The Values Behind Apex</h2>
            <p className="mt-5 text-sm leading-7 text-gray-400 sm:text-base">
              Four principles that have stayed the same since day one.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 min-[520px]:grid-cols-2 sm:gap-5 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, description }) => (
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

      {/* QUOTE + CTA */}
      <section className={`bg-black ${gutter} ${sectionY}`}>
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <span className="text-5xl font-light text-gray-700">“</span>
          <p className="mt-2 text-[clamp(1.1rem,2vw,1.5rem)] leading-8 text-gray-300 text-pretty">
            A car is never just transport. It is engineering, design and
            memory in one object, and we treat every sale that way.
          </p>
          <div className="mt-8 h-px w-16 bg-green-500" />

          <div className="mt-10 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
            <button
              type="button"
              onClick={() => navigate("/shop")}
              className={`group flex min-h-12 w-full max-w-xs items-center justify-center gap-3 rounded-md border border-white/70 bg-white px-7 py-3 text-sm font-medium text-black transition-all duration-300 hover:border-green-500 hover:bg-green-500 sm:w-auto ${focusRing} ${calm}`}
            >
              View Full Collection
              <MdArrowOutward
                size={18}
                className={`transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 ${calm}`}
              />
            </button>
            <button
              type="button"
              onClick={() => navigate("/contact")}
              className={`flex min-h-12 w-full max-w-xs items-center justify-center rounded-md border border-gray-700 px-7 py-3 text-sm text-gray-300 transition-all duration-300 hover:border-green-500 hover:text-white sm:w-auto ${focusRing} ${calm}`}
            >
              Book Consultation
            </button>
          </div>
        </div>
      </section>

      <div className="h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent pb-[env(safe-area-inset-bottom)]" />
    </main>
  );
}

export default Heritage;
