import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import p1 from "../../assets/product/p-1.jpg";
import p2 from "../../assets/product/p-2.jpg";
import p3 from "../../assets/product/p-3.jpg";
import p4 from "../../assets/product/p-4.jpg";
import p5 from "../../assets/product/p-5.jpg";
import p6 from "../../assets/product/p-7.jpg";

const products = [
  { id: 1, name: "Headphones", price: "$999", image: p1 },
  { id: 2, name: "Headphones", price: "$199", image: p2 },
  { id: 3, name: "Headphones", price: "$699", image: p3 },
  { id: 4, name: "Headphones", price: "$699", image: p4 },
  { id: 5, name: "Headphones", price: "$699", image: p5 },
  { id: 6, name: "Headphones", price: "$699", image: p6 },
];

const Shop = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
        Shop
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-lg rounded-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-2xl flex flex-col items-center"
          >
            <div className="relative w-48 h-48 overflow-hidden rounded-md">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
            <h2 className="text-2xl font-semibold mt-4 text-gray-900 text-center">
              {product.name}
            </h2>
            <p className="text-gray-600 text-lg text-center">{product.price}</p>
            <div className="mt-4">
              <button className="flex items-center justify-between gap-2 bg-red-500 text-white px-6 py-2 rounded-full text-lg font-semibold uppercase transition duration-300 hover:bg-red-600 hover:scale-105">
                Add to Cart <FaShoppingCart className="text-lg" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
