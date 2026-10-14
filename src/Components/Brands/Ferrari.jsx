import React from "react";
import { useNavigate } from "react-router-dom";

import heroImage from "../../assets/ChatGPT Image Aug 31, 2026, 01_00_08 PM.png";
import Layout from "../Layouts/Layout";

import ferrari296 from "../../assets/ferrari/Ferrari SF90 XX 🐎.jfif";
import ferrariSF90 from "../../assets/ferrari/Ferrari 812_.jfif";
import ferrariPurosangue from "../../assets/ferrari/Ferrari Purosangue.jfif";

const models = [
  {
    id: "ferrari-296-gtb",
    name: "296 GTB",
    image: ferrari296,
    power: "818 hp",
    topSpeed: "205 mph",
    price: "322,000",
    configures: "Configure",
  },
  {
    id: "ferrari-sf90-stradale",
    name: "SF90 Stradale",
    image: ferrariSF90,
    power: "986 hp",
    topSpeed: "211 mph",
    price: "625,000",
    configures: "Configure",
  },
  {
    id: "ferrari-purosangue",
    name: "Purosangue",
    image: ferrariPurosangue,
    power: "715 hp",
    topSpeed: "193 mph",
    price: "398,000",
    configures: "Configure",
  },
];

function Ferrari() {
  const navigate = useNavigate();

  const scrollToModels = () => {
    document.getElementById("ferrari-models")?.scrollIntoView({
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
            alt="Ferrari performance cars"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/35 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/10" />

          <div className="relative flex min-h-[430px] flex-col justify-end p-6 sm:min-h-[520px] sm:p-10 lg:min-h-[600px] lg:p-16">
            <div className="max-w-2xl">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-red-500" />
                <p className="text-xs font-medium uppercase tracking-[0.3em] text-red-400 sm:text-sm">
                  Maranello, Italy · Est. 1947
                </p>
              </div>
              <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl lg:text-8xl">
                FERRARI
              </h1>
              <p className="mt-5 max-w-lg text-sm leading-7 text-gray-300 sm:text-base">
                Italian passion engineered for the road and the track. Explore a
                collection shaped by racing heritage, precision, and unmistakable design.
              </p>
              <button
                type="button"
                onClick={scrollToModels}
                className="mt-8 inline-flex items-center gap-4 border border-white/40 px-6 py-3.5 text-sm font-medium transition duration-300 hover:border-red-500 hover:bg-red-600"
              >
                Explore the collection <span aria-hidden="true">↘</span>
              </button>
            </div>
            <div className="mt-10 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-gray-400 sm:absolute sm:bottom-10 sm:right-10 sm:mt-0">
              <span className="h-2 w-2 rounded-full bg-red-500" />
              Driven by passion
            </div>
          </div>
        </div>
      </section>

      <section id="ferrari-models" className="mx-auto max-w-[1600px] scroll-mt-8 px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
        <div className="mb-10 flex flex-col justify-between gap-5 border-b border-white/10 pb-8 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-red-400">The Ferrari Collection</p>
            <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl">Born to perform.</h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-gray-400">
            Discover performance machines where racing innovation meets Italian craftsmanship.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {models.map((model, index) => (
            <article key={model.id} className="group flex min-w-0 flex-col border border-white/10 bg-[#0d0d0d] transition duration-300 hover:border-white/25">
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                <span className="text-xs uppercase tracking-[0.2em] text-gray-500">Performance</span>
                <span className="text-xs tabular-nums text-gray-500">0{index + 1} / 0{models.length}</span>
              </div>
              <div className="min-w-0">
                <Layout id={model.id} img={model.image} name={model.name} power="Power" powerNum={model.power} speed="TOP SPEED" speedNum={model.topSpeed} price={model.price} configures={model.configures} onConfigure={() => handleConfigure(model.id)} />
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs leading-5 text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>FERRARI — Driven by passion.</p><p>Racing. Innovation. Emotion.</p>
        </div>
      </section>
    </main>
  );
}

export default Ferrari;
