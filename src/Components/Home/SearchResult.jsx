import React from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import Products from "../../products/product.json";
import Nav from "../Home/NavBar";

function SearchResult() {
  const [params] = useSearchParams();
  const navigate = useNavigate();

  const query = params.get("query") || "";
  const searchValue = query.toLowerCase().trim();

  const results = Products.filter((p) =>
    [p.name, p.category, p.price].some((value) =>
      value?.toString().toLowerCase().includes(searchValue)
    )
  );

  const handleConfigure = (id) => {
    if (id === undefined || id === null || id === "") {
      console.error("Product ID is missing.");
      return;
    }

    navigate(`/configure/${encodeURIComponent(id)}`);
  };

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
            {results.map((item, index) => (
              <div
                key={item.id ?? `${item.name}-${index}`}
                className="group flex flex-col overflow-hidden rounded-md border border-gray-700 bg-gray-900 text-white transition-colors hover:border-gray-500"
              >
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-1 flex-col gap-3 p-4">
                  <h3 className="font-[Cormorant_Garamond] text-xl font-semibold">
                    {item.name}
                  </h3>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-gray-400">Power</p>
                      <p className="font-mono text-base font-medium">
                        {item.power || "—"}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs text-gray-400">Top speed</p>
                      <p className="font-mono text-base font-medium">
                        {item.topspeed || "—"}
                      </p>
                    </div>
                  </div>

                  <hr className="border-gray-700" />

                  <div className="mt-auto flex items-center justify-between gap-3">
                    <p className="font-[Cormorant_Garamond] text-lg font-semibold">
                      ${item.price}
                    </p>

                    <button
                      type="button"
                      onClick={() => handleConfigure(item.id)}
                      className="cursor-pointer rounded-md border border-gray-500 px-4 py-2 text-sm text-gray-300 transition-colors hover:border-blue-600 hover:bg-blue-600 hover:text-white"
                    >
                      Configure
                    </button>
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
