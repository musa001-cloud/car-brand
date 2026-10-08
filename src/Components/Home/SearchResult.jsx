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
              <div
                key={item.id}
                className="group overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-4 sm:p-5">
                  <h3 className="truncate text-base font-semibold text-gray-900 sm:text-lg">
                    {item.name}
                  </h3>

                  <div className="mt-2 flex items-center justify-between gap-3">
                    <p className="text-lg font-bold text-blue-600 sm:text-xl">
                      ${item.price}
                    </p>

                    {item.category && (
                      <span className="max-w-[50%] truncate text-xs text-gray-500 sm:text-sm">
                        {item.category}
                      </span>
                    )}
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