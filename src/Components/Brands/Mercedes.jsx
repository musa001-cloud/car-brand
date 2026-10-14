import React from "react";
import { useNavigate } from "react-router-dom";
import image from "../../assets/Image.png";
import Layout from "../Layouts/Layout";
import mercedes from "../../assets/benze/download.png";
import mercedes2 from "../../assets/benze/Mercedes Benz AMG g63.png";
import mercedes3 from "../../assets/benze/Mercedes-Benz SL63 .png";

const models = [
  {
    id: "mercedes-amg-gt-blue-series",
    img: mercedes,
    name: "AMG GT Blue Series",
    power: "Power",
    powerNum: "469 hp",
    speed: "TOP SPEED",
    speedNum: "202 mph",
    price: "135,000",
    configures: "Configure",
  },
  {
    id: "mercedes-sl63-amg",
    img: mercedes3,
    name: "SL63 AMG",
    power: "Power",
    powerNum: "577 hp",
    speed: "TOP SPEED",
    speedNum: "196 mph",
    price: "178,000",
    configures: "Configure",
  },
  {
    id: "mercedes-amg-g63",
    img: mercedes2,
    name: "AMG G63",
    power: "Power",
    powerNum: "585 hp",
    speed: "TOP SPEED",
    speedNum: "137 mph",
    price: "192,000",
    configures: "Configure",
  },
];

function MercedesAMG() {
  const navigate = useNavigate();

  const handleConfigure = (model) => {
    navigate(`/configure/${model.id}`);
  };

  return (
    <div className="min-h-screen bg-black text-white md:px-[100px]">
      <div className="relative">
        <img
          className="h-[350px] w-full rounded-lg border-2 border-green-500 object-cover"
          src={image}
          alt="Mercedes-AMG"
        />

        <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black via-black/40 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 grid grid-cols-1 items-end gap-4 px-6 pb-6 text-white sm:grid-cols-[1fr_auto] sm:px-10">
          <div>
            <p className="text-sm text-green-500">Affalterbach, Germany · Est. 1967</p>
            <h1 className="mt-1 text-3xl font-semibold sm:text-4xl">
              Mercedes-AMG
            </h1>
            <p className="mt-2 max-w-md text-sm text-gray-300">
              Mercedes-AMG blends hand-built engineering, refined luxury, and motorsport-inspired performance into distinctive road cars.
            </p>
          </div>

          <div className="flex sm:justify-end">
            <button
              type="button"
              onClick={() =>
                document
                  .getElementById("mercedes-models")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="rounded-md border border-white px-4 py-2 text-sm transition-colors hover:border-green-500 hover:bg-green-500"
            >
              3 Models ↓
            </button>
          </div>
        </div>
      </div>

      <div
        id="mercedes-models"
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
              className="mt-3 w-full rounded-md bg-green-500 px-5 py-3 font-medium text-white transition hover:bg-green-400"
            >
              Configure {model.name} →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MercedesAMG;
