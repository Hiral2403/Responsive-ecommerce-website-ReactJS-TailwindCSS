import React from "react";
import { FaShoppingCart, FaTruck, FaHeadset } from "react-icons/fa";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      {/* Hero Section */}
      <div className="bg-red-500 text-white w-full py-16 text-center">
        <h1 className="text-5xl font-bold">About Us</h1>
        <p className="text-lg mt-2">Your one-stop destination for premium electronics</p>
      </div>

      {/* About Content */}
      <div className="max-w-4xl text-center mt-10 px-6">
        <h2 className="text-3xl font-semibold text-gray-800">Who We Are</h2>
        <p className="text-gray-600 text-lg mt-4">
        Welcome to <strong>ESHOP</strong>, your ultimate destination for premium electronics! We are passionate
        about bringing you the latest technology at unbeatable prices, ensuring a seamless and
        enjoyable shopping experience. Whether you're looking for high-quality headphones, smart 
        gadgets, or cutting-edge laptops, ESHOP has got you covered.
        </p>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-5xl">
        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
          <FaShoppingCart className="text-red-500 text-5xl" />
          <h3 className="text-xl font-semibold mt-4">Quality Products</h3>
          <p className="text-gray-600 text-center mt-2">We bring you top-notch electronic devices with guaranteed quality.</p>
        </div>
        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
          <FaTruck className="text-red-500 text-5xl" />
          <h3 className="text-xl font-semibold mt-4">Fast Delivery</h3>
          <p className="text-gray-600 text-center mt-2">Quick and reliable shipping ensures you get your order on time.</p>
        </div>
        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
          <FaHeadset className="text-red-500 text-5xl" />
          <h3 className="text-xl font-semibold mt-4">24/7 Support</h3>
          <p className="text-gray-600 text-center mt-2">Need help? Our support team is available anytime, anywhere.</p>
        </div>
      </div>

      {/* Call-to-Action Button */}
      <div className="mt-10">
        <a href="/shop">
          <button className="bg-red-500 text-white px-6 py-3 rounded-full text-lg font-semibold uppercase transition hover:bg-red-600 hover:scale-105">
            Shop Now
          </button>
        </a>
      </div>
    </div>
  );
};

export default About;
