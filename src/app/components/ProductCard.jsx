import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="rounded-2xl shadow-md p-4 bg-white hover:shadow-lg transition-shadow">
      {product["image-url"] && (
        <img
          src={product["image-url"]}
          alt={product.title} // alternativ text för skärmuppläsning
          className="w-full object-cover rounded-xs mb-4 text-black"
        />
      )}
      <h2 className="text-xl font-semibold mb-1 text-black">{product.title}</h2>
      {/* <p className="text-sm text-gray-600 mb-2">{product.description}</p> */}
      <p className="text-lg font-medium text-gray-800">{product.price} kr</p>
      <p className="text-sm text-gray-500 mt-1">
        {product.brand} {product.color} {product.size}
      </p>
    </div>
  );
};

export default ProductCard;
