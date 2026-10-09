import React from "react";
import { useSearchParams } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import Products from "../../products/product.json";
import Nav from "../Home/NavBar";

function SearchResult() {
  const [params] = useSearchParams();
  const query = params.get("query") || "";
  const searchValue = query.toLowerCase();

  const results = Products.filter((p) =>
    [p.name, p.category, p.price].some((value) =>
      value?.toString().toLowerCase().includes(searchValue)
    )
  );

  return (
    <div className="min-h-screen bg-black">
      <Nav />

      {results.length === 0 ? (
        <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
          <FaSearch className="mb-5 text-4xl text-gray-500 sm:text-5xl" />

          <p className="max-w-xl text-lg text-gray-500 sm:text-xl md:text-2xl">
            Sorry, there are no results for "{searchValue}"
          </p>
        </div>
      ) : (
        <section className="w-full px-4 py-8 sm:px-6 sm:py-10 md:px-10 lg:px-16 xl:px-24">
          
          <h2 className="mb-8 text-center text-lg font-semibold text-white sm:text-xl md:mb-10 md:text-2xl lg:text-3xl">
            Your Search Results For "{searchValue}"
          </h2>

          <div className="mx-auto grid w-full max-w-[1600px] grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
            {results.map((item) => (
              <div className="group flex flex-col bg-gray-900 border border-gray-700 
    rounded-md overflow-hidden text-white hover:border-gray-500 transition-colors">
      <div className="overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-4 flex flex-col gap-3">
        <h1 className="text-xl font-[Cormorant_Garamond] font-semibold">{item.name}</h1>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-xs text-gray-400">power</p>
            <p className="text-base font-mono font-medium">{item.power}</p>
          </div>
          <div>
            <p className="text-xs text-gray-400">speed</p>
            <p className="text-base font-mono font-medium">{item.topspeed}</p>
          </div>
        </div>

        <hr className="border-gray-700" />

        <div className="flex justify-between items-center">
          <p className="font-semibold font-[Cormorant_Garamond] text-lg">${item.price}</p>
          <p className="text-sm text-gray-300 underline cursor-pointer hover:text-white">
            configures
          </p>
        </div>
      </div>
          </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export default SearchResult;