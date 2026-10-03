import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import NavBar from "./NavBar";
import NumLayout from "../Layouts/NumLayout";
import IconLay from "../Layouts/iconLay";

import car from "../../assets/cht.png";

import {
  MdArrowOutward,
  MdBolt,
  MdSpeed,
  MdAir,
  MdTune,
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
// Manufacturer-claimed figures; they vary by market and specification.
// ==============================

const cars = [
  { name: "Bugatti Chiron", power: 1500, sprint: 2.4, top: 261 },
  { name: "Koenigsegg Agera RS", power: 1360, sprint: 2.8, top: 284 },
  { name: "Lamborghini Revuelto", power: 1001, sprint: 2.5, top: 217 },
  { name: "Ferrari SF90 Stradale", power: 986, sprint: 2.0, top: 211 },
  { name: "Mercedes-AMG GT 63 S E", power: 831, sprint: 2.9, top: 196 },
  { name: "McLaren 720S", power: 710, sprint: 2.8, top: 212 },
  { name: "Porsche 911 GT3 RS", power: 518, sprint: 3.0, top: 184 },
];

// lowerIsBetter flips the bar so the quickest car always has the longest bar
const metrics = {
  power: { label: "Power", unit: "hp", key: "power", lowerIsBetter: false },
  sprint: { label: "0–60 mph", unit: "s", key: "sprint", lowerIsBetter: true },
  top: { label: "Top speed", unit: "mph", key: "top", lowerIsBetter: false },
};

const pillars = [
  {
    icon: MdBolt,
    title: "Power Delivery",
    description:
      "Hybrid and twin-turbo drivetrains tuned for instant response at any speed.",
  },
  {
    icon: MdAir,
    title: "Aerodynamics",
    description:
      "Active wings and sculpted underbodies that add grip without adding drag.",
  },
  {
    icon: MdTune,
    title: "Chassis Tuning",
    description:
      "Adaptive suspension and torque vectoring that sharpen every corner.",
  },
  {
    icon: MdSpeed,
    title: "Track Verified",
    description:
      "Every model we list is benchmarked against its manufacturer's own claims.",
  },
];

function Performance() {
  const navigate = useNavigate();
  const [active, setActive] = useState("power");

  const ranked = useMemo(() => {
    const m = metrics[active];
    const sorted = [...cars].sort((a, b) =>
      m.lowerIsBetter ? a[m.key] - b[m.key] : b[m.key] - a[m.key]
    );
    const values = cars.map((c) => c[m.key]);
    const best = m.lowerIsBetter ? Math.min(...values) : Math.max(...values);
    return sorted.map((c) => ({
      ...c,
      value: c[m.key],
      width: Math.round(
        (m.lowerIsBetter ? best / c[m.key] : c[m.key] / best) * 100
      ),
    }));
  }, [active]);

  const metric = metrics[active];

  return (
    <main className="min-h-dvh overflow-x-clip bg-black text-white">
      <NavBar />

      {/* HERO */}
      <section
        className={`relative flex min-h-[max(26rem,min(80svh,50rem))] items-center justify-center overflow-hidden border-green-500 sm:border-l-4 ${gutter} py-16`}
      >
        <img
          src={car}
          alt="Apex Motors performance car"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-[60%_center] sm:object-center"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/90" />

        <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center text-center">
          <span className="mb-4 text-[0.65rem] font-medium tracking-[clamp(0.15em,1.8vw,0.45em)] text-green-500 sm:text-sm">
            PERFORMANCE
          </span>
          <h1 className="text-[clamp(2.5rem,9vw,5.5rem)] font-semibold leading-[1.05] tracking-[clamp(0.03em,0.8vw,0.08em)] text-balance">
            Built To Be Felt
          </h1>
          <div className="mt-[clamp(1.5rem,3vw,2.5rem)] h-px w-[clamp(4rem,10vw,7rem)] bg-green-500" />
          <p className="mt-6 max-w-[60ch] text-sm leading-7 text-gray-300 text-pretty sm:text-base sm:leading-8">
            Horsepower, acceleration and top speed for every marque we carry,
            side by side, so you can see exactly what you are choosing.
          </p>
          <button
            type="button"
            onClick={() =>
              document
                .getElementById("compare")
                ?.scrollIntoView({ behavior: "smooth", block: "start" })
            }
            className={`group mt-8 inline-flex min-h-12 w-full max-w-xs items-center justify-center gap-3 rounded-md border border-white/70 bg-white px-6 py-3 text-sm font-medium text-black transition-all duration-300 hover:border-green-500 hover:bg-green-500 sm:w-auto sm:max-w-none ${focusRing} ${calm}`}
          >
            Compare Models
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
            ["1,500", "PEAK HORSEPOWER"],
            ["2.0s", "FASTEST 0–60 MPH"],
            ["284", "HIGHEST TOP SPEED (MPH)"],
            ["7", "CARS COMPARED"],
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

      {/* COMPARE */}
      <section id="compare" className={`bg-black ${gutter} ${sectionY}`}>
        <div className="mx-auto max-w-5xl">
          <p className={eyebrow}>HEAD TO HEAD</p>
          <h2 className={h2}>
            Compare <span className="text-gray-500">The Numbers</span>
          </h2>

          <div
            role="tablist"
            aria-label="Performance metric"
            className="mt-8 inline-flex w-full flex-wrap gap-2 sm:w-auto"
          >
            {Object.entries(metrics).map(([id, m]) => (
              <button
                key={id}
                type="button"
                role="tab"
                aria-selected={active === id}
                onClick={() => setActive(id)}
                className={`min-h-11 flex-1 rounded-md border px-5 py-2 text-sm transition-colors duration-300 sm:flex-none ${focusRing} ${calm} ${
                  active === id
                    ? "border-green-500 bg-green-500 text-black"
                    : "border-gray-700 text-gray-300 hover:border-gray-500"
                }`}
              >
                {m.label}
              </button>
            ))}
          </div>

          <ol className="mt-8 space-y-4" aria-live="polite">
            {ranked.map((c, i) => (
              <li
                key={c.name}
                className="rounded-xl border border-gray-800 bg-gradient-to-br from-gray-900 via-gray-900 to-black p-4 sm:p-5"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <p className="min-w-0 truncate text-sm text-gray-200 sm:text-base">
                    <span className="mr-3 text-xs text-gray-600">
                      {i + 1}
                    </span>
                    {c.name}
                  </p>
                  <p className="shrink-0 text-lg font-light text-white sm:text-xl">
                    {c.value.toLocaleString()}
                    <span className="ml-1 text-xs text-gray-500">
                      {metric.unit}
                    </span>
                  </p>
                </div>
                <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-gray-800">
                  <div
                    className={`h-full rounded-full transition-[width] duration-700 ${calm} ${
                      i === 0 ? "bg-green-500" : "bg-gray-500"
                    }`}
                    style={{ width: `${c.width}%` }}
                  />
                </div>
              </li>
            ))}
          </ol>

          <p className="mt-6 text-xs leading-6 text-gray-500">
            Manufacturer-claimed figures. Results vary by market, specification
            and conditions.
          </p>
        </div>
      </section>

      {/* ENGINEERING */}
      <section className={`bg-gray-900 ${gutter} ${sectionY}`}>
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-[clamp(2.5rem,6vw,3.5rem)] max-w-2xl text-center">
            <p className={eyebrow}>ENGINEERING</p>
            <h2 className={h2}>Where Speed Comes From</h2>
            <p className="mt-5 text-sm leading-7 text-gray-400 sm:text-base">
              Four areas decide how a car feels at the limit.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 min-[520px]:grid-cols-2 sm:gap-5 lg:grid-cols-4">
            {pillars.map(({ icon: Icon, title, description }) => (
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

      {/* CTA */}
      <section className={`bg-black ${gutter} ${sectionY}`}>
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <p className={eyebrow}>DRIVE ONE</p>
          <h2 className={h2}>Ready To Feel The Difference?</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-500 text-pretty">
            Browse the full collection or book a consultation with our team.
          </p>

          <div className="mt-8 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
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

export default Performance;
