import React from 'react';
import { useParams } from 'react-router-dom';  

const ProductDetails = ({ products }) => {
    const { id } = useParams();
    const product = products.find((data) => data.id === parseInt(id));

    if (!product) {
        return <h2 className="text-center text-red-500">Product not found</h2>;
    }

    return (
        <div className="max-w-4xl mx-auto p-5">
            <img src={product.img} alt={product.title} className="w-full max-h-[500px] object-contain rounded-md" />
            <h1 className="text-3xl font-bold mt-4 text-center">{product.title}</h1>
            <p className="text-gray-600 text-lg mt-2 text-center">${product.price}</p>
            <p className="mt-4 text-center">{product.description}</p>
        </div>
    );
};

export default ProductDetails;
