import React from "react";
import { useNavigate } from "react-router-dom";
import image from "../../assets/ChatGPT Image Aug 31, 2026, 01_00_08 PM.png";
import Layout from "../Layouts/Layout";
import ferrari1 from "../../assets/ferrari/Ferrari SF90 XX 🐎.jfif";
import ferrari2 from "../../assets/ferrari/Ferrari 812_.jfif";
import ferrari3 from "../../assets/ferrari/Ferrari Purosangue.jfif";

const models = [
  {
    id: "ferrari-296-gtb",
    img: ferrari1,
    name: "296 GTB",
    power: "Power",
    powerNum: "818 hp",
    speed: "TOP SPEED",
    speedNum: "205 mph",
    price: "322,000",
    configures: "Configure",
  },
  {
    id: "ferrari-sf90-stradale",
    img: ferrari2,
    name: "SF90 Stradale",
    power: "Power",
    powerNum: "986 hp",
    speed: "TOP SPEED",
    speedNum: "211 mph",
    price: "625,000",
    configures: "Configure",
  },
  {
    id: "ferrari-purosangue",
    img: ferrari3,
    name: "Purosangue",
    power: "Power",
    powerNum: "715 hp",
    speed: "TOP SPEED",
    speedNum: "193 mph",
    price: "398,000",
    configures: "Configure",
  },
];

function Ferrari() {
  const navigate = useNavigate();

  const handleConfigure = (model) => {
    navigate(`/configure/${model.id}`);
  };

  return (
    <div className="min-h-screen bg-black text-white md:px-[100px]">
      <div className="relative">
        <img
          className="h-[350px] w-full rounded-lg border-2 border-red-600 object-cover"
          src={image}
          alt="Ferrari"
        />

        <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black via-black/40 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 grid grid-cols-1 items-end gap-4 px-6 pb-6 text-white sm:grid-cols-[1fr_auto] sm:px-10">
          <div>
            <p className="text-sm text-red-600">Maranello, Italy · Est. 1947</p>
            <h1 className="mt-1 text-3xl font-semibold sm:text-4xl">
              Ferrari
            </h1>
            <p className="mt-2 max-w-md text-sm text-gray-300">
              Ferrari brings together racing heritage, Italian design, and exhilarating performance in cars built for the road and the track.
            </p>
          </div>

          <div className="flex sm:justify-end">
            <button
              type="button"
              onClick={() =>
                document
                  .getElementById("ferrari-models")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="rounded-md border border-white px-4 py-2 text-sm transition-colors hover:border-red-600 hover:bg-red-600"
            >
              3 Models ↓
            </button>
          </div>
        </div>
      </div>

      <div
        id="ferrari-models"
        className="grid grid-cols-1 gap-6 px-6 py-10 sm:grid-cols-2 sm:px-10 lg:grid-cols-3 lg:px-16"
      >
        {models.map((model) => (
          <div key={model.id} className="flex flex-col">
            <Layout
              id={model.id}
              img={model.img}
              name={model.name}
              power={model.power}
              powerNum={model.powerNum}
              speed={model.speed}
              speedNum={model.speedNum}
              price={model.price}
              configures={model.configures}
            />
            <button
              type="button"
              onClick={() => handleConfigure(model)}
              className="mt-3 w-full rounded-md bg-red-600 px-5 py-3 font-medium text-white transition hover:bg-red-500"
            >
              Configure {model.name} →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Ferrari;
