import React from "react";
import { useSearchParams } from "react-router-dom";
import Products from "../../products/product.json";
import Layout from "../Layouts/Layout";

function Shop() {
  const [searchParams] = useSearchParams();

  // Get category from URL
  const category = searchParams.get("category");

  // Filter products
  const filteredProducts = category
  ? Products.filter(
      (product) =>
        product.category?.toLowerCase() === category.toLowerCase()
    )
  : Products;

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
              power='Power'
              powerNum={item.power}
            />
          ))}
        </div>
      ) : (
        <div className="flex min-h-[300px] items-center justify-center">
          <div className="text-center">
            <h2 className="text-xl text-gray-300">
              No vehicles found
            </h2>

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

