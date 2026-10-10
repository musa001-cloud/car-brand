import React from "react";
import { useNavigate } from "react-router-dom";
import image from "../../assets/Image 567.png";
import Layout from "../Layouts/Layout";
import bugatti1 from "../../assets/benze/Bugatti Chiron Pur Sport.png";
import bugatti2 from "../../assets/benze/bugatti divo_.png";
import bugatti3 from "../../assets/benze/The Bugatti W16 Mistral.png";

const models = [
  {
    id: "bugatti-chiron-super-sport",
    img: bugatti1,
    name: "Chiron Super Sport",
    power: "Power",
    powerNum: "1,578 hp",
    speed: "TOP SPEED",
    speedNum: "273 mph",
    price: "3,800,000",
    configures: "Configure",
  },
  {
    id: "bugatti-bolide",
    img: bugatti2,
    name: "Bolide",
    power: "Power",
    powerNum: "1,578 hp",
    speed: "TOP SPEED",
    speedNum: "236 mph",
    price: "4,200,000",
    configures: "Configure",
  },
  {
    id: "bugatti-mistral-roadster",
    img: bugatti3,
    name: "Mistral Roadster",
    power: "Power",
    powerNum: "1,578 hp",
    speed: "TOP SPEED",
    speedNum: "261 mph",
    price: "5,000,000",
    configures: "Configure",
  },
];

function Bugatti() {
  const navigate = useNavigate();

  const handleConfigure = (model) => {
    navigate(`/configure/${model.id}`);
  };

  return (
    <div className="min-h-screen bg-black text-white md:px-[100px]">
      <div className="relative">
        <img
          className="h-[350px] w-full rounded-lg border-2 border-blue-600 object-cover"
          src={image}
          alt="Bugatti"
        />

        <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black via-black/40 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 grid grid-cols-1 items-end gap-4 px-6 pb-6 text-white sm:grid-cols-[1fr_auto] sm:px-10">
          <div>
            <p className="text-sm text-blue-400">
              Molsheim, France · Est. 1909
            </p>

            <h1 className="mt-1 text-3xl font-semibold sm:text-4xl">
              Bugatti
            </h1>

            <p className="mt-2 max-w-md text-sm text-gray-300">
              Bugatti combines extraordinary engineering, handcrafted luxury,
              and remarkable performance in its hypercars.
            </p>
          </div>

          <div className="flex sm:justify-end">
            <button
              type="button"
              onClick={() =>
                document
                  .getElementById("bugatti-models")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="rounded-md border border-white px-4 py-2 text-sm transition-colors hover:border-blue-600 hover:bg-blue-600"
            >
              3 Models ↓
            </button>
          </div>
        </div>
      </div>

      <div
        id="bugatti-models"
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

            {/* This button ensures the selected Bugatti is passed to Configure */}
            <button
              type="button"
              onClick={() => handleConfigure(model)}
              className="mt-3 w-full rounded-md bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-500"
            >
              Configure {model.name} →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Bugatti;
