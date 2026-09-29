import React, { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import Products from "../../products/product.json";
import Layout from "../Layouts/Layout";

// Fisher-Yates shuffle (unbiased, returns a new array)
function shuffle(list) {
  const arr = [...list];

  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr;
}

function Shop() {
  const [searchParams] = useSearchParams();

  // Get category from URL
  const category = searchParams.get("category");

  // Filter + shuffle. useMemo keeps the order stable across re-renders
  // and only reshuffles when the category changes (or on page reload).
  const filteredProducts = useMemo(() => {
    const filtered = category
      ? Products.filter(
          (product) =>
            product.category?.toLowerCase() === category.toLowerCase()
        )
      : Products;

    return shuffle(filtered);
  }, [category]);

  return (
    <div className="min-h-screen bg-black px-5 py-10 text-white sm:px-10 lg:px-[100px]">
      {/* Header */}
      <div className="mb-10">
        <p className="text-xs font-medium tracking-[0.35em] text-green-500">
          APEX MOTORS
        </p>

        <h1 className="mt-2 text-4xl font-light uppercase">
          {category || "All Vehicles"}
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          {filteredProducts.length} vehicle
          {filteredProducts.length !== 1 ? "s" : ""} available
        </p>
      </div>

      {/* Products */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((item) => (
            <Layout
              key={item.id}
              img={item.image}
              name={item.name}
              price={item.price}
              power="Power"
              powerNum={item.power}
              speed="TOP SPEED"
              speedNum={item.topspeed}
              configures="Configure"
            />
          ))}
        </div>
      ) : (
        <div className="flex min-h-[300px] items-center justify-center">
          <div className="text-center">
            <h2 className="text-xl text-gray-300">No vehicles found</h2>

            <p className="mt-2 text-sm text-gray-600">
              There are no vehicles in the "{category}" category.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Shop;
