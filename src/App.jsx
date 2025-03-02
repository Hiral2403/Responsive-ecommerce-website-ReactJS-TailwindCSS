import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Category from "./components/Category/Category";
import Category2 from "./components/Category/Category2";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import Products from "./components/Products/Products";
import ProductDetails from "./components/Products/ProductDetails";
import Blogs from "./components/Blogs/Blogs";
import Partners from "./components/Partners/Partners";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";
import Shop from "./components/pages/Shop";
import AOS from "aos";
import "aos/dist/aos.css";
import headphone from "./assets/hero/headphone.png";
import smartwatch2 from "./assets/category/smartwatch2-removebg-preview.png";
import About from "./components/pages/About";
import Blog from "./components/pages/Blog";

import Img1 from "./assets/product/p-1.jpg"
import Img2 from "./assets/product/p-2.jpg"
import Img3 from "./assets/product/p-3.jpg"
import Img4 from "./assets/product/p-4.jpg"
import Img5 from "./assets/product/p-5.jpg";
import Img6 from "./assets/product/p-7.jpg";
const products = [
  { id: 1, title: "Boat Headphone", img: Img1, price: 120, description: "High-quality sound." },
  { id: 2, title: "Rocky Mountain", img: Img2, price: 420, description: "Durable and stylish." },
  { id: 3, title: "Goggles", img: Img3, price: 320, description: "Protective eyewear." },
  { id: 4, title: "Headphone", img: Img4, price: 320, description: "Protective eyewear." },
  { id: 5, title: "Goggles", img: Img5, price: 320, description: "Protective eyewear." },
  { id: 6, title: "Headphone", img: Img6, price: 320, description: "Protective eyewear." },
]; 

const BannerData = {
  discount: "30% OFF",
  title: "Fine SMile",
  date: "10 Jan to 28 Jan",
  image: headphone,
  title2: "Air Solo Bass",
  title3: "Winter Sale",
  title4: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, voluptatum",
  bgColor: "#f42c37",
};

const BannerData2 = {
  discount: "30% OFF",
  title: "Happy Hours",
  date: "14 Jan to 28 Jan",
  image: smartwatch2,
  title2: "Smart Solo",
  title3: "Winter Sale",
  title4: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, voluptatum",
  bgColor: "#2dcc6f",
};

const App = () => {
  const [orderPopup, setOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
      offset: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <Router>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
        <Navbar handleOrderPopup={handleOrderPopup} />

        {/* Define Routes */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero handleOrderPopup={handleOrderPopup} />
                <Category />
                <Category2 />
                <Services />
                <Banner data={BannerData} />
                <Products />
                <Banner data={BannerData2} />
                <Blogs />
                <Partners />
              </>
            }
          />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/product/:id" element={<ProductDetails products={products} />} />
        </Routes>

        <Footer />
        <Popup orderPopup={orderPopup} handleOrderPopup={handleOrderPopup} />
      </div>
    </Router>
  );
};

export default App;
