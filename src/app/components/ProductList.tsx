"use client";

import React, { useState } from "react";
import products from "@/data/produkter.json";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const [selectedColor, setSelectedColor] = useState("");

  // skapar en lista av alla attributes, tar bort ogiltiga/tomma värden
  const allColors = Array.from(
    new Set(
      products
        .flatMap((product) => product.attributes)
        .map((v) => v.color?.toLowerCase())
        .filter((color) => color)
    )
  );

  // Filtrera produkter baserat på vald färg
  const filteredProducts = selectedColor
    ? products.filter((product) =>
        product.attributes.some(
          (variant) =>
            variant.color?.toLowerCase() === selectedColor.toLowerCase()
        )
      )
    : products;

  return (
    <div className="bg-gray-100 py-10 px-20">
      <div className="flex justify-end gap-1 mb-5">
        <label htmlFor="color-filter" className="font-medium">
          Sort by color:
        </label>
        <select
          id="color-filter"
          value={selectedColor}
          onChange={(e) => setSelectedColor(e.target.value)}
          className="cursor-pointer"
        >
          <option value="">All colors</option>
          {allColors.map((color) => (
            <option key={color} value={color}>
              {color.charAt(0).toUpperCase() + color.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {filteredProducts.map((product) => (
          <ProductCard key={product.title} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
