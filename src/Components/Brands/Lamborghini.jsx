import React from "react";
import { useNavigate } from "react-router-dom";
import image from "../../assets/ChatGPT.png";
import Layout from "../Layouts/Layout";
import Lamborghini1 from "../../assets/ferrari/download (2).jfif";
import Lamborghini2 from "../../assets/ferrari/urus.jfif";
import Lamborghini3 from "../../assets/ferrari/Reventón.png";

const models = [
  {
    id: "lamborghini-huracan-tecnica",
    img: Lamborghini1,
    name: "Huracan Tecnica",
    power: "Power",
    powerNum: "640 hp",
    speed: "TOP SPEED",
    speedNum: "202 mph",
    price: "261,000",
    configures: "Configure",
  },
  {
    id: "lamborghini-urus-performante",
    img: Lamborghini2,
    name: "Urus Performante",
    power: "Power",
    powerNum: "666 hp",
    speed: "TOP SPEED",
    speedNum: "193 mph",
    price: "247,000",
    configures: "Configure",
  },
  {
    id: "lamborghini-reventon",
    img: Lamborghini3,
    name: "Reventón",
    power: "Power",
    powerNum: "715 hp",
    speed: "TOP SPEED",
    speedNum: "221 mph",
    price: "1,600,000",
    configures: "Configure",
  },
];

function Lamborghini() {
  const navigate = useNavigate();

  const handleConfigure = (model) => {
    navigate(`/configure/${model.id}`);
  };

  return (
    <div className="min-h-screen bg-black text-white md:px-[100px]">
      <div className="relative">
        <img
          className="h-[350px] w-full rounded-lg border-2 border-yellow-500 object-cover"
          src={image}
          alt="Lamborghini"
        />

        <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black via-black/40 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 grid grid-cols-1 items-end gap-4 px-6 pb-6 text-white sm:grid-cols-[1fr_auto] sm:px-10">
          <div>
            <p className="text-sm text-yellow-500">Sant’Agata Bolognese, Italy · Est. 1963</p>
            <h1 className="mt-1 text-3xl font-semibold sm:text-4xl">
              Lamborghini
            </h1>
            <p className="mt-2 max-w-md text-sm text-gray-300">
              Lamborghini pairs bold Italian design with dramatic performance, creating supercars and SUVs that refuse to blend in.
            </p>
          </div>

          <div className="flex sm:justify-end">
            <button
              type="button"
              onClick={() =>
                document
                  .getElementById("lamborghini-models")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="rounded-md border border-white px-4 py-2 text-sm transition-colors hover:border-yellow-500 hover:bg-yellow-500"
            >
              3 Models ↓
            </button>
          </div>
        </div>
      </div>

      <div
        id="lamborghini-models"
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
              className="mt-3 w-full rounded-md bg-yellow-500 px-5 py-3 font-medium text-white transition hover:bg-yellow-400"
            >
              Configure {model.name} →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Lamborghini;
