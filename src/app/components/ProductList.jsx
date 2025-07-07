"use client";

import React, { useState } from "react";
import produkter from "@/data/produkter.json";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const [selectedColor, setSelectedColor] = useState("");

  const sortColors = Array.from(
    new Set(
      produkter.map((p) => p.color?.toLowerCase()).filter((color) => color) // skapar en lista, tar bort ogiltiga/tomma värden
    )
  );

  const filteredProducts = selectedColor
    ? produkter.filter(
        (product) =>
          product.color?.toLowerCase() === selectedColor.toLowerCase()
      )
    : produkter; // filtrerar på vald färg, om ingen färg är vald visas alla produkter

  return (
    <div className="bg-gray-100 py-10 px-20">
      <div className="flex justify-end gap-1 mb-5">
        <label htmlFor="filter" className="font-medium">
          Sort by
        </label>
        <select
          className="cursor-pointer"
          value={selectedColor}
          name="filter"
          id="filter"
          onChange={(e) => setSelectedColor(e.target.value)}
        >
          <option value="">All colors</option>
          {sortColors.map((color) => (
            <option key={color} value={color}>
              {color.charAt(0).toUpperCase() + color.slice(1)}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {/* Loopar igenom varje produkt i JSON-filen och renderar ett produktkort */}
        {filteredProducts.map((product) => (
          <ProductCard key={product["article-number"]} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
