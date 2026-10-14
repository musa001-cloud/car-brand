import React from "react";
import { useNavigate } from "react-router-dom";

import heroImage from "../../assets/Image 567.png";
import Layout from "../Layouts/Layout";

import bugattiChiron from "../../assets/benze/Bugatti Chiron Pur Sport.png";
import bugattiDivo from "../../assets/benze/bugatti divo_.png";
import bugattiMistral from "../../assets/benze/The Bugatti W16 Mistral.png";

const models = [
  {
    id: "bugatti-chiron-super-sport",
    name: "Chiron Super Sport",
    image: bugattiChiron,
    power: "1,578 hp",
    topSpeed: "273 mph",
    price: "3,800,000",
    configures: "Configure",
  },
  {
    id: "bugatti-bolide",
    name: "Bolide",
    image: bugattiDivo,
    power: "1,578 hp",
    topSpeed: "236 mph",
    price: "4,200,000",
    configures: "Configure",
  },
  {
    id: "bugatti-mistral-roadster",
    name: "Mistral Roadster",
    image: bugattiMistral,
    power: "1,578 hp",
    topSpeed: "261 mph",
    price: "5,000,000",
    configures: "Configure",
  },
];

function Bugatti() {
  const navigate = useNavigate();

  const scrollToModels = () => {
    document.getElementById("bugatti-models")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleConfigure = (id) => {
    navigate(`/configure/${id}`);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#080808] text-white">
      <section className="mx-auto max-w-[1600px] px-4 pt-4 sm:px-6 lg:px-10">
        <div className="group relative min-h-[430px] overflow-hidden rounded-2xl border border-white/10 sm:min-h-[520px] lg:min-h-[600px]">
          <img
            src={heroImage}
            alt="Bugatti luxury hypercar"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-[1.02]"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/35 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/10" />

          <div className="relative flex min-h-[430px] flex-col justify-end p-6 sm:min-h-[520px] sm:p-10 lg:min-h-[600px] lg:p-16">
            <div className="max-w-2xl">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-blue-500" />

                <p className="text-xs font-medium uppercase tracking-[0.3em] text-blue-400 sm:text-sm">
                  Molsheim, France · Est. 1909
                </p>
              </div>

              <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl lg:text-8xl">
                BUGATTI
              </h1>

              <p className="mt-5 max-w-lg text-sm leading-7 text-gray-300 sm:text-base">
                The art of automotive excellence. Discover extraordinary
                engineering, timeless design, and uncompromising performance.
              </p>

              <button
                type="button"
                onClick={scrollToModels}
                className="mt-8 inline-flex items-center gap-4 border border-white/40 px-6 py-3.5 text-sm font-medium transition duration-300 hover:border-blue-500 hover:bg-blue-600"
              >
                Explore the collection
                <span aria-hidden="true">↘</span>
              </button>
            </div>

            <div className="mt-10 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-gray-400 sm:absolute sm:bottom-10 sm:right-10 sm:mt-0">
              <span className="h-2 w-2 rounded-full bg-blue-500" />
              Extraordinary by design
            </div>
          </div>
        </div>
      </section>

      <section
        id="bugatti-models"
        className="mx-auto max-w-[1600px] scroll-mt-8 px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24"
      >
        <div className="mb-10 flex flex-col justify-between gap-5 border-b border-white/10 pb-8 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-400">
              The Bugatti Collection
            </p>

            <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl">
              Born to exceed.
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-gray-400">
            Discover machines where cutting-edge technology meets
            extraordinary craftsmanship.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {models.map((model, index) => (
            <article
              key={model.id}
              className="group flex min-w-0 flex-col border border-white/10 bg-[#0d0d0d] transition duration-300 hover:border-white/25"
            >
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                <span className="text-xs uppercase tracking-[0.2em] text-gray-500">
                  Hypercar
                </span>

                <span className="text-xs tabular-nums text-gray-500">
                  0{index + 1} / 0{models.length}
                </span>
              </div>

              <div className="min-w-0">
                <Layout
                  id={model.id}
                  img={model.image}
                  name={model.name}
                  power="Power"
                  powerNum={model.power}
                  speed="TOP SPEED"
                  speedNum={model.topSpeed}
                  price={model.price}
                  configures={model.configures}
                  onConfigure={() => handleConfigure(model.id)}
                />
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs leading-5 text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>BUGATTI — The pursuit of perfection.</p>
          <p>Performance. Precision. Prestige.</p>
        </div>
      </section>
    </main>
  );
}

export default Bugatti;
