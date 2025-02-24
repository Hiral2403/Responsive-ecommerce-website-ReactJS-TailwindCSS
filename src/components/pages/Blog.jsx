import React from "react";
import b1 from "../../assets/blogs/blog-1.jpg";
import b2 from "../../assets/blogs/blog-2.jpg";
import b3 from "../../assets/blogs/blog-3.jpg";

const blogs = [
  {
    id: 1,
    title: "Top 5 Gadgets You Need in 2025",
    description: "Discover the latest tech innovations that will change the way you live and work...",
    image: b1,
  },
  {
    id: 2,
    title: "How to Choose the Perfect Headphones",
    description: "From noise-canceling to wireless earbuds, find the best fit for your lifestyle...",
    image: b2,
  },
  {
    id: 3,
    title: "Laptops vs. Tablets: Which One Should You Buy?",
    description: "Struggling to decide between a laptop and a tablet? Here’s what you need to know...",
    image: b3,
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
        Our Latest Blogs
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white shadow-lg rounded-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div className="relative w-full h-48 overflow-hidden rounded-md">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
            <h2 className="text-2xl font-semibold mt-4 text-gray-900">
              {blog.title}
            </h2>
            <p className="text-gray-600 text-lg">
              {blog.description}
            </p>
            <div className="flex justify-center mt-4">
              <button className="bg-red-500 text-white px-6 py-2 rounded-full text-lg font-semibold uppercase transition duration-300 hover:bg-red-600 hover:scale-105">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
