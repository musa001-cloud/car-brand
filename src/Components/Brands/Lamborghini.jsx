import React from "react";
import { useNavigate } from "react-router-dom";

import heroImage from "../../assets/ChatGPT.png";
import Layout from "../Layouts/Layout";

import huracanTecnica from "../../assets/ferrari/download (2).jfif";
import urusPerformante from "../../assets/ferrari/urus.jfif";
import reventon from "../../assets/ferrari/Reventón.png";

const models = [
  {
    id: "lamborghini-huracan-tecnica",
    name: "Huracan Tecnica",
    image: huracanTecnica,
    power: "640 hp",
    topSpeed: "202 mph",
    price: "261,000",
    configures: "Configure",
  },
  {
    id: "lamborghini-urus-performante",
    name: "Urus Performante",
    image: urusPerformante,
    power: "666 hp",
    topSpeed: "193 mph",
    price: "247,000",
    configures: "Configure",
  },
  {
    id: "lamborghini-reventon",
    name: "Reventón",
    image: reventon,
    power: "715 hp",
    topSpeed: "221 mph",
    price: "1,600,000",
    configures: "Configure",
  },
];

function Lamborghini() {
  const navigate = useNavigate();

  const scrollToModels = () => {
    document.getElementById("lamborghini-models")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleConfigure = (id) => navigate(`/configure/${id}`);

  return (
    <main className="min-h-screen overflow-hidden bg-[#080808] text-white">
      <section className="mx-auto max-w-[1600px] px-4 pt-4 sm:px-6 lg:px-10">
        <div className="group relative min-h-[430px] overflow-hidden rounded-2xl border border-white/10 sm:min-h-[520px] lg:min-h-[600px]">
          <img
            src={heroImage}
            alt="Lamborghini supercars"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/35 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/10" />

          <div className="relative flex min-h-[430px] flex-col justify-end p-6 sm:min-h-[520px] sm:p-10 lg:min-h-[600px] lg:p-16">
            <div className="max-w-2xl">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-yellow-500" />
                <p className="text-xs font-medium uppercase tracking-[0.3em] text-yellow-400 sm:text-sm">
                  Sant’Agata Bolognese, Italy · Est. 1963
                </p>
              </div>
              <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl lg:text-8xl">LAMBORGHINI</h1>
              <p className="mt-5 max-w-lg text-sm leading-7 text-gray-300 sm:text-base">
                Fearless design, sharp engineering, and unmistakable Italian attitude.
                Discover machines built to turn every drive into an event.
              </p>
              <button type="button" onClick={scrollToModels} className="mt-8 inline-flex items-center gap-4 border border-white/40 px-6 py-3.5 text-sm font-medium transition duration-300 hover:border-yellow-500 hover:bg-yellow-600 hover:text-black">
                Explore the collection <span aria-hidden="true">↘</span>
              </button>
            </div>
            <div className="mt-10 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-gray-400 sm:absolute sm:bottom-10 sm:right-10 sm:mt-0">
              <span className="h-2 w-2 rounded-full bg-yellow-500" />
              Dare to be different
            </div>
          </div>
        </div>
      </section>

      <section id="lamborghini-models" className="mx-auto max-w-[1600px] scroll-mt-8 px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
        <div className="mb-10 flex flex-col justify-between gap-5 border-b border-white/10 pb-8 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400">The Lamborghini Collection</p>
            <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl">Power without compromise.</h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-gray-400">
            Explore dramatic silhouettes, bold performance, and precision engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {models.map((model, index) => (
            <article key={model.id} className="group flex min-w-0 flex-col border border-white/10 bg-[#0d0d0d] transition duration-300 hover:border-white/25">
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                <span className="text-xs uppercase tracking-[0.2em] text-gray-500">Supercar</span>
                <span className="text-xs tabular-nums text-gray-500">0{index + 1} / 0{models.length}</span>
              </div>
              <div className="min-w-0">
                <Layout id={model.id} img={model.image} name={model.name} power="Power" powerNum={model.power} speed="TOP SPEED" speedNum={model.topSpeed} price={model.price} configures={model.configures} onConfigure={() => handleConfigure(model.id)} />
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs leading-5 text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>LAMBORGHINI — Dare to be different.</p><p>Power. Design. Audacity.</p>
        </div>
      </section>
    </main>
  );
}

export default Lamborghini;
