import React from 'react';

const About = () => {
    return (
        <div className="max-w-xs rounded-lg overflow-hidden shadow-lg bg-white group relative">
            {/* Image */}
            <img
                src="https://via.placeholder.com/250x350"
                alt="Product"
                className="w-full h-64 object-cover"
            />

            {/* Product Info */}
            <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">Product Name</h3>
                <p className="text-sm text-gray-600 mt-1">Short description of the product.</p>
                <p className="text-lg font-bold text-gray-900 mt-3">$99.99</p>
            </div>

            {/* Hover button */}
            <button
                className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-6 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            >
                Add to Cart
            </button>
        </div>
    );
};

export default About;